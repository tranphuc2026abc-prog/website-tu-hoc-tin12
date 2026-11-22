# BÀI 22: KIỂU DỮ LIỆU DANH SÁCH

## 1. Mục tiêu bài học
- Biết cách khởi tạo kiểu dữ liệu danh sách (`list`) trong Python.
- Biết truy cập, thay đổi giá trị phần tử qua chỉ số, tính độ dài bằng `len()` và xóa phần tử bằng `del`.
- Biết duyệt các phần tử của danh sách bằng vòng lặp `for` và thêm phần tử vào cuối danh sách bằng `append()`.

## 2. Kiến thức trọng tâm

### 2.1. Khởi tạo và truy cập phần tử danh sách
- **Khởi tạo**: `<tên list> = [<v1>, <v2>, ..., <vn>]`. Danh sách rỗng: `A = []`. Các phần tử có thể thuộc nhiều kiểu dữ liệu khác nhau.
- **Chỉ số (Index)**: Bắt đầu từ `0` đến `len(A) - 1` (chỉ số âm `-1` là phần tử cuối cùng).
- **Truy cập / Sửa**: `A[i]` đọc giá trị; `A[i] = giá_trị_mới` thay đổi phần tử tại chỉ số `i`.
- **Xóa phần tử**: `del A[i]` xóa phần tử tại chỉ số `i` (hoặc `del A[start:stop]` xóa một đoạn).

### 2.2. Duyệt danh sách và thêm phần tử
- **Duyệt theo chỉ số**: `for i in range(len(A)):` (dùng khi cần biết vị trí `i` hoặc sửa `A[i]`).
- **Thêm phần tử vào cuối**: `A.append(x)` tăng độ dài danh sách lên 1 và đặt `x` ở cuối.
- **Nối danh sách**: `A = [x] + A` (thêm vào đầu) hoặc `A = A + [x]`.

## 3. Ví dụ minh họa chuẩn Python

```python
# Ví dụ 1: Nhập danh sách n số nguyên và tính tổng các số dương
n = int(input("Nhập số phần tử n: "))
A = []
for i in range(n):
    A.append(int(input(f"A[{i}] = ")))

S = 0
for i in range(len(A)):
    if A[i] > 0:
        S = S + A[i]
print("Tổng các số dương:", S)
```

```python
# Ví dụ 2: Tìm giá trị lớn nhất và chỉ số của nó
A = [9, 11, 4, 56, 8, 1, 97]
gt_max = A[0]
cs_max = 0
for i in range(1, len(A)):
    if A[i] > gt_max:
        gt_max = A[i]
        cs_max = i
print("Max =", gt_max, "tại chỉ số", cs_max)
```

## 4. Bài tập vận dụng & Hướng dẫn giải
- **Bài 1**: Xóa phần tử cuối cùng của danh sách `A`.
  - *Giải*: `del A[len(A) - 1]` hoặc `del A[-1]`.
- **Bài 2**: Đếm số lượng số chẵn trong danh sách `A`.
  - *Giải*: Duyệt `for i in range(len(A)):`, nếu `A[i] % 2 == 0:` thì tăng biến đếm lên 1.

## 5. Lưu ý và mở rộng
- Danh sách là kiểu dữ liệu **khả biến (mutable)**: mọi thao tác `A[i] = ...`, `append()`, `del` đều thay đổi trực tiếp trên danh sách gốc.
- Lưu ý phân biệt phép gán tham chiếu `B = A` (cùng trỏ một vùng nhớ) với sao chép `B = A[:]` hoặc `B = A.copy()`.

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi vượt quá chỉ số (`IndexError: list index out of range`)**
   - *Nguyên nhân*: Truy cập `A[len(A)]` hoặc quên chỉ số bắt đầu từ `0` (danh sách 5 phần tử chỉ có chỉ số `0..4`).
   - *Khắc phục*: Luôn kiểm tra chỉ số dương nằm trong `[0, len(A) - 1]`; dùng `range(len(A))` khi duyệt.
2. **Đặt tên biến trùng với tên hàm chuẩn của Python (`list`, `max`, `min`, `sum`)**
   - *Nguyên nhân*: Nhiều tài liệu cũ viết `max = A[0]` hoặc `sum = 0`, làm che mất hàm `max()`, `sum()` có sẵn trong chương trình sau đó.
   - *Khắc phục*: Đặt tên biến rõ ràng như `gt_max`, `tong`, `ds` để tránh xung đột định danh.
3. **Nhầm lẫn giữa `A.append([3, 4])` và `A = A + [3, 4]`**
   - *Nguyên nhân*: Tưởng `append` sẽ bung các phần tử của `[3, 4]` ra.
   - *Khắc phục*: `append(x)` luôn thêm `x` thành **một phần tử duy nhất** (có thể tạo danh sách lồng nhau); muốn nối nhiều phần tử dùng `+` hoặc `extend()`.
4. **Duyệt vòng lặp và xóa phần tử bằng `del A[i]` cùng lúc**
   - *Nguyên nhân*: Khi xóa phần tử ở giữa, độ dài `A` giảm đi và các phần tử phía sau dồn chỉ số lên, làm nhảy cóc phần tử hoặc gây `IndexError` ở cuối vòng lặp `range(len(A))`.
   - *Khắc phục*: Duyệt ngược từ cuối về đầu hoặc tạo danh sách mới chứa các phần tử cần giữ lại.

## 7. Tóm tắt nhanh (Ghi nhớ)
- Khai báo: `A = [v1, v2, ...]`; rỗng: `A = []`.
- Độ dài: `len(A)`; chỉ số hợp lệ: `0` đến `len(A) - 1`.
- Thêm cuối: `A.append(x)`; xóa tại chỉ số `i`: `del A[i]`.
