#!/usr/bin/env python3
"""Restore the reviewed grade-10 question bank from a temporary transfer payload.

This transport is used only for the first GitHub import. Once the migration
workflow commits the 34 JSON files, it removes the payload and this function
becomes a no-op. Other grades are never touched.
"""
import base64
import hashlib
import json
import lzma
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PART_DIR = ROOT / ".github" / "grade10_payload"
EXPECTED_SHA256 = "56159b6566d69b2b3ba3be170384b6ad4e6c9c47c8a75e5cac0f70c682e4b838"
EXPECTED_ZIP_SHA256 = "7d27a4752e591505a0aa648afdb25a0811978a13196044b6ebc1ba76fc17ebbe"


def restore() -> bool:
    archive = PART_DIR / "NGAN_HANG_CAU_HOI_TIN_10_DA_THAM_DINH.zip"
    if archive.exists():
        if hashlib.sha256(archive.read_bytes()).hexdigest() != EXPECTED_ZIP_SHA256:
            raise RuntimeError("Wrong grade-10 reviewed ZIP (SHA256 mismatch)")
        with zipfile.ZipFile(archive) as z:
            names = set(z.namelist())
            expected_names = {f"BAI_{n:02d}.json" for n in range(1, 35)}
            if names != expected_names:
                raise RuntimeError("Reviewed ZIP must contain exactly BAI_01.json through BAI_34.json")
            data = {f"BAI_{n:02d}": json.loads(z.read(f"BAI_{n:02d}.json")) for n in range(1,35)}
    else:
        parts = sorted(PART_DIR.glob("part-*.txt"))
        if not parts:
            return False
        if len(parts) != 16:
            raise RuntimeError(f"Grade-10 import incomplete: found {len(parts)}/16 parts")
        raw = lzma.decompress(base64.b64decode("".join(p.read_text(encoding="ascii") for p in parts)))
        if hashlib.sha256(raw).hexdigest() != EXPECTED_SHA256:
            raise RuntimeError("Grade-10 import SHA256 mismatch")
        data = json.loads(raw)
    if set(data) != {f"BAI_{n:02d}" for n in range(1, 35)}:
        raise RuntimeError("Expected exactly 34 reviewed grade-10 lessons")
    all_ids = set()
    count = 0
    for n in range(1, 35):
        item = data[f"BAI_{n:02d}"]
        if item["ma_bai"] != f"BAI_{n:02d}" or item["bai_so"] != n:
            raise RuntimeError(f"Bad metadata for lesson {n}")
        questions = []
        for group in ("cau_hoi_goc", "cau_hoi_bo_sung"):
            for kind in ("trac_nghiem", "dung_sai", "tra_loi_ngan", "tu_luan"):
                questions.extend(item[group][kind])
        if len(questions) != item["thong_ke"]["tong_so_cau"]:
            raise RuntimeError(f"Count mismatch in lesson {n}")
        for q in questions:
            if q["id"] in all_ids:
                raise RuntimeError(f"Duplicate question ID: {q['id']}")
            all_ids.add(q["id"])
        count += len(questions)
    if count != 1117:
        raise RuntimeError(f"Expected 1117 questions, received {count}")
    folder = ROOT / "nguon" / "khoi-10" / "ngan-hang-cau-hoi"
    folder.mkdir(parents=True, exist_ok=True)
    for n in range(1, 35):
        output = folder / f"BAI_{n:02d}_QUESTIONS.json"
        output.write_text(json.dumps(data[f"BAI_{n:02d}"], ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Restored 34 reviewed grade-10 JSON banks (1117 questions)")
    return True


if __name__ == "__main__":
    restore()
