/* Only visually verified questions with official answer provenance can be graded. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),Core=window.GraduationCore;
const HISTORY='tin12.graduation.examHistory.v1',ACTIVE='tin12.graduation.active.v2';
const state={manifest:{files:{},papers:{}},bank:[],papers:new Map(),current:null,answers:{},flags:{},submitted:false,timer:null,deadline:0,session:null};
const hide=(el,yes)=>el.classList.toggle('exam-hidden',!!yes);
function node(tag,text,cls){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(cls)el.className=cls;return el;}
function readLocal(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
function writeLocal(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
function tab(which){for(const t of ['view','test']){$('tab-'+t).setAttribute('aria-selected',String(t===which));hide($('panel-'+t),t!==which);}}
$('tab-view').onclick=()=>tab('view');$('tab-test').onclick=()=>tab('test');
function renderFiles(){
 const year=$('exam-year').value,term=$('exam-filter').value.trim();$('exam-list').replaceChildren();let ready=0,shown=0;
 for(let n=501;n<=548;n++){const code=String(n).padStart(4,'0');if(!code.includes(term))continue;shown++;
 const card=node('div',undefined,'exam-item');card.append(node('strong','Mã đề '+code));const url=state.manifest.files[year]?.[code];
 if(typeof url==='string'&&/^data\/exams\/(2025|2026)\/[\w.-]+\.pdf$/.test(url)){ready++;const b=node('button','Xem đề PDF');b.type='button';b.onclick=()=>{$('exam-preview-title').textContent='Đề thi '+year+' · Mã đề '+code;$('exam-download').href=url;$('exam-frame').src=url;hide($('exam-preview'),false);$('exam-preview').scrollIntoView({behavior:'smooth'});};card.append(b);}else card.append(node('small','Chưa có PDF'));
 $('exam-list').append(card);
 }
 $('exam-count').textContent='Năm '+year+': '+ready+'/'+shown+' mã đề đã sẵn sàng để xem';hide($('exam-missing'),ready>0);hide($('exam-preview'),true);$('exam-frame').removeAttribute('src');
}
$('exam-year').onchange=renderFiles;$('exam-filter').oninput=renderFiles;
function filterState(){
 if($('test-mode').value==='original'&&$('test-year').value==='all')$('test-year').value='2025';
 const y=$('test-year').value,old=$('test-code').value;$('test-code').replaceChildren();
 const papers=state.manifest.papers[y]||{};
 for(let n=501;n<=548;n++){const c=String(n).padStart(4,'0'),o=node('option',c+(papers[c]?' · Đã xác minh':' · Chưa mở'));o.value=c;o.disabled=!papers[c];$('test-code').append(o);}
 const codes=Object.keys(papers);if(codes.includes(old))$('test-code').value=old;else if(codes.length)$('test-code').value=codes[0];else $('test-code').selectedIndex=-1;
 $('test-code').disabled=$('test-mode').value!=='original'||!!state.current&&!state.submitted;
 status();
}
function selectedRows(){return Core.eligible(state.bank,$('test-year').value,$('test-track').value);}
function status(){
 const rows=Core.unique(selectedRows()),mcq=rows.filter(q=>q.type==='mcq').length,common=rows.filter(q=>q.type==='tf'&&q.track==='common').length,specific=rows.filter(q=>q.type==='tf'&&q.track===$('test-track').value).length;
 const original=$('test-mode').value==='original',paperReady=!!state.manifest.papers[$('test-year').value]?.[$('test-code').value];
 const ready=original?paperReady:mcq>=24&&common>=2&&specific>=2;
 $('test-start').textContent=original?'Bắt đầu làm bài':'Tạo đề ngẫu nhiên';
 $('bank-status').textContent=original?(paperReady?'Mã đề đã được đối chiếu với bản gốc và đáp án chính thức.':'Năm/mã đề này chưa đủ dữ liệu đã xác minh để chấm điểm.'):'Câu đã xác minh: '+mcq+' nhiều lựa chọn, '+common+' đúng/sai chung, '+specific+' đúng/sai theo định hướng. '+(ready?'Sẵn sàng tạo đề.':'Chưa đủ dữ liệu để tạo đề.');
 $('test-start').disabled=!ready||!!state.current&&!state.submitted;
}
$('test-mode').onchange=filterState;$('test-year').onchange=filterState;$('test-code').onchange=status;$('test-track').onchange=status;
function progress(){
 if(!state.current)return;
 const completed=q=>q.type==='mcq'?Number.isInteger(state.answers[q.i]):Array.isArray(state.answers[q.i])&&state.answers[q.i].every(v=>typeof v==='boolean');
 let count=0;state.current.forEach((q,i)=>{const done=completed({...q,i});if(done)count++;const b=$('nav-'+i);if(b){b.classList.toggle('answered',done);b.classList.toggle('flagged',!!state.flags[i]);b.setAttribute('aria-label','Câu '+(i+1)+(done?' đã làm':' chưa làm')+(state.flags[i]?' cần xem lại':''));}});
 $('test-progress').textContent='Đã làm '+count+'/28 câu · '+(28-count)+' câu chưa hoàn tất';
}
function persist(){
 if(!state.current||state.submitted)return;
 writeLocal(ACTIVE,{ids:state.current.map(q=>q.id),answers:state.answers,flags:state.flags,deadline:state.deadline,session:state.session});
}
function changed(){progress();persist();}
function lockFilters(yes){for(const id of ['test-mode','test-year','test-track'])$(id).disabled=yes;$('test-code').disabled=yes||$('test-mode').value!=='original';}
function sourceURL(q){return typeof q.source_image==='string'&&/^data\/exams\/images\/(2025|2026)\/05\d{2}\/[I]+-\d{2}\.png$/.test(q.source_image)?q.source_image:null;}
function renderPaper(){
 $('test-form').replaceChildren();$('question-nav').replaceChildren();$('test-result').replaceChildren();
 state.current.forEach((q,i)=>{
 const nav=node('button',String(i+1));nav.type='button';nav.id='nav-'+i;nav.onclick=()=>{document.getElementById('question-'+i).scrollIntoView({behavior:'smooth'});};$('question-nav').append(nav);
 const fs=node('fieldset',undefined,'exam-question');fs.id='question-'+i;
 fs.append(node('legend','Câu '+(i+1)+' · Phần '+q.part+' câu '+q.number+(q.type==='tf'?' · Đúng/Sai':' · Nhiều lựa chọn')));
 const flag=node('button',state.flags[i]?'Bỏ đánh dấu':'Đánh dấu xem lại','exam-flag');flag.type='button';flag.setAttribute('aria-pressed',String(!!state.flags[i]));flag.onclick=()=>{state.flags[i]=!state.flags[i];flag.textContent=state.flags[i]?'Bỏ đánh dấu':'Đánh dấu xem lại';flag.setAttribute('aria-pressed',String(state.flags[i]));changed();};fs.append(flag,node('p',q.prompt));
 for(const code of q.code_blocks||[]){const pre=node('pre',undefined,'exam-code');pre.append(node('code',code.code));fs.append(node('small',code.language),pre);}
 const src=sourceURL(q);if(src){const details=node('details',undefined,'exam-source');details.append(node('summary','Xem ảnh câu hỏi gốc · trang '+q.source_pages.join(', ')));const img=node('img');img.src=src;img.alt='Ảnh gốc phần '+q.part+' câu '+q.number+' mã '+q.code;img.loading='lazy';details.append(img);fs.append(details);}
 if(q.type==='mcq')q.options.forEach((option,k)=>{const label=node('label',undefined,'exam-option'),input=node('input');input.type='radio';input.name='q'+i;input.value=String(k);input.checked=state.answers[i]===k;input.onchange=()=>{state.answers[i]=k;changed();};label.append(input,document.createTextNode(' '+String.fromCharCode(65+k)+'. '+option));fs.append(label);});
 else{
 if(!Array.isArray(state.answers[i]))state.answers[i]=[null,null,null,null];
 q.options.forEach((option,k)=>{const line=node('div');line.append(node('p',String.fromCharCode(97+k)+') '+option));for(const [v,labelText] of [[true,'Đúng'],[false,'Sai']]){const label=node('label',undefined,'exam-option'),input=node('input');input.type='radio';input.name='q'+i+'_'+k;input.checked=state.answers[i][k]===v;input.onchange=()=>{state.answers[i][k]=v;changed();};label.append(input,document.createTextNode(' '+labelText));line.append(label);}fs.append(line);});
 }
 $('test-form').append(fs);
 });
 hide($('test-submit'),false);hide($('test-retry'),true);lockFilters(true);$('test-start').disabled=true;progress();tick();clearInterval(state.timer);if(!state.submitted)state.timer=setInterval(tick,1000);
}
function tick(){
 if(state.submitted)return;
 const remaining=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));$('test-clock').textContent='Còn lại '+String(Math.floor(remaining/60)).padStart(2,'0')+':'+String(remaining%60).padStart(2,'0');
 if(!remaining)submit(true);
}
async function start(){
 try{
 let paper;
 if($('test-mode').value==='original'){
 const y=$('test-year').value,c=$('test-code').value,key=y+'-'+c,url=state.manifest.papers[y]?.[c];
 if(!url)return;
 if(!state.papers.has(key))state.papers.set(key,await json(url));
 paper=Core.originalPaper(state.bank,state.papers.get(key),$('test-track').value);
 }else paper=Core.randomPaper(state.bank,$('test-year').value,$('test-track').value);
 if(!paper){$('bank-status').textContent='Đề chưa đủ dữ liệu hợp lệ để chấm điểm.';return;}
 state.current=paper;state.answers={};state.flags={};state.submitted=false;state.deadline=Date.now()+3000000;state.session={id:globalThis.crypto?.randomUUID?.()||String(Date.now()),mode:$('test-mode').value,year:$('test-year').value,code:$('test-mode').value==='original'?$('test-code').value:null,track:$('test-track').value,started:new Date().toISOString()};
 $('exam-status').textContent='Đang làm bài · 24 câu lựa chọn + 4 câu đúng/sai · 50 phút';renderPaper();persist();
 }catch(e){$('bank-status').textContent='Không tải được dữ liệu đề. Kiểm tra kết nối rồi thử lại.';console.error(e);}
}
function answerText(q,value){if(q.type==='mcq')return Number.isInteger(value)?String.fromCharCode(65+value)+'. '+q.options[value]:'Chưa trả lời';return q.options.map((_,k)=>String.fromCharCode(97+k)+': '+(value?.[k]===true?'Đúng':value?.[k]===false?'Sai':'Chưa trả lời')).join('; ');}
function submit(auto=false){
 if(!state.current||state.submitted)return;
 const incomplete=state.current.filter((q,i)=>q.type==='mcq'?!Number.isInteger(state.answers[i]):!state.answers[i]?.every(v=>typeof v==='boolean')).length;
 if(!auto&&!window.confirm('Nộp bài'+(incomplete?' khi còn '+incomplete+' câu chưa hoàn tất':'')+'? Sau khi nộp không thể đổi đáp án.'))return;
 state.submitted=true;clearInterval(state.timer);
 const result=Core.grade(state.current,state.answers),at=new Date().toISOString();
 const box=node('div',undefined,'exam-result');box.append(node('h3','Kết quả: '+result.score.toFixed(2)+'/10 điểm'),node('p',auto?'Hết giờ. Bài đã được nộp tự động.':'Đã nộp bài. Kết quả được lưu trên thiết bị này.'));
 result.details.forEach((d,i)=>{const review=node('div','Bạn chọn: '+answerText(state.current[i],d.chosen)+'\nĐáp án: '+answerText(state.current[i],d.expected)+'\nĐiểm: '+d.points.toFixed(2), 'exam-review'+(d.correct?' exam-correct':''));review.setAttribute('data-correct',String(d.correct));$('question-'+i).append(review);});
 $('test-result').replaceChildren(box);$('test-form').querySelectorAll('input,button').forEach(el=>el.disabled=true);hide($('test-submit'),true);hide($('test-retry'),false);lockFilters(false);status();$('test-clock').textContent='Đã nộp';$('exam-status').textContent='Đã chấm bài theo thang 10 điểm.';
 let old=readLocal(HISTORY,[]);if(!Array.isArray(old))old=[];
 if(!old.some(h=>h.id===state.session.id)){old.push({...state.session,at,score:result.score,ids:state.current.map(q=>q.id),answers:state.answers,review:result.details.map((d,i)=>({...d,prompt:state.current[i].prompt,options:state.current[i].options,type:state.current[i].type}))});writeLocal(HISTORY,old.slice(-50));}
 try{localStorage.removeItem(ACTIVE);}catch{}
 renderHistory();
}
function renderHistory(){
 $('exam-history').replaceChildren(node('h3','Lịch sử làm bài trên thiết bị'));const items=readLocal(HISTORY,[]);if(!Array.isArray(items)||!items.length){$('exam-history').append(node('p','Chưa có bài đã nộp.'));return;}
 const ul=node('ul');
 items.slice(-10).reverse().forEach(h=>{const li=node('li'),details=node('details');details.append(node('summary',new Date(h.at).toLocaleString('vi-VN')+' · '+(h.code?'Mã '+h.code+' · '+h.year:'Đề ngẫu nhiên')+' · '+Number(h.score).toFixed(2)+'/10'));
 if(Array.isArray(h.review))h.review.forEach((d,i)=>details.append(node('p','Câu '+(i+1)+': '+d.prompt+'\nBạn chọn: '+answerText(d,d.chosen)+'\nĐáp án: '+answerText(d,d.expected)+' · '+d.points+' điểm')));
 else details.append(node('p','Bài được lưu từ phiên bản trước; chỉ có điểm và thông tin câu hỏi.'));
 li.append(details);ul.append(li);});$('exam-history').append(ul);
}
function restore(){
 const saved=readLocal(ACTIVE,null);if(!saved||!Array.isArray(saved.ids)||saved.ids.length!==28||new Set(saved.ids).size!==28||!Number.isFinite(saved.deadline)||!saved.session)return;
 const map=new Map(state.bank.map(q=>[q.id,q])),rows=saved.ids.map(id=>map.get(id));if(rows.some(q=>!Core.valid(q)))return;
 try{Core.grade(rows,{});}catch{return;}
 if(rows.some(q=>q.track!=='common'&&q.track!==saved.session.track))return;
 state.current=rows;state.answers=saved.answers&&typeof saved.answers==='object'?saved.answers:{};state.flags=saved.flags||{};state.deadline=saved.deadline;state.session=saved.session;state.submitted=false;tab('test');$('exam-status').textContent='Đã khôi phục bài đang làm. Thời gian tiếp tục tính từ lần bắt đầu.';renderPaper();
}
$('test-form').onsubmit=e=>e.preventDefault();$('test-start').onclick=start;$('test-retry').onclick=start;$('test-submit').onclick=()=>submit(false);
async function json(url){const r=await fetch(url,{cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);return r.json();}
(async()=>{try{
 const [manifest,bank,audit]=await Promise.all([json('data/exams/manifest.json'),json('data/exams/questions.json'),json('data/exams/source-audit.json')]);state.manifest=manifest;
 const hashes=new Map(audit.exams.map(e=>[e.path,e.sha256]));state.bank=(bank.questions||[]).filter(q=>Core.valid(q)&&hashes.get(q.source_pdf)===q.source_sha256);
 const count=Object.values(manifest.papers||{}).reduce((n,items)=>n+Object.keys(items).length,0);$('digitization-status').textContent='Đã mở '+count+'/96 mã đề đã xác minh · '+state.bank.length+' câu hỏi. Các mã đề còn lại đang kiểm tra nội dung và đáp án; bạn vẫn có thể xem PDF.';
 renderFiles();filterState();renderHistory();restore();
 }catch(e){$('bank-status').textContent='Không tải được dữ liệu xác minh. Chưa thể mở thi tự động.';$('digitization-status').textContent='Dữ liệu chưa tải được. Vui lòng kiểm tra kết nối.';console.error(e);}
})();
})();
