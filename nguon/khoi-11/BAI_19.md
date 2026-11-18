# BÀI 19: THỰC HÀNH TẠO LẬP CƠ SỞ DỮ LIỆU VÀ CÁC BẢNG

## 1. Mục tiêu và Yêu cầu cần đạt
- Biết tạo mới một CSDL thông qua giao diện của **HeidiSQL**.
- Tạo được các bảng **không có khóa ngoài**, chỉ định **khóa chính (`PRIMARY`)** và **khóa cấm trùng lặp (`UNIQUE`)**.

## 2. Tạo lập CSDL `mymusic`
1. Nháy nút phải chuột tại vùng danh sách CSDL bên trái → chọn **Tạo mới → Cơ sở dữ liệu**.
2. Nhập tên **`mymusic`** → chọn bộ mã Unicode **`utf8mb4`** (đối chiếu `utf8mb4_general_ci`) → nhấn **OK**.

## 3. Tạo lập bảng và khai báo trường dữ liệu
1. Chọn CSDL `mymusic` → **Tạo mới → Bảng** → đặt tên (VD: `nhacsi`).
2. Nhấn **Thêm mới** (hoặc `Ctrl + Insert` / nháy phải chọn **Add column**):
   - `idNhacsi`: kiểu **`INT`**, **bỏ chọn `Allow NULL`**, đặt mặc định **`AUTO_INCREMENT`**.
   - `tenNhacsi`: kiểu **`VARCHAR`**, độ dài **`255`**, mặc định kí tự rỗng `''`.

## 4. Khai báo Khóa chính và Khóa cấm trùng lặp
- **Khóa chính:** Nháy phải chuột vào dòng `idNhacsi` → **Create new index → PRIMARY**.
- **Sửa nếu đặt nhầm khóa chính:** Nháy đúp vào tên trường dưới mục `PRIMARY KEY` phía trên để chọn lại đúng trường `idNhacsi`.
- **Khóa cấm trùng lặp:** Chọn **Create new index → UNIQUE**.

## 5. Lưu kết quả
- Nhấn nút **Lưu** để hoàn tất; tên bảng mới sẽ xuất hiện dưới CSDL `mymusic` ở cột bên trái.

## 6. Lưu ý lỗi thường gặp
- Quên nhấn **Lưu** khiến bảng chưa được tạo thực sự trên MySQL.
- Quên bỏ chọn **`Allow NULL`** ở trường khóa chính.

## 7. Bài tập thực hành tự kiểm tra
- Tạo hoàn chỉnh hai bảng không có khóa ngoài: `nhacsi(idNhacsi, tenNhacsi)` và `casi(idCasi, tenCasi)` trong CSDL `mymusic`.
