# Thiết lập Supabase cho website Tự học Tin học 12

> Trạng thái: nền tảng cơ sở dữ liệu đã được chuẩn bị trong nhánh `feature/supabase-lms`. Website hiện tại **chưa tích hợp giao diện đăng nhập/đồng bộ**. Không bật sử dụng cho học sinh trước khi hoàn thành phần tích hợp và kiểm thử.

## 1. Tạo dự án

1. Truy cập https://supabase.com/ và tạo dự án mới.
2. Chọn khu vực lưu trữ phù hợp, đặt mật khẩu cơ sở dữ liệu mạnh và lưu ở nơi an toàn.
3. Không gửi mật khẩu database, secret key hoặc `service_role` key vào GitHub hay cuộc trò chuyện.
4. Trong Project Settings → API, lấy **Project URL** và **publishable key** (hoặc legacy anon key nếu dự án đang dùng kiểu khóa cũ). Đây là thông tin công khai dành cho trình duyệt; RLS vẫn là lớp bảo vệ bắt buộc.

## 2. Tạo cấu trúc dữ liệu và RLS

1. Mở SQL Editor trong Supabase.
2. Mở tệp `supabase/migrations/202610300001_initial_lms.sql` trong repository.
3. Sao chép toàn bộ nội dung, dán vào SQL Editor và chạy.
4. Kiểm tra các bảng `profiles`, `teacher_classes`, `lesson_progress`, `quiz_attempts`, `quiz_answers` đã được tạo và RLS đang bật.

Migration tạo tài khoản mới với vai trò `student` mặc định. Không có luồng tự đăng ký giáo viên và người dùng không được cấp quyền sửa vai trò hoặc lớp học từ trình duyệt.

## 3. Tạo và phân quyền giáo viên

Tạo tài khoản giáo viên trong Supabase Authentication → Users. Sau khi tài khoản được tạo, lấy UUID của tài khoản và chạy SQL trong SQL Editor:

```sql
update public.profiles
set role = 'teacher', display_name = 'Tên giáo viên'
where id = '<TEACHER_AUTH_USER_UUID>';

insert into public.teacher_classes (teacher_id, class_name)
values ('<TEACHER_AUTH_USER_UUID>', '12A1');
```

Thay các giá trị minh họa bằng UUID và tên lớp thực tế. Chỉ quản trị dự án Supabase mới thực hiện bước phân quyền này.

## 4. Tạo tài khoản học sinh và gán lớp

Tạo từng tài khoản học sinh trong Authentication → Users. Nếu dùng email bí danh nội bộ, cần bảo đảm nhà trường quản lý được danh sách đối chiếu tài khoản với học sinh. Không dùng chung một tài khoản cho nhiều em.

Gán tên hiển thị và lớp cho từng tài khoản bằng SQL Editor:

```sql
update public.profiles
set display_name = 'Học sinh thử nghiệm',
    class_name = '12A1'
where id = '<STUDENT_AUTH_USER_UUID>';
```

Không đưa danh sách UUID hoặc dữ liệu cá nhân thật của học sinh vào repository công khai.

## 5. Cấu hình website

Tệp `assets/js/supabase-config.js` hiện chỉ chứa giá trị rỗng. Khi phần tích hợp client được hoàn tất, điền Project URL và publishable/anon key vào tệp này.

- URL dự án: ví dụ `https://your-project.supabase.co`.
- Publishable/anon key: khóa công khai của dự án.
- Tuyệt đối không dùng `service_role`, secret key hoặc mật khẩu database trong JavaScript.

Không bật đồng bộ trong bản production trước khi phần tích hợp được kiểm thử. Không commit khóa riêng tư; khóa publishable/anon được thiết kế để xuất hiện ở trình duyệt nhưng chỉ an toàn khi RLS được cấu hình đúng.

## 6. Mô hình dữ liệu và giới hạn tin cậy

- `profiles`: hồ sơ tối thiểu, vai trò và lớp.
- `teacher_classes`: lớp mà giáo viên được phân công.
- `lesson_progress`: trạng thái học tập hiện tại theo từng bài.
- `quiz_attempts`: lịch sử lượt làm bài, chống trùng bằng `(user_id, client_attempt_id)`.
- `quiz_answers`: câu trả lời theo từng câu, hỗ trợ đáp án JSON cho nhiều dạng câu hỏi.

RLS giới hạn học sinh vào dữ liệu của chính mình; giáo viên chỉ đọc được học sinh thuộc lớp đã được phân công. Người dùng phía trình duyệt không được tự sửa vai trò/lớp, cũng không được cập nhật hoặc xóa lịch sử bài đã nộp.

**Lưu ý quan trọng về điểm số:** trong kiến trúc HTML/JavaScript hiện tại, đáp án và thuật toán chấm điểm nằm ở trình duyệt. Vì vậy dữ liệu điểm do client gửi lên chỉ là kết quả ghi nhận từ ứng dụng, chưa phải điểm thi có thể chống gian lận ở cấp độ máy chủ. Không dùng dữ liệu này làm điểm chính thức. Muốn có điểm đáng tin cậy cần chuyển đáp án/chấm điểm sang RPC hoặc backend tin cậy và rà soát lại mô hình công khai ngân hàng câu hỏi.

## 7. Sao lưu và khôi phục

- Dùng chức năng sao lưu JSON hiện có trước khi thử nghiệm.
- Sao lưu cơ sở dữ liệu Supabase theo công cụ và chính sách của gói dịch vụ đang sử dụng.
- Thử khôi phục trên môi trường thử nghiệm trước khi thao tác với dữ liệu thật.
- Không xóa `localStorage` hoặc khóa `tin12.v1` khi chưa có quy trình di chuyển được kiểm thử.

## 8. Trạng thái triển khai

Migration và tệp cấu hình mẫu là phần chuẩn bị nền tảng. Các chức năng đăng nhập, đồng bộ offline-first, nhập dữ liệu cục bộ, dashboard giáo viên và xuất CSV chưa được coi là hoàn thành chỉ vì các bảng đã được tạo. Chúng phải được tích hợp vào ứng dụng, kiểm thử với dự án Supabase thực tế và kiểm tra RLS bằng ít nhất hai tài khoản học sinh cùng một tài khoản giáo viên.
