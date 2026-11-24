import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { performance } from 'node:perf_hooks';

const site = new URL(process.argv[2]);
const proxy = process.env.KTC_BROWSER_PROXY;
const browser = await chromium.launch(proxy ? { proxy: { server: proxy, bypass: '127.0.0.1,localhost' } } : {});
try {
    const page = await browser.newPage({
        viewport: { width: 1280, height: 800 },
        ignoreHTTPSErrors: Boolean(proxy),
    });
    await page.route('**/assets/js/ktc-config.js', (route) =>
        route.fulfill({ contentType: 'text/javascript', body: "window.KTC_API_URL = '';" }));
    const errors = [];
    page.on('console', (entry) => {
        if (['warning', 'error'].includes(entry.type())) console.error(entry.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));
    for (const path of ['index.html', 'course.html?grade=12', 'de-thi-tot-nghiep.html']) {
        await page.goto(new URL(path, site).href);
        await page.getByRole('link', { name: 'Trợ lý AI KTC', exact: true }).waitFor();
    }
    await page.goto(new URL('course.html?grade=12#/lesson/ICT12_B11', site).href);
    await page.getByRole('link', { name: 'Trợ lý AI KTC', exact: true }).click();
    assert.match(page.url(), /grade=12&lesson=ICT12_B11/);
    await page.getByRole('link', { name: 'Bài 11', exact: true }).waitFor();
    for (const width of [1280, 390, 320]) {
        await page.setViewportSize({ width, height: 800 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    const ask = async (question) => {
        await page.getByLabel('Câu hỏi của em').fill(question);
        const start = performance.now();
        await page.getByRole('button', { name: 'Gửi câu hỏi' }).click();
        await page.waitForFunction(() => !document.getElementById('send').disabled, null, { timeout: 125000 });
        const answer = page.locator('#chat article[data-author="ktc"]').last();
        assert.ok(await answer.count(), await page.locator('#status').textContent());
        const source = await answer.getByRole('link').first().getAttribute('href');
        assert.match(source, /ICT12_B11$/);
        return Math.round(performance.now() - start);
    };
    const coldMs = await ask('Ảnh không tải được. Thuộc tính nào dùng để mô tả ảnh thay thế?');
    const warmMs = await ask('Thuộc tính alt có tác dụng gì?');
    await page.getByRole('button', { name: 'Tìm trong cả khối' }).click();
    assert.equal(await page.locator('#chat article').count(), 0);
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ viewports: [1280, 390, 320], menuPages: 3, coldMs, warmMs }));
} finally {
    await browser.close();
}
