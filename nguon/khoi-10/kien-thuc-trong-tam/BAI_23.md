# BÀI 23: MỘT SỐ LỆNH LÀM VIỆC VỚI DỮ LIỆU DANH SÁCH

## 1. Mục tiêu bài học
- Biết sử dụng toán tử `in` để kiểm tra sự tồn tại của một phần tử trong danh sách và kết hợp với `for` để duyệt nhanh danh sách.
- Sử dụng thành thạo các phương thức cơ bản trên danh sách: `append()`, `insert()`, `remove()`, `clear()`.
- Phân biệt được cơ chế hoạt động (theo giá trị hay theo chỉ số) và xử lý ngoại lệ tiềm ẩn của từng phương thức.

## 2. Kiến thức trọng tâm

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

## 3. Ví dụ minh họa chuẩn Python

```python
# Ví dụ 1: Kiểm tra và xóa an toàn tất cả các giá trị x trong danh sách
A = [1, 5, 2, 5, 3, 5]
x = 5
while x in A:
    A.remove(x)
print(A)  # Kết quả: [1, 2, 3]
```

```python
# Ví dụ 2: Tạo danh sách n số hạng đầu tiên của dãy Fibonacci
n = int(input("Nhập n (>= 2): "))
F = [0, 1]
for i in range(2, n):
    F.append(F[i - 1] + F[i - 2])
print(F)
```

## 4. Bài tập vận dụng & Hướng dẫn giải
- **Bài 1**: Khi nào `A.append(1)` và `A.insert(0, 1)` cho kết quả giống nhau?
  - *Giải*: Khi `A` là danh sách rỗng `[]`.
- **Bài 2**: Cho `A = [1, 2, 2, 3, 4, 5, 5]`. Chèn số `1` ngay sau số `1` đầu tiên.
  - *Giải*: `A.insert(1, 1)`.

## 5. Điểm nhấn sư phạm & Mở rộng
- So sánh 3 cách xóa dữ liệu thường gặp:
  - `del A[k]`: xóa theo **chỉ số** `k`.
  - `A.remove(x)`: xóa theo **giá trị** `x` (chỉ xóa phần tử đầu tiên khớp).
  - `A.clear()`: xóa **toàn bộ** phần tử (giữ lại danh sách rỗng `[]`), khác với `del A` (xóa luôn biến `A`).

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi `ValueError: list.remove(x): x not in list`**
   - *Nguyên nhân*: Gọi `A.remove(x)` trực tiếp khi `x` không tồn tại trong `A`.
   - *Khắc phục*: Luôn kiểm tra bằng `if x in A: A.remove(x)` trước khi xóa.
2. **Hiểu nhầm `A.remove(x)` sẽ xóa tất cả phần tử có giá trị `x` hoặc xóa theo chỉ số `x`**
   - *Nguyên nhân*: Nhầm giữa giá trị và vị trí (ví dụ `A.remove(2)` tưởng là xóa phần tử thứ 2), hoặc tưởng gọi 1 lần sẽ xóa hết các số trùng nhau.
   - *Khắc phục*: Ghi nhớ `remove(giá_trị)` chỉ xóa **1 lần xuất hiện đầu tiên**; muốn xóa theo chỉ số phải dùng `del A[chỉ_số]`; muốn xóa hết phải dùng `while x in A: A.remove(x)`.
3. **Truyền tham số vào `A.clear(x)`**
   - *Nguyên nhân*: Nhầm lẫn chức năng của `clear()` với `remove(x)`.
   - *Khắc phục*: `clear()` không có tham số, dùng để làm rỗng hoàn toàn danh sách.
4. **Đảo ngược thứ tự đối số trong `A.insert(k, x)`**
   - *Nguyên nhân*: Viết nhầm thành `A.insert(giá_trị, vị_trí)` khiến phần tử bị chèn sai chỗ hoặc nhảy xuống cuối danh sách.
   - *Khắc phục*: Nhớ quy tắc: **vị trí trước, giá trị sau** (`insert(index, value)`).

## 7. Tóm tắt nhanh (Ghi nhớ)
- `x in A` trả về `True`/`False`; `for x in A:` duyệt nhanh từng phần tử.
- `append(x)` (thêm cuối), `insert(k, x)` (chèn tại vị trí `k`), `remove(x)` (xóa giá trị `x` đầu tiên), `clear()` (xóa sạch thành `[]`).
