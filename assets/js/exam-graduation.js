/* Phân hệ ôn thi tốt nghiệp THPT Tin học 2025–2026.
   Không sinh đáp án giả. Ngân hàng chỉ được dùng khi có JSON nhập từ đề gốc. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const state = { files: {}, bank: [], current: null, answers: {}, started: null };
  const yearEl = $('exam-year'), filterEl = $('exam-filter'), listEl = $('exam-list');
  function hide(el, yes) { el.classList.toggle('exam-hidden', !!yes); }
  function showTab(tab) {
    for (const t of ['view','test']) {
      $('tab-' + t).setAttribute('aria-selected', String(t === tab));
      hide($('panel-' + t), t !== tab);
    }
  }
  $('tab-view').addEventListener('click', () => showTab('view'));
  $('tab-test').addEventListener('click', () => showTab('test'));
  const codes = Array.from({length: 48}, (_, i) => String(501 + i).padStart(4, '0'));
  function validUrl(url) {
    return typeof url === 'string' && /^data\/exams\/(2025|2026)\/[a-zA-Z0-9_.-]+\.pdf$/.test(url);
  }
  function renderFiles() {
    const year = yearEl.value, term = filterEl.value.trim();
    listEl.replaceChildren();
    let ready = 0, shown = 0;
    for (const code of codes) {
      if (!code.includes(term)) continue;
      shown++;
      const card = document.createElement('div'); card.className='exam-item';
      const title = document.createElement('strong'); title.textContent = 'Mã đề ' + code; card.append(title);
      const url = state.files[year]?.[code];
      if (validUrl(url)) {
        ready++;
        const button = document.createElement('button'); button.type = 'button';
        button.textContent = 'Xem đề PDF'; button.style.cssText='background:#1b4a91;color:white;border:0;border-radius:9px;padding:8px 12px;cursor:pointer';
        button.addEventListener('click', () => {
          $('exam-preview-title').textContent = 'Đề thi ' + year + ' · Mã đề ' + code;
          $('exam-download').href = url;
          $('exam-frame').src = url;
          hide($('exam-preview'), false); $('exam-preview').scrollIntoView({behavior:'smooth'});
        }); card.append(button);
      } else {
        const msg=document.createElement('small'); msg.textContent='Chưa tải PDF lên'; card.append(msg);
      }
      listEl.append(card);
    }
    $('exam-count').textContent = 'Năm ' + year + ': ' + ready + '/' + shown + ' mã đề đã sẵn sàng để xem' + (term ? ' (theo bộ lọc)' : '');
    hide($('exam-missing'), ready > 0);
    hide($('exam-preview'), true);
    $('exam-frame').removeAttribute('src');
  }
  yearEl.addEventListener('change', renderFiles);
  filterEl.addEventListener('input', renderFiles);
  function shuffleCopy(items) {
    const out = items.slice();
    for (let i=out.length-1;i>0;i--) {
      const n=Math.floor(Math.random() * (i+1)); [out[i],out[n]]=[out[n],out[i]];
    }
    return out;
  }
  function uniqueQuestions(items) {
    const seen=new Set();
    return items.filter(q => {
      const key = q.canonical_id || JSON.stringify([q.type, String(q.prompt || '').trim().toLowerCase().replace(/\s+/g,' '), q.options]);
      if (!key || seen.has(key)) return false;
      seen.add(key); return true;
    });
  }
  function validQuestion(q) {
    if (!q || typeof q !== 'object' || !['mcq','tf'].includes(q.type) || typeof q.prompt !== 'string' || !q.prompt.trim()) return false;
    if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some(x => typeof x !== 'string' || !x.trim())) return false;
    if (q.type === 'mcq') return Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4;
    return Array.isArray(q.answer) && q.answer.length === 4 && q.answer.every(x => typeof x === 'boolean');
  }
  function pool() {
    const year=$('test-year').value, track=$('test-track').value;
    return uniqueQuestions(state.bank.filter(q =>
      validQuestion(q) &&
      (year === 'all' || String(q.year) === year) &&
      (q.type === 'mcq' || q.track === track || q.track === 'common')
    ));
  }
  function updateBankStatus() {
    const rows=pool();
    const mcq=rows.filter(q=>q.type==='mcq').length, tf=rows.filter(q=>q.type==='tf').length;
    const common=rows.filter(q=>q.type==='tf' && q.track==='common').length;
    const specific=rows.filter(q=>q.type==='tf' && q.track===$('test-track').value).length;
    const sufficient=mcq >= 24 && common >= 2 && specific >= 2;
    $('bank-status').textContent = sufficient
      ? 'Ngân hàng đủ tối thiểu: ' + mcq + ' câu nhiều lựa chọn, ' + tf + ' câu đúng/sai. Có thể tạo đề.'
      : 'Chưa đủ câu hỏi hợp lệ để sinh đề: ' + mcq + '/24 câu nhiều lựa chọn, ' + tf + '/4 câu đúng/sai. Cần nhập dữ liệu từ PDF gốc trước khi thi thử.';
    $('test-start').disabled=!sufficient;
  }
  $('test-year').addEventListener('change', updateBankStatus);
  $('test-track').addEventListener('change', updateBankStatus);
  function makePaper() {
    const questions=pool(), mcq=shuffleCopy(questions.filter(q=>q.type==='mcq')).slice(0,24);
    const tf=[...shuffleCopy(questions.filter(q=>q.type==='tf' && q.track==='common')).slice(0,2),
      ...shuffleCopy(questions.filter(q=>q.type==='tf' && q.track===$('test-track').value)).slice(0,2)];
    if (mcq.length !== 24 || tf.length !== 4) {updateBankStatus();return;}
    state.current=[...mcq,...tf].map((q,i)=>{
      if(q.type!=='mcq') return {...q,number:i+1};
      const permutation=shuffleCopy([0,1,2,3]);
      return {...q,number:i+1,options:permutation.map(k=>q.options[k]),answer:permutation.indexOf(q.answer)};
    });
    state.graded=false;state.answers={};state.started=new Date().toISOString();
    $('test-result').replaceChildren();$('test-form').replaceChildren();
    state.current.forEach((q,i) => {
      const fs=document.createElement('fieldset');fs.className='exam-question';
      const legend=document.createElement('legend');legend.textContent='Câu '+(i+1)+(q.type==='tf'?' · Đúng/Sai':' · Nhiều lựa chọn');fs.append(legend);
      const p=document.createElement('p');p.textContent=q.prompt;fs.append(p);
      if (q.type === 'mcq') {
        q.options.forEach((opt,k) => {
          const label=document.createElement('label');label.className='exam-option';
          const input=document.createElement('input');input.type='radio';input.name='q'+i;input.value=k;
          input.addEventListener('change',()=>{state.answers[i]=k;});
          label.append(input,document.createTextNode(' '+String.fromCharCode(65+k)+'. '+opt));fs.append(label);
        });
      } else {
        const a=state.answers[i]=[null,null,null,null];
        q.options.forEach((opt,k)=>{
          const line=document.createElement('div');line.style.margin='10px 0';
          const txt=document.createElement('div');txt.textContent=String.fromCharCode(97+k)+') '+opt;line.append(txt);
          for (const [value,labelText] of [[true,'Đúng'],[false,'Sai']]) {
            const label=document.createElement('label');label.style.marginRight='15px';
            const input=document.createElement('input');input.type='radio';input.name='q'+i+'_'+k;
            input.addEventListener('change',()=>{a[k]=value;});
            label.append(input,document.createTextNode(' '+labelText));line.append(label);
          } fs.append(line);
        });
      }
      $('test-form').append(fs);
    });
    $('exam-status').textContent='Đề mới · 24 câu nhiều lựa chọn và 4 câu đúng/sai. Chọn đáp án rồi nộp bài.';
    hide($('test-submit'),false);hide($('test-retry'),true);$('test-start').disabled=true;
  }
  function grade() {
    if(!state.current || state.graded) return;
    state.graded=true;
    let score=0, rightMCQ=0, rightTF=0;
    const lines=[];
    state.current.forEach((q,i)=>{
      const chosen=state.answers[i];
      if(q.type==='mcq') {
        if(chosen===q.answer){score+=0.25;rightMCQ++;}
        else lines.push('Câu '+(i+1)+': đáp án '+String.fromCharCode(65+q.answer));
      } else {
        const hits=q.answer.reduce((sum,expected,j)=>sum+(chosen?.[j]===expected?1:0),0);
        score+=([0,0.1,0.25,0.5,1])[hits];if(hits===4)rightTF++;
        if(hits!==4)lines.push('Câu '+(i+1)+': '+q.answer.map((v,j)=>String.fromCharCode(97+j)+': '+(v?'Đ':'S')).join(', '));
      }
    });
    score=Math.round(score*100)/100;
    const result=document.createElement('div');result.className='exam-result';
    const heading=document.createElement('h3');heading.textContent='Kết quả: '+score.toFixed(2)+'/10 điểm';result.append(heading);
    const summary=document.createElement('p');summary.textContent='Trắc nghiệm đúng '+rightMCQ+'/24; Đúng/Sai đúng hoàn toàn '+rightTF+'/4.';result.append(summary);
    const details=document.createElement('details');const label=document.createElement('summary');label.textContent='Xem đáp án các câu chưa đúng';details.append(label);
    for(const line of lines){const p=document.createElement('p');p.textContent=line;details.append(p);}
    result.append(details);$('test-result').replaceChildren(result);
    try { const key='tin12.graduation.examHistory.v1';
      const old=JSON.parse(localStorage.getItem(key)||'[]');
      const history=Array.isArray(old)?old.slice(-49):[];
      history.push({at:new Date().toISOString(),started:state.started,score,ids:state.current.map(q=>q.id),answers:state.answers});
      localStorage.setItem(key,JSON.stringify(history));
    }catch(e){ console.warn('Không thể lưu lịch sử thi',e); }
    $('test-form').querySelectorAll('input').forEach(el=>el.disabled=true);
    hide($('test-submit'),true);hide($('test-retry'),false);$('exam-status').textContent='Đã chấm bài và lưu lịch sử trên thiết bị nếu trình duyệt cho phép.';
  }
  $('test-start').addEventListener('click',makePaper);$('test-retry').addEventListener('click',()=>{
    $('test-start').disabled=false;makePaper();
  });$('test-submit').addEventListener('click',grade);
  async function readJSON(path) {
    const r=await fetch(path,{cache:'no-store'});
    if(!r.ok) throw Error('HTTP '+r.status);
    return await r.json();
  }
  Promise.allSettled([readJSON('data/exams/manifest.json'),readJSON('data/exams/questions.json')]).then(results=>{
    if(results[0].status==='fulfilled')state.files=results[0].value.files||{};
    if(results[1].status==='fulfilled')state.bank=Array.isArray(results[1].value.questions)?results[1].value.questions:[];
    renderFiles();updateBankStatus();
  });
})();