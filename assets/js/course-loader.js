(() => {
'use strict';
const params = new URLSearchParams(location.search);
const grade = String(params.get('grade') || '12');
if (!['10','11','12'].includes(grade)) { location.replace('index.html'); return; }
const app = document.getElementById('app');
const load = src => new Promise((resolve,reject) => { const s=document.createElement('script'); s.src=src; s.onload=resolve; s.onerror=()=>reject(new Error(src)); document.head.append(s); });
(async () => {
 try {
   await load(grade === '12' ? 'data/catalog.js' : 'data/catalog-' + grade + '.js');
   const T = window.T;
   if (!T || !T.cat) throw new Error('catalog');
   T.cat.grade = Number(grade);
   T.cat.courseTitle = 'Tin học ' + grade;
   document.getElementById('course-name').textContent = 'TIN HỌC ' + grade;
   document.title = 'Tự học Tin học ' + grade;
   await load('assets/js/app.js');
 } catch (error) {
   app.innerHTML = '<h1>Chưa tải được học liệu</h1><p>Hãy chạy bộ dựng dữ liệu cho cả ba khối rồi mở lại website.</p><p><a class="btn" href="index.html">Chọn khối khác</a></p>';
   console.error(error);
 }
})();
})();