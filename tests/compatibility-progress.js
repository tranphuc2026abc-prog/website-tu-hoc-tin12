// Kiem tra tuong thich tien do da co; chi dung localStorage tam trong Chromium.
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path'), fs = require('fs'), http = require('http');

const root = path.resolve(__dirname, '..');
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) {
    response.writeHead(403); response.end(); return;
  }
  fs.readFile(file, (error, data) => {
    if (error) { response.writeHead(404); response.end(); return; }
    const type = file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : 'text/html';
    response.writeHead(200, { 'Content-Type': type }); response.end(data);
  });
});
const lessons = { 10: 'ICT10_B08', 11: 'ICT11_B05', 12: 'ICT12_B03' };

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = 'http://127.0.0.1:' + server.address().port + '/index.html';
  const browser = await chromium.launch({ headless: true });
  let checks = 0;
  const ok = (condition, message) => {
    if (!condition) throw new Error('FAIL: ' + message);
    checks++;
    console.log('ok:', message);
  };
  try {
    for (const [grade, lesson] of Object.entries(lessons)) {
      const context = await browser.newContext();
      await context.addInitScript(({ grade, lesson }) => {
        localStorage.setItem('tin' + grade + '.v1', JSON.stringify({
          v: 1, les: { [lesson]: { s: [1, 1, 0, 0, 0, 0, 0], o: 1 } },
          ans: {}, cards: {}, hist: [], quizSeen: {}, last: lesson, th: null, tfm: 0
        }));
      }, { grade, lesson });
      const page = await context.newPage();
      await page.goto(url);
      const link = page.locator('.continue-link');
      ok(await link.count() === 1, 'hien the tiep tuc tu khoa tin' + grade + '.v1');
      ok((await link.getAttribute('href')).includes('grade=' + grade + '#/lesson/' + lesson),
        'the tiep tuc tro den dung bai cua khoi ' + grade);
      await link.click();
      await page.waitForURL(new RegExp('course\\.html\\?grade=' + grade + '#/lesson/' + lesson));
      await page.locator('.chk input[type=checkbox]').first().waitFor({ state: 'visible' });
      ok(await page.locator('.chk input[type=checkbox]:checked').count() === 2,
        'tien do cac muc bai cu duoc doc lai o khoi ' + grade);
      await context.close();
    }

    const empty = await browser.newContext();
    const emptyPage = await empty.newPage();
    await emptyPage.goto(url);
    ok(await emptyPage.locator('.continue-link').count() === 0,
      'hoc sinh moi khong hien the tiep tuc');
    ok(await emptyPage.locator('.grade-card').count() === 3,
      'trang chon khoi van hoat dong khi chua co tien do');
    await empty.close();

    const corrupt = await browser.newContext();
    await corrupt.addInitScript(() => {
      localStorage.setItem('tin10.v1', '{khong-phai-json');
      localStorage.setItem('tin11.v1', JSON.stringify({ last: 'ICT11_B05' }));
    });
    const corruptPage = await corrupt.newPage();
    await corruptPage.goto(url);
    ok((await corruptPage.locator('.continue-link').getAttribute('href'))
      .includes('grade=11#/lesson/ICT11_B05'),
      'bo qua JSON hong va tim tien do hop le tiep theo');
    await corrupt.close();

    const blocked = await browser.newContext();
    await blocked.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        get() { throw new Error('localStorage blocked for compatibility test'); }
      });
    });
    const blockedPage = await blocked.newPage();
    await blockedPage.goto(url);
    ok(await blockedPage.locator('.grade-card').count() === 3,
      'trang chon khoi van dung khi localStorage bi chan');
    await blocked.close();
    console.log('KET QUA: ' + checks + ' dat, 0 loi');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
