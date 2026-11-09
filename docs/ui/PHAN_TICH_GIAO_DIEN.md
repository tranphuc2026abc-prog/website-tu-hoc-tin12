# Thẩm định giao diện hiện trạng

Ngày kiểm tra trực tiếp: 09/11/2026. Bản chạy: https://tranphuc2026abc-prog.github.io/website-tu-hoc-tin12/  
Cơ sở thay đổi đề xuất: PR-1 `chuan-hoa/du-lieu` (đang chờ xem xét; chưa merge).

## Bằng chứng hiện có

- Mở trang chọn khối và khóa học Tin học 10 trên GitHub Pages bằng trình duyệt thật, cửa sổ hiển thị khoảng 1265 × 716 px.
- Trang chọn khối hiện 3 thẻ 10/11/12; khi trình duyệt có dữ liệu cũ, thẻ “Tiếp tục học · Khối 10” xuất hiện.
- Trang tổng quan khối 10 nêu 34 bài, 850 câu; main còn nhóm “CHỦ ĐỀ CHƯA PHÂN LOẠI” gồm 14 bài. PR-1 cập nhật nhãn trong `nguon/`; builder của PR-1 hết nhóm chưa phân loại.
- Điều hướng có 5 mục: Tổng quan, Bài học, Ôn tập, Luyện tập, Tiến độ.
- `course.html` có title động “Tự học Tin học 10”; header đổi thành Tin học 10. Hero vẫn có dòng “DIGITAL LEARNING HUB”.
- Mục đề tham khảo đã thu gọn thành “SẮP CÓ” và một dòng thông báo.
- `assets/css/style.css` có theme sáng/tối, `:focus-visible`, tokens màu và `prefers-reduced-motion`; danh sách bài có tìm kiếm/lọc, bài học liên kết ôn tập/luyện tập.
- Workflow E2E hiện có chạy qua HTTP và file; PR-1 bổ sung kiểm thử tiến độ cũ 13/13. Chưa đo giao diện ở ba viewport.
- Ảnh trang chủ được xem trong phiên trình duyệt nhưng chưa lưu được vào repository. Workflow mới chụp ảnh và tải artifact; chưa coi ảnh CI là có cho đến khi chạy xong.

## Chấm điểm hiện trạng

| Tiêu chí | Điểm / 5 | Căn cứ và giới hạn |
|---|---:|---|
| Cấu trúc thông tin và điều hướng | 4 | 3 khối ở trang đầu, 5 mục trong khóa; đường đi tới kho bài học/luyện tập rõ. |
| Bố cục và phân cấp thị giác | 4 | Thẻ khối lớn, màu nhận diện riêng, tiêu đề rõ; chưa đo các viewport nhỏ bằng Playwright. |
| Màu và tương phản | 4* | Tokens hiện tại: `--mut:#5c6c89`, chữ chính `#263552`, nền `#f4f7fc`; tỷ lệ runtime sẽ ghi sau CI. Điểm tạm, chưa chứng nhận WCAG. |
| Chữ và khả năng đọc | 4 | Chữ cơ sở 15.5 px, line-height 1.7; chưa đo chiều dài dòng ở 360 px. |
| Điện thoại | 3 | Có breakpoint; chưa có ảnh/đo thực tế 360 × 740 và 768 × 1024. |
| Trải nghiệm học | 4 | Bài, ôn tập, luyện tập và tiến độ liên kết; lượt tập tối đa 10 câu, có MCQ/đúng-sai/tự luận. |
| Truy cập | 3 | Có nhãn nav/tìm kiếm và focus-visible; cây truy cập hiện đọc cả glyph và chữ; chưa đo toàn bộ tên/vùng chạm/bàn phím. |
| Tải và lỗi | 3 | Trạng thái tải là dòng chữ; loader có hướng dẫn lỗi và nút tải lại/chọn khối. Chưa mô phỏng mạng chậm. |
| Nhất quán thương hiệu | 3 | Tên header tiếng Việt, nhưng hero còn “DIGITAL LEARNING HUB”; glyph icon lặp với SVG. |

## Kiểm chứng H1–H9

| Mã | Kết luận | Bằng chứng |
|---|---|---|
| H1 | **ĐÚNG một phần** | Header chọn khối dùng tiếng Việt; hero khóa học còn “DIGITAL LEARNING HUB”. |
| H2 | **SAI** | Trang chọn khối có thẻ tiếp tục khi tìm thấy dữ liệu `tin10.v1` hoặc khóa khác. PR-1 kiểm tra cả ba và trạng thái mới. |
| H3 | **SAI** | Mục đề tham khảo đã thu thành dòng “SẮP CÓ” dưới ba thẻ khối. |
| H4 | **ĐÚNG một phần** | Có SVG nhưng cây truy cập còn glyph ⌂ ▦ ◈ ⌘ ◴ cùng nhãn chữ; có khả năng đọc lặp. |
| H5 | **ĐÚNG một phần** | Tải dùng dòng đơn; lỗi có heading, hướng dẫn thử lại và liên kết chọn khối. |
| H6 | **SAI** | `course-loader.js` đặt document title/header theo khối, ví dụ “Tự học Tin học 10”/“TIN HỌC 10”. |
| H7 | **SAI** | Mặc định nền sáng; có nút đổi theme và CSS dark mode. Chưa nghiên cứu mỏi mắt khi đọc dài. |
| H8 | **ĐÚNG ở main hiện tại** | Main còn 14/34 bài khối 10 trong nhóm chưa phân loại. PR-1 gắn nhãn nguồn; builder đã hết nhóm này. Tìm kiếm/lọc trạng thái đang có. |
| H9 | **KHÔNG KẾT LUẬN ĐƯỢC toàn bộ** | Đã xác minh có 3 dạng câu hỏi, phản hồi, theme, tiến độ. Tương phản runtime, vùng chạm, bàn phím mọi trang, bảng/code cuộn riêng và các trạng thái còn chờ workflow. |

## Vấn đề theo mức ưu tiên

1. **Cao — đo trực tiếp màn hình điện thoại:** chưa có bằng chứng trước ở 360/768 px.
2. **Trung bình — tên truy cập lặp glyph và nhãn:** markup nav có ký tự và SVG cùng lúc.
3. **Trung bình — hero dùng tiếng Anh:** còn “DIGITAL LEARNING HUB”.
4. **Trung bình — phân nhóm bài khối 10:** main chưa nhận PR-1; cần xác nhận build của nhánh xếp chồng.
5. **Thấp — trạng thái chờ:** dòng tải gọn; trạng thái lỗi đã có hướng dẫn.

## Phạm vi và phần chưa kiểm chứng

Không thay đổi nội dung bài, câu hỏi, đáp án, chấm điểm, localStorage, Supabase hoặc triển khai Pages. Chưa thử trình đọc màn hình thật; kiểm tra tên accessible trong Playwright là kiểm tra DOM, không phải chứng nhận WCAG. Tương phản phải tính theo màu runtime từng thành phần và nền thực tế.
