# BÀI 11: CƠ SỞ DỮ LIỆU

## 1. Mục tiêu và Yêu cầu cần đạt
- Hiểu được sự cần thiết phải tổ chức lưu trữ dữ liệu một cách khoa học (hạn chế dư thừa, nhất quán, độc lập với phần mềm).
- Trình bày được khái niệm **cơ sở dữ liệu (CSDL)** và **6 thuộc tính cơ bản** của CSDL.

## 2. Yêu cầu tổ chức lưu trữ dữ liệu khoa học
- **Hạn chế dư thừa và đảm bảo nhất quán:** Không lưu trữ lặp lại dữ liệu giống nhau hoặc dữ liệu có thể tính toán suy diễn được (như điểm trung bình), tránh tình trạng sửa ở chỗ này nhưng quên sửa ở chỗ khác gây mâu thuẫn dữ liệu.
- **Tổ chức dữ liệu độc lập với phần mềm:** Nếu phần mềm đọc trực tiếp tệp văn bản theo dấu phân cách (phẩy, chấm phẩy), khi đổi cấu trúc tệp sẽ phải sửa phần mềm. Tổ chức dữ liệu theo mô hình cấu trúc chuẩn giúp phần mềm độc lập với chi tiết lưu trữ vật lí.

## 3. Khái niệm Cơ sở dữ liệu (CSDL)
- **CSDL** là một tập hợp các dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính.
- **Ví dụ:** CSDL tài khoản ngân hàng, CSDL bán hàng, CSDL quản lí thư viện, CSDL điểm học sinh.

## 4. Sáu thuộc tính cơ bản của CSDL
1. **Tính cấu trúc:** Dữ liệu được tổ chức theo cấu trúc xác định (thường là dạng bảng gồm hàng và cột).
2. **Tính không dư thừa:** Hạn chế tối đa việc lưu trữ trùng lặp dữ liệu.
3. **Tính độc lập dữ liệu:** Thay đổi cấu trúc lưu trữ không làm ảnh hưởng đến chương trình ứng dụng.
4. **Tính toàn vẹn:** Giá trị dữ liệu phải thỏa mãn các ràng buộc thực tế (VD: điểm từ 0 đến 10, số sách mượn tối đa 6 cuốn).
5. **Tính nhất quán:** Dữ liệu không mâu thuẫn nhau tại mọi nơi trong hệ thống.
6. **Tính bảo mật và an toàn:** Ngăn chặn truy cập trái phép, phân quyền người dùng và sao lưu phòng mất mát.

## 5. Ví dụ minh họa thực tiễn
- Trong CSDL thư viện: Bảng Độc giả có cấu trúc cột/hàng (tính cấu trúc); quy định mượn tối đa 6 cuốn (tính toàn vẹn); chỉ thủ thư mới được sửa/xóa bạn đọc (tính bảo mật).

## 6. Lưu ý lỗi thường gặp
- **Không cần lưu cột dữ liệu tính toán được** (như điểm trung bình) trong bảng dữ liệu gốc để tránh dư thừa và mất nhất quán.
- Đừng nhầm lẫn giữa "lưu văn bản lên máy tính" (chuyển giấy thành file Word) với tổ chức CSDL có cấu trúc.

## 7. Câu hỏi ôn tập và Vận dụng gợi ý
- Đề xuất các bảng dữ liệu cần quản lí cho một thư viện trường học (Sách, Độc giả, Mượn trả).
