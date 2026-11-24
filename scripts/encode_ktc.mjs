import { readFile, writeFile } from 'node:fs/promises';
import { env, pipeline } from '@huggingface/transformers';
import { createEncoder } from '../assets/js/ktc-encoder.mjs';

if (process.env.KTC_MODEL_DIR) {
    env.localModelPath = process.env.KTC_MODEL_DIR;
    env.allowRemoteModels = false;
}
const [input, output] = process.argv.slice(2);
const texts = JSON.parse(await readFile(input, 'utf8'));
const encode = await createEncoder(pipeline);
const vectors = [];
for (let i = 0; i < texts.length; i += 16) {
    vectors.push(...await encode(texts.slice(i, i + 16)));
}
await writeFile(output, JSON.stringify(vectors));
