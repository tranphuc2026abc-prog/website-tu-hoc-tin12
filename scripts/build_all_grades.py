#!/usr/bin/env python3
"""Build data for Tin học 10, 11 and 12 in the multi-file website."""
import os, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = sys.argv[1] if len(sys.argv) > 1 else "nguon"
ENV = dict(os.environ, PYTHONUTF8="1")
# Import the reviewed grade-10 bank (temporary transfer payload) before rebuilding.
subprocess.run([sys.executable, str(ROOT / "scripts" / "grade10_migrate.py")], cwd=ROOT, check=True)

subprocess.run([sys.executable, str(ROOT / "scripts" / "build_data.py"), SRC], cwd=ROOT, check=True, env=ENV)
# Preserve existing lesson JS until all human-reviewed common-error files exist.
# The original complete-build quality gate remains unchanged.
missing = [(grade, n)
           for grade, count in ((10, 34), (11, 31))
           for n in range(1, count + 1)
           if not (ROOT / "hoc-lieu-chuan-hoa" / f"khoi-{grade}"
                   / f"BAI_{n:02d}_ERRORS.json").exists()]
if missing:
    print(f"NOTICE: {len(missing)} curated-error files still missing; "
          "rebuild only Tin hoc 10 questions and retain all existing lessons.", flush=True)
    subprocess.run([sys.executable, str(ROOT / "scripts" / "build_grade10_questions.py")],
                   cwd=ROOT, check=True, env=ENV)
else:
    subprocess.run([sys.executable, str(ROOT / "scripts" / "build_multigrade.py"), SRC],
                   cwd=ROOT, check=True, env=ENV)
subprocess.run([sys.executable, str(ROOT / "scripts" / "build_grade11_new.py")], cwd=ROOT, check=True, env=ENV)
subprocess.run([sys.executable, str(ROOT / "scripts" / "build_grade10_knowledge.py")], cwd=ROOT, check=True, env=ENV)
print("Đã dựng dữ liệu cho Tin học 10, 11 và 12.")
