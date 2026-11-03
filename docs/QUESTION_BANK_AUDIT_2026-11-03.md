# BÁO CÁO KIỂM KÊ VÀ ĐỐI CHIẾU NGÂN HÀNG CÂU HỎI TIN HỌC 12

- Ngày kiểm kê: 03/11/2026
- Phạm vi: 28 bài trong `data/catalog.js`; nguồn câu hỏi `nguon/NGAN_HANG_CAU_HOI.md`; mã biên dịch `scripts/build_data.py`; dữ liệu chạy `data/questions/*.js`.
- Quy ước: một câu Đúng/Sai gồm 4 mệnh đề được tính là 1 câu hỏi; 3 câu luyện tập/vận dụng được thống kê riêng.

## 1. Thống kê chuẩn theo bài

| Bài | Trắc nghiệm | Đúng/Sai | Luyện tập/tự luận | Tổng |
|---:|---:|---:|---:|---:|
| 1 | 17 | 1 | 2 | 20 |
| 2 | 3 | 1 | 1 | 5 |
| 3 | 3 | 1 | 0 | 4 |
| 4 | 2 | 1 | 0 | 3 |
| 5 | 0 | 0 | 0 | 0 |
| 6 | 0 | 0 | 0 | 0 |
| 7 | 2 | 1 | 0 | 3 |
| 8 | 0 | 0 | 0 | 0 |
| 9 | 0 | 0 | 0 | 0 |
| 10 | 2 | 0 | 0 | 2 |
| 11 | 0 | 0 | 0 | 0 |
| 12 | 0 | 0 | 0 | 0 |
| 13 | 2 | 0 | 0 | 2 |
| 14 | 0 | 0 | 0 | 0 |
| 15 | 0 | 0 | 0 | 0 |
| 16 | 0 | 0 | 0 | 0 |
| 17 | 2 | 0 | 0 | 2 |
| 18 | 0 | 0 | 0 | 0 |
| 19 | 0 | 0 | 0 | 0 |
| 20 | 0 | 0 | 0 | 0 |
| 21 | 0 | 0 | 0 | 0 |
| 22 | 0 | 0 | 0 | 0 |
| 23 | 0 | 0 | 0 | 0 |
| 24 | 1 | 0 | 0 | 1 |
| 25 | 0 | 0 | 0 | 0 |
| 26 | 0 | 0 | 0 | 0 |
| 27 | 1 | 0 | 0 | 1 |
| 28 | 0 | 0 | 0 | 0 |
| **Tổng** | **35** | **5** | **3** | **43** |

**Kết luận:** 43/43 câu hỏi trong nguồn Markdown đã có trong dữ liệu JavaScript được website nạp. Không có câu nào bị thiếu trong quá trình biên dịch đối với 9 nhóm bài đang có nội dung câu hỏi.

## 2. Đối chiếu hai câu thuộc mục nguồn gộp Bài 24–28

Nguồn Markdown đặt hai câu trong tiêu đề gộp “Bài 24–28”, nhưng nội dung xác định rõ bài học:
- `ICT12_B24-A01`: hỏi nơi Google Sites lưu tệp dự án. Kiến thức Bài 24 nêu tên tệp trang web được lưu trên Google Drive.
- `ICT12_B27-A02`: hỏi thao tác nhúng biểu mẫu vào Google Sites. Kiến thức Bài 27 nêu đúng đường dẫn Chèn (Insert) → Biểu mẫu (Forms).

Vì vậy, ánh xạ lần lượt sang Bài 24 và Bài 27 là phù hợp với nội dung kiến thức. Trạng thái `review` trước đây là nhãn kỹ thuật do bộ biên dịch tự gán cho cả nhóm câu hỏi, **không phải kết luận rằng giáo viên chưa duyệt nội dung**.

## 3. Kiểm tra cấu trúc dữ liệu đã biên dịch

- 35/35 câu trắc nghiệm có đủ 4 lựa chọn và khóa đáp án khớp một trong các lựa chọn.
- 5/5 câu Đúng/Sai có đủ 4 mệnh đề.
- 43/43 câu có mã định danh và nội dung.
- Không phát hiện mã câu hỏi trùng.
- Không phát hiện câu hỏi trùng nguyên văn.
- 43 câu đều được xác định là câu hỏi nguồn đã duyệt; không có câu nào cần giữ trạng thái chờ rà soát chỉ vì nằm trong mục nguồn gộp.

## 4. Những bài hiện chưa có câu hỏi trong nguồn Markdown

Có 18 bài chưa có câu hỏi được khai báo trong ngân hàng Markdown và do đó chưa có tệp câu hỏi chạy tương ứng: Bài 5, 6, 8, 9, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25, 26, 28.

Điều này **không có nghĩa các bài này không có nội dung trong kho kiến thức**. Chỉ có nghĩa chưa có câu hỏi trong tệp ngân hàng câu hỏi đang được bộ biên dịch sử dụng.

## 5. Phân biệt các nguồn dữ liệu

- `nguon/NGAN_HANG_CAU_HOI.md`: nguồn câu hỏi thực tế được bộ biên dịch đọc; đây là căn cứ kiểm kê nội dung câu hỏi.
- `data/questions/*.js`: dữ liệu câu hỏi website nạp khi chạy.
- `nguon/ngan-hang-cau-hoi/BAI_01_QUESTIONS.json` đến `BAI_28_QUESTIONS.json`: các tệp JSON có khai báo thống kê 25 câu/bài nhưng nội dung mẫu chứa placeholder như “Câu hỏi trắc nghiệm gốc 1…” và “Phương án A đúng chuẩn…”. Không được cộng 700 câu này vào ngân hàng câu hỏi thực tế và không được coi đây là dữ liệu nguồn đã duyệt.
- `scripts/build_data.py`: biên dịch câu hỏi từ Markdown sang JavaScript; không lấy 700 câu từ các JSON mẫu.

## 6. Chuẩn hóa đã thực hiện trong nhánh sửa lỗi

- Giữ nguyên nội dung, phương án, đáp án và giải thích của 43 câu.
- Sửa ánh xạ hai câu trong nhóm Bài 24–28 theo nội dung câu hỏi và kiến thức tương ứng của Bài 24, Bài 27.
- Bỏ việc tự động gắn trạng thái `review` cho hai câu này; đặt trạng thái `ok` như các câu nguồn đã duyệt.
- Bổ sung kiểm tra trong bộ biên dịch để xác nhận nội dung hai câu khớp ánh xạ bài học; nếu không khớp, quá trình biên dịch sẽ báo lỗi thay vì âm thầm gắn sai bài.
- Không tự tạo câu hỏi mới và không thay đổi dữ liệu của 18 bài chưa có câu hỏi.

## 7. Giới hạn thẩm định

Báo cáo xác nhận số lượng, tính toàn vẹn cấu trúc, sự tương ứng giữa nguồn Markdown và dữ liệu JavaScript, cùng ánh xạ bài học cho hai câu thuộc nhóm Bài 24–28. Đây chưa phải kết luận thẩm định lại toàn bộ độ chính xác chuyên môn của từng đáp án theo nguyên bản 28 tệp KHBD Word.
