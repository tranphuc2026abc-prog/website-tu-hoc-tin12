# BÀI 13: BỔ SUNG CÁC ĐỐI TƯỢNG ĐỒ HỌA

## 1. Mục tiêu bài học
- **Kiến thức:** Biết được các thuộc tính cơ bản của một số đối tượng hình khối có sẵn trong Inkscape; hiểu cách thiết lập màu tô (Fill), màu vẽ (Stroke) độc lập và tô màu chuyển sắc (Gradient); nắm được các phép ghép đối tượng hình học trong bảng chọn `Path`.
- **Năng lực:** Vẽ và tùy chỉnh được các hình khối cơ bản; thực hiện được các phép hợp, hiệu, giao, hiệu đối xứng, chia, cắt để tạo ra các đối tượng đồ họa phức tạp từ các hình đơn giản.
- **Phẩm chất:** Rèn luyện tư duy phân tích cấu trúc hình học, tính cẩn thận và óc thẩm mỹ trong thiết kế sản phẩm số.

## 2. Kiến thức trọng tâm
### 2.1. Các đối tượng hình khối có sẵn
Inkscape cung cấp các công cụ vẽ hình khối xác định bởi tính chất toán học chặt chẽ. Khi chọn từng công cụ, **thanh điều khiển thuộc tính** sẽ hiển thị các tham số tương ứng:
- **Hình vuông, hình chữ nhật:** `W` (chiều rộng), `H` (chiều cao), `Rx`, `Ry` (bán kính bo góc theo phương ngang và dọc; bằng `0` nếu là góc vuông).
- **Hình tròn, hình elip:** `Rx`, `Ry` (bán kính ngang, dọc), `Start`, `End` (góc điểm đầu và điểm cuối để tạo hình quạt hoặc cung tròn).
- **Hình đa giác, hình sao:** `Corners` (số đỉnh đa giác hoặc số cánh sao), `Spoke ratio` (tỉ lệ bán kính trong/ngoài của hình sao), `Rounded` (độ cong tại các đỉnh), `Randomized` (tham số làm méo hình ngẫu nhiên).

### 2.2. Thiết lập màu tô, màu vẽ và tô màu chuyển sắc
- **Màu tô (`Fill`)** và **màu vẽ/viền (`Stroke`)** được thiết lập hoàn toàn độc lập với nhau thông qua **bảng màu (Palette)** hoặc hộp thoại **Fill and Stroke** (`Ctrl + Shift + F`).
- Hộp thoại **Fill and Stroke** gồm 3 trang:
  - **Fill:** Chọn không tô màu (`X`), tô màu đồng nhất (`Flat color`), tô chuyển sắc tuyến tính (`Linear gradient`), chuyển sắc tỏa tròn (`Radial gradient`), lưới hoặc mẫu tô.
  - **Stroke paint:** Chọn màu cho đường viền.
  - **Stroke style:** Thiết lập độ dày (`Width`), kiểu nét liền/nét đứt (`Dashes`), đầu mút (`Cap`) và góc nối (`Join`).
- Độ trong suốt được điều chỉnh qua **Alpha (`A`)** hoặc **Opacity (%)** (từ `0%` trong suốt hoàn toàn đến `100%` che phủ hoàn toàn).

### 2.3. Các phép ghép đối tượng đồ họa (`Path`)
Để tạo hình phức tạp từ các hình đơn giản xếp chồng nhau, chọn các đối tượng rồi vào bảng chọn **Path**:
- **Hợp (`Union`, `Ctrl + +`):** Gộp 2 hay nhiều hình thành 1 hình thống nhất.
- **Hiệu (`Difference`, `Ctrl + -`):** Lấy hình lớp dưới trừ đi phần giao với hình lớp trên (hình trên biến mất).
- **Giao (`Intersection`, `Ctrl + *`):** Chỉ giữ lại phần giao nhau của các hình.
- **Hiệu đối xứng (`Exclusion`, `Ctrl + ^`):** Giữ lại phần không trùng nhau của hai hình, loại bỏ phần giao.
- **Chia (`Division`, `Ctrl + /`):** Dùng viền hình trên chia hình dưới thành các mảng kín độc lập.
- **Cắt (`Cut Path`, `Ctrl + Alt + /`):** Dùng viền hình trên cắt đường viền hình dưới tại các giao điểm thành các đoạn nét hở (xóa màu tô).

## 3. Thuật ngữ, khái niệm và cú pháp/lệnh quan trọng
| Thuật ngữ / Lệnh | Phím tắt / Vị trí | Ý nghĩa / Chức năng |
|---|---|---|
| `Fill and Stroke` | `Ctrl + Shift + F` | Mở hộp thoại tùy chỉnh màu tô, màu viền, kiểu nét |
| `Shift + Nháy chuột` | Bảng màu Palette | Đổi nhanh màu viền (`Stroke`) của đối tượng đang chọn |
| `Union` | `Path -> Union` (`Ctrl + +`) | Phép hợp các đối tượng |
| `Difference` | `Path -> Difference` (`Ctrl + -`) | Phép hiệu (hình dưới trừ hình trên) |
| `Intersection` | `Path -> Intersection` (`Ctrl + *`) | Phép giao |
| `Exclusion` | `Path -> Exclusion` (`Ctrl + ^`) | Phép hiệu đối xứng |
| `Division` | `Path -> Division` (`Ctrl + /`) | Phép chia hình dưới theo viền hình trên |
| `Cut Path` | `Path -> Cut Path` (`Ctrl + Alt + /`) | Phép cắt đường viền |
| `Duplicate` | `Ctrl + D` | Nhân bản đối tượng đang chọn |

## 4. Hướng dẫn thực hành và ví dụ minh họa
- **Ví dụ 1: Vẽ đám mây bằng phép hợp (`Union`):**
  1. Dùng công cụ hình tròn vẽ 4–5 hình tròn kích thước khác nhau xếp chồng lên nhau; thêm một hình chữ nhật ở đáy nếu muốn đáy phẳng.
  2. Kéo chuột chọn tất cả các hình, nhấn `Ctrl + +` (`Path -> Union`) để gộp thành một hình đám mây duy nhất, sau đó tô màu xanh nhạt/trắng.
- **Ví dụ 2: Vẽ miếng dưa hấu bằng phép hiệu (`Difference`) và `Duplicate`:**
  1. **Vỏ:** Vẽ hình tròn xanh lá và hình chữ nhật che nửa trên, chọn cả hai và nhấn `Ctrl + -` (`Path -> Difference`) để được nửa hình tròn.
  2. **Ruột:** Chọn vỏ, nhấn `Ctrl + D` nhân bản, thu nhỏ và tô màu đỏ (có thể dùng `Radial gradient`).
  3. **Hạt:** Ghép (`Union`) hình tam giác đã tăng `Rounded` với hình tròn nhỏ, tô màu nâu, nhân bản và đặt lên phần ruột.

## 5. Câu hỏi và bài tập vận dụng nhanh
1. **Câu hỏi:** Để các cánh của một hình sao 5 cánh trở nên tròn trịa hơn, em thay đổi tham số nào?
   - **Đáp án:** Thay đổi tham số `Rounded` trên thanh điều khiển thuộc tính.
2. **Câu hỏi:** Muốn tạo hiệu ứng bóng sáng trên quả bóng bay sao cho vẫn thấy màu quả bóng phía dưới, ta chỉnh thông số nào?
   - **Đáp án:** Giảm giá trị `Opacity (%)` hoặc `Alpha` của hình bóng sáng nằm trên xuống dưới mức tối đa (ví dụ 40–60%).
3. **Câu hỏi:** Chọn lệnh nào để biến đường viền hình tròn từ nét liền thành nét đứt?
   - **Đáp án:** Mở hộp thoại `Fill and Stroke` -> thẻ `Stroke style` -> mục `Dashes`.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Thực hiện phép hiệu (`Difference`) hoặc phép chia (`Division`) bị ngược kết quả mong muốn:**
   - *Nguyên nhân:* Đặt nhầm thứ tự lớp trên/dưới giữa hai đối tượng (lệnh `Difference` luôn lấy đối tượng nằm **dưới** trừ đi đối tượng nằm **trên**), hoặc chọn nhiều hơn 2 đối tượng khi thực hiện `Difference`.
   - *Khắc phục:* Kiểm tra thứ tự xếp lớp bằng các nút `Raise` (`Page Up`) / `Lower` (`Page Down`) trước khi ghép; đảm bảo chỉ chọn đúng 2 đối tượng khi dùng `Difference`, `Division`, `Cut Path`.
2. **Không thấy màu sau khi dùng `Cut Path` (`Ctrl + Alt + /`):**
   - *Nguyên nhân:* Nhầm lẫn giữa `Division` (chia mảng kín giữ màu tô) và `Cut Path` (cắt đường viền và tự động xóa màu tô).
   - *Khắc phục:* Nhấn `Ctrl + Z` hoàn tác và dùng `Path -> Division` (`Ctrl + /`) nếu mục tiêu là tách thành các mảng màu riêng biệt.
3. **Vẽ hình mới bị mất màu hoặc vẫn giữ nét đứt/độ trong suốt của hình cũ:**
   - *Nguyên nhân:* Inkscape mặc định áp dụng lại kiểu định dạng (`Style`) của đối tượng vừa vẽ trước đó.
   - *Khắc phục:* Mở `Fill and Stroke` (`Ctrl + Shift + F`) đặt lại `Fill`, `Stroke style` (chọn lại nét liền) và kiểm tra `Opacity` đưa về `100%`.

## 7. Tổng kết và liên hệ thực tiễn
- Bài 13 trang bị hai nhóm kỹ năng cốt lõi trong thiết kế vector: tùy chỉnh thuộc tính hình khối kết hợp phối màu `Fill/Stroke/Gradient` và tư duy dựng hình phức tạp từ các phép toán hình học trên tập hợp điểm (`Path`).
- Trong thực tế, kỹ thuật ghép hình (`Union`, `Difference`) và phối màu `Gradient` được ứng dụng trực tiếp để thiết kế biểu tượng (logo), icon ứng dụng, minh họa nhân vật và ấn phẩm truyền thông.
