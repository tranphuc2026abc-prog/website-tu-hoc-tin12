# BÀI 21: THỰC HÀNH CẬP NHẬT VÀ TRUY XUẤT DỮ LIỆU CÁC BẢNG

## 1. Mục tiêu và Yêu cầu cần đạt
- Biết cách thêm mới, chỉnh sửa, xóa và truy xuất dữ liệu trên các bảng không có khóa ngoài (`nhacsi`, `casi`) bằng HeidiSQL.

## 2. Thêm mới dữ liệu vào bảng
1. Chọn bảng (VD: `nhacsi`) → chọn thẻ **Dữ liệu**.
2. Nhấn phím **`Insert`** (hoặc nháy phải chuột chọn **Chèn hàng**) để tạo hàng rỗng mới.
3. Không cần nhập cột `idNhacsi` (vì đã đặt `AUTO_INCREMENT`). Nháy đúp vào ô cột `tenNhacsi`, nhập tên và nhấn **`Enter`**.

## 3. Chỉnh sửa và Xóa dữ liệu
- **Chỉnh sửa:** Nháy đúp chuột vào ô cần sửa, nhập giá trị mới và nhấn `Enter`.
- **Xóa dòng:** Chọn dòng dữ liệu muốn xóa, nháy phải chọn xóa (hoặc nhấn `Delete`) và xác nhận.

## 4. Truy xuất dữ liệu trên giao diện và bằng SQL
- **Trên giao diện:** Nháy vào tiêu đề cột để sắp xếp tăng/giảm; dùng bộ lọc (Filter) để tìm kiếm theo điều kiện.
- **Bằng SQL (thẻ Truy vấn):** `SELECT * FROM nhacsi ORDER BY tenNhacsi;`

## 5. Áp dụng tương tự cho bảng `casi`
- Thao tác thêm, sửa, xóa và truy xuất trên bảng `casi(idCasi, tenCasi)` thực hiện hoàn toàn tương tự bảng `nhacsi`.

## 6. Lưu ý lỗi thường gặp
- Quên nhấn `Enter` hoặc di chuyển sang dòng khác khiến dữ liệu đang gõ chưa được ghi nhận xuống MySQL.
- Nhập dữ liệu không đúng kiểu quy định (VD: nhập chữ vào cột kiểu số nguyên) sẽ bị từ chối.

## 7. Bài tập thực hành tự kiểm tra
- Nhập ít nhất 5 nhạc sĩ và 5 ca sĩ vào CSDL `mymusic`, sau đó sắp xếp theo thứ tự bảng chữ cái.
