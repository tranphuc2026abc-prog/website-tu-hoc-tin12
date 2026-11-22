### 2.1. Khởi tạo và truy cập phần tử danh sách
- **Khởi tạo**: `<tên list> = [<v1>, <v2>, ..., <vn>]`. Danh sách rỗng: `A = []`. Các phần tử có thể thuộc nhiều kiểu dữ liệu khác nhau.
- **Chỉ số (Index)**: Bắt đầu từ `0` đến `len(A) - 1` (chỉ số âm `-1` là phần tử cuối cùng).
- **Truy cập / Sửa**: `A[i]` đọc giá trị; `A[i] = giá_trị_mới` thay đổi phần tử tại chỉ số `i`.
- **Xóa phần tử**: `del A[i]` xóa phần tử tại chỉ số `i` (hoặc `del A[start:stop]` xóa một đoạn).

### 2.2. Duyệt danh sách và thêm phần tử
- **Duyệt theo chỉ số**: `for i in range(len(A)):` (dùng khi cần biết vị trí `i` hoặc sửa `A[i]`).
- **Thêm phần tử vào cuối**: `A.append(x)` tăng độ dài danh sách lên 1 và đặt `x` ở cuối.
- **Nối danh sách**: `A = [x] + A` (thêm vào đầu) hoặc `A = A + [x]`.
