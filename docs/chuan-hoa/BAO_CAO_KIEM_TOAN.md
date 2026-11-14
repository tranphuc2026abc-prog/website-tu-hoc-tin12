# Báo cáo kiểm toán kho học liệu — giai đoạn 1

## Phạm vi và bằng chứng chạy

Kiểm toán được chạy trong GitHub Actions trên PR #28, commit `ae5ca7cf202a667e8c3f9f5e44982ffc7d317704`, bằng:

- `python scripts/build_all_grades.py`
- `python scripts/build_single.py`
- `python scripts/kiem_toan_du_lieu.py --baseline docs/chuan-hoa/TRANG_THAI_GOC.json`
- `python scripts/chuan_hoa_nguon.py --kiem-tra`
- Chạy `--ap-dung` trên bản sao tạm của thư mục nguồn.

Lượt kiểm toán sau khi build: 93 bài; 2.325 câu trong 93 JSON nguồn theo bài; 2.368 câu trong website; 0 lỗi cấu trúc; 9 cảnh báo cần xem. Build nhiều khối và bản một tệp thành công. Bộ chuẩn hóa kiểm tra 93 JSON, dự kiến 0 thay đổi ở 0 trường; chế độ áp dụng trên bản sao cũng áp dụng 0 thay đổi. Không phát sinh nhật ký thay đổi vì nguồn không cần chuẩn hóa cơ học.

## Đối chiếu theo khối

| Khối | Bài | Câu JSON nguồn | Câu website | MCQ website | Đúng/sai website | Tự luận website | Thiếu mã câu nguồn |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 10 | 34 | 850 | 850 | 748 | 34 | 68 | 0 |
| 11 | 31 | 775 | 775 | 682 | 31 | 62 | 0 |
| 12 | 28 | 700 | 743 | 651 | 33 | 59 | 0 |
| **Tổng** | **93** | **2.325** | **2.368** | **2.081** | **98** | **189** | **0** |

Khối 12 có thêm 43 câu website được dẫn từ `nguon/NGAN_HANG_CAU_HOI.md` (35 MCQ, 5 đúng/sai, 3 tự luận). Các bản ghi này không có trong tập JSON theo bài, nhưng được giữ nguyên; đây không phải lỗi thiếu 43 câu từ nguồn JSON.

## Trùng lặp và điểm cần giáo viên rà soát

- Không có ID trùng trong JSON nguồn hoặc dữ liệu câu hỏi website. Tất cả ID câu JSON nguồn đều có trong website.
- Có 26 nhóm câu có phần thân giống hệt ở khối 10 và 24 nhóm ở khối 11. Kiểm toán chưa coi đó là bản ghi trùng; không xóa câu.
- Bộ lọc gần giống từ vựng ghi nhận 33 cặp ở khối 10, 23 cặp ở khối 11 và 1.856 cặp ở khối 12. Đây chỉ là danh sách ứng viên do bộ lọc tự động tạo; chưa xác minh trùng nội dung đầy đủ, không xóa/gộp câu.
- Hai câu tự luận `ICT12_B01-C01`, `ICT12_B01-C02` không có gợi ý đáp án trong dữ liệu website.
- Bộ dò chuỗi ghi 36 cảnh báo dấu câu. Ví dụ trường giải thích đúng/sai nối nhiều mệnh đề bằng dấu chấm phẩy rồi có chuỗi `..`; quy tắc tự động hiện tại không phân biệt tốt dấu câu trong danh sách với lỗi gõ. Không chỉnh sửa nội dung. Cần rà soát thủ công nếu muốn xử lý.
- Không phát hiện chuỗi ngoài NFC, khoảng trắng đầu/cuối, ký tự điều khiển hoặc HTML/XML bị lộ trong JSON nguồn theo phép kiểm tra đã chạy.

## Phân loại chủ đề khối 10

Sau khi chạy builder trước kiểm toán, catalog không còn bài khối 10 mang nhãn “Chủ đề chưa phân loại”. Các bài 2–15 được gắn nhãn điều hướng theo nội dung KHBD và mạch chương trình; căn cứ cụ thể ở [CHO_XAC_NHAN_PHAN_LOAI.md](CHO_XAC_NHAN_PHAN_LOAI.md). Việc phân nhóm là metadata điều hướng, không sửa nội dung kiến thức hoặc câu hỏi.

## Tình trạng build và giới hạn kiểm chứng

- Cả hai lệnh build kết thúc thành công. Workflow kiểm toán #22 (run ID `42545952675`) đạt; kiểm thử tiến độ cũ đạt 13/13.
- E2E hiện có: workflow #67 (run ID `42545952677`) đạt 47/47 qua HTTP và 36/36 qua tệp ngoại tuyến; kiểm tra Pages #140 (run ID `42545952679`) đạt phần xác thực, bước deploy bị bỏ qua theo điều kiện của PR.
- Kiểm thử tương thích tiến độ cũ đặt dữ liệu mẫu trong Chromium cô lập: thẻ tiếp tục và hai mục tiến độ được đọc đúng cho khối 10/11/12; học sinh mới không thấy thẻ; JSON hỏng được bỏ qua; trang vẫn mở khi localStorage bị chặn.
- So sánh PR #28 với commit gốc xác nhận không có tệp `data/` trong diff; mã bài/câu giữ nguyên theo snapshot và audit.
- Trong bản checkout CI, builder tạo khác biệt ở nhiều tệp sinh dưới `data/` so với phiên bản đã commit. Những đầu ra này không được đưa vào PR; so sánh GitHub PR #28 với commit gốc xác nhận không có tệp `data/` trong danh sách thay đổi. Đây là khác biệt giữa kết quả build và bản sinh đang lưu; cần duy trì việc rà soát output trước khi commit dữ liệu sinh.
- Kiểm thử trình duyệt của workflow hiện có chủ yếu dùng khối 12 và chế độ file. Chưa có bằng chứng riêng trong giai đoạn này cho khả năng tương thích mọi mẫu tiến độ cũ ở cả ba khối.
- Chưa thẩm định tính đúng/sai chuyên môn; các cảnh báo chỉ nhằm chỉ điểm cấu trúc, mã định danh và văn bản cần người phụ trách xem xét.
