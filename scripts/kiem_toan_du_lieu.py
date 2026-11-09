#!/usr/bin/env python3
"""Kiểm toán cấu trúc dữ liệu nguồn và dữ liệu website, không chấm thẩm định nội dung."""
import argparse
import difflib
import json
import re
import sys
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GRADE_SPECS = {10: (34, "nguon/khoi-10/ngan-hang-cau-hoi"),
                11: (31, "nguon/khoi-11/ngan-hang-cau-hoi"),
                12: (28, "nguon/ngan-hang-cau-hoi")}
TYPE_MAP = {"trac_nghiem": "mcq", "dung_sai": "tf", "tu_luan": "essay"}
CATALOGS = {10: "data/catalog-10.js", 11: "data/catalog-11.js", 12: "data/catalog.js"}

def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))

def parse_js_object(path, marker):
    text = path.read_text(encoding="utf-8")
    match = re.search(re.escape(marker) + r"(\{.*\});\s*$", text, re.S)
    if not match:
        raise ValueError("Không đọc được object trong " + str(path))
    return json.loads(match.group(1))

def parse_question_js(path):
    text = path.read_text(encoding="utf-8")
    match = re.search(r'\.Q\["([^"]+)"\]=(\[.*\]);\s*$', text, re.S)
    if not match:
        raise ValueError("Không đọc được mảng câu hỏi trong " + str(path))
    return match.group(1), json.loads(match.group(2))

def source_records(doc):
    rows = []
    for bank_name in ("cau_hoi_goc", "cau_hoi_bo_sung"):
        bank = doc.get(bank_name, {})
        if not isinstance(bank, dict):
            continue
        for source_type, app_type in TYPE_MAP.items():
            values = bank.get(source_type, [])
            if not isinstance(values, list):
                continue
            for q in values:
                if isinstance(q, dict):
                    rows.append((q, app_type, bank_name))
    return rows

def normalized_text(value):
    value = unicodedata.normalize("NFD", str(value or "").casefold()).replace("đ", "d")
    value = "".join(c for c in value if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", value).strip()

def q_stem(q):
    return q.get("q") or q.get("noi_dung") or ""

def source_lesson(path):
    number = re.search(r"BAI_(\d+)_QUESTIONS\.json$", path.name)
    if not number:
        return None
    grade = int(re.search(r"khối-(10|11)", path.as_posix()).group(1)) if "khối-" in path.as_posix() else 12
    return "ICT%d_B%02d" % (grade, int(number.group(1)))

def audit(root, baseline_path=None):
    errors, warnings = [], []
    result = {"repository": str(root), "grades": {}, "findings": {
        "errors": errors, "warnings": warnings, "duplicateStems": {},
        "normalization": {}, "missingSourceReferences": []}}
    union_source_ids, union_program_ids = set(), set()
    all_program_questions = {}
    for grade, (expected_lessons, source_folder) in GRADE_SPECS.items():
        catalog_path = root / CATALOGS[grade]
        catalog = parse_js_object(catalog_path, ".cat=")
        lessons = catalog.get("lessons", [])
        lesson_ids = [item.get("id") for item in lessons]
        expected_ids = ["ICT%d_B%02d" % (grade, n) for n in range(1, expected_lessons + 1)]
        if len(lessons) != expected_lessons:
            errors.append("Khối %d: catalog có %d bài, cần %d." % (grade, len(lessons), expected_lessons))
        if lesson_ids != expected_ids:
            errors.append("Khối %d: mã hoặc thứ tự bài không khớp dãy chuẩn." % grade)
        topics = catalog.get("topics", [])
        for lesson in lessons:
            topic = lesson.get("topic")
            if not isinstance(topic, int) or topic < 0 or topic >= len(topics):
                errors.append("%s: chỉ số chủ đề không hợp lệ." % lesson.get("id"))
        ranges = catalog.get("hk", {})
        covered = []
        for key in ("HK1", "HK2"):
            value = ranges.get(key)
            if not (isinstance(value, list) and len(value) == 2 and
                    all(isinstance(x, int) for x in value) and value[0] <= value[1]):
                errors.append("Khối %d: khoảng %s không hợp lệ." % (grade, key))
            else:
                covered.extend(range(value[0], value[1] + 1))
        if sorted(covered) != list(range(1, expected_lessons + 1)):
            errors.append("Khối %d: khoảng học kỳ thiếu hoặc lặp số bài." % grade)

        source_dir = root / source_folder
        source_files = sorted(source_dir.glob("BAI_*_QUESTIONS.json"))
        if len(source_files) != expected_lessons:
            errors.append("Khối %d: tìm thấy %d JSON nguồn, cần %d." %
                          (grade, len(source_files), expected_lessons))
        source_questions, source_ids, source_type_counts = [], [], Counter()
        per_source = {}
        for path in source_files:
            try:
                doc = read_json(path)
            except Exception as exc:
                errors.append("JSON nguồn lỗi %s: %s" % (path.relative_to(root), exc))
                continue
            expected = doc.get("thong_ke", {}).get("tong_so_cau")
            records = source_records(doc)
            lid = source_lesson(path)
            per_source[lid] = len(records)
            if expected is not None and len(records) != expected:
                errors.append("%s: thống kê khai %s nhưng chứa %d câu." %
                              (path.relative_to(root), expected, len(records)))
            for q, app_type, bank_name in records:
                qid = q.get("id")
                source_questions.append(q)
                source_ids.append(qid)
                source_type_counts[app_type] += 1
                if not qid or not q.get("noi_dung"):
                    errors.append("%s: câu nguồn thiếu mã hoặc nội dung." % path.relative_to(root))
                if app_type == "mcq":
                    opts = q.get("lua_chon")
                    if not isinstance(opts, dict) or len(opts) != 4 or q.get("dap_an") not in opts:
                        errors.append("%s: MCQ %s thiếu 4 phương án hoặc đáp án hợp lệ." %
                                      (path.relative_to(root), qid))
                elif app_type == "tf":
                    statements, answers = q.get("y_kien"), q.get("dap_an")
                    if not isinstance(statements, dict) or len(statements) != 4 or \
                            not isinstance(answers, dict) or set(statements) != set(answers) or \
                            not all(isinstance(v, bool) for v in answers.values()):
                        errors.append("%s: đúng/sai %s thiếu bốn mệnh đề/đáp án." %
                                      (path.relative_to(root), qid))
                elif app_type == "essay":
                    if not any(q.get(k) for k in ("dap_an_goi_y", "huong_dan_cham", "answer_guide")):
                        warnings.append("%s: tự luận %s chưa có hướng dẫn/đáp án gợi ý." %
                                        (path.relative_to(root), qid))
        duplicate_source_ids = [k for k, n in Counter(source_ids).items() if k and n > 1]
        if duplicate_source_ids:
            errors.append("Khối %d: mã nguồn trùng: %s" % (grade, ", ".join(duplicate_source_ids)))

        qfiles, program_questions = catalog.get("qfiles", []), []
        for qfile in qfiles:
            path = root / "data" / "questions" / (qfile + ".js")
            if not path.exists():
                errors.append("Khối %d: thiếu tệp câu hỏi %s." % (grade, path.relative_to(root)))
                continue
            try:
                file_id, questions = parse_question_js(path)
                if file_id != qfile:
                    errors.append("%s: mã trong tệp không khớp tên tệp." % path.relative_to(root))
            except Exception as exc:
                errors.append("Tệp câu hỏi lỗi %s: %s" % (path.relative_to(root), exc))
                continue
            program_questions.extend(questions)
            all_program_questions.update({q.get("id"): q for q in questions if q.get("id")})
        if len(qfiles) != expected_lessons:
            errors.append("Khối %d: catalog qfiles có %d bài, cần %d." % (grade, len(qfiles), expected_lessons))
        program_ids = [q.get("id") for q in program_questions]
        duplicate_program_ids = [k for k, n in Counter(program_ids).items() if k and n > 1]
        if duplicate_program_ids:
            errors.append("Khối %d: mã câu trong website bị trùng: %s" %
                          (grade, ", ".join(duplicate_program_ids)))
        known_lessons = set(lesson_ids)
        for q in program_questions:
            qid, lid, qtype = q.get("id"), q.get("lesson"), q.get("type")
            union_program_ids.add(qid)
            if not qid or not lid or not q.get("q"):
                errors.append("Khối %d: câu website thiếu id/lesson/nội dung (%s)." % (grade, qid))
            if lid not in known_lessons:
                errors.append("Câu %s mồ côi, gắn tới bài không có trong catalog: %s." % (qid, lid))
            if qtype == "mcq":
                opts = q.get("opts")
                if not isinstance(opts, list) or len(opts) != 4 or q.get("ans") not in [x.get("k") for x in opts]:
                    errors.append("MCQ %s thiếu bốn phương án hoặc đáp án hợp lệ." % qid)
            elif qtype == "tf":
                sts = q.get("sts")
                if not isinstance(sts, list) or len(sts) != 4 or not all(isinstance(x.get("a"), bool) for x in sts):
                    errors.append("Đúng/sai %s thiếu bốn mệnh đề/đáp án." % qid)
            elif qtype == "essay":
                if not q.get("hint"):
                    warnings.append("Tự luận website %s không có gợi ý đáp án." % qid)
            else:
                errors.append("Câu %s có loại không hợp lệ: %s." % (qid, qtype))
        source_set, program_set = set(source_ids), set(program_ids)
        union_source_ids.update(source_set)
        source_missing = sorted(source_set - program_set)
        program_extra = sorted(program_set - source_set)
        if source_missing:
            errors.append("Khối %d: %d mã nguồn JSON chưa có trong website: %s" %
                          (grade, len(source_missing), ", ".join(source_missing[:30])))
        if grade == 12 and program_extra:
            unmatched = [qid for qid in program_extra
                         if not str(all_program_questions.get(qid, {}).get("src", "")).startswith("NGAN_HANG_CAU_HOI.md")]
            if unmatched:
                errors.append("Khối 12: mã ngoài JSON không được dẫn nguồn Markdown: %s" % ", ".join(unmatched))
            else:
                warnings.append("Khối 12: %d câu ngoài JSON được dẫn từ NGAN_HANG_CAU_HOI.md; giữ nguyên." %
                                len(program_extra))
        elif program_extra:
            warnings.append("Khối %d: có %d câu ngoài JSON nguồn." % (grade, len(program_extra)))

        type_counts = Counter(q.get("type") for q in program_questions)
        per_lesson = []
        no_questions = []
        for lesson in lessons:
            lid = lesson.get("id")
            qs = [q for q in program_questions if q.get("lesson") == lid]
            per_lesson.append({"lessonId": lid, "count": len(qs),
                               "mcq": sum(q.get("type") == "mcq" for q in qs),
                               "trueFalse": sum(q.get("type") == "tf" for q in qs),
                               "essay": sum(q.get("type") == "essay" for q in qs),
                               "sourceJsonCount": per_source.get(lid, 0)})
            if not qs:
                no_questions.append(lid)
        if no_questions:
            errors.append("Khối %d: bài không có câu hỏi: %s" % (grade, ", ".join(no_questions)))

        # Duplicate question stems are review candidates, never deletion instructions.
        stem_groups = defaultdict(list)
        for q in program_questions:
            norm = normalized_text(q_stem(q))
            if norm:
                stem_groups[norm].append(q.get("id"))
        duplicates = [{"stem": stem, "ids": ids} for stem, ids in stem_groups.items() if len(ids) > 1]
        result["findings"]["duplicateStems"][str(grade)] = duplicates
        if duplicates:
            warnings.append("Khối %d: %d nhóm trùng câu chữ; chưa kết luận là bản ghi trùng." %
                            (grade, len(duplicates)))

        if grade == 10:
            topics = catalog.get("topics", [])
            unclassified = [l.get("id") for l in lessons
                            if str(topics[l.get("topic", -1)]).casefold() == "chủ đề chưa phân loại"]
            if unclassified:
                warnings.append("Khối 10 còn bài chưa phân loại: %s." % ", ".join(unclassified))
        for lesson in lessons:
            src = lesson.get("src")
            if src and not (root / src).exists():
                result["findings"]["missingSourceReferences"].append(
                    {"grade": grade, "lessonId": lesson.get("id"), "reference": src})

        result["grades"][str(grade)] = {
            "lessonCount": len(lessons), "programQuestionCount": len(program_questions),
            "sourceJsonQuestionCount": len(source_questions),
            "programTypes": dict(type_counts), "sourceJsonTypes": dict(source_type_counts),
            "programOnlyQuestionIds": program_extra, "sourceJsonMissingQuestionIds": source_missing,
            "perLesson": per_lesson, "duplicateSourceIds": duplicate_source_ids,
            "duplicateProgramIds": duplicate_program_ids}

    # Mechanical text checks: report only. This script does not edit learning content.
    counts = Counter()
    examples = []
    for path in sorted((root / "nguon").rglob("*.json")):
        try:
            doc = read_json(path)
        except Exception:
            continue
        def walk(value, location="$"):
            if isinstance(value, str):
                flags = []
                if unicodedata.normalize("NFC", value) != value: flags.append("khong_NFC")
                if value != value.strip(): flags.append("khoang_trang_dau_cuoi")
                if re.search(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]", value): flags.append("ky_tu_dieu_khien")
                if re.search(r"</?[A-Za-z][^>]*>", value): flags.append("markup_ro_ri")
                if re.search(r"([!?.,;:])\1+", value): flags.append("dau_cau_lap")
                if len(value) > 3000: flags.append("truong_dai_bat_thuong")
                for flag in flags:
                    counts[flag] += 1
                    if len(examples) < 100:
                        examples.append({"file": str(path.relative_to(root)), "field": location,
                                         "flag": flag, "value": value[:240]})
            elif isinstance(value, list):
                for index, child in enumerate(value):
                    walk(child, location + "[" + str(index) + "]")
            elif isinstance(value, dict):
                for key, child in value.items():
                    walk(child, location + "." + str(key))
        walk(doc)
    result["findings"]["normalization"] = {"counts": dict(counts), "examples": examples}
    if counts:
        warnings.append("Phát hiện %d điểm văn bản cơ học cần xem xét; chưa tự sửa." % sum(counts.values()))

    # Compare code/question identifiers with the captured pre-change snapshot.
    if baseline_path:
        base = read_json(baseline_path)
        for grade in (10, 11, 12):
            before = base.get("grades", {}).get(str(grade), {})
            old_lessons = set(before.get("lessonIds", []))
            old_program = set(before.get("questionIdsProgram", []))
            old_source = set(before.get("questionIdsSource", []))
            current_lessons = {x.get("id") for x in parse_js_object(root / CATALOGS[grade], ".cat=").get("lessons", [])}
            current_program = {qid for qid in union_program_ids if qid.startswith("ICT%d_" % grade)}
            current_source = {qid for qid in union_source_ids if qid.startswith("T%d-" % grade)}
            if old_lessons != current_lessons:
                errors.append("Khối %d: mã bài thay đổi so với trạng thái gốc." % grade)
            if old_program != current_program:
                errors.append("Khối %d: tập mã câu website thay đổi so với trạng thái gốc." % grade)
            if old_source != current_source:
                errors.append("Khối %d: tập mã câu nguồn thay đổi so với trạng thái gốc." % grade)
    result["summary"] = {
        "lessonCount": sum(x["lessonCount"] for x in result["grades"].values()),
        "sourceJsonQuestionCount": sum(x["sourceJsonQuestionCount"] for x in result["grades"].values()),
        "programQuestionCount": sum(x["programQuestionCount"] for x in result["grades"].values()),
        "errors": len(errors), "warnings": len(warnings),
        "reviewOnly": "Không thẩm định tính đúng/chất lượng chuyên môn; không xóa/gộp câu hỏi."}
    return result

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", default=str(ROOT), help="Thư mục gốc repository")
    parser.add_argument("--baseline", default="docs/chuan-hoa/TRANG_THAI_GOC.json",
                        help="Snapshot mã định danh trước thay đổi")
    parser.add_argument("--json", action="store_true", help="In toàn bộ báo cáo JSON")
    args = parser.parse_args()
    root = Path(args.root).resolve()
    baseline = root / args.baseline
    try:
        report = audit(root, baseline if baseline.exists() else None)
    except Exception as exc:
        print("Không thể chạy kiểm toán:", exc, file=sys.stderr)
        return 2
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print("KIỂM TOÁN DỮ LIỆU — không thẩm định nội dung")
        print("Bài: {lessonCount}; JSON nguồn: {sourceJsonQuestionCount}; website: {programQuestionCount}; lỗi cấu trúc: {errors}; cảnh báo cần xem: {warnings}".format(**report["summary"]))
        for grade, data in report["grades"].items():
            print("Khối %s: %d bài, %d câu JSON nguồn, %d câu website; MCQ/ĐS/TL = %d/%d/%d" %
                  (grade, data["lessonCount"], data["sourceJsonQuestionCount"], data["programQuestionCount"],
                   data["programTypes"].get("mcq", 0), data["programTypes"].get("tf", 0), data["programTypes"].get("essay", 0)))
        for issue in report["findings"]["errors"] + report["findings"]["warnings"]:
            print("- " + issue)
    return 1 if report["summary"]["errors"] else 0

if __name__ == "__main__":
    raise SystemExit(main())
