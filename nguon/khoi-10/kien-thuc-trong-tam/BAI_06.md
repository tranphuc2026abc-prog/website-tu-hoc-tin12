# BÀI 6: DỮ LIỆU ÂM THANH VÀ HÌNH ẢNH

## 1. Mục tiêu học tập và yêu cầu cần đạt
- Trình bày được quy trình số hóa âm thanh theo phương pháp **điều chế mã xung (PCM)** và vai trò của mạch **ADC / DAC**.
- Hiểu rõ ý nghĩa của **chu kì lấy mẫu**, **tần số lấy mẫu**, **độ sâu bit** và **tốc độ bit (bit rate)**; tính được tốc độ bit và dung lượng/thời lượng âm thanh.
- Phân biệt được hai phương pháp giảm kích thước tệp âm thanh: nén **không mất mát (lossless)** và nén **có mất mát (lossy)**.
- Hiểu cách biểu diễn **ảnh bitmap**, khái niệm **điểm ảnh (pixel)**, **độ phân giải**, **độ sâu màu (bit depth)**, hệ màu **RGB** và đặc điểm các định dạng `.bmp`, `.jpeg`, `.png`.

## 2. Kiến thức trọng tâm
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

## 3. Thuật ngữ và khái niệm
| Thuật ngữ | Giải thích ngắn gọn |
| :--- | :--- |
| **PCM (Pulse Code Modulation)** | Phương pháp điều chế mã xung dùng để số hóa tín hiệu âm thanh tương tự. |
| **Chu kì / Tần số lấy mẫu** | Khoảng thời gian giữa 2 lần lấy mẫu ($T$) và số lần lấy mẫu trong 1 giây ($f = 1/T$). |
| **Tốc độ bit (Bit rate)** | Số bit dùng để biểu diễn 1 giây âm thanh (đơn vị bps, kbps). |
| **Pixel & Độ phân giải** | Điểm ảnh nhỏ nhất cấu tạo nên ảnh bitmap; số lượng pixel theo chiều ngang × dọc. |
| **Độ sâu màu (Bit depth)** | Số bit dùng để mã hóa màu sắc cho một điểm ảnh (1 bit, 8 bit, 24 bit). |

## 4. Ví dụ minh họa và ứng dụng thực tế
- **Tính tốc độ bit nhạc CD chuẩn**: Nhạc nổi (2 kênh), mỗi kênh 16 bit, tần số lấy mẫu $44{,}1	ext{ kHz} = 44\,100	ext{ Hz}$:
  $$	ext{Bit rate} = 2 	imes 16 	imes 44\,100 = 1\,411\,200	ext{ bit/s} pprox 1411	ext{ kb/s}\;\; (	ext{hay } 1378	ext{ Kb/s nếu chia } 1024).$$
- **Tính dung lượng ảnh bitmap thô**: Ảnh RGB 24 bit ($= 3	ext{ byte/pixel}$) kích thước $1024 	imes 768$:
  $$	ext{Dung lượng} = 1024 	imes 768 	imes 3 = 2\,359\,296	ext{ byte} = 2{,}25	ext{ MB}.$$
- **Chọn chất lượng nhạc trực tuyến**: `128 kbps` (nhẹ, tiết kiệm băng thông), `320 kbps` (MP3 chất lượng cao), `Lossless` (nguyên bản chất lượng phòng thu).

## 5. Hướng dẫn thực hành hoặc hoạt động vận dụng
- **So sánh định dạng ảnh bằng Paint**: Mở một bức ảnh bất kì bằng phần mềm Paint (hoặc công cụ xem/chỉnh sửa ảnh), dùng `Save as` lưu thành 4 tệp với các đuôi `.bmp`, `.png`, `.jpeg`, `.gif` trong cùng thư mục, sau đó đối chiếu kích thước (Size) và chất lượng hiển thị của từng tệp.
- **Tính thời lượng lưu trữ**: Tính xem một tệp Audio Master tốc độ `4500 Kb/s` khi ghi lên đĩa CD `650 MB` sẽ chứa được bao nhiêu phút nhạc: $rac{650 	imes 1024 	imes 8}{4500} pprox 1183{,}3	ext{ giây} pprox 19{,}7	ext{ phút}$.

## 6. Những lỗi thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn chiều tác động giữa chu kì lấy mẫu và tần số lấy mẫu**:
   - *Nguyên nhân*: Nghĩ rằng "tăng chu kì lấy mẫu" sẽ làm âm thanh hay hơn.
   - *Khắc phục*: Chu kì $T$ và tần số $f$ tỉ lệ nghịch ($f = 1/T$). Tăng $T$ làm thưa số lần đo → chất lượng giảm; muốn tăng chất lượng phải **giảm chu kì** (tăng tần số lấy mẫu).
2. **Nhầm lẫn vai trò của mạch ADC và DAC**:
   - *Nguyên nhân*: Đọc lướt hai chữ cái viết tắt gần giống nhau.
   - *Khắc phục*: Ghi nhớ theo chiều dữ liệu: **A→D (ADC)** dùng lúc *thu âm* (Analog sang Digital); **D→A (DAC)** dùng lúc *phát ra loa* (Digital sang Analog).
3. **Nhầm lẫn đơn vị `kbps` (kilobit/giây) với `KB/s` (kilobyte/giây) và quên nhân số kênh (stereo = 2)**:
   - *Nguyên nhân*: Quên chia 8 khi đổi từ bit sang byte, hoặc quên nhân 2 kênh cho nhạc stereo.
   - *Khắc phục*: Luôn kiểm tra chữ `b` thường (bit) hay `B` hoa (Byte) và kiểm tra đề bài là âm thanh đơn kênh (mono = 1) hay âm thanh nổi (stereo = 2).

## 7. Tổng kết và câu hỏi tự kiểm tra
- **Tổng kết**: Âm thanh được số hóa bằng PCM thông qua lấy mẫu và mã hóa biên độ; chất lượng phụ thuộc tần số lấy mẫu và độ sâu bit. Hình ảnh bitmap được biểu diễn bằng lưới pixel theo hệ màu RGB (thông dụng 24 bit) với các định dạng nén khác nhau tùy mục đích sử dụng.
- **Câu hỏi tự kiểm tra**:
  1. Giải thích sự khác biệt giữa nén âm thanh `320 kbps` và `Lossless`.
  2. Tính dung lượng (theo MB) của một ảnh màu 24 bit chưa nén có độ phân giải $1920 	imes 1080$ pixel.
