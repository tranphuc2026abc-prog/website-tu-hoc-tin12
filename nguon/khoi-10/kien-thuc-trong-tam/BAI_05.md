# BÀI 5: DỮ LIỆU LÔGIC

## 1. Mục tiêu học tập và yêu cầu cần đạt
- Hiểu được khái niệm **mệnh đề** và **dữ liệu lôgic** (chỉ có hai giá trị chân lí `Đúng/True/1` và `Sai/False/0`).
- Nắm vững bảng chân lí của các phép toán lôgic cơ bản: **AND** (hội), **OR** (tuyển), **NOT** (phủ định) và mở rộng **XOR** (tuyển loại).
- Tính được giá trị của biểu thức lôgic kết hợp nhiều phép toán theo đúng thứ tự ưu tiên.
- Vận dụng dữ liệu lôgic để mô tả các tình huống thực tế (mạch điện, điều kiện lập trình, miền tọa độ).

## 2. Kiến thức trọng tâm
### 2.1. Các giá trị chân lí và phép toán lôgic
- **Dữ liệu lôgic**: chỉ nhận một trong hai giá trị đối lập: `Đúng` (`True`, kí hiệu `1`) hoặc `Sai` (`False`, kí hiệu `0`). Cần tối thiểu **1 bit** để biểu diễn.
- **Bảng chân lí các phép toán cơ bản**:

| $p$ | $q$ | `NOT p` | `p AND q` | `p OR q` | `p XOR q` |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 | 0 |

- **Quy tắc ghi nhớ**:
  - `AND` (phép hội / nhân lôgic): chỉ `Đúng` khi **tất cả** cùng đúng.
  - `OR` (phép tuyển / cộng lôgic): `Đúng` khi **ít nhất một** toán hạng đúng.
  - `NOT` (phép phủ định): đảo ngược giá trị (`1 → 0`, `0 → 1`).
  - `XOR` (tuyển loại): `Đúng` khi hai toán hạng **khác giá trị** nhau.
- **Thứ tự ưu tiên thực hiện**: Biểu thức trong ngoặc `()` → `NOT` → `AND` → `OR`.

### 2.2. Biểu diễn dữ liệu lôgic trong lập trình và thực tế
- Trong lập trình (Python, C...), biến hoặc hàm có thể mang kiểu `bool` (`True`/`False`); khi ép kiểu số, `0` là `False` và mọi số khác `0` là `True`.
- Hai quy luật hằng đúng/hằng sai cơ bản: `p AND NOT p` luôn bằng `0`; `p OR NOT p` luôn bằng `1`.

## 3. Thuật ngữ và khái niệm
| Thuật ngữ | Giải thích ngắn gọn |
| :--- | :--- |
| **Mệnh đề lôgic** | Câu khẳng định có tính đúng hoặc sai rõ ràng (không thể vừa đúng vừa sai). |
| **Bảng chân trị (Truth table)** | Bảng liệt kê mọi tổ hợp giá trị đầu vào ($2^n$ dòng với $n$ biến) và kết quả biểu thức. |
| **Phép hội (AND)** | Phép toán trả về `1` khi và chỉ khi mọi toán hạng đều bằng `1`. |
| **Phép tuyển (OR)** | Phép toán trả về `1` khi có ít nhất một toán hạng bằng `1`. |
| **Phép phủ định (NOT)** | Phép toán một ngôi đảo ngược giá trị chân lí của toán hạng. |

## 4. Ví dụ minh họa và ứng dụng thực tế
- **Diễn giải mệnh đề**: Với $p$ = *"Hùng khéo tay"*, $q$ = *"Hùng chăm chỉ"*:
  - `p AND NOT q`: *"Hùng khéo tay và Hùng không chăm chỉ"*.
  - `p OR q`: *"Hùng khéo tay hoặc Hùng chăm chỉ"*.
- **Mạch điện chuyển mạch** (công tắc đóng = `1`, mở = `0`; đèn sáng = `1`, tắt = `0`):
  - Hai công tắc $K_1, K_2$ mắc **nối tiếp**: `Đèn = K1 AND K2` (chỉ sáng khi cả hai cùng đóng).
  - Hai công tắc $K_1, K_2$ mắc **song song**: `Đèn = K1 OR K2` (chỉ tắt khi cả hai cùng mở).
- **Điều kiện năm nhuận**: `(N chia hết 400) OR ((N chia hết 4) AND NOT (N chia hết 100))`.

## 5. Hướng dẫn thực hành hoặc hoạt động vận dụng
- **Lập bảng chân trị**: Tự lập bảng chân trị 4 dòng cho biểu thức `(NOT x) OR (NOT y)` và đối chiếu với `NOT (x AND y)` để kiểm chứng định luật De Morgan.
- **Viết biểu thức tọa độ**: Dùng `AND` kết hợp các bất phương trình để mô tả một miền hình học trên mặt phẳng tọa độ (ví dụ góc phần tư thứ nhất nằm dưới đường $x+y=1$: `(x >= 0) AND (y >= 0) AND (x + y <= 1)`).

## 6. Những lỗi thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn giữa phép `OR` thông thường và phép `XOR` (tuyển loại)**:
   - *Nguyên nhân*: Trong ngôn ngữ nói hằng ngày, từ "hoặc" đôi khi mang nghĩa "chỉ chọn một trong hai", khiến học sinh nghĩ `True OR True = False`.
   - *Khắc phục*: Ghi nhớ trong tin học và đại số Boole: `True OR True = True`; chỉ `XOR` mới cho `True XOR True = False`.
2. **Sai thứ tự ưu tiên giữa `NOT`, `AND` và `OR` khi không có ngoặc**:
   - *Nguyên nhân*: Tính tuần tự từ trái sang phải như phép cộng trừ thông thường.
   - *Khắc phục*: Luôn thực hiện `NOT` trước, sau đó đến `AND`, cuối cùng mới đến `OR` (hoặc dùng dấu ngoặc đơn để làm rõ thứ tự).
3. **Nhầm quy ước logic cho mạch điện (đóng = 0 hay 1)**:
   - *Nguyên nhân*: Đọc nhầm đề bài hoặc quy ước ngược trạng thái dẫn điện.
   - *Khắc phục*: Theo vật lí thông thường, mạch kín (công tắc đóng) cho dòng điện chạy qua tương ứng mức cao (`1` / `True`), mạch hở (mở) tương ứng `0` / `False`.

## 7. Tổng kết và câu hỏi tự kiểm tra
- **Tổng kết**: Dữ liệu lôgic chỉ cần 1 bit biểu diễn (`0` hoặc `1`). Ba phép toán `AND`, `OR`, `NOT` là nền tảng để xây dựng các mạch logic phần cứng và cấu trúc điều kiện trong mọi ngôn ngữ lập trình.
- **Câu hỏi tự kiểm tra**:
  1. Tính giá trị của `(NOT 1) OR (1 AND 0)` và `NOT (1 OR 0) AND 1`.
  2. Một biểu thức có 3 biến lôgic độc lập thì bảng chân trị có bao nhiêu dòng?
