### 2.1. Hệ nhị phân và biểu diễn số nguyên
- **Hệ nhị phân (cơ số 2)**: chỉ dùng hai chữ số `0` và `1` (mỗi chữ số gọi là 1 **bit**). Máy tính dùng hệ nhị phân vì các mạch điện tử có 2 trạng thái vật lí ổn định (đóng/mở, có điện/không điện) dễ thiết kế và chống nhiễu tốt.
- **Đổi từ nhị phân sang thập phân**: Khai triển theo tổng các lũy thừa của 2:
  $$a_n a_{n-1}\dots a_1 a_0{}_{(2)} = a_n\cdot 2^n + a_{n-1}\cdot 2^{n-1} + \dots + a_1\cdot 2^1 + a_0\cdot 2^0$$
- **Đổi từ thập phân sang nhị phân**: Chia liên tiếp số thập phân cho `2` lấy phần dư cho đến khi thương bằng `0`, sau đó viết các số dư theo thứ tự **từ dưới lên trên**.
- **Biểu diễn số nguyên**:
  - *Số nguyên không dấu ($n$ bit)*: biểu diễn các số từ $0$ đến $2^n - 1$ (ví dụ 8 bit biểu diễn $0 \dots 255$).
  - *Số nguyên có dấu (mã bù 2)*: bit ngoài cùng bên trái là bit dấu (`0` là dương, `1` là âm). Để tìm mã bù 2 của số âm $-x$: biểu diễn $+x$ theo đủ số bit, đảo tất cả các bit (`0↔1`, gọi là bù 1) rồi **cộng thêm 1**.

### 2.2. Các phép tính số học trong hệ nhị phân
- **Bảng cộng 1 bit**: `0 + 0 = 0`; `0 + 1 = 1`; `1 + 0 = 1`; `1 + 1 = 10₂` (viết `0`, nhớ `1`); `1 + 1 + 1 = 11₂` (viết `1`, nhớ `1`). Thực hiện từ **phải sang trái**.
- **Bảng nhân 1 bit**: `0 × 0 = 0`; `0 × 1 = 0`; `1 × 0 = 0`; `1 × 1 = 1`. Thực hiện tương tự nhân tay thập phân rồi cộng các tích riêng.
- **Quy trình tính toán trên máy tính**: (1) Chuyển các toán hạng thập phân sang nhị phân → (2) Thực hiện phép toán trên hệ nhị phân → (3) Chuyển kết quả nhị phân về hệ thập phân để hiển thị.
