#!/usr/bin/env python3
"""Build review checkpoint metrics; no draft is promoted to the scored bank."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
base=ROOT/"data/exams"
rows=[json.loads(p.read_text(encoding="utf-8")) for p in sorted((base/"ocr-drafts").glob("*/*.json"))]
bank=json.loads((base/"questions.json").read_text(encoding="utf-8"))["questions"]
verified_ids={q["id"] for q in bank}
stats={
 "schema_version":1,"date":"2026-11-20","base_commit":"706a85929bfa2fe2a9a76cb0f41ece9deff73aa6",
 "pdfs":96,"pdf_pages":384,"ocr_papers":len(rows),"ocr_pages":sum(len(r["pages"]) for r in rows),
 "ocr_candidate_questions":sum(len(r["candidates"]) for r in rows),
 "ocr_four_options_parsed":sum("options_ocr" in q for r in rows for q in r["candidates"]),
 "ocr_papers_with_expected_heading_sequence":sum(r["structure_matches_expected"] for r in rows),
 "verified_papers":[{"year":2025,"code":"0501","questions":30,"scored_per_track":28}],
 "verified_questions":len(bank),"confirmed_duplicates_in_verified_bank":len(bank)-len({q["canonical_id"] for q in bank}),
 "global_duplicates_status":"not_reviewed",
 "answers_2025_matched_questions":30,"answers_2026_transcribed_questions":30,"answers_2026_matched_to_verified_questions":0,
 "drafts_are_scored":False,
 "remaining":[{"year":r["year"],"code":r["code"],"status":"needs_visual_and_answer_review"} for r in rows if (r["year"],r["code"])!=(2025,"0501")],
 "notes":["Heading sequence checks do not verify OCR content or programming syntax.","OCR records include 30 questions also transcribed separately into the verified bank; do not sum these counts.","All 96 PDFs and every lesson/source/question bank for grades 10-11-12 remain unchanged."]
}
(base/"ocr-progress.json").write_text(json.dumps(stats,ensure_ascii=False,indent=2),encoding="utf-8")
audit=json.loads((base/"source-audit.json").read_text(encoding="utf-8"))
audit["question_status"]="partially_verified"
for item in audit["exams"]:
 item["status"]="verified_question_bank" if (item["year"],item["code"])==(2025,"0501") else "ocr_draft_needs_review"
 item["ocr_draft"]=f"data/exams/ocr-drafts/{item['year']}/{item['code']}.json"
audit["verified_questions"]=len(bank);audit["verified_papers"]=1;audit["answer_2026"]="official_pdf_available; 0501 key transcribed; no verified paper joined"
(base/"source-audit.json").write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding="utf-8")
print(json.dumps({k:v for k,v in stats.items() if k not in ("remaining","notes")},ensure_ascii=False))
