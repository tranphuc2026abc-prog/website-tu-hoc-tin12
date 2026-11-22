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
