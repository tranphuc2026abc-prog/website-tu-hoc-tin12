# BÀI 22: THỰC HÀNH CẬP NHẬT BẢNG DỮ LIỆU CÓ THAM CHIẾU

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu được cách thức nhập, sửa, xóa dữ liệu đối với các bảng có **khóa ngoài** tham chiếu đến khóa chính của bảng khác.

## 2. Thêm mới dữ liệu vào bảng có khóa ngoài (`bannhac`)
- Chọn bảng `bannhac` → thẻ **Dữ liệu** → chèn hàng mới.
- Trường khóa chính `idBannhac` có `AUTO_INCREMENT` nên không cần nhập.
- Nhập `tenBannhac`. Với trường khóa ngoài `idNhacsi`, nháy đúp vào ô để **chọn tên nhạc sĩ từ hộp danh sách** (chỉ cho phép các giá trị `idNhacsi` đã có trong bảng `nhacsi`).

## 3. Sửa và Xóa dữ liệu ở bảng con và bảng cha
- **Bảng con (`bannhac`):** Sửa/xóa bình thường như Bài 21.
- **Bảng cha (`nhacsi`):** MySQL sẽ kiểm tra và **ngăn chặn xóa** các dòng ở `nhacsi` nếu giá trị `idNhacsi` đó đang được tham chiếu trong `bannhac` (nhằm bảo vệ tính toàn vẹn dữ liệu).

## 4. Thứ tự nhập dữ liệu chuẩn trong `mymusic`
1. Nhập bảng cha độc lập trước: `nhacsi`, `casi`.
2. Nhập bảng phụ thuộc cấp 1: `bannhac` (tham chiếu `nhacsi`).
3. Nhập bảng phụ thuộc cấp 2: `banthuam` (tham chiếu `bannhac` và `casi`).

## 5. Áp dụng tương tự
- Bảng `banthuam` có 2 khóa ngoài (`idBannhac`, `idCasi`).
- Bảng `huyen(idHuyen, tenHuyen, idTinh)` có khóa ngoài `idTinh` tham chiếu `tinh`.

## 6. Lưu ý lỗi thường gặp
- Nhập bảng con trước khi có dữ liệu ở bảng cha sẽ không chọn được khóa ngoài hợp lệ.
- Xóa nhầm dòng ở bảng cha đang có liên kết sẽ gặp hộp thoại báo lỗi ràng buộc khóa ngoài từ MySQL.

## 7. Bài tập thực hành tự kiểm tra
- Nhập dữ liệu mẫu cho cả 4 bảng trong `mymusic` và thử xóa một nhạc sĩ đã có bản nhạc để quan sát thông báo bảo vệ toàn vẹn của MySQL.
