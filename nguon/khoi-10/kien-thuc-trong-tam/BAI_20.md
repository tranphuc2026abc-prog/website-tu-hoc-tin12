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
