# BÀI 26: HÀM TRONG PYTHON

## 1. Mục tiêu bài học
- Nhận biết được các hàm thiết kế sẵn phổ biến của Python và phân loại hàm có/không có giá trị trả lại.
- Hiểu và viết được hàm tự định nghĩa bằng từ khóa `def` và lệnh `return`.
- Vận dụng hàm để chia nhỏ bài toán, tái sử dụng mã nguồn và làm chương trình rõ ràng, dễ bảo trì.

## 2. Tóm tắt kiến thức trọng tâm
- **Khái niệm hàm:** Là một khối câu lệnh được đặt tên để thực hiện một nhiệm vụ cụ thể. Khi cần dùng chỉ việc gọi tên hàm kèm cặp ngoặc tròn `()`.
- **Phân loại hàm theo giá trị trả lại:**
  - *Hàm có giá trị trả lại:* Trả về kết quả tính toán cho nơi gọi thông qua `return <giá_trị>` (ví dụ hàm sẵn: `input()`, `int()`, `float()`, `len()`, `str()`, `list()`).
  - *Hàm không có giá trị trả lại:* Chỉ thực hiện hành động (như in ra màn hình), không có `return` hoặc chỉ viết `return` (ví dụ hàm sẵn: `print()`). Thực chất Python trả về `None`.
- **Quy tắc định nghĩa hàm tự tạo:**
  - Bắt đầu bằng từ khóa `def`, tiếp theo là `<tên_hàm>(<tham_số>)` và kết thúc dòng đầu bằng dấu hai chấm `:`.
  - Toàn bộ phần thân hàm phải viết **thụt lề thẳng hàng** vào trong so với dòng `def`.
  - Một hàm có thể có nhiều lệnh `return`; ngay khi gặp `return`, hàm dừng thực thi và trả kết quả về ngay lập tức.

## 3. Cú pháp, Lệnh & Bảng tra cứu nhanh

| Thành phần / Hàm | Cú pháp | Ý nghĩa |
| :--- | :--- | :--- |
| Định nghĩa hàm có trả về | `def ten_ham(tham_so):`<br>`    <khối lệnh>`<br>`    return <giá trị>` | Khai báo hàm và trả kết quả về cho lời gọi hàm. |
| Định nghĩa hàm không trả về | `def ten_ham(tham_so):`<br>`    <khối lệnh>` | Khai báo hàm chỉ thực hiện thao tác (như hiển thị). |
| Lời gọi hàm | `ten_ham(doi_so)` | Thực thi các lệnh trong thân hàm với đối số tương ứng. |
| `int(x)` / `float(x)` | `int("10")` / `float("3.5")` | Chuyển `x` sang số nguyên / số thực. |
| `str(x)` / `bool(x)` | `str(10)` / `bool(0)` | Chuyển `x` sang xâu kí tự / giá trị logic (`True`/`False`). |
| `len(x)` / `list(x)` | `len("abc")` / `list(range(3))` | Trả về độ dài đối tượng / chuyển sang danh sách. |

## 4. Ví dụ minh họa có giải thích chi tiết
```python
def prime(n):
    if n < 2:
        return False
    for k in range(2, n):
        if n % k == 0:
            return False
    return True

print(prime(7))   # True
print(prime(9))   # False
```
**Giải thích:** Hàm `prime(n)` dùng nhiều lệnh `return` để thoát sớm: nếu `n < 2` hoặc tìm thấy ước `k` thì trả về `False` ngay mà không cần lặp tiếp, giúp tối ưu thời gian chạy.

## 5. Hướng dẫn Thực hành – Luyện tập – Vận dụng (SGK)
- **Luyện tập 1 (In các ước nguyên tố của `n`):**
  ```python
  def in_uoc_nt(n):
      for k in range(2, n + 1):
          if n % k == 0 and prime(k):
              print(k, end=" ")
  ```
- **Luyện tập 2 & Vận dụng 2 (Đếm chữ số và chữ cái tiếng Anh trong xâu `s`):**
  ```python
  def numbers(s):
      t = 0
      for ch in s:
          if '0' <= ch <= '9':
              t += 1
      return t

  def characters(s):
      t = 0
      for ch in s:
          if 'a' <= ch <= 'z' or 'A' <= ch <= 'Z':
              t += 1
      return t
  ```

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân & cách khắc phục
1. **Thiếu dấu hai chấm `:` ở cuối dòng `def` (`SyntaxError`):**
   - *Nguyên nhân:* Quên dấu `:` sau cặp ngoặc tròn của định nghĩa hàm.
   - *Khắc phục:* Luôn kiểm tra cú pháp dòng đầu là `def ten_ham(...):`.
2. **Thụt lề thân hàm không đồng nhất (`IndentationError`):**
   - *Nguyên nhân:* Các dòng trong thân hàm thụt vào số dấu cách khác nhau hoặc trộn lẫn Tab và Space.
   - *Khắc phục:* Thống nhất dùng 4 dấu cách cho mỗi cấp thụt lề.
3. **Nhầm lẫn giữa `print()` và `return` trong hàm:**
   - *Nguyên nhân:* Dùng `print(kq)` bên trong hàm thay vì `return kq`, khiến khi gọi `x = ham()` thì `x` nhận giá trị `None` và không tính toán tiếp được.
   - *Khắc phục:* Khi hàm cần cung cấp kết quả cho biểu thức khác, bắt buộc dùng `return`.
4. **Đặt lệnh sau `return` và kì vọng nó vẫn chạy:**
   - *Nguyên nhân:* Chưa nắm vững cơ chế thoát hàm ngay lập tức của `return`.
   - *Khắc phục:* Đặt mọi câu lệnh xử lí trước lệnh `return` cuối cùng của nhánh thực thi.

## 7. Câu hỏi ôn tập & Tự kiểm tra nhanh
1. Từ khóa nào dùng để định nghĩa hàm trong Python? *(Đáp án: `def`)*
2. Một hàm không có lệnh `return` sẽ trả về giá trị gì khi được gán vào biến? *(Đáp án: `None`)*
3. Viết hàm `la_so_chan(n)` trả về `True` nếu `n` chẵn và `False` nếu `n` lẻ. *(Đáp án: `def la_so_chan(n): return n % 2 == 0`)*
