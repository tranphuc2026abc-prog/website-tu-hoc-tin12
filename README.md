# Tự học Tin học THPT – bản offline

## Cách dùng
- **Máy tính (Windows/macOS/Linux):** giải nén thư mục, bấm đúp `index.html` (Chrome hoặc Edge). Không cần cài đặt, không cần Internet.
- **Điện thoại:** dùng `index.html` cùng thư mục website để học cả ba khối. `Tin12_MotFile.html` là bản gộp riêng của khối 12.
- Tiến độ lưu trong trình duyệt của thiết bị. Mỗi thiết bị/trình duyệt có dữ liệu riêng, **không đồng bộ**. Dùng *Tiến độ → Sao lưu tiến độ* để chuyển sang máy khác.
- Lưu ý: đổi trình duyệt, xóa dữ liệu duyệt web hoặc chép `index.html` sang vị trí khác có thể làm tiến độ không còn; hãy sao lưu định kỳ.

## Cấu trúc
- `index.html`: màn hình chọn khối; `course.html`: lớp học dùng chung; `assets/css`, `assets/js`: giao diện và logic.
- `data/catalog.js` và `data/catalog-10.js`, `data/catalog-11.js`; `data/lessons/*.js`, `data/questions/*.js`: dữ liệu dùng chung, mã bài có tiền tố theo khối.
- `nguon/`: lưu học liệu khối 10 (34 bài), khối 11 (31 bài) và nguồn chuẩn hóa khối 12 (28 bài).
- `scripts/build_all_grades.py`: gọi bộ dựng khối 12 hiện tại và `scripts/build_multigrade.py` để dựng khối 10, 11 từ Markdown/JSON trong `nguon/khoi-10/` và `nguon/khoi-11/`.
- `scripts/build_single.py`: gộp đúng 28 bài, ngân hàng câu hỏi, CSS và các script giao diện vào `Tin12_MotFile.html`.
- `Tin12_MotFile.html`: bản đóng gói một tệp của khối 12; bản nhiều khối dùng `index.html` và `course.html`.

## Sinh đề ngẫu nhiên theo lượt học

- Khi học sinh bắt đầu luyện tập, website chọn ngẫu nhiên câu hỏi trong phạm vi bài/chủ đề đã chọn.
- Mỗi phạm vi có chu kỳ ghi nhớ câu đã xuất hiện; lượt tiếp theo ưu tiên câu chưa làm. Khi dùng hết ngân hàng, hệ thống tự mở chu kỳ mới.
- Mỗi bài khối 10 và 11 có 25 câu từ ngân hàng riêng của khối; khối 12 giữ 700 câu nguồn và các câu chỉ có trên website. Mỗi lượt lấy tối đa 10 câu; nếu bộ lọc chọn ít hơn 10 câu phù hợp thì lượt đó dùng tất cả câu phù hợp.
- Lịch sử câu đã xuất hiện được lưu trong dữ liệu cục bộ của từng hồ sơ trình duyệt/tài khoản trên thiết bị. Hiện cơ chế này chưa đồng bộ giữa các thiết bị qua Supabase.
- Ngân hàng chuẩn được đọc từ khối 10/11 tại `nguon/khoi-10/` và `nguon/khoi-11/`, khối 12 tại `nguon/ngan-hang-cau-hoi/`. Khi dựng, mỗi khối chỉ nạp đúng danh mục và ngân hàng của mình.

## Cập nhật nội dung
1. Cập nhật nguồn trong `nguon/` theo định dạng của từng khối.
2. Chạy `python scripts/build_all_grades.py nguon`.
3. Với bản một tệp khối 12, chạy tiếp `python scripts/build_single.py`.
4. Kiểm tra báo cáo và mở `index.html` để chọn khối.


## Nâng cấp quản lý tiến trình trực tuyến (đang triển khai)

- Thiết kế cơ sở dữ liệu Supabase và chính sách RLS: `supabase/migrations/202610300001_initial_lms.sql`.
- Hướng dẫn tạo dự án, phân quyền giáo viên/học sinh và kiểm tra cấu hình: `docs/SUPABASE_SETUP.md`.
- Tệp cấu hình trình duyệt: `assets/js/supabase-config.js` (đang để trống; chưa kết nối dịch vụ).
- Nhánh phát triển: `feature/supabase-lms`.

**Lưu ý:** nhánh `feature/student-accounts-teacher-dashboard` đang triển khai giao diện đăng nhập, vùng lưu riêng theo tài khoản, đồng bộ tiến độ tự động, dashboard giáo viên, cấp tài khoản học sinh và xuất CSV. Cần kiểm thử end-to-end bằng tài khoản giáo viên/học sinh trước khi hợp nhất vào `main`.

## Đăng nhập và đồng bộ Supabase (nhánh thử nghiệm)

Nhánh `feature/supabase-lms` bổ sung cấu hình Supabase, giao diện đăng nhập/tạo tài khoản học sinh và đồng bộ tiến độ 28 bài học thủ công. Trước khi dùng, cần chạy migration trong `supabase/migrations/202610300001_initial_lms.sql` theo hướng dẫn tại `docs/SUPABASE_SETUP.md`.

**Chưa hoàn thành:** đồng bộ lịch sử kiểm tra/câu trả lời, dashboard giáo viên, xuất CSV và kiểm thử RLS trên dự án thực tế. Không dùng điểm từ trình duyệt làm điểm chính thức. Nhánh `main` vẫn giữ phiên bản ổn định trước khi tích hợp Supabase.
