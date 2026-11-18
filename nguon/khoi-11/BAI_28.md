# BÀI 28: TẠO ẢNH ĐỘNG

## 1. Mục tiêu và Yêu cầu cần đạt
- Thực hiện được các thao tác nâng cao trên lớp ảnh (mở nhiều ảnh thành lớp, khóa lớp, gom cụm, gộp lớp).
- Tạo, xem trước và xuất được tệp ảnh động **`.gif`** trong GIMP.

## 2. Thao tác xử lí trên lớp ảnh
- **Mở nhiều ảnh thành lớp:** `File → Open as Layers`.
- **Khóa lớp:** Chọn lớp → nháy thuộc tính khóa trong hộp thoại `Layer` để tránh sửa nhầm.
- **Gom cụm:** Nháy ô vuông thứ hai (biểu tượng **sợi dây xích**) bên trái các lớp cần thao tác chung.
- **Gộp lớp:** Nháy phải vào lớp trên → **`Merge Down`** để gộp với lớp ngay bên dưới.

## 3. Thiết lập khung hình và Thời gian hiển thị
- Mỗi lớp ảnh là một khung hình, hiển thị theo thứ tự **từ dưới lên trên**.
- **Đặt thời gian riêng:** Thêm `(Xms)` vào sau tên lớp (X là số **mili-giây**, VD: `(1000ms)` = 1 giây).
- **Xem thử:** `Filters → Animation → Playback`.

## 4. Hiệu ứng chuyển động (`Filters → Animation`)
- **`Blend`:** Tạo các khung trung gian (`Intermediate frames`) chuyển động mờ dần giữa các lớp (cần tối thiểu 3 lớp, lớp dưới cùng là nền).

## 5. Xuất tệp ảnh động `.gif`
1. Chọn **`File → Export As`**, đặt tên tệp đuôi **`.gif`** → `Export`.
2. Tích chọn **`As animation`**.
3. Tích **`Loop forever`** để lặp vô tận (không tích sẽ chỉ chạy 1 lần).
4. Nhập thời gian mặc định (ms) vào **`Delay between frames where unspecified`** cho các lớp chưa đặt `(Xms)`.
5. Nếu có lớp vượt khung hình, nhấn **`Crop`** khi được hỏi.

## 6. Lưu ý lỗi thường gặp
- **`(Xms)` tính bằng mili-giây**, không phải giây.
- Lớp dưới cùng **không thể** dùng lệnh `Merge Down`.
- Phải dùng `File → Export As` (không dùng `Save As` vốn chỉ lưu `.xcf`).

## 7. Bài tập thực hành tự kiểm tra
- Tạo ảnh động biểu tượng chờ (`Waiting.gif`) gồm 8 lớp ảnh quay tròn đều quanh tâm.
