# BÀI 24: THỰC HÀNH SAO LƯU DỮ LIỆU

## 1. Mục tiêu và Yêu cầu cần đạt
- Thực hiện thành thạo thao tác **sao lưu (export/backup)** và **phục hồi (restore)** CSDL bằng HeidiSQL.

## 2. Sao lưu CSDL ra tệp `.sql`
1. Chọn thẻ **Các công cụ → Xuất cơ sở dữ liệu dưới dạng SQL**.
2. Đánh dấu chọn CSDL `mymusic` (hoặc chỉ tích chọn một số bảng cần sao lưu, như `banthuam`).
3. Tích chọn **`Drop`** (xóa đối tượng cũ nếu có trước khi tạo mới) và ở dòng `Data` chọn **`Delete + insert`** (xóa dữ liệu cũ trước khi chèn lại).
4. Chọn kiểu output **`Single .sql file`**, nhập đường dẫn tệp (VD: `C:\Temp\_mymusic.sql`) → nhấn **Export**.

## 3. Phục hồi (Restore) CSDL từ tệp `.sql`
1. Chọn **Tập tin → Load SQL file...** (hoặc `Ctrl + O`).
2. Chọn tệp `_mymusic.sql` → **Open** để nạp các câu lệnh SQL vào cửa sổ truy vấn.
3. Nhấn biểu tượng chạy truy vấn để thực thi.
4. Nhấn **`F5`** để làm tươi danh sách CSDL bên trái.

## 4. Sao lưu từng phần và Di chuyển sang máy khác
- Có thể sao lưu riêng từng bảng bằng cách chỉ chọn bảng đó.
- Tệp `.sql` sao lưu có thể dùng để phục hồi trên **bất kì máy tính nào khác** có cài đặt MySQL tương ứng.

## 5. Ý nghĩa của sao lưu định kì
- Phòng ngừa mất dữ liệu do xóa nhầm, lỗi phần mềm hoặc hỏng ổ cứng.

## 6. Lưu ý lỗi thường gặp
- Nếu không chọn `Drop` và `Delete + insert`, khi phục hồi đè lên CSDL đang có bảng/dữ liệu cũ sẽ phát sinh lỗi trùng bảng hoặc trùng khóa chính.

## 7. Bài tập thực hành tự kiểm tra
- Sao lưu riêng bảng `banthuam`, xóa thử một vài dòng rồi phục hồi lại từ tệp `.sql`.
