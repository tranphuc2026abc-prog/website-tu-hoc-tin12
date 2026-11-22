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
