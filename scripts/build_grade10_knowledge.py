#!/usr/bin/env python3
"""Install the seven sections of the supplied Tin hoc 10 lessons."""
import hashlib
import json
import re
from pathlib import Path

from build_multigrade import ROOT, REG, js

CATALOG = ROOT / "data/catalog-10.js"
SOURCE = Path("nguon/khoi-10/kien-thuc-trong-tam")
SECTION_KEYS = ("obj", "key", "terms", "ex", "steps", "err", "rem")
SUPERSCRIPT = str.maketrans("0123456789n-", "⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁻")
SUBSCRIPT = str.maketrans("0123456789n-", "₀₁₂₃₄₅₆₇₈₉ₙ₋")


def format_math(text):
    """Display the source formulas with Unicode in the offline lesson viewer."""
    def render(match):
        value = match[1].replace("\text{", r"\text{").replace("\times", r"\times").replace("\approx", r"\approx")
        value = re.sub(r"\\text\{([^{}]*)\}", r"\1", value)
        for command, symbol in ((r"\times", "×"), (r"\cdot", "·"), (r"\dots", "…"), (r"\approx", "≈")):
            value = value.replace(command, symbol)
        value = value.replace(r"{}_{(2)}", "₍₂₎")
        value = re.sub(r"\^(?:\{([0-9n-]+)\}|([0-9n]))", lambda m: (m[1] or m[2]).translate(SUPERSCRIPT), value)
        value = re.sub(r"_(?:\{([0-9n-]+)\}|([0-9n]))", lambda m: (m[1] or m[2]).translate(SUBSCRIPT), value)
        return value.replace(r"{,}", ",").strip()
    return re.sub(r"\$\$?([^$\n]+)\$\$?", render, text)


def knowledge_blocks(markdown):
    blocks = []
    lists = []
    code = None
    table = None
    for line in markdown.split("\n"):
        label = line.strip()
        if code is not None:
            if label == "```":
                blocks.append({"t": "pre", "l": code, "x": "\n".join(code_lines)})
                code = None
            else:
                code_lines.append(line)
            continue
        bullet = re.match(r"^(\s*)(?:[-*+] |(\d+[.)]) )(.+)$", line)
        if bullet:
            table = None
            indent = len(bullet[1])
            while lists and lists[-1][0] > indent:
                lists.pop()
            if not lists:
                items = []
                blocks.append({"t": "ul", "i": items})
                lists.append((indent, items))
            elif indent > lists[-1][0]:
                items = lists[-1][1][-1].setdefault("c", [])
                lists.append((indent, items))
            prefix = f"{bullet[2]} " if bullet[2] else ""
            lists[-1][1].append({"x": format_math(prefix + bullet[3].strip())})
            continue
        lists.clear()
        if label.startswith("|") and label.endswith("|"):
            cells = [cell.strip() for cell in label[1:-1].split("|")]
            if table is None:
                table = []
                blocks.append({"t": "tb", "r": table})
            if not all(re.fullmatch(r":?-+:?", cell) for cell in cells):
                table.append([format_math(cell) for cell in cells])
            continue
        table = None
        if label.startswith("```"):
            code = label[3:]
            code_lines = []
        elif label.startswith("### "):
            blocks.append({"t": "h3", "x": format_math(label[4:])})
        elif label:
            blocks.append({"t": "p", "x": format_math(label)})
    if code is not None or not blocks:
        raise ValueError("Missing knowledge content or closing code fence")
    return blocks


def searchable(blocks):
    for block in blocks:
        if "x" in block:
            yield block["x"]
        yield from searchable(block.get("i", []))
        yield from searchable(block.get("c", []))
        for row in block.get("r", []):
            yield from row


def main():
    prefix, payload = CATALOG.read_text(encoding="utf-8").split(".cat=", 1)
    catalog = json.loads(payload.rstrip(";\n"))
    assert [lesson["id"] for lesson in catalog["lessons"]] == [f"ICT10_B{n:02d}" for n in range(1, 35)]
    digest = hashlib.sha256()
    for n, lesson in enumerate(catalog["lessons"], 1):
        lesson_id = lesson["id"]
        source = ROOT / SOURCE / f"BAI_{n:02d}.md"
        raw = source.read_text(encoding="utf-8")
        sections = re.split(r"^## ([1-7])\. .+\n", raw, flags=re.MULTILINE)
        if sections[1::2] != list("1234567"):
            raise ValueError(f"{source}: expected sections 1 through 7 in order")
        path = ROOT / "data/lessons" / f"{lesson_id}.js"
        data = json.JSONDecoder().raw_decode(path.read_text(encoding="utf-8").split("]=", 1)[1])[0]
        for key, markdown in zip(SECTION_KEYS, sections[2::2], strict=True):
            data["sec"][key] = knowledge_blocks(markdown)
        data["txt"] = "\n".join(searchable(block for section in data["sec"].values() for block in section))
        digest.update(path.name.encode())
        digest.update(js(data).encode())
        digest.update((ROOT / "data/questions" / path.name).read_bytes())
        path.write_text(REG % ("L", lesson_id, js(data)), encoding="utf-8")
    catalog["dataVersion"] = "g10-" + digest.hexdigest()[:16]
    CATALOG.write_text(prefix + ".cat=" + js(catalog) + ";\n", encoding="utf-8")
    print("Đã cập nhật đủ 7 mục cho 34 bài Tin học 10.")


if __name__ == "__main__":
    main()
