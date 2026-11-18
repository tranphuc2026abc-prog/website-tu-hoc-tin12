# BÀI 4: BÊN TRONG MÁY TÍNH

## 1. Mục tiêu và Yêu cầu cần đạt
- Nhận diện và nêu được chức năng của các thiết bị bên trong máy tính: CPU, RAM, ROM, bộ nhớ ngoài, bảng mạch chính (mainboard).
- Hiểu vai trò của các mạch lôgic (AND, OR, NOT, XOR) trong việc xử lí thông tin nhị phân.
- Thực hiện được phép cộng hai số nhị phân và hiểu minh họa mạch điện cộng hai bit.

## 2. Các thiết bị bên trong máy tính
- **Bảng mạch chính (Mainboard):** Kết nối CPU, bộ nhớ trong, bộ nhớ ngoài và các bảng mạch mở rộng.
- **Bộ xử lí trung tâm (CPU):** Thực hiện chương trình máy tính, gồm 2 bộ phận chính:
  - **Bộ số học và lôgic (ALU):** Thực hiện mọi phép tính số học và lôgic.
  - **Bộ điều khiển (CU):** Phối hợp đồng bộ các thiết bị, đảm bảo thực hiện đúng chương trình.
  - Ngoài ra còn có **thanh ghi (register)**, **bộ nhớ đệm (cache)** (lưu tạm dữ liệu hay dùng để CPU truy xuất nhanh hơn RAM) và **đồng hồ xung** (tốc độ đo bằng GHz; hiệu năng xử lí còn đo bằng IPS, FLOPS; CPU nhiều lõi giúp xử lí đa nhiệm tốt hơn).

## 3. Bộ nhớ trong và Bộ nhớ ngoài
- **Bộ nhớ trong:**
  - **RAM:** Lưu dữ liệu tạm thời khi chạy chương trình, bị mất khi tắt nguồn; tham số chính là dung lượng (GB) và thời gian truy cập.
  - **ROM:** Ghi bằng phương tiện chuyên dùng, chương trình ứng dụng chỉ đọc; lưu lâu dài không cần nguồn nuôi (chứa chương trình khởi động/kiểm tra máy).
- **Bộ nhớ ngoài:** Đĩa từ (HDD), ổ thể rắn (SSD), đĩa quang, USB... Lưu trữ lâu dài, dung lượng lớn, giá rẻ hơn RAM; SSD nhanh hơn HDD vì không có bộ phận chuyển động cơ học.

## 4. Mạch lôgic và Phép toán lôgic cơ bản
- Dữ liệu trong máy tính biểu diễn bằng hệ nhị phân (0 và 1). Mọi mạch lôgic đều xây dựng được từ 3 cổng cơ bản: **AND**, **OR**, **NOT** (và mở rộng như **XOR**).
- Quy tắc:
  - `x AND y`: bằng 1 khi cả x và y đều bằng 1.
  - `x OR y`: bằng 1 khi ít nhất một đầu vào bằng 1.
  - `NOT x`: đảo ngược giá trị (0 → 1, 1 → 0).
  - `x XOR y`: bằng 1 khi x và y khác nhau.

## 5. Phép cộng nhị phân và Mạch cộng 2 bit
- **Quy tắc cộng bit:** `0+0=0`, `0+1=1`, `1+0=1`, `1+1=10₂` (viết 0, nhớ 1).
- **Mạch cộng 2 bit x và y:**
  - Bit tổng: `t = x XOR y`.
  - Bit nhớ: `z = x AND y`.
- **Ví dụ:** `10011₂ = 1×2⁴ + 1×2¹ + 1×2⁰ = 19₁₀`; `1001₂ + 1111₂ = 11000₂`.

## 6. Lưu ý lỗi thường gặp
- Không nhầm lẫn giữa **RAM vs ROM** với **Bộ nhớ trong vs Bộ nhớ ngoài**.
- Trong mạch cộng 2 bit, **XOR** tạo bit tổng, **AND** tạo bit nhớ (tránh nhớ ngược).

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Đổi các số nhị phân 4–5 bit sang thập phân và thực hiện phép cộng nhị phân có nhớ.
- Giải thích vì sao nâng cấp từ HDD lên SSD và tăng dung lượng RAM/Cache giúp máy tính chạy mượt hơn.
