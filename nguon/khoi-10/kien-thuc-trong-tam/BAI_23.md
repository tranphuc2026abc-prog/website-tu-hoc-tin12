### 2.1. Toán tử `in` và duyệt danh sách
- **Kiểm tra thành viên**: `<giá trị> in <danh sách>` trả về `True` nếu giá trị có mặt trong danh sách, ngược lại trả về `False`.
- **Duyệt nhanh danh sách**:
```python
for x in A:
    print(x, end=" ")
```
  Biến `x` lần lượt nhận giá trị từng phần tử của `A` mà không cần dùng `range(len(A))`.

### 2.2. Các phương thức làm việc với danh sách
| Lệnh / Phương thức | Tác dụng | Lưu ý quan trọng |
|---|---|---|
| `A.append(x)` | Thêm `x` vào cuối danh sách `A` | Luôn thêm ở vị trí cuối |
| `A.insert(k, x)` | Chèn `x` vào vị trí chỉ số `k` | Các phần tử từ `k` trở đi dịch sang phải; nếu `k >= len(A)` thì chèn vào cuối |
| `A.remove(x)` | Xóa **phần tử đầu tiên** có giá trị `x` | Gây lỗi `ValueError` nếu `x` không có trong `A` |
| `A.clear()` | Xóa toàn bộ phần tử của `A` | Danh sách trở thành rỗng `[]`, không nhận tham số |
