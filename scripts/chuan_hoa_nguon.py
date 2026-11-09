#!/usr/bin/env python3
"""Chuan hoa co hoc chuoi trong JSON hoc lieu; khong sua noi dung y nghia."""
import argparse
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ALLOW_CONTROLS = {"\n", "\t"}

def normalize_string(value):
    normalized = unicodedata.normalize("NFC", value)
    normalized = "".join(ch for ch in normalized
                         if unicodedata.category(ch) != "Cc" or ch in ALLOW_CONTROLS)
    normalized = normalized.strip()
    return normalized

def normalize_value(value, location, changes):
    if isinstance(value, str):
        new = normalize_string(value)
        if new != value:
            changes.append({"field": location, "old": value, "new": new})
        return new
    if isinstance(value, list):
        return [normalize_value(item, "%s[%d]" % (location, index), changes)
                for index, item in enumerate(value)]
    if isinstance(value, dict):
        return {key: normalize_value(item, location + "." + str(key), changes)
                for key, item in value.items()}
    return value

def identifiers(value):
    found = []
    def walk(node):
        if isinstance(node, dict):
            for key, child in node.items():
                if key == "id" and isinstance(child, str):
                    found.append(child)
                else:
                    walk(child)
        elif isinstance(node, list):
            for child in node:
                walk(child)
    walk(value)
    return sorted(found)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    modes = parser.add_mutually_exclusive_group(required=True)
    modes.add_argument("--kiem-tra", action="store_true", help="Chỉ báo cáo thay đổi cơ học dự kiến")
    modes.add_argument("--ap-dung", action="store_true", help="Áp dụng thay đổi cơ học đã xác định")
    parser.add_argument("--root", default=str(ROOT), help="Thư mục gốc repository")
    args = parser.parse_args()
    root = Path(args.root).resolve()
    source_root = root / "nguon"
    files = sorted(source_root.rglob("*.json"))
    planned, snapshots = [], {}
    for path in files:
        try:
            original = path.read_text(encoding="utf-8")
            value = json.loads(original)
        except Exception as exc:
            print("JSON lỗi, không thay đổi %s: %s" % (path, exc))
            return 2
        changes = []
        updated = normalize_value(value, "$", changes)
        if changes:
            relative = str(path.relative_to(root))
            rendered = json.dumps(updated, ensure_ascii=False, indent=2) + "\n"
            if identifiers(value) != identifiers(updated):
                print("Tập mã câu thay đổi khi chuẩn hóa; dừng.")
                return 2
            planned.append({"path": relative, "changes": changes, "rendered": rendered})
            snapshots[path] = original
    print("Tệp JSON nguồn đã kiểm tra: %d; tệp có thay đổi cơ học dự kiến: %d; số trường: %d" %
          (len(files), len(planned), sum(len(row["changes"]) for row in planned)))
    if args.kiem_tra:
        for row in planned:
            for change in row["changes"]:
                print(json.dumps({"file": row["path"], **change}, ensure_ascii=False))
        return 0

    log_path = root / "docs/chuan-hoa/NHAT_KY_CHUAN_HOA.jsonl"
    written = []
    try:
        for row in planned:
            path = root / row["path"]
            path.write_text(row["rendered"], encoding="utf-8", newline="\n")
            written.append(path)
        if planned:
            log_path.parent.mkdir(parents=True, exist_ok=True)
            with log_path.open("a", encoding="utf-8", newline="\n") as log:
                for row in planned:
                    for change in row["changes"]:
                        log.write(json.dumps({"file": row["path"], **change},
                                             ensure_ascii=False) + "\n")
    except Exception:
        for path in written:
            path.write_text(snapshots[path], encoding="utf-8", newline="\n")
        raise
    print("Đã áp dụng %d thay đổi; nhật ký: %s" %
          (sum(len(row["changes"]) for row in planned), log_path.relative_to(root)
           if planned else "không có thay đổi, không tạo nhật ký"))
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
