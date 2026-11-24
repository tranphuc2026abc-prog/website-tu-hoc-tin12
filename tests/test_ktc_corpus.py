"""Validate canonical corpus without downloading AI models."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def parse(path,marker):
    return json.loads(path.read_text(encoding="utf-8").split(marker,1)[1].strip().rstrip(";"))
def test_corpus():
    seen=set()
    for grade,count in [(10,34),(11,31),(12,28)]:
        cat=parse(ROOT/"data"/("catalog.js" if grade==12 else f"catalog-{grade}.js"),".cat=")
        assert len(cat["lessons"])==count
        for item in cat["lessons"]:
            lid=item["id"]
            assert lid.startswith(f"ICT{grade}_") and lid not in seen
            seen.add(lid)
            lesson=parse(ROOT/"data"/"lessons"/f"{lid}.js","]=")
            assert isinstance(lesson["sec"],dict) and lesson["sec"].get("key"),lid
    assert len(seen)==93
if __name__=="__main__":
    test_corpus()
    print("Validated 93 canonical lessons")
