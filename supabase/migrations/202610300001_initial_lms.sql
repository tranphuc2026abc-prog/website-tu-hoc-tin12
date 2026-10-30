-- Tin hoc 12 LMS - initial schema
-- Run in Supabase SQL Editor. Safe to re-run: tables, indexes, policies and triggers are guarded.
-- IMPORTANT: client-submitted quiz scores are not cryptographically trustworthy.
-- This schema stores learner-submitted results; do not use them as formal grades.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  role text not null default 'student' check (role in ('student','teacher')),
  class_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.teacher_classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  class_name text not null,
  created_at timestamptz not null default now(),
  unique (teacher_id, class_name)
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  status text not null default 'todo' check (status in ('todo','doing','done')),
  section_progress jsonb not null default '[]'::jsonb,
  completed_at timestamptz,
  last_accessed_at timestamptz,
  needs_review boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  client_attempt_id uuid not null,
  attempt_type text not null check (attempt_type in ('practice','exam')),
  scope text not null default '',
  question_count integer not null default 0 check (question_count >= 0),
  correct_count numeric(7,2) not null default 0 check (correct_count >= 0),
  score numeric(5,2) check (score is null or (score >= 0 and score <= 10)),
  started_at timestamptz,
  completed_at timestamptz,
  duration_seconds integer check (duration_seconds is null or duration_seconds >= 0),
  created_at timestamptz not null default now(),
  unique (user_id, client_attempt_id)
);

create table if not exists public.quiz_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.quiz_attempts(id) on delete cascade,
  question_id text not null,
  selected_answer jsonb,
  is_correct boolean,
  points_awarded numeric(7,3),
  answered_at timestamptz,
  unique (attempt_id, question_id)
);

create index if not exists idx_profiles_class_role on public.profiles(class_name, role);
create index if not exists idx_teacher_classes_teacher on public.teacher_classes(teacher_id);
create index if not exists idx_lesson_progress_user_updated on public.lesson_progress(user_id, updated_at desc);
create index if not exists idx_quiz_attempts_user_created on public.quiz_attempts(user_id, created_at desc);
create index if not exists idx_quiz_answers_attempt on public.quiz_answers(attempt_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists lesson_progress_set_updated_at on public.lesson_progress;
create trigger lesson_progress_set_updated_at before update on public.lesson_progress
for each row execute function public.set_updated_at();

-- New Auth users always start as students. Role is never copied from client metadata.
create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.profiles (id, display_name, role)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''), split_part(coalesce(new.email, ''), '@', 1)),
    'student'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute function public.handle_new_auth_user();

-- Security-definer helper avoids exposing the teacher roster through broad table policies.
create or replace function public.is_teacher_for_student(target_student uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.profiles student
    join public.teacher_classes tc on tc.class_name = student.class_name
    join public.profiles teacher on teacher.id = tc.teacher_id and teacher.role = 'teacher'
    where student.id = target_student
      and student.role = 'student'
      and tc.teacher_id = auth.uid()
  );
$$;

revoke all on function public.is_teacher_for_student(uuid) from public;
grant execute on function public.is_teacher_for_student(uuid) to authenticated;

alter table public.profiles enable row level security;
alter table public.teacher_classes enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.quiz_answers enable row level security;

drop policy if exists profiles_read_self_or_assigned_teacher on public.profiles;
create policy profiles_read_self_or_assigned_teacher on public.profiles
for select to authenticated
using (id = auth.uid() or public.is_teacher_for_student(id));

drop policy if exists teacher_classes_read_self on public.teacher_classes;
create policy teacher_classes_read_self on public.teacher_classes
for select to authenticated
using (teacher_id = auth.uid());

drop policy if exists lesson_progress_read_owner_or_teacher on public.lesson_progress;
create policy lesson_progress_read_owner_or_teacher on public.lesson_progress
for select to authenticated
using (user_id = auth.uid() or public.is_teacher_for_student(user_id));

drop policy if exists lesson_progress_insert_owner on public.lesson_progress;
create policy lesson_progress_insert_owner on public.lesson_progress
for insert to authenticated
with check (user_id = auth.uid());

drop policy if exists lesson_progress_update_owner on public.lesson_progress;
create policy lesson_progress_update_owner on public.lesson_progress
for update to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists quiz_attempts_read_owner_or_teacher on public.quiz_attempts;
create policy quiz_attempts_read_owner_or_teacher on public.quiz_attempts
for select to authenticated
using (user_id = auth.uid() or public.is_teacher_for_student(user_id));

drop policy if exists quiz_attempts_insert_owner on public.quiz_attempts;
create policy quiz_attempts_insert_owner on public.quiz_attempts
for insert to authenticated
with check (user_id = auth.uid());

drop policy if exists quiz_answers_read_owner_or_teacher on public.quiz_answers;
create policy quiz_answers_read_owner_or_teacher on public.quiz_answers
for select to authenticated
using (
  exists (
    select 1 from public.quiz_attempts a
    where a.id = attempt_id
      and (a.user_id = auth.uid() or public.is_teacher_for_student(a.user_id))
  )
);

drop policy if exists quiz_answers_insert_owner on public.quiz_answers;
create policy quiz_answers_insert_owner on public.quiz_answers
for insert to authenticated
with check (
  exists (
    select 1 from public.quiz_attempts a
    where a.id = attempt_id and a.user_id = auth.uid()
  )
);

-- Least-privilege grants. There are deliberately no client grants for role/class changes,
-- teacher roster writes, or mutation/deletion of submitted quiz history.
revoke all on public.profiles from anon, authenticated;
revoke all on public.teacher_classes from anon, authenticated;
revoke all on public.lesson_progress from anon, authenticated;
revoke all on public.quiz_attempts from anon, authenticated;
revoke all on public.quiz_answers from anon, authenticated;

grant select on public.profiles to authenticated;
grant update (display_name) on public.profiles to authenticated;
grant select on public.teacher_classes to authenticated;
grant select, insert, update on public.lesson_progress to authenticated;
grant select, insert on public.quiz_attempts to authenticated;
grant select, insert on public.quiz_answers to authenticated;

-- Admin setup (run manually in SQL Editor after creating accounts):
-- update public.profiles set role = 'teacher' where id = '<AUTH_USER_UUID>';
-- update public.profiles set class_name = '12A1' where id = '<STUDENT_AUTH_USER_UUID>';
-- insert into public.teacher_classes (teacher_id, class_name)
-- values ('<TEACHER_AUTH_USER_UUID>', '12A1');
