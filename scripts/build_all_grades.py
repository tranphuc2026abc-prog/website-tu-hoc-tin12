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
subprocess.run([sys.executable, str(ROOT / "scripts" / "build_multigrade.py"), SRC], cwd=ROOT, check=True)
print("Đã dựng dữ liệu cho Tin học 10, 11 và 12.")
