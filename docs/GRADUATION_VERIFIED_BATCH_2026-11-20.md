> Cập nhật mới nhất: **24 mã / 720 câu đã xác minh**, tiếp tục từ 2025/0525. Xem [đợt 0505–0524](GRADUATION_BATCH_0505_0524_2026-11-20.md). Báo cáo bên dưới là checkpoint lịch sử 4 mã.

# Đợt xác minh đề 2025/0502–0504 — 20/11/2026

Tiếp tục từ c834075229c99c76cfea18fb1b28f16bb7a8716f. Hoàn thành thêm 3 mã, tổng 4/96 mã và 120 câu đã xác minh. 92 mã còn lại giữ nguyên OCR nháp, chưa mở thi.

| Hạng mục | Kết quả |
| --- | --- |
| PDF | 96/96, 384 trang, SHA-256 hợp lệ |
| Mã mới | 2025/0502, 0503, 0504 |
| Câu mới | 90; giữ đủ 30 câu mỗi mã |
| Tổng câu xác minh | 120 (96 MCQ, 24 đúng/sai) |
| Đáp án 2025 ghép | 120 câu; đối chiếu cột PDF chính thức |
| Đáp án 2026 ghép vào đề đã xác minh | 0 |
| Nội dung duy nhất | 60; 60 lần lặp được giữ trong đề gốc |
| Hồi quy học tập | 45 đạt, 0 lỗi |
| Lõi thi | 11 đạt, 0 lỗi |
| OCR/checkpoint | 3 đạt, 0 lỗi |
| Trình duyệt thi | Đạt: cả 4 mã, cả 2 định hướng, 96 PDF, ảnh nguồn, chấm 10/0, khôi phục, hết giờ, nộp một lần, lịch sử, ngẫu nhiên, 390px |

## Bằng chứng và sửa lỗi

Đối chiếu trực quan bốn trang mỗi mã và cột đáp án. Lưu bản ánh xạ thủ công tại data/exams/reviews/2025, vị trí đầu câu tại data/exams/layout/2025, ảnh cột đáp án tại data/exams/answers/columns/2025. Các ảnh câu nhiều trang được ghép từ vùng gốc, không bỏ phần tiếp nối.

Dùng OCR sẵn có để đề xuất ghép nội dung, rồi so sánh nguồn. Chuẩn hóa lại tiếng Việt, HTML/CSS và mã Python theo mẫu đã đọc. Phát hiện và sửa thứ tự phương án C/D câu I.21 mã 0504 (bảng HTML); sửa bản nháp nhận định đáp án câu II.4 nhóm B thành SDSD theo PDF chính thức. Không thống kê số lỗi ký tự OCR vì chưa có nhật ký đếm ký tự độc lập.

scripts/build_verified_exam_batch.py kiểm tra đáp án sau hoán vị trước khi xuất; không tự duyệt từ độ tương đồng OCR. 60 mẫu nội dung chỉ là mẫu đã đối chiếu, không chứng minh các mã khác đã được xác minh. Chỉ thêm mã có bản rà soát thủ công và đủ 30 câu vào manifest.

## Bảo toàn và giới hạn

Không sửa học liệu, cấu hình đăng nhập hoặc mã đồng bộ. Hồi quy vẫn nạp 34/31/28 bài và 1117/1026/743 câu. Cảnh báo nội dung khối 10 có sẵn: 33 bài thiếu thành phần mở rộng, phần trọng tâm dài nhất 21774 ký tự.

Còn 44 mã năm 2025 và 48 mã năm 2026 chưa xác minh. Tiếp tục từ 2025/0505; OCR và bản đề xuất không được đưa thẳng vào thi có điểm. Đã đọc thêm cột đáp án 0505–0516 nhưng chưa xác nhận nội dung các đề tương ứng, không cộng vào số hoàn thành.

Checkpoint máy đọc: data/exams/ocr-progress.json. Báo cáo cũ giữ vai trò lịch sử; số liệu đợt này thay thế số liệu 1 mã/30 câu trong báo cáo trước.

Kiểm tra: https://tranphuc2026abc-prog.github.io/website-tu-hoc-tin12/de-thi-tot-nghiep.html → 2025 → 0502/0503/0504.
