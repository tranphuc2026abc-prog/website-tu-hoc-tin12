# Thẩm định giao diện và bằng chứng

Ngày kiểm tra: 09/11/2026. Bản chạy thật: https://tranphuc2026abc-prog.github.io/website-tu-hoc-tin12/  
Nhánh chụp ảnh: `chuan-hoa/giao-dien-bang-chung`, xếp trên PR-1 #28. Chưa merge hay triển khai.

## Phạm vi và bằng chứng

- Trình duyệt thật trên GitHub Pages xác nhận trang chọn khối, thẻ tiếp tục theo tiến độ đang có, tổng quan và danh sách 34 bài khối 10. Trước khi PR-1 được áp dụng, 14 bài hiện trong nhóm “CHỦ ĐỀ CHƯA PHÂN LOẠI”.
- Playwright dựng dữ liệu từ `nguon/`, chạy trên máy chủ tĩnh nội bộ và chụp 81 ảnh: chọn khối, tổng quan, danh sách bài, bài học, ôn tập, cấu hình luyện tập, tiến độ ở 360 × 740, 768 × 1024, 1366 × 768; thêm theme tối, ba dạng câu hỏi, trạng thái rỗng, tải và lỗi ở điện thoại.
- [Ảnh trước — artifact GitHub Actions, run #8](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42548475155) (81 ảnh; trước các sửa giao diện).
- [Ảnh sau — artifact GitHub Actions, run #14](https://github.com/tranphuc2026abc-prog/website-tu-hoc-tin12/actions/runs/42549392559) (81 ảnh và báo cáo số đo).
- Artifact được giữ 30 ngày. Môi trường kết nối không chuyển được ZIP artifact vào cây tệp để commit ảnh PNG dưới `docs/ui/anh/`; vì vậy ảnh đang nằm trong artifact CI, chưa nằm trong lịch sử repository.
- Kiểm tra DOM ở 360 px: trang chọn khối và tổng quan từng khối không tràn ngang; không tìm thấy điều khiển thiếu tên; sau sửa không còn điều khiển nhỏ hơn 44 × 44 px trên các màn này; focus nhìn thấy ở trang chủ và ba trang khóa học.
- Tính từ màu token CSS theo công thức WCAG `(Lcao + 0,05) / (Lthấp + 0,05)`: chữ phụ sáng `#5c6c89` trên `--bg #f4f7fc` là 4,94:1, trên `--surface #fff` là 5,30:1; chữ chính `#263552` lần lượt 11,41:1 và 12,26:1. Ở theme tối, chữ phụ `#9aaccb` lần lượt 8,12:1 trên `#081226`, 7,30:1 trên `#101d36`; chữ chính `#d9e4fb` lần lượt 14,62:1 và 13,14:1. Đây là cặp màu token phẳng, không phải kiểm định mọi nội dung, ảnh nền hay gradient.
- Workflow chụp ảnh không kiểm tra bằng trình đọc màn hình thật. Kiểm tra bàn phím mới xác nhận focus đầu tiên ở trang chủ và trang khóa học, không bao phủ toàn bộ thứ tự focus mọi màn.
- PR-1 có kiểm tra tương thích tiến độ: 13/13 trường hợp, gồm khóa cũ của cả ba khối, học sinh mới, JSON hỏng và localStorage bị chặn.

## Chấm điểm

| Tiêu chí | Điểm / 5 | Bằng chứng và giới hạn |
|---|---:|---|
| Cấu trúc thông tin và điều hướng | 4 | Chọn khối, 5 mục điều hướng và các đường đến bài/luyện tập; tên điều hướng đã bỏ glyph lặp. |
| Bố cục và phân cấp thị giác | 4 | 81 ảnh ba viewport; ảnh cho thấy các màn chính; chưa có đánh giá người dùng đại diện. |
| Màu và tương phản | 4 | Các cặp token chữ/nền phẳng nêu trên đạt AA; chưa kiểm đầy đủ gradient, trạng thái đúng/sai và mọi component. |
| Chữ và khả năng đọc | 4 | Chữ cơ sở 15 px trong trình duyệt chạy kiểm tra; chưa có thử nghiệm đọc bài dài với học sinh. |
| Điện thoại | 4 | Không tràn ngang ở 360 px trên trang chọn khối/tổng quan; vùng chạm đo được đạt 44 px sau sửa. |
| Trải nghiệm học | 4 | Bài, ôn tập, luyện tập theo ba dạng và tiến độ được chụp; không đo hiệu quả học tập. |
| Truy cập | 4 | Điều hướng có tên, không còn glyph lặp, focus nhìn thấy ở màn đã đo; chưa thử screen reader và chưa rà mọi trang bằng bàn phím. |
| Tải và lỗi | 3 | Ảnh trạng thái tải/lỗi; trang tải còn gọn, lỗi có hướng dẫn tải lại/chọn khối. |
| Nhất quán thương hiệu | 4 | Các nhãn lộ trình tiếng Anh đã chuyển sang tiếng Việt; tên khóa động theo khối. |

## Kiểm chứng H1–H9

| Mã | Kết luận | Bằng chứng |
|---|---|---|
| H1 | **ĐÚNG một phần; đã xử lý phần nhìn thấy** | Hero trước đây có “DIGITAL LEARNING HUB” và “LEARNING ROADMAP”; nhánh này chuyển nhãn đó sang tiếng Việt. |
| H2 | **SAI** | Thẻ “Tiếp tục học” đã có khi tồn tại tiến độ; kiểm tra mới xác nhận link đúng khối/bài cho cả 10, 11, 12 và vắng mặt với học sinh mới. Kiểm tra tương thích cũ đạt 13/13 ở PR-1. |
| H3 | **SAI** | Mục ôn thi đã thu gọn thành dòng “SẮP CÓ” trên giao diện đang chạy. |
| H4 | **ĐÚNG; đã sửa** | Cây truy cập trước đây đọc glyph và nhãn chữ lặp. Bản sửa bỏ glyph ký tự ở điều hướng, giữ SVG trang trí có `aria-hidden`; Playwright xác nhận không còn các glyph đó trong nhãn. |
| H5 | **ĐÚNG một phần** | Trang chờ dùng khung trạng thái tải; lỗi có hướng dẫn thử lại và chọn khối. Chưa thiết kế lại thành bộ khung chờ. |
| H6 | **SAI** | Tiêu đề khóa học và document title lấy đúng khối, ví dụ “Tự học Tin học 10”. |
| H7 | **SAI** | Theme sáng là mặc định và có chế độ tối. Không có dữ liệu người dùng về mỏi mắt khi đọc lâu. |
| H8 | **ĐÚNG trên Pages/main trước PR-1; được xử lý trong nguồn của PR-1** | Trình duyệt Pages trước thay đổi cho thấy 14/34 bài khối 10 trong nhóm chưa phân loại. PR-1 gán chủ đề độ tin cậy cao trong `nguon/`; build của nhánh PR-1 hết nhóm. Bản chạy chính thức chỉ đổi sau khi chủ sản phẩm xem xét và merge theo quy trình. |
| H9 | **ĐÚNG một phần** | Có 81 ảnh, 16 kiểm tra DOM/keyboard vượt qua, không có điều khiển thiếu tên, mục tiêu chạm nhỏ, hoặc cảnh báo tương phản trong mẫu chữ nền phẳng. Chưa kết luận được screen reader, toàn bộ bàn phím, mọi màu trạng thái, hành vi mạng yếu và mọi kiểu câu hỏi sau khi nộp/chấm. |

## Thay đổi giao diện đã chọn

1. Tăng mục tiêu chạm logo và nút theme lên ít nhất 44 px; tăng ô bài trên điện thoại từ 39 lên 44 px.
2. Bỏ ký tự glyph đứng trước biểu tượng SVG ở 5 mục điều hướng để tên không bị đọc lặp.
3. Việt hóa nhãn thương hiệu phụ trong hero và bản đồ bài học.

Các thay đổi giữ nguyên route, dữ liệu, mã bài/câu hỏi, localStorage, Supabase và logic chấm điểm. `git compare` PR-2 với PR-1 không có tệp `data/` hoặc `nguon/` thay đổi.

## Vấn đề còn lại

- Ảnh có thể xem ở artifact trước/sau; chưa lưu PNG trong repository.
- Nhóm “Chủ đề chưa phân loại” không còn xuất hiện sau khi build nhánh có phân loại của PR-1; chưa có ảnh kiểm thử riêng cho fallback này.
- Cần kiểm tra screen reader, bàn phím qua toàn bộ các màn, tương phản gradient/trạng thái đúng sai, bảng và khối mã trên màn nhỏ.
- Cấu hình Supabase, LICENSE và nội dung nghi vấn nằm ngoài phạm vi PR giao diện; xem báo cáo dữ liệu/README.
