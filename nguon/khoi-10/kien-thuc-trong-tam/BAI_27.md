# BÀI 27: THAM SỐ CỦA HÀM

## 1. Thông tin chung & Mục tiêu bài học (GDPT 2018)
- **Môn học:** Tin học 10 – Bộ sách Kết nối tri thức với cuộc sống (Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính).
- **Mục tiêu:**
  - Phân biệt rõ **tham số** (parameter) khi định nghĩa hàm và **đối số** (argument) khi gọi hàm.
  - Nắm vững quy tắc truyền đối số vào hàm (số lượng, thứ tự, kiểu dữ liệu, giá trị đã xác định).
  - Hiểu lợi ích và biết cách tổ chức chương trình sử dụng chương trình con (hàm) để giải quyết bài toán.

## 2. Tóm tắt kiến thức trọng tâm
- **Tham số (Parameter):** Là các biến được khai báo trong cặp ngoặc tròn ở dòng `def` khi định nghĩa hàm, đóng vai trò như biến nhận dữ liệu đầu vào bên trong thân hàm. Hàm có thể có 0, 1 hoặc nhiều tham số.
- **Đối số (Argument):** Là giá trị cụ thể, biến đã có giá trị hoặc biểu thức được truyền vào trong cặp ngoặc khi gọi hàm.
- **Quy tắc truyền dữ liệu:**
  - Khi gọi hàm (không có tham số mặc định), số lượng đối số truyền vào **phải bằng** số lượng tham số khi khai báo hàm.
  - Các đối số vị trí được gán tương ứng theo thứ tự từ trái sang phải cho các tham số.
  - Mọi biến dùng làm đối số phải được gán giá trị trước khi gọi hàm, nếu không sẽ phát sinh lỗi `NameError`.
- **Lợi ích của chương trình con:** Giảm lặp lại mã nguồn, cấu trúc chương trình rõ ràng, dễ đọc, dễ kiểm thử, dễ bảo trì và nâng cấp.

## 3. Cú pháp, Lệnh & Bảng tra cứu nhanh

| Khái niệm / Hình thức | Ví dụ minh họa | Ghi chú |
| :--- | :--- | :--- |
| Tham số (khai báo) | `def tinh(a, b, c):` | `a, b, c` là tham số hình thức. |
| Đối số là hằng / biểu thức | `tinh(1, 2 + 3, 4)` | Truyền trực tiếp giá trị `1, 5, 4`. |
| Đối số là biến | `tinh(x, y, z)` | `x, y, z` phải đã có giá trị trước đó. |
| Đối số theo tên (keyword) | `tinh(c=4, a=1, b=5)` | Có thể đổi thứ tự khi ghi rõ tên tham số. |
| Tham số có giá trị mặc định | `def chao(ten, loi="Chào"):` | Tham số mặc định phải đặt sau tham số thường. |

## 4. Ví dụ minh họa có giải thích chi tiết
```python
def dien_tich_hcn(dai, rong):   # dai, rong là tham số
    return dai * rong

a, b = 10, 5
print(dien_tich_hcn(a, b))      # a, b là đối số -> 50
print(dien_tich_hcn(8, 3))      # 8, 3 là đối số -> 24
```
**Giải thích:** Khi gọi `dien_tich_hcn(a, b)`, giá trị `10` của `a` được truyền vào tham số `dai`, giá trị `5` của `b` truyền vào tham số `rong`.

## 5. Hướng dẫn Thực hành – Luyện tập – Vận dụng (SGK)
- **Luyện tập 1 (Hàm `power(a, b, c)` tính $(a + b)^c$):**
  ```python
  def power(a, b, c):
      return (a + b) ** c
  ```
- **Vận dụng 1 (Nhập 2 số cách nhau bởi dấu phẩy, dùng hàm tính ƯCLN):**
  ```python
  def ucln(a, b):
      while b != 0:
          a, b = b, a % b
      return a

  a, b = map(int, input("Nhập a, b: ").split(","))
  print("ƯCLN =", ucln(a, b))
  ```
- **Vận dụng 2 (Hàm `change(ho_ten, c)` đổi chữ hoa/thường):**
  ```python
  def change(ho_ten, c):
      if c == 0:
          return ho_ten.upper()
      return ho_ten.lower()
  ```

## 6. Các lỗi chuyên môn thường gặp, nguyên nhân & cách khắc phục
1. **Truyền sai số lượng đối số (`TypeError: ... takes X positional arguments but Y were given`):**
   - *Nguyên nhân:* Hàm định nghĩa 2 tham số nhưng khi gọi chỉ truyền 1 hoặc truyền 3 đối số.
   - *Khắc phục:* Kiểm tra lại phần khai báo `def` để truyền đủ số đối số bắt buộc hoặc đặt giá trị mặc định.
2. **Truyền biến chưa được gán giá trị làm đối số (`NameError`):**
   - *Nguyên nhân:* Gọi `f(1, m)` khi biến `m` chưa hề được khởi tạo giá trị ở bên ngoài.
   - *Khắc phục:* Khởi tạo hoặc nhập giá trị cho biến trước khi gọi hàm.
3. **Truyền sai kiểu dữ liệu của đối số (`TypeError` / `ValueError`):**
   - *Nguyên nhân:* Hàm thực hiện phép toán số học nhưng lại truyền vào xâu kí tự (ví dụ truyền `input()` chưa ép kiểu `int()`).
   - *Khắc phục:* Ép kiểu `int()` hoặc `float()` trước khi truyền vào hàm, hoặc kiểm tra kiểu dữ liệu đầu vào.
4. **Nhầm thứ tự đối số vị trí:**
   - *Nguyên nhân:* Gọi `chia(b, a)` trong khi định nghĩa là `def chia(so_bi_chia, so_chia):`.
   - *Khắc phục:* Truyền đúng thứ tự tham số hoặc sử dụng đối số theo tên `chia(so_bi_chia=a, so_chia=b)`.

## 7. Câu hỏi ôn tập & Tự kiểm tra nhanh
1. Trong lời gọi `max(3, 7)`, `3` và `7` là tham số hay đối số? *(Đáp án: Đối số)*
2. Nếu hàm `def f(x, y): return x + y` được gọi bằng `f(5)`, Python sẽ báo lỗi gì? *(Đáp án: `TypeError` do thiếu 1 đối số)*
3. Viết hàm `tinh_tb(a, b, c=0)` tính trung bình cộng 3 số với mặc định `c = 0`. *(Đáp án: `def tinh_tb(a, b, c=0): return (a + b + c) / 3`)*
