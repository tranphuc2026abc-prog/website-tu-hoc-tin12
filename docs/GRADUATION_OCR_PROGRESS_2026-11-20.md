# Tiến độ số hóa 96 đề Tin học — 20/11/2026

## Phạm vi đã công bố
Đã mở thi theo mã đề **0501 năm 2025**, với cả Tin học ứng dụng và Khoa học máy tính. Mỗi lượt giữ 24 câu phần I theo thứ tự gốc, 2 câu đúng/sai chung và 2 câu đúng/sai theo định hướng; 50 phút, thang 10 điểm. Ngân hàng đã kiểm chứng chứa đầy đủ 30 câu gốc, bao gồm cả 6 câu phần II; không xóa câu thuộc định hướng còn lại.

Có luyện ngẫu nhiên từ câu đã xác minh, điều hướng 28 câu, đánh dấu xem lại, xác nhận nộp, đếm ngược/nộp khi hết giờ, xem đúng/sai và điểm từng câu, làm lại, khôi phục bài đang làm, lịch sử trên thiết bị. Hiện chỉ có một mã đã mở nên phạm vi nội dung ngẫu nhiên còn hạn chế.

## Số liệu kiểm chứng
| Hạng mục | Kết quả |
| --- | --- |
| PDF đề gốc kiểm tra SHA-256 | 96/96, 384 trang; không sửa byte PDF |
| OCR đã lưu | 96/96 đề, 384/384 trang |
| Bản ghi OCR nháp | 2.880 câu; không phải 2.880 câu đã xác minh |
| Bản ghi tách được 4 phương án/ý | 1.656; vẫn cần đối chiếu, có thể còn lỗi nội dung/mã |
| Mã đề hoàn chỉnh đã xác minh | 1: 2025/0501 |
| Câu hỏi đã xác minh và đưa vào thi | 30 (24 lựa chọn + 6 đúng/sai gốc) |
| Đáp án 2025 đã ghép | 30 câu của mã 0501 |
| Đáp án 2026 | Có PDF chính thức; đọc và đối chiếu 30 đáp án mã 0501; chưa ghép vào đề đã xác minh |
| Câu trùng trong ngân hàng 30 câu đã xác minh | 0 |
| Trùng trên toàn bộ 96 đề | Chưa kết luận; không lấy OCR nháp làm số liệu loại trùng chính thức |
| Đề còn chờ kiểm chứng | 95 |

30 câu đã xác minh đồng thời có mặt trong bộ OCR nháp. Không cộng 30 vào 2.880 để thống kê tổng câu nguồn.

## Nguồn và cách kiểm chứng
- Gốc triển khai: commit 706a85929bfa2fe2a9a76cb0f41ece9deff73aa6; nhánh feat/graduation-ocr-verified-bank.
- 2025: data/exams/answers/2025.pdf. Đọc trực quan cột 0501, hàng 1–30; hàng 25–30 tương ứng 6 câu phần II.
- 2026: PDF đáp án chính thức được dẫn từ Báo điện tử Chính phủ:
  https://baochinhphu.vn/cong-bo-dap-an-chinh-thuc-cac-mon-thi-tot-nghiep-thpt-2026-102260619180653891.htm
- Tệp gốc 2026:
  https://bcp.cdnchinhphu.vn/334894974524682240/2026/6/19/6-dap-an-tin-hoc-17818660142981097963099.pdf
- Lưu SHA-256 của PDF nguồn, ảnh trích từng câu và PDF đáp án. Mỗi câu xác minh có năm, mã, phần, số câu, trang, hình trích, phương án, đáp án, định hướng và nhật ký đối chiếu.
- Đối chiếu toàn bộ 4 trang đề 0501 năm 2025 và cột đáp án. Giữ ảnh nguyên bản từng câu; chép và kiểm tra 3 đoạn Python bằng AST, giữ cả mã C++/HTML/SQL liên quan dưới dạng văn bản an toàn, không thực thi HTML từ đề.
- Đã phát hiện và sửa đúng dấu gạch dưới trong chuỗi TRI_TUE_NHAN_TAO khi đối chiếu ảnh; không tin nguyên văn OCR cho mã lập trình.
- Tesseract 5.5.3, mô hình vie+eng; lưu loại mô hình, mã băm mô hình, từ có độ tin cậy thấp và hộp giới hạn. Có thể tiếp tục từ checkpoint mà không OCR lại 384 trang.
- 2 đầu câu 2025/0524 và 2025/0533 bị OCR đọc 5 thành 3 đã được đối chiếu trang 4 và lưu bản sửa riêng. Văn bản OCR thô không bị thay đổi; kiểm tra này chỉ xác nhận số đầu câu, không xác nhận toàn bộ nội dung.
- Bộ kiểm tra thứ tự 24+6 đã đạt cho cả 96 bản nháp. Điều đó không chứng minh nội dung OCR, các phương án hay cú pháp mã đã chính xác.

## Kiểm thử
- Kiểm thử học tập hiện có: **45 đạt, 0 lỗi ở lần chạy cuối**. Một lượt trước đó gặp timeout hiển thị kết quả trong phép thử luyện tập ngẫu nhiên; chạy lại toàn bộ đạt. Không sửa mã học tập để né lỗi.
- Bộ kiểm thử lõi thi: **6 đạt, 0 lỗi**.
- Bộ kiểm thử OCR/checkpoint: **3 đạt, 0 lỗi**.
- Bộ kiểm thử trình duyệt phân hệ thi: đạt với dữ liệu thật. Kiểm tra 96 PDF, 30 ảnh câu gốc, chỉ mở đề xác minh, 2 định hướng, khôi phục đáp án/đánh dấu/thời hạn, đúng hết 10 điểm, bỏ trống 0, chấm từng mức đúng/sai, chặn nộp lặp, lịch sử, hết giờ, ngẫu nhiên và màn hình 390px.
- Kiểm tra JSON, SHA-256, thứ tự đề gốc, nguồn đáp án và cú pháp Python: đạt.
- Các cảnh báo có sẵn ở khối 10: 33 bài thiếu thành phần mở rộng; phần trọng tâm dài nhất 21.774 ký tự. Ngoài phạm vi đợt sửa này.
- Kết quả chi tiết: docs/GRADUATION_OCR_TEST_RESULTS_2026-11-20.json.

## Bảo toàn học liệu
Không thay đổi data/lessons, data/lesons, data/questions, nguon, hoc-lieu-chuan-hoa, các catalog 10/11/12, cấu hình đăng nhập hoặc mã đồng bộ. Kiểm thử vẫn nạp đủ 34/31/28 bài; ngân hàng lần lượt 1.117/1.026/743 câu.

## Phần chưa hoàn thành và điểm tiếp tục
1. Rà soát nội dung, phương án, từng ý và mã lập trình của 95 mã còn lại; 1.224 bản nháp chưa tách tin cậy đủ bốn phương án/ý.
2. Đối chiếu ảnh cho các từ OCR nghi ngờ; tạo ảnh từng câu và bản chép đúng trước khi chuyển trạng thái verified.
3. Đọc, kiểm chứng và ghép bảng đáp án cả 48 mã mỗi năm. Đáp án 2026/0501 đã chép riêng nhưng chưa được đưa vào chấm điểm.
4. Xác định các nhóm câu trùng sau khi nội dung chuẩn; giữ mọi lần xuất hiện trong đề gốc và chỉ loại trùng trong luyện ngẫu nhiên.
5. Chỉ thêm mã vào manifest.papers khi đủ 30 câu, có đáp án chính thức và qua kiểm thử. Mã chưa đạt vẫn xem PDF nhưng không chấm tự động.

Các bản nháp lưu trong data/exams/ocr-drafts; chỉ data/exams/questions.json và các paper có status verified được nạp vào phân hệ thi. Trạng thái từng mã và số liệu máy đọc được: data/exams/ocr-progress.json.

## Đường dẫn kiểm tra
- /de-thi-tot-nghiep.html → Thi thử → 2025 → 0501 → chọn định hướng.
- /data/exams/answers/2026.pdf
- /data/exams/ocr-progress.json

Báo cáo này là checkpoint triển khai từng phần, không phải nghiệm thu hoàn thành ngân hàng 96 đề.
