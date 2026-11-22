# BÀI 19: CÂU LỆNH RẼ NHÁNH IF

## 1. Mục tiêu bài học
- Hiểu được khái niệm **biểu thức lôgic** và kiểu dữ liệu `bool` (`True`, `False`) trong Python.
- Biết sử dụng các phép so sánh (`<`, `<=`, `>`, `>=`, `==`, `!=`) và các phép toán lôgic (`and`, `or`, `not`).
- Viết được câu lệnh rẽ nhánh `if` dạng thiếu, `if...else` dạng đủ và `if...elif...else` để giải quyết các bài toán rẽ nhánh đơn giản.

## 2. Kiến thức trọng tâm

### 2.1. Biểu thức lôgic
- **Biểu thức lôgic** là biểu thức chỉ nhận một trong hai giá trị `True` (Đúng) hoặc `False` (Sai), thuộc kiểu dữ liệu `bool`.
- **Các phép so sánh số học**: `<`, `<=`, `>`, `>=`, `==` (bằng nhau), `!=` (khác nhau). Python cho phép viết gộp so sánh kép như `5 < a <= 7`.
- **Các phép toán lôgic**:
  - `not` (phủ định): đảo ngược giá trị `True` <-> `False` (độ ưu tiên cao nhất).
  - `and` (và): chỉ trả về `True` khi **cả hai** vế đều `True`.
  - `or` (hoặc): trả về `True` khi **ít nhất một** vế là `True` (độ ưu tiên thấp nhất).

### 2.2. Câu lệnh rẽ nhánh `if`
- **Dạng thiếu**:
```python
if <điều kiện>:
    <khối lệnh>
```
  Nếu `<điều kiện>` đúng (`True`), thực hiện `<khối lệnh>`; nếu sai (`False`), bỏ qua.

- **Dạng đủ**:
```python
if <điều kiện>:
    <khối lệnh 1>
else:
    <khối lệnh 2>
```
  Nếu `<điều kiện>` đúng, thực hiện `<khối lệnh 1>`; ngược lại thực hiện `<khối lệnh 2>`.

- **Mở rộng nhiều nhánh (`elif`)**: Dùng khi có từ 3 trường hợp trở lên (`if ... elif ... else`).

## 3. Ví dụ minh họa chuẩn Python

```python
# Ví dụ 1: Tính tiền cam theo mức khối lượng
x = float(input("Nhập khối lượng cam mua (kg): "))
if x < 5:
    tien = x * 12000
else:
    tien = x * 10000
print("Số tiền phải trả là:", tien, "đồng")
```

```python
# Ví dụ 2: Kiểm tra năm nhuận
n = int(input("Nhập năm: "))
if n % 400 == 0 or (n % 4 == 0 and n % 100 != 0):
    print("Năm", n, "là năm nhuận")
else:
    print("Năm", n, "không phải là năm nhuận")
```

## 4. Bài tập vận dụng & Hướng dẫn giải
- **Bài 1 (Biểu thức lôgic)**: Viết biểu thức kiểm tra số `y` nằm ngoài đoạn `[1; 2]`.
  - *Giải*: `y < 1 or y > 2` (Lưu ý: không dùng `and` vì không có số nào vừa nhỏ hơn 1 vừa lớn hơn 2).
- **Bài 2 (So sánh hai số)**: Nhập hai số `x`, `y`, in ra kết luận `x` lớn hơn, bằng hay nhỏ hơn `y`.
  - *Giải*: Dùng `if x > y: ... elif x == y: ... else: ...`.

## 5. Điểm nhấn sư phạm & Mở rộng
- Nhấn mạnh quy tắc **thụt lề** (indentation — chuẩn PEP 8 dùng 4 dấu cách) là đặc trưng cú pháp bắt buộc của Python thay cho cặp ngoặc nhọn `{}` ở C++/Java.
- Phân biệt rõ khi nào dùng chuỗi `if ... elif ... else` (các trường hợp loại trừ lẫn nhau) với nhiều lệnh `if` độc lập.

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn toán tử gán `=` với toán tử so sánh bằng `==` trong điều kiện `if`**
   - *Nguyên nhân*: Quen viết dấu `=` trong toán học (ví dụ `if n % 2 = 0:`).
   - *Khắc phục*: Luôn dùng `==` khi so sánh bằng và `!=` khi so sánh khác; Python sẽ báo `SyntaxError` ngay dòng chứa dấu `=` đơn.
2. **Thiếu dấu hai chấm `:` sau `<điều kiện>` hoặc `else`**
   - *Nguyên nhân*: Quên cú pháp đặc thù của khối lệnh Python.
   - *Khắc phục*: Kiểm tra cuối dòng `if`, `elif`, `else` luôn phải kết thúc bằng `:`.
3. **Lỗi thụt lề (`IndentationError`) hoặc đặt nhầm lệnh ra ngoài khối `if`**
   - *Nguyên nhân*: Thụt lề không đều (trộn Tab và Space) hoặc quên thụt lề cho dòng lệnh thứ hai trở đi trong cùng một nhánh.
   - *Khắc phục*: Dùng thống nhất 4 dấu cách cho mỗi cấp thụt lề; kiểm tra mọi lệnh thuộc nhánh `if`/`else` phải thẳng hàng dọc.
4. **Nhầm lẫn `and` và `or` khi biểu diễn miền giá trị rời nhau**
   - *Nguyên nhân*: Học sinh hay dịch máy móc "nằm ngoài [1; 2]" thành `y < 1 and y > 2` (luôn `False`).
   - *Khắc phục*: Vẽ trục số minh họa: miền liên thông (giao) dùng `and`, hai miền rời nhau (hợp) dùng `or`.

## 7. Tóm tắt nhanh (Ghi nhớ)
- Kiểu `bool` chỉ có `True` / `False`; thứ tự ưu tiên: `not` > `and` > `or`.
- Sau `if <điều kiện>:` và `else:` bắt buộc có dấu `:`, khối lệnh bên trong phải thụt lề thẳng hàng.
- Dùng `elif` để xử lý rẽ nhánh nhiều hơn 2 trường hợp loại trừ nhau.
