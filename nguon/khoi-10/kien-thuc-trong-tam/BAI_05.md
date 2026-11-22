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
