"""Generate the static retrieval index and authoritative Worker sources."""
import argparse
import hashlib
import json
import math
import re
import subprocess
from pathlib import Path
from tempfile import TemporaryDirectory

ROOT = Path(__file__).resolve().parents[1]
GRADES = {10: 34, 11: 31, 12: 28}


def parse(path, marker):
    return json.loads(path.read_text(encoding="utf-8").split(marker, 1)[1].strip().rstrip(";"))


def texts(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, list):
        for item in value:
            yield from texts(item)
    elif isinstance(value, dict):
        for key, item in value.items():
            if key not in ("t", "src"):
                yield from texts(item)


def corpus(grade):
    catalog = parse(ROOT / "data" / ("catalog.js" if grade == 12 else f"catalog-{grade}.js"), ".cat=")
    expected = {f"ICT{grade}_B{i:02d}" for i in range(1, GRADES[grade] + 1)}
    lessons = catalog["lessons"]
    if len(lessons) != len(expected) or {item["id"] for item in lessons} != expected:
        raise ValueError(f"Unexpected lesson IDs for grade {grade}")
    rows = []
    for lesson in lessons:
        lesson_id = lesson["id"]
        data = parse(ROOT / "data" / "lessons" / f"{lesson_id}.js", "]=")
        if not data["sec"].get("key"):
            raise ValueError(f"Missing core knowledge for {lesson_id}")
        for section, value in data["sec"].items():
            if section == "obj":
                continue
            paragraphs = (text.strip() for text in texts(value))
            body = "\n".join(dict.fromkeys(text for text in paragraphs if text))
            for start in range(0, len(body), 400):
                chunk = body[start:start + 480].strip()
                if chunk:
                    digest = hashlib.sha256(
                        f"{lesson_id}:{lesson['title']}:{section}:{start}:{chunk}".encode()
                    ).hexdigest()[:24]
                    rows.append(dict(id=digest, lesson=lesson_id, title=lesson["title"], section=section, text=chunk))
                if start + 480 >= len(body):
                    break
    if {row["lesson"] for row in rows} != expected:
        raise ValueError(f"Missing indexed lessons for grade {grade}")
    return rows


def compact(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sources-only", action="store_true", help="Build Worker sources without downloading a model")
    args = parser.parse_args()
    encoder = ROOT / "assets" / "js" / "ktc-encoder.mjs"
    model = dict(re.findall(r"export const (MODEL|REVISION|DTYPE) = '([^']+)';", encoder.read_text()))
    grades = {grade: corpus(grade) for grade in GRADES}
    sources = {row["id"]: row for rows in grades.values() for row in rows}
    if len(sources) != sum(map(len, grades.values())):
        raise ValueError("Duplicate source IDs")
    (ROOT / "workers" / "ktc" / "sources.generated.json").write_text(compact(sources), encoding="utf-8")
    if args.sources_only:
        print(f"93 lessons, {len(sources)} authoritative chunks")
        return

    output = ROOT / "data" / "ktc"
    output.mkdir(exist_ok=True)
    with TemporaryDirectory() as directory:
        inputs, outputs = Path(directory) / "texts.json", Path(directory) / "vectors.json"
        for grade, rows in grades.items():
            inputs.write_text(compact([row["title"] + "\n" + row["text"] for row in rows]), encoding="utf-8")
            subprocess.run(["node", str(ROOT / "scripts" / "encode_ktc.mjs"), inputs, outputs], check=True)
            vectors = json.loads(outputs.read_text())
            if len(vectors) != len(rows):
                raise ValueError(f"Unexpected vector count for grade {grade}")
            for row, vector in zip(rows, vectors):
                if len(vector) != 384 or not math.isclose(math.hypot(*vector), 1, abs_tol=0.005):
                    raise ValueError(f"Invalid embedding for {row['id']}")
                row["vector"] = [round(x, 5) for x in vector]
            temporary = output / f"grade-{grade}.tmp"
            temporary.write_text(compact(dict(model=model, grade=grade, chunks=rows)), encoding="utf-8")
            temporary.replace(output / f"grade-{grade}.json")
            print(f"Grade {grade}: {GRADES[grade]} lessons, {len(rows)} embeddings", flush=True)


if __name__ == "__main__":
    main()
