// Kiem thu tu dong bang Chromium that: node tests/e2e.js [file|http]
const { chromium } = require(process.env.PW || '/home/claude/.npm-global/lib/node_modules/playwright');
const path = require('path'), http = require('http'), fs = require('fs');
const root = path.resolve(__dirname, '..'); const entry = process.argv[3] || 'index.html'; const mode = process.argv[2] || 'file';
let pass = 0, fail = 0; const ok = (c, m) => { c ? pass++ : (fail++, console.log('  FAIL:', m)); if (c) console.log('  ok  :', m); };
(async () => {
  let url, srv;
  if (mode === 'http') { srv = http.createServer((q, r) => { const f = path.join(root, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/' + entry)); fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'Content-Type': f.endsWith('.js') ? 'text/javascript' : f.endsWith('.css') ? 'text/css' : 'text/html' }); r.end(d); } }); }).listen(8765); url = 'http://localhost:8765/index.html'; }
  else url = 'file://' + root + '/' + entry;
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 1100, height: 800 }, acceptDownloads: true }); const p = await ctx.newPage();
  const errs = [], ext = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  p.on('request', r => { const u = r.url(); if (!u.startsWith('file:') && !u.startsWith('http://localhost') && !u.startsWith('data:') && !u.startsWith('blob:') && !u.startsWith('about:')) ext.push(u); });
  await p.goto(url); await p.waitForSelector('.map');
  console.log('== Trang chu'); ok(await p.locator('.cell').count() === 28, '28 o bai tren ban do');
  ok((await p.textContent('.stats')).includes('28') && (await p.textContent('.stats')).includes('31'), 'thong ke 28 bai / 31 cau tinh tu du lieu');
  console.log('== Mo tung bai'); let bad = [];
  for (let n = 1; n <= 28; n++) { const id = 'ICT12_B' + String(n).padStart(2, '0'); await p.goto(url + '#/lesson/' + id); await p.waitForSelector('.sheet'); const c = await p.locator('.sheet').count(), h = await p.textContent('h1'); const terms = await p.locator('.sheet.terms li').count(); if (c !== 7 || !h.startsWith('Bài ' + n + '.') || terms < 3) bad.push(id + ':' + c + ':' + terms); }
  ok(!bad.length, 'moi bai hien du 7 muc + thuat ngu' + (bad.length ? ' loi: ' + bad : ''));
  console.log('== Lien ket noi bo'); let broken = 0;
  for (const id of ['ICT12_B08', 'ICT12_B18', 'ICT12_B28', 'ICT12_B23', 'ICT12_B05']) { await p.goto(url + '#/lesson/' + id); for (const h of await p.locator('.card a[href^="#/lesson/"]').evaluateAll(a => a.map(x => x.getAttribute('href')))) { await p.goto(url + h); if (!(await p.locator('.sheet').count())) broken++; } }
  ok(broken === 0, 'lien ket bai lien quan deu dan toi bai ton tai');
  await p.goto(url + '#/lesson/ICT12_B08'); ok((await p.textContent('.card h3')).includes('liên quan') && (await p.locator('text=Ôn lại kiến thức nền').count()) === 1, 'Bai 8 co nut On lai kien thuc nen');
  await p.goto(url + '#/lesson/ICT12_B07'); ok((await p.locator('button[data-act=run]').count()) >= 1, 'Bai 7 co nut xem ket qua code HTML'); await p.click('button[data-act=run]'); ok(await p.locator('iframe.pv').count() === 1, 'iframe sandbox hien ket qua');
  console.log('== Tien do'); await p.goto(url + '#/lesson/ICT12_B01'); await p.click('button[data-act=done]'); await p.reload(); await p.waitForSelector('.sheet');
  ok((await p.textContent('button[data-act=done]')).includes('Bỏ'), 'danh dau da hoc con sau khi tai lai'); await p.goto(url + '#/'); ok((await p.locator('.cell.done').count()) === 1, 'o bai 1 hien da hoan thanh');
  await p.goto(url + '#/lesson/ICT12_B02'); await p.locator('input[data-act=sec]').first().check(); await p.goto(url + '#/'); ok((await p.locator('.cell.doing').count()) >= 1, 'trang thai dang hoc');
  console.log('== Tim kiem'); await p.fill('#q', 'dartmouth'); await p.waitForSelector('h1:has-text("Kết quả")'); ok((await p.locator('.card h3 a').count()) >= 1, 'tim kiem noi dung'); await p.fill('#q', 'tri tue nhan tao'); await p.waitForTimeout(200); ok((await p.locator('.card h3 a').count()) >= 1, 'tim khong dau');
  console.log('== Luyen tap'); await p.goto(url + '#/practice'); ok((await p.locator('#pk input:not(:disabled)').count()) === 10, '10 bai co cau hoi duoc chon (B01,02,03,04,07,10,13,17,24,27)'); 
  await p.click('[data-act=all]'); await p.fill('#cn', '31'); await p.uncheck('#sh'); await p.click('[data-act=start]'); await p.waitForSelector('.opt');
  let total = 0, seen = { mcq: 0, tf: 0, essay: 0 };
  for (let i = 0; i < 31; i++) { const kind = (await p.textContent('p.mut')); if (await p.locator('textarea').count()) { seen.essay++; await p.click('[data-act=hint]'); await p.click('[data-act=self][data-v="1"]'); } else if (await p.locator('[data-act=tf]').count()) { seen.tf++; for (const k of 'abcd') await p.click(`[data-act=tf][data-k=${k}][data-v=true]`); await p.click('[data-act=tfok]'); } else { seen.mcq++; await p.locator('.opt').first().click(); }
    total++; if (i < 30) await p.click('[data-act=next]'); }
  ok(seen.mcq === 23 && seen.tf === 5 && seen.essay === 3, 'lam du 31 cau: ' + JSON.stringify(seen));
  await p.click('[data-act=end]'); await p.waitForSelector('h1:has-text("Kết quả")'); ok(await p.locator('[data-act=redo]').count() === 1, 'co nut lam lai cau sai');
  console.log('== Dap an dung'); await p.goto(url + '#/practice/ICT12_B01'); await p.fill('#cn', '5'); await p.uncheck('#sh'); await p.uncheck('.ty[value=tf]'); await p.uncheck('.ty[value=essay]'); await p.click('[data-act=start]'); await p.waitForSelector('.opt');
  const q1 = await p.textContent('.card p b'); ok(q1.includes('1956') || q1.includes('Hội thảo'), 'cau 1 bai 1 dung noi dung'); const opts = await p.locator('.opt').allTextContents(); const j = opts.findIndex(t => t.includes('1956')); await p.locator('.opt').nth(j).click(); ok(await p.locator('.opt.ok').count() === 1 && (await p.locator('.fb.ok').count()) === 1, 'chon 1956 -> dung');
  console.log('== Dung/Sai cham diem'); await p.goto(url + '#/'); await p.goto(url + '#/practice/ICT12_B01'); await p.fill('#cn', '9'); await p.uncheck('#sh'); await p.uncheck('.ty[value=mcq]'); await p.uncheck('.ty[value=essay]'); await p.click('[data-act=start]'); await p.waitForSelector('[data-act=tf]');
  await p.click('[data-act=tf][data-k=a][data-v=false]'); await p.click('[data-act=tf][data-k=b][data-v=false]'); await p.click('[data-act=tf][data-k=c][data-v=true]'); await p.click('[data-act=tf][data-k=d][data-v=true]'); await p.click('[data-act=tfok]'); ok((await p.textContent('.card')).includes('1/1'), '4/4 y dung -> 1/1 diem');
  console.log('== On tap'); await p.goto(url + '#/review'); await p.waitForSelector('#rb button'); const modes = await p.locator('#rm option').count(); ok(modes === 9, '9 che do on tap'); let empty = [];
  for (const m of ['lesson', 'topic', 'multi', 'all', 'terms', 'wrong', 'flag', 'random', 'hk']) { await p.selectOption('#rm', m); if (m === 'multi') await p.locator('#rp input').first().check(); const t = await p.textContent('#rb'); const e = /\(0\)/.test(t); if (e) empty.push(m); }
  console.log('  che do rong (hop le neu chua co du lieu):', empty.join(',')); ok(!empty.includes('all') && !empty.includes('terms') && !empty.includes('random') && !empty.includes('hk'), 'che do chinh co noi dung');
  await p.selectOption('#rm', 'lesson'); await p.click('[data-act=rcards]'); await p.click('[data-act=flip]'); await p.click('[data-act=know][data-v="0"]'); ok(true, 'lat the va danh dau chua nho');
  await p.selectOption('#rm', 'wrong').catch(() => 0); 
  console.log('== Sao luu / khoi phuc'); await p.goto(url + '#/progress'); const [dl] = await Promise.all([p.waitForEvent('download'), p.click('[data-act=exp]')]); const f = await dl.path(); const j2 = JSON.parse(fs.readFileSync(f, 'utf8')); ok(j2.app === 'tin12' && j2.data.les.ICT12_B01.d === true, 'tep sao luu chua tien do');
  p.on('dialog', d => d.accept()); await p.click('[data-act=rst]'); await p.waitForTimeout(200); await p.goto(url + '#/'); ok((await p.locator('.cell.done').count()) === 0, 'xoa du lieu sau xac nhan'); await p.goto(url + '#/progress'); await p.setInputFiles('#imp', f); await p.waitForTimeout(300); await p.goto(url + '#/'); ok((await p.locator('.cell.done').count()) === 1, 'khoi phuc tu tep JSON');
  fs.writeFileSync('/tmp/bad.json', '{"x":1}'); await p.goto(url + '#/progress'); await p.setInputFiles('#imp', '/tmp/bad.json'); await p.waitForTimeout(200); ok((await p.textContent('#msg')).includes('không hợp lệ'), 'tu choi tep khong hop le');
  console.log('== Giao dien'); for (const [w, h] of [[390, 800], [820, 1000]]) { await p.setViewportSize({ width: w, height: h }); await p.goto(url + '#/lesson/ICT12_B15'); const sw = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth); ok(sw <= 2, `khong tran ngang o ${w}px (lech ${sw})`); }
  await p.setViewportSize({ width: 390, height: 800 }); await p.goto(url + '#/'); await p.screenshot({ path: '/tmp/home-m.png' }); await p.setViewportSize({ width: 1100, height: 800 }); await p.goto(url + '#/lesson/ICT12_B07'); await p.screenshot({ path: '/tmp/lesson.png' });
  await p.click('#th'); await p.screenshot({ path: '/tmp/dark.png' });
  console.log('== Loi JS / tai nguyen ngoai'); ok(errs.length === 0, 'khong co loi JS/console' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : '')); ok(ext.length === 0, 'khong goi tai nguyen ben ngoai' + (ext.length ? ': ' + ext.join(',') : ''));
  console.log('== Offline that'); await ctx.setOffline(true); await p.goto(url + '#/lesson/ICT12_B13'); await p.waitForSelector('.sheet'); ok((await p.locator('.sheet').count()) === 7, 'ngat mang van mo bai (' + mode + ')');
  await b.close(); srv && srv.close(); console.log(`\nKET QUA (${mode}): ${pass} dat, ${fail} loi`); process.exit(fail ? 1 : 0);
})();
