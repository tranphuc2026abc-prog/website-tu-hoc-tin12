# Trợ lý AI KTC

GitHub Pages xuất bản chỉ mục theo khối. Trình duyệt nhúng câu hỏi bằng cùng bản MiniLM q8, bộ tách từ và phép pooling với trình dựng chỉ mục. BM25 và cosine được hợp nhất bằng RRF. Khi tìm trong cả khối, khâu cuối chọn tối đa một đoạn mỗi bài để tránh một bài chiếm cả năm kết quả. Khi mở từ trang bài học, truy xuất giới hạn trong bài đang chọn. Worker chỉ nhận mã đoạn và tự tra văn bản gốc được đóng gói từ học liệu của website. Dịch vụ trả lời mặc định dùng GPT-OSS 20B trên Groq với mức suy luận thấp. Groq thông báo ngừng Llama 3.1 8B Instant ngày 16/08/2026.

## Dựng và kiểm tra

Dùng Node 22 trở lên và Python 3.11 trở lên. Chạy ở thư mục gốc.

```bash
export KTC_MODEL_DIR="$PWD/.ktc-model/"
ONNXRUNTIME_NODE_INSTALL_CUDA=skip npm ci
python scripts/fetch_ktc_model.py
python scripts/build_all_grades.py nguon
python tests/test_ktc_corpus.py
python scripts/build_ktc_index.py
node --test tests/ktc-worker.test.mjs
node tests/evaluate_ktc.mjs /tmp/ktc-retrieval-results.json
npx wrangler deploy --config workers/ktc/wrangler.toml --dry-run --outdir /tmp/ktc-worker
```

Lệnh đánh giá chọn tối đa 5 câu trắc nghiệm có đáp án cho mỗi bài, bỏ câu trùng và câu có thân dạng mẫu. Bộ câu hỏi tình huống Tin 12 có một câu tự luận ngắn cho mỗi bài và đáp án đối chiếu. Mỗi lượt tìm theo khối, không truyền mã bài. Một câu đạt top 5 nếu bài gốc xuất hiện trong năm nguồn. Thời gian truy xuất Node đo sau khi nạp mô hình, khác thời gian người dùng phải chờ trên điện thoại.

## Nghiệm thu trên môi trường thử nghiệm

- Triển khai Worker thử nghiệm từ cùng bộ nguồn đã dựng. Cấu hình ALLOWED_ORIGIN thành origin của trang thử nghiệm khi khác cấu hình mặc định.
- Tạo secret GROQ_API_KEY trong Cloudflare. Trang thử nghiệm chỉ cần URL công khai của Worker, thông qua biến KTC_API_URL khi đóng gói.
- Dùng từng câu trong báo cáo truy xuất để hỏi Worker với các ID đã truy xuất. Chấm đạt khi đáp án đúng, giải thích khớp ý bắt buộc trong lời giải hoặc rubric, và trích dẫn thực sự hỗ trợ kết luận. Ghi riêng các câu từ chối, sai, thiếu căn cứ và lỗi HTTP. Tính tỷ lệ trên toàn bộ số câu đã giao. Bổ sung tình huống hỏi nối tiếp, hỏi thiếu dữ liệu và hỏi lạc chủ đề trước khi mở cho học sinh.
- Đo p50 và p95 từ lúc gửi câu hỏi đến khi hiển thị câu trả lời và nguồn. Tách lượt máy chưa có mô hình khỏi lượt đã tải mô hình. Tiến hành trên điện thoại và máy tính.
- Thử 40 phiên cùng gửi một lượt trên Worker do trường sở hữu. Ghi số thành công, 429, 5xx và p95. Lặp một lượt với đường mạng của trường để đo tác động của IP chung. Trần mặc định là 10 yêu cầu/IP/phút và 25 yêu cầu Groq/phút, có thêm giới hạn token. Cấu hình này có thể trả 429 trong giờ học nếu cả lớp gửi cùng lúc.

Lệnh thu thập minh chứng trên Worker thử nghiệm do trường quản lý. Dùng hai tệp đầu ra riêng. Tệp trả lời JSON Lines lưu từng lượt để có thể chạy tiếp; chấm chuyên môn theo rubric cạnh câu trả lời.

```bash
node tests/evaluate_ktc_live.mjs answers "$STAGING_WORKER_URL" /tmp/ktc-retrieval-results.json /tmp/ktc-answers.jsonl
node tests/evaluate_ktc_live.mjs load40 "$STAGING_WORKER_URL" /tmp/ktc-retrieval-results.json /tmp/ktc-load40.jsonl
```

Đặt KTC_STAGING_ORIGIN nếu Worker thử nghiệm dùng origin khác mặc định. Bài đo tải gửi từ một mạng, có thể gặp giới hạn IP chung. Thời gian ghi trong tệp là của API; vẫn cần đo trên trình duyệt có MiniLM để kiểm tra thời gian đầu đến cuối.

## Phát hành sau khi nghiệm thu đạt

Trong Cloudflare Workers, lưu GROQ_API_KEY dưới dạng secret. Trong GitHub Actions, cấu hình biến KTC_API_URL bằng URL workers.dev, biến KTC_CLOUDFLARE_ACCOUNT_ID và secret KTC_CLOUDFLARE_API_TOKEN của tài khoản có quyền triển khai. Sau khi PR được hợp nhất, luồng Pages dựng chỉ mục, cập nhật Worker và kiểm tra /health trước khi phát hành gói Pages. Để chạy thử cục bộ, có thể dựng riêng dữ liệu nguồn Worker bằng `python scripts/build_ktc_index.py --sources-only`.

Khoá API Groq chỉ được Worker sử dụng. Worker giới hạn theo IP và ngân sách toàn cục qua Durable Object. CORS quy định trình duyệt được gọi API từ origin nào. Toàn bộ học liệu dùng cho truy xuất là dữ liệu công khai của website.
