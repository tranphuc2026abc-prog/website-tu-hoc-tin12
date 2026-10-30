(() => {
'use strict';
const cfg = window.TIN12_SUPABASE;
if (!cfg || !cfg.url || !cfg.anonKey) return;
const KEY = 'tin12.v1', SESSION = 'tin12.supabase.session';
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const read = () => { try { return JSON.parse(localStorage.getItem(SESSION) || 'null'); } catch (_) { return null; } };
let session = read(), profile = null, busy = false;
const base = cfg.url.replace(/\/$/, '');
async function api(path, options = {}, retry = true) {
  const headers = Object.assign({ apikey: cfg.anonKey, 'Content-Type': 'application/json' }, options.headers || {});
  if (session && session.access_token) headers.Authorization = 'Bearer ' + session.access_token;
  const res = await fetch(base + path, Object.assign({}, options, { headers }));
  if (res.status === 401 && retry && session && session.refresh_token) {
    const rr = await fetch(base + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST', headers: { apikey: cfg.anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: session.refresh_token })
    });
    if (rr.ok) { session = await rr.json(); localStorage.setItem(SESSION, JSON.stringify(session)); return api(path, options, false); }
    signOutLocal();
  }
  const body = await res.text();
  let data = null; try { data = body ? JSON.parse(body) : null; } catch (_) { data = body; }
  if (!res.ok) throw new Error((data && (data.msg || data.message || data.error_description || data.error)) || ('Supabase HTTP ' + res.status));
  return data;
}
function signOutLocal() { session = null; profile = null; localStorage.removeItem(SESSION); render(); }
function statusText() {
  if (!session || !session.user) return 'Chưa đăng nhập';
  const name = profile && profile.display_name || session.user.email || 'Tài khoản';
  return name + (profile && profile.role === 'teacher' ? ' · Giáo viên' : ' · Học sinh');
}
function render() {
  let host = $('#cloud-area');
  if (!host) {
    const nav = $('#nav');
    if (!nav) return;
    host = document.createElement('div'); host.id = 'cloud-area'; host.className = 'cloud-area';
    nav.after(host);
  }
  host.innerHTML = '<button class="btn cloud-btn" id="cloud-open" type="button">' +
    (session ? '☁ ' + esc(statusText()) : 'Đăng nhập') + '</button>';
  let modal = $('#cloud-modal');
  if (!modal) {
    modal = document.createElement('div'); modal.id = 'cloud-modal'; modal.className = 'cloud-modal'; modal.hidden = true;
    modal.innerHTML = '<section class="cloud-panel" role="dialog" aria-modal="true" aria-labelledby="cloud-title">' +
      '<button type="button" class="cloud-close" id="cloud-close" aria-label="Đóng">×</button>' +
      '<h2 id="cloud-title">Tài khoản học tập</h2><p class="mut" id="cloud-status"></p>' +
      '<div id="cloud-auth"><label>Email<input id="cloud-email" type="email" autocomplete="username" required></label>' +
      '<label>Mật khẩu<input id="cloud-password" type="password" autocomplete="current-password" minlength="6" required></label>' +
      '<label>Họ và tên<input id="cloud-name" type="text" autocomplete="name" maxlength="100" placeholder="Tên hiển thị (khi tạo tài khoản)"></label>' +
      '<div class="row"><button class="btn pri" id="cloud-login" type="button">Đăng nhập</button>' +
      '<button class="btn" id="cloud-signup" type="button">Tạo tài khoản học sinh</button></div></div>' +
      '<div id="cloud-account" hidden><p id="cloud-profile"></p>' +
      '<div class="row"><button class="btn pri" id="cloud-sync" type="button">Đồng bộ tiến độ</button>' +
      '<button class="btn" id="cloud-logout" type="button">Đăng xuất</button></div>' +
      '<p class="mut">Đồng bộ hiện áp dụng cho tiến độ 28 bài học. Lịch sử câu trả lời và báo cáo giáo viên chưa được đồng bộ ở phiên bản này.</p></div>' +
      '<p id="cloud-message" class="cloud-message" role="status" aria-live="polite"></p>' +
      '<p class="mut cloud-note">Dữ liệu cục bộ vẫn được giữ trên thiết bị. Không xóa dữ liệu trình duyệt sau khi đăng nhập.</p></section>';
    document.body.append(modal);
  }
  $('#cloud-status').textContent = statusText();
  $('#cloud-auth').hidden = !!session;
  $('#cloud-account').hidden = !session;
  $('#cloud-profile').textContent = profile ? ('Vai trò: ' + (profile.role === 'teacher' ? 'Giáo viên' : 'Học sinh') + (profile.class_name ? ' · Lớp ' + profile.class_name : '')) : '';
  $('#cloud-message').textContent = '';
}
function message(s, error = false) { const el = $('#cloud-message'); if (el) { el.textContent = s; el.className = 'cloud-message' + (error ? ' error' : ''); } }
function setBusy(v) { busy = v; ['cloud-login','cloud-signup','cloud-sync','cloud-logout'].forEach(id => { const e = $('#' + id); if (e) e.disabled = v; }); }
async function loadProfile() {
  if (!session || !session.user) return;
  const rows = await api('/rest/v1/profiles?id=eq.' + encodeURIComponent(session.user.id) + '&select=id,display_name,role,class_name');
  profile = Array.isArray(rows) ? rows[0] || null : null;
  render();
}
async function authenticate(kind) {
  if (busy) return;
  const email = $('#cloud-email').value.trim(), password = $('#cloud-password').value, name = $('#cloud-name').value.trim();
  if (!email || !password) { message('Vui lòng nhập email và mật khẩu.', true); return; }
  setBusy(true);
  try {
    const isSignup = kind === 'signup';
    const result = await api(isSignup ? '/auth/v1/signup' : '/auth/v1/token?grant_type=password', {
      method: 'POST', body: JSON.stringify(isSignup ? { email, password, data: { display_name: name } } : { email, password })
    }, false);
    if (!result || !result.access_token) {
      message('Tài khoản đã được gửi yêu cầu tạo. Nếu dự án bật xác nhận email, hãy mở email xác nhận rồi đăng nhập.', false);
      return;
    }
    session = result; localStorage.setItem(SESSION, JSON.stringify(session));
    await loadProfile();
    message('Đăng nhập thành công. Tiến độ trên thiết bị chưa bị thay đổi.', false);
  } catch (e) { message(e.message || 'Không thể kết nối Supabase.', true); }
  finally { setBusy(false); render(); }
}
function validLocal() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null');
    return s && typeof s === 'object' && s.les && typeof s.les === 'object' ? s : { v:1, les:{}, ans:{}, cards:{}, hist:[], last:null, th:null, tfm:0 };
  } catch (_) { return { v:1, les:{}, ans:{}, cards:{}, hist:[], last:null, th:null, tfm:0 }; }
}
function dateMs(v) { const n = v ? Date.parse(v) : 0; return Number.isFinite(n) ? n : 0; }
async function syncProgress() {
  if (!session || !session.user || busy) return;
  setBusy(true); message('Đang đọc tiến độ trên máy chủ…');
  try {
    const userId = session.user.id, local = validLocal();
    const remote = await api('/rest/v1/lesson_progress?select=lesson_id,status,section_progress,completed_at,last_accessed_at,needs_review');
    const byId = new Map((remote || []).map(x => [x.lesson_id, x]));
    const writes = [];
    let downloaded = 0, uploaded = 0;
    for (const [lessonId, row] of byId.entries()) {
      const l = local.les[lessonId] || { s:[0,0,0,0,0,0,0] };
      const localTime = Number(l.o) || 0, remoteTime = dateMs(row.last_accessed_at || row.updated_at);
      if (!local.les[lessonId] || remoteTime > localTime) {
        const sections = Array.isArray(row.section_progress) ? row.section_progress : [];
        local.les[lessonId] = {
          s: Array.from({length:7}, (_,i) => sections[i] ? 1 : 0),
          d: row.status === 'done' ? 1 : 0,
          r: row.needs_review ? 1 : 0,
          o: remoteTime || Date.now()
        };
        downloaded++;
      } else {
        writes.push(toRow(userId, lessonId, l)); uploaded++;
      }
    }
    for (const [lessonId, l] of Object.entries(local.les)) {
      if (!byId.has(lessonId) && (l.d || l.r || (Array.isArray(l.s) && l.s.some(Boolean)) || l.o)) {
        writes.push(toRow(userId, lessonId, l)); uploaded++;
      }
    }
    localStorage.setItem(KEY, JSON.stringify(local));
    if (writes.length) {
      await api('/rest/v1/lesson_progress?on_conflict=user_id,lesson_id', {
        method: 'POST',
        headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify(writes)
      });
    }
    message('Đồng bộ xong: tải về ' + downloaded + ' bài, gửi lên ' + uploaded + ' bài. Trang sẽ tải lại để cập nhật tiến độ.');
    setTimeout(() => location.reload(), 900);
  } catch (e) { message('Đồng bộ chưa thành công: ' + (e.message || 'Lỗi kết nối/RLS.'), true); }
  finally { setBusy(false); }
}
function toRow(userId, lessonId, l) {
  const touched = Number(l.o) || Date.now();
  return {
    user_id: userId, lesson_id: lessonId,
    status: l.d ? 'done' : ((l.s || []).some(Boolean) ? 'doing' : 'todo'),
    section_progress: Array.from({length:7}, (_,i) => !!(l.s || [])[i]),
    completed_at: l.d ? new Date(touched).toISOString() : null,
    last_accessed_at: new Date(touched).toISOString(),
    needs_review: !!l.r
  };
}
document.addEventListener('click', async e => {
  const t = e.target;
  if (t.id === 'cloud-open') { $('#cloud-modal').hidden = false; $('#cloud-email').focus(); }
  else if (t.id === 'cloud-close' || t.id === 'cloud-modal') { $('#cloud-modal').hidden = true; }
  else if (t.id === 'cloud-login') await authenticate('login');
  else if (t.id === 'cloud-signup') await authenticate('signup');
  else if (t.id === 'cloud-sync') await syncProgress();
  else if (t.id === 'cloud-logout') { signOutLocal(); $('#cloud-modal').hidden = true; }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#cloud-modal')) $('#cloud-modal').hidden = true; });
if (session && session.user) loadProfile().catch(() => { session = null; localStorage.removeItem(SESSION); render(); });
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once:true }); else render();
})();
