# Thiết kế giao diện đề xuất và triển khai

## Nguyên tắc

- Mở trang là chọn được khối; từ trang chủ có thể tiếp tục bài gần nhất nếu trình duyệt có tiến độ.
- Giữ nguyên các luồng và dữ liệu hiện hữu; chỉ trình bày lại.
- Tên xuyên suốt: **Tự học Tin học THPT**; phân biệt khối bằng nhãn “Khối 10”, “Khối 11”, “Khối 12”.
- Mục đang rà soát chiếm ít diện tích hơn, vẫn thông báo trạng thái.
- Không phụ thuộc font, ảnh, thư viện hoặc CDN bên ngoài.

## Tokens và quy tắc trình bày

Tokens hiện tại được giữ làm nền. Đợt này điều chỉnh màu chữ phụ sang `#5c6c89` (4.94:1 trên `#f4f7fc`, 5.30:1 trên trắng), màu tím nút sang `#6748d7` (6.03:1 trên trắng). Nút, liên kết điều hướng, ô tìm kiếm, lựa chọn câu hỏi có chiều cao tối thiểu 44 px. Phần nội dung bài giới hạn khoảng 78ch. Hiệu ứng tôn trọng `prefers-reduced-motion`.

## Thành phần

- **Header:** tên tiếng Việt thống nhất; điều hướng chính dùng SVG inline đơn sắc có nhãn văn bản.
- **Thẻ tiếp tục học:** đọc `tin10.v1`, `tin11.v1`, `tin12.v1` chỉ để tạo liên kết đến bài gần nhất; không sửa hoặc chuyển đổi dữ liệu.
- **Thẻ khối:** giữ số liệu và liên kết hiện tại.
- **Mục đang rà soát:** dòng “Sắp có” gọn, mô tả rõ vẫn học theo khối bình thường.
- **Tải/lỗi:** khung trạng thái và nút thử tải lại/chọn khối.
- **Bài học và luyện tập:** giữ nguyên luồng, cấu trúc và logic hiện có; chỉ cải thiện độ tương phản, vùng thao tác.

## Điều hướng

`Trang chọn khối → Tổng quan khối → Bài học → Ôn tập / Luyện tập → Tiến độ`

Các đường dẫn hiện hữu theo `course.html?grade=10|11|12#/...` được giữ nguyên.

## Truy cập

Duy trì tiêu điểm bàn phím rõ ràng, trạng thái không chỉ phụ thuộc màu, nhãn văn bản bên cạnh biểu tượng SVG, vùng tương tác tối thiểu 44 px, tôn trọng chuyển động giảm. Kết quả bàn phím/đọc màn hình cần được xác minh riêng trong trình duyệt trước khi công bố đạt đầy đủ.
