# Thiết lập Supabase cho website Tự học Tin học 12

## Trạng thái triển khai
- Dự án Supabase `tin12-lms` đã được kết nối và đang hoạt động.
- Đã áp dụng hai migration: `initial_lms_schema` và `optimize_rls_auth_uid`.
- Đã tạo 5 bảng: `profiles`, `teacher_classes`, `lesson_progress`, `quiz_attempts`, `quiz_answers`; RLS bật trên cả 5 bảng.
- Đã cài trigger tự tạo hồ sơ khi đăng ký tài khoản.
- Security Advisor hiện không có cảnh báo. Performance Advisor không còn cảnh báo RLS; chỉ còn thông tin các index mới chưa được sử dụng (bình thường khi chưa có tải thực tế).
- Website có giao diện đăng nhập/tạo tài khoản và đồng bộ tiến độ 28 bài học thủ công. Chưa kiểm thử end-to-end bằng tài khoản học sinh/giáo viên thật.

## 1. Cấu hình kết nối
Cấu hình trình duyệt nằm trong `assets/js/supabase-config.js` gồm Project URL và Publishable key. Đây là khóa công khai dành cho client; tuyệt đối không đưa service_role/secret key hoặc mật khẩu cơ sở dữ liệu vào repository.

## 2. Migration
Hai tệp migration được lưu trong `supabase/migrations/`. Cơ sở dữ liệu dự án đã áp dụng các thay đổi tương ứng. Không chạy lại thủ công trong SQL Editor nếu không có kế hoạch migration rõ ràng.

## 3. Xác nhận email
Trong **Authentication → Providers → Email**, kiểm tra thiết lập xác nhận email. Nếu bật, người dùng phải mở email xác nhận trước khi đăng nhập. Khuyến nghị giữ xác nhận email bật khi triển khai chính thức.

## 4. Tạo tài khoản và phân quyền
- Học sinh tạo tài khoản bằng chức năng trên website; tài khoản mới luôn có vai trò học sinh.
- Tạo tài khoản giáo viên bằng Auth, sau đó quản trị viên dự án đổi vai trò và gán lớp trong SQL Editor.
- Gán lớp cho học sinh và thêm lớp tương ứng vào `teacher_classes` của giáo viên.
- Không dùng chung một tài khoản cho nhiều học sinh. Không đưa UUID hoặc dữ liệu cá nhân học sinh vào repository công khai.

Ví dụ thao tác quản trị (thay UUID bằng ID thực tế lấy từ Authentication → Users):
```sql
update public.profiles set role = 'teacher' where id = '<TEACHER_AUTH_USER_UUID>';
update public.profiles set class_name = '12A1' where id = '<STUDENT_AUTH_USER_UUID>';
insert into public.teacher_classes (teacher_id, class_name)
values ('<TEACHER_AUTH_USER_UUID>', '12A1');
```

## 5. Đăng nhập và đồng bộ
1. Mở website qua GitHub Pages hoặc máy chủ web HTTPS.
2. Chọn **Đăng nhập**, nhập email và mật khẩu.
3. Học sinh mới chọn **Tạo tài khoản học sinh**.
4. Xác nhận email nếu dự án yêu cầu, sau đó đăng nhập.
5. Chọn **Đồng bộ tiến độ** để đồng bộ tiến độ 28 bài giữa thiết bị và Supabase.

Quy tắc hiện tại: đối chiếu theo thời điểm truy cập gần nhất. Bản máy chủ mới hơn sẽ được tải về; bản trên thiết bị mới hơn sẽ được gửi lên. Dữ liệu cục bộ với khóa `tin12.v1` vẫn được giữ lại.

## 6. Phạm vi hiện tại và giới hạn
Hiện chỉ đồng bộ trạng thái bài học, 7 mục tiến độ, đánh dấu cần ôn lại và thời điểm truy cập. Người dùng cần bấm đồng bộ thủ công. Lịch sử kiểm tra, từng câu trả lời, dashboard giáo viên, xuất CSV và đồng bộ nền tự động chưa được triển khai.

Điểm số và thuật toán chấm hiện nằm ở trình duyệt; dữ liệu điểm do trình duyệt gửi lên không thể chống gian lận ở cấp máy chủ và không được dùng làm điểm chính thức.

## 7. Bảo vệ dữ liệu và kiểm thử
- RLS giới hạn học sinh vào dữ liệu của chính mình; giáo viên chỉ đọc được học sinh thuộc lớp được phân công.
- Tài khoản học sinh không được tự thay đổi vai trò hoặc lớp.
- Trước khi triển khai chính thức, phải kiểm tra bằng ít nhất hai tài khoản học sinh và một tài khoản giáo viên: không đọc chéo dữ liệu, không tự nâng quyền, đồng bộ hai thiết bị, đăng xuất/đăng nhập và tiếp tục học offline.
- Sao lưu tiến độ bằng **Tiến độ → Sao lưu tiến độ (JSON)** trước khi thử nghiệm. Không xóa dữ liệu trình duyệt hoặc khóa `tin12.v1` khi chưa sao lưu.

Chưa triển khai diện rộng trước khi hoàn tất kiểm thử RLS thực tế với tài khoản thử nghiệm.
