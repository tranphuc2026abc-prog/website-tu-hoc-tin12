// Tao bang chung giao dien va kiem tra responsive/truy cap khong thay doi du lieu.
const { chromium } = require(process.env.PW || 'playwright');
const fs = require('fs'), path = require('path'), http = require('http');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'docs/ui/anh');
fs.mkdirSync(out, { recursive: true });
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    const type = file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html';
    res.writeHead(200, { 'Content-Type': type }); res.end(data);
  });
});
const sizes = [{ w: 360, h: 740 }, { w: 768, h: 1024 }, { w: 1366, h: 768 }];
const firstLesson = { 10: 'ICT10_B01', 11: 'ICT11_B01', 12: 'ICT12_B01' };
const errors = [], metrics = { screenshots: [], checks: [], sampledContrast: [], touchTargets: [], unnamedControls: [], overflow: [] };
const safe = s => s.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
const shot = async (page, name) => {
  const file = path.join(out, safe(name) + '.png');
  await page.screenshot({ path: file, fullPage: false });
  metrics.screenshots.push(path.basename(file));
};
const assert = (ok, msg) => { metrics.checks.push({ ok: !!ok, message: msg }); if (!ok) errors.push(msg); };
async function open(page, grade, hash) {
  await page.goto(base + 'course.html?grade=' + grade + hash);
  await page.locator('#app').waitFor({ state: 'visible' });
  await page.waitForFunction(() => !document.querySelector('#app')?.innerText.includes('Đang mở học liệu'));
}
async function screenshotSet() {
  for (const size of sizes) {
    const ctx = await browser.newContext({ viewport: { width: size.w, height: size.h }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(base + 'index.html');
    await page.locator('.grade-card').first().waitFor({ state: 'visible' });
    await shot(page, 'trang-chon-khoi-moi-' + size.w + 'x' + size.h);
    for (const grade of [10, 11, 12]) {
      await open(page, grade, '#/');
      await shot(page, 'tong-quan-khoi-' + grade + '-' + size.w + 'x' + size.h);
      await page.goto(base + 'course.html?grade=' + grade + '#/lessons');
      await page.locator('#ll').waitFor({ state: 'visible' });
      await shot(page, 'danh-sach-bai-khoi-' + grade + '-' + size.w + 'x' + size.h);
      await page.goto(base + 'course.html?grade=' + grade + '#/lesson/' + firstLesson[grade]);
      await page.locator('.toc').waitFor({ state: 'visible' });
      await shot(page, 'bai-hoc-khoi-' + grade + '-' + size.w + 'x' + size.h);
      await page.goto(base + 'course.html?grade=' + grade + '#/review');
      await page.locator('#rm').waitFor({ state: 'visible' });
      await shot(page, 'on-tap-khoi-' + grade + '-' + size.w + 'x' + size.h);
      await page.goto(base + 'course.html?grade=' + grade + '#/practice');
      await page.locator('#pk').waitFor({ state: 'visible' });
      await shot(page, 'cau-hinh-luyen-tap-khoi-' + grade + '-' + size.w + 'x' + size.h);
      await page.goto(base + 'course.html?grade=' + grade + '#/progress');
      await page.locator('#msg').waitFor({ state: 'visible' });
      await shot(page, 'tien-do-khoi-' + grade + '-' + size.w + 'x' + size.h);
    }
    await ctx.close();
  }

  // Co tien do, che do toi, moi loai cau hoi, trang rong, tai va loi.
  const mobile = { width: 360, height: 740 };
  for (const grade of [10, 11, 12]) {
    const ctx = await browser.newContext({ viewport: mobile });
    await ctx.addInitScript(({ grade, lesson }) => localStorage.setItem('tin' + grade + '.v1', JSON.stringify({
      v: 1, les: {}, ans: {}, cards: {}, hist: [], quizSeen: {}, last: lesson, th: 'dark', tfm: 0
    })), { grade, lesson: firstLesson[grade] });
    const page = await ctx.newPage();
    await page.goto(base + 'index.html');
    await page.locator('.continue-link').waitFor({ state: 'visible' });
    await shot(page, 'trang-chon-khoi-tiep-tuc-khoi-' + grade + '-360x740');
    await open(page, grade, '#/');
    await shot(page, 'tong-quan-toi-khoi-' + grade + '-360x740');
    await page.goto(base + 'course.html?grade=' + grade + '#/lesson/' + firstLesson[grade]);
    await page.locator('.toc').waitFor({ state: 'visible' });
      await shot(page, 'bai-hoc-toi-khoi-' + grade + '-360x740');
    await page.goto(base + 'course.html?grade=' + grade + '#/progress');
    await page.locator('#msg').waitFor({ state: 'visible' });
      await shot(page, 'tien-do-toi-khoi-' + grade + '-360x740');
    for (const type of ['mcq', 'tf', 'essay']) {
      await page.goto(base + 'course.html?grade=' + grade + '#/practice/' + firstLesson[grade]);
      await page.locator('.ty').first().waitFor({ state: 'visible' });
      for (const checkbox of await page.locator('.ty').all()) {
        const value = await checkbox.getAttribute('value');
        await checkbox.setChecked(value === type);
      }
      await page.locator('[data-act=start]').click();
      await page.locator('.card[data-question-id]').waitFor({ state: 'visible' });
      await shot(page, 'luyen-tap-' + type + '-khoi-' + grade + '-360x740');
    }
    await ctx.close();
  }
  {
    const ctx = await browser.newContext({ viewport: mobile });
    const page = await ctx.newPage();
    await page.goto(base + 'course.html?grade=12#/review');
    await page.locator('#rm').waitFor({ state: 'visible' });
    await page.locator('#rm').selectOption('wrong');
    await page.locator('#rb').waitFor({ state: 'visible' });
    await shot(page, 'on-tap-rong-cau-sai-360x740');
    await ctx.close();
  }
  {
    const ctx = await browser.newContext({ viewport: mobile });
    const page = await ctx.newPage();
    await page.route('**/data/catalog-10.js', route => new Promise(() => {}));
    await page.goto(base + 'course.html?grade=10', { waitUntil: 'domcontentloaded' });
    await page.locator('#app').waitFor({ state: 'visible' });
    await shot(page, 'trang-dang-tai-360x740');
    await ctx.close();
  }
  {
    const ctx = await browser.newContext({ viewport: mobile });
    const page = await ctx.newPage();
    await page.route('**/data/catalog-10.js', route => route.abort());
    await page.goto(base + 'course.html?grade=10');
    await page.locator('[role=alert]').waitFor({ state: 'visible' });
    await shot(page, 'loi-tai-du-lieu-khoi-10-360x740');
    await ctx.close();
  }
}
async function measure() {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 } });
  const page = await ctx.newPage();
  await page.goto(base + 'index.html');
  await page.locator('.grade-card').first().waitFor({ state: 'visible' });
  const home = await page.evaluate(() => {
    const visible = el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    const name = el => (el.getAttribute('aria-label') || el.getAttribute('title') || el.innerText || '').trim();
    const rgb = s => { const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); return m ? [Number(m[1]),Number(m[2]),Number(m[3])] : null; };
    const lum = c => { const a=c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4});return .2126*a[0]+.7152*a[1]+.0722*a[2]; };
    const contrast = (a,b) => { const x=lum(a),y=lum(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
    const bg = el => { let n=el; while(n){const c=getComputedStyle(n).backgroundColor, parsed=rgb(c); if(parsed && !c.includes(', 0)') && !c.endsWith('/ 0)'))return parsed; n=n.parentElement;} return [255,255,255]; };
    const controls=[...document.querySelectorAll('a,button,input,select,textarea,[role=button]')].filter(visible);
    const unnamed=controls.filter(el => !name(el) && !el.closest('label')).map(el=>({tag:el.tagName, id:el.id, cls:el.className}));
    const small=controls.map(el=>{const r=el.getBoundingClientRect();return {tag:el.tagName,id:el.id,cls:String(el.className).slice(0,80),w:Math.round(r.width),h:Math.round(r.height),text:(el.innerText||el.getAttribute('aria-label')||'').trim().slice(0,70)};}).filter(x=>x.w<44||x.h<44);
    const leaves=[...document.querySelectorAll('body *')].filter(el=>visible(el)&&el.children.length===0&&el.textContent.trim());
    const low=leaves.map(el=>{const st=getComputedStyle(el),fg=rgb(st.color),back=bg(el),ratio=fg?contrast(fg,back):null,big=parseFloat(st.fontSize)>=24|| (parseFloat(st.fontSize)>=18.66&&parseInt(st.fontWeight)>=700);return {text:el.textContent.trim().slice(0,70),fg:st.color,bg:back.join(','),ratio:ratio&&Math.round(ratio*100)/100,large:big};}).filter(x=>x.ratio && x.ratio < (x.large?3:4.5));
    return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,overflow:document.documentElement.scrollWidth>innerWidth+1,unnamed,small,lowContrast:low};
  });
  assert(!home.overflow, 'trang chon khoi khong tran ngang o 360px');
  assert(home.unnamed.length===0, 'cac nut/lien ket trang chon khoi co ten');
  metrics.unnamedControls.push(...home.unnamed.map(x=>({page:'home',...x})));
  metrics.touchTargets.push(...home.small.map(x=>({page:'home',...x})));
  metrics.sampledContrast.push(...home.lowContrast.map(x=>({page:'home',...x})));
  await page.keyboard.press('Tab');
  const focus=await page.evaluate(()=>{const el=document.activeElement,s=getComputedStyle(el);return {tag:el.tagName,id:el.id,cls:String(el.className),outline:s.outlineStyle,width:s.outlineWidth};});
  assert(focus.outline!=='none' && parseFloat(focus.width)>=1, 'focus ban phim hien thi tren trang chu');
  const cardCount=await page.locator('.grade-card').count();
  for(let i=0;i<cardCount;i++){
    await page.locator('.grade-card').nth(i).click();
    await page.waitForURL(/course\.html/);
    const snap=await page.evaluate(()=>({grade:new URL(location.href).searchParams.get('grade'),width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
    assert(snap.grade===String(10+i), 'mo dung khoi '+(10+i));
    assert(snap.scrollWidth<=snap.width+1, 'khoa hoc khoi '+(10+i)+' khong tran ngang o 360px');
    const data=await page.evaluate(() => {
      const visible=el=>!!(el.offsetWidth||el.offsetHeight||el.getClientRects().length);
      const con=[...document.querySelectorAll('a,button,input,select,textarea,[role=button]')].filter(visible);
      const name=el=>(el.getAttribute('aria-label')||el.getAttribute('title')||el.innerText||'').trim();
      const unnamed=con.filter(el=>!name(el)&&!el.closest('label')).map(el=>({tag:el.tagName,id:el.id,cls:el.className}));
      const small=con.map(el=>{const r=el.getBoundingClientRect();return {tag:el.tagName,id:el.id,cls:String(el.className).slice(0,80),w:Math.round(r.width),h:Math.round(r.height),text:(el.innerText||el.getAttribute('aria-label')||'').trim().slice(0,70)}}).filter(x=>x.w<44||x.h<44);
      return {unnamed,small};
    });
    metrics.unnamedControls.push(...data.unnamed.map(x=>({page:'grade'+(10+i),...x})));
    metrics.touchTargets.push(...data.small.map(x=>({page:'grade'+(10+i),...x})));
    await page.goto(base+'index.html');
  }
  const css=await page.evaluate(()=>({body:getComputedStyle(document.body).fontSize, root:getComputedStyle(document.documentElement).getPropertyValue('--mut').trim()}));
  metrics.checks.push({ok:true,message:'CSS co nen chu co so '+css.body+' va token chu phu '+css.root});
  await fs.promises.writeFile(path.join(out,'bao-cao-do-tu-dong.json'),JSON.stringify(metrics,null,2),'utf8');
  await ctx.close();
}
let browser, base;
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  base='http://127.0.0.1:'+server.address().port+'/';
  browser=await chromium.launch({headless:true});
  await screenshotSet();
  await measure();
  console.log('UI_SCREENSHOTS='+metrics.screenshots.length);
  console.log('UI_CHECKS='+JSON.stringify(metrics.checks));
  console.log('UNNAMED_CONTROLS='+JSON.stringify(metrics.unnamedControls));
  console.log('SMALL_TOUCH_TARGETS='+JSON.stringify(metrics.touchTargets));
  console.log('LOW_CONTRAST_SAMPLE='+JSON.stringify(metrics.sampledContrast));
  if(errors.length) throw new Error(errors.join('; '));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
