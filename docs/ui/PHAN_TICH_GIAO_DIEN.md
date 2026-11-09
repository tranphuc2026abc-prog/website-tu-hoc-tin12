# Thẩm định giao diện hiện trạng

Ngày quan sát: 08/11/2026. Bản chạy: https://tranphuc2026abc-prog.github.io/website-tu-hoc-tin12/

## Phạm vi và bằng chứng

Đã mở trên GitHub Pages trang chọn khối, tổng quan khối 10, danh sách bài, bài học B08, ôn tập, cấu hình luyện tập và tiến độ. Giao diện quan sát được ở kích thước cửa sổ trình duyệt desktop khoảng 1265 × 716 px. Mã đối chiếu từ `index.html`, `course.html`, `assets/css/style.css`, `assets/css/multigrade.css`, `assets/js/course-loader.js`, `assets/js/app.js` và `data/catalog-10.js`.

Ảnh đã xem trong phiên trình duyệt không có đường xuất tệp ảnh vào repository. Vì vậy không tạo ảnh giả và chưa có thư mục ảnh minh chứng; đánh giá kích thước 360, 768 và 1366 px chưa được chụp/đo trực tiếp. Đây là giới hạn bằng chứng.

## Chấm điểm hiện trạng

| Tiêu chí | Điểm / 5 | Bằng chứng và nhận xét |
|---|---:|---|
| Cấu trúc thông tin, điều hướng | 3 | Ba khối hiện rõ; trong khóa học có năm khu vực. Điều hướng dùng ký tự Unicode thay icon nhất quán. |
| Bố cục, phân cấp thị giác | 4 | Thẻ khối, banner, tiêu đề và nhóm bài phân biệt rõ trên desktop. Khu vực ôn thi khóa ở trang chủ chiếm một khối lớn. |
| Màu sắc, tương phản | 3 | Đã tính theo công thức WCAG: `#71809e` trên trắng = 3.97:1, trên nền `#f4f7fc` = 3.70:1, không đạt 4.5:1 cho chữ thường. `#263552` trên trắng = 12.26:1; `#315cf5` trên trắng = 5.28:1. |
| Chữ, khả năng đọc bài | 4 | CSS đặt chữ cơ sở 15.5 px, dòng 1.7; bài có mục lục và các phần nội dung. Chưa đo chiều dài dòng theo từng màn hình. |
| Trải nghiệm điện thoại | 3 | CSS có các breakpoint và trang danh sách có tìm kiếm/lọc. Chưa có ảnh hoặc phép đo viewport 360 px; một số nút nhỏ có padding 6 px theo chiều dọc. |
| Trải nghiệm học | 4 | Bài học liên kết sang luyện tập; luyện tập cấu hình theo bài, loại câu và 10 câu/lượt; trang tiến độ có lịch sử, bảng bài và sao lưu/khôi phục. |
| Truy cập | 3 | Có `:focus-visible`, nhãn cho tìm kiếm và nav; biểu tượng điều hướng là ký tự Unicode và một số vùng chạm dưới 44 px. Chưa kiểm thử đầy đủ bàn phím/đọc màn hình. |
| Hiệu năng cảm nhận, trạng thái | 3 | Tải dữ liệu lần lượt qua các script; trước sửa chỉ có dòng “Đang tải dữ liệu…”. Khi lỗi có thông báo và liên kết nhưng chưa chỉ dẫn cụ thể theo khối. Chưa mô phỏng mạng chậm. |
| Nhất quán thương hiệu | 2 | Đồng thời xuất hiện “TIN HỌC THPT”, “KHÔNG GIAN TỰ HỌC”, “DIGITAL LEARNING HUB” và “Tự học Tin học THPT”. |

## Kiểm chứng H1–H9

| Giả thuyết | Kết luận | Bằng chứng |
|---|---|---|
| H1. Tên thương hiệu lẫn lộn | ĐÚNG | Header trang chọn khối, hero và banner khóa học dùng các tên tiếng Việt/Anh khác nhau. |
| H2. Trang chủ thiếu “Tiếp tục học” | ĐÚNG một phần | Trang chọn khối không có nút tiếp tục; tổng quan bên trong từng khối đã có “Tiếp tục học”. |
| H3. Mục ôn thi đang khóa chiếm vị trí nổi bật | ĐÚNG | Trang chọn khối hiển thị một section lớn với tiêu đề, mô tả và eyebrow “TẠM THỜI KHÓA”. |
| H4. Điều hướng dùng ký tự làm biểu tượng | ĐÚNG | `course.html` dùng ⌂, ▦, ◈, ⌘, ◴ và ◐. |
| H5. Trạng thái tải/lỗi còn sơ sài | ĐÚNG | HTML khởi tạo chỉ có dòng tải; nhánh lỗi trong loader hiển thị hướng dẫn chung, chưa có khung trạng thái. |
| H6. Tiêu đề khóa học chung chung | ĐÚNG một phần | `course.html` bắt đầu bằng tiêu đề chung; loader đổi document title và tên khối sau khi catalog tải xong. |
| H7. Nền xanh đậm gây mỏi, chưa có nền sáng | SAI | Trang đang chạy mặc định nền sáng; CSS và nút chuyển chế độ có hỗ trợ dark mode. Chưa làm đo thời gian đọc hay nghiên cứu người dùng. |
| H8. Danh sách bài dài, phân loại/học kỳ chưa hợp | ĐÚNG | Khối 10 có 34 bài, trong đó ảnh quan sát cho thấy nhóm “Chủ đề chưa phân loại”; catalog khối 10 có 14 bài ở nhóm này. Bộ lọc tìm kiếm/trạng thái đã có. Mã ôn tập ghi cố định HK1 bài 1–14 và HK2 bài 15–28 dù catalog từng khối có khoảng khác nhau. |
| H9. Tương phản, chữ, chạm, mọi loại câu, phản hồi, tiến độ, mạng lỗi chưa rõ | KHÔNG KẾT LUẬN ĐƯỢC toàn bộ | Đã xác nhận một cặp chữ phụ không đạt AA, có hỗ trợ trắc nghiệm/đúng-sai/tự luận, có phản hồi và tiến độ trong mã. Chưa kiểm thử bằng bàn phím, viewport nhỏ, mạng chậm, mọi trạng thái và mọi dạng câu hỏi đầu-cuối. |

## Vấn đề ưu tiên

1. **Cao — tương phản chữ phụ:** 3.70–3.97:1 trên nền sáng; cần đạt tối thiểu 4.5:1.
2. **Cao — xác minh responsive và vùng chạm:** chưa có bằng chứng trực tiếp ở 360 px; cần đo trước khi xem là đạt.
3. **Trung bình — nhãn học kỳ cố định:** không phù hợp khối 10/11.
4. **Trung bình — trạng thái lỗi/tải:** thiếu cấu trúc trực quan và hướng dẫn khắc phục cụ thể.
5. **Thấp — thương hiệu và biểu tượng:** nhiều tên gọi và glyph Unicode làm giảm tính nhất quán.
6. **Thấp — danh sách dài:** 14 bài khối 10 chưa phân loại; lọc đã có nhưng nhóm chưa phân loại vẫn dài.

Không thay đổi nội dung học liệu, ngân hàng câu hỏi, đáp án, cấu trúc lưu tiến độ, Supabase hay quy trình triển khai trong phạm vi đợt này.
