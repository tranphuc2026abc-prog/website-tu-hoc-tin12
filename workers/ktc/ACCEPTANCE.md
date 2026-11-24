# Kiểm thử KTC AI 2.0 ngày 24/11/2026

Kết quả trên mã PR #87. Học liệu được dựng lại bằng `scripts/build_all_grades.py nguon` như trong luồng GitHub Pages.

| Phép đo | Kết quả |
| --- | --- |
| Khối 10 | 34 bài, 407 đoạn; đúng bài trong top 5 ở 159/170 câu |
| Khối 11 | 31 bài, 309 đoạn; đúng bài trong top 5 ở 152/155 câu |
| Khối 12 | 28 bài, 440 đoạn; đúng bài trong top 5 ở 51/51 câu |
| Tổng hợp | 93 bài, 1.156 đoạn; 362/376 câu, 96,28% |
| Truy xuất khi MiniLM đã nạp trong Node | p95 33 ms |
| Chromium 159 trên gói Pages cục bộ | Menu 3 trang, ngữ cảnh và liên kết bài 11 Tin 12, khung 1.280 / 390 / 320 px; 7.226 ms lượt lạnh, 323 ms lượt kế tiếp, chỉ truy xuất |
| Bảo vệ API | 5/5 kiểm thử Worker bằng Node, dùng dữ liệu học liệu thật và giả lập phản hồi upstream |
| Đóng gói Cloudflare | Wrangler dry run thành công |
| Hồi quy website | 46/46 kiểm tra Chromium; 195/195 kiểm thử xử lý đề; 4/4 kiểm thử OCR; PDF 96/96 và luồng thi thử Chromium đạt |

Bộ đánh giá truy xuất loại 560 mục có thân câu hỏi dạng văn bản mẫu. Các câu dùng để tính kết quả gồm 348 câu trắc nghiệm có đáp án trong ngân hàng hiện có và 28 câu tình huống Tin 12 kèm rubric. Mỗi lượt tìm trong cả khối. Tỷ lệ tổng đạt yêu cầu 95%; riêng khối 10 đạt 93,53%.

Dữ liệu trả lời Groq, tỷ lệ đúng chuyên môn, thời gian trả lời đầu đến cuối và tải 40 người dùng trên Worker thử nghiệm đang chờ thông tin triển khai Cloudflare/Groq. Lượt lạnh trên trình duyệt cục bộ đã vượt 5 giây trước khi gọi Groq. Với quota hiện tại, 40 phiên gửi cùng lúc có thể nhận 429.

`tests/evaluate_ktc.mjs` sinh JSON chi tiết từng câu. GitHub Actions lưu JSON và chỉ mục theo SHA commit. Xem lệnh dựng lại, thu thập phản hồi và đo tải trong README cùng thư mục.
