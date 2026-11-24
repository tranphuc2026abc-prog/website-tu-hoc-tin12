import test from 'node:test';
import assert from 'node:assert/strict';
import worker, { Quota } from '../workers/ktc/worker.mjs';
import sources from '../workers/ktc/sources.generated.json' with { type: 'json' };

const origin = 'https://tranphuc2026abc-prog.github.io';
const first = Object.values(sources).find((source) => source.lesson === 'ICT10_B01');
const requestData = { grade: 10, lesson: '', question: 'Dữ liệu là gì?', history: [], sourceIds: [first.id] };
const request = (body = requestData, headers = {}, method = 'POST') =>
    new Request('https://test.workers.dev/ask', {
        method,
        headers: { Origin: origin, 'Content-Type': 'application/json', ...headers },
        ...(method === 'POST' ? { body: JSON.stringify(body) } : {}),
    });
const env = {
    ALLOWED_ORIGIN: origin,
    GROQ_API_KEY: 'unit-test-key',
    GROQ_MODEL: 'openai/gpt-oss-20b',
    IP_LIMIT: { limit: async () => ({ success: true }) },
    QUOTA: {
        idFromName: (name) => name,
        get: () => ({ fetch: async () => Response.json({ ok: true }) }),
    },
};

test('rejects unapproved Origin, allows preflight, and reports missing configuration', async () => {
    assert.equal((await worker.fetch(request(requestData, { Origin: 'https://other.example' }), env)).status, 403);
    const preflight = await worker.fetch(request(undefined, {}, 'OPTIONS'), env);
    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get('Access-Control-Allow-Origin'), origin);
    assert.equal((await worker.fetch(request(), { ...env, GROQ_API_KEY: '' })).status, 503);
});

test('rejects unknown, duplicate, wrong grade and wrong lesson sources', async () => {
    for (const input of [
        { sourceIds: ['0'.repeat(24)] },
        { sourceIds: [first.id, first.id] },
        { grade: 11 },
        { lesson: 'ICT10_B02' },
        { history: [{ role: 'system', content: 'xin chào' }] },
    ]) {
        assert.equal((await worker.fetch(request({ ...requestData, ...input }), env)).status, 422);
    }
    assert.equal((await worker.fetch(request({ ...requestData, question: 'a'.repeat(9000) }), env)).status, 413);
});

test('checks per-IP quota and global quota before contacting the model', async () => {
    const ip = await worker.fetch(request(), { ...env, IP_LIMIT: { limit: async () => ({ success: false }) } });
    assert.equal(ip.status, 429);
    const global = await worker.fetch(request(), {
        ...env,
        QUOTA: { ...env.QUOTA, get: () => ({ fetch: async () => Response.json({ retry: 12 }, { status: 429 }) }) },
    });
    assert.equal(global.status, 429);
    assert.equal(global.headers.get('Retry-After'), '12');
});

test('reserves request and token allowances in quota storage', async () => {
    const storage = new Map();
    const quota = new Quota({ storage: { transaction: (callback) => callback(storage) } }, {
        GROQ_REQUESTS_PER_MINUTE: '2', GROQ_TOKENS_PER_MINUTE: '150',
        GROQ_REQUESTS_PER_DAY: '5', GROQ_TOKENS_PER_DAY: '500',
    });
    storage.put = storage.set.bind(storage);
    const reserve = (tokens) => quota.fetch(new Request('https://quota.internal/reserve', {
        method: 'POST', body: JSON.stringify({ tokens }),
    }));
    assert.equal((await reserve(80)).status, 200);
    assert.equal((await reserve(80)).status, 429);
    assert.equal((await reserve(40)).status, 200);
    assert.equal((await reserve(10)).status, 429);
});

test('uses authoritative source text and returns only resolved citations', async (t) => {
    const upstream = t.mock.method(globalThis, 'fetch', async (url, options) => {
        assert.equal(url, 'https://api.groq.com/openai/v1/chat/completions');
        assert.equal(options.headers.Authorization, 'Bearer unit-test-key');
        const body = JSON.parse(options.body);
        assert.equal(body.reasoning_effort, 'low');
        assert.equal(body.include_reasoning, false);
        const prompt = JSON.parse(body.messages[1].content);
        assert.ok(prompt.context[0].includes(first.text));
        assert.ok(!options.body.includes('text chosen by browser'));
        return Response.json({ choices: [{ message: { content: 'Xem học liệu [1].' } }] });
    });
    const result = await worker.fetch(request({ ...requestData, text: 'text chosen by browser' }), env);
    assert.equal(result.status, 200);
    const response = await result.json();
    assert.equal(response.sources[0].lesson, first.lesson);
    assert.ok(!JSON.stringify(response).includes(env.GROQ_API_KEY));
    upstream.mock.mockImplementation(async () =>
        Response.json({ choices: [{ message: { content: 'Nguồn sai [9]' } }] }));
    assert.equal((await worker.fetch(request(), env)).status, 502);
    upstream.mock.mockImplementation(async () =>
        Response.json({ choices: [{ message: { content: 'Một câu trả lời thiếu nguồn.' } }] }));
    assert.equal((await worker.fetch(request(), env)).status, 502);
    upstream.mock.mockImplementation(async () =>
        Response.json({ choices: [{ message: { content: 'Chưa đủ học liệu. Em có thể nói rõ hơn không?' } }] }));
    assert.equal((await worker.fetch(request(), env)).status, 200);
});
