import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};
const reply = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

function getKeys() {
  let secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  let publishable = Deno.env.get("SUPABASE_ANON_KEY") || "";
  try {
    const values = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
    secret = secret || values.default || Object.values(values)[0] || "";
  } catch (_) {}
  try {
    const values = JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") || "{}");
    publishable = publishable || values.default || Object.values(values)[0] || "";
  } catch (_) {}
  return { secret, publishable: publishable || secret };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return reply({ error: "Method not allowed" }, 405);

  const bearer = (req.headers.get("Authorization") || "").match(/^Bearer\s+(.+)$/i);
  if (!bearer) return reply({ error: "Bạn cần đăng nhập." }, 401);

  const url = Deno.env.get("SUPABASE_URL");
  const { secret, publishable } = getKeys();
  if (!url || !secret || !publishable) return reply({ error: "Máy chủ chưa được cấu hình." }, 500);

  const callerResponse = await fetch(url + "/auth/v1/user", {
    headers: { apikey: publishable, Authorization: "Bearer " + bearer[1] }
  });
  if (!callerResponse.ok) return reply({ error: "Phiên đăng nhập không hợp lệ." }, 401);
  const caller = await callerResponse.json();

  // Legacy service_role keys are JWTs. New sb_secret keys are sent only as apikey.
  const adminHeaders: Record<string, string> = {
    apikey: secret,
    "Content-Type": "application/json"
  };
  if (secret.startsWith("eyJ")) adminHeaders.Authorization = "Bearer " + secret;

  const profileResponse = await fetch(
    url + "/rest/v1/profiles?id=eq." + encodeURIComponent(caller.id) + "&select=id,role",
    { headers: adminHeaders }
  );
  const profiles = await profileResponse.json();
  if (!profileResponse.ok || !Array.isArray(profiles) || profiles[0]?.role !== "teacher") {
    return reply({ error: "Chỉ giáo viên đã được phân quyền mới được cấp tài khoản." }, 403);
  }

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return reply({ error: "Dữ liệu không hợp lệ." }, 400); }

  const bulk = Array.isArray(body.students);
  const inputRows = bulk ? body.students as Record<string, unknown>[] : [body];
  if (!inputRows.length || inputRows.length > 100) {
    return reply({ error: "Mỗi lần phải có từ 1 đến 100 học sinh." }, 400);
  }

  const classResponse = await fetch(
    url + "/rest/v1/teacher_classes?teacher_id=eq." + encodeURIComponent(caller.id) + "&select=class_name",
    { headers: adminHeaders }
  );
  const assignedRows = await classResponse.json();
  if (!classResponse.ok || !Array.isArray(assignedRows)) {
    return reply({ error: "Không thể kiểm tra danh sách lớp được phân công." }, 500);
  }
  const assigned = new Set(assignedRows.map((x: { class_name: string }) => x.class_name));

  // A teacher may reset a student's password only when that student belongs
  // to one of the teacher's assigned classes. Never return or read old passwords.
  if (body.action === "reset_password") {
    const userId = String(body.user_id ?? "").trim();
    const newPassword = String(body.password ?? "");
    if (!/^[0-9a-f-]{36}$/i.test(userId) || newPassword.length < 12 || newPassword.length > 72) {
      return reply({ error: "Thông tin đặt lại mật khẩu không hợp lệ." }, 400);
    }
    const studentResponse = await fetch(
      url + "/rest/v1/profiles?id=eq." + encodeURIComponent(userId) + "&select=id,display_name,student_code,class_name,role",
      { headers: adminHeaders }
    );
    const studentRows = await studentResponse.json();
    if (!studentResponse.ok) return reply({ error: "Không kiểm tra được hồ sơ học sinh." }, 500);
    const student = Array.isArray(studentRows) ? studentRows[0] : null;
    if (!student || student.role !== "student" || !assigned.has(student.class_name)) {
      return reply({ error: "Không tìm thấy học sinh thuộc lớp được phân công cho thầy/cô." }, 403);
    }
    const updateResponse = await fetch(
      url + "/auth/v1/admin/users/" + encodeURIComponent(userId),
      {
        method: "PUT",
        headers: adminHeaders,
        body: JSON.stringify({ password: newPassword })
      }
    );
    const updatedUser = await updateResponse.json();
    if (!updateResponse.ok) {
      return reply({ error: updatedUser?.msg || updatedUser?.message || "Không thể cập nhật mật khẩu." }, 400);
    }
    const authUserResponse = await fetch(
      url + "/auth/v1/admin/users/" + encodeURIComponent(userId),
      { headers: adminHeaders }
    );
    const authUser = authUserResponse.ok ? await authUserResponse.json() : null;
    return reply({
      success: true,
      student: {
        id: student.id,
        display_name: student.display_name,
        student_code: student.student_code,
        class_name: student.class_name,
        login_identifier: student.student_code || authUser?.email || ""
      }
    });
  }

  const seen = new Set<string>();

  async function createOne(row: Record<string, unknown>) {
    const display_name = String(row.display_name ?? "").trim();
    const student_code = String(row.student_code ?? "").trim();
    const birth_date = String(row.birth_date ?? "").trim();
    const legacyEmail = String(row.email ?? "").trim().toLowerCase();
    const email = student_code
      ? "hs-" + student_code.toLowerCase() + "@students.example.com"
      : legacyEmail;
    const password = String(row.password ?? "");
    const class_name = String(row.class_name ?? "").trim();

    const validCode = /^[A-Za-z0-9][A-Za-z0-9_-]{0,49}$/.test(student_code);
    const validDate = /^\d{4}-\d{2}-\d{2}$/.test(birth_date) &&
      Number.isFinite(Date.parse(birth_date)) &&
      new Date(birth_date + "T00:00:00Z").toISOString().slice(0, 10) === birth_date;
    if (!display_name || display_name.length > 100 ||
        (student_code ? (!validCode || !validDate) : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
        password.length < 8 || password.length > 72 ||
        !class_name || class_name.length > 40) {
      return { success: false, student_code, display_name, birth_date, class_name,
        error: "Dữ liệu không hợp lệ (mã học sinh, họ tên, ngày sinh, lớp hoặc mật khẩu 8–72 ký tự)." };
    }
    if (!assigned.has(class_name)) {
      return { success: false, student_code, display_name, birth_date, class_name, error: "Lớp chưa được phân công cho giáo viên." };
    }

    const duplicateKey = student_code ? "code:" + student_code.toLowerCase() : "email:" + email;
    if (seen.has(duplicateKey)) {
      return { success: false, student_code, display_name, birth_date, class_name, error: "Mã học sinh/email bị trùng trong file tải lên." };
    }
    seen.add(duplicateKey);

    if (student_code) {
      const duplicateResponse = await fetch(
        url + "/rest/v1/profiles?student_code=eq." + encodeURIComponent(student_code) + "&select=id",
        { headers: adminHeaders }
      );
      const duplicateRows = await duplicateResponse.json();
      if (!duplicateResponse.ok) {
        return { success: false, student_code, display_name, birth_date, class_name, error: "Không kiểm tra được mã học sinh trong cơ sở dữ liệu." };
      }
      if (Array.isArray(duplicateRows) && duplicateRows.length) {
        return { success: false, student_code, display_name, birth_date, class_name, error: "Mã học sinh đã được cấp tài khoản." };
      }
    }

    const createResponse = await fetch(url + "/auth/v1/admin/users", {
      method: "POST",
      headers: adminHeaders,
      body: JSON.stringify({
        email, password, email_confirm: true,
        user_metadata: { display_name, ...(student_code ? { student_code } : {}) }
      })
    });
    const user = await createResponse.json();
    if (!createResponse.ok) {
      return {
        success: false, student_code, display_name, birth_date, class_name,
        error: user?.msg || user?.message || user?.code || "Mã học sinh/email đã tồn tại hoặc không thể tạo tài khoản."
      };
    }

    const profilePayload: Record<string, unknown> = { display_name, role: "student", class_name };
    if (student_code) {
      profilePayload.student_code = student_code;
      profilePayload.birth_date = birth_date;
    }
    const profileResponse = await fetch(
      url + "/rest/v1/profiles?id=eq." + encodeURIComponent(user.id) + "&select=id",
      {
        method: "PATCH",
        headers: { ...adminHeaders, Prefer: "return=representation" },
        body: JSON.stringify(profilePayload)
      }
    );
    const updated = await profileResponse.json();
    if (!profileResponse.ok || !Array.isArray(updated) || !updated.length) {
      await fetch(url + "/auth/v1/admin/users/" + encodeURIComponent(user.id), {
        method: "DELETE", headers: adminHeaders
      });
      return {
        success: false, student_code, display_name, birth_date, class_name,
        error: "Không gán được hồ sơ/lớp; tài khoản vừa tạo đã được hoàn tác."
      };
    }

    return {
      success: true, user_id: user.id, student_code, display_name, birth_date, class_name, password,
      ...(student_code ? {} : { email })
    };
  }

  if (!bulk) {
    const result = await createOne(body);
    return result.success ? reply(result, 201) : reply({ error: result.error }, 400);
  }

  const results = [];
  for (const row of inputRows) {
    try { results.push(await createOne(row)); }
    catch (error) {
      results.push({
        success: false,
        student_code: String(row.student_code ?? ""),
        display_name: String(row.display_name ?? ""),
        birth_date: String(row.birth_date ?? ""),
        class_name: String(row.class_name ?? ""),
        error: error instanceof Error ? error.message : "Lỗi máy chủ khi tạo tài khoản."
      });
    }
  }
  return reply({
    success: results.every(x => x.success),
    total: results.length,
    created: results.filter(x => x.success).length,
    failed: results.filter(x => !x.success).length,
    results
  });
});
