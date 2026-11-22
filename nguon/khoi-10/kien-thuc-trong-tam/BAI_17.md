### 2.1. Biến, lệnh gán và quy tắc đặt tên
- **Biến:** Là tên (định danh) của một vùng nhớ dùng để lưu trữ giá trị (dữ liệu) và giá trị đó có thể thay đổi khi thực hiện chương trình.
- **Lệnh gán:** `<biến> = <biểu thức>`. Biến trong Python được tạo ra và xác định kiểu dữ liệu ngay tại thời điểm gán giá trị (không cần khai báo kiểu trước).
- **Gán đồng thời nhiều biến:** `<biến1>, <biến2> = <bt1>, <bt2>` (Python tính hết vế phải rồi mới gán vào vế trái, ví dụ `x, y = y, x` để hoán đổi giá trị).
- **Quy tắc đặt tên biến:**
  1. Chỉ gồm các chữ cái tiếng Anh (`A-Z`, `a-z`), chữ số (`0-9`) và kí tự gạch dưới `_`.
  2. **Không** được bắt đầu bằng chữ số.
  3. **Phân biệt** chữ hoa và chữ thường (`Tong` khác `tong`).
  4. **Không** được trùng với **từ khóa** của Python.

### 2.2. Các phép toán trên một số kiểu dữ liệu cơ bản
- **Kiểu số (`int`, `float`):** `+` (cộng), `-` (trừ), `*` (nhân), `/` (chia thực), `//` (chia lấy phần nguyên), `%` (chia lấy phần dư), `**` (lũy thừa).
  - Thứ tự ưu tiên: Ngoặc tròn `()` -> Lũy thừa `**` -> `*`, `/`, `//`, `%` -> `+`, `-`.
- **Kiểu xâu kí tự (`str`):** `+` (nối hai xâu), `*` (lặp xâu `n` lần, ví dụ `"Tin"*3` cho `"TinTinTin"`).

### 2.3. Từ khóa (`Keywords`)
- **Từ khóa** là các từ đặc biệt tham gia vào cấu trúc ngôn ngữ lập trình (`if`, `else`, `for`, `while`, `def`, `return`, `global`, `nonlocal`, `True`, `False`, `None`, `and`, `or`, `not`, `in`, `with`...).
- Không được đặt tên biến trùng từ khóa. Lưu ý: `true` viết thường không phải từ khóa, nhưng `True` viết hoa chữ đầu là từ khóa.
