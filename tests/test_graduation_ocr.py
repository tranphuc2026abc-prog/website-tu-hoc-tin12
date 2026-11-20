"""Regression checks for real OCR checkpoints and publication boundaries."""
import hashlib,json,sys,unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/"scripts"))
from graduation_ocr_parser import parse_pages,structure_ok,apply_heading_corrections

class OCRTests(unittest.TestCase):
    def test_all_real_pages_checkpointed_without_publishing_answers(self):
        files=list((ROOT/"data/exams/ocr-drafts").glob("*/*.json"))
        self.assertEqual(len(files),96)
        for p in files:
            d=json.loads(p.read_text(encoding="utf-8"))
            self.assertEqual([x["page"] for x in d["pages"]],[1,2,3,4],str(p))
            self.assertTrue(all(x["text"].strip() for x in d["pages"]),str(p))
            self.assertEqual(len(d["candidates"]),30,str(p))
            self.assertTrue(structure_ok(d["candidates"]),str(p))
            self.assertEqual(len(set(q["id"] for q in d["candidates"])),30,str(p))
            self.assertTrue(all(q["verification"]=="needs_review" and q["answer"] is None for q in d["candidates"]))
            self.assertEqual(hashlib.sha256((ROOT/d["source_pdf"]).read_bytes()).hexdigest(),d["source_sha256"])
    def test_ocr_heading_variants_do_not_create_verified_content(self):
        rows=parse_pages([{"page":1,"text":"Cầu 11. Cho đoạn mã HTML\nA. a B. b C. c D. d\nCâu I5. Tiêu đề"}],"2026","0537","source.pdf")
        self.assertEqual([q["number"] for q in rows],[11,15])
        self.assertTrue(all(q["verification"]=="needs_review" for q in rows))
    def test_manual_heading_correction_preserves_raw_text(self):
        raw=[{"page":4,"text":"Câu 3 Câu lạc bộ"}]
        fixed=apply_heading_corrections(raw,[{"page":4,"from":"Câu 3 Câu lạc bộ","to":"Câu 5: Câu lạc bộ"}])
        self.assertEqual(raw[0]["text"],"Câu 3 Câu lạc bộ")
        self.assertEqual(parse_pages(fixed,"2025","0524","source.pdf")[0]["number"],5)
        with self.assertRaises(ValueError):
            apply_heading_corrections(raw,[{"page":4,"from":"not present","to":"bad"}])
    def test_reviewed_source_literals_and_distractor_order(self):
        # Exact characters visually checked against 0502 I.11 and 0504 I.23.
        bank=json.loads((ROOT/"data/exams/questions.json").read_text(encoding="utf-8"))["questions"]
        by_id={q["id"]:q for q in bank}
        self.assertIn('type="1" start="II"',by_id["2025-0502-I-11"]["options"][2])
        self.assertIn('type="I" start="II"',by_id["2025-0502-I-11"]["options"][0])
        self.assertIn('type="1" start="II"',by_id["2025-0504-I-23"]["options"][0])
        self.assertIn('type="I" start="II"',by_id["2025-0504-I-23"]["options"][2])
        self.assertEqual(by_id["2025-0502-I-11"]["answer"],1)
        self.assertEqual(by_id["2025-0504-I-23"]["answer"],1)
        self.assertTrue(by_id["2025-0508-I-17"]["options"][0].startswith("Dự báo thời tiết"))
        self.assertTrue(by_id["2025-0508-I-17"]["options"][1].startswith("Dự báo cháy rừng"))
if __name__=="__main__":
    unittest.main()
