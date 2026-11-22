# BÀI 18: CÁC LỆNH VÀO RA ĐƠN GIẢN

## 1. Mục tiêu bài học
- **Kiến thức:** Hiểu chức năng và cú pháp lệnh nhập `input()`; nhận biết được 4 kiểu dữ liệu cơ bản (`int`, `float`, `str`, `bool`) bằng hàm `type()`; nắm được các hàm chuyển đổi kiểu `int()`, `float()`, `str()`.
- **Năng lực:** Viết được chương trình tương tác cho phép người dùng nhập dữ liệu từ bàn phím, chuyển đổi đúng kiểu dữ liệu để tính toán và xuất kết quả ra màn hình bằng `print()`.
- **Phẩm chất:** Cẩn thận kiểm tra kiểu dữ liệu đầu vào để tránh lỗi chạy chương trình (`Runtime Error`).

## 2. Kiến thức trọng tâm
### 2.1. Lệnh vào đơn giản `input()`
- Cú pháp: `<biến> = input(<Dòng thông báo>)`
- Chức năng: Tạm dừng chương trình chờ người dùng nhập dữ liệu từ bàn phím (nhấn `Enter` để kết thúc).
- **Đặc điểm quan trọng:** Kết quả trả về của hàm `input()` **luôn là kiểu xâu kí tự (`str`)**, ngay cả khi người dùng gõ vào các chữ số.

### 2.2. Nhận biết và chuyển đổi kiểu dữ liệu cơ bản
- **4 kiểu dữ liệu cơ bản trong Python:**
  - `int`: Số nguyên (ví dụ `-5`, `0`, `123`).
  - `float`: Số thực (ví dụ `3.14`, `15.0`, `-0.5`).
  - `str`: Xâu kí tự (ví dụ `"Tin học 10"`, `'123'`).
  - `bool`: Kiểu lôgic, chỉ có 2 giá trị `True` hoặc `False` (kết quả của phép so sánh).
- **Hàm `type(<biểu thức/biến>)`:** Dùng để kiểm tra kiểu dữ liệu hiện tại của biến hoặc biểu thức.
- **Các hàm chuyển đổi kiểu:**
  - `int(x)`: Chuyển sang số nguyên (`int("1110")` -> `1110`; `int(10.5)` -> `10`).
  - `float(x)`: Chuyển sang số thực (`float("15.0")` -> `15.0`; `float(4)` -> `4.0`).
  - `str(x)`: Chuyển sang xâu kí tự (`str(150)` -> `'150'`).
  - Lưu ý: `int()` và `float()` **không** chuyển đổi được xâu chứa biểu thức toán (như `"12 + 45"`) hay kí tự không hợp lệ (như `"123,5.5"`), và `int()` không chuyển trực tiếp xâu có dấu chấm thập phân (như `"12.0"`).

### 2.3. Nhập số từ bàn phím và lệnh ra `print()`
- Để nhập số nguyên: `n = int(input("Nhập số nguyên: "))`
- Để nhập số thực: `x = float(input("Nhập số thực: "))`
- Hàm `print()` hỗ trợ tham số `sep` (kí tự phân cách giữa các đối số, mặc định là dấu cách `' '`) và `end` (kí tự kết thúc, mặc định là xuống dòng `'\n'`).

## 3. Thuật ngữ, khái niệm và cú pháp/lệnh quan trọng
| Lệnh / Hàm | Cú pháp mẫu | Kết quả / Tác dụng |
|---|---|---|
| `input()` | `s = input("Nhập tên: ")` | Nhập dữ liệu từ bàn phím, trả về `str` |
| `type()` | `type(6.7)` | Trả về `<class 'float'>` |
| `int()` | `n = int(input("n = "))` | Ép kiểu sang số nguyên `int` |
| `float()` | `x = float(input("x = "))` | Ép kiểu sang số thực `float` |
| `str()` | `str(3 + 4//3)` | Chuyển sang xâu `'4'` |
| `print(..., sep=...)` | `print("A", "B", sep="-")` | In ra `A-B` |

## 4. Hướng dẫn thực hành và ví dụ minh họa
- **Ví dụ 1: Nhập `ss` giây từ bàn phím và quy đổi ra ngày, giờ, phút, giây:**
  ```python
  ss = int(input("Nhập số giây: "))
  ngay = ss // 86400
  gio = (ss - ngay * 86400) // 3600
  phut = (ss - ngay * 86400 - gio * 3600) // 60
  giay = ss - ngay * 86400 - gio * 3600 - phut * 60
  print(ss, "giây bằng", ngay, "ngày", gio, "giờ", phut, "phút", giay, "giây")
  ```
- **Ví dụ 2: Tính chu vi và diện tích tam giác từ 3 cạnh `a, b, c`:**
  ```python
  import math
  a = float(input("Nhập cạnh a: "))
  b = float(input("Nhập cạnh b: "))
  c = float(input("Nhập cạnh c: "))
  print("Chu vi tam giác là:", a + b + c)
  p = (a + b + c) / 2
  print("Diện tích tam giác là:", math.sqrt(p * (p - a) * (p - b) * (p - c)))
  ```

## 5. Câu hỏi và bài tập vận dụng nhanh
1. **Câu hỏi:** Cho `x = input("Nhập số: ")`, nếu gõ `5` rồi chạy `print(2 * x)` thì kết quả là gì?
   - **Đáp án:** `55` (vì `x` là xâu `'5'`, phép `2 * '5'` lặp xâu).
2. **Câu hỏi:** Trong các lệnh `int("12 + 45")`, `float(123.56)`, `float("123,5.5")`, lệnh nào báo lỗi?
   - **Đáp án:** `int("12 + 45")` và `float("123,5.5")` báo lỗi `ValueError`.
3. **Câu hỏi:** Xác định kiểu và giá trị của biểu thức `32 > 45`.
   - **Đáp án:** Kiểu `bool`, giá trị `False`.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Quên ép kiểu khi nhập số bằng `input()` dẫn đến `TypeError` hoặc cộng nối xâu sai:**
   - *Nguyên nhân:* Viết `a = input(); b = input(); print(a + b)`, khiến `3 + 7` ra `37`; hoặc trộn biến chưa ép kiểu với biến số gây lỗi `TypeError: unsupported operand type(s) for +: 'int' and 'str'`.
   - *Khắc phục:* Luôn bọc `int(input(...))` khi cần số nguyên và `float(input(...))` khi cần số thực.
2. **Lỗi `ValueError: invalid literal for int() with base 10` khi dùng `int("12.5")` hoặc nhập số thập phân vào `int(input())`:**
   - *Nguyên nhân:* Hàm `int()` chỉ chuyển được xâu chứa toàn chữ số nguyên (có thể có dấu `+/-`), không chuyển trực tiếp được xâu có dấu chấm `.` hay dấu phẩy `,` hoặc biểu thức `"12+45"`.
   - *Khắc phục:* Nếu dữ liệu đầu vào có thể là số thập phân, dùng `float(input())` (hoặc `int(float(s))` nếu muốn lấy phần nguyên từ xâu số thực); khi nhập số thực trên Python luôn dùng dấu chấm `.` thay vì dấu phẩy `,`.
3. **Nhầm lẫn cú pháp `:=` hoặc viết thiếu ngoặc khi chuyển đổi kiểu lồng nhau:**
   - *Nguyên nhân:* Viết `x := input()` (sai cú pháp gán thông thường) hoặc quên đóng ngoặc thứ hai trong `int(input("Nhập x: ")`.
   - *Khắc phục:* Kiểm tra đủ cặp ngoặc đóng mở `(...)` và dùng đúng toán tử gán `=`.

## 7. Tổng kết và liên hệ thực tiễn
- Bài 18 hoàn chỉnh chu trình cơ bản của một chương trình máy tính: **Vào (`input()`) -> Xử lí (ép kiểu + tính toán) -> Ra (`print()`)**.
- Việc kiểm soát kiểu dữ liệu (`int`, `float`, `str`, `bool`) là kỹ năng sống còn khi xây dựng mọi ứng dụng tương tác với người dùng như phần mềm tính điểm, quản lý chi tiêu hay giải toán kỹ thuật.
