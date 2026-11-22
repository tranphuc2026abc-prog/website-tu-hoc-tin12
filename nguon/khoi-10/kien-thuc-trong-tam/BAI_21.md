# BÀI 21: CÂU LỆNH LẶP WHILE

## 1. Mục tiêu bài học
- Phân biệt được bài toán lặp **không biết trước số lần** với bài toán lặp biết trước số lần.
- Nắm vững cú pháp và cơ chế kiểm tra điều kiện trước của câu lệnh `while`.
- Biết kết hợp ba cấu trúc lập trình cơ bản (tuần tự, rẽ nhánh, lặp) và phòng tránh lỗi lặp vô hạn.

## 2. Kiến thức trọng tâm

### 2.1. Câu lệnh lặp `while`
- `while` là câu lệnh lặp với **số lần chưa xác định trước**.
- Cú pháp:
```python
while <điều kiện>:
    <khối lệnh>
```
- **Cơ chế hoạt động**:
  1. Kiểm tra `<điều kiện>` (kiểu `bool`).
  2. Nếu `True`: thực hiện `<khối lệnh>`, sau đó quay lại bước 1.
  3. Nếu `False`: kết thúc vòng lặp và chuyển sang lệnh tiếp theo.
- Vì kiểm tra điều kiện **trước**, nếu ngay từ đầu `<điều kiện>` là `False` thì `<khối lệnh>` không được thực hiện lần nào.

### 2.2. Ba cấu trúc lập trình cơ bản
Mọi thuật toán trong ngôn ngữ lập trình bậc cao đều được xây dựng từ 3 cấu trúc: **Tuần tự**, **Rẽ nhánh** (`if`) và **Lặp** (`for`, `while`).

## 3. Ví dụ minh họa chuẩn Python

```python
# Ví dụ 1: Tính tổng 2 + 4 + ... + 100 bằng while
S = 0
k = 2
while k <= 100:
    S = S + k
    k = k + 2
print("Tổng =", S)  # Kết quả: 2550
```

```python
# Ví dụ 2: Tìm ƯCLN của hai số M, N bằng thuật toán Euclid
M = int(input("M = "))
N = int(input("N = "))
while M != N:
    if M > N:
        M = M - N
    else:
        N = N - M
print("ƯCLN =", M)
```

## 4. Bài tập vận dụng & Hướng dẫn giải
- **Bài 1 (Đếm chữ số)**: Đếm số chữ số có nghĩa của số nguyên `n`.
  - *Giải*: Dùng `while n != 0: n = n // 10; k = k + 1` (chia nguyên cho 10 đến khi `n` bằng 0).
- **Bài 2 (Kiểm tra dữ liệu nhập)**: Yêu cầu nhập số dương `n`, nếu `n <= 0` bắt nhập lại.
  - *Giải*: `while n <= 0: n = int(input("Nhập lại n > 0: "))`.

## 5. Lưu ý và mở rộng
- So sánh trực diện: `for` phù hợp khi biết số bước hoặc duyệt tập có sẵn; `while` tối ưu cho điều kiện dừng động (tổng vượt ngưỡng, nhập liệu hợp lệ, thuật toán Euclid).
- Giới thiệu thêm `break` (thoát vòng lặp ngay) và `continue` (bỏ qua phần còn lại của lần lặp hiện tại).

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi vòng lặp vô hạn (Infinite Loop)**
   - *Nguyên nhân*: Quên câu lệnh cập nhật biến điều kiện trong thân `while` (ví dụ quên `k = k + 1`) hoặc cập nhật sai chiều (ví dụ `k = k - 1` trong khi điều kiện là `k < 100`).
   - *Khắc phục*: Luôn kiểm tra trong thân `while` có ít nhất một lệnh làm điều kiện tiến dần tới `False` hay không.
2. **Viết ngược điều kiện dừng thành điều kiện lặp**
   - *Nguyên nhân*: Đề bài nói "dừng khi S > 1000" nhưng lại viết `while S > 1000:` khiến vòng lặp không chạy lần nào (vì ban đầu `S = 0`).
   - *Khắc phục*: Điều kiện của `while` là **điều kiện tiếp tục lặp** (phủ định của điều kiện dừng): muốn dừng khi `S > 1000` thì phải viết `while S <= 1000:`.
3. **Quên khởi tạo biến trước vòng lặp `while`**
   - *Nguyên nhân*: Khác với `for i in range(...)` tự tạo biến `i`, `while` không tự khởi tạo biến.
   - *Khắc phục*: Phải gán giá trị ban đầu cho mọi biến xuất hiện trong `<điều kiện>` trước dòng `while`.
4. **Dùng `continue` trước lệnh tăng biến đếm**
   - *Nguyên nhân*: Khi gặp `continue`, Python nhảy ngay về đầu vòng lặp kiểm tra điều kiện, bỏ qua lệnh `i += 1` ở cuối thân vòng lặp, gây treo vô hạn.
   - *Khắc phục*: Đảm bảo cập nhật biến đếm trước khi gọi `continue`.

## 7. Tóm tắt nhanh (Ghi nhớ)
- `while` lặp với số lần chưa biết trước, kiểm tra điều kiện **trước** mỗi lần lặp.
- Điều kiện trong `while` là điều kiện **tiếp tục lặp** (khi `False` sẽ dừng).
- Luôn khởi tạo biến trước `while` và cập nhật biến bên trong thân `while` để tránh lặp vô hạn.
