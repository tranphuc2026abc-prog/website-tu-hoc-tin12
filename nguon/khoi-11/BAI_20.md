# BÀI 20: THỰC HÀNH TẠO LẬP BẢNG CÓ KHÓA NGOÀI

## 1. Mục tiêu và Yêu cầu cần đạt
- Biết cách tạo mới các bảng có **khóa ngoài** tham chiếu tới khóa chính của bảng khác trong HeidiSQL.

## 2. Khai báo trường dữ liệu cho bảng có khóa ngoài (`bannhac`)
- `idBannhac`: `INT`, bỏ `Allow NULL`, mặc định `AUTO_INCREMENT`.
- `tenBannhac`: `VARCHAR(255)`, mặc định `''`.
- `idNhacsi` (khóa ngoài): phải cùng kiểu **`INT`** với `nhacsi.idNhacsi`, giá trị mặc định là số nguyên (VD: `0`), **không** đặt `AUTO_INCREMENT`.

## 3. Khai báo Khóa chính và Khóa cấm trùng lặp
- Khóa chính `idBannhac`: `Create new index → PRIMARY`.
- Khóa cấm trùng lặp `(tenBannhac, idNhacsi)`: đánh dấu cả hai trường → `Create new index → UNIQUE`.

## 4. Khai báo Khóa ngoài trong HeidiSQL
1. Chọn thẻ **`Foreign keys`**.
2. Nháy ô dưới **`Columns`** → chọn trường khóa ngoài (`idNhacsi`) → **OK**.
3. Nháy ô dưới **`Reference table`** → chọn bảng tham chiếu (`nhacsi`) → **OK**.
4. Chọn trường tham chiếu tương ứng (`idNhacsi` của bảng `nhacsi`).
5. Nhấn **Lưu** để khởi tạo bảng.

## 5. Áp dụng mở rộng
- Bảng `banthuam(idBanthuam, idBannhac, idCasi)`: khóa chính `idBanthuam`, khóa `UNIQUE(idBannhac, idCasi)`, hai khóa ngoài `idBannhac` và `idCasi`.
- Bảng `huyen(idHuyen, tenHuyen, idTinh)`: khóa ngoài `idTinh` tham chiếu `tinh.idTinh`.

## 6. Lưu ý lỗi thường gặp
- Tạo bảng có khóa ngoài **trước** khi tạo bảng tham chiếu sẽ báo lỗi.
- Khác kiểu dữ liệu giữa khóa ngoài và khóa chính tham chiếu (VD `INT` vs `VARCHAR`) sẽ không tạo được khóa ngoài.

## 7. Bài tập thực hành tự kiểm tra
- Tạo hoàn chỉnh hai bảng `bannhac` và `banthuam` trong CSDL `mymusic` với đầy đủ khóa chính, `UNIQUE` và `Foreign keys`.
