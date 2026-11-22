# Bài 32: Ôn tập lập trình Python

## 1. Mục tiêu bài học
- Hệ thống hóa toàn bộ kiến thức lập trình Python lớp 10: biến, kiểu dữ liệu cơ bản, câu lệnh vào/ra, cấu trúc điều khiển (tuần tự, rẽ nhánh, lặp), kiểu dữ liệu danh sách (`list`), xâu (`str`) và hàm (`def`).
- Vận dụng tổng hợp để giải các bài toán thực tế: xử lí ngày tháng năm, sắp xếp danh sách tiếng Việt, và tối ưu hóa thuật toán số học.
- Nhận diện và tránh được các lỗi cú pháp, lỗi logic và lỗi hiệu năng thường gặp khi lập trình Python.

## 2. Khái niệm & Kiến thức trọng tâm
- **Đặc điểm Python:** Ngôn ngữ lập trình bậc cao, thông dịch, xác định khối lệnh bằng **thụt lề** (indentation), chú thích bằng `#`.
- **Quy tắc đặt tên biến:** Chỉ gồm chữ cái, chữ số và dấu gạch dưới `_`; không bắt đầu bằng chữ số; phân biệt hoa/thường; không trùng từ khóa (`if`, `for`, `def`, `while`, `return`...).
- **Các kiểu dữ liệu chuẩn thường dùng:**
  - `int` (số nguyên), `float` (số thực), `bool` (`True`/`False`), `str` (xâu kí tự - bất biến), `list` (danh sách - có thể thay đổi phần tử).
- **Cấu trúc điều khiển:**
  - **Tuần tự:** Thực hiện từ trên xuống dưới.
  - **Rẽ nhánh:** `if <đk>: ... elif <đk>: ... else: ...`.
  - **Lặp:** `for` (biết trước số lần lặp hoặc duyệt dãy/danh sách/xâu) và `while` (lặp theo điều kiện logic).

## 3. Cú pháp, Quy trình & Thuật toán cốt lõi
- **Thao tác với `list`:** `len(a)`, `a.append(x)`, `del a[i:j]`, `a.sort()`, truy cập chỉ số âm `a[-1]` (phần tử cuối).
- **Thao tác với `str`:** `s.strip()` (xóa khoảng trắng đầu/cuối), `s.split()` (tách thành `list`), `" ".join(ds)` (nối `list` thành xâu), `s.replace(old, new)`, `s.upper()`, `s.lower()`.
- **Tối ưu hóa thuật toán kiểm tra số nguyên tố:**
  - Nếu $n$ là hợp số thì $n$ có ít nhất một ước nguyên tố $\le \sqrt{n}$. Do đó chỉ cần duyệt ước từ $2$ đến $\lfloor\sqrt{n}\rfloor$, giúp giảm thời gian chạy từ $O(n)$ xuống $O(\sqrt{n})$.
- **Sắp xếp tên tiếng Việt:** Tách họ, đệm, tên bằng `split()` rồi tạo khóa sắp xếp ưu tiên `(tên, họ, đệm)` kết hợp bảng thứ tự chữ cái tiếng Việt có dấu.

## 4. Ví dụ minh họa
```python
# Ví dụ: Kiểm tra số nguyên tố tối ưu O(sqrt(n)) và tách sắp xếp tên học sinh
import math

def la_nguyen_to(n):
    if n < 2:
        return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0:
            return False
    return True

def khoa_sap_xep_ten(ho_ten):
    parts = ho_ten.strip().split()
    ten = parts[-1]
    ho = parts[0] if len(parts) > 1 else ""
    dem = " ".join(parts[1:-1])
    return (ten, ho, dem)

ds = ["Nguyễn Văn An", "Trần Thị Bình", "Lê Hoàng An"]
ds.sort(key=khoa_sap_xep_ten)
print("Danh sách đã sắp xếp:", ds)
print("97 là số nguyên tố?", la_nguyen_to(97))
```

## 5. Ứng dụng thực tế & Mở rộng
- Xử lí dữ liệu ngày tháng (chuyển đổi giữa số thứ tự ngày trong bảng tính điện tử và định dạng `ngày-tháng-năm`) giúp hiểu cách các phần mềm như Excel/Google Sheets lưu trữ thời gian.
- Kỹ năng kết hợp `list`, `str` và `def` là nền tảng trực tiếp để học tiếp các cấu trúc dữ liệu nâng cao ở lớp 11 và các dự án xử lí dữ liệu, tự động hóa bằng Python.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Cố gắng sửa trực tiếp kí tự trong xâu `s[0] = 'A'` (`TypeError`):**
   - *Nguyên nhân:* Kiểu `str` trong Python là kiểu dữ liệu **bất biến (immutable)**, không cho phép gán lại từng kí tự như `list`.
   - *Khắc phục:* Tạo xâu mới bằng phép ghép lát cắt (`'A' + s[1:]`) hoặc dùng phương thức `replace()`, `upper()`.
2. **Nhầm lẫn cận trên của `range(start, stop)` và lát cắt `a[start:stop]`:**
   - *Nguyên nhân:* Nghĩ rằng `range(3, 10)` có chứa số `10` hoặc `del a[1:2]` xóa cả phần tử chỉ số `1` và `2`.
   - *Khắc phục:* Ghi nhớ quy tắc **nửa khoảng `[start, stop)`** (bao gồm `start`, không bao gồm `stop`). Để xóa phần tử ở chỉ số `1` và `2`, phải viết `del a[1:3]`.
3. **Thụt lề hỗn hợp Tab và Space hoặc sai khối lệnh (`IndentationError` / lỗi logic):**
   - *Nguyên nhân:* Đặt câu lệnh `return` vào bên trong thân vòng lặp `for` khiến hàm thoát ngay ở lần lặp đầu tiên, hoặc dùng lẫn Tab và dấu cách.
   - *Khắc phục:* Thống nhất dùng 4 dấu cách (Space) cho mỗi mức thụt lề và kiểm tra vị trí của `return` nằm ngoài vòng lặp khi cần tính tổng/duyệt hết dãy.

## 7. Câu hỏi tự kiểm tra & Ghi nhớ nhanh
- **Ghi nhớ nhanh:** *`list` sửa được (mutable), `str` không sửa trực tiếp được (immutable); `range(a, b)` dừng ở `b - 1`.*
- **Tự kiểm tra:**
  1. Lệnh `print(list(range(3, 10)))` in ra những số nào?
  2. Vì sao thuật toán kiểm tra số nguyên tố chỉ cần duyệt đến `math.isqrt(n)` thay vì `n - 1`?
