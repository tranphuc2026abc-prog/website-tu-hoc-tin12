# BÀI 4: GIAO THỨC MẠNG

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Hiểu được khái niệm giao thức mạng (Network Protocol), cấu trúc bộ giao thức TCP/IP, địa chỉ IP (IPv4, IPv6), định tuyến động và các giao thức ứng dụng phổ biến.
- **Về kỹ năng:** Phân biệt được địa chỉ MAC và địa chỉ IP; biết cách kiểm tra địa chỉ IP trên máy tính bằng lệnh `ipconfig`.
- **Về thái độ:** Tuân thủ các chuẩn mực và quy định kết nối an toàn trên mạng Internet.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Khái niệm Giao thức mạng (Network Protocol):** Tập hợp các quy định, quy tắc thống nhất về cách thức giao tiếp, đóng gói và truyền nhận dữ liệu giữa các thiết bị trên mạng.
2. **Giao thức Ethernet (trong mạng LAN):**
   - Định danh bằng **Địa chỉ MAC** (48 bit vật lý).
   - Truyền dữ liệu theo từng **Khung (Frame)** có mã kiểm tra lỗi (CRC).
3. **Bộ giao thức TCP/IP (Nền tảng của Internet):**
   - *Giao thức IP (Internet Protocol):* Đảm nhận việc **định danh địa chỉ** và **định tuyến (chọn đường)** cho các gói tin qua các Router trên mạng.
     + *Địa chỉ IPv4:* 32 bit (4 byte, viết dạng 4 nhóm số thập phân cách nhau bởi dấu chấm, ví dụ: `192.168.1.1`).
     + *Địa chỉ IPv6:* 128 bit (giải quyết nguy cơ cạn kiệt địa chỉ của IPv4).
   - *Giao thức TCP (Transmission Control Protocol):* Kiểm soát việc truyền dữ liệu **tin cậy, chính xác, đúng thứ tự** giữa các ứng dụng.
     + Phân chia dữ liệu thành các gói tin có đánh số thứ tự.
     + Bắt tay 3 bước (Three-way handshake) thiết lập kết nối.
     + Cơ chế xác nhận (ACK) và yêu cầu gửi lại gói tin bị lỗi/thất lạc.
4. **Các giao thức ứng dụng phổ biến:**
   - *HTTP / HTTPS:* Truyền tải trang siêu văn bản (HTTPS có mã hóa an toàn).
   - *DNS (Domain Name System):* Dịch tên miền chữ (ví dụ: `google.com`) thành địa chỉ IP số.
   - *DHCP:* Tự động cấp phát địa chỉ IP cho thiết bị khi gia nhập mạng.
   - *SMTP / POP3 / IMAP:* Giao thức gửi và nhận thư điện tử (Email).
   - *FTP:* Giao thức truyền tệp tin.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **So sánh Địa chỉ MAC vs Địa chỉ IP:**
  - *Địa chỉ MAC:* Địa chỉ vật lý duy nhất đi liền với phần cứng card mạng, dùng để giao tiếp trong phạm vi mạng nội bộ LAN.
  - *Địa chỉ IP:* Địa chỉ logic có thể thay đổi tùy thuộc vào vị trí kết nối mạng, dùng để định tuyến gói tin trên mạng toàn cầu Internet.
- **Cổng ứng dụng (Port):** Con số gán cho mỗi ứng dụng trên máy tính (ví dụ: HTTP dùng port 80, HTTPS dùng port 443) để TCP chuyển gói tin đến đúng phần mềm đang chờ.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
- **Tương tự việc gửi thư Bưu điện:**
  - *Địa chỉ IP* tương tự như Địa chỉ nhà ghi trên phong bì (tỉnh, huyện, phố, số nhà) giúp Bưu điện (Router) định tuyến thư đi.
  - *TCP* tương tự như Dịch vụ chuyển phát bảo đảm (yêu cầu người nhận ký tên xác nhận, nếu mất thư sẽ gửi lại).
  - *DNS* tương tự như Danh bạ điện thoại (tra tên người ra số điện thoại).

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Kiểm tra địa chỉ IP trên hệ điều hành Windows:*
1. **Bước 1:** Nhấn tổ hợp phím `Windows + R` $ightarrow$ Gõ `cmd` $ightarrow$ Nhấn **Enter** để mở cửa sổ Command Prompt.
2. **Bước 2:** Nhập lệnh `ipconfig` $ightarrow$ Nhấn **Enter**.
3. **Bước 3:** Quan sát dòng `IPv4 Address` (Địa chỉ IP của máy), `Subnet Mask` và `Default Gateway` (Địa chỉ IP của Router).

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| TCP/IP | Transmission Control Protocol / Internet Protocol | Bộ giao thức truyền thông chuẩn của Internet |
| DNS | Domain Name System | Hệ thống phân giải tên miền |
| DHCP | Dynamic Host Configuration Protocol | Giao thức tự động cấp phát IP |
| Three-way Handshake | Three-way Handshake | Quy trình bắt tay 3 bước thiết lập kết nối TCP |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Internet hoạt động dựa trên bộ giao thức chuẩn **TCP/IP**.
2. **IP** chịu trách nhiệm gán địa chỉ và định tuyến gói tin; **TCP** đảm bảo truyền dữ liệu chính xác, tin cậy, đúng thứ tự.
3. IPv4 gồm 32 bit; IPv6 gồm 128 bit. DNS giúp đổi tên miền dễ nhớ thành địa chỉ IP số.
