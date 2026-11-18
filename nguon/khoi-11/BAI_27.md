# BÀI 27: CÔNG CỤ VẼ VÀ MỘT SỐ ỨNG DỤNG

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu vai trò của **lớp ảnh (Layer)**, **kênh alpha**, **màu nổi (Foreground)** và **màu nền (Background)**.
- Sử dụng được các công cụ vẽ (`Paint Brush`, `Bucket Fill`, `Gradient`, `Eraser`, `Clone`, `Healing`, `Color Picker`) để vẽ thêm, tẩy xóa và chỉnh sửa ảnh.

## 2. Lớp ảnh (Layer) và Kênh Alpha
- **Tác vụ cơ bản:** `New Layer` (tạo mới), `Delete Layer` (xóa), `Duplicate Layer` (nhân bản), `Merge Down` (gộp với lớp ngay dưới), biểu tượng **con mắt** (ẩn/hiện lớp).
- **Kênh Alpha:** Thêm qua chuột phải lớp → **`Add Alpha Channel`**. Lớp có kênh alpha khi xóa sẽ tạo vùng **trong suốt** (lưới ô vuông xám–đen) để nhìn xuyên xuống lớp dưới; nếu không có kênh alpha, vùng xóa sẽ tô bằng **màu nền**.

## 3. Màu nổi (Foreground) và Màu nền (Background)
- **Màu nổi:** Dùng cho các công cụ vẽ (`Paint Brush`, `Bucket Fill`...).
- **Màu nền:** Đóng vai trò màu giấy vẽ (hiển thị khi xóa trên lớp không có kênh alpha).
- Dùng **`Color Picker`** để hút màu trực tiếp từ điểm ảnh.

## 4. Các công cụ vẽ chính (`Tools → Paint Tools`)
| Công cụ | Chức năng chính |
| :--- | :--- |
| **Paint Brush** | Vẽ thêm nét cọ lên lớp đang chọn |
| **Bucket Fill** | Tô màu đồng nhất cho vùng chọn |
| **Gradient** | Tô màu chuyển sắc |
| **Eraser** | Tẩy/xóa điểm ảnh |
| **Clone** | Sao chép **chính xác** vùng nguồn (giữ `Ctrl` + nháy chuột lấy mẫu) |
| **Healing** | Sao chép và **hòa trộn** với vùng xung quanh (xóa mụn, dây điện tự nhiên) |

## 5. Ứng dụng ghép nền và phục chế ảnh
- Tách đối tượng khỏi nền trên lớp trên (có kênh alpha) rồi đặt lớp nền mới (`bau_troi`) ở phía dưới để ghép ảnh tự nhiên.

## 6. Lưu ý lỗi thường gặp
- **Thứ tự lớp:** Lớp nằm trên cùng và không trong suốt sẽ che khuất hoàn toàn các lớp bên dưới.
- Nhầm lẫn kết quả xóa của `Eraser` giữa lớp **có** và **không có** kênh alpha.

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Dùng `Healing` xóa dây điện trên ảnh phong cảnh và dùng `Gradient` tạo nền trời mới ở lớp phía dưới.
