# BÀI 12: HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU VÀ HỆ CƠ SỞ DỮ LIỆU

## 1. Mục tiêu và Yêu cầu cần đạt
- Nắm được khái niệm và 3 nhóm chức năng của **Hệ quản trị CSDL (DBMS)**.
- Phân biệt được **CSDL**, **Hệ QTCSDL** và **Hệ CSDL** (3 thành phần).
- Phân biệt được **Hệ CSDL tập trung** và **Hệ CSDL phân tán**, nêu được ưu – nhược điểm của từng loại.

## 2. Hệ quản trị CSDL (DBMS)
- **Khái niệm:** Phần mềm chuyên dụng cung cấp phương thức lưu trữ, cập nhật, truy xuất, bảo mật và an toàn dữ liệu.
- **3 nhóm chức năng chính:**
  1. Định nghĩa dữ liệu (tạo lập, sửa đổi cấu trúc CSDL).
  2. Cập nhật và truy xuất dữ liệu (thêm, xóa, sửa; tìm kiếm, lọc, sắp xếp).
  3. Bảo mật, an toàn CSDL (phân quyền, kiểm soát truy cập, sao lưu/khôi phục).
- **Ví dụ DBMS thông dụng:** MySQL, Oracle, Microsoft SQL Server, Microsoft Access.

## 3. Hệ cơ sở dữ liệu (Hệ CSDL)
- Gồm **3 thành phần** phối hợp:
  1. **Cơ sở dữ liệu (CSDL):** Nơi lưu trữ dữ liệu.
  2. **Hệ quản trị CSDL:** Phần mềm quản trị dữ liệu.
  3. **Các phần mềm ứng dụng CSDL:** Giao diện cầu nối giúp người dùng khai thác CSDL thuận tiện (nhiều ứng dụng có thể dùng chung một CSDL).

## 4. Hệ CSDL tập trung và Hệ CSDL phân tán
| Tiêu chí | Hệ CSDL tập trung | Hệ CSDL phân tán |
| :--- | :--- | :--- |
| **Nơi lưu trữ** | Trên một máy tính (hoặc dàn máy trung tâm) | Phân tán trên nhiều máy (trạm CSDL cục bộ) |
| **Ưu điểm** | Dễ bảo trì, đảm bảo nhất quán và an ninh | Tính sẵn sàng cao, dễ mở rộng, tin cậy |
| **Nhược điểm** | Phụ thuộc tốc độ, độ ổn định đường truyền mạng | Khó thiết kế/triển khai, chi phí cao, khó đồng bộ nhất quán |

## 5. Mô hình ứng dụng thực tế
- Hệ thống tra cứu điểm thi, ứng dụng đặt xe: người dùng thao tác trên **phần mềm ứng dụng**, ứng dụng gửi yêu cầu tới **hệ QTCSDL** để đọc/cập nhật **CSDL**.

## 6. Lưu ý lỗi thường gặp
- **Không nhầm lẫn Hệ QTCSDL (1 phần mềm)** với **Hệ CSDL (gồm 3 thành phần)**.
- Sau khi cài đặt hệ QTCSDL, dữ liệu chưa có sẵn; người dùng phải tạo lập cấu trúc và cập nhật dữ liệu vào.

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Lấy ví dụ một hệ CSDL tập trung trong trường học và một hệ CSDL phân tán trong ngân hàng/mạng xã hội.
