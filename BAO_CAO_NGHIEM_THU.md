# Báo cáo nghiệm thu – Hợp nhất kho học liệu Tin học 12

Nguồn kiến thức: `nguon/kien-thuc-chuan-hoa/BAI_XX.md`. Nguồn câu hỏi chuẩn: `nguon/ngan-hang-cau-hoi/BAI_XX_QUESTIONS.json`. Các tệp trong `nguon/` được giữ nguyên.

## Đối chiếu câu hỏi

- Tổng câu nguồn: **700** (616 MCQ, 28 đúng/sai, 56 tự luận).
- Website trước build: **743** bản ghi.
- Câu nguồn đã có khớp ID: **700**; câu nguồn nhập mới: **0**.
- Bản ghi trùng thực sự loại khi build: **0**; câu nguồn thiếu: **0**.
- Tổng sau build: **743**, gồm **43 câu chỉ có trên website** được giữ nguyên.
- Phân loại sau build: **651 MCQ, 33 đúng/sai, 59 tự luận**.
- Đã so khớp 700/700 ID, bài học, loại, nội dung, phương án/đáp án MCQ, mệnh đề đúng/sai và gợi ý tự luận.

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

## Kiến thức và quy trình build

- 28/28 tệp kiến thức chuẩn hóa được chuyển vào đúng bài, giữ nội dung các phần và bảng thuật ngữ; nội dung cũ không có trong nguồn được giữ lại.
- Website nạp `data/lessons/`, trong khi repository trước đó chỉ có `data/lesons/`. Build tạo đúng `data/lessons/`; dữ liệu trong thư mục cũ không bị xóa.
- `scripts/build_data.py` đọc JSON câu hỏi theo bài và Markdown kiến thức chuẩn hóa, giữ câu web-only, dựng dữ liệu/catalog và tạo lại báo cáo.
- `scripts/build_single.py` gộp catalog, 28 bài, câu hỏi, CSS và script ứng dụng vào `Tin12_MotFile.html`.

## Kết quả kiểm thử

GitHub Actions workflow `Question bank E2E`, run **42373522108**: **đạt**.

- `python scripts/build_data.py nguon`: đạt; build 28 bài và toàn bộ ngân hàng.
- `python scripts/build_single.py`: đạt; tạo bản một tệp.
- `node tests/e2e.js http index.html`: **33 đạt, 0 lỗi**.
- `node tests/e2e.js file Tin12_MotFile.html`: **33 đạt, 0 lỗi**.
- E2E bao gồm tải 28 bài, đếm câu, luyện tập ba loại câu hỏi, chấm điểm, làm lại câu sai, lịch sử/tiến độ, backup/restore, responsive và offline.
- Cấu hình Supabase và chính sách cơ sở dữ liệu không thay đổi; kiểm thử kết nối Supabase thực tế không nằm trong E2E này.
