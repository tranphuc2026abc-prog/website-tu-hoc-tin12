#!/usr/bin/env python3
"""Kiểm tra dữ liệu ôn thi tốt nghiệp; không sửa học liệu 10–11–12."""
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "data" / "exams"
CODES = {str(n).zfill(4) for n in range(501, 549)}


def main():
    errors = []
    manifest = json.loads((BASE / "manifest.json").read_text(encoding="utf-8"))
    files = manifest.get("files", {})
    total = 0
    for year in ("2025", "2026"):
        entries = files.get(year, {})
        if not isinstance(entries, dict):
            errors.append(f"{year}: danh mục phải là object")
            continue
        for code, url in entries.items():
            if code not in CODES:
                errors.append(f"{year}: mã đề không hợp lệ {code}")
            if not isinstance(url, str) or not re.fullmatch(
                rf"data/exams/{year}/[A-Za-z0-9_.-]+\.pdf", url
            ):
                errors.append(f"{year}/{code}: đường dẫn PDF không hợp lệ")
                continue
            if not (ROOT / url).is_file():
                errors.append(f"{year}/{code}: thiếu PDF {url}")
            else:
                total += 1
    bank = json.loads((BASE / "questions.json").read_text(encoding="utf-8"))
    questions = bank.get("questions", [])
    if not isinstance(questions, list):
        errors.append("questions phải là mảng")
        questions = []
    counts = Counter()
    seen = set()
    for i, q in enumerate(questions, 1):
        if not isinstance(q, dict):
            errors.append(f"Câu {i}: không phải object")
            continue
        typ = q.get("type")
        if typ not in ("mcq", "tf"):
            errors.append(f"Câu {i}: type không hợp lệ")
        if not isinstance(q.get("prompt"), str) or not q["prompt"].strip():
            errors.append(f"Câu {i}: thiếu nội dung")
        opts = q.get("options")
        if not isinstance(opts, list) or len(opts) != 4 or any(
            not isinstance(x, str) or not x.strip() for x in opts
        ):
            errors.append(f"Câu {i}: cần 4 phương án có nội dung")
        ans = q.get("answer")
        if typ == "mcq" and (type(ans) is not int or not 0 <= ans < 4):
            errors.append(f"Câu {i}: đáp án MCQ phải là số 0–3")
        if typ == "tf" and (not isinstance(ans, list) or len(ans) != 4
                            or any(type(x) is not bool for x in ans)):
            errors.append(f"Câu {i}: đáp án Đ/S phải gồm 4 boolean")
        if str(q.get("year")) not in ("2025", "2026"):
            errors.append(f"Câu {i}: năm không hợp lệ")
        key = q.get("canonical_id") or (
            str(typ) + ":" + " ".join(str(q.get("prompt", "")).lower().split())
        )
        if key in seen:
            errors.append(f"Câu {i}: trùng canonical_id/nội dung")
        seen.add(key)
        counts[typ] += 1
    print(f"PDF hợp lệ: {total}/96 | Câu: {len(questions)} | MCQ: {counts['mcq']} | Đ/S: {counts['tf']}")
    if total != 96:
        errors.append(f"Chưa đủ 96 PDF: hiện {total}/96")
    if counts["mcq"] < 24 or counts["tf"] < 6:
        errors.append("Chưa đủ tối thiểu 24 MCQ và 6 câu Đ/S để thi thử")
    for error in errors:
        print("ERROR:", error)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
