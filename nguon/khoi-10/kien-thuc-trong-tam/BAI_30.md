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
