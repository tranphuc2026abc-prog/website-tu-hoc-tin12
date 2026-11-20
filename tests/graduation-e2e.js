// Dữ liệu giả chỉ dùng trong kiểm thử; không ghi vào ngân hàng sản phẩm.
const assert=require('node:assert/strict');
const fs=require('node:fs/promises'),path=require('node:path'),http=require('node:http');
const {chromium}=require(process.env.PW||'playwright');
const root=path.resolve(__dirname,'..');
(async()=>{
 const server=http.createServer(async(q,r)=>{try{const name=q.url.split('?')[0];const p=path.join(root,name==='/'?'index.html':name.slice(1));const b=await fs.readFile(p);r.setHeader('Content-Type',p.endsWith('.js')?'text/javascript':p.endsWith('.json')?'application/json':p.endsWith('.pdf')?'application/pdf':'text/html');r.end(b)}catch{r.writeHead(404);r.end()}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{});
 try{
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/de-thi-tot-nghiep.html');await page.waitForFunction(()=>document.querySelector('#exam-count').textContent.includes('48/48'));
 assert.equal(await page.getByRole('button',{name:'Xem đề PDF'}).count(),48);
 await page.locator('#exam-year').selectOption('2026');assert.match(await page.locator('#exam-count').innerText(),/48\/48/);
 await page.locator('#exam-filter').fill('0548');await page.getByRole('button',{name:'Xem đề PDF'}).click();assert.equal(await page.locator('#exam-frame').getAttribute('src'),'data/exams/2026/TIN_HOC_2026_0548.pdf');
 const manifest=JSON.parse(await fs.readFile(path.join(root,'data/exams/manifest.json'),'utf8'));
 for(const paths of Object.values(manifest.files))for(const p of Object.values(paths)){const r=await page.request.get(base+'/'+p);assert.equal(r.status(),200);assert.equal((await r.body()).subarray(0,4).toString(),'%PDF')}
 await page.getByRole('tab',{name:'Thi thử',exact:true}).click();assert.equal(await page.locator('#test-start').isDisabled(),true);
 await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 // Fixtures deliberately have no educational content or source attribution.
 const questions=Array.from({length:24},(_,i)=>({id:'test-m'+i,type:'mcq',year:2025,prompt:'TEST MCQ '+i,options:['CORRECT','WRONG1','WRONG2','WRONG3'],answer:0}));
 for(const track of ['common','ict','cs'])for(let i=0;i<2;i++)questions.push({id:'test-'+track+i,type:'tf',year:2025,track,prompt:'TEST TF '+track+i,options:['TEST a','TEST b','TEST c','TEST d'],answer:[true,true,true,true]});
 await page.route('**/data/exams/questions.json',r=>r.fulfill({json:{questions}}));await page.reload();await page.getByRole('tab',{name:'Thi thử',exact:true}).click();await page.waitForFunction(()=>!document.querySelector('#test-start').disabled);
 await page.locator('#test-start').click();assert.equal(await page.locator('#test-form fieldset').count(),28);
 for(const field of await page.locator('#test-form fieldset').all()){
  if((await field.locator('legend').innerText()).includes('Nhiều lựa chọn'))await field.locator('label').filter({hasText:'CORRECT'}).locator('input').check();
  else for(const label of await field.locator('label').all())if((await label.innerText()).trim()==='Đúng')await label.locator('input').check();
 }
 await page.locator('#test-submit').click();assert.match(await page.locator('#test-result').innerText(),/10.00\/10/);
 assert.equal(await page.locator('#test-form input:enabled').count(),0);
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('tin12.graduation.examHistory.v1')).length),1);
 await page.locator('#test-retry').click();await page.locator('#test-submit').click();assert.match(await page.locator('#test-result').innerText(),/0.00\/10/);
 assert.deepEqual(errors,[]);console.log('PASS: 96 PDF, year/code filter, missing-bank guard, mobile, 28-item paper, maximum 10, blank 0, history, answer lock.');
 }finally{await browser.close();server.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
