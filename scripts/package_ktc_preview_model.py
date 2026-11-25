"""Package the pinned MiniLM model below Cloudflare's per-asset size limit."""
import json
import shutil
import sys
from pathlib import Path


site = Path(sys.argv[1])
model = Path("Xenova/paraphrase-multilingual-MiniLM-L12-v2")
source = Path(".ktc-model") / model
target = site / "data/ktc/models" / model
(target / "onnx").mkdir(parents=True)
for name in ("config.json", "tokenizer.json", "tokenizer_config.json"):
    shutil.copyfile(source / name, target / name)
shutil.copyfile(site / "assets/vendor/ktc/LICENSE", target / "LICENSE")
onnx = source / "onnx/model_quantized.onnx"
parts = []
with onnx.open("rb") as stream:
    for index, chunk in enumerate(iter(lambda: stream.read(16 * 1024**2), b"")):
        name = f"model-{index:02}.bin"
        (target / "onnx" / name).write_bytes(chunk)
        parts.append(name)

worker = site / "assets/js/ktc-retrieval-worker.mjs"
shim = """
// Treat the split preview assets as a single ONNX response for Transformers.js.
const modelParts = PARTS;
const modelSize = SIZE;
const nativeFetch = self.fetch.bind(self);
self.fetch = async (input, options) => {
    const url = new URL(input instanceof Request ? input.url : input, self.location.href);
    if (url.origin !== self.location.origin || !url.pathname.endsWith('/onnx/model_quantized.onnx')) {
        return nativeFetch(input, options);
    }
    let part = 0;
    let reader;
    const bytes = new ReadableStream({
        async pull(controller) {
            if (!reader) {
                if (part === modelParts.length) {
                    controller.close();
                    return;
                }
                const response = await nativeFetch(new URL(modelParts[part++], url), options);
                if (!response.ok || !response.body) throw new Error('MiniLM asset download failed');
                reader = response.body.getReader();
            }
            const { done, value } = await reader.read();
            if (done) {
                reader.releaseLock();
                reader = undefined;
                // Queue the next part without waiting for an enqueue.
                return this.pull(controller);
            }
            controller.enqueue(value);
        },
        cancel(reason) {
            return reader?.cancel(reason);
        },
    });
    return new Response(bytes, {
        headers: { 'Content-Type': 'application/octet-stream', 'Content-Length': String(modelSize) },
    });
};
"""
shim = shim.replace("PARTS", json.dumps(parts)).replace("SIZE", str(onnx.stat().st_size))
worker.write_text(shim + worker.read_text(encoding="utf-8"), encoding="utf-8")
