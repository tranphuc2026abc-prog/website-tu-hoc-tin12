/* Tự tạo panel theo chủ đề/bài học từ catalog hiện có; không cần 35 ảnh riêng. */
(() => {
  'use strict';
  const topicThemes = [
    {icon:'✦',mark:'AI',a:'#071a43',b:'#315cf5',c:'#42d9e8',desc:'Khám phá trí tuệ nhân tạo và cách công nghệ đang thay đổi khoa học, đời sống.'},
    {icon:'⌁',mark:'NET',a:'#062f46',b:'#087eaa',c:'#58f0dc',desc:'Tìm hiểu mạng máy tính, giao thức và cách các thiết bị kết nối, chia sẻ tài nguyên.'},
    {icon:'◎',mark:'SAFE',a:'#31134f',b:'#7944d7',c:'#ff9ed0',desc:'Xây dựng văn hóa số: giao tiếp có trách nhiệm, an toàn và tôn trọng trên mạng.'},
    {icon:'</>',mark:'CODE',a:'#101b4c',b:'#3b55dc',c:'#8ee8ff',desc:'Từ HTML đến CSS: biến ý tưởng thành những trang web có cấu trúc và phong cách.'},
    {icon:'↗',mark:'CAREER',a:'#153d32',b:'#16876e',c:'#b5f56a',desc:'Khám phá nghề nghiệp Công nghệ thông tin và chuẩn bị cho lựa chọn tương lai.'},
    {icon:'⌘',mark:'DEVICE',a:'#17324b',b:'#2783b8',c:'#ffcf70',desc:'Thực hành kết nối, khai thác và phối hợp các thiết bị số trong học tập.'},
    {icon:'▤',mark:'WEB',a:'#27134d',b:'#6940d9',c:'#ffbd73',desc:'Lập kế hoạch, thiết kế và hoàn thiện website qua từng bước thực hành.'}
  ];
  const lessonThemes = {
    1:['✧','AI','Khám phá khái niệm AI và những khả năng thông minh của máy tính'],
    2:['✦','AI LIFE','Nhận diện ứng dụng AI trong khoa học và đời sống'],
    3:['⌁','NETWORK','Nhận biết các thiết bị tạo nên một mạng máy tính'],
    4:['⇄','PROTOCOL','Tìm hiểu quy tắc giúp các thiết bị trao đổi dữ liệu'],
    5:['↗','SHARE','Thực hành chia sẻ tài nguyên trong môi trường mạng'],
    6:['◎','DIGITAL CITIZEN','Giao tiếp văn minh, an toàn và có trách nhiệm trên không gian mạng'],
    7:['</>','HTML','Khám phá cấu trúc nền tảng của một trang web'],
    8:['T','TYPOGRAPHY','Định dạng văn bản để nội dung web rõ ràng, dễ đọc'],
    9:['☷','STRUCTURE','Tổ chức thông tin bằng danh sách và bảng'],
    10:['↗','HYPERLINK','Kết nối các trang và tài nguyên bằng siêu liên kết'],
    11:['▶','MEDIA','Đưa âm thanh, video và nội dung nhúng vào trang web'],
    12:['☷','WEB FORM','Tạo biểu mẫu thu thập thông tin từ người dùng'],
    13:['✳','CSS','Hiểu vai trò của CSS trong thiết kế giao diện web'],
    14:['Aa','STYLE','Định dạng văn bản bằng các quy tắc CSS'],
    15:['◉','COLOR','Phối màu chữ và nền hài hòa, dễ tiếp cận'],
    16:['▣','LAYOUT','Tạo đường viền, khoảng cách và khung nội dung'],
    17:['⚖','CASCADE','Hiểu thứ tự ưu tiên của bộ chọn CSS'],
    18:['✦','WEB STUDIO','Tổng hợp HTML và CSS để thiết kế trang web hoàn chỉnh'],
    19:['⚙','IT SUPPORT','Tìm hiểu dịch vụ sửa chữa và bảo trì máy tính'],
    20:['⌘','IT CAREERS','Khám phá nhóm nghề quản trị trong ngành Công nghệ thông tin'],
    21:['↗','CAREER TALK','Kết nối kiến thức với lựa chọn nghề nghiệp qua hội thảo'],
    22:['⌘','DEVICES','Thực hành kết nối các thiết bị số'],
    23:['▤','PLAN','Lập kế hoạch và chuẩn bị xây dựng website'],
    24:['▱','HEADER','Thiết kế phần đầu trang web rõ ràng, nhất quán'],
    25:['▤','CONTENT','Xây dựng phần thân và chân trang có cấu trúc'],
    26:['⇄','NAVIGATION','Tạo liên kết và thanh điều hướng dễ sử dụng'],
    27:['☷','FORM','Thiết kế biểu mẫu phục vụ tương tác trên website'],
    28:['✦','FINAL PROJECT','Vận dụng tổng hợp kiến thức để hoàn thiện website']
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function panel({kind,title,desc,icon,mark,theme,n,meta=[]}) {
    const [a,b,c] = theme;
    return '<section class="learning-panel '+kind+'" style="--p1:'+a+';--p2:'+b+';--accent:'+c+'" data-mark="'+esc(mark)+'" aria-label="'+esc(title)+'">'+
      '<div class="learning-panel-copy"><span class="learning-panel-kicker">✦ TIN HỌC 12 · '+esc(mark)+'</span>'+
      '<'+(kind==='topic-panel'?'h1':'h2')+'>'+esc(title)+'</'+(kind==='topic-panel'?'h1':'h2')+'>'+
      '<p>'+esc(desc)+'</p><div class="panel-meta">'+meta.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div></div>'+
      '<div class="learning-panel-badge" aria-hidden="true">'+icon+'</div></section>';
  }
  function decorate() {
    const app = document.querySelector('#app');
    if (!app || !window.T || !window.T.cat) return;
    const path = location.hash || '#/';
    if (path.startsWith('#/lesson/')) {
      const id = path.split('/')[2], lesson = window.T.cat.lessons.find(x=>x.id===id);
      if (!lesson || app.querySelector('.learning-panel.lesson-panel')) return;
      const t = lessonThemes[lesson.n] || ['✦','LESSON','Cùng khám phá kiến thức và thực hành Tin học 12'];
      const th = topicThemes[lesson.topic] || topicThemes[0];
      const node = app.querySelector('h1');
      if (!node) return;
      node.insertAdjacentHTML('beforebegin', panel({kind:'lesson-panel',title:lesson.title,desc:t[2],icon:t[0],mark:t[1],theme:[th.a,th.b,th.c],meta:[window.T.cat.topics[lesson.topic],lesson.tiet+' tiết','BÀI '+lesson.n]}));
      return;
    }
    if (path.startsWith('#/lessons')) {
      if (app.querySelector('.learning-panel.topic-panel')) return;
      const node = app.querySelector('h1');
      if (!node) return;
      node.insertAdjacentHTML('beforebegin', panel({kind:'topic-panel',title:'Bản đồ tri thức Tin học 12',desc:'28 bài học · 7 chủ đề · Học có lộ trình, thực hành có mục tiêu, theo dõi tiến bộ của chính mình.',icon:'🧭',mark:'LEARNING ROADMAP',theme:['#101b4c','#315cf5','#48d8e8'],meta:['7 CHỦ ĐỀ','28 BÀI HỌC','HỌC TẬP SỐ']}));
      return;
    }
    if (path.startsWith('#/practice')) {
      if (app.querySelector('.learning-panel.topic-panel')) return;
      const node = app.querySelector('h1'); if (!node) return;
      node.insertAdjacentHTML('beforebegin', panel({kind:'topic-panel',title:'Phòng luyện tập công nghệ',desc:'Luyện kiến thức theo bài học, kiểm tra mức độ hiểu và củng cố kỹ năng trước mỗi thử thách.',icon:'⌘',mark:'PRACTICE LAB',theme:['#0a2548','#087eaa','#58f0dc'],meta:['TỰ LUYỆN','PHẢN HỒI','TIẾN BỘ']}));
      return;
    }
    if (path.startsWith('#/review')) {
      if (app.querySelector('.learning-panel.topic-panel')) return;
      const node = app.querySelector('h1'); if (!node) return;
      node.insertAdjacentHTML('beforebegin', panel({kind:'topic-panel',title:'Trạm ôn tập thông minh',desc:'Ôn nhanh thuật ngữ, hệ thống hóa kiến thức trọng tâm và ghi nhớ bằng những lượt học ngắn.',icon:'◈',mark:'SMART REVIEW',theme:['#29134d','#7044d6','#ff9ed0'],meta:['THẺ GHI NHỚ','KIẾN THỨC CỐT LÕI']}));
      return;
    }
    if (path.startsWith('#/progress')) {
      if (app.querySelector('.learning-panel.topic-panel')) return;
      const node = app.querySelector('h1'); if (!node) return;
      node.insertAdjacentHTML('beforebegin', panel({kind:'topic-panel',title:'Hồ sơ hành trình học tập',desc:'Theo dõi những gì em đã hoàn thành, nhận ra phần cần ôn và chủ động lập kế hoạch tiến bộ.',icon:'◴',mark:'MY PROGRESS',theme:['#12372e','#16876e','#b5f56a'],meta:['THEO DÕI','TỰ CHỦ','BỨT PHÁ']}));
    }
  }
  let queued = false;
  const schedule = () => { if (queued) return; queued=true; requestAnimationFrame(()=>{queued=false;decorate();}); };
  window.addEventListener('hashchange',()=>setTimeout(schedule,30));
  const app=document.querySelector('#app');
  if (app && 'MutationObserver' in window) new MutationObserver(schedule).observe(app,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',schedule);
  setTimeout(schedule,250);
})();