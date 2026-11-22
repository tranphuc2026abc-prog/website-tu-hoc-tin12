# BÀI 29: NHẬN BIẾT LỖI CHƯƠNG TRÌNH

## 1. Thông tin chung & Mục tiêu bài học (GDPT 2018)
- **Môn học:** Tin học 10 – Bộ sách Kết nối tri thức với cuộc sống (Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính).
- **Mục tiêu:**
  - Phân biệt được 3 loại lỗi chương trình trong Python: **Lỗi cú pháp**, **Lỗi ngoại lệ** và **Lỗi logic (ngữ nghĩa)**.
  - Nhận biết được các mã lỗi ngoại lệ phổ biến (`ZeroDivisionError`, `IndexError`, `NameError`, `TypeError`, `ValueError`, `IndentationError`, `SyntaxError`).
  - Xác định được nguyên nhân gây lỗi từ thông báo của Python và đề xuất cách khắc phục phù hợp.

## 2. Tóm tắt kiến thức trọng tâm
- **Lỗi cú pháp (Syntax Error):** Xảy ra khi viết câu lệnh sai quy tắc ngữ pháp của Python (thiếu dấu `:`, thiếu ngoặc, sai chính tả từ khóa, thụt lề sai). Chương trình **không thể bắt đầu chạy** (hoặc dừng ngay lập tức) và báo `SyntaxError` / `IndentationError`.
- **Lỗi ngoại lệ (Exception / Runtime Error):** Câu lệnh đúng cú pháp nhưng không thể thực thi được khi chương trình đang chạy (ví dụ chia cho 0, truy cập chỉ số vượt giới hạn, ép kiểu sai giá trị). Chương trình dừng đột ngột tại dòng lỗi và in ra **mã lỗi ngoại lệ**.
- **Lỗi logic (Lỗi ngữ nghĩa):** Chương trình chạy từ đầu đến cuối **không báo lỗi**, nhưng kết quả đầu ra **sai** so với yêu cầu bài toán do thuật toán hoặc công thức cài đặt chưa đúng. Đây là loại lỗi khó phát hiện nhất.

## 3. Cú pháp, Lệnh & Bảng tra cứu nhanh

| Mã lỗi ngoại lệ | Nguyên nhân phát sinh | Ví dụ gây lỗi |
| :--- | :--- | :--- |
| `SyntaxError` | Viết sai cú pháp câu lệnh Python. | `for i in range(5) print(i)` (thiếu `:`) |
| `IndentationError` | Thụt lề khối lệnh không thẳng hàng hoặc sai vị trí. | Không thụt lề dòng lệnh dưới `if x > 0:` |
| `ZeroDivisionError` | Thực hiện phép chia (`/`, `//`, `%`) cho `0`. | `10 / 0`, `sum(A) / len(A)` khi `A = []` |
| `IndexError` | Truy cập phần tử danh sách/xâu với chỉ số vượt quá giới hạn. | `a = [1, 2]; print(a[5])` |
| `NameError` | Sử dụng tên biến hoặc tên hàm chưa được định nghĩa. | `prin(x)`, dùng biến `m` chưa gán giá trị |
| `TypeError` | Phép toán hoặc hàm áp dụng cho kiểu dữ liệu không tương thích, hoặc sai số lượng đối số. | `"12" + 12`, `A[1.5]`, `"10" * 3.5` |
| `ValueError` | Kiểu dữ liệu đúng nhưng giá trị không hợp lệ cho phép chuyển đổi/hàm. | `int("abc")`, `int("1.55")`, `float("2 + 3")` |

## 4. Ví dụ minh họa có giải thích chi tiết
```python
# Ví dụ 1: Lỗi logic (không báo lỗi nhưng sai kết quả)
# Yêu cầu: Tính tích các số 1 * 2 * 3
s = 1
for i in range(3):   # range(3) gồm 0, 1, 2 -> nhân với 0!
    s = s * i
print(s)             # In ra 0 thay vì 6

# Ví dụ 2: Lỗi ngoại lệ ValueError khi nhập liệu
n = int(input("Nhập số nguyên: ")) # Nếu người dùng nhập "abc" -> ValueError
```

## 5. Hướng dẫn Thực hành – Luyện tập – Vận dụng (SGK)
- **Luyện tập 1 (Nhận diện mã lỗi):**
  - Truy cập chỉ số không hợp lệ hoặc ngoài biên: `IndexError` / `TypeError` (nếu chỉ số là số thực như `A[1.5]`).
  - Cộng chuỗi với số: `TypeError`.
- **Luyện tập 2 (`gttb = sum(A) / len(A)`):**
  - Có thể sinh lỗi `ZeroDivisionError` khi danh sách `A` rỗng (`len(A) == 0`).
  - Cách sửa: kiểm tra `if len(A) > 0:` trước khi tính.
- **Vận dụng 1 (Tìm ước thực sự của `n`):**
  - Cần ép kiểu `n = int(input(...))` để tránh `TypeError` khi dùng `range(1, n)`.
  - Phải dùng `range(1, n)` thay vì `range(1, n + 1)` để không tính cả `n` (tránh lỗi logic).

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân & cách khắc phục
1. **Nhầm lẫn giữa `TypeError` và `ValueError`:**
   - *Nguyên nhân:* Đều liên quan đến dữ liệu truyền vào hàm/phép toán.
   - *Phân biệt & khắc phục:* `TypeError` là **sai kiểu** (ví dụ `A[1.5]` dùng `float` làm chỉ số, hoặc `"10" + 5`), còn `ValueError` là **đúng kiểu nhưng sai giá trị** (ví dụ `int("abc")` truyền đúng kiểu `str` nhưng nội dung không phải số nguyên).
2. **Bỏ sót trường hợp biên gây `ZeroDivisionError` hoặc `IndexError`:**
   - *Nguyên nhân:* Giả định danh sách đầu vào luôn có phần tử (`len(A) > 0`) hoặc người dùng luôn nhập số khác `0`.
   - *Khắc phục:* Luôn kiểm tra điều kiện biên bằng `if len(A) > 0:` hoặc `if b != 0:` trước khi thực hiện phép chia hoặc truy cập `A[0]`.
3. **Lỗi logic do cận trên của `range(a, b)` không bao gồm `b`:**
   - *Nguyên nhân:* Quên rằng `range(1, n)` chỉ chạy đến `n - 1`.
   - *Khắc phục:* Đọc kỹ đề bài (có lấy đầu mút `n` hay không) và chạy thử với bộ test nhỏ để kiểm chứng kết quả.

## 7. Câu hỏi ôn tập & Tự kiểm tra nhanh
1. Lệnh `int("1.5")` sinh ra mã lỗi ngoại lệ nào? *(Đáp án: `ValueError`)*
2. Khi chương trình chạy ra kết quả sai nhưng không báo lỗi gì, đó là loại lỗi nào? *(Đáp án: Lỗi logic)*
3. Lệnh `lst = [1, 2]; print(lst[2])` sinh ra mã lỗi nào? *(Đáp án: `IndexError`)*
