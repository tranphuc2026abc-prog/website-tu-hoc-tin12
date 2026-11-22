#!/usr/bin/env bash
set -euo pipefail

# Publish the student-facing site, keeping authoring and review files in Git.
destination="${1:?Specify a Pages output directory}"
mkdir -p "$destination/data/exams"
cp index.html course.html de-thi-tot-nghiep.html Tin12_MotFile.html "$destination/"
cp -R assets kho-de-tot-nghiep-tin-hoc "$destination/"
cp -R data/catalog*.js data/lessons data/questions "$destination/data/"
cp -R data/exams/{2025,2026,answers,images,papers,manifest.json,questions.json,source-audit.json} "$destination/data/exams/"
