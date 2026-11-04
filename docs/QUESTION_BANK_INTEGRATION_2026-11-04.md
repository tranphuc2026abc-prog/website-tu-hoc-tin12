# Báo cáo tích hợp ngân hàng câu hỏi Tin học 12

Ngày thực hiện: 04/11/2026  
Nhánh: `feature/integrate-approved-700-question-bank`

## Nguồn dữ liệu
- Nguồn chính: 28 tệp `nguon/ngan-hang-cau-hoi/BAI_XX_QUESTIONS.json`.
- Số mục nguồn: 700 (mỗi bài 25 mục).
- Giữ nguyên văn bản câu hỏi, lựa chọn, đáp án và giải thích của nguồn JSON.
- Chuyển dữ liệu sang cấu trúc runtime mà website đang sử dụng; đặt trạng thái `st: "ok"` cho các mục thuộc bộ đã duyệt.

## Kết quả hợp nhất
- 700 mục từ JSON: 616 trắc nghiệm, 28 câu Đúng/Sai dạng cụm, 56 tự luận.
- Đối chiếu ngân hàng runtime cũ: giữ lại 43 câu có nội dung khác biệt; bỏ bản cũ khi trùng nội dung với nguồn JSON.
- Tổng runtime sau hợp nhất: 743 mục, gồm 651 trắc nghiệm, 33 Đúng/Sai, 59 tự luận.
- Không còn mục `review` trong 28 tệp runtime.
- Cập nhật `data/catalog.js` để nạp ngân hàng câu hỏi cho đủ 28 bài.
- Cập nhật `scripts/build_data.py`: JSON là nguồn chính; câu Markdown cũ chỉ được thêm nếu không trùng, tránh lần build sau ghi đè mất ngân hàng.
- Cập nhật kiểm thử E2E theo số liệu mới và kiểm tra cả 28 bài.

## Quy tắc chống trùng
Chuẩn hóa văn bản câu hỏi (Unicode NFD, bỏ dấu, chữ thường, chuẩn hóa dấu câu/khoảng trắng) để so sánh. Ưu tiên bản từ JSON đã duyệt; chỉ giữ câu từ ngân hàng runtime cũ nếu nội dung câu hỏi chưa có trong nguồn JSON.

## Kiểm tra đã thực hiện
- Đã kiểm tra đủ 28 tệp runtime: mỗi bài có tối thiểu 25 mục.
- Kiểm tra ID không trùng trong từng bài.
- Kiểm tra trạng thái: toàn bộ mục runtime đều `st: "ok"`.
- Kiểm tra phân loại và số lượng tổng hợp: 743 mục.
- Đã cập nhật kịch bản E2E; chưa chạy được trình duyệt Chromium trong phiên thao tác GitHub này, vì vậy cần chạy `node tests/e2e.js` trong môi trường có Playwright trước khi hợp nhất vào `main`.

## Lưu ý
Tệp HTML một-file cần được tạo lại sau khi hợp nhất bằng `python scripts/build_single.py`. Website GitHub Pages chính sử dụng `index.html` và các tệp dữ liệu trong `data/`.
