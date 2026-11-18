# BÀI 25: PHẦN MỀM CHỈNH SỬA ẢNH

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu khái niệm **ảnh số**, **ảnh bitmap (pixel)**, **độ phân giải (dpi/ppi)** và **megapixel**.
- Làm quen với giao diện phần mềm nguồn mở **GIMP** và thực hiện được các thao tác cơ bản: mở, phóng to/thu nhỏ, cắt, xoay, lưu và xuất ảnh.

## 2. Ảnh số, Ảnh bitmap và Độ phân giải
- **Ảnh bitmap:** Tập hợp các điểm ảnh (**pixel**), mỗi điểm ảnh mang giá trị màu sắc tại tọa độ `(x, y)`.
- **Độ phân giải (`dpi` / `ppi`):** Số điểm ảnh trên một inch; độ phân giải càng cao thì ảnh in càng sắc nét nhưng kích thước bản in thu lại.
- **Megapixel:** Số triệu điểm ảnh trên ảnh (VD: `3000 × 2000 = 6.000.000 pixel = 6 MP`).

## 3. Giao diện phần mềm GIMP
- Mặc định gồm nhiều cửa sổ; chuyển sang một cửa sổ qua **`Windows → Single-window Mode`**.
- **5 thành phần chính:**
  1. Thanh bảng chọn (`File`, `Edit`, `Image`, `Colors`, `Windows`...).
  2. Bảng công cụ (Zoom, Crop, Rotate...).
  3. Hộp tùy chọn công cụ.
  4. Vùng hiển thị ảnh (hỗ trợ **`Split view`** so sánh trước/sau).
  5. Các hộp chức năng (`Brushes`, `Patterns`, `Gradients`, `Layer`, `Channels`...).

## 4. Các thao tác cơ bản trong GIMP
- **Mở ảnh:** `File → Open` hoặc kéo thả tệp vào GIMP.
- **Phóng to / thu nhỏ:** Công cụ **Zoom** hoặc giữ `Ctrl` + lăn cuộn chuột.
- **Cắt ảnh (`Crop`, `Shift + C`):** Kéo khung vùng giữ lại → nhấn `Enter` để cắt (`Esc` để hủy).
- **Xoay ảnh (`Rotate`, `Shift + R`):** Nhập góc xoay hoặc kéo xoay trực tiếp.
- **Đổi kích thước/độ phân giải:** `Image → Scale Image`.

## 5. Lưu và Xuất tệp ảnh
- **`File → Save`:** Lưu tệp dự án gốc **`.xcf`** (giữ nguyên các lớp để sửa tiếp).
- **`File → Export` / `Export As`:** Xuất ra ảnh thành phẩm (`.jpg`, `.png`, `.gif`...).

## 6. Lưu ý lỗi thường gặp
- Tăng `dpi` khi in **không** làm tăng số điểm ảnh gốc mà làm giảm kích thước bản in.
- Phím tắt xoay ảnh là **`Shift + R`** (không phải `Ctrl + R`).

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Tính kích thước bản in của ảnh `3000 × 2000` pixel ở 150 dpi và 300 dpi; thực hành cắt và xoay nghiêng một bức ảnh phong cảnh trong GIMP.
