# BÀI 18: THỰC HÀNH XÁC ĐỊNH CẤU TRÚC BẢNG VÀ CÁC TRƯỜNG KHÓA

## 1. Mục tiêu và Yêu cầu cần đạt
- Biết cách phân tích bài toán quản lí thực tế để xác định các bảng dữ liệu, cấu trúc từng bảng, kiểu dữ liệu các trường và các loại khóa (**khóa chính**, **khóa ngoài**, **khóa cấm trùng lặp**) trước khi tạo lập CSDL.

## 2. Phân tích bài toán quản lí âm nhạc (`mymusic`)
Nếu gộp tất cả vào 1 bảng `banthuam` sẽ lặp lại nhiều lần tên bản nhạc, tên nhạc sĩ, tên ca sĩ. Do đó cần tách thành **4 bảng**:
1. `nhacsi(idNhacsi, tenNhacsi)`
2. `casi(idCasi, tenCasi)`
3. `bannhac(idBannhac, tenBannhac, idNhacsi)`
4. `banthuam(idBanthuam, idBannhac, idCasi)`

## 3. Xác định các loại khóa
- **Khóa chính (`PRIMARY`):** `idNhacsi`, `idCasi`, `idBannhac`, `idBanthuam`.
- **Khóa ngoài (`FOREIGN KEY`):**
  - Bảng `bannhac`: `idNhacsi` tham chiếu `nhacsi.idNhacsi`.
  - Bảng `banthuam`: `idBannhac` tham chiếu `bannhac.idBannhac`; `idCasi` tham chiếu `casi.idCasi`.
- **Khóa cấm trùng lặp (`UNIQUE`):**
  - Cặp `(tenBannhac, idNhacsi)` trong bảng `bannhac`.
  - Cặp `(idBannhac, idCasi)` trong bảng `banthuam`.

## 4. Xác định kiểu dữ liệu của các trường
- Các trường khóa chính: `INT`, tự động tăng (`AUTO_INCREMENT`).
- Các trường tên (`tenNhacsi`, `tenCasi`, `tenBannhac`): `VARCHAR(255)`.

## 5. Lợi ích của thiết kế tách bảng chuẩn
- Giảm không gian lưu trữ (hạn chế dư thừa).
- Thuận lợi bảo đảm tính toàn vẹn và nhất quán (khi sửa tên nhạc sĩ chỉ sửa 1 dòng ở bảng `nhacsi`).

## 6. Lưu ý lỗi thường gặp
- Khóa ngoài và khóa chính được tham chiếu **bắt buộc phải cùng kiểu dữ liệu**.
- Khi cần lưu thêm thuộc tính mới (như ngày sinh nhạc sĩ/ca sĩ), bổ sung cột `ngaysinh` kiểu `DATE` vào đúng bảng đối tượng tương ứng.

## 7. Bài tập thực hành tự kiểm tra
- Thiết kế cấu trúc 2 bảng `tinh(idTinh, tenTinh)` và `huyen(idHuyen, tenHuyen, idTinh)` kèm khóa chính, khóa ngoài và khóa `UNIQUE`.
