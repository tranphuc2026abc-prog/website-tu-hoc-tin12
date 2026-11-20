# Thiết kế giao diện sau kiểm chứng

Tài liệu mô tả các quyết định được áp dụng trong PR-2. Mục tiêu là dùng rõ ràng trên điện thoại mà không đổi luồng học hoặc cấu trúc dữ liệu.

## Quyết định thực hiện

- Giữ tên chính “Tự học Tin học THPT” và tiêu đề khóa học theo khối.
- Dùng một nhãn chữ cho mỗi liên kết điều hướng; SVG chỉ trang trí và bị ẩn trong cây truy cập.
- Đặt kích thước logo tương tác, nút theme và ô bài trên điện thoại tối thiểu 44 × 44 CSS px.
- Dịch các nhãn thương hiệu phụ còn bằng tiếng Anh sang tiếng Việt.
- Giữ nguyên URL `course.html?grade=10|11|12#/...`, tiến độ, câu hỏi, đáp án, chấm điểm và theme hiện có.
- Không thêm thư viện, phông chữ, CDN, ảnh tải mạng hay bước build mới.

## Tokens màu và phép tính tương phản

Token CSS đang dùng:

| Token | Sáng | Tối | Vai trò |
|---|---|---|---|
| `--bg` | `#f4f7fc` | `#081226` | Nền trang |
| `--surface` | `#ffffff` | `#101d36` | Nền thẻ |
| `--ink` | `#101c3d` | `#f0f5ff` | Tiêu đề |
| `--tx` | `#263552` | `#d9e4fb` | Chữ chính |
| `--mut` | `#5c6c89` | `#9aaccb` | Chữ phụ |
| `--primary` | `#315cf5` | `#8ba4ff` | Liên kết và nút |

Tỷ lệ được tính từ giá trị HEX bằng công thức WCAG: `(L1 + 0,05) / (L2 + 0,05)`, với L1 là độ chói cao hơn. Các cặp chữ trên `--bg` / `--surface`:

| Theme | Chữ | Trên nền trang | Trên thẻ |
|---|---|---:|---:|
| Sáng | `--ink` | 15,58:1 | 16,73:1 |
| Sáng | `--tx` | 11,41:1 | 12,26:1 |
| Sáng | `--mut` | 4,94:1 | 5,30:1 |
| Sáng | `--primary` | 4,91:1 | 5,28:1 |
| Tối | `--ink` | 17,08:1 | 15,36:1 |
| Tối | `--tx` | 14,62:1 | 13,14:1 |
| Tối | `--mut` | 8,12:1 | 7,30:1 |
| Tối | `--primary` | 7,87:1 | 7,08:1 |

Các con số này áp dụng cho token màu phẳng; gradient, ảnh, nội dung đúng/sai và từng trạng thái cần kiểm riêng. Đây không phải chứng nhận toàn bộ giao diện WCAG.

## Thành phần và bố cục đang có

- **Header:** tên khối, điều hướng 5 mục, tìm kiếm và nút đổi theme. Nhãn là chữ; SVG không được đọc thành nội dung.
- **Chọn khối:** ba thẻ theo catalog; có thẻ tiếp tục khi dữ liệu tiến độ hợp lệ.
- **Tổng quan:** mục tiêu bắt đầu/tiếp tục, tiến độ và lối tắt đến bài, ôn tập, luyện tập.
- **Danh sách bài:** dùng chủ đề từ catalog, trạng thái, tìm kiếm và lọc có sẵn. Nhánh PR-1 đã phân loại các mục tin cậy cao trong nguồn.
- **Bài học:** giữ nguyên nội dung và các phần kiến thức, liên kết luyện tập/ôn tập hiện có.
- **Luyện tập:** giữ nguyên ba dạng câu hỏi và hành vi chấm điểm. PR-2 chỉ ghi nhận ảnh giao diện.
- **Tiến độ:** giữ nguyên cơ chế localStorage, xuất/nhập JSON và lịch sử.
- **Tải/lỗi:** có thông báo tải; lỗi cho tải lại khối hoặc chọn khối khác.
- **Chuyển động:** CSS hiện tôn trọng `prefers-reduced-motion`.

## Hướng kiểm tra

Workflow `.github/workflows/ui-screenshots.yml` chạy kiểm thử tương thích, E2E HTTP/file và chụp 81 ảnh ở ba kích thước. Kết quả và các giới hạn được ghi tại [báo cáo bằng chứng](BAO_CAO_BANG_CHUNG_GIAO_DIEN.md). Artifact ảnh được lưu ở [run trước](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42548475155) và [run sau](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42549392559); artifact hết hạn sau 30 ngày, ảnh chưa commit thành PNG trong repository.

Các phép đo chưa thay thế thử nghiệm với học sinh, trình đọc màn hình hoặc kiểm tra thủ công từng component. Cần tiếp tục kiểm tra bảng, mã nguồn, phản hồi đúng/sai và trạng thái mạng yếu.
