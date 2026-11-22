### 2.1. Biểu diễn và số hóa âm thanh
- Âm thanh trong tự nhiên là **tín hiệu tương tự (analog)** có đồ thị liên tục theo thời gian.
- **Phương pháp điều chế mã xung (PCM)** gồm 3 bước:
  1. **Lấy mẫu**: đo biên độ sóng âm tại những thời điểm cách đều nhau (khoảng thời gian giữa 2 lần đo là *chu kì lấy mẫu* $T$; nghịch đảo $f = 1/T$ là *tần số lấy mẫu*, đơn vị Hz).
  2. **Biểu diễn giá trị mẫu**: lượng tử hóa giá trị đo thành các mức số nguyên (ví dụ thang 256 mức dùng 8 bit, thang 65 536 mức dùng 16 bit).
  3. **Biểu diễn âm thanh**: ghép chuỗi mã nhị phân của các mẫu thành dữ liệu âm thanh số.
- **Phần cứng chuyển đổi**: **ADC** (Analog-to-Digital Converter) dùng khi thu âm để số hóa âm thanh; **DAC** (Digital-to-Analog Converter) dùng khi phát nhạc để chuyển tín hiệu số ra loa/tai nghe.
- **Tốc độ bit (Bit rate)**: số bit cần thiết để biểu diễn 1 giây âm thanh:
  $$	ext{Bit rate} = 	ext{Số kênh} 	imes 	ext{Tần số lấy mẫu (Hz)} 	imes 	ext{Độ sâu bit}$$
  - Muốn tăng chất lượng âm thanh: *giảm chu kì lấy mẫu* (tức tăng tần số lấy mẫu) và *tăng độ sâu bit*.
- **Giảm kích thước tệp âm thanh**:
  - *Nén không mất mát (Lossless)*: giữ nguyên toàn bộ chất lượng âm thanh gốc (FLAC, ALAC).
  - *Nén có mất mát (Lossy)*: lược bỏ bớt phần âm thanh ít nhạy cảm với tai người để giảm mạnh dung lượng (MP3, AAC).

### 2.2. Biểu diễn hình ảnh
- **Ảnh bitmap**: lưu trữ dưới dạng ma trận các **điểm ảnh (pixel)**; mỗi pixel lưu thông tin màu sắc bằng một số bit gọi là **độ sâu màu (bit depth)**.
- **Hệ màu RGB**: phối hợp 3 màu cơ bản **Đỏ (Red)** – **Xanh lá (Green)** – **Xanh lam (Blue)** để hiển thị trên màn hình.
  - *Ảnh màu thông dụng*: độ sâu màu **24 bit** (mỗi kênh R, G, B dùng 8 bit = 256 mức, tạo ra $2^{24} pprox 16{,}7$ triệu màu).
  - *Ảnh xám thông dụng*: độ sâu màu **8 bit** (256 mức xám).
  - *Ảnh đen trắng*: độ sâu màu **1 bit** (chỉ có 2 mức đen và trắng).
- **Định dạng ảnh bitmap phổ biến**:
  - `.bmp`: ảnh bitmap nguyên gốc không nén, dung lượng rất lớn.
  - `.jpeg` (`.jpg`): nén có mất mát, dung lượng nhỏ, tải nhanh, phổ biến cho ảnh chụp và web.
  - `.png`: nén không mất mát, hỗ trợ **nền trong suốt**, phù hợp cho logo, đồ họa web.
