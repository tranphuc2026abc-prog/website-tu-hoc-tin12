ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS student_code text,
  ADD COLUMN IF NOT EXISTS birth_date date;

CREATE UNIQUE INDEX IF NOT EXISTS profiles_student_code_unique
  ON public.profiles (lower(btrim(student_code)))
  WHERE student_code IS NOT NULL AND btrim(student_code) <> '';

COMMENT ON COLUMN public.profiles.student_code IS 'Mã học sinh dùng làm tên đăng nhập; duy nhất không phân biệt hoa thường.';
COMMENT ON COLUMN public.profiles.birth_date IS 'Ngày sinh học sinh; chỉ lưu để đối chiếu hồ sơ, không dùng làm mật khẩu.';
