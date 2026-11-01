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
  const seen = new Set<string>();

  async function createOne(row: Record<string, unknown>) {
    const display_name = String(row.display_name ?? "").trim();
    const email = String(row.email ?? "").trim().toLowerCase();
    const password = String(row.password ?? "");
    const class_name = String(row.class_name ?? "").trim();

    if (!display_name || display_name.length > 100 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        password.length < 8 || password.length > 72 ||
        !class_name || class_name.length > 40) {
      return { success: false, display_name, email, class_name, error: "Dữ liệu không hợp lệ (họ tên, email, lớp hoặc mật khẩu 8–72 ký tự)." };
    }
    if (!assigned.has(class_name)) {
      return { success: false, display_name, email, class_name, error: "Lớp chưa được phân công cho giáo viên." };
    }
    if (seen.has(email)) {
      return { success: false, display_name, email, class_name, error: "Email bị trùng trong file tải lên." };
    }
    seen.add(email);

    const createResponse = await fetch(url + "/auth/v1/admin/users", {
      method: "POST",
      headers: adminHeaders,
      body: JSON.stringify({
        email, password, email_confirm: true,
        user_metadata: { display_name }
      })
    });
    const user = await createResponse.json();
    if (!createResponse.ok) {
      return {
        success: false, display_name, email, class_name,
        error: user?.msg || user?.message || user?.code || "Email đã tồn tại hoặc không thể tạo tài khoản."
      };
    }

    const profileResponse = await fetch(
      url + "/rest/v1/profiles?id=eq." + encodeURIComponent(user.id) + "&select=id",
      {
        method: "PATCH",
        headers: { ...adminHeaders, Prefer: "return=representation" },
        body: JSON.stringify({ display_name, role: "student", class_name })
      }
    );
    const updated = await profileResponse.json();
    if (!profileResponse.ok || !Array.isArray(updated) || !updated.length) {
      await fetch(url + "/auth/v1/admin/users/" + encodeURIComponent(user.id), {
        method: "DELETE", headers: adminHeaders
      });
      return {
        success: false, display_name, email, class_name,
        error: "Không gán được hồ sơ/lớp; tài khoản vừa tạo đã được hoàn tác."
      };
    }

    return { success: true, user_id: user.id, display_name, email, class_name, password };
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
        display_name: String(row.display_name ?? ""),
        email: String(row.email ?? ""),
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
