import { readFile, readdir, writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { env, pipeline } from '@huggingface/transformers';
import { createEncoder } from '../assets/js/ktc-encoder.mjs';
import { prepareIndex, retrieve } from '../assets/js/ktc-search.mjs';

if (process.env.KTC_MODEL_DIR) {
    env.localModelPath = process.env.KTC_MODEL_DIR;
    env.allowRemoteModels = false;
}

const files = (await readdir('data/questions')).filter((file) => /^ICT(10|11|12)_B\d{2}\.js$/.test(file));
const encode = await createEncoder(pipeline);
const results = [];
const used = new Set();
let placeholders = 0;
const authored = JSON.parse(await readFile('tests/ktc-grade12-cases.json', 'utf8'));

for (const grade of [10, 11, 12]) {
    const { chunks } = JSON.parse(await readFile('data/ktc/grade-' + grade + '.json', 'utf8'));
    const index = prepareIndex(chunks);
    for (const file of files.filter((name) => name.startsWith('ICT' + grade))) {
        const lesson = file.slice(0, -3);
        const source = await readFile('data/questions/' + file, 'utf8');
        const questions = JSON.parse(source.slice(source.indexOf(']=') + 2).trim().replace(/;$/, ''));
        const candidates = questions.filter((row) =>
            row.st === 'ok' && row.type === 'mcq' && row.q && row.exp &&
            Array.isArray(row.opts) && row.opts.some((option) => option.k === row.ans));
        const unique = candidates.filter((row) => {
            // Rows with template stems contain no assessable knowledge question.
            if (/^Câu hỏi \d+ bổ sung .*Nội dung trắc nghiệm 4 lựa chọn chuẩn hóa/u.test(row.q)) {
                placeholders++;
                return false;
            }
            const key = grade + ':' + row.q.trim() + ' ' + row.opts.map((option) => option.x).join(' ');
            if (used.has(key)) return false;
            used.add(key);
            return true;
        });
        const selected = unique.filter((_, i) => [0, 0.2, 0.4, 0.6, 0.8].some((fraction) =>
            i === Math.floor(unique.length * fraction)));
        if (grade === 12) {
            const n = lesson.slice(-2);
            const [, question, rubric] = authored.find(([id]) => id === n);
            selected.push({ id: 'KTC12-' + n, q: question, exp: rubric });
        }
        for (const row of selected) {
            const question = row.opts
                ? row.q + '\n' + row.opts.map((option) => option.k + '. ' + option.x).join('\n')
                : row.q;
            const start = performance.now();
            const [vector] = await encode([question]);
            const matches = retrieve(index, question, vector);
            results.push({
                grade,
                lesson,
                questionId: row.id,
                question,
                expectedOption: row.ans,
                explanation: row.exp,
                sourceIds: matches.map(({ id }) => id),
                top5: matches.map(({ lesson }) => lesson),
                hit: matches.some((match) => match.lesson === lesson),
                retrievalMs: Math.round(performance.now() - start),
            });
        }
    }
}
if (results.length < 300) throw new Error('At least 300 distinct questions are required.');
const totalHits = results.filter((row) => row.hit).length;
const lessons = new Set(results.map((row) => row.lesson)).size;
const grades = Object.fromEntries([10, 11, 12].map((grade) => {
    const rows = results.filter((row) => row.grade === grade);
    return [grade, { total: rows.length, hits: rows.filter((row) => row.hit).length }];
}));
const times = results.map((row) => row.retrievalMs).sort((a, b) => a - b);
const summary = {
    total: results.length, lessons, excludedPlaceholders: placeholders, totalHits, top5: totalHits / results.length,
    p95WarmRetrievalMs: times[Math.ceil(times.length * 0.95) - 1], grades,
};
await writeFile(process.argv[2] || 'ktc-retrieval-results.json', JSON.stringify({ summary, results }, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (summary.top5 < 0.95 || lessons !== 93) process.exitCode = 1;
