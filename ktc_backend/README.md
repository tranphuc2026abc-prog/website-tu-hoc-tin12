 # KTC AI tutor

Deploy from repository root: install `pip install -r ktc_backend/requirements.txt`, set server environment `GROQ_API_KEY`, then run `uvicorn ktc_backend.main:app --host 0.0.0.0 --port 8000` (use hosting provider port as appropriate). Set public HTTPS URL in assets/js/ktc-config.js only after deployment. Restart backend on lesson updates to rebuild in-memory indexes. Never commit secrets. Before public deployment add authentication or rate limiting, resource limits, and test all grades, model downloads, cold start, source links, mobile and voice. Chat sends at most six recent messages. Global in-process quota defaults to 12 requests/minute; distributed quota and authentication remain necessary for public use. No runtime tests performed yet.

Run `python tests/test_ktc_corpus.py` before deployment.
