#!/usr/bin/env bash
set -euo pipefail

# Publish the student-facing site, keeping authoring and review files in Git.
destination="${1:?Specify a Pages output directory}"
mkdir -p "$destination/data/exams"
cp index.html course.html de-thi-tot-nghiep.html Tin12_MotFile.html tro-ly-ai.html "$destination/"
cp -R assets kho-de-tot-nghiep-tin-hoc "$destination/"
cp -R data/catalog*.js data/lessons data/questions "$destination/data/"
cp -R data/exams/{2025,2026,answers,images,papers,manifest.json,questions.json,source-audit.json} "$destination/data/exams/"

vendor=node_modules/@huggingface/transformers
mkdir -p "$destination/assets/vendor/ktc"
node_modules/.bin/esbuild "$vendor/dist/transformers.web.min.js" \
  --bundle --platform=browser --format=esm --minify \
  --outfile="$destination/assets/vendor/ktc/transformers.web.min.mjs"
cp "$vendor/dist"/ort-wasm-simd-threaded.jsep.* "$vendor/LICENSE" "$destination/assets/vendor/ktc/"

mkdir -p "$destination/data/ktc"
model_dir="${KTC_MODEL_DIR:-.ktc-model}"
model=Xenova/paraphrase-multilingual-MiniLM-L12-v2
model_destination="$destination/data/ktc/models/$model"
mkdir -p "$model_destination/onnx"
cp "$model_dir/$model"/{config.json,tokenizer.json,tokenizer_config.json} "$model_destination/"
cp "$model_dir/$model/onnx/model_quantized.onnx" "$model_destination/onnx/"
for grade in 10 11 12; do
  cp "data/ktc/grade-$grade.json" "$destination/data/ktc/"
done

python - "$destination" <<'PYTHON'
import json
import os
import re
import sys
from pathlib import Path

endpoint = os.getenv("KTC_API_URL", "").rstrip("/")
if endpoint and not re.fullmatch(r"https://[a-z0-9-]+\.[a-z0-9-]+\.workers\.dev", endpoint):
    raise SystemExit("KTC_API_URL must be an HTTPS workers.dev origin")
target = Path(sys.argv[1]) / "assets" / "js" / "ktc-config.js"
target.write_text(f"window.KTC_API_URL = {json.dumps(endpoint)};\n", encoding="utf-8")
PYTHON
