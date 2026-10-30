# Tự học Tin học 12 – Kết nối tri thức với cuộc sống (bản offline)

## Cách dùng
- **Máy tính (Windows/macOS/Linux):** giải nén thư mục, bấm đúp `index.html` (Chrome hoặc Edge). Không cần cài đặt, không cần Internet.
- **Điện thoại:** chép tệp `Tin12_MotFile.html` vào máy, mở bằng Chrome. Đây là bản gộp toàn bộ website trong một tệp.
- Tiến độ lưu trong trình duyệt của thiết bị. Mỗi thiết bị/trình duyệt có dữ liệu riêng, **không đồng bộ**. Dùng *Tiến độ → Sao lưu tiến độ* để chuyển sang máy khác.
- Lưu ý: đổi trình duyệt, xóa dữ liệu duyệt web hoặc chép `index.html` sang vị trí khác có thể làm tiến độ không còn; hãy sao lưu định kỳ.

## Cấu trúc
- `index.html`, `assets/css`, `assets/js/app.js`: giao diện và logic.
- `data/catalog.js`, `data/lessons/*.js` (28 bài), `data/questions/*.js`: dữ liệu sinh tự động từ hồ sơ nguồn.
- `nguon/`: hồ sơ nguồn (CSV + 4 tệp Markdown).
- `scripts/build_data.py`: sinh dữ liệu và kiểm tra (đủ 28 bài, đủ 7 mục, đáp án hợp lệ, quan hệ bài có đích tồn tại).
- `scripts/build_single.py`: tạo `Tin12_MotFile.html`.
- `tests/e2e.js`: kiểm thử tự động bằng Playwright (`node tests/e2e.js file`).

## Cập nhật nội dung
1. Sửa các tệp trong `nguon/` (giữ nguyên định dạng hiện có).
2. Chạy `python scripts/build_data.py nguon`, sau đó `python scripts/build_single.py`.
3. Đọc phần “Cần rà soát” in ra để biết dữ liệu nào cần giáo viên kiểm tra.


## Nâng cấp quản lý tiến trình trực tuyến (đang triển khai)

- Thiết kế cơ sở dữ liệu Supabase và chính sách RLS: `supabase/migrations/202610300001_initial_lms.sql`.
- Hướng dẫn tạo dự án, phân quyền giáo viên/học sinh và kiểm tra cấu hình: `docs/SUPABASE_SETUP.md`.
- Tệp cấu hình trình duyệt: `assets/js/supabase-config.js` (đang để trống; chưa kết nối dịch vụ).
- Nhánh phát triển: `feature/supabase-lms`.

**Lưu ý:** đây mới là phần nền tảng cơ sở dữ liệu và tài liệu cấu hình. Giao diện đăng nhập, đồng bộ tiến trình, hàng đợi offline, di chuyển dữ liệu `tin12.v1`, trang giáo viên và xuất CSV chưa được tích hợp/kiểm thử. Website hiện tại vẫn tiếp tục dùng cơ chế lưu cục bộ như trước.
