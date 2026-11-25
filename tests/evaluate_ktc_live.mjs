import { appendFile, readFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { performance } from 'node:perf_hooks';

const [mode, endpoint, retrievalFile, evidenceFile] = process.argv.slice(2);
if (!['answers', 'load40'].includes(mode) || !endpoint || !retrievalFile || !evidenceFile) {
    console.error('Usage: node tests/evaluate_ktc_live.mjs <answers|load40> <staging Worker URL> <retrieval JSON> <evidence JSONL>');
    process.exit(2);
}

const target = new URL(endpoint);
if (target.protocol !== 'https:' || !target.hostname.endsWith('.workers.dev') ||
    target.username || target.password || target.pathname !== '/' || target.search || target.hash) {
    throw new Error('Use the HTTPS origin of the school-owned staging Worker.');
}
const origin = process.env.KTC_STAGING_ORIGIN || 'https://tranphuc2026abc-prog.github.io';
const { results } = JSON.parse(await readFile(retrievalFile, 'utf8'));
const cases = results.map((sample) => ({ ...sample, id: sample.lesson + ':' + sample.questionId }));
if (cases.length < 300 || new Set(cases.map((sample) => sample.id)).size !== cases.length) {
    throw new Error('A retrieval report with at least 300 unique cases is required.');
}
const health = await fetch(new URL('/health', target), { signal: AbortSignal.timeout(10000) });
if (!health.ok || (await health.json()).status !== 'configured') throw new Error('Staging Worker is not configured.');

async function ask(sample) {
    const start = performance.now();
    try {
        const response = await fetch(new URL('/ask', target), {
            signal: AbortSignal.timeout(16000),
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Origin: origin },
            body: JSON.stringify({
                grade: sample.grade, lesson: '', history: [], question: sample.question, sourceIds: sample.sourceIds,
            }),
        });
        const body = await response.json();
        const valid = response.ok && typeof body.answer === 'string' && Array.isArray(body.sources);
        return {
            id: sample.id,
            status: response.status,
            latencyMs: Math.round(performance.now() - start),
            retryAfter: Number(response.headers.get('Retry-After')) || 0,
            ...(valid ? { answer: body.answer, sources: body.sources } : { error: body.error || 'response_schema' }),
        };
    } catch (error) {
        return { id: sample.id, status: 0, latencyMs: Math.round(performance.now() - start), error: error.name };
    }
}

function summarize(rows) {
    const durations = rows.map((row) => row.latencyMs).sort((a, b) => a - b);
    const counts = {};
    for (const row of rows) counts[row.status] = (counts[row.status] || 0) + 1;
    return {
        total: rows.length,
        validAnswers: rows.filter((row) => typeof row.answer === 'string').length,
        responsesByStatus: counts,
        p50ApiMs: durations[Math.ceil(durations.length * 0.5) - 1],
        p95ApiMs: durations[Math.ceil(durations.length * 0.95) - 1],
    };
}

if (mode === 'load40') {
    const prompts = Array.from({ length: 40 }, (_, i) => cases[Math.floor(i * cases.length / 40)]);
    const responses = await Promise.all(prompts.map(ask));
    const summary = summarize(responses);
    await appendFile(evidenceFile, JSON.stringify({ mode, timestamp: new Date().toISOString(), summary, responses }) + '\n');
    console.log(JSON.stringify(summary, null, 2));
    if (summary.validAnswers < 40 || summary.p95ApiMs >= 5000) process.exitCode = 1;
} else {
    const history = await readFile(evidenceFile, 'utf8').catch((error) => {
        if (error.code === 'ENOENT') return '';
        throw error;
    });
    const completed = new Map(history.split('\n').filter(Boolean).map((line) => {
        const row = JSON.parse(line);
        return [row.id, row];
    }));
    const rows = [];
    for (const sample of cases) {
        let response = completed.get(sample.id);
        if (!response) {
            response = await ask(sample);
            if (response.status === 429) {
                await delay(Math.min(Math.max(response.retryAfter, 10), 90) * 1000);
                response = await ask(sample);
            }
            const evidence = {
                ...response, grade: sample.grade, question: sample.question, expectedOption: sample.expectedOption,
                rubric: sample.explanation,
            };
            await appendFile(evidenceFile, JSON.stringify(evidence) + '\n');
            if (response.status === 429) {
                console.error('Quota still exhausted. Keep the evidence and start a new run after quota resets.');
                process.exitCode = 1;
                break;
            }
            await delay(6500);
        }
        rows.push(response);
    }
    console.log(JSON.stringify(summarize(rows), null, 2));
}
