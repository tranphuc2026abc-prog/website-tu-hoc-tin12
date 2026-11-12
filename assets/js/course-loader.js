(() => {
'use strict';
const params = new URLSearchParams(location.search);
const grade = String(params.get('grade') || '12');
if (!['10','11','12'].includes(grade)) { location.replace('index.html'); return; }
const app = document.getElementById('app');
document.title = 'Tự học Tin học ' + grade;
const load = src => new Promise((resolve,reject) => { const s=document.createElement('script'); s.src=src; s.onload=resolve; s.onerror=()=>reject(new Error(src)); document.head.append(s); });
(async () => {
 try {
   await load(grade === '12' ? 'data/catalog.js' : 'data/catalog-' + grade + '.js?v=20261112-errors-v2');
   const T = window.T;
   if (!T || !T.cat) throw new Error('catalog');
   T.cat.grade = Number(grade);
   T.cat.courseTitle = 'Tin học ' + grade;
   document.getElementById('course-name').textContent = 'TIN HỌC ' + grade;
   document.title = 'Tự học Tin học ' + grade;
   await load('assets/js/app.js');
   await load('assets/js/panels.js');
   await load('assets/js/supabase-config.js');
   await load('assets/js/supabase-cloud.js');
   await load('assets/js/teacher-dashboard.js');
 } catch (error) {
   app.innerHTML = '<section class="load-error" role="alert"><h1>Chưa tải được học liệu khối ' + grade + '</h1><p>Hãy kiểm tra kết nối tới tệp dữ liệu, tải lại trang hoặc mở trang chọn khối để thử lại.</p><p><a class="btn pri" href="course.html?grade=' + grade + '">Tải lại khối này</a> <a class="btn" href="index.html">Chọn khối khác</a></p></section>';
   console.error(error);
 }
})();
})();