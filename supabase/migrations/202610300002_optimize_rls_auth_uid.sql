-- Performance refinement for LMS RLS policies.
-- Keep auth.uid() stable per statement instead of re-evaluating it per row.

drop policy if exists profiles_read_self_or_assigned_teacher on public.profiles;
create policy profiles_read_self_or_assigned_teacher on public.profiles
for select to authenticated
using (id = (select auth.uid()) or private.is_teacher_for_student(id));

drop policy if exists profiles_update_own_display_name on public.profiles;
create policy profiles_update_own_display_name on public.profiles
for update to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()));

drop policy if exists teacher_classes_read_self on public.teacher_classes;
create policy teacher_classes_read_self on public.teacher_classes
for select to authenticated
using (teacher_id = (select auth.uid()));

drop policy if exists lesson_progress_read_owner_or_teacher on public.lesson_progress;
create policy lesson_progress_read_owner_or_teacher on public.lesson_progress
for select to authenticated
using (user_id = (select auth.uid()) or private.is_teacher_for_student(user_id));

drop policy if exists lesson_progress_insert_owner on public.lesson_progress;
create policy lesson_progress_insert_owner on public.lesson_progress
for insert to authenticated
with check (user_id = (select auth.uid()));

drop policy if exists lesson_progress_update_owner on public.lesson_progress;
create policy lesson_progress_update_owner on public.lesson_progress
for update to authenticated
using (user_id = (select auth.uid()))
with check (user_id = (select auth.uid()));

drop policy if exists quiz_attempts_read_owner_or_teacher on public.quiz_attempts;
create policy quiz_attempts_read_owner_or_teacher on public.quiz_attempts
for select to authenticated
using (user_id = (select auth.uid()) or private.is_teacher_for_student(user_id));

drop policy if exists quiz_attempts_insert_owner on public.quiz_attempts;
create policy quiz_attempts_insert_owner on public.quiz_attempts
for insert to authenticated
with check (user_id = (select auth.uid()));

drop policy if exists quiz_answers_read_owner_or_teacher on public.quiz_answers;
create policy quiz_answers_read_owner_or_teacher on public.quiz_answers
for select to authenticated
using (
  exists (
    select 1 from public.quiz_attempts a
    where a.id = attempt_id
      and (a.user_id = (select auth.uid()) or private.is_teacher_for_student(a.user_id))
  )
);

drop policy if exists quiz_answers_insert_owner on public.quiz_answers;
create policy quiz_answers_insert_owner on public.quiz_answers
for insert to authenticated
with check (
  exists (
    select 1 from public.quiz_attempts a
    where a.id = attempt_id and a.user_id = (select auth.uid())
  )
);
