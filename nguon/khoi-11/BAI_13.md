# BÀI 13: CƠ SỞ DỮ LIỆU QUAN HỆ

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu được khái niệm **CSDL quan hệ** và cấu trúc dữ liệu dạng bảng.
- Nắm vững các thuật ngữ: **bản ghi (record)**, **trường (field)**, **kiểu dữ liệu**, **khóa**, **khóa chính**, **khóa ngoài** và **liên kết dữ liệu**.

## 2. Khái niệm CSDL quan hệ
- **CSDL quan hệ** (do Edgar Frank Codd đề xuất) là CSDL lưu trữ dữ liệu dưới dạng các **bảng** có quan hệ với nhau.
- Mỗi bảng biểu diễn một loại đối tượng quản lí; các bảng liên kết với nhau thông qua các thuộc tính chung.

## 3. Thuật ngữ cơ bản
- **Bản ghi (Record / Hàng):** Chứa thông tin về một đối tượng cụ thể.
- **Trường (Field / Cột):** Thể hiện một thuộc tính của đối tượng.
- **Kiểu dữ liệu của trường:** Mọi giá trị trong cùng một cột có cùng kiểu (số nguyên, số thập phân, xâu kí tự, ngày tháng, lôgic). Việc quy định kiểu giúp tiết kiệm dung lượng và kiểm soát tính đúng đắn logic.

## 4. Khóa, Khóa chính và Khóa ngoài
- **Khóa:** Trường hoặc nhóm trường xác định duy nhất một bản ghi trong bảng (không trùng lặp ở hai bản ghi bất kì).
- **Khóa chính (Primary Key):** Một khóa được chọn để định danh chính thức cho bảng (ưu tiên khóa ngắn gọn, ít trường nhất, ổn định).
- **Khóa ngoài (Foreign Key):** Trường hoặc nhóm trường của bảng này đóng vai trò là **khóa chính** ở một bảng khác.

## 5. Liên kết dữ liệu theo khóa ngoài
- Dùng khóa ngoài để ghép nối dữ liệu giữa hai bảng (VD: bảng `Bannhac(Mid, Aid, TenBN)` liên kết với `Nhacsi(Aid, TenNS)` qua `Aid`) nhằm tránh dư thừa và đảm bảo tính nhất quán.

## 6. Lưu ý lỗi thường gặp
- **Không chọn các trường dễ trùng hoặc dài** (như Họ tên, Tên bài hát, Địa chỉ) làm khóa chính; ưu tiên dùng Mã (`Mid`, `Aid`, `SBD`, `maMon`).
- Một bảng có nhiều trường hợp lặp đối tượng (như bảng `Diem`) cần dùng **khóa chính tổ hợp** nhiều trường.

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Xác định khóa chính, khóa ngoài và kiểu dữ liệu từng trường cho CSDL quản lí thư viện hoặc kết quả thi THPT.
