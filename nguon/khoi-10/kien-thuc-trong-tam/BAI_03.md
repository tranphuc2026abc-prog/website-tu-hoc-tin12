### 2.1. Phân loại dữ liệu trong máy tính
- Việc phân loại dữ liệu giúp máy tính có cách mã hóa nhị phân phù hợp và áp dụng đúng các phép toán xử lí:
  - **Kiểu số**: gồm số nguyên và số thực (dùng để thực hiện các phép tính số học `+`, `-`, `×`, `/` và so sánh độ lớn).
  - **Kiểu văn bản**: gồm *kiểu kí tự* (1 kí tự đơn), *kiểu xâu kí tự* (chuỗi các kí tự đặt trong các byte kế tiếp nhau trong bộ nhớ, thực hiện cắt, ghép, tìm kiếm, sắp xếp) và *kiểu tệp văn bản* (lưu trữ ở bộ nhớ ngoài).
  - **Kiểu lôgic**: chỉ nhận 2 giá trị chân lí `Đúng` / `Sai` để kiểm tra điều kiện rẽ nhánh.
  - **Kiểu đa phương tiện (Multimedia)**: âm thanh, hình ảnh, video.

### 2.2. Biểu diễn dữ liệu văn bản
- **Bảng mã ASCII**: bảng mã chuẩn của Mỹ; phiên bản gốc dùng **7 bit** mã hóa $2^7 = 128$ kí tự; phiên bản mở rộng dùng **8 bit** ($1	ext{ byte}$) mã hóa $2^8 = 256$ kí tự. Không đủ chỗ cho tất cả kí tự của mọi ngôn ngữ trên thế giới.
- **Bảng mã Unicode và tiếng Việt**:
  - Là bảng mã hợp nhất quốc tế, dùng từ **1 đến 4 byte** để mã hóa hầu hết các kí tự của mọi quốc gia, tránh trùng lặp mã cho cùng một mặt chữ và hỗ trợ ứng dụng đa ngôn ngữ.
  - **UTF-8** là định dạng chuyển đổi Unicode phổ biến nhất trên web và email; trong UTF-8, mỗi kí tự tiếng Việt dùng **từ 1 đến 3 byte** (chữ không dấu 1 byte, chữ có dấu tiếng Việt 2–3 byte).
  - Tiếng Việt có **134 kí tự riêng** không có trong bảng chữ cái tiếng Anh (52 chữ cái hoa/thường): 60 kí tự phát sinh từ `a, e, i, o, u, y` (5 dấu × 2 kiểu hoa/thường × 6 chữ), 72 kí tự từ `ă, â, ê, ô, ơ, ư` (6 trạng thái × 2 × 6) và 2 kí tự `đ, Đ`.
