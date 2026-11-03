# BÁO CÁO KIỂM KÊ NGÂN HÀNG CÂU HỎI TIN HỌC 12

- Ngày kiểm kê: 03/11/2026
- Phạm vi: 28 bài học trong `data/catalog.js`; ngân hàng đang chạy trong `data/questions/*.js`; đối chiếu hồ sơ `nguon/NGAN_HANG_CAU_HOI.md`.
- Quy ước: một câu Đúng/Sai gồm 4 mệnh đề được tính là **1 câu hỏi**, không tính thành 4 câu. Câu tự luận/luyện tập/vận dụng được tính từng câu. Câu có `st: "review"` được thống kê riêng, không tính vào số câu đã duyệt.

## 1. Thống kê theo bài

| Bài | Trắc nghiệm nhiều lựa chọn | Đúng/Sai | Tự luận | Đã duyệt | Chờ rà soát | Tổng đang lưu |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 17 | 1 | 2 | 20 | 0 | 20 |
| 2 | 3 | 1 | 1 | 5 | 0 | 5 |
| 3 | 3 | 1 | 0 | 4 | 0 | 4 |
| 4 | 2 | 1 | 0 | 3 | 0 | 3 |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | 2 | 1 | 0 | 3 | 0 | 3 |
| 8 | 0 | 0 | 0 | 0 | 0 | 0 |
| 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10 | 2 | 0 | 0 | 2 | 0 | 2 |
| 11 | 0 | 0 | 0 | 0 | 0 | 0 |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13 | 2 | 0 | 0 | 2 | 0 | 2 |
| 14 | 0 | 0 | 0 | 0 | 0 | 0 |
| 15 | 0 | 0 | 0 | 0 | 0 | 0 |
| 16 | 0 | 0 | 0 | 0 | 0 | 0 |
| 17 | 2 | 0 | 0 | 2 | 0 | 2 |
| 18 | 0 | 0 | 0 | 0 | 0 | 0 |
| 19 | 0 | 0 | 0 | 0 | 0 | 0 |
| 20 | 0 | 0 | 0 | 0 | 0 | 0 |
| 21 | 0 | 0 | 0 | 0 | 0 | 0 |
| 22 | 0 | 0 | 0 | 0 | 0 | 0 |
| 23 | 0 | 0 | 0 | 0 | 0 | 0 |
| 24 | 0 | 0 | 0 | 0 | 1 | 1 |
| 25 | 0 | 0 | 0 | 0 | 0 | 0 |
| 26 | 0 | 0 | 0 | 0 | 0 | 0 |
| 27 | 0 | 0 | 0 | 0 | 1 | 1 |
| 28 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Tổng** | **33** | **5** | **3** | **41** | **2** | **43** |

## 2. Kết luận kiểm kê

- Đủ danh mục 28 bài học trong catalog.
- Có 10/28 bài được khai báo trong `C.qfiles` và có tệp dữ liệu câu hỏi.
- 8 bài có câu hỏi đã duyệt: Bài 1, 2, 3, 4, 7, 10, 13, 17.
- 2 bài có câu hỏi chờ rà soát: Bài 24 và Bài 27.
- 18 bài chưa có tệp ngân hàng câu hỏi: Bài 5, 6, 8, 9, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25, 26, 28.
- Tổng đã duyệt: 41 câu (33 nhiều lựa chọn, 5 câu Đúng/Sai, 3 tự luận). Tổng chờ rà soát: 2 câu nhiều lựa chọn.

## 3. Hai câu đang chờ rà soát

1. `ICT12_B24-A01`: Google Sites tự động lưu trữ dự án trang web đang tạo vào đâu?
2. `ICT12_B27-A02`: Để nhúng biểu mẫu khảo sát ý kiến người dùng vào Google Sites, em chọn mục nào trong bảng chọn Chèn (Insert)?

Hai câu này được trích từ mục nguồn gộp **Bài 24–28**, sau đó tạm gắn lần lượt vào Bài 24 và Bài 27. Chưa đủ căn cứ để xác nhận chắc chắn vị trí bài học; cần đối chiếu KHBD cụ thể trước khi chuyển trạng thái sang `ok`.

## 4. Quy tắc chuẩn hóa áp dụng

- Chỉ tính câu hỏi có trong `data/questions/*.js`; không cộng các JSON mẫu/placeholder trong `nguon/ngan-hang-cau-hoi/` vì chưa được tích hợp và thẩm định.
- Không tính câu có trạng thái `review` vào ngân hàng được phép sử dụng cho học sinh.
- Không suy diễn số lượng câu hỏi từ số mệnh đề Đúng/Sai; một câu gồm 4 mệnh đề vẫn là một câu.
- Không tự động phân bổ câu hỏi từ nguồn gộp Bài 24–28 sang các bài còn lại.
- Không tự sinh câu hỏi để lấp số lượng thiếu. Mọi câu bổ sung phải có nguồn KHBD/SGK hoặc được ghi rõ là câu biên soạn bổ sung và được giáo viên duyệt.

## 5. Nguồn và giới hạn kiểm kê

Đã đối chiếu `data/catalog.js`, 10 tệp câu hỏi được khai báo và `nguon/NGAN_HANG_CAU_HOI.md`. Báo cáo này kiểm kê số lượng và trạng thái dữ liệu hiện có; chưa phải kết luận thẩm định độ chính xác chuyên môn của toàn bộ từng câu hỏi so với 28 tệp KHBD gốc.
