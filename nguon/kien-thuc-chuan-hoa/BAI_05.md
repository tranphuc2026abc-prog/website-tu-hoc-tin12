# BÀI 5: THỰC HÀNH CHIA SẺ TÀI NGUYÊN TRÊN MẠNG

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Hiểu được nguyên lý và các điều kiện cần thiết để chia sẻ tệp, thư mục và máy in trong mạng cục bộ (LAN).
- **Về kỹ năng:** Thực thiện được các thao tác bật chế độ chia sẻ nâng cao, cấp quyền truy cập thư mục, chia sẻ máy in mạng và kết nối máy in từ máy tính khác.
- **Về thái độ:** Tuân thủ quy định an toàn thông tin, chỉ chia sẻ tài nguyên cho đúng đối tượng được phép.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Điều kiện để chia sẻ tài nguyên trong mạng LAN:**
   - Môi trường mạng được thiết lập ở chế độ mạng riêng (**Private Network**).
   - Bật tính năng cho phép nhìn thấy nhau (**Network Discovery**) và chia sẻ tệp/máy in (**File and Printer Sharing**).
   - Tắt tạm thời hoặc cấu hình Tường lửa (Firewall) cho phép lưu lượng SMB chia sẻ.
2. **Các mức quyền truy cập khi chia sẻ thư mục:**
   - *Read (Chỉ đọc):* Người dùng trong mạng chỉ được xem và tải tệp về, không được sửa hay xóa.
   - *Read/Write (Đọc/Ghi):* Người dùng trong mạng có quyền tạo mới, chỉnh sửa, đè hoặc xóa tệp trong thư mục chia sẻ.
3. **Chia sẻ máy in mạng (Network Printer):**
   - Máy tính cắm trực tiếp máy in qua cổng USB sẽ đóng vai trò là Máy chủ in (Print Server).
   - Bật chế độ `Share this printer` trên máy chủ in. Các máy tính khác trong LAN thực hiện tìm kiếm và kết nối máy in qua mạng.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Private Network vs Public Network:**
  - *Private Network (Mạng riêng):* Chế độ tin cậy áp dụng cho mạng gia đình/văn phòng, cho phép các máy tính tìm thấy nhau và chia sẻ tài nguyên.
  - *Public Network (Mạng công cộng):* Chế độ bảo vệ áp dụng khi dùng Wi-Fi quán cà phê/sân bay, ẩn máy tính khỏi mạng để chặn truy cập trái phép.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
- **Ứng dụng chia sẻ văn phòng:** Trong một tổ chức trường học, cô giáo văn thư chia sẻ thư mục `BIEU_MAU` trên máy tính cá nhân. Tất cả các giáo viên trong trường chỉ cần gõ `\MAY_VAN_THU\BIEU_MAU` là có thể mở và lấy mẫu báo cáo về máy mình mà không cần dùng ổ cứng USB.

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
### Thao tác 1: Chia sẻ một Thư mục trên Windows
1. **Bước 1:** Nhấp chuột phải vào Thư mục cần chia sẻ $ightarrow$ Chọn **Properties**.
2. **Bước 2:** Chọn tab **Sharing** $ightarrow$ Nhấp nút **Share...**
3. **Bước 3:** Tại ô chọn đối tượng, chọn **Everyone** (hoặc tên người dùng cụ thể) $ightarrow$ Nhấp **Add**.
4. **Bước 4:** Tại cột *Permission Level*, phân quyền **Read** hoặc **Read/Write** $ightarrow$ Nhấp nút **Share** $ightarrow$ Nhấp **Done**.

### Thao tác 2: Truy cập Thư mục đã chia sẻ từ máy tính khác
1. **Bước 1:** Nhấn tổ hợp phím `Windows + R` mở hộp thoại Run.
2. **Bước 2:** Gõ `\<Tên_Máy_Tính_Chia_Sẻ>` (Ví dụ: `\MAY_01`) hoặc `\<Địa_Chỉ_IP>` (Ví dụ: `\192.168.1.15`) $ightarrow$ Nhấn **Enter**.
3. **Bước 3:** Quan sát và mở thư mục được chia sẻ.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Network Discovery | Network Discovery | Dịch vụ dò tìm thấy các máy tính trong mạng |
| File and Printer Sharing | File and Printer Sharing | Tính năng chia sẻ tệp và máy in |
| Permission Level | Permission Level | Mức độ phân quyền truy cập (Read / Write) |
| Shared Folder | Shared Folder | Thư mục dùng chung trên mạng |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Muốn chia sẻ tệp/máy in trong LAN, máy tính phải cài đặt chế độ **Private Network** và bật **File and Printer Sharing**.
2. Phân quyền chính xác (Read hoặc Read/Write) để tránh bị mất hoặc lộ dữ liệu quan trọng.
3. Truy cập tài nguyên chia sẻ qua đường dẫn mạng dạng `\Tên_Máy_Tính` hoặc `\Địa_Chỉ_IP`.
