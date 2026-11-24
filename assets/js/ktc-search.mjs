const tokenize = (value) => value.normalize('NFC').toLowerCase().match(/[\p{L}\p{N}_]+/gu) || [];

export function prepareIndex(chunks) {
    const frequency = new Map();
    const documents = chunks.map((chunk) => {
        const terms = new Map();
        const tokens = tokenize(chunk.title + ' ' + chunk.text);
        for (const token of tokens) terms.set(token, (terms.get(token) || 0) + 1);
        for (const token of terms.keys()) frequency.set(token, (frequency.get(token) || 0) + 1);
        const norm = Math.hypot(...chunk.vector);
        return { chunk, terms, length: tokens.length, norm };
    });
    const average = documents.reduce((sum, doc) => sum + doc.length, 0) / documents.length;
    return { documents, frequency, average };
}

export function retrieve(index, question, vector, lesson = '', limit = 5) {
    const { documents, frequency, average } = index;
    const tokens = new Set(tokenize(question));
    const vectorNorm = Math.hypot(...vector);
    const scores = documents.filter(({ chunk }) => !lesson || chunk.lesson === lesson).map((doc) => {
        let bm25 = 0;
        for (const token of tokens) {
            const tf = doc.terms.get(token);
            if (!tf) continue;
            const df = frequency.get(token);
            const idf = Math.log1p((documents.length - df + 0.5) / (df + 0.5));
            bm25 += idf * 2.2 * tf / (tf + 1.2 * (0.25 + 0.75 * doc.length / average));
        }
        const cosine = vector.reduce((sum, value, i) => sum + value * doc.chunk.vector[i], 0)
            / (doc.norm * vectorNorm);
        return { chunk: doc.chunk, bm25, cosine };
    });
    const fused = new Map();
    for (const [metric, weight] of [['bm25', 1], ['cosine', 1]]) {
        const ranked = scores.filter((row) => metric !== 'bm25' || row.bm25 > 0)
            .sort((a, b) => b[metric] - a[metric]).slice(0, 40);
        ranked.forEach(({ chunk }, rank) => {
            fused.set(chunk, (fused.get(chunk) || 0) + weight / (61 + rank));
        });
    }
    const ranked = [...fused].sort((a, b) => b[1] - a[1]).map(([chunk]) => chunk);
    if (lesson) return ranked.slice(0, limit);
    const seen = new Set();
    const diverse = ranked.filter((chunk) => {
        if (seen.has(chunk.lesson)) return false;
        seen.add(chunk.lesson);
        return true;
    });
    return diverse.slice(0, limit);
}
