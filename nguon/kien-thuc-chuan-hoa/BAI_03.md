# BÀI 3: MỘT SỐ THIẾT BỊ MẠNG THÔNG DỤNG

## I. MỤC TIÊU BÀI HỌC
- **Về kiến thức:** Nắm vững chức năng, nguyên lý hoạt động và phạm vi ứng dụng của các thiết bị mạng: Hub, Switch, Wireless Access Point (WAP), Router và Modem.
- **Về kỹ năng:** Phân biệt được sự khác nhau giữa Hub và Switch, Router và Switch, Modem và Router; biết cách lựa chọn thiết bị mạng phù hợp cho gia đình hoặc phòng máy.
- **Về thái độ:** Tự giác bảo vệ và vận hành các thiết bị mạng đúng kỹ thuật an toàn.

---

## II. KIẾN THỨC TRỌNG TÂM
1. **Hub và Switch (Thiết bị kết nối trong mạng LAN):**
   - *Hub:* Hoạt động ở tầng Vật lý. Khi nhận dữ liệu từ 1 cổng, Hub gửi phát tán (broadcast) đến **tất cả các cổng còn lại**. Dễ gây xung đột tín hiệu (collision), hiệu suất thấp khi mạng có nhiều máy.
   - *Switch (Bộ chuyển mạch):* Hoạt động ở tầng Liên kết dữ liệu. Switch kiểm tra địa chỉ MAC đích, thiết lập kênh truyền tạm thời và **chỉ gửi dữ liệu đến đúng cổng của thiết bị nhận**. Không gây xung đột tín hiệu, hiệu suất cao.
2. **Wireless Access Point - WAP / AP (Điểm truy cập không dây):**
   - Bộ thu phát Wi-Fi truyền nhận dữ liệu qua sóng vô tuyến. Dùng để kết nối không dây các thiết bị di động vào mạng LAN.
3. **Router (Bộ định tuyến):**
   - Làm việc ở tầng Mạng (Network Layer). Có chức năng định tuyến (chọn đường đi tối ưu) để chuyển tiếp gói tin giữa **các mạng khác nhau** (ví dụ giữa LAN và WAN/Internet). Router có các cổng LAN và cổng WAN.
4. **Modem (Bộ điều chế và giải điều chế):**
   - Chuyển đổi giữa tín hiệu số (Digital - trong máy tính) và tín hiệu tương tự (Analog - trên đường truyền viễn thông quang/sóng).
   - Các loại Modem: Modem quang (FTTH), ADSL, Modem 3G/4G/5G. Ngày nay, chức năng Modem thường được tích hợp chung vào Router Wi-Fi của nhà mạng.

---

## III. GIẢI THÍCH KHÁI NIỆM CHI TIẾT
- **Địa chỉ MAC (Media Access Control):** Địa chỉ vật lý duy nhất được nhà sản xuất gán cứng vào card mạng (NIC) của mỗi thiết bị. Switch căn cứ vào địa chỉ MAC để chuyển đúng khung dữ liệu.
- **Cổng LAN vs Cổng WAN:**
  - *Cổng LAN:* Nối cáp mạng đến các máy tính trong mạng nội bộ.
  - *Cổng WAN:* Nối cáp mạng đến thiết bị nhà cung cấp dịch vụ Internet (ISP) để kết nối ra thế giới ngoại mạng.

---

## IV. VÍ DỤ MINH HỌA THỰC TẾ
- **Sự khác biệt Hub vs Switch:** Giống như giáo viên trả bài tập. Hub giống như giáo viên đọc to kết quả cho cả lớp cùng nghe (ai cũng nhận được). Switch giống như giáo viên đến tận bàn giao đúng bài cho học sinh sở hữu.
- **Router Wi-Fi gia đình:** Thiết bị do Viettel/FPT/VNPT cung cấp thường là thiết bị "3 trong 1": tích hợp **Modem quang** (biến đổi tín hiệu cáp quang), **Router** (định tuyến IP ra Internet) và **WAP** (phát sóng Wi-Fi).

---

## V. QUY TRÌNH THỰC HÀNH / THAO TÁC KỸ THUẬT
*Kết nối máy tính với Wi-Fi trên Windows 11:*
1. **Bước 1:** Nhấp biểu tượng Mạng (Wi-Fi) ở góc phải dưới thanh Taskbar.
2. **Bước 2:** Bật công tắc Wi-Fi $ightarrow$ Chọn tên mạng Wi-Fi (SSID) mong muốn kết nối.
3. **Bước 3:** Tích chọn "Connect automatically" $ightarrow$ Nhập mật khẩu Wi-Fi (Security key) $ightarrow$ Nhấp **Next** để hoàn tất kết nối.

---

## VI. THUẬT NGỮ CHUYÊN NGÀNH (GLOSSARY)
| Thuật ngữ | Tiếng Anh | Ý nghĩa |
| :--- | :--- | :--- |
| Switch | Switch | Bộ chuyển mạch (truyền dữ liệu đúng cổng đích) |
| Hub | Hub | Bộ tập trung (phát tán dữ liệu ra tất cả các cổng) |
| Router | Router | Bộ định tuyến (chuyển gói tin giữa các mạng) |
| Modem | Modulator - Demodulator | Bộ điều chế & giải điều chế tín hiệu |
| WAP / AP | Wireless Access Point | Điểm truy cập mạng không dây Wi-Fi |

---

## VII. NỘI DUNG CỐT LÕI CẦN GHI NHỚ
1. Hub phát tán dữ liệu đến mọi cổng $ightarrow$ dễ xung đột. Switch chỉ chuyển dữ liệu đến đúng cổng nhận $ightarrow$ tối ưu.
2. Router định tuyến dữ liệu giữa các mạng khác nhau (LAN $\leftrightarrow$ Internet).
3. Modem chuyển đổi tín hiệu số (Digital) $\leftrightarrow$ tín hiệu tương tự (Analog).
