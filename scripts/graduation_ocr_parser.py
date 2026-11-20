"""Parse OCR headings/options only. This module never verifies or supplies answers."""
import re
HEADING = re.compile(r"^[^\w]{0,3}C[âầaáàạậé][uụùú]\s+([0-9IlÍÌ]{1,2})(?:\s*[:.;]\s*|\s+)(.*)$")
VERSION = 3

def parse_pages(pages, year, code, source):
    candidates = []
    current = None
    part = "I"
    seen24 = False
    for page in pages:
        for line in page["text"].splitlines():
            if re.search(r"PHẦN\s+II", line, re.I):
                part = "II"
            match = HEADING.match(line)
            if match:
                raw_number = match.group(1)
                number = int(raw_number.translate(str.maketrans({"I":"1","l":"1","Í":"1","Ì":"1"})))
                if number == 1 and seen24:
                    part = "II"
                if part == "I" and number == 24:
                    seen24 = True
                current = {
                    "id": f"draft-{year}-{code}-{len(candidates)+1:02d}",
                    "year": int(year), "code": code, "part": part, "number": number,
                    "ocr_heading": line, "raw_number_ocr": raw_number,
                    "type": "mcq" if part == "I" else "tf",
                    "track": "common" if part == "I" or number <= 2 else ("cs" if number <= 4 else "ict"),
                    "source_pdf": source, "source_pages": [page["page"]],
                    "text_ocr": match.group(2), "answer": None, "verification": "needs_review",
                }
                candidates.append(current)
            elif current:
                current["text_ocr"] += "\n" + line
                if page["page"] not in current["source_pages"]:
                    current["source_pages"].append(page["page"])
    for question in candidates:
        pattern = r"(?<!\w)([ABCD])\.\s+" if question["type"] == "mcq" else r"(?m)^\s*([abcd])\)\s*"
        matches = list(re.finditer(pattern, question["text_ocr"]))
        labels = [m.group(1) for m in matches]
        expected = list("ABCD" if question["type"] == "mcq" else "abcd")
        if labels == expected:
            question["prompt_ocr"] = question["text_ocr"][:matches[0].start()].strip()
            question["options_ocr"] = [
                question["text_ocr"][m.end():matches[i+1].start() if i+1<len(matches) else None].strip()
                for i,m in enumerate(matches)
            ]
        else:
            question["parse_issues"] = ["option_labels_not_reliably_recognized"]
    return candidates

def structure_ok(candidates):
    expected = [("I", n) for n in range(1,25)] + [("II",n) for n in range(1,7)]
    return [(q["part"],q["number"]) for q in candidates] == expected


def apply_heading_corrections(pages, corrections):
    import copy
    result = copy.deepcopy(pages)
    for correction in corrections:
        page = next(p for p in result if p["page"] == correction["page"])
        if page["text"].count(correction["from"]) != 1:
            raise ValueError("Heading correction no longer matches exactly one source line")
        page["text"] = page["text"].replace(correction["from"], correction["to"], 1)
    return result
