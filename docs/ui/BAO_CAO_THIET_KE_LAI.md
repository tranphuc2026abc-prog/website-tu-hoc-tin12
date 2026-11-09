# Báo cáo thiết kế lại giao diện

## Tóm tắt

Đã khảo sát trang Pages và mã giao diện, sau đó cập nhật trên nhánh `ui/thiet-ke-lai-giao-dien`. Mục tiêu là làm rõ tên sản phẩm, đưa lối học tiếp lên trang chọn khối, làm gọn mục đang rà soát, cải thiện tương phản và trạng thái tải/lỗi. Không chủ động sửa dữ liệu học liệu, ngân hàng câu hỏi, logic chấm điểm, khóa/cấu trúc localStorage, Supabase hay workflow.

## Kết quả H1–H9

- H1 ĐÚNG: tên thương hiệu lẫn lộn; đã thống nhất phần header/hero được sửa thành “Tự học Tin học THPT”.
- H2 ĐÚNG một phần: trang chủ thiếu lối học tiếp; đã thêm thẻ đọc tiến độ cũ theo từng khối.
- H3 ĐÚNG: mục khóa nổi bật; đã thu thành dòng “Sắp có”.
- H4 ĐÚNG: nav dùng glyph; đã thay bằng SVG inline kèm nhãn.
- H5 ĐÚNG: tải/lỗi đơn giản; đã thêm khung tải, chỉ dẫn lỗi và nút thử lại.
- H6 ĐÚNG một phần: tiêu đề ban đầu chung, loader đổi sau khi tải; đã đặt tên document ngay khi bắt đầu nạp khối.
- H7 SAI: mặc định nền sáng và có chế độ tối; giữ nguyên.
- H8 ĐÚNG: nhóm chưa phân loại và nhãn học kỳ cố định; nhãn học kỳ hiện lấy khoảng từ catalog, các bài chưa phân loại vẫn giữ nguyên và có bộ lọc sẵn.
- H9 CHƯA KẾT LUẬN ĐƯỢC toàn bộ: đã sửa cặp chữ phụ và vùng thao tác; các kiểm tra thiết bị, bàn phím, mạng chậm và tất cả dạng câu hỏi còn chờ CI/trình duyệt.

## Thay đổi

- `index.html`: thẻ tiếp tục bài gần nhất từ localStorage hiện có; đổi tên thương hiệu; mục rà soát gọn hơn.
- `course.html`: thương hiệu, nav SVG, khung trạng thái tải.
- `assets/css/style.css`: tương phản, vùng tương tác, độ rộng bài, reduced motion, SVG/loading/error styles.
- `assets/css/multigrade.css`: thẻ tiếp tục học và mục rà soát.
- `assets/css/panels.css`: chữ trắng rõ hơn trên banner.
- `assets/js/course-loader.js`: tiêu đề theo khối ngay khi nạp và hướng dẫn lỗi rõ hơn.
- `assets/js/app.js`: khoảng học kỳ lấy trực tiếp từ catalog tương ứng.
- Tài liệu trong `docs/ui/` và mục giao diện README.

## Kiểm thử và bằng chứng

- Quan sát trình duyệt thật trên Pages: trang chọn khối, tổng quan khối 10, danh sách bài, bài B08, ôn tập, cấu hình luyện tập, tiến độ; cửa sổ khoảng 1265 × 716 px.
- Tính tương phản WCAG theo công thức sRGB: chữ phụ cũ 3.70:1 trên nền chính; màu mới 4.94:1. Nút tím mới 6.03:1 trên trắng.
- Kiểm tra tĩnh mã: các chế độ ôn tập, chọn loại câu hỏi, 10 câu/lượt, lưu localStorage và sao lưu/khôi phục có trong mã hiện tại.
- Build trên GitHub Actions `Validate and deploy Tin hoc 12` (run 125): bước xác thực/dựng dữ liệu ba khối và bản một tệp thành công; kiểm tra tĩnh portal/catalog thành công; E2E HTTP thành công; upload artifact Pages thành công. Bước deploy bị bỏ qua do đây là PR.
- GitHub Actions `Question bank E2E` (run 53): build nguồn thành công; E2E HTTP và file mode của `Tin12_MotFile.html` thành công.
- Kiểm tra cú pháp JavaScript bằng `new Function` với hai tệp sửa: hợp lệ. So sánh GitHub xác nhận catalog 10/11/12 giữ nguyên SHA; không có thay đổi trong `data/` hoặc `nguon/`.
- Không chạy build/E2E cục bộ do thư mục làm việc thiếu Git checkout đầy đủ, Python/py và Playwright; các kiểm thử trên do GitHub Actions thực hiện.
- Chưa lưu ảnh trước/sau: giao diện CUA xem được nhưng không xuất ảnh vào repo. Chưa đo trực tiếp viewport 360/768/1366 px, chạy bàn phím/đọc màn hình, mô phỏng mạng chậm, kiểm tra Lighthouse hoặc mọi trạng thái mọi câu hỏi.

## Dữ liệu và tương thích

Các thay đổi không đụng `data/` hoặc `nguon/`; thay đổi trạng thái tiến độ chỉ đọc ba khóa localStorage đã có. Logic điểm, tài khoản và cloud không được sửa. Bản một tệp `Tin12_MotFile.html` chưa được tái tạo cục bộ vì Python/build runner không có trong môi trường; CI có thể dựng để kiểm tra nhưng không có đường lấy artifact về cập nhật file đã theo dõi. Điều này cần được giải quyết trước khi xác nhận giao diện đồng nhất trên bản một tệp.

## Việc còn tồn tại

1. Lấy ảnh trước/sau ở ba kích thước và lưu vào `docs/ui/truoc` / `docs/ui/sau`.
2. Chạy và xem kết quả GitHub Actions trên PR; sửa lỗi build/E2E nếu có.
3. Xác minh trình đọc màn hình, bàn phím, dark mode, kéo-thả và sao lưu/khôi phục trực tiếp.
4. Dựng lại bản một tệp và so sánh trước khi xem giao diện hoàn tất trên mọi phiên bản.
5. Không merge hoặc triển khai chính thức trong PR này.
