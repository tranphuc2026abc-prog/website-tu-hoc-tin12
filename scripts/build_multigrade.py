#!/usr/bin/env python3
"""Build Tin hoc 10/11 browser data from the KHBD Markdown and JSON banks."""
import json, re, sys
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='backslashreplace')

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / "nguon").resolve()
OUT = ROOT / "data"
REG = '(window.T=window.T||{L:{},Q:{}}).%s["%s"]=%s;\n'
SECTION_KEYS = ("obj", "key", "terms", "ex", "steps", "err", "rem")

def js(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"))

def find_topic(md, full_text):
    match = re.search(r"^## Chủ đề\s*$([\s\S]*?)(?=^## |\Z)", md, re.M | re.I)
    candidate = match.group(1).strip().splitlines()[0].strip() if match and match.group(1).strip() else ""
    if candidate and "không ghi" not in candidate.lower():
        return candidate
    found = re.findall(r"^(?:CHỦ ĐỀ|Chủ đề)\s*\d*\s*[:.]?\s*([^\r\n]+)", full_text, re.M | re.I)
    found = [x.strip().rstrip(".") for x in found if "không ghi" not in x.lower()]
    return found[0] if found else "Chủ đề chưa phân loại"

def section(md, heading, next_heading):
    m = re.search(r"^" + heading + r"\s*$([\s\S]*?)(?=^" + next_heading + r"\s*$|\Z)", md, re.M | re.I)
    return m.group(1).strip() if m else ""

def blocks(text):
    chunks = [x.strip() for x in re.split(r"\n\s*\n", text) if x.strip()]
    return [{"t": "p", "x": x} for x in chunks]

def question_records(doc, lesson_id):
    merged = []
    banks = doc.get("cau_hoi_goc", {}), doc.get("cau_hoi_bo_sung", {})
    for bank in banks:
        for key, typ in (("trac_nghiem", "mcq"), ("dung_sai", "tf"), ("tu_luan", "essay")):
            for raw in bank.get(key, []):
                q = {"id": raw["id"], "lesson": lesson_id, "st": "ok",
                     "src": raw.get("nguon", "KHBD"),
                     "type": typ, "q": raw.get("noi_dung", "")}
                if typ == "mcq":
                    options = raw.get("lua_chon", {})
                    if isinstance(options, dict):
                        q["opts"] = [{"k": k, "x": v} for k, v in options.items()]
                    else:
                        q["opts"] = [{"k": x.get("id"), "x": x.get("text", "")} for x in options]
                    q["ans"] = raw.get("dap_an", raw.get("answer"))
                    q["exp"] = raw.get("giai_thich", raw.get("explanation", ""))
                    assert len(q["opts"]) >= 2 and q["ans"] in [x["k"] for x in q["opts"]], q["id"]
                elif typ == "tf":
                    statements = raw.get("y_kien", {})
                    answers = raw.get("dap_an", {})
                    q["sts"] = []
                    if isinstance(statements, dict):
                        q["sts"] = [{"k": k, "x": v, "a": bool(answers[k]),
                                     "e": raw.get("giai_thich", "")} for k, v in statements.items()]
                    else:
                        q["sts"] = [{"k": x["id"], "x": x.get("statement", ""),
                                     "a": bool(x.get("answer")), "e": x.get("explanation", "")}
                                    for x in statements]
                    assert q["sts"], q["id"]
                else:
                    q.update({"kind": raw.get("muc_do", "Luyện tập"),
                              "ref": raw.get("chu_de", ""),
                              "hint": raw.get("dap_an_goi_y", raw.get("answer_guide", "")),
                              "pts": [], "nt": raw.get("giai_thich", "")})
                merged.append(q)
    assert len({q["id"] for q in merged}) == len(merged), lesson_id + " duplicate question id"
    return merged

def build_grade(grade, expected):
    folder = SRC / ("khoi-" + str(grade))
    lessons = sorted(folder.glob("BAI_[0-9][0-9].md"))
    assert len(lessons) == expected, "Grade %d: expected %d lesson Markdown files, got %d" % (grade, expected, len(lessons))
    topics, catalog_lessons, rel, qfiles = [], [], {}, []
    for n, path in enumerate(lessons, 1):
        md = path.read_text(encoding="utf-8")
        title_match = re.search(r"^#\s+Bài\s+\d+\.\s*(.+)$", md, re.M | re.I)
        assert title_match, "Missing lesson title: " + str(path)
        title = title_match.group(1).strip()
        code = re.search(r"```text\s*\n([\s\S]*?)\n```", md)
        full_text = code.group(1).strip() if code else md
        topic = find_topic(md, full_text)
        if topic not in topics:
            topics.append(topic)
        lesson_id = "ICT%d_B%02d" % (grade, n)
        obj_text = section(md, r"## Mục tiêu kiến thức từ KHBD", r"## Trọng tâm hoạt động")
        activities = section(md, r"## Trọng tâm hoạt động", r"## Nội dung KHBD đầy đủ đã trích xuất")
        goals = [x.strip("-* \t") for x in obj_text.splitlines() if x.strip() and not x.strip().startswith("Học xong bài này")]
        acts = [x.strip("-* \t") for x in activities.splitlines() if x.strip()]
        sec = {k: [] for k in SECTION_KEYS}
        if goals:
            sec["obj"] = [{"t": "ul", "i": [{"x": x} for x in goals]}]
        sec["key"] = blocks(full_text)
        if acts:
            sec["steps"] = [{"t": "ul", "i": [{"x": x} for x in acts]}]
        lessons_data = {"sec": sec, "terms": [], "txt": full_text, "src": str(path.relative_to(ROOT)).replace("\\", "/")}
        (OUT / "lessons").mkdir(parents=True, exist_ok=True)
        (OUT / "lessons" / (lesson_id + ".js")).write_text(REG % ("L", lesson_id, js(lessons_data)), encoding="utf-8")
        qpath = folder / "ngan-hang-cau-hoi" / ("BAI_%02d_QUESTIONS.json" % n)
        assert qpath.exists(), "Missing question bank: " + str(qpath)
        doc = json.loads(qpath.read_text(encoding="utf-8"))
        assert int(doc.get("bai_so", n)) == n and doc.get("ten_bai"), "Invalid question metadata: " + str(qpath)
        questions = question_records(doc, lesson_id)
        expected_count = int(doc.get("thong_ke", {}).get("tong_so_cau", len(questions)))
        assert len(questions) == expected_count, "Question count mismatch: " + str(qpath)
        (OUT / "questions").mkdir(parents=True, exist_ok=True)
        (OUT / "questions" / (lesson_id + ".js")).write_text(REG % ("Q", lesson_id, js(questions)), encoding="utf-8")
        qfiles.append(lesson_id)
        rel[lesson_id] = {"pre": [], "rel": [], "nx": ["ICT%d_B%02d" % (grade, n + 1)] if n < expected else [], "why": []}
        catalog_lessons.append({"id": lesson_id, "title": title, "n": n, "topic": topics.index(topic),
                                "src": path.relative_to(SRC).as_posix(), "tiet": 2, "grade": grade})
    # Topic indexes may shift if a later lesson introduces a topic.
    for item in catalog_lessons:
        topic_name = find_topic((folder / ("BAI_%02d.md" % item["n"])).read_text(encoding="utf-8"),
                                re.search(r"```text\s*\n([\s\S]*?)\n```", (folder / ("BAI_%02d.md" % item["n"])).read_text(encoding="utf-8")).group(1) if re.search(r"```text\s*\n([\s\S]*?)\n```", (folder / ("BAI_%02d.md" % item["n"])).read_text(encoding="utf-8")) else "")
        item["topic"] = topics.index(topic_name)
    cat = {"grade": grade, "courseTitle": "Tin học %d" % grade, "topics": topics, "rel": rel,
           "hk": {"HK1": [1, (expected + 1)//2], "HK2": [(expected + 1)//2 + 1, expected]},
           "qfiles": qfiles, "lessons": catalog_lessons}
    (OUT / ("catalog-%d.js" % grade)).write_text('(window.T=window.T||{L:{},Q:{}}).cat=' + js(cat) + ";\n", encoding="utf-8")
    print("Tin học %d: %d bài, %d câu hỏi" % (grade, expected, expected_count_total(qfiles, grade, folder)))

def expected_count_total(qfiles, grade, folder):
    return sum(int(json.loads((folder / "ngan-hang-cau-hoi" / ("BAI_%02d_QUESTIONS.json" % n)).read_text(encoding="utf-8")).get("thong_ke", {}).get("tong_so_cau", 0)) for n in range(1, len(qfiles)+1))

build_grade(10, 34)
build_grade(11, 31)
