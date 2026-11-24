export const MODEL = 'Xenova/paraphrase-multilingual-MiniLM-L12-v2';
export const REVISION = '2c4055b12046f11709e9df2c122e59ffbdc2f900';
export const DTYPE = 'q8';
export const DIMENSION = 384;

export async function createEncoder(pipeline) {
    const extract = await pipeline('feature-extraction', MODEL, {
        revision: REVISION,
        dtype: DTYPE,
    });
    // The original SentenceTransformer uses a maximum sequence length of 128.
    extract.tokenizer.model_max_length = 128;
    return async (texts) => {
        const output = await extract(texts, { pooling: 'mean', normalize: true });
        return output.tolist();
    };
}
