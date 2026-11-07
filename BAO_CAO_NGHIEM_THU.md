# Báo cáo nghiệm thu – Hợp nhất kho học liệu Tin học 12

Nguồn kiến thức: `nguon/kien-thuc-chuan-hoa/BAI_XX.md`. Nguồn câu hỏi chuẩn: `nguon/ngan-hang-cau-hoi/BAI_XX_QUESTIONS.json`. Dữ liệu nguồn không bị sửa.

## Đối chiếu câu hỏi

- Tổng nguồn: **700 câu** (616 MCQ, 28 đúng/sai, 56 tự luận).
- Website trước hợp nhất: **743 bản ghi**.
- Câu nguồn đã có khớp ID trên website: **700**; câu nguồn nhập mới: **0**.
- Câu trùng thực sự bị loại: **0**; không có câu nguồn bị thiếu.
- Sau hợp nhất: **743 câu**. Giữ nguyên **43 câu chỉ có trên website** vì chưa có căn cứ xác định chúng là trùng hoặc cần loại.
- Phân loại sau hợp nhất: **651 MCQ, 33 đúng/sai, 59 tự luận**.
- Đối chiếu ID và nội dung nguồn: 700/700 khớp bài học, loại câu, nội dung câu; MCQ khớp phương án/đáp án; đúng/sai khớp mệnh đề; tự luận khớp hướng dẫn trả lời.

## Thống kê theo bài

| Bài | Câu nguồn | Câu đã có | Câu nhập mới | Câu trùng | Tổng sau hợp nhất | MCQ | Đúng/sai | Tự luận | Trạng thái |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | 25 | 25 | 0 | 0 | 45 | 39 | 2 | 4 | Đạt |
| 2 | 25 | 25 | 0 | 0 | 30 | 25 | 2 | 3 | Đạt |
| 3 | 25 | 25 | 0 | 0 | 29 | 25 | 2 | 2 | Đạt |
| 4 | 25 | 25 | 0 | 0 | 28 | 24 | 2 | 2 | Đạt |
| 5 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 6 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 7 | 25 | 25 | 0 | 0 | 28 | 24 | 2 | 2 | Đạt |
| 8 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 9 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 10 | 25 | 25 | 0 | 0 | 27 | 24 | 1 | 2 | Đạt |
| 11 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 12 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 13 | 25 | 25 | 0 | 0 | 27 | 24 | 1 | 2 | Đạt |
| 14 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 15 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 16 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 17 | 25 | 25 | 0 | 0 | 27 | 24 | 1 | 2 | Đạt |
| 18 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 19 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 20 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 21 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 22 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 23 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 24 | 25 | 25 | 0 | 0 | 26 | 23 | 1 | 2 | Đạt |
| 25 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 26 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |
| 27 | 25 | 25 | 0 | 0 | 26 | 23 | 1 | 2 | Đạt |
| 28 | 25 | 25 | 0 | 0 | 25 | 22 | 1 | 2 | Đạt |

## Kiến thức và build

- 28/28 tệp kiến thức chuẩn hóa được ánh xạ đúng bài. Nội dung từ 7 phần nguồn được chuyển sang cấu trúc hiển thị; phần kiến thức cũ không có trong nguồn giữ lại.
- Đã phát hiện ứng dụng nạp `data/lessons/` nhưng dữ liệu cũ nằm ở `data/lesons/`. Bản build mới tạo đúng `data/lessons/`; thư mục cũ không bị xóa.
- `scripts/build_data.py` đọc JSON câu hỏi từng bài và Markdown kiến thức chuẩn hóa; giữ lại câu web-only, tạo catalog, dữ liệu bài/câu hỏi và báo cáo.
- `scripts/build_single.py` được cập nhật để gộp 28 bài, dữ liệu câu hỏi, CSS và script ứng dụng.

## Kết quả kiểm thử

- Kiểm tra thống kê và đối chiếu nguồn/đích: **đạt**; script build trên GitHub Actions chạy thành công.
- Kiểm tra cấu trúc JSON và số lượng từng bài: **đạt trong bước build dữ liệu** (700 câu nguồn, 743 câu sau hợp nhất).
- Playwright E2E nhiều tệp: **34 đạt, 0 lỗi**; bản một tệp: **34 đạt, 0 lỗi**.
- E2E bao gồm giới hạn tối đa 10 câu mỗi lượt, chọn bài, lọc loại, nội dung/đáp án MCQ và đúng/sai, tự luận/tự đánh giá, ngẫu nhiên và chu kỳ tránh lặp, chấm điểm/làm lại, tiến độ, backup/restore, responsive, lỗi JS và offline.
- Workflow: `Question bank E2E`, run **42374678527**, commit `c3858d237fccdeb2b97aefc06987c59b1bad0b38`, kết luận **success**.
- Các chức năng lưu tiến độ/localStorage, Supabase và giao diện cũ được giữ nguyên; không thay đổi schema Supabase hoặc khóa localStorage.
