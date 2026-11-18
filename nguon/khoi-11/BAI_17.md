# BÀI 17: QUẢN TRỊ CƠ SỞ DỮ LIỆU TRÊN MÁY TÍNH

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu được lợi ích của việc quản trị CSDL trên máy tính so với quản lí thủ công.
- Biết cài đặt và kết nối làm việc với hệ QTCSDL **MySQL** (qua dòng lệnh) và phần mềm giao diện đồ họa **HeidiSQL**.

## 2. Lợi ích của quản trị CSDL trên máy tính
- Kịp thời, tiện lợi, nhanh chóng, tiết kiệm công sức.
- Độ chính xác và toàn vẹn dữ liệu cao, giảm sai sót do con người.
- Tra cứu, lọc, thống kê và phân tích dữ liệu hiệu quả.
- Kiểm soát truy cập và bảo mật tốt hơn.

## 3. Hệ quản trị CSDL MySQL
- **MySQL:** Hệ QTCSDL mã nguồn mở, miễn phí, ổn định, đa nền tảng (Windows, Linux, macOS).
- Khi cài đặt cần thiết lập mật khẩu cho tài khoản quản trị cao nhất **`root`**.
- **Đăng nhập bằng dòng lệnh:** `mysql -u root -p` (sau đó nhập mật khẩu và gõ câu truy vấn SQL kết thúc bằng dấu `;`).

## 4. Phần mềm giao diện đồ họa HeidiSQL
- **HeidiSQL:** Phần mềm khách (client) mã nguồn mở, miễn phí, hỗ trợ tiếng Việt; có **Bản cài tự động** và **Bản Portable** (chạy ngay không cần cài).
- **Thông số kết nối cục bộ mặc định:** Kiểu mạng `MariaDB or MySQL (TCP/IP)`, IP `127.0.0.1`, Cổng `3306`, User `root`.
- **Giao diện chính:** Vùng danh sách CSDL (bên trái) và vùng làm việc chính (bên phải).

## 5. Thực hành kiểm tra nhanh
- Chạy truy vấn `SELECT * FROM nhacsi;` hoặc `SELECT * FROM bannhac;` để xem dữ liệu bảng.

## 6. Lưu ý lỗi thường gặp
- **HeidiSQL KHÔNG phải là một Hệ QTCSDL độc lập** mà là công cụ giao diện đồ họa kết nối tới MySQL (nên bắt buộc phải cài đặt và chạy dịch vụ MySQL trước).
- Luôn ghi nhớ mật khẩu tài khoản `root` khi cài MySQL.

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Cài đặt MySQL và HeidiSQL (bản Portable hoặc Installer), kết nối vào `127.0.0.1:3306` và thử xem danh sách các CSDL mặc định.
