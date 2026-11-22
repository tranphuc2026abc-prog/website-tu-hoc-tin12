# Bài 30: Kiểm thử và gỡ lỗi chương trình

## 1. Mục tiêu bài học
- Biết được mục đích của kiểm thử và gỡ lỗi chương trình là phát hiện, khoanh vùng, sửa lỗi hiện có và phòng ngừa lỗi phát sinh trong tương lai.
- Phân biệt được 3 nhóm lỗi thường gặp trong Python: lỗi cú pháp (`SyntaxError`), lỗi ngoại lệ khi chạy (`Runtime`/`Exception`) và lỗi logic (`bug`).
- Vận dụng được một số phương pháp kiểm thử và gỡ lỗi cơ bản: quan sát mã lỗi Runtime, thiết kế bộ dữ liệu test (thường, ngẫu nhiên, vùng biên), in thông số trung gian bằng `print()` và sử dụng công cụ điểm dừng (`breakpoint`) trên IDE.

## 2. Khái niệm & Kiến thức trọng tâm
- **Kiểm thử chương trình (Testing):** Quá trình chạy thử chương trình với các bộ dữ liệu đầu vào nhằm kiểm tra tính đúng đắn và phát hiện lỗi. Kiểm thử nhiều bộ test làm tăng độ tin cậy nhưng không thể chứng minh tuyệt đối chương trình không còn lỗi trên mọi đầu vào.
- **Gỡ lỗi (Debugging):** Quá trình xác định vị trí, tìm nguyên nhân gốc rễ và sửa các lỗi (bug) phát hiện được.
- **Phân loại 3 nhóm lỗi trong Python:**
  1. **Lỗi cú pháp (`SyntaxError`, `IndentationError`):** Vi phạm quy tắc ngữ pháp hoặc thụt lề của Python; chương trình không thể bắt đầu chạy.
  2. **Lỗi ngoại lệ (`Exception` / `Runtime Error`):** Cú pháp đúng nhưng khi chạy gặp tình huống không thực hiện được nên dừng đột ngột và báo mã lỗi:
     - `NameError`: Gọi tên biến hoặc hàm chưa được định nghĩa.
     - `ZeroDivisionError`: Thực hiện phép chia hoặc chia lấy dư cho `0`.
     - `TypeError`: Thực hiện phép toán/hàm với kiểu dữ liệu không tương thích (ví dụ cộng `str` với `int`).
     - `ValueError`: Kiểu dữ liệu đúng nhưng giá trị không hợp lệ (ví dụ `int("abc")` hoặc `int("1.5")`).
     - `IndexError`: Truy cập chỉ số vượt quá phạm vi của danh sách (`list`) hoặc xâu (`str`).
  3. **Lỗi logic (Semantic/Logic Error):** Chương trình chạy bình thường, không báo lỗi ngoại lệ nhưng cho kết quả sai so với yêu cầu bài toán.

## 3. Quy trình & Phương pháp cốt lõi
1. **Quan sát mã lỗi Runtime và bắt ngoại lệ:** Đọc thông báo Traceback (tên lỗi, số dòng) để xác định vị trí lệnh gây lỗi; có thể dùng khối `try ... except` để xử lí an toàn khi cần.
2. **Kiểm thử với bộ dữ liệu test:**
   - Bộ test tiêu biểu (đầu vào thông thường có kết quả biết trước).
   - Bộ test sinh ngẫu nhiên trong miền xác định.
   - Bộ test **vùng biên** và lân cận biên (ví dụ với $x \ge 0$ cần thử $x = 0$, $x$ rất gần $0$, và $x$ rất lớn; với danh sách cần thử danh sách rỗng `[]` hoặc có 1 phần tử).
3. **In các thông số trung gian:** Chèn lệnh `print()` tại các bước tính toán/vòng lặp quan trọng để theo dõi sự thay đổi giá trị biến.
4. **Sử dụng công cụ điểm dừng (Breakpoint) trên IDE (như Wingware, VS Code, PyCharm):**
   - **Bước 1:** Đặt điểm dừng (chấm đỏ) ở lề trái dòng lệnh nghi ngờ.
   - **Bước 2:** Chạy chương trình ở chế độ Debug (`F5`), chương trình tạm dừng ngay trước dòng đánh dấu.
   - **Bước 3:** Quan sát giá trị biến (cửa sổ *Stack Data* / *Variables*) và điều khiển chạy từng bước (*Step Over*, *Step Into*, *Continue*) để tìm vị trí sai lệch.

## 4. Ví dụ minh họa
```python
# Ví dụ: Sửa lỗi logic và lỗi ngoại lệ khi tính trung bình cộng danh sách A
def tinh_trung_binh(A):
    if len(A) == 0:          # Tránh ZeroDivisionError ở vùng biên danh sách rỗng
        return 0.0
    tong = 0
    for i in range(len(A)):  # Duyệt đúng chỉ số từ 0 đến len(A) - 1, tránh IndexError
        tong += A[i]
    return tong / len(A)

print(tinh_trung_binh([4, 6, 8]))  # Kết quả: 6.0
print(tinh_trung_binh([]))         # Kết quả: 0.0 (không bị dừng đột ngột)
```

## 5. Ứng dụng thực tế & Mở rộng
- Trong phát triển phần mềm chuyên nghiệp, kiểm thử được tự động hóa thông qua **Kiểm thử đơn vị (Unit Testing)** (như thư viện `unittest`, `pytest` trong Python) để kiểm tra từng hàm nhỏ mỗi khi mã nguồn thay đổi.
- Kết hợp kiểm thử hộp đen (dựa vào Input/Output và vùng biên) với kiểm thử hộp trắng (dựa vào nhánh `if/else`, vòng lặp bên trong mã nguồn) giúp giảm thiểu rủi ro khi đưa phần mềm vào vận hành.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Nhầm lẫn dữ liệu nhập từ `input()` là số nguyên/thực (`TypeError` hoặc lỗi logic nối xâu):**
   - *Nguyên nhân:* Hàm `input()` luôn trả về kiểu `str`. Khi viết `m = input(); n = input(); print(m + n)` với `m="2", n="3"`, Python in ra `"23"` thay vì `5`.
   - *Khắc phục:* Ép kiểu tường minh `int(input(...))` hoặc `float(input(...))` và kiểm tra tính hợp lệ trước khi tính toán.
2. **Lỗi lệch 1 đơn vị ở chỉ số vòng lặp (Off-by-one error gây `IndexError` hoặc sót phần tử):**
   - *Nguyên nhân:* Nhầm lẫn cận trên của `range()`, hoặc dừng vòng lặp `while j > 1` trong thuật toán sắp xếp chèn thay vì `j > 0`, làm bỏ sót phần tử đầu tiên `A[0]`.
   - *Khắc phục:* Kiểm tra kĩ điều kiện biên `0` và `len(A) - 1`; dùng `print()` hoặc đặt breakpoint ngay trong vòng lặp để theo dõi biến chỉ số `i`, `j`.
3. **Bỏ qua trường hợp biên khi thiết kế bộ test (`ZeroDivisionError`, `ValueError`):**
   - *Nguyên nhân:* Chỉ chạy thử với dữ liệu đẹp, không thử danh sách rỗng `[]`, mẫu số bằng `0`, số âm hoặc xâu rỗng `""`.
   - *Khắc phục:* Luôn bổ sung bộ test vùng biên và kiểm tra điều kiện bảo vệ (`if len(A) == 0:` hoặc `if mau != 0:`) trước khi thực hiện phép tính nhạy cảm.

## 7. Câu hỏi tự kiểm tra & Ghi nhớ nhanh
- **Ghi nhớ nhanh:** *Cú pháp sai -> không chạy; Ngoại lệ -> dừng giữa chừng; Logic sai -> chạy hết nhưng ra đáp án sai.*
- **Tự kiểm tra:**
  1. Khi gặp `IndexError` ở dòng `print(a[len(a)])`, nguyên nhân là gì và sửa thế nào? *(Chỉ số hợp lệ tối đa là `len(a) - 1`)*.
  2. Vì sao cần kiểm thử cả giá trị vùng biên dù chương trình đã chạy đúng với các bộ test thông thường?
