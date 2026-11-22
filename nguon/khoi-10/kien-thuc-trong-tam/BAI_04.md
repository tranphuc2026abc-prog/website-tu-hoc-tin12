# BÀI 4: HỆ NHỊ PHÂN VÀ DỮ LIỆU SỐ NGUYÊN

## 1. Mục tiêu học tập và yêu cầu cần đạt
- Giải thích được vì sao máy tính sử dụng **hệ nhị phân** để biểu diễn dữ liệu và thực hiện phép tính.
- Chuyển đổi thành thạo số nguyên dương giữa **hệ thập phân** và **hệ nhị phân** (cả hai chiều).
- Thực hiện được các phép **cộng** và **nhân** hai số nhị phân.
- Hiểu được nguyên tắc biểu diễn **số nguyên không dấu**, **số nguyên có dấu** (bit dấu, **mã bù 2**) và quy trình 3 bước tính toán số học trên máy tính.

## 2. Kiến thức trọng tâm
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

## 3. Thuật ngữ và khái niệm
| Thuật ngữ | Giải thích ngắn gọn |
| :--- | :--- |
| **Hệ nhị phân (Binary)** | Hệ đếm cơ số 2 chỉ sử dụng hai kí hiệu `0` và `1`. |
| **Hệ thập phân (Decimal)** | Hệ đếm cơ số 10 sử dụng 10 chữ số `0–9`. |
| **Chỉ số dưới (Subscript)** | Kí hiệu đặt ở dưới bên phải số để phân biệt cơ số (ví dụ $19_{10} = 10011_2$). |
| **Mã bù 2 (Two's complement)** | Phương pháp chuẩn biểu diễn số nguyên âm trong máy tính (đảo bit + 1). |
| **Tràn số (Overflow)** | Lỗi xảy ra khi kết quả phép tính vượt quá phạm vi biểu diễn của số bit cấp phát. |

## 4. Ví dụ minh họa và ứng dụng thực tế
- **Đổi $19_{10}$ sang nhị phân**: $19 = 16 + 2 + 1 = 1\cdot 2^4 + 0\cdot 2^3 + 0\cdot 2^2 + 1\cdot 2^1 + 1\cdot 2^0 = 10011_2$.
- **Đổi $10110101_2$ sang thập phân**: $128 + 32 + 16 + 4 + 1 = 181_{10}$.
- **Cộng nhị phân**: $101101_2\,(45) + 11001_2\,(25) = 1000110_2\,(70)$.
- **Nhân nhị phân**: $1101_2\,(13) 	imes 101_2\,(5) = 1000001_2\,(65)$.
- **Tìm mã bù 2 của $-5$ (8 bit)**: $+5 = 00000101_2$ → đảo bit (bù 1): $11111010_2$ → cộng 1: $11111011_2$.

## 5. Hướng dẫn thực hành hoặc hoạt động vận dụng
- **Kiểm tra chéo phép tính**: Tự thực hiện 3 phép cộng và 3 phép nhân nhị phân trên giấy, sau đó đổi cả toán hạng và kết quả sang hệ thập phân để kiểm chứng độ chính xác.
- **Mở rộng đổi phần lẻ thập phân**: Thực hành đổi số có phần lẻ như $123{,}75_{10}$ ($123 = 1111011_2$; $0{,}75 	imes 2 = 1{,}5$ lấy `1`, $0{,}5 	imes 2 = 1{,}0$ lấy `1` → $1111011{,}11_2$).

## 6. Những lỗi thường gặp, nguyên nhân và cách khắc phục
1. **Viết ngược thứ tự các bit dư khi đổi thập phân sang nhị phân**:
   - *Nguyên nhân*: Đọc kết quả phép chia liên tiếp cho 2 theo chiều từ trên xuống dưới thay vì từ dưới lên trên.
   - *Khắc phục*: Luôn đánh dấu mũi tên từ dưới lên (số dư cuối cùng là bit có trọng số lớn nhất – ngoài cùng bên trái) và kiểm tra lại bằng cách cộng lũy thừa của 2.
2. **Quên nhớ hoặc nhớ sai khi cộng `1 + 1` hoặc `1 + 1 + 1` trong hệ nhị phân**:
   - *Nguyên nhân*: Thói quen cộng hệ 10 khiến viết `2` hoặc quên cộng thêm bit nhớ ở hàng bên trái.
   - *Khắc phục*: Nhớ quy tắc: tổng bằng 2 viết `0` nhớ `1`; tổng bằng 3 viết `1` nhớ `1`.
3. **Đổi sai số cần nhiều hơn 1 byte hoặc quên kiểm tra số bit biểu diễn**:
   - *Nguyên nhân*: Cố nhét số lớn hơn 255 (như `620`) vào 1 byte (8 bit).
   - *Khắc phục*: Kiểm tra ngưỡng $2^8 - 1 = 255$; nếu lớn hơn 255 thì phải dùng tối thiểu 2 byte (16 bit).

## 7. Tổng kết và câu hỏi tự kiểm tra
- **Tổng kết**: Mọi dữ liệu số nguyên trong máy tính đều biểu diễn ở hệ nhị phân. Chuyển đổi cơ số và cộng/nhân nhị phân là nền tảng cho hoạt động của bộ xử lí số học (ALU) trong CPU.
- **Câu hỏi tự kiểm tra**:
  1. Đổi các số `76`, `97`, `155` sang hệ nhị phân và đổi `1001110₂` sang hệ thập phân.
  2. Thực hiện phép tính $101110_2 + 110001_2$ và kiểm tra lại bằng hệ thập phân.
