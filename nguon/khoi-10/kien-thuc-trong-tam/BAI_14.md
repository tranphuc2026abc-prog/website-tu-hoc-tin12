### 2.1. Làm quen với đối tượng dạng đường (`Path`)
- **Hình khối:** Là đối tượng định nghĩa sẵn theo tính chất toán học chặt chẽ (khi co giãn vẫn giữ nguyên đặc trưng hình khối, ví dụ hình chữ nhật góc bo).
- **Đối tượng tự do dạng đường:** Do người dùng tự tạo bằng công cụ bút vẽ (`Pen`/`Bézier`), là tổ hợp của nhiều đoạn thẳng hoặc đoạn cong nối lại với nhau.
- **Biểu diễn đoạn cong Bézier:** Mỗi đoạn cong được xác định bởi **4 điểm**: 2 điểm đầu mút và 2 điểm điều khiển. Đường nối điểm đầu mút với điểm điều khiển tạo thành **tiếp tuyến** của đường cong tại điểm đầu mút đó.
- Nếu điểm đầu trùng điểm cuối, ta thu được **đường cong kín** (có thể tô màu bên trong).

### 2.2. Tinh chỉnh đối tượng đường bằng `Node tool` (`N`)
- Điểm nối giữa các đoạn gọi là **điểm neo (node)**, gồm 2 loại chính:
  - **Điểm neo trơn (`Smooth nodes`):** Kí hiệu **hình vuông hoặc hình tròn**. Hai tia chỉ hướng ở hai bên luôn thẳng hàng tạo tiếp tuyến chung, giúp đường cong chuyển tiếp mượt mà.
  - **Điểm neo góc (`Corner/Cusp nodes`):** Kí hiệu **hình thoi**. Hai tia chỉ hướng thay đổi hướng và độ dài độc lập, tạo góc nhọn hoặc điểm gấp khúc.
- Độ cong tại mỗi điểm neo phụ thuộc vào **điểm chỉ hướng** và **đường chỉ hướng**. Có thể chuyển đổi qua lại giữa neo trơn và neo góc trên thanh điều khiển thuộc tính của `Node tool`.
- Mọi hình khối hoặc văn bản đều có thể chuyển thành đối tượng đường qua `Path -> Object to Path` (`Ctrl + Shift + C`) để chỉnh sửa tự do từng điểm neo.

### 2.3. Làm việc với đối tượng văn bản (`Text tool`, `T`)
- Chọn công cụ chữ **A** (`T`), nháy chuột lên vùng làm việc để gõ văn bản; nháy đúp vào văn bản để sửa nội dung hoặc bôi đen từng kí tự để đổi màu, kích thước, độ cao thấp khác nhau.
- **Đặt văn bản theo đường:** Chọn cả đối tượng văn bản và đối tượng đường, vào `Text -> Put on Path`.
- **Ẩn đường dẫn sau khi đặt chữ:** Chọn riêng đối tượng đường rồi bỏ `Stroke` (không xóa đường dẫn!).
- **Bỏ đặt văn bản theo đường:** Chọn văn bản và dùng `Text -> Remove from Path`.
- **Xóa tinh chỉnh thủ công từng kí tự:** Chọn văn bản và dùng `Text -> Remove Manual Kerns`.
