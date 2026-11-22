# BÀI 17: BIẾN VÀ LỆNH GÁN

## 1. Mục tiêu bài học
- **Kiến thức:** Hiểu khái niệm biến, từ khóa và quy tắc đặt tên biến trong Python; nắm vững cú pháp, ý nghĩa của lệnh gán và gán đồng thời; biết các phép toán trên kiểu số và kiểu xâu kí tự.
- **Năng lực:** Đặt tên biến đúng quy tắc; chuyển đổi được biểu thức toán học sang biểu thức Python; viết được chương trình sử dụng biến và lệnh gán để giải các bài toán thực tế.
- **Phẩm chất:** Cẩn trọng trong việc đặt tên định danh rõ nghĩa và tuân thủ thứ tự ưu tiên phép toán.

## 2. Kiến thức trọng tâm
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

## 3. Thuật ngữ, khái niệm và cú pháp/lệnh quan trọng
| Khái niệm / Phép toán | Cú pháp / Kí hiệu | Ví dụ & Kết quả |
|---|---|---|
| Lệnh gán đơn | `<biến> = <biểu thức>` | `x = 10` |
| Gán đồng thời | `a, b = bt1, bt2` | `x, y = y, x` (hoán đổi `x`, `y`) |
| Chia lấy nguyên | `//` | `15 // 4` -> `3` |
| Chia lấy dư | `%` | `15 % 4` -> `3` |
| Lũy thừa | `**` | `2 ** 3` -> `8` |
| Nối / Lặp xâu | `+` / `*` | `"10" + "0"*3` -> `"10000"` |

## 4. Hướng dẫn thực hành và ví dụ minh họa
- **Ví dụ 1: Tính tiền mua thiệp:**
  ```python
  dongia = 8500
  soluong = 15
  sotien = dongia * soluong
  print("Số tiền cần thanh toán:", sotien, "đồng")
  ```
- **Ví dụ 2: Đổi `ss` giây sang ngày, giờ, phút, giây:**
  ```python
  ss = 684500
  ngay = ss // 86400
  gio = (ss - ngay * 86400) // 3600
  phut = (ss - ngay * 86400 - gio * 3600) // 60
  giay = ss - ngay * 86400 - gio * 3600 - phut * 60
  print(ss, "giây =", ngay, "ngày", gio, "giờ", phut, "phút", giay, "giây")
  ```

## 5. Câu hỏi và bài tập vận dụng nhanh
1. **Câu hỏi:** Trong các tên sau: `_name`, `123abc`, `My country`, `m123&b`, `xyzABC`, tên nào hợp lệ?
   - **Đáp án:** `_name` và `xyzABC`. (`123abc` bắt đầu bằng số, `My country` có dấu cách, `m123&b` có kí tự `&`).
2. **Câu hỏi:** Kết quả của `(12 - 10//2)**2 - 1` là bao nhiêu?
   - **Đáp án:** `48`.
3. **Câu hỏi:** Viết biểu thức `(3.2 + 2x - 1) : (4 - x)` sang Python.
   - **Đáp án:** `(3*2 + 2*x - 1) / (4 - x)`.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi `SyntaxError` khi viết biểu thức ở vế trái lệnh gán hoặc đặt tên biến bắt đầu bằng số / trùng từ khóa:**
   - *Nguyên nhân:* Viết `a + b = 100`, `123a = x + 1`, hoặc `global = 5`.
   - *Khắc phục:* Đảm bảo vế trái dấu `=` luôn là một tên biến hợp lệ bắt đầu bằng chữ cái hoặc `_`, không chứa khoảng trắng hay kí tự đặc biệt và không trùng từ khóa.
2. **Hoán đổi giá trị hai biến sai do viết `x = y; y = x`:**
   - *Nguyên nhân:* Lệnh `x = y` làm mất giá trị cũ của `x` trước khi kịp gán sang `y`, khiến cả hai biến cùng mang giá trị của `y`.
   - *Khắc phục:* Dùng biến trung gian (`z = x; x = y; y = z`) hoặc dùng lệnh gán đồng thời đặc trưng của Python (`x, y = y, x`).
3. **Sai kết quả khi chuyển biểu thức phân số từ toán học sang Python (thiếu ngoặc đơn):**
   - *Nguyên nhân:* Viết `2*x+1/x+2` thay vì `(2*x+1)/(x+2)`, khiến phép chia `/` thực hiện trước phép cộng `+`.
   - *Khắc phục:* Luôn bọc cả tử số và mẫu số phức hợp trong cặp ngoặc tròn `(...)`.

## 7. Tổng kết và liên hệ thực tiễn
- Biến và lệnh gán là nền tảng để lưu trữ, cập nhật trạng thái dữ liệu trong mọi chương trình máy tính.
- Kỹ năng chuyển đổi công thức toán học sang biểu thức Python và sử dụng phép chia nguyên/chia dư (`//`, `%`) được ứng dụng rộng rãi trong tính toán hóa đơn, quy đổi đơn vị thời gian, tiền tệ và xử lý dữ liệu chuỗi.
