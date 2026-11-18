#!/usr/bin/env python3
"""Rebuild *only* grade-10 questions, preserving all lesson and grade-11/12 files.

Used while lesson common-error curation is still incomplete. The existing
lesson quality gate in build_multigrade.py remains strict.
"""
import hashlib
import json
import re
from pathlib import Path
from build_multigrade import question_records, js, REG

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "nguon" / "khoi-10" / "ngan-hang-cau-hoi"
OUTPUT = ROOT / "data" / "questions"
CATALOG = ROOT / "data" / "catalog-10.js"


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    hashes = hashlib.sha256()
    total = 0
    reviewed = 0
    for n in range(1, 35):
        source = SOURCE / f"BAI_{n:02d}_QUESTIONS.json"
        raw = source.read_bytes()
        hashes.update(raw)
        doc = json.loads(raw)
        assert doc["bai_so"] == n and doc["ma_bai"] == f"BAI_{n:02d}", source
        questions = question_records(doc, f"ICT10_B{n:02d}")
        assert len(questions) == doc["thong_ke"]["tong_so_cau"], source
        total += len(questions)
        reviewed += bool("cau_hoi_goc" in doc["thong_ke"])
        (OUTPUT / f"ICT10_B{n:02d}.js").write_text(
            REG % ("Q", f"ICT10_B{n:02d}", js(questions)), encoding="utf-8"
        )
    assert reviewed in (0, 34), "Partial import: reviewed JSON mixed with legacy JSON"
    if reviewed:
        assert total == 1117, f"Reviewed bank expected 1117 questions, found {total}"
    text = CATALOG.read_text(encoding="utf-8")
    head, payload = text.split(".cat=", 1)
    catalog = json.loads(payload.rstrip(";\n"))
    assert catalog["grade"] == 10 and len(catalog["lessons"]) == 34
    catalog["dataVersion"] = "g10-" + hashes.hexdigest()[:16]
    CATALOG.write_text(head + ".cat=" + js(catalog) + ";\n", encoding="utf-8")
    print(f"Grade 10 ONLY: {total} questions / 34 lessons; reviewed={bool(reviewed)}")


if __name__ == "__main__":
    main()
