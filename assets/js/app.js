(() => {
'use strict';
const T = window.T = window.T || { L: {}, Q: {} };
const $ = s => document.querySelector(s), app = $('#app');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const inl = s => { const k = []; s = esc(s).replace(/`([^`]+)`/g, (_, c) => '\0' + (k.push('<code>' + c + '</code>') - 1) + '\0').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<i>$1</i>'); return s.replace(/\0(\d+)\0/g, (_, i) => k[i]); };
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const SECT = { obj: 'Mục tiêu bài học', key: 'Kiến thức trọng tâm', terms: 'Thuật ngữ & Từ khóa cốt lõi', ex: 'Ví dụ & Minh họa minh chứng', steps: 'Quy trình thực hành / Các bước thao tác', err: 'Lỗi thường gặp & Cách khắc phục', rem: 'Nội dung cần ghi nhớ' };
const KEYS = Object.keys(SECT), KEY = 'tin12.v1';
let C, S, mem = false, run = null, rv = { mode: 'lesson', p: '' }, codes = [];

/* ---------- lưu trữ trên thiết bị ---------- */
const blank = () => ({ v: 1, les: {}, ans: {}, cards: {}, hist: [], last: null, th: null, tfm: 0 });
function loadS() {
  try { const r = localStorage.getItem(KEY); S = r ? JSON.parse(r) : blank(); } catch (e) { S = blank(); mem = true; }
  if (!S || typeof S !== 'object') S = blank();
  const b = blank(); for (const k in b) if (S[k] === undefined) S[k] = b[k];
  for (const k of ['les', 'ans', 'cards']) if (!S[k] || typeof S[k] !== 'object') S[k] = {};
  if (!Array.isArray(S.hist)) S.hist = [];
  if (mem) $('#warn').hidden = false;
}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { mem = true; $('#warn').hidden = false; } };

/* ---------- tiện ích dữ liệu ---------- */
const L = id => C.lessons.find(l => l.id === id);
const ls = id => S.les[id] || { s: [] };
const mk = id => S.les[id] || (S.les[id] = { s: [0, 0, 0, 0, 0, 0, 0] });
const status = id => { const l = ls(id); return l.d ? 'done' : (l.o || (l.s || []).some(Boolean)) ? 'doing' : 'todo'; };
const pct = id => { const l = ls(id); return l.d ? 100 : Math.round((l.s || []).filter(Boolean).length / 7 * 100); };
const ST = { todo: 'Chưa học', doing: 'Đang học', done: 'Đã hoàn thành' };
const QS = () => C.qfiles.flatMap(i => T.Q[i] || []);
const qOf = id => T.Q[id] || [];
const lnk = id => `<a href="#/lesson/${id}">${esc(L(id).title)}</a>`;
const remItems = id => (T.L[id].sec.rem.find(b => b.t === 'ul') || { i: [] }).i.map(n => n.x);
const cardsOf = ids => ids.flatMap(id => [...T.L[id].terms.map((t, i) => ({ id: id + '-T' + i, l: id, f: t.t, b: t.d, k: 'Thuật ngữ' })), ...remItems(id).map((x, i) => ({ id: id + '-R' + i, l: id, f: 'Ghi nhớ – ' + L(id).title, b: x, k: 'Ghi nhớ' }))]);
const termCards = ids => cardsOf(ids).filter(c => c.k === 'Thuật ngữ');

/* ---------- hiển thị nội dung bài ---------- */
const ul = it => '<ul>' + it.map(n => '<li>' + inl(n.x) + (n.c ? ul(n.c) : '') + '</li>').join('') + '</ul>';
function blk(b) {
  if (b.t === 'ul') return ul(b.i);
  if (b.t === 'p') return '<p>' + inl(b.x) + '</p>';
  if (b.t === 'tb') return '<table>' + b.r.map((r, i) => '<tr>' + r.map(c => (i ? '<td>' : '<th>') + inl(c) + (i ? '</td>' : '</th>')).join('') + '</tr>').join('') + '</table>';
  const run = b.l === 'html' ? ` <button class="btn sm" data-act="run" data-i="${codes.push(b.x) - 1}">Xem kết quả</button>` : '';
  return `<pre><code>${esc(b.x)}</code></pre>` + (run ? `<div class="row">${run}</div>` : '');
}
const prog = p => `<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;
const chip = id => { const s = status(id); return `<span class="chip ${s}">${ST[s]}</span>`; };

/* ---------- các trang ---------- */
function home() {
  const n = C.lessons.length, d = C.lessons.filter(l => status(l.id) === 'done').length, g = C.lessons.filter(l => status(l.id) === 'doing').length;
  const nxt = C.lessons.find(l => status(l.id) !== 'done'), last = S.last && L(S.last);
  const terms = C.lessons.reduce((a, l) => a + T.L[l.id].terms.length, 0);
  return `<section class="hero"><h1>TỰ HỌC TIN HỌC 12</h1><p class="sub">Kết nối tri thức với cuộc sống</p>
<p>Học ${n} bài, ôn tập và luyện tập ngay trên thiết bị của em. Không cần tài khoản, không cần Internet; tiến độ được lưu trên máy này.</p>
<div class="row">${last ? `<a class="btn pri" href="#/lesson/${last.id}">Tiếp tục: ${esc(last.title)}</a>` : `<a class="btn pri" href="#/lesson/${C.lessons[0].id}">Bắt đầu Bài 1</a>`}
${nxt && (!last || nxt.id !== last.id) ? `<a class="btn" href="#/lesson/${nxt.id}">Bài đề xuất: ${esc(nxt.title)}</a>` : ''}</div></section>
<div class="stats"><div><b>${n}</b>bài học</div><div><b>${d}</b>đã hoàn thành</div><div><b>${g}</b>đang học</div><div><b>${n - d - g}</b>chưa học</div><div><b>${QS().length}</b>câu hỏi nguồn</div><div><b>${terms}</b>thuật ngữ</div></div>
${prog(Math.round(d / n * 100))}<p class="mut">Tiến độ tổng thể: ${Math.round(d / n * 100)}% số bài đã hoàn thành.</p>
<h2>Bản đồ 28 bài</h2>${C.topics.map((t, i) => `<div class="topic">${esc(t)}</div><div class="map">${C.lessons.filter(l => l.topic === i).map(l => `<a class="cell ${status(l.id)}" href="#/lesson/${l.id}" title="${esc(l.title)} – ${ST[status(l.id)]}">${l.n}</a>`).join('')}</div>`).join('')}
<div class="row"><a class="btn pri" href="#/review">Ôn tập nhanh</a><a class="btn pri" href="#/practice">Luyện tập và kiểm tra</a><a class="btn" href="#/lessons">Danh mục bài học</a></div>`;
}
function lessons() {
  return `<h1>Danh mục bài học</h1><div class="row"><input id="lf" type="search" placeholder="Lọc theo tên bài…" aria-label="Lọc bài"><select id="sf" aria-label="Lọc trạng thái"><option value="">Mọi trạng thái</option>${Object.entries(ST).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></div><div id="ll"></div>`;
}
function lessonList() {
  const q = norm($('#lf').value), s = $('#sf').value;
  $('#ll').innerHTML = C.topics.map((t, i) => { const r = C.lessons.filter(l => l.topic === i && (!s || status(l.id) === s) && norm(l.title + ' ' + l.id).includes(q)); return r.length ? `<div class="topic">${esc(t)}</div>` + r.map(l => `<a class="les" href="#/lesson/${l.id}"><span class="n">${l.n}</span><span class="t">${esc(l.title)}<br><span class="mut">${l.id} · ${l.tiet} tiết · ${qOf(l.id).length} câu hỏi nguồn</span></span>${chip(l.id)}</a>`).join('') : ''; }).join('') || '<p>Không có bài nào khớp. Hãy xóa bộ lọc.</p>';
}
function lesson(id) {
  const m = L(id); if (!m || !T.L[id]) return `<h1>Không tìm thấy bài</h1><p>Mã bài “${esc(id)}” không có trong danh mục. <a href="#/lessons">Về danh mục bài học</a>.</p>`;
  const d = T.L[id], l = mk(id); l.o = Date.now(); S.last = id; save(); codes = [];
  const i = m.n - 1, pv = C.lessons[i - 1], nx = C.lessons[i + 1], r = C.rel[id], nq = qOf(id).length;
  const rl = (a, t) => a.length ? `<p><b>${t}:</b> ${a.map(lnk).join(' · ')}</p>` : '';
  return `<p class="mut">${esc(C.topics[m.topic])} · ${m.tiet} tiết · ${m.id}</p><h1>${esc(m.title)}</h1>${prog(pct(id))}
<div class="row toc">${KEYS.map((k, j) => `<a href="#" data-act="go" data-k="${k}">${j + 1}. ${['Mục tiêu','Trọng tâm','Thuật ngữ','Ví dụ','Thực hành','Lỗi thường gặp','Ghi nhớ'][j]}</a>`).join('')}</div>
<div class="sum"><b>Tóm tắt nhanh</b>${ul((d.sec.rem.find(b => b.t === 'ul') || { i: [] }).i)}</div>
${KEYS.map((k, j) => `<section class="sheet ${k}" id="s-${k}"><h2>${j + 1}. ${esc(SECT[k])}</h2>${d.sec[k].map(blk).join('')}<label class="chk"><input type="checkbox" data-act="sec" data-j="${j}" ${l.s[j] ? 'checked' : ''}> Đã nắm phần này</label></section>`).join('')}
<div class="card"><h3>Kiến thức liên quan</h3>${r.pre.length ? `<a class="btn" href="#/lesson/${r.pre[r.pre.length - 1]}">Ôn lại kiến thức nền</a>` : ''}${rl(r.pre, 'Cần học trước')}${rl(r.rel, 'Bài có nội dung liên quan')}${nx ? rl([nx.id], 'Học tiếp') : ''}${r.why.map(w => `<p class="mut">Căn cứ: ${esc(w)}</p>`).join('')}</div>
<div class="row"><button class="btn pri" data-act="done">${l.d ? 'Bỏ đánh dấu đã học' : 'Đánh dấu đã học'}</button><button class="btn" data-act="flag">${l.r ? 'Bỏ đánh dấu cần ôn lại' : 'Đánh dấu cần ôn lại'}</button>
${nq ? `<a class="btn" href="#/practice/${id}">Luyện tập bài này (${nq} câu)</a>` : '<span class="mut">Nguồn chưa có câu hỏi cho bài này – hãy ôn bằng thẻ ghi nhớ.</span>'}<a class="btn" href="#/review/${id}">Ôn bằng thẻ ghi nhớ</a></div>
<div class="row">${pv ? `<a class="btn" href="#/lesson/${pv.id}">← ${esc(pv.title)}</a>` : ''}<a class="btn" href="#/lessons">Danh mục</a>${nx ? `<a class="btn" href="#/lesson/${nx.id}">${esc(nx.title)} →</a>` : ''}</div>`;
}

/* ---------- luyện tập / kiểm tra ---------- */
function practice(pre) {
  const byL = C.lessons.map(l => ({ l, n: qOf(l.id).length }));
  return `<h1>Luyện tập và kiểm tra</h1><p>Nguồn hiện có <b>${QS().length}</b> câu: ${QS().filter(q => q.type === 'mcq').length} trắc nghiệm bốn lựa chọn, ${QS().filter(q => q.type === 'tf').length} đúng/sai (nhiều ý), ${QS().filter(q => q.type === 'essay').length} luyện tập/vận dụng. Bài nào chưa có câu hỏi trong nguồn sẽ không chọn được.</p>
<div class="card"><h3>1. Chọn bài</h3><div class="row"><button class="btn sm" data-act="all">Chọn tất cả</button><button class="btn sm" data-act="none">Bỏ chọn</button></div><div class="pick" id="pk">${byL.map(({ l, n }) => `<label><input type="checkbox" value="${l.id}" ${n ? '' : 'disabled'} ${pre === l.id ? 'checked' : ''}> ${l.n}. ${esc(l.title.replace(/^Bài \d+\.\s*/, ''))} <span class="mut">(${n})</span></label>`).join('')}</div></div>
<div class="card"><h3>2. Dạng câu hỏi và cách làm</h3><div class="row">${[['mcq', 'Trắc nghiệm 4 lựa chọn'], ['tf', 'Đúng/Sai'], ['essay', 'Luyện tập / Vận dụng']].map(([k, v]) => `<label><input type="checkbox" class="ty" value="${k}" checked> ${v}</label>`).join('')}</div>
<div class="row"><label>Số câu tối đa <input type="number" id="cn" min="1" max="${QS().length}" value="${QS().length}"></label><label><input type="checkbox" id="sh" checked> Trộn thứ tự câu và phương án</label></div>
<div class="row"><label><input type="radio" name="md" value="p" checked> Luyện tập: có đáp án ngay sau mỗi câu</label><label><input type="radio" name="md" value="e"> Kiểm tra: chấm khi nộp bài</label></div>
<div class="row"><label><input type="checkbox" id="tfm" ${S.tfm ? 'checked' : ''}> Câu Đúng/Sai chấm theo thang 0,1 – 0,25 – 0,5 – 1 điểm</label></div><p class="mut">Mặc định mỗi nhận định đúng được 1/4 điểm của câu (quy tắc của website). Thang 0,1–0,25–0,5–1 là cấu trúc đề thi tốt nghiệp THPT từ năm 2025; hồ sơ nguồn không quy định điểm, hãy đối chiếu văn bản hiện hành khi dùng chính thức.</p></div>
<button class="btn pri" data-act="start">Bắt đầu</button>`;
}
function start(list, o) {
  if (!list.length) { app.insertAdjacentHTML('beforeend', '<p class="fail">Không có câu hỏi phù hợp để bắt đầu.</p>'); return; }
  run = { list, i: 0, r: {}, o: {}, ex: !!o.ex, shuffle: o.shuffle, title: o.title || 'Bài làm' };
  list.forEach(q => { if (q.type === 'mcq') run.o[q.id] = o.shuffle ? shuf(q.opts) : q.opts; });
  show();
}
const gradable = q => q.type !== 'essay';
function pts(q, r) {
  if (q.type === 'mcq') return r.sel === q.ans ? 1 : 0;
  const n = q.sts.filter(s => r.sel && r.sel[s.k] === s.a).length;
  return S.tfm ? [0, .1, .25, .5, 1][n] : n / q.sts.length;
}
function record(q, r) {
  const a = S.ans[q.id] || (S.ans[q.id] = { n: 0 });
  a.n++; a.t = Date.now();
  if (q.type === 'essay') a.ok = !!r.self; else { r.pt = pts(q, r); a.ok = r.pt === 1; a.pt = r.pt; }
  save();
}
function show() {
  const q = run.list[run.i], r = run.r[q.id] || (run.r[q.id] = {}), n = run.list.length, fin = !!r.done;
  const fbk = (ok, t) => `<div class="fb ${ok ? 'ok' : 'no'}"><b>${ok ? 'Chính xác.' : 'Chưa đúng.'}</b> ${t}</div>`;
  let b = '';
  if (q.type === 'mcq') {
    const o = run.o[q.id];
    b = o.map((x, j) => { let c = 'opt'; if (fin && !run.ex) c += x.k === q.ans ? ' ok' : r.sel === x.k ? ' no' : ''; else if (r.sel === x.k) c += ' sel'; return `<button class="${c}" data-act="pick" data-k="${x.k}" ${fin && !run.ex ? 'disabled' : ''}><b>${'ABCD'[j]}.</b> ${inl(x.x)}</button>`; }).join('');
    if (fin && !run.ex) { const ok = r.sel === q.ans; b += fbk(ok, `Đáp án đúng: <b>${inl(q.opts.find(x => x.k === q.ans).x)}</b>. ${inl(q.exp)}`); }
  } else if (q.type === 'tf') {
    b = q.sts.map(s => { const v = r.sel && r.sel[s.k], ok = fin && !run.ex && v === s.a; const bad = fin && !run.ex && v !== s.a; return `<div class="card"><b>${s.k}.</b> ${inl(s.x)}<div class="row">${[[true, 'Đúng'], [false, 'Sai']].map(([a, t]) => `<button class="opt ${v === a ? 'sel' : ''}" style="width:auto" data-act="tf" data-k="${s.k}" data-v="${a}" ${fin && !run.ex ? 'disabled' : ''}>${t}</button>`).join('')}</div>${fin && !run.ex ? `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? 'Đúng' : 'Sai'} – đáp án: <b>${s.a ? 'Đúng' : 'Sai'}</b>. ${inl(s.e || '')}</div>` : ''}</div>`; }).join('');
    if (fin && !run.ex) b += `<p class="mut">Điểm câu này: ${r.pt}/1</p>`;
    else b += `<button class="btn pri" data-act="tfok" ${run.ex ? 'hidden' : ''}>Chấm câu này</button>`;
  } else {
    const a = S.ans[q.id] || {};
    b = `<p class="mut">${esc(q.kind)} (${esc(q.ref)})</p><textarea id="ta" aria-label="Câu trả lời của em" placeholder="Viết câu trả lời của em…">${esc(a.tx || '')}</textarea>
<div class="row"><button class="btn" data-act="hint">${r.hint ? 'Ẩn đáp án tham khảo' : 'Xem đáp án tham khảo'}</button></div>
${r.hint ? `<div class="fb">${q.hint ? '<p>' + inl(q.hint) + '</p>' : ''}${q.pts.length ? '<p><b>Tự đối chiếu:</b></p>' + q.pts.map((p, j) => `<label class="chk"><input type="checkbox"> ${inl(p)}</label>`).join('') : ''}${q.nt ? `<p class="mut">${inl(q.nt)} Hãy tự thực hiện rồi đánh dấu hoàn thành.</p>` : ''}</div><div class="row"><button class="btn pri" data-act="self" data-v="1">Em đã làm được</button><button class="btn" data-act="self" data-v="0">Cần xem lại bài</button></div>` : ''}
${fin ? `<p class="mut">Đã ghi nhận: ${r.self ? 'đã làm được' : 'cần xem lại'}. Câu tự luận không tính vào điểm số.</p>` : ''}`;
  }
  const last = run.i === n - 1;
  app.innerHTML = `<p class="mut">${esc(run.title)} · ${run.ex ? 'Kiểm tra' : 'Luyện tập'} · ${esc(q.type === 'essay' ? q.kind : q.type === 'mcq' ? 'Trắc nghiệm' : 'Đúng/Sai')} · ${lnk(q.lesson)}</p>${prog(Math.round(run.i / n * 100))}
<h2>Câu ${run.i + 1}/${n}</h2><div class="card"><p><b>${inl(q.q)}</b></p>${b}${q.st === 'review' ? `<p class="mut">Lưu ý: ${esc(q.nt)}</p>` : ''}</div>
<div class="row"><button class="btn" data-act="prev" ${run.i ? '' : 'disabled'}>← Câu trước</button>${last ? `<button class="btn pri" data-act="end">${run.ex ? 'Nộp bài' : 'Xem kết quả'}</button>` : '<button class="btn pri" data-act="next">Câu sau →</button>'}</div>`;
  if (fin && !run.ex || q.type === 'essay') window.scrollTo(0, 0);
}
function finish() {
  const g = run.list.filter(gradable);
  run.list.forEach(q => { const r = run.r[q.id] || (run.r[q.id] = {}); if (!r.done) { r.done = 1; if (q.type !== 'essay') record(q, r); } });
  const sum = g.reduce((a, q) => a + (run.r[q.id].pt || 0), 0), sc = g.length ? Math.round(sum / g.length * 100) / 10 : null;
  if (run.ex && g.length) { S.hist.push({ t: Date.now(), title: run.title, sc, n: g.length }); save(); }
  const bad = run.list.filter(q => gradable(q) && (run.r[q.id].pt || 0) < 1);
  app.innerHTML = `<h1>Kết quả</h1><div class="stats"><div><b>${sc === null ? '–' : sc}</b>điểm / 10</div><div><b>${g.length - bad.length}/${g.length}</b>câu đúng hoàn toàn</div><div><b>${run.list.length - g.length}</b>câu tự luận (tự đánh giá)</div></div>
<div class="row">${bad.length ? '<button class="btn pri" data-act="redo">Làm lại câu sai (' + bad.length + ')</button>' : ''}<button class="btn" data-act="again">Làm lại cả bộ</button><a class="btn" href="#/practice">Về trang luyện tập</a></div>
<h2>Xem lại</h2>${run.list.map((q, j) => { const r = run.r[q.id], ok = q.type === 'essay' ? r.self : r.pt === 1; return `<div class="card"><b>${j + 1}. ${inl(q.q)}</b><br><span class="${ok ? 'pass' : 'fail'}">${q.type === 'essay' ? (r.self ? 'Tự đánh giá: đã làm được' : 'Tự đánh giá: cần xem lại') : ok ? 'Đúng' : 'Chưa đúng hoàn toàn (' + r.pt + '/1)'}</span>${q.type === 'mcq' ? `<p>Đáp án: ${inl(q.opts.find(x => x.k === q.ans).x)}. ${inl(q.exp)}</p>` : q.type === 'tf' ? '<ul>' + q.sts.map(s => `<li>${s.k}. ${inl(s.x)} → <b>${s.a ? 'Đúng' : 'Sai'}</b>${r.sel && r.sel[s.k] === s.a ? '' : ' <span class="fail">(em chọn khác)</span>'} ${inl(s.e)}</li>`).join('') + '</ul>' : ''}<p class="mut">Ôn lại: ${lnk(q.lesson)}</p></div>`; }).join('')}`;
  window.scrollTo(0, 0);
}

/* ---------- ôn tập ---------- */
const MODES = { lesson: 'Theo từng bài', topic: 'Theo chủ đề', multi: 'Nhiều bài được chọn', all: 'Toàn bộ phạm vi', terms: 'Theo thuật ngữ', wrong: 'Các câu từng trả lời sai', flag: 'Nội dung đã đánh dấu cần ghi nhớ', random: 'Ngẫu nhiên nhanh', hk: 'Theo học kì (theo BAO_CAO_KIEM_KE.md)' };
function pool() {
  const ids = C.lessons.map(l => l.id); let sel = ids;
  const m = rv.mode, p = rv.p;
  if (m === 'lesson') sel = [p || ids[0]]; else if (m === 'topic') sel = C.lessons.filter(l => l.topic === +(p || 0)).map(l => l.id);
  else if (m === 'multi') sel = [...document.querySelectorAll('#rp input:checked')].map(x => x.value);
  else if (m === 'flag') sel = ids.filter(i => ls(i).r); else if (m === 'hk') { const [a, b] = C.hk[p || 'HK1']; sel = C.lessons.filter(l => l.n >= a && l.n <= b).map(l => l.id); }
  let cards = m === 'terms' ? termCards(sel) : cardsOf(sel), qs = QS().filter(q => sel.includes(q.lesson));
  if (m === 'wrong') { cards = []; qs = QS().filter(q => S.ans[q.id] && S.ans[q.id].ok === false); }
  if (m === 'random') { cards = shuf(cardsOf(ids)).slice(0, 10); qs = shuf(QS()).slice(0, 10); }
  return { cards, qs };
}
function review(pre) {
  if (pre) { rv.mode = 'lesson'; rv.p = pre; }
  const opt = (a, v) => a.map(([k, t]) => `<option value="${k}" ${String(v) === String(k) ? 'selected' : ''}>${esc(t)}</option>`).join('');
  const par = rv.mode === 'lesson' ? `<select id="rpv">${opt(C.lessons.map(l => [l.id, l.title]), rv.p || C.lessons[0].id)}</select>` : rv.mode === 'topic' ? `<select id="rpv">${opt(C.topics.map((t, i) => [i, t]), rv.p || 0)}</select>` : rv.mode === 'hk' ? `<select id="rpv">${opt([['HK1', 'Học kì 1 (Bài 1–14)'], ['HK2', 'Học kì 2 (Bài 15–28)']], rv.p || 'HK1')}</select>` : rv.mode === 'multi' ? `<div class="pick" id="rp">${C.lessons.map(l => `<label><input type="checkbox" value="${l.id}"> ${l.n}. ${esc(l.title.replace(/^Bài \d+\.\s*/, ''))}</label>`).join('')}</div>` : '';
  return `<h1>Ôn tập kiến thức</h1><div class="card"><div class="row"><label>Chế độ ôn tập <select id="rm">${opt(Object.entries(MODES), rv.mode)}</select></label>${rv.mode === 'multi' ? '' : par}</div>${rv.mode === 'multi' ? par : ''}<div class="row" id="rb"></div></div>
<p class="mut">Thẻ ghi nhớ gồm thuật ngữ và nội dung cần ghi nhớ của từng bài (lấy nguyên văn từ kho kiến thức). Câu hỏi ôn tập lấy từ ngân hàng câu hỏi nguồn; bài chưa có câu hỏi trong nguồn vẫn ôn được bằng thẻ.</p>`;
}
function reviewBtns() {
  const { cards, qs } = pool(), el = $('#rb'); if (!el) return;
  el.innerHTML = `<button class="btn pri" data-act="rcards" ${cards.length ? '' : 'disabled'}>Ôn bằng thẻ ghi nhớ (${cards.length})</button><button class="btn pri" data-act="rqs" ${qs.length ? '' : 'disabled'}>Ôn bằng câu hỏi (${qs.length})</button>${!cards.length && !qs.length ? '<span class="mut">Chưa có nội dung phù hợp cho chế độ này.</span>' : ''}`;
}
let cr = null;
function cardShow() {
  if (cr.i >= cr.c.length) { const un = cr.c.filter(c => S.cards[c.id] === 0); app.innerHTML = `<h1>Hoàn thành lượt ôn</h1><p>Đã nhớ ${cr.c.length - un.length}/${cr.c.length} thẻ.</p><div class="row">${un.length ? '<button class="btn pri" data-act="cagain">Ôn lại thẻ chưa nhớ (' + un.length + ')</button>' : ''}<a class="btn" href="#/review">Chọn chế độ khác</a></div>${[...new Set(un.map(c => c.l))].map(i => `<p>Cần xem lại: ${lnk(i)}</p>`).join('')}`; return; }
  const c = cr.c[cr.i];
  app.innerHTML = `<p class="mut">Thẻ ${cr.i + 1}/${cr.c.length} · ${c.k} · ${lnk(c.l)}</p>${prog(Math.round(cr.i / cr.c.length * 100))}<div class="card flip"><div>${inl(c.f)}${cr.f ? `<hr><div>${inl(c.b)}</div>` : ''}</div></div>
<div class="row">${cr.f ? '<button class="btn pri" data-act="know" data-v="1">Đã nhớ</button><button class="btn" data-act="know" data-v="0">Chưa nhớ</button>' : '<button class="btn pri" data-act="flip">Lật thẻ</button>'}</div><p class="mut">Hãy tự nhớ lại trước khi lật thẻ.</p>`;
}

/* ---------- tiến độ, sao lưu ---------- */
function progress() {
  const rows = C.lessons.map(l => { const q = qOf(l.id).filter(x => x.type !== 'essay'), a = q.filter(x => S.ans[x.id]), ok = a.filter(x => S.ans[x.id].ok); return `<tr><td>${l.n}</td><td>${lnk(l.id)}</td><td>${ST[status(l.id)]} (${pct(l.id)}%)</td><td>${q.length ? ok.length + '/' + a.length + ' đúng · ' + q.length + ' câu' : 'chưa có câu hỏi'}</td></tr>`; }).join('');
  const last = ls(S.last).o;
  return `<h1>Tiến độ học tập</h1><p class="mut">Học gần nhất: ${S.last ? lnk(S.last) + ' lúc ' + new Date(last).toLocaleString('vi-VN') : 'chưa có'}. Dữ liệu chỉ nằm trên thiết bị này và trình duyệt này, không đồng bộ giữa các máy.</p>
<div class="row"><button class="btn pri" data-act="exp">Sao lưu tiến độ (JSON)</button><label class="btn">Khôi phục từ tệp<input type="file" id="imp" accept=".json,application/json" hidden></label><button class="btn" data-act="rst">Xóa toàn bộ dữ liệu học tập</button></div><p id="msg" class="mut" role="status"></p>
<h2>Kết quả các lần kiểm tra</h2>${S.hist.length ? '<table><tr><th>Thời điểm</th><th>Phạm vi</th><th>Số câu chấm</th><th>Điểm /10</th></tr>' + S.hist.slice().reverse().map(h => `<tr><td>${new Date(h.t).toLocaleString('vi-VN')}</td><td>${esc(h.title)}</td><td>${h.n}</td><td>${h.sc}</td></tr>`).join('') + '</table>' : '<p>Chưa có bài kiểm tra nào. <a href="#/practice">Làm bài kiểm tra</a>.</p>'}
<h2>Chi tiết từng bài</h2><table><tr><th>Bài</th><th>Tên bài</th><th>Trạng thái</th><th>Câu hỏi</th></tr>${rows}</table>`;
}
function search(q) {
  const k = norm(q || '').trim(); if (!k) return '<h1>Tìm kiếm</h1><p>Nhập từ khóa vào ô tìm kiếm phía trên.</p>';
  const out = [];
  C.lessons.forEach(l => { const d = T.L[l.id], tm = d.terms.filter(t => norm(t.t + ' ' + t.d).includes(k)), ti = norm(l.title).includes(k), tx = norm(d.txt), p = tx.indexOf(k); if (ti || tm.length || p >= 0) out.push({ l, tm, p, d, ti }); });
  return `<h1>Kết quả cho “${esc(q)}”</h1><p class="mut">${out.length} bài có nội dung khớp.</p>` + out.map(({ l, tm, p, d }) => `<div class="card"><h3>${lnk(l.id)}</h3>${tm.map(t => `<p><code>${esc(t.t)}</code>: ${inl(t.d)}</p>`).join('')}${p >= 0 ? `<p class="mut">…${esc(d.txt.slice(Math.max(0, p - 50), p + 90))}…</p>` : ''}</div>`).join('');
}

/* ---------- định tuyến và sự kiện ---------- */
function route() {
  const [p, a] = decodeURIComponent(location.hash.slice(2)).split('/'); run = null;
  document.querySelectorAll('#nav a').forEach(x => x.classList.toggle('on', x.getAttribute('href') === '#/' + p));
  const v = { '': home, lessons, lesson: () => lesson(a), practice: () => practice(a), review: () => review(a), progress, search: () => search(a) }[p || ''];
  app.innerHTML = v ? v() : '<h1>Không tìm thấy trang</h1><p><a href="#/">Về trang chủ</a></p>';
  if (p === 'lessons') lessonList(); if (p === 'review') reviewBtns();
  document.title = (p === 'lesson' && L(a) ? L(a).title + ' – ' : '') + 'Tự học Tin học 12'; window.scrollTo(0, 0);
}
const cur = () => run.list[run.i], rr = () => run.r[cur().id];
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return; const a = b.dataset.act, id = (location.hash.split('/')[2] || '');
  if (a === 'go') { e.preventDefault(); const el = $('#s-' + b.dataset.k); el && el.scrollIntoView(); }
  else if (a === 'run') { const f = document.createElement('iframe'); f.className = 'pv'; f.setAttribute('sandbox', ''); f.title = 'Kết quả hiển thị'; f.srcdoc = codes[+b.dataset.i]; b.parentNode.after(f); b.disabled = true; }
  else if (a === 'done') { const l = mk(id); l.d = !l.d; l.s = l.s.map(() => l.d ? 1 : 0); save(); route(); }
  else if (a === 'flag') { const l = mk(id); l.r = !l.r; save(); route(); }
  else if (a === 'all' || a === 'none') document.querySelectorAll('#pk input:not(:disabled)').forEach(x => x.checked = a === 'all');
  else if (a === 'start') {
    const ids = [...document.querySelectorAll('#pk input:checked')].map(x => x.value), ty = [...document.querySelectorAll('.ty:checked')].map(x => x.value), sh = $('#sh').checked, n = Math.max(1, +$('#cn').value || 1);
    S.tfm = $('#tfm').checked ? 1 : 0; save();
    if (!ids.length) { alert('Hãy chọn ít nhất một bài có câu hỏi.'); return; }
    let l = QS().filter(q => ids.includes(q.lesson) && ty.includes(q.type)); if (sh) l = shuf(l); l = l.slice(0, n);
    const ex = document.querySelector('[name=md]:checked').value === 'e';
    start(l, { ex, shuffle: sh, title: ids.length === 1 ? L(ids[0]).title : ids.length + ' bài' });
  }
  else if (a === 'pick') { const r = rr(); if (r.done && !run.ex) return; r.sel = b.dataset.k; if (!run.ex) { r.done = 1; record(cur(), r); } show(); }
  else if (a === 'tf') { const r = rr(); r.sel = r.sel || {}; r.sel[b.dataset.k] = b.dataset.v === 'true'; show(); }
  else if (a === 'tfok') { const r = rr(), q = cur(); if (!r.sel || Object.keys(r.sel).length < q.sts.length) { alert('Hãy chọn Đúng hoặc Sai cho cả ' + q.sts.length + ' nhận định.'); return; } r.done = 1; record(q, r); show(); }
  else if (a === 'hint') { const r = rr(); r.hint = !r.hint; show(); }
  else if (a === 'self') { const r = rr(), q = cur(); r.self = b.dataset.v === '1'; r.done = 1; record(q, r); show(); }
  else if (a === 'next') { run.i++; show(); } else if (a === 'prev') { run.i--; show(); } else if (a === 'end') finish();
  else if (a === 'redo') { const l = run.list.filter(q => gradable(q) && (run.r[q.id].pt || 0) < 1), o = { ex: run.ex, shuffle: run.shuffle, title: run.title + ' (làm lại câu sai)' }; start(l, o); }
  else if (a === 'again') start(run.shuffle ? shuf(run.list) : run.list, { ex: run.ex, shuffle: run.shuffle, title: run.title });
  else if (a === 'rcards') { cr = { c: shuf(pool().cards), i: 0, f: 0 }; cardShow(); }
  else if (a === 'rqs') start(shuf(pool().qs), { ex: false, shuffle: true, title: MODES[rv.mode] });
  else if (a === 'flip') { cr.f = 1; cardShow(); }
  else if (a === 'know') { S.cards[cr.c[cr.i].id] = +b.dataset.v; save(); cr.i++; cr.f = 0; cardShow(); }
  else if (a === 'cagain') { cr = { c: cr.c.filter(c => S.cards[c.id] === 0), i: 0, f: 0 }; cardShow(); }
  else if (a === 'exp') { const t = new Blob([JSON.stringify({ app: 'tin12', v: 1, exported: new Date().toISOString(), data: S })], { type: 'application/json' }), u = URL.createObjectURL(t), x = document.createElement('a'); x.href = u; x.download = 'tin12-tien-do-' + new Date().toISOString().slice(0, 10) + '.json'; document.body.append(x); x.click(); x.remove(); setTimeout(() => URL.revokeObjectURL(u), 1000); $('#msg').textContent = 'Đã tạo tệp sao lưu.'; }
  else if (a === 'rst') { if (confirm('Xóa toàn bộ tiến độ, kết quả và câu trả lời trên thiết bị này? Thao tác không thể hoàn tác.') && confirm('Xác nhận lần cuối: xóa tất cả dữ liệu học tập?')) { S = blank(); save(); route(); } }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.act === 'sec') { const l = mk(location.hash.split('/')[2]); l.s[+t.dataset.j] = t.checked ? 1 : 0; if (l.s.some(x => !x)) l.d = 0; save(); const p = $('.bar i'); p && (p.style.width = pct(location.hash.split('/')[2]) + '%'); }
  else if (t.id === 'sf') lessonList();
  else if (t.id === 'rm') { rv.mode = t.value; rv.p = ''; app.innerHTML = review(); reviewBtns(); }
  else if (t.id === 'rpv') { rv.p = t.value; reviewBtns(); }
  else if (t.closest('#rp')) reviewBtns();
  else if (t.id === 'imp' && t.files[0]) {
    const f = new FileReader();
    f.onload = () => { try { const j = JSON.parse(f.result), d = j.data; if (j.app !== 'tin12' || !d || typeof d.les !== 'object' || typeof d.ans !== 'object') throw 0; if (!confirm('Khôi phục sẽ thay thế tiến độ hiện tại bằng nội dung trong tệp. Tiếp tục?')) return; S = d; loadS2(); save(); route(); } catch (x) { $('#msg').textContent = 'Tệp không hợp lệ: cần tệp sao lưu do website này tạo ra.'; } };
    f.readAsText(t.files[0]);
  }
});
function loadS2() { const b = blank(); for (const k in b) if (S[k] === undefined) S[k] = b[k]; if (!Array.isArray(S.hist)) S.hist = []; if (!S.cards || typeof S.cards !== 'object') S.cards = {}; }
document.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'lf') lessonList();
  else if (t.id === 'ta' && run) { const q = cur(), a = S.ans[q.id] || (S.ans[q.id] = { n: 0 }); a.tx = t.value; save(); }
  else if (t.id === 'q') { const v = t.value.trim(); if (v) location.hash = '#/search/' + encodeURIComponent(v); }
});
$('#th').onclick = () => { S.th = document.documentElement.dataset.th === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.th = S.th; save(); };

/* ---------- khởi động ---------- */
const ld = u => new Promise(r => { const s = document.createElement('script'); s.src = u; s.onload = () => r(1); s.onerror = () => r(0); document.head.append(s); });
(async () => {
  C = T.cat; loadS();
  document.documentElement.dataset.th = S.th || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  if (!C) { app.innerHTML = '<h1>Không tải được dữ liệu</h1><p>Thiếu tệp <code>data/catalog.js</code>. Hãy giải nén đầy đủ thư mục website rồi mở lại <code>index.html</code>.</p>'; return; }
  await Promise.all([...C.lessons.filter(l => !T.L[l.id]).map(l => ld('data/lessons/' + l.id + '.js')), ...C.qfiles.filter(i => !T.Q[i]).map(i => ld('data/questions/' + i + '.js'))]);
  const miss = C.lessons.filter(l => !T.L[l.id]).map(l => l.id).concat(C.qfiles.filter(i => !T.Q[i]));
  if (miss.length) { app.innerHTML = `<h1>Thiếu tệp dữ liệu</h1><p>Không nạp được: ${miss.map(esc).join(', ')}. Hãy giải nén đầy đủ thư mục website.</p>`; return; }
  addEventListener('hashchange', route); route();
})();
})();
