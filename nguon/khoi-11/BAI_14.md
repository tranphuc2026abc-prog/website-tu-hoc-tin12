# BÀI 14: SQL – NGÔN NGỮ TRUY VẤN CÓ CẤU TRÚC

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu vai trò và ba thành phần của ngôn ngữ **SQL**: **DDL**, **DML**, **DCL**.
- Viết được các câu truy vấn cơ bản để khởi tạo CSDL/bảng, cập nhật dữ liệu, truy xuất dữ liệu (kể cả liên kết bảng bằng `INNER JOIN`) và phân quyền.

## 2. Ba thành phần của SQL
1. **DDL (Data Definition Language – Định nghĩa dữ liệu):** `CREATE DATABASE`, `CREATE TABLE`, `ALTER TABLE`.
2. **DML (Data Manipulation Language – Thao tác dữ liệu):** `SELECT`, `INSERT INTO`, `UPDATE`, `DELETE FROM`.
3. **DCL (Data Control Language – Kiểm soát dữ liệu):** `GRANT`, `REVOKE`.

## 3. Khởi tạo CSDL và Bảng (DDL)
```sql
CREATE DATABASE ten_CSDL;
CREATE TABLE casi (Sid CHAR(4), TenCS VARCHAR(64));
ALTER TABLE casi ADD PRIMARY KEY (Sid);
```
- Tên CSDL, bảng, trường chỉ dùng kí tự La-tinh, chữ số, dấu `_`, không chứa khoảng trắng hay kí tự đặc biệt.

## 4. Cập nhật dữ liệu (DML)
- **Thêm mới:** `INSERT INTO nhacsi VALUES (7, 'Hoàng Hiệp');`
- **Cập nhật:** `UPDATE nhacsi SET TenNS = 'Phú Quang' WHERE Aid = 5;`
- **Xóa dòng:** `DELETE FROM nhacsi WHERE Aid = 7;`

## 5. Truy xuất và Liên kết bảng (SELECT & INNER JOIN)
```sql
SELECT bannhac.TenBN, nhacsi.TenNS
FROM bannhac INNER JOIN nhacsi ON bannhac.Aid = nhacsi.Aid
WHERE bannhac.Aid = 1
ORDER BY bannhac.TenBN;
```
- **Cấp/thu hồi quyền (DCL):** `GRANT UPDATE ON music.* TO mod;` / `REVOKE DELETE ON music.nhacsi FROM mod;`

## 6. Lưu ý lỗi thường gặp
- **Thứ tự mệnh đề bắt buộc:** `SELECT ... FROM ... WHERE ... ORDER BY ...` (không đặt `ORDER BY` trước `WHERE`).
- Quên mệnh đề `WHERE` trong `UPDATE` hoặc `DELETE` sẽ sửa/xóa **toàn bộ bảng**.
- Cú pháp `GRANT`: `GRANT <quyền> ON <đối tượng> TO <người dùng>;` (chú ý `ON` trước `TO`).

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Viết câu lệnh SQL tạo bảng `nhacsi`, thêm dữ liệu và truy vấn nối bảng `bannhac` với `nhacsi`.
