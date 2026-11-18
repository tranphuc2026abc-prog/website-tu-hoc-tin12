# BÀI 15: BẢO MẬT VÀ AN TOÀN HỆ CƠ SỞ DỮ LIỆU

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu nội dung của một **chính sách bảo mật hệ CSDL** toàn diện.
- Biết cách phân quyền cho các nhóm người dùng và nâng cao ý thức bảo vệ tài khoản.
- Nắm được các sự cố thường gặp (nguồn điện, thiết bị lưu trữ) và giải pháp bảo đảm **an toàn dữ liệu**.

## 2. Chính sách bảo mật hệ CSDL
Gồm 4 nhóm nội dung cốt lõi:
1. **Ý thức và trách nhiệm người dùng:** Bảo vệ tài khoản, mật khẩu, không chia sẻ trái phép.
2. **An ninh mạng và hạ tầng:** Bảo mật vật lí, tách biệt máy chủ, kiểm soát cổng mạng, phần mềm bảo vệ.
3. **Phân quyền truy cập:** Xác định danh sách nhóm người dùng và quyền hạn tương ứng.
4. **Giám sát và xử lí sự cố:** Ghi nhật kí hoạt động (`log file`), theo dõi trạng thái hệ thống và lập kế hoạch ứng phó rủi ro.

## 3. Phân quyền theo nhóm người dùng
- **Nhóm 1 (Khách / guest):** Chỉ tìm kiếm, xem dữ liệu công khai, không cập nhật.
- **Nhóm 2 (Nhập liệu / moderator):** Chỉ được thêm mới dữ liệu, không sửa/xóa.
- **Nhóm 3 (Quản lí / master_mod):** Được thêm, sửa, xóa dữ liệu trong phạm vi bảng được giao, không được thay đổi cấu trúc bảng.
- **Nhóm 4 (Quản trị viên / admin):** Toàn quyền tạo lập, điều chỉnh cấu trúc bảng và quản trị hệ CSDL.

## 4. Bảo đảm an toàn dữ liệu trước sự cố
| Loại sự cố | Tình huống cụ thể | Giải pháp khắc phục |
| :--- | :--- | :--- |
| **Nguồn điện** | Thiếu công suất / Quá tải / Mất điện đột ngột | Lắp đặt đủ công suất / Kiểm tra định kì / Dùng **bộ lưu điện (UPS)** |
| **Thiết bị lưu trữ** | Quá tuổi thọ / Hư hỏng bất ngờ | Theo dõi thời hạn để thay sớm / **Sao lưu định kì** và dùng thiết bị dự phòng |

## 5. Vai trò của hệ QTCSDL trong an toàn dữ liệu
- Hỗ trợ cơ chế phân quyền chi tiết (`GRANT`/`REVOKE`), ghi log và cung cấp công cụ **sao lưu (backup)** – **phục hồi (restore)** từ bản sao lưu gần nhất.

## 6. Lưu ý lỗi thường gặp
- Không cấp quyền `admin` đại trà cho người dùng thông thường (như giáo viên bộ môn hay nhân viên nhập liệu).
- Các biện pháp kĩ thuật sẽ mất tác dụng nếu người dùng **để lộ mật khẩu hoặc dùng chung tài khoản**.

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Thiết kế bảng phân quyền cho CSDL quản lí điểm của một trường THPT (học sinh, giáo viên bộ môn, giáo vụ, quản trị viên).
