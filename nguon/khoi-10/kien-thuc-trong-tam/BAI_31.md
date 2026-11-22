# Bài 31: Thực hành viết chương trình đơn giản

## 1. Mục tiêu bài học
- Củng cố quy trình 5 bước giải bài toán trên máy tính (xác định bài toán, thiết kế thuật toán, viết chương trình, hiệu chỉnh, viết tài liệu).
- Thành thạo việc chia chương trình thành các hàm (`def`) có tham số và giá trị trả về (`return`) để giải quyết các bài toán số học và xử lí dữ liệu đơn giản.
- Biết sử dụng vòng lặp `while`, `for` lồng nhau, điều kiện kiểm tra dữ liệu đầu vào và công cụ gỡ lỗi để hoàn thiện chương trình.

## 2. Khái niệm & Kiến thức trọng tâm
- **Đặc tả bài toán:** Gồm 2 thành phần cốt lõi là **Input** (thông tin vào) và **Output** (thông tin ra).
- **Tính chất của thuật toán:**
  1. **Tính dừng:** Thuật toán phải kết thúc sau hữu hạn bước.
  2. **Tính xác định:** Ở mỗi bước, thao tác tiếp theo phải được xác định rõ ràng, duy nhất.
  3. **Tính đúng đắn:** Với mọi Input hợp lệ, Output thu được phải đúng yêu cầu bài toán.
- **Tham số và đối số trong hàm:**
  - **Tham số (Parameter):** Biến cục bộ khai báo trong dấu ngoặc tròn khi định nghĩa hàm `def ten_ham(tham_so):`.
  - **Đối số (Argument):** Giá trị thực tế truyền vào khi gọi hàm `ten_ham(doi_so)`. Số lượng và thứ tự đối số vị trí phải tương ứng với tham số (trừ khi có giá trị mặc định).

## 3. Cú pháp, Quy trình & Thuật toán cốt lõi
- **Kiểm tra dữ liệu đầu vào bằng `while`:** Lặp lại việc yêu cầu nhập cho đến khi dữ liệu thỏa mãn miền xác định (ví dụ số thực dương `a > 0`).
- **Quy tắc xác định năm nhuận:** Năm `y` là năm nhuận nếu `(y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)`.
- **Thuật toán Euclid tìm ƯCLN(a, b):**
  - Ý tưởng: $\text{ƯCLN}(a, b) = \text{ƯCLN}(b, a \bmod b)$ với $b > 0$, và $\text{ƯCLN}(a, 0) = a$.
- **Vòng lặp lồng nhau:** Dùng để xử lí bảng 2 chiều (như in bảng cửu chương theo hàng và cột, kết hợp tham số `end="\t"` trong `print()`).

## 4. Ví dụ minh họa
```python
# Bài toán: Tính ƯCLN và kiểm tra năm nhuận trong thế kỉ XXI (2001 - 2100)
def ucln(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def la_nam_nhuan(y):
    return (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)

print("ƯCLN(102, 78) =", ucln(102, 78))  # Kết quả: 6
so_nam_nhuan = sum(1 for y in range(2001, 2101) if la_nam_nhuan(y))
print("Số năm nhuận thế kỉ XXI:", so_nam_nhuan)  # Kết quả: 24
```

## 5. Ứng dụng thực tế & Mở rộng
- Tư duy phân rã bài toán thành các hàm nhỏ độc lập (modular programming) là nền tảng để xây dựng các ứng dụng lớn, dễ bảo trì và tái sử dụng mã nguồn.
- Thuật toán Euclid không chỉ tìm ƯCLN mà còn là cơ sở để tính bội chung nhỏ nhất $\text{BCNN}(a, b) = \frac{a \cdot b}{\text{ƯCLN}(a, b)}$ và các thuật toán mã hóa RSA.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn điều kiện năm nhuận với năm tròn thế kỉ:**
   - *Nguyên nhân:* Chỉ kiểm tra `y % 4 == 0` mà quên điều kiện loại trừ năm chia hết cho `100` nhưng không chia hết cho `400` (dẫn đến kết luận sai năm `2100` là năm nhuận và đếm thành 25 năm trong thế kỉ XXI).
   - *Khắc phục:* Luôn viết đủ biểu thức `(y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)`.
2. **Hàm chỉ `print()` kết quả mà quên `return` giá trị:**
   - *Nguyên nhân:* Học sinh thường đặt `print(kq)` bên trong hàm thay vì `return kq`, dẫn đến khi gọi hàm trong biểu thức (như `tong = ucln(a, b) + 1`) biến nhận giá trị `None` và gây `TypeError`.
   - *Khắc phục:* Các hàm tính toán phải trả về kết quả bằng `return`; việc in ra màn hình thực hiện ở chương trình chính.
3. **Vòng lặp `while` kiểm tra nhập liệu bị lặp vô hạn:**
   - *Nguyên nhân:* Quên cập nhật lại biến nhập `a = float(input(...))` bên trong thân vòng lặp `while a <= 0:`.
   - *Khắc phục:* Luôn đảm bảo bên trong vòng lặp `while` có câu lệnh thay đổi giá trị biến điều kiện để vòng lặp có thể dừng khi người dùng nhập đúng.

## 7. Câu hỏi tự kiểm tra & Ghi nhớ nhanh
- **Ghi nhớ nhanh:** *Tham số là biến hình thức khi `def`; đối số là giá trị thực khi gọi hàm.*
- **Tự kiểm tra:**
  1. Vì sao khi nhập `"1.5"` vào lệnh `int(input())` lại phát sinh `ValueError`? *(Hàm `int()` không chuyển trực tiếp chuỗi số thập phân thành số nguyên; cần `int(float(input()))` nếu muốn lấy phần nguyên).*
  2. Trong đoạn code in bảng cửu chương hai hàng, tại sao cần một lệnh `print()` trống sau vòng lặp `for j`?
