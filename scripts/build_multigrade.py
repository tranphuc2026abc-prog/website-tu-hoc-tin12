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

def knowledge_blocks(md, fallback=""):
    """Extract concise student-facing knowledge from expected products/objectives."""
    start = md.find("```text")
    if start < 0:
        raw = md
    else:
        start = md.find("\n", start) + 1
        end = md.find("\n```", start)
        raw = md[start:end if end >= 0 else len(md)]

    items = []
    for row in raw.split("[BẢNG]")[1:]:
        columns = row.split("|")
        left = columns[0].strip()
        value = columns[1].strip() if len(columns) > 1 else ""
        if (not value or left.upper().startswith("HOẠT ĐỘNG")
                or re.match(r"^(?:Câu\s+\d+|[A-D])$", left, re.I)
                or value.upper().startswith("NLS")
                or re.match(r"^(?:Câu\s+\d+|[A-D])$", value, re.I)):
            continue

        cut = re.search(
            r"Thực hành\s+\d+\s*:|Luyện tập\s+\d+\s*:|"
            r"Vận dụng\s+\d+\s*:|Câu hỏi củng cố|"
            r"3\.\s*HOẠT ĐỘNG LUYỆN TẬP|"
            r"\r?\nBước\s+\d+\s*:\s*GV|"
            r"\r?\nHoạt động\s+\d+\s*:", value, re.I)
        if cut:
            value = value[:cut.start()]
        value = re.sub(r"^Nhiệm vụ\s+\d+\s*:\s*", "", value, flags=re.I).strip()
        if not value or re.match(r"^(?:GV|HS thực hiện|Học sinh thực hiện)\b", value, re.I):
            continue

        if re.match(r"^\d+\.", value):
            title_match = re.match(r"^\d+\.\s*(.+?)(?=(?:[a-z]\)\s+)|(?:-\s)|(?:\+\s)|$)", value, re.I)
            if title_match:
                items.append({"x": "**" + title_match.group(1).strip() + "**"})
                value = value[title_match.end():]
        value = re.sub(r"(?<=[.!?])(?=[a-z]\)\s+)", "\n", value)
        value = re.sub(r"(?<=[.!?])(?=[A-ZÀ-Ỵ0-9])", "\n", value)
        for point in re.split(r"[-+]\s+|\n+", value):
            point = re.sub(r"\s+", " ", point).strip(" :;")
            if point and not re.match(r"^(?:Bước\s+\d+|GV|HS thực hiện)\b", point, re.I):
                items.append({"x": point})

    # Long lesson-plan products contain worked exercises; use the KHBD's concise learning goals instead.
    if (not items or sum(len(item["x"]) for item in items) > 1000) and fallback:
        items = [{"x": point.strip()} for point in re.split(r"\n+", fallback) if point.strip()]
    if not items:
        raise AssertionError("No concise knowledge extracted from KHBD")
    total = sum(len(item["x"]) for item in items)
    if total > 1000:
        text = re.sub(r"\s+", " ", " ".join(item["x"] for item in items)).strip()
        text = text[:997]
        boundary = text.rfind(" ")
        if boundary > 700:
            text = text[:boundary].rstrip(" ,;:")
        items = [{"x": text}]
    return [{"t": "ul", "i": items}]

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


def lesson_sections(md, title, goals, key):
    """Fill terms, examples, cautions and review points from the KHBD."""
    start = md.find(chr(96) * 3 + "text")
    if start >= 0:
        start = md.find("\n", start) + 1
        end = md.find("\n" + chr(96) * 3, start)
        raw = md[start:end if end >= 0 else len(md)]
    else:
        raw = md
    clean = re.sub(r"\[BẢNG\]\s*(?:HOẠT ĐỘNG CỦA GV VÀ HS|SẢN PHẨM DỰ KIẾN|NLS)\s*\|?", " ", raw, flags=re.I)
    clean = re.sub(r"\s*\|\s*", " ", clean)
    sentences = [re.sub(r"\s+", " ", x).strip(" -*\t:;")
                 for x in re.split(r"(?<=[.!?])\s+|\r?\n+", clean) if x.strip()]

    def student_facing(text):
        text = re.sub(r"^(?:Bước\s+\d+\s*:\s*)?(?:GV|HS|Học sinh)\b[^:]{0,100}:\s*", "", text, flags=re.I).strip()
        return (len(text) >= 20 and len(text) <= 360
                and not re.match(r"^(?:BÀI\s+\d+|CHỦ ĐỀ|Ngày soạn|Ngày dạy|I\. MỤC TIÊU|"
                                 r"II\. THIẾT BỊ|III\. TIẾN TRÌNH|HƯỚNG DẪN VỀ NHÀ|"
                                 r"Năng lực|Phẩm chất|[A-D]\.)", text, re.I)
                and not re.match(r"^(?:Bước\s+\d+|Nhiệm vụ\s+\d+|Hoạt động\s+\d+)", text, re.I))

    term_pairs, seen_terms = [], set()
    def add_term(term, definition):
        term = re.sub(r"\s+", " ", term).strip(" -*:;.")
        definition = re.sub(r"\s+", " ", definition).strip(" -*:;.")
        norm = re.sub(r"[^\w]+", "", term.lower())
        if (len(term) < 2 or len(term) > 80 or len(term.split()) > 7
                or len(definition) < 8 or norm in seen_terms
                or re.match(r"^(?:đây|đó|ngay bên|ở bên|ở phía|trong đó|sau đó|trước đó|như vậy|mỗi|các|một|khi|vì|do|với|nếu|bởi)\b", term, re.I)):
            return
        seen_terms.add(norm)
        term_pairs.append({"t": term, "d": definition[:300].rstrip()})

    # Prefer named lesson concepts and learning goals over incidental prose.
    for block in key:
        if block.get("t") == "ul":
            for item in block.get("i", []):
                text = item.get("x", "")
                heading = re.match(r"^\*\*(.+?)\*\*$", text)
                if heading:
                    add_term(heading.group(1), "Nội dung trọng tâm được nêu trong KHBD của bài.")
    verbs = r"(?:Phân biệt|Trình bày|Nêu|Hiểu|Biết|Nhận biết|Sử dụng|Thực hiện|Tạo|Viết|Xác định|Mô tả|Giải thích)"
    for goal in goals:
        goal = re.sub(r"\s+", " ", goal).strip()
        m = re.search(verbs + r"\s+(?:được\s+)?(.+)", goal, re.I)
        if m:
            term = re.split(r"[,;.]| để ", m.group(1))[0].strip()
            add_term(term, goal)
    for sentence in sentences:
        if not student_facing(sentence):
            continue
        definition = re.search(r"^(.{2,75}?)\s+(?:là|được gọi là|gọi là)\s+(.{12,})$", sentence, re.I)
        if definition:
            add_term(definition.group(1), sentence)
    if not term_pairs:
        add_term(title, goals[0] if goals else "Nội dung chính của bài học.")
    if len(term_pairs) < 3:
        add_term(title, goals[0] if goals else "Nội dung chính của bài học.")
        for goal in goals:
            m = re.search(verbs + r"\s+(?:được\s+)?(.+)", goal, re.I)
            if m:
                add_term(re.split(r"[,;.]| để ", m.group(1))[0], goal)
            if len(term_pairs) >= 5:
                break
    term_pairs = term_pairs[:6]

    # Keep examples explicitly present in the KHBD; if absent, use its expected student product.
    examples = []
    for sentence in sentences:
        if re.search(r"\b(?:Ví dụ|Chẳng hạn|Minh họa|Minh hoạ)\b", sentence, re.I) and student_facing(sentence):
            examples.append(sentence)
    if not examples:
        for row in raw.split("[BẢNG]")[1:]:
            columns = row.split("|")
            value = columns[1].strip() if len(columns) > 1 else ""
            if value and not value.upper().startswith(("SẢN PHẨM", "DỰ KIẾN")):
                for part in re.split(r"(?<=[.!?])\s+|\r?\n|[-+]\s+", value):
                    part = re.sub(r"\s+", " ", part).strip(" -*:;")
                    if student_facing(part) and not re.match(r"^(?:NLS|GV|HS thực hiện)", part, re.I):
                        examples.append(part)
                        if len(examples) >= 3:
                            break
            if len(examples) >= 3:
                break
    if not examples:
        examples = [goals[0] if goals else title + " trong một tình huống học tập."]
    examples = list(dict.fromkeys(examples))[:3]

    cautions = []
    for sentence in sentences:
        if re.search(r"\b(?:Lưu ý|Chú ý|Không nên|Tránh|Sai lầm|Nhầm lẫn|Lỗi)\b", sentence, re.I) and student_facing(sentence):
            cautions.append(sentence)
    if not cautions:
        risk_terms = r"thiết bị lạ|chưa từng đăng nhập|không nên|không được|không thể|bản quyền|mật khẩu|quyền riêng tư|cảnh báo|xác thực|xóa nhầm|mất dữ liệu|lộ thông tin|sai cú pháp|lỗi"
        for sentence in sentences:
            if re.search(risk_terms, sentence, re.I) and student_facing(sentence):
                cautions.append(sentence)
        if not cautions:
            cautions = ["Với chủ đề " + title + ", tránh nhầm khái niệm hoặc bỏ qua điều kiện của yêu cầu; hãy đối chiếu thao tác và kết quả với nội dung trọng tâm trong bài."]
    cautions = list(dict.fromkeys(cautions))[:3]

    reminders = []
    for block in key:
        texts = block.get("i", []) if block.get("t") == "ul" else [{"x": block.get("x", "")}]
        for item in texts:
            value = re.sub(r"\*\*", "", item.get("x", "")).strip()
            if value and not value.startswith("Nhiệm vụ"):
                reminders.append(value)
    if len(reminders) < 2:
        reminders.extend(x for x in goals if x not in reminders)
    reminders = list(dict.fromkeys(reminders))[:5]
    if not reminders:
        reminders = [title]
    return term_pairs, examples, cautions, reminders


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
        sec["key"] = knowledge_blocks(md, "\n".join(goals))
        terms, examples, cautions, reminders = lesson_sections(md, title, goals, sec["key"])
        sec["terms"] = [{"t": "ul", "i": [{"x": "**" + item["t"] + "** — " + item["d"]} for item in terms]}]
        sec["ex"] = [{"t": "ul", "i": [{"x": item} for item in examples]}]
        sec["err"] = [{"t": "ul", "i": [{"x": item} for item in cautions]}]
        sec["rem"] = [{"t": "ul", "i": [{"x": item} for item in reminders]}]
        assert terms and examples and cautions and reminders, lesson_id + " missing enriched lesson section"
        if acts:
            sec["steps"] = [{"t": "ul", "i": [{"x": x} for x in acts]}]
        lessons_data = {"sec": sec, "terms": terms, "txt": full_text, "src": str(path.relative_to(ROOT)).replace("\\", "/")}
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
