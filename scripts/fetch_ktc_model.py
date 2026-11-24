"""Download and verify the exact MiniLM assets shared by Pages and indexing."""
import hashlib
import os
import re
import shutil
import sys
from pathlib import Path
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
ASSETS = {
    "config.json": "05b570bff786faa5c4604152aa16f19f77ed6dfc31e47dd0f3dd987078693ac7",
    "tokenizer.json": "b60b6b43406a48bf3638526314f3d232d97058bc93472ff2de930d43686fa441",
    "tokenizer_config.json": "3f5961b9ac86288cccdb97f32fb848d6187c78e1603958c53f3ea1f296b7d8a2",
    "onnx/model_quantized.onnx": "66fc00f5f29afcaff34092e1bdd20008ca3918265a82fb9695a551e510cc4ebc",
}


def digest(path):
    with path.open("rb") as source:
        return hashlib.file_digest(source, "sha256").hexdigest()


def main():
    config = (ROOT / "assets/js/ktc-encoder.mjs").read_text()
    model, revision = (re.search(rf"export const {key} = '([^']+)';", config)[1]
                       for key in ("MODEL", "REVISION"))
    model_root = Path(os.getenv("KTC_MODEL_DIR", str(ROOT / ".ktc-model")))
    for name, expected in ASSETS.items():
        target = model_root / model / name
        if target.is_file() and digest(target) == expected:
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_suffix(target.suffix + ".download")
        try:
            with urlopen(f"https://huggingface.co/{model}/resolve/{revision}/{name}", timeout=90) as remote:
                with temporary.open("wb") as output:
                    shutil.copyfileobj(remote, output)
            if digest(temporary) != expected:
                sys.exit(f"SHA-256 mismatch for {name}")
            temporary.replace(target)
        finally:
            temporary.unlink(missing_ok=True)
    print(f"Verified {len(ASSETS)} MiniLM assets at {revision}")


if __name__ == "__main__":
    main()
