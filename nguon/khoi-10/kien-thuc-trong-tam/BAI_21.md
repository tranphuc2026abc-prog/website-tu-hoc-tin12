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
