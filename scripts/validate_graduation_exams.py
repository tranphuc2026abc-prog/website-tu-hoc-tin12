#!/usr/bin/env python3
"""Kiểm tra dữ liệu ôn thi tốt nghiệp; không sửa học liệu 10–11–12."""
import ast
import unicodedata
import hashlib
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
    audit = json.loads((BASE / 'source-audit.json').read_text(encoding='utf-8'))
    for item in audit['exams']:
        p = ROOT / item['path']
        if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest() != item['sha256']:
            errors.append(f"PDF sai SHA-256: {item['path']}")
    bank = json.loads((BASE / "questions.json").read_text(encoding="utf-8"))
    questions = bank.get("questions", [])
    if not isinstance(questions, list):
        errors.append("questions phải là mảng")
        questions = []
    counts = Counter()
    seen = set()
    ids = set()
    source_hashes = {item['path']: item['sha256'] for item in audit['exams']}
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
        # Original papers retain repeated content; only occurrence IDs must be unique.
        if q.get('id') in ids:
            errors.append(f'Câu {i}: trùng ID')
        ids.add(q.get('id'))
        seen.add(key)
        if q.get('verification') != 'verified' or q.get('answer_source', {}).get('kind') != 'official':
            errors.append(f'Câu {i}: chưa xác minh nội dung/đáp án chính thức')
        if source_hashes.get(q.get('source_pdf')) != q.get('source_sha256'):
            errors.append(f'Câu {i}: không khớp nguồn PDF')
        for field, expected in ((q.get('source_image'), q.get('source_image_sha256')),
                                (q.get('answer_source', {}).get('pdf'), q.get('answer_source', {}).get('sha256'))):
            path = ROOT / str(field)
            if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != expected:
                errors.append(f'Câu {i}: sai/thiếu tài nguyên đã kiểm chứng {field}')
        if unicodedata.normalize('NFC', q.get('prompt', '')) != q.get('prompt'):
            errors.append(f'Câu {i}: Unicode chưa chuẩn hóa NFC')
        for block in q.get('code_blocks', []):
            if block['language'] == 'python':
                try:
                    ast.parse(block['code'])
                except SyntaxError as e:
                    errors.append(f'Câu {i}: cú pháp Python sai: {e}')
        counts[typ] += 1
    print(f"PDF hợp lệ: {total}/96 | Câu: {len(questions)} | MCQ: {counts['mcq']} | Đ/S: {counts['tf']}")
    if total != 96:
        errors.append(f"Chưa đủ 96 PDF: hiện {total}/96")
    if '--pdf-only' not in sys.argv:
        if counts['mcq'] < 24 or counts['tf'] < 4:
            errors.append('Chưa đủ 24 MCQ và 4 câu Đ/S để thi thử')
        for track in ('ict', 'cs'):
            common = sum(q.get('type') == 'tf' and q.get('track') == 'common' for q in questions)
            specific = sum(q.get('type') == 'tf' and q.get('track') == track for q in questions)
            if common < 2 or specific < 2:
                errors.append(f'Thiếu 2 câu chung + 2 câu riêng cho {track}')
    question_map = {q['id']: q for q in questions}
    for year, papers in manifest.get('papers', {}).items():
        for code, path in papers.items():
            paper = json.loads((ROOT / path).read_text(encoding='utf-8'))
            expected = [('I', n) for n in range(1, 25)] + [('II', n) for n in range(1, 7)]
            rows = [question_map.get(qid) for qid in paper.get('question_ids', [])]
            if paper.get('status') != 'verified' or len(rows) != 30 or any(q is None for q in rows):
                errors.append(f'{year}/{code}: đề chưa xác minh đủ 30 câu')
                continue
            if [(q['part'], q['number']) for q in rows] != expected:
                errors.append(f'{year}/{code}: sai thứ tự câu trong đề gốc')
            if any(str(q['year']) != year or q['code'] != code for q in rows):
                errors.append(f'{year}/{code}: ghép nhầm mã đề')
    print(f'Câu trùng nội dung trong ngân hàng đã xác minh: {len(questions)-len(seen)} (giữ nguyên trong đề gốc)')
    for error in errors:
        print("ERROR:", error)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
