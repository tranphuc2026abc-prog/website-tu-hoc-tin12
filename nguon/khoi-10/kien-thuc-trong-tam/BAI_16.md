# BÀI 16: NGÔN NGỮ LẬP TRÌNH BẬC CAO VÀ PYTHON

## 1. Mục tiêu bài học
- **Kiến thức:** Biết khái niệm ngôn ngữ lập trình bậc cao và ưu điểm so với ngôn ngữ máy, hợp ngữ; nhận biết được hai chế độ làm việc của môi trường lập trình Python; hiểu cấu trúc và cách sử dụng câu lệnh `print()` đầu tiên.
- **Năng lực:** Cài đặt/khởi động được môi trường Python (IDLE); viết và chạy được câu lệnh tính toán biểu thức số học ở chế độ trực tiếp và lưu, chạy tệp chương trình `.py` ở chế độ soạn thảo.
- **Phẩm chất:** Rèn luyện tư duy thuật toán, tính chính xác về cú pháp và thái độ nghiêm túc khi lập trình.

## 2. Kiến thức trọng tâm
### 2.1. Ngôn ngữ lập trình bậc cao
- **Ngôn ngữ lập trình** là công cụ giúp con người viết các chỉ dẫn (chương trình) để máy tính thực hiện nhiệm vụ.
- Có 3 mức độ: **ngôn ngữ máy** (mã nhị phân, máy hiểu trực tiếp), **hợp ngữ** (ngôn ngữ bậc thấp) và **ngôn ngữ lập trình bậc cao** (như Python, C/C++, Java...).
- Ngôn ngữ lập trình bậc cao có câu lệnh gần với **ngôn ngữ tự nhiên**, cú pháp đơn giản, dễ đọc, dễ hiểu và cần **chương trình dịch** để chuyển sang ngôn ngữ máy.
- **Python** do **Guido van Rossum** tạo ra (ra mắt năm 1991), miễn phí, mã nguồn mở, được dùng rộng rãi trong giáo dục, phát triển web, khoa học dữ liệu, AI, xử lí ảnh, robot...

### 2.2. Môi trường lập trình Python
Môi trường lập trình Python (IDLE) có **2 chế độ**:
- **Chế độ gõ lệnh trực tiếp (Interactive/Shell):** Có dấu nhắc lệnh `>>>`. Gõ từng lệnh rồi nhấn `Enter` máy thực hiện và trả kết quả ngay. Thích hợp để tính toán nhanh và thử nghiệm từng lệnh.
- **Chế độ soạn thảo (Script/Editor):** Cho phép viết nhiều dòng lệnh, lưu thành tệp có phần mở rộng `.py` và nhấn `F5` (`Run -> Run Module`) để chạy toàn bộ chương trình nhiều lần.

### 2.3. Một số lệnh Python đầu tiên
- Python tự động nhận biết kiểu dữ liệu khi nhập số (`int`, `float`) hay xâu kí tự (`str` đặt trong cặp `'...'` hoặc `"..."` hoặc `"""..."""`).
- Phép chia `/` trong Python 3 luôn cho kết quả kiểu số thực (ví dụ `5/2` cho `2.5`, `10+7/2` cho `13.5`).
- **Câu lệnh `print()`:** In một hoặc nhiều giá trị đồng thời ra màn hình, các giá trị phân cách nhau bởi dấu phẩy `,` (khi in mặc định cách nhau 1 dấu cách).

## 3. Thuật ngữ, khái niệm và cú pháp/lệnh quan trọng
| Thuật ngữ / Lệnh | Cú pháp / Kí hiệu | Ý nghĩa / Ghi chú |
|---|---|---|
| Dấu nhắc lệnh | `>>>` | Con trỏ chờ nhập lệnh ở chế độ trực tiếp |
| Phần mở rộng tệp | `.py` | Đuôi tệp mã nguồn chương trình Python |
| Lệnh xuất | `print(gt1, gt2, ...)` | In một hoặc nhiều giá trị ra màn hình |
| Xâu nhiều dòng | `"""..."""` | Cho phép nhấn `Enter` xuống dòng ngay trong xâu |
| Chạy chương trình | `F5` (`Run -> Run Module`) | Thực thi tệp `.py` trong chế độ soạn thảo IDLE |

## 4. Hướng dẫn thực hành và ví dụ minh họa
- **Ví dụ 1 (Chế độ trực tiếp):**
  ```python
  >>> 10 + 13
  23
  >>> print("13+10*3/2-3*2 =", 13+10*3/2-3*2)
  13+10*3/2-3*2 = 22.0
  ```
- **Ví dụ 2 (Chế độ soạn thảo – tệp `Bai1.py`):**
  ```python
  print("Xin chào lớp 10!")
  print("1*3*5*7 =", 1*3*5*7)
  print("""Không có việc gì khó
  Chỉ sợ lòng không bền""")
  ```

## 5. Câu hỏi và bài tập vận dụng nhanh
1. **Câu hỏi:** Lệnh `print(3.4 + 4, "3.4 + 4")` in ra kết quả gì?
   - **Đáp án:** `7.4 3.4 + 4`
2. **Câu hỏi:** Vì sao Python phân biệt `print()` và `Print()`?
   - **Đáp án:** Vì Python phân biệt chữ hoa và chữ thường; tên hàm chuẩn là `print` viết thường.
3. **Câu hỏi:** Khi nào nên dùng chế độ soạn thảo thay vì chế độ gõ lệnh trực tiếp?
   - **Đáp án:** Khi cần viết chương trình có nhiều dòng lệnh và muốn lưu lại thành tệp `.py` để chạy lại nhiều lần.

## 6. Lỗi chuyên môn thường gặp, nguyên nhân và cách khắc phục
1. **Lỗi `SyntaxError: invalid syntax` do đặt nhầm hai toán tử cạnh nhau hoặc dùng kí hiệu toán học trên giấy:**
   - *Nguyên nhân:* Viết `3 + *5`, dùng dấu `×` thay cho `*`, hoặc viết `2x` thay vì `2*x`.
   - *Khắc phục:* Luôn dùng kí hiệu toán tử chuẩn của Python (`*` cho phép nhân, `/` cho phép chia) và đảm bảo giữa hai toán tử phải có toán hạng hoặc dấu ngoặc hợp lệ.
2. **Lỗi `SyntaxError` khi viết xâu kí tự lồng dấu nháy kép/đơn (`"Bạn tên là "An""`):**
   - *Nguyên nhân:* Dùng cùng một loại dấu nháy ở bên ngoài và bên trong xâu khiến Python hiểu nhầm xâu kết thúc sớm.
   - *Khắc phục:* Dùng cặp dấu nháy khác loại bao ngoài (ví dụ `'Bạn tên là "An"'`) hoặc đặt dấu gạch chéo ngược `\"` trước dấu nháy bên trong.
3. **Nhầm lẫn giữa gõ biểu thức trực tiếp ở Shell và ở cửa sổ Code (Script):**
   - *Nguyên nhân:* Ở cửa sổ soạn thảo `.py`, học sinh chỉ viết `10 + 13` mà không bọc trong `print(10 + 13)`, nên khi nhấn `F5` màn hình không hiện kết quả.
   - *Khắc phục:* Trong tệp chương trình `.py`, mọi kết quả muốn hiển thị ra màn hình đều phải đặt trong câu lệnh `print(...)`.

## 7. Tổng kết và liên hệ thực tiễn
- Bài 16 mở đầu chủ đề lập trình với Python, giúp học sinh hiểu cầu nối giữa tư duy tự nhiên và ngôn ngữ máy thông qua chương trình dịch, làm chủ hai chế độ lập trình và câu lệnh `print()`.
- Đây là bước đệm để viết các chương trình tính toán thực tế như tính sản lượng điện, thời gian di chuyển, hay xây dựng ứng dụng web và phân tích dữ liệu bằng Python.
