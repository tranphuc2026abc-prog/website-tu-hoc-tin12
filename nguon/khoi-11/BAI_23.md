# BÀI 23: THỰC HÀNH TRUY XUẤT DỮ LIỆU QUA LIÊN KẾT CÁC BẢNG

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu và viết được câu truy vấn SQL sử dụng **`INNER JOIN`** để truy xuất dữ liệu từ nhiều bảng có liên kết khóa ngoài.

## 2. Truy xuất liên kết 2 bảng (`bannhac` và `nhacsi`)
```sql
SELECT bannhac.tenBannhac, nhacsi.tenNhacsi
FROM bannhac
INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi;
```

## 3. Truy xuất liên kết 3 bảng (`banthuam`, `bannhac`, `casi`)
```sql
SELECT banthuam.idBanthuam, bannhac.tenBannhac, casi.tenCasi
FROM banthuam
INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac
INNER JOIN casi ON banthuam.idCasi = casi.idCasi;
```

## 4. Truy xuất liên kết 4 bảng kết hợp lọc `WHERE`
```sql
SELECT banthuam.idBanthuam, bannhac.tenBannhac, nhacsi.tenNhacsi, casi.tenCasi
FROM banthuam
INNER JOIN bannhac ON banthuam.idBannhac = bannhac.idBannhac
INNER JOIN casi ON banthuam.idCasi = casi.idCasi
INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi
WHERE casi.tenCasi = 'Lê Dung';
```

## 5. Quy tắc đặt tên cột đầy đủ
- Khi hai bảng có trường trùng tên (như `idNhacsi` ở `bannhac` và `nhacsi`), bắt buộc viết dạng **`tenBang.tenTruong`** để tránh lỗi mơ hồ (ambiguous column).

## 6. Lưu ý lỗi thường gặp
- Nối sai điều kiện `ON` (ví dụ nối `idBannhac = idCasi`) sẽ trả về kết quả sai lệch.
- Quên nối bảng trung gian (`bannhac`) khi muốn đi từ `banthuam` sang `nhacsi`.

## 7. Bài tập thực hành tự kiểm tra
- Viết truy vấn liệt kê tất cả bản thu âm của các nhạc phẩm do nhạc sĩ 'Văn Cao' sáng tác.
