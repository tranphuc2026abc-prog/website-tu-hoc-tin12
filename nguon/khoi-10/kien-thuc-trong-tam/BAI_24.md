# BÀI 24: XÂU KÍ TỰ

## 1. Mục tiêu bài học
- Hiểu được khái niệm xâu kí tự (`str`) trong Python là một dãy các kí tự Unicode có thứ tự và **bất biến (immutable)**.
- Biết cách tính độ dài xâu (`len()`), truy cập kí tự qua chỉ số, ghép xâu (`+`) và kiểm tra xâu con (`in`).
- Biết duyệt từng kí tự của xâu bằng vòng lặp `for` (theo chỉ số hoặc trực tiếp theo kí tự).

## 2. Kiến thức trọng tâm

### 2.1. Xâu là một dãy các kí tự
- Xâu kí tự được đặt trong cặp dấu nháy đơn `'...'` hoặc nháy kép `"..."`. Xâu rỗng là `""` có độ dài `0`.
- Python **không có kiểu kí tự riêng**; một kí tự đơn lẻ chính là một xâu có độ dài `1`.
- **Chỉ số và độ dài**: `len(s)` trả về số kí tự (tính cả khoảng trắng và kí tự đặc biệt). Chỉ số chạy từ `0` đến `len(s) - 1`.
- **Tính bất biến**: Không thể sửa đổi trực tiếp từng kí tự trong xâu (lệnh `s[0] = 'A'` sẽ báo lỗi). Muốn thay đổi phải tạo xâu mới (bằng phép ghép `+` hoặc cắt xâu `s[start:stop]`).

### 2.2. Duyệt xâu và kiểm tra xâu con
- **Cách 1 (duyệt theo chỉ số)**: `for i in range(len(s)):` -> truy cập `s[i]`.
- **Cách 2 (duyệt trực tiếp theo kí tự)**: `for ch in s:` -> `ch` nhận lần lượt từng kí tự của `s`.
- **Toán tử `in`**: `s1 in s2` trả về `True` nếu `s1` là xâu con liên tiếp nằm trong `s2`, ngược lại `False`.

## 3. Ví dụ minh họa chuẩn Python

```python
# Ví dụ 1: Lọc các chữ số chẵn trong xâu
s1 = "3986443"
s2 = ""
for ch in s1:
    if int(ch) % 2 == 0:
        s2 = s2 + ch
print(s2)  # Kết quả: 8644
```

```python
# Ví dụ 2: Chèn xâu s1 vào chính giữa xâu s2
s1 = "PY"
s2 = "1234"
mid = len(s2) // 2
kq = s2[:mid] + s1 + s2[mid:]
print(kq)  # Kết quả: 12PY34
```

## 4. Bài tập vận dụng & Hướng dẫn giải
- **Bài 1**: Kiểm tra xâu `S` có chứa chữ số hay không.
  - *Giải*: Duyệt `for ch in S:`, nếu `'0' <= ch <= '9'` (hoặc `ch.isdigit()`) thì đánh dấu `True` và `break`.
- **Bài 2**: Đảo ngược xâu `S`.
  - *Giải*: Khởi tạo `dao = ""`, lặp `for ch in S: dao = ch + dao`.

## 5. Lưu ý và mở rộng
- So sánh trực tiếp **Xâu (`str`)** và **Danh sách (`list`)**:
  - Giống nhau: đều là dãy có thứ tự, đánh chỉ số từ `0`, dùng được `len()`, `in`, `for`, lát cắt `[a:b]`.
  - Khác nhau: `list` là khả biến (sửa được phần tử, có `append`, `remove`, `del`), còn `str` là **bất biến** và chỉ chứa kí tự.

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi thay đổi trực tiếp kí tự của xâu (`TypeError: 'str' object does not support item assignment`)**
   - *Nguyên nhân*: Áp dụng thói quen từ kiểu `list` viết `s[0] = 'A'` hoặc `del s[0]`.
   - *Khắc phục*: Vì xâu bất biến, phải tạo xâu mới bằng lát cắt và phép nối: `s = 'A' + s[1:]`.
2. **Gọi phương thức của danh sách (`s.append(...)`, `s.remove(...)`) trên xâu**
   - *Nguyên nhân*: Nhầm xâu là danh sách nên dùng `s.append(ch)` gây `AttributeError`.
   - *Khắc phục*: Dùng phép cộng xâu `s = s + ch` để nối thêm kí tự vào xâu.
3. **Lỗi cộng xâu với số (`TypeError: can only concatenate str (not "int") to str`)**
   - *Nguyên nhân*: Viết `"Điểm: " + 10` khi quên ép kiểu số sang xâu.
   - *Khắc phục*: Chuyển số sang xâu bằng hàm `str(10)` trước khi nối: `"Điểm: " + str(10)`.
4. **Quên tính khoảng trắng khi đếm độ dài hoặc xác định chỉ số xâu**
   - *Nguyên nhân*: Chỉ đếm chữ cái, bỏ qua dấu cách `' '` khiến tính sai `len(s)` và vị trí `s[i]`.
   - *Khắc phục*: Nhớ rằng khoảng trắng cũng là một kí tự hợp lệ chiếm 1 vị trí trong xâu.

## 7. Tóm tắt nhanh (Ghi nhớ)
- Xâu nằm trong `'...'` hoặc `"..."`, đánh chỉ số từ `0` đến `len(s) - 1`.
- Xâu là **bất biến**: không dùng `s[i] = ...` hay `append()`; ghép xâu dùng `+`.
- Kiểm tra xâu con dùng `s1 in s2`; duyệt xâu dùng `for ch in s:` hoặc `for i in range(len(s)):`.
