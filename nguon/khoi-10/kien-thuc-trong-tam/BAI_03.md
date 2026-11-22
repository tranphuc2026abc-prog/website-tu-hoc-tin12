# BÀI 3: MỘT SỐ KIỂU DỮ LIỆU VÀ DỮ LIỆU VĂN BẢN

## 1. Mục tiêu học tập và yêu cầu cần đạt
- Phân loại được các kiểu dữ liệu thường gặp trong máy tính: **kiểu số** (nguyên, thực), **kiểu văn bản** (kí tự, xâu kí tự, tệp văn bản), **kiểu lôgic** và **kiểu đa phương tiện**.
- Giải thích được cơ sở phân loại dữ liệu (dựa trên mục đích và các phép xử lí áp dụng).
- Hiểu rõ cách mã hóa văn bản bằng bảng mã **ASCII** (7 bit / 8 bit) và bảng mã **Unicode** (**UTF-8**).
- Phân biệt được sự khác nhau giữa dữ liệu dạng số và mã định danh toàn chữ số (như số CCCD, số điện thoại, biển số xe).

## 2. Kiến thức trọng tâm
### 2.1. Phân loại dữ liệu trong máy tính
- Việc phân loại dữ liệu giúp máy tính có cách mã hóa nhị phân phù hợp và áp dụng đúng các phép toán xử lí:
  - **Kiểu số**: gồm số nguyên và số thực (dùng để thực hiện các phép tính số học `+`, `-`, `×`, `/` và so sánh độ lớn).
  - **Kiểu văn bản**: gồm *kiểu kí tự* (1 kí tự đơn), *kiểu xâu kí tự* (chuỗi các kí tự đặt trong các byte kế tiếp nhau trong bộ nhớ, thực hiện cắt, ghép, tìm kiếm, sắp xếp) và *kiểu tệp văn bản* (lưu trữ ở bộ nhớ ngoài).
  - **Kiểu lôgic**: chỉ nhận 2 giá trị chân lí `Đúng` / `Sai` để kiểm tra điều kiện rẽ nhánh.
  - **Kiểu đa phương tiện (Multimedia)**: âm thanh, hình ảnh, video.

### 2.2. Biểu diễn dữ liệu văn bản
- **Bảng mã ASCII**: bảng mã chuẩn của Mỹ; phiên bản gốc dùng **7 bit** mã hóa $2^7 = 128$ kí tự; phiên bản mở rộng dùng **8 bit** ($1	ext{ byte}$) mã hóa $2^8 = 256$ kí tự. Không đủ chỗ cho tất cả kí tự của mọi ngôn ngữ trên thế giới.
- **Bảng mã Unicode và tiếng Việt**:
  - Là bảng mã hợp nhất quốc tế, dùng từ **1 đến 4 byte** để mã hóa hầu hết các kí tự của mọi quốc gia, tránh trùng lặp mã cho cùng một mặt chữ và hỗ trợ ứng dụng đa ngôn ngữ.
  - **UTF-8** là định dạng chuyển đổi Unicode phổ biến nhất trên web và email; trong UTF-8, mỗi kí tự tiếng Việt dùng **từ 1 đến 3 byte** (chữ không dấu 1 byte, chữ có dấu tiếng Việt 2–3 byte).
  - Tiếng Việt có **134 kí tự riêng** không có trong bảng chữ cái tiếng Anh (52 chữ cái hoa/thường): 60 kí tự phát sinh từ `a, e, i, o, u, y` (5 dấu × 2 kiểu hoa/thường × 6 chữ), 72 kí tự từ `ă, â, ê, ô, ơ, ư` (6 trạng thái × 2 × 6) và 2 kí tự `đ, Đ`.

## 3. Thuật ngữ và khái niệm
| Thuật ngữ | Giải thích ngắn gọn |
| :--- | :--- |
| **Kiểu dữ liệu** | Cách phân loại dữ liệu dựa trên tập giá trị và các phép toán xử lí tương ứng. |
| **Xâu kí tự (String)** | Một chuỗi các kí tự được lưu trong các byte liên tiếp của bộ nhớ trong. |
| **Tệp văn bản (Text file)** | Định dạng lưu trữ dữ liệu văn bản lâu dài trên bộ nhớ ngoài. |
| **ASCII** | Bảng mã chuẩn trao đổi thông tin của Mỹ (7 bit cho 128 kí tự; mở rộng 8 bit cho 256 kí tự). |
| **Unicode / UTF-8** | Bộ mã kí tự hợp nhất toàn cầu; UTF-8 dùng 1–4 byte linh hoạt (tiếng Việt 1–3 byte). |

## 4. Ví dụ minh họa và ứng dụng thực tế
- **Phân loại dữ liệu trên thẻ Căn cước công dân**:
  - *Ảnh chân dung*: Dữ liệu hình ảnh.
  - *Họ tên, quê quán, nơi cư trú, số CCCD*: Dữ liệu văn bản.
- **Mã ASCII**: Kí tự `'C'` có mã thập phân `67` (`01000011₂`), `'S'` là `83` (`01010011₂`), `'G'` là `71` (`01000111₂`), `'K'` là `75` (`01001011₂`), `'t'` là `116` (`01110100₂`).
- **Mã QR**: Bản chất là mã hóa một xâu kí tự (ví dụ địa chỉ web `http://en.m.wikipedia.org`); khi quét, thiết bị thu nhận dưới dạng hình ảnh rồi giải mã ra xâu kí tự.

## 5. Hướng dẫn thực hành hoặc hoạt động vận dụng
- **Kiểm tra phông chữ tiếng Việt Unicode**: Mở phần mềm soạn thảo văn bản (Word/Writer), gõ một câu tiếng Việt có đủ các dấu (`ă, â, đ, ê, ô, ơ, ư` và dấu thanh) rồi thử đổi qua nhiều phông chữ khác nhau (`Times New Roman`, `Arial`, `Calibri`, `Algerian`...) để nhận biết phông nào hỗ trợ đầy đủ Unicode tiếng Việt.
- **Tra cứu bảng mã ASCII**: Thực hành đổi một từ ngắn (như `"TIN"`) sang mã thập phân và dãy bit 8 bit theo bảng ASCII.

## 6. Những lỗi thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn "số CCCD", "số điện thoại", "biển số xe" là kiểu dữ liệu số**:
   - *Nguyên nhân*: Thấy dữ liệu chỉ gồm các chữ số `0–9` nên mặc định chọn kiểu số nguyên.
   - *Khắc phục*: Kiểm tra xem dữ liệu có dùng để *cộng, trừ, nhân, chia* hay không và có thể *bắt đầu bằng số `0`* không. Số CCCD hay số điện thoại là mã ghép định danh, bắt đầu bằng `0`, không tính toán số học nên phải là **kiểu văn bản**.
2. **Nhầm lẫn độ dài mã hóa của ASCII chuẩn (7 bit) và ASCII mở rộng (8 bit), hoặc nhầm Unicode luôn cố định 2 byte**:
   - *Nguyên nhân*: Nhớ máy móc thông số của UTF-16 hoặc nhầm giữa số bit và số byte.
   - *Khắc phục*: Phân biệt rõ: ASCII chuẩn = 7 bit (128 kí tự), ASCII mở rộng = 8 bit (256 kí tự); Unicode (UTF-8) = 1 đến 4 byte (tiếng Việt 1–3 byte).
3. **Lỗi hiển thị phông chữ (lỗi font) khi dùng bảng mã cũ như TCVN3/VNI**:
   - *Nguyên nhân*: Văn bản gõ bằng bảng mã TCVN3 (`.VnTime`) nhưng mở trên máy không có font tương thích hoặc trộn lẫn với Unicode.
   - *Khắc phục*: Thống nhất sử dụng bảng mã **Unicode dựng sẵn (UTF-8)** và các bộ gõ hiện đại để tương thích đa nền tảng.

## 7. Tổng kết và câu hỏi tự kiểm tra
- **Tổng kết**: Phân loại dữ liệu (số, văn bản, lôgic, đa phương tiện) giúp xử lí thông tin chính xác. Dữ liệu văn bản được mã hóa phổ biến bằng ASCII (tiếng Anh) và Unicode/UTF-8 (đa ngôn ngữ, chuẩn hóa toàn cầu).
- **Câu hỏi tự kiểm tra**:
  1. Tại sao trên học bạ, "Điểm trung bình" là kiểu số thực còn "Số điện thoại phụ huynh" lại là kiểu văn bản?
  2. Nêu lí do ra đời của bảng mã Unicode và ưu điểm của UTF-8.
