# BÀI 20: CÂU LỆNH LẶP FOR

## 1. Mục tiêu bài học
- Nhận biết được các bài toán lặp với số lần **biết trước** (xác định trước).
- Hiểu cách hoạt động và cú pháp của câu lệnh lặp `for` kết hợp với hàm `range()`.
- Vận dụng vòng lặp `for` để giải các bài toán tính tổng, tính tích, đếm theo điều kiện và duyệt dãy số.

## 2. Kiến thức trọng tâm

### 2.1. Câu lệnh lặp `for`
- `for` là câu lệnh lặp với **số lần biết trước**.
- Cú pháp:
```python
for <biến chạy> in range(start, stop):
    <khối lệnh>
```
  Khi `start = 0`, có thể viết gọn: `for <biến chạy> in range(stop):`.

### 2.2. Hàm `range()`
- `range(stop)`: sinh dãy số nguyên `0, 1, 2, ..., stop - 1` (gồm `stop` số nếu `stop > 0`).
- `range(start, stop)`: sinh dãy số nguyên liên tiếp từ `start` đến `stop - 1`.
- `range(start, stop, step)`: sinh dãy số bắt đầu từ `start`, mỗi bước tăng/giảm `step`, dừng **trước** `stop` (nếu `step < 0` có thể đếm lùi).

## 3. Ví dụ minh họa chuẩn Python

```python
# Ví dụ 1: Tính tổng các số chia hết cho 3 và 5 từ 1 đến 100
t = 0
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        t = t + i
print("Tổng =", t)  # Kết quả: 315
```

```python
# Ví dụ 2: Đếm ngược từ 5 về 1
for i in range(5, 0, -1):
    print(str(i) * 5)
```

## 4. Bài tập vận dụng & Hướng dẫn giải
- **Bài 1 (Tính giai thừa)**: Tính `1 * 2 * ... * n`.
  - *Giải*: Khởi tạo `S = 1` (không phải 0), chạy `for k in range(1, n + 1): S = S * k`.
- **Bài 2 (Tổng phân số)**: Tính `S = 1 + 1/2 + ... + 1/n`.
  - *Giải*: Khởi tạo `S = 0`, chạy `for k in range(1, n + 1): S = S + 1/k` (bắt đầu từ 1 để tránh chia cho 0).

## 5. Điểm nhấn sư phạm & Mở rộng
- Cần khắc sâu quy tắc **cận trên không bao gồm `stop`** (`range(1, n)` chỉ chạy đến `n - 1`), đây là điểm học sinh lớp 10 hay nhầm nhất khi chuyển từ phát biểu toán học "từ 1 đến n".
- Mở rộng: Ngoài `range()`, `for` còn duyệt trực tiếp qua các phần tử của xâu kí tự và danh sách (sẽ học ở Bài 22–24).

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi thiếu 1 ở cận trên `range(1, n)` khi cần duyệt đến `n`**
   - *Nguyên nhân*: Tưởng `range(1, n)` lấy cả giá trị `n`.
   - *Khắc phục*: Luôn nhớ công thức `[start, stop)` — muốn lấy đến `n` phải viết `range(1, n + 1)`.
2. **Khởi tạo biến tích bằng `0` khi tính tích/giai thừa (`S = 0`)**
   - *Nguyên nhân*: Quen tay khởi tạo `S = 0` như bài toán tính tổng.
   - *Khắc phục*: Với phép cộng/đếm khởi tạo bằng `0`; với phép nhân/tích luôn khởi tạo bằng `1`.
3. **Đặt lệnh `print()` sai mức thụt lề (trong vòng lặp thay vì ngoài vòng lặp)**
   - *Nguyên nhân*: Muốn in tổng cuối cùng nhưng lại thụt lề `print(S)` ngang hàng thân `for`, khiến mỗi lần lặp đều in ra kết quả trung gian.
   - *Khắc phục*: Chỉ giữ trong khối `for` các lệnh cần lặp; lệnh in kết quả tổng hợp phải viết thẳng hàng với chữ `for`.
4. **Lỗi chia cho 0 (`ZeroDivisionError`) khi dùng `range(n)`**
   - *Nguyên nhân*: Viết `for k in range(n): S = S + 1/k`, khiến lần lặp đầu `k = 0`.
   - *Khắc phục*: Khi `k` làm mẫu số hoặc ước số, phải dùng `range(1, n + 1)`.

## 7. Tóm tắt nhanh (Ghi nhớ)
- `for` dùng khi biết trước số lần lặp; `range(start, stop)` chạy từ `start` đến `stop - 1`.
- Đếm ngược dùng bước nhảy âm: `range(5, 0, -1)` -> `5, 4, 3, 2, 1`.
- Kiểm tra kĩ giá trị khởi tạo (`0` cho tổng/đếm, `1` cho tích) và vị trí thụt lề của `print()`.
