# Thiết kế và quy tắc giao diện

Thiết kế dưới đây bám vào các vấn đề đã ghi ở `PHAN_TICH_GIAO_DIEN.md`. Nó là hướng triển khai cho PR-2; không đổi cấu trúc điều hướng, dữ liệu học tập hoặc luồng chấm điểm.

## Nguyên tắc

- Giữ “Tự học Tin học THPT” làm tên sản phẩm và tên khối ở header.
- Làm rõ biểu tượng với thuộc tính truy cập ẩn cho SVG; accessible name chỉ đọc một lần.
- Khi có tiến độ, thẻ tiếp tục mở đúng khối và bài; khi chưa có tiến độ, thẻ không chiếm chỗ.
- Tải, rỗng, và lỗi phải cho biết trạng thái; lỗi có thể thử lại hoặc về chọn khối.
- Bài học và câu hỏi dùng được từ 360 px, không phụ thuộc Internet.
- Mỗi sửa đổi chỉ chạm tầng trình bày, không đổi dữ liệu hay mã localStorage.

## Tokens hiện có

| Token | Sáng | Tối | Dùng cho |
|---|---|---|---|
| `--bg` | `#f4f7fc` | `#081226` | Nền trang |
| `--surface` | `#ffffff` | `#101d36` | Thẻ/nội dung |
| `--surface-2` | `#edf3fb` | `#172642` | Nền phụ |
| `--ink` | `#101c3d` | `#f0f5ff` | Tiêu đề |
| `--tx` | `#263552` | `#d9e4fb` | Chữ chính |
| `--mut` | `#5c6c89` | `#9aaccb` | Chữ phụ |
| `--primary` | `#315cf5` | `#8ba4ff` | Liên kết/nút |
| `--danger` | `#dc4964` | `#ff8097` | Phản hồi lỗi |

Giữ palette và nhịp hiện có; chỉ thêm token nếu đo được trường hợp thiếu. Mục tiêu tương phản chữ thường 4.5:1 và chữ lớn 3:1 theo WCAG 2.2 AA.

## Thành phần và bố cục

- **Header:** tên tiếng Việt, icon SVG trang trí `aria-hidden=true`, không để glyph bị đọc lặp.
- **Điều hướng 5 mục:** icon trang trí + chữ; focus rõ; vùng tương tác mục tiêu 44 × 44 CSS px.
- **Chọn khối:** ba thẻ, số bài và mô tả chủ đề lấy từ catalog; giữ liên kết hiện có.
- **Tiếp tục học:** dữ liệu từ `tin10.v1`, `tin11.v1`, `tin12.v1` chỉ đọc; không sửa schema.
- **Danh sách bài:** nhóm theo `catalog.topics`; nhãn chủ đề chưa xác nhận được gom vào “Chủ đề chưa phân loại”; tìm kiếm và lọc trạng thái giữ nguyên.
- **Đọc bài:** nội dung trong vùng đọc có chiều rộng giới hạn; bảng và code có thể cuộn ngang trong khung riêng.
- **Luyện tập:** giữ nguyên logic; từng lựa chọn giữ focus rõ, phản hồi đúng/sai biểu đạt bằng chữ và dấu hiệu, không chỉ màu.
- **Trạng thái:** tải có vùng chờ; rỗng giải thích bước kế tiếp; lỗi cho thử lại hoặc chọn khối; dùng `role=status/alert` phù hợp.
- **Theme:** sáng/tối tương thích token, không dựa vào chuyển động; tôn trọng `prefers-reduced-motion`.

## Điều hướng

`Chọn khối → Tổng quan → Bài học → Ôn tập/Luyện tập → Tiến độ`

URL giữ nguyên: `course.html?grade=10|11|12#/...`.

## Quy tắc truy cập

- Điều khiển có tên truy cập được; SVG trang trí bị ẩn khỏi cây truy cập.
- Bàn phím có thứ tự focus hợp lý và vòng focus nhìn thấy.
- Không cuộn ngang toàn trang ở 360 px.
- Vùng chạm tối thiểu 44 × 44 CSS px cho điều khiển chính.
- Đúng/sai có chữ và biểu tượng, không chỉ dùng xanh/đỏ.
- Kiểm tra tương phản ở từng nền sáng và tối bằng giá trị runtime.
- Tôn trọng zoom trình duyệt, `prefers-reduced-motion`, và dùng CSS/JS có sẵn.

## Bằng chứng và kiểm thử

Workflow riêng `.github/workflows/ui-screenshots.yml` chỉ chạy khi PR nhắm nhánh dữ liệu hoặc được gọi thủ công; không triển khai website. Nó tạo ảnh theo kích thước chuẩn và tải artifact để xem xét. Các kết quả cần ghi trong `BAO_CAO_BANG_CHUNG_GIAO_DIEN.md`; phép đo DOM không thay thế thử bằng trình đọc màn hình.
