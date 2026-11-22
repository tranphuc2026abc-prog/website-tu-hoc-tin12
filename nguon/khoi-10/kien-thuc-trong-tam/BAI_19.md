### 2.1. Biểu thức lôgic
- **Biểu thức lôgic** là biểu thức chỉ nhận một trong hai giá trị `True` (Đúng) hoặc `False` (Sai), thuộc kiểu dữ liệu `bool`.
- **Các phép so sánh số học**: `<`, `<=`, `>`, `>=`, `==` (bằng nhau), `!=` (khác nhau). Python cho phép viết gộp so sánh kép như `5 < a <= 7`.
- **Các phép toán lôgic**:
  - `not` (phủ định): đảo ngược giá trị `True` <-> `False` (độ ưu tiên cao nhất).
  - `and` (và): chỉ trả về `True` khi **cả hai** vế đều `True`.
  - `or` (hoặc): trả về `True` khi **ít nhất một** vế là `True` (độ ưu tiên thấp nhất).

### 2.2. Câu lệnh rẽ nhánh `if`
- **Dạng thiếu**:
```python
if <điều kiện>:
    <khối lệnh>
```
  Nếu `<điều kiện>` đúng (`True`), thực hiện `<khối lệnh>`; nếu sai (`False`), bỏ qua.

- **Dạng đủ**:
```python
if <điều kiện>:
    <khối lệnh 1>
else:
    <khối lệnh 2>
```
  Nếu `<điều kiện>` đúng, thực hiện `<khối lệnh 1>`; ngược lại thực hiện `<khối lệnh 2>`.

- **Mở rộng nhiều nhánh (`elif`)**: Dùng khi có từ 3 trường hợp trở lên (`if ... elif ... else`).
