# Thiết lập Supabase cho website Tự học Tin học 12

## Trạng thái
Nhánh `feature/supabase-lms` đã được cấu hình Project URL và Publishable key, có giao diện đăng nhập/tạo tài khoản và chức năng đồng bộ tiến độ bài học thủ công. Chưa chạy migration trên dự án thật và chưa kiểm thử RLS với các tài khoản thật.

## 1. Chạy migration trước khi đăng ký
1. Mở Supabase Dashboard của dự án.
2. Chọn **SQL Editor** → **New query**.
3. Mở tệp `supabase/migrations/202610300001_initial_lms.sql` trên GitHub.
4. Sao chép toàn bộ nội dung, dán vào SQL Editor và nhấn **Run**.
5. Mở **Table Editor**, xác nhận có 5 bảng: `profiles`, `teacher_classes`, `lesson_progress`, `quiz_attempts`, `quiz_answers`.
6. Kiểm tra RLS đã bật trên cả 5 bảng.

Phải chạy migration trước khi tạo tài khoản vì migration cài trigger tự tạo hồ sơ người dùng.

## 2. Xác nhận email
Trong **Authentication → Providers → Email**, kiểm tra thiết lập xác nhận email. Nếu bật, người dùng phải mở email xác nhận trước khi đăng nhập. Khuyến nghị giữ xác nhận email bật khi triển khai chính thức.

## 3. Tạo tài khoản và phân quyền
- Tạo tài khoản giáo viên trong **Authentication → Users**.
- Tài khoản mới đăng ký từ website luôn có vai trò học sinh.
- Quản trị viên dự án dùng SQL Editor để đổi vai trò giáo viên và gán lớp cho giáo viên; đồng thời gán lớp cho học sinh.
- Không dùng chung một tài khoản cho nhiều học sinh. Không đưa UUID hoặc dữ liệu cá nhân học sinh vào repository công khai.

## 4. Đăng nhập và đồng bộ
1. Mở website qua GitHub Pages hoặc máy chủ web HTTPS.
2. Chọn **Đăng nhập**, nhập email và mật khẩu.
3. Học sinh mới chọn **Tạo tài khoản học sinh**.
4. Xác nhận email nếu dự án yêu cầu, sau đó đăng nhập.
5. Chọn **Đồng bộ tiến độ** để đồng bộ tiến độ 28 bài giữa thiết bị và Supabase.

Quy tắc hiện tại: đối chiếu theo thời điểm truy cập gần nhất. Bản máy chủ mới hơn sẽ được tải về; bản trên thiết bị mới hơn sẽ được gửi lên. Dữ liệu cục bộ với khóa `tin12.v1` vẫn được giữ lại.

## 5. Phạm vi hiện tại và giới hạn
Hiện chỉ đồng bộ trạng thái bài học, 7 mục tiến độ, đánh dấu cần ôn lại và thời điểm truy cập. Người dùng cần bấm đồng bộ thủ công. Lịch sử kiểm tra, từng câu trả lời, dashboard giáo viên, xuất CSV và đồng bộ nền tự động chưa được triển khai.

Điểm số và thuật toán chấm hiện nằm ở trình duyệt; dữ liệu điểm do trình duyệt gửi lên không thể chống gian lận ở cấp máy chủ và không được dùng làm điểm chính thức.

## 6. Bảo vệ dữ liệu và kiểm thử
- RLS giới hạn học sinh vào dữ liệu của chính mình; giáo viên chỉ đọc được học sinh thuộc lớp được phân công.
- Tài khoản học sinh không được tự thay đổi vai trò hoặc lớp.
- Trước khi triển khai chính thức, phải kiểm tra bằng ít nhất hai tài khoản học sinh và một tài khoản giáo viên: không đọc chéo dữ liệu, không tự nâng quyền, đồng bộ hai thiết bị, đăng xuất/đăng nhập và tiếp tục học offline.
- Sao lưu tiến độ bằng **Tiến độ → Sao lưu tiến độ (JSON)** trước khi thử nghiệm. Không xóa dữ liệu trình duyệt hoặc khóa `tin12.v1` khi chưa sao lưu.

Không triển khai cho toàn trường trước khi chạy migration và kiểm thử RLS thực tế.
