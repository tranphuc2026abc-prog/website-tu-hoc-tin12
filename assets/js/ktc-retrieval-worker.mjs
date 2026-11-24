import { MODEL, REVISION, DTYPE, DIMENSION, createEncoder } from './ktc-encoder.mjs';
import { prepareIndex, retrieve } from './ktc-search.mjs';

let encoder;
const indexes = new Map();

async function getIndex(grade) {
    if (!indexes.has(grade)) {
        indexes.set(grade, (async () => {
            const response = await fetch(new URL('../../data/ktc/grade-' + grade + '.json', import.meta.url));
            if (!response.ok) throw new Error('Không tải được chỉ mục học liệu.');
            const { model, chunks } = await response.json();
            if (model.MODEL !== MODEL || model.REVISION !== REVISION || model.DTYPE !== DTYPE ||
                !chunks.length || chunks.some((chunk) => chunk.vector.length !== DIMENSION)) {
                throw new Error('Chỉ mục và mô hình tìm kiếm không tương thích.');
            }
            return prepareIndex(chunks);
        })().catch((error) => {
            indexes.delete(grade);
            throw error;
        }));
    }
    return indexes.get(grade);
}

self.onmessage = async ({ data: { id, grade, query, lesson } }) => {
    try {
        encoder ??= import('../vendor/ktc/transformers.web.min.mjs')
            .then(({ env, pipeline }) => {
                env.localModelPath = new URL('../../data/ktc/models/', import.meta.url).href;
                env.allowLocalModels = true;
                env.allowRemoteModels = false;
                env.backends.onnx.wasm.wasmPaths = new URL('../vendor/ktc/', import.meta.url).href;
                env.backends.onnx.wasm.numThreads = 1;
                return createEncoder(pipeline);
            })
            .catch((error) => {
                encoder = undefined;
                throw error;
            });
        const [index, encode] = await Promise.all([getIndex(grade), encoder]);
        if (query === undefined) return;
        const [vector] = await encode([query]);
        const sources = retrieve(index, query, vector, lesson)
            .map(({ id, lesson, title, section }) => ({ id, lesson, title, section }));
        self.postMessage({ id, sources });
    } catch (error) {
        console.warn('KTC retrieval unavailable', error.message);
        if (id === undefined) return;
        self.postMessage({ id, error: 'Chưa tải được công cụ tìm học liệu. Kiểm tra mạng rồi thử lại.' });
    }
};
