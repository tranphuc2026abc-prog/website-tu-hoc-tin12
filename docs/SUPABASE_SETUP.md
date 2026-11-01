# Thiết lập Supabase cho website Tự học Tin học 12

## Trạng thái triển khai
- Dự án Supabase `tin12-lms` đã được kết nối và đang hoạt động.
- Đã áp dụng hai migration: `initial_lms_schema` và `optimize_rls_auth_uid`.
- Đã tạo 5 bảng: `profiles`, `teacher_classes`, `lesson_progress`, `quiz_attempts`, `quiz_answers`; RLS bật trên cả 5 bảng.
- Đã cài trigger tự tạo hồ sơ khi đăng ký tài khoản.
- Security Advisor hiện không có cảnh báo. Performance Advisor không còn cảnh báo RLS; chỉ còn thông tin các index mới chưa được sử dụng (bình thường khi chưa có tải thực tế).
- Website có giao diện đăng nhập bằng tài khoản do giáo viên cấp; tiến độ được lưu riêng theo từng tài khoản học sinh.
- Nhánh `feature/student-accounts-teacher-dashboard` bổ sung dashboard giáo viên, cấp tài khoản học sinh qua Edge Function và đồng bộ tiến độ tự động sau lần đồng bộ đầu tiên.
- Edge Function `create-student-account` đã được triển khai ở trạng thái ACTIVE; chưa kiểm thử end-to-end bằng tài khoản giáo viên/học sinh thật.

## 1. Cấu hình kết nối
Cấu hình trình duyệt nằm trong `assets/js/supabase-config.js` gồm Project URL và Publishable key. Đây là khóa công khai dành cho client; tuyệt đối không đưa service_role/secret key hoặc mật khẩu cơ sở dữ liệu vào repository.

## 2. Migration
Hai tệp migration được lưu trong `supabase/migrations/`. Cơ sở dữ liệu dự án đã áp dụng các thay đổi tương ứng. Không chạy lại thủ công trong SQL Editor nếu không có kế hoạch migration rõ ràng.

## 3. Xác nhận email
Trong **Authentication → Providers → Email**, kiểm tra thiết lập xác nhận email. Nếu bật, người dùng phải mở email xác nhận trước khi đăng nhập. Khuyến nghị giữ xác nhận email bật khi triển khai chính thức.

## 4. Tạo tài khoản giáo viên đầu tiên và phân quyền
1. Quản trị viên tạo tài khoản giáo viên trong Supabase Dashboard → Authentication → Users → Add user.
2. Lấy UUID của tài khoản vừa tạo. Chạy SQL dưới đây trong SQL Editor (thay email/UUID và lớp đúng thực tế):
```sql
update public.profiles set role = 'teacher', display_name = 'Tên giáo viên'
where id = '<TEACHER_AUTH_USER_UUID>';
insert into public.teacher_classes (teacher_id, class_name)
values ('<TEACHER_AUTH_USER_UUID>', '12A1')
on conflict (teacher_id, class_name) do nothing;
```
3. Đăng nhập website bằng tài khoản giáo viên. Nút **Lớp học** sẽ xuất hiện; giáo viên có thể cấp tài khoản học sinh cho các lớp đã được phân công.
4. Giáo viên nhập họ tên, email, lớp và mật khẩu tạm thời. Hệ thống tạo Auth user, tự gán role `student` và lớp; tài khoản được xác nhận email để học sinh đăng nhập ngay.
5. Gửi email/mật khẩu cho từng học sinh qua kênh riêng. Không gửi mật khẩu trong nhóm lớp công khai.
6. Khuyến nghị tắt public sign-ups trong Authentication settings để học sinh chỉ dùng tài khoản do giáo viên cấp.

Không dùng chung một tài khoản cho nhiều học sinh. Không đưa UUID hoặc dữ liệu cá nhân học sinh vào repository công khai.

Ví dụ thao tác quản trị (thay UUID bằng ID thực tế lấy từ Authentication → Users):
```sql
update public.profiles set role = 'teacher' where id = '<TEACHER_AUTH_USER_UUID>';
update public.profiles set class_name = '12A1' where id = '<STUDENT_AUTH_USER_UUID>';
insert into public.teacher_classes (teacher_id, class_name)
values ('<TEACHER_AUTH_USER_UUID>', '12A1');
```

## 5. Đăng nhập và đồng bộ
1. Mở website qua GitHub Pages hoặc máy chủ web HTTPS.
2. Chọn **Đăng nhập**, nhập email và mật khẩu được giáo viên cấp.
3. Sau lần đăng nhập đầu tiên, website tự đối chiếu tiến độ cục bộ và máy chủ theo thời điểm truy cập gần nhất.
4. Sau khi đồng bộ lần đầu, các thay đổi tiến độ được tự động gửi lên máy chủ khi có Internet.
5. Mỗi tài khoản có vùng lưu tiến độ cục bộ riêng (`tin12.v1.user.<user_id>`); dữ liệu chưa đăng nhập cũ (`tin12.v1`) được giữ riêng, không tự gộp vào tài khoản học sinh khác.

Bản máy chủ mới hơn được tải về; bản trên thiết bị mới hơn được gửi lên. Học sinh có thể tiếp tục học khi mất mạng; thay đổi sẽ được gửi khi kết nối lại và có thao tác lưu tiến độ.

## 6. Dashboard giáo viên và giới hạn
- Dashboard **Lớp học** hiển thị danh sách học sinh thuộc lớp được phân công, số bài hoàn thành/28, số bài đang học, bài cần ôn, hoạt động gần nhất và điểm kiểm tra gần nhất đã đồng bộ.
- Có thể xuất bảng tiến độ lớp ra CSV để mở bằng Excel.
- Đồng bộ lịch sử kiểm tra chỉ lưu tóm tắt lần kiểm tra (phạm vi, số câu, điểm, thời điểm); chưa lưu chi tiết từng đáp án.
- Điểm số và thuật toán chấm hiện nằm ở trình duyệt; dữ liệu điểm do trình duyệt gửi lên không thể chống gian lận ở cấp máy chủ và không được dùng làm điểm chính thức.

## 7. Bảo vệ dữ liệu và kiểm thử
- RLS giới hạn học sinh vào dữ liệu của chính mình; giáo viên chỉ đọc được học sinh thuộc lớp được phân công.
- Tài khoản học sinh không được tự thay đổi vai trò hoặc lớp.
- Trước khi triển khai chính thức, phải kiểm tra bằng ít nhất hai tài khoản học sinh và một tài khoản giáo viên: không đọc chéo dữ liệu, không tự nâng quyền, không cấp tài khoản ngoài lớp được phân công, đồng bộ hai thiết bị, đăng xuất/đăng nhập, tiếp tục học offline và xuất CSV.
- Sao lưu tiến độ bằng **Tiến độ → Sao lưu tiến độ (JSON)** trước khi thử nghiệm. Không xóa dữ liệu trình duyệt hoặc khóa `tin12.v1` khi chưa sao lưu.

Chưa triển khai diện rộng trước khi hoàn tất kiểm thử RLS thực tế với tài khoản thử nghiệm.

## Tạo tài khoản học sinh hàng loạt

Giáo viên đăng nhập bằng tài khoản có quyền `teacher`, mở **Lớp học → Tải danh sách lên**.

1. Tải file mẫu CSV trong cửa sổ quản lý lớp.
2. Mở bằng Excel, nhập các cột:
   - `HoTen`: họ và tên học sinh (bắt buộc).
   - `Email`: email dùng để đăng nhập (bắt buộc, không trùng).
   - `Lop`: lớp được phân công cho giáo viên; có thể bỏ trống để dùng lớp đang chọn.
   - `MatKhau`: tùy chọn; để trống thì hệ thống tự sinh mật khẩu tạm thời.
3. Trong Excel, lưu lại theo định dạng **CSV UTF-8** rồi tải lên.
4. Hệ thống kiểm tra dữ liệu và email trùng trong file trước khi cho phép tạo tài khoản. Mỗi lần tối đa 100 học sinh.
5. Sau khi tạo, tải file kết quả CSV để nhận danh sách tài khoản, mật khẩu tạm thời và trạng thái từng dòng.

Lưu ý: Tài khoản được tạo qua Edge Function phía máy chủ; khóa bí mật không được gửi xuống trình duyệt. Chỉ giáo viên đã được phân công lớp mới có thể tạo tài khoản cho lớp đó. File kết quả có mật khẩu tạm thời nên cần lưu trữ và gửi riêng, không chia sẻ công khai.


## Đăng nhập học sinh bằng mã học sinh

- Giáo viên tải mẫu CSV trong mục **Lớp học → Cấp tài khoản → Tải danh sách học sinh lên**.
- Các cột bắt buộc: `MaHocSinh`, `HoTen`, `NgaySinh`; cột `Lop` có thể để trống để dùng lớp đang chọn.
- Ngày sinh chấp nhận `YYYY-MM-DD` hoặc định dạng ngày Việt Nam `DD/MM/YYYY` trong CSV. Mã học sinh chỉ gồm chữ cái, chữ số, dấu gạch ngang hoặc gạch dưới.
- Học sinh đăng nhập bằng **mã học sinh + mật khẩu tạm thời**. Giáo viên tiếp tục đăng nhập bằng email như trước.
- Hệ thống dùng một địa chỉ email kỹ thuật nội bộ để tương thích Supabase Auth; học sinh không cần có email thật và hệ thống không gửi thư đến địa chỉ này.
- Mật khẩu được sinh ngẫu nhiên, không dùng ngày sinh. Giáo viên tải file kết quả và gửi thông tin riêng cho từng học sinh.
- Không tự động chuyển đổi hoặc xóa các tài khoản học sinh đã cấp trước đây bằng email.
