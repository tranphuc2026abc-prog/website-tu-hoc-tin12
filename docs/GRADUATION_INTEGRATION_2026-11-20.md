# Tích hợp kho đề tốt nghiệp Tin học 2025–2026 — 20/11/2026

## Hoàn thành
- Nhập 96 PDF gốc từ kho_de_tin_hoc_2025_2026_chuan_hoa.zip; 48 mã 0501–0548 mỗi năm.
- Kiểm tra SHA-256 của từng PDF so với manifest ZIP, không sửa nội dung PDF.
- 384 trang đề; tất cả có 0 ký tự trích xuất bằng pypdf. Chi tiết tại data/exams/source-audit.json.
- Danh mục năm/mã đề, bộ lọc, xem PDF, mở thẻ mới và đáp án PDF gốc 2025.
- Sửa lỗi cấu trúc thi thử: 24 MCQ + 2 Đ/S chung + 2 Đ/S theo định hướng; tối đa 10 điểm. Trước đây chọn 6 Đ/S nên tối đa 12 nhưng hiển thị /10.
- Thêm kiểm thử PDF và giao diện vào quy trình Pages. Sửa đường dẫn tệp tạm của kiểm thử để chạy được Windows/Linux.

## Chưa hoàn thành, chưa kích hoạt
- OCR và số hóa 96 đề; ghép đáp án; loại trùng câu hỏi từ nguồn gốc.
- ZIP chỉ chứa đáp án 2025 dạng quét; chưa có đáp án 2026 trong ZIP. Trang tham khảo CMC không truy xuất được ở phiên kiểm tra này.
- data/exams/questions.json vẫn rỗng. Thi tự động bị khóa có thông báo rõ ràng; không có câu hỏi/đáp án tự tạo trong ngân hàng.
- Kiểm thử chấm điểm dùng fixtures chỉ tồn tại trong tests/graduation-e2e.js, không phải học liệu đã số hóa.

## Kiểm thử trước commit
- scripts/validate_graduation_exams.py --pdf-only: PASS 96/96, khớp SHA-256.
- tests/e2e.js http: 45 đạt, 0 lỗi; 34 bài khối 10, 31 bài khối 11, 28 bài khối 12; ngân hàng lần lượt 1117, 1026, 743 câu được nạp.
- tests/graduation-e2e.js: PASS mọi liên kết PDF trả 200 và có header %PDF, chọn năm/mã, khóa ngân hàng rỗng, màn hình 390px, đề 28 câu, đúng hết 10 điểm, bỏ trống 0 điểm, khóa đáp án và lưu lịch sử.
- Bộ kiểm thử cũ cảnh báo sẵn có ở khối 10: 33 bài thiếu thành phần mở rộng, phần trọng tâm dài nhất 21774 ký tự. Không sửa học liệu trong đợt tích hợp này.
- Bộ kiểm tra đầy đủ (không --pdf-only) phải trả lỗi khi ngân hàng chưa sẵn sàng. Không xem việc xuất bản PDF là đã hoàn thành số hóa.

## Bảo toàn
Không thay đổi dữ liệu bài học/ngân hàng câu hỏi/nguồn của khối 10, 11, 12. Không đổi khóa localStorage hoặc cơ sở dữ liệu học sinh.

## Đường dẫn
- /de-thi-tot-nghiep.html
- /data/exams/manifest.json
- /data/exams/answers/2025.pdf
