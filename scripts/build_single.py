#!/usr/bin/env python3
"""Tao ban HTML don tep tu data hien tai. Chay: python scripts/build_single.py"""
import os, re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
read = lambda path: open(os.path.join(ROOT, path), encoding='utf-8').read()
catalog = read('data/catalog.js')
ids = re.findall(r'"id":"(ICT12_B[0-9]{2})"', catalog)
if len(ids) != 28: raise SystemExit('Catalog phai co du 28 bai')
data = [catalog]
for lesson_id in ids:
    lesson_path = 'data/lessons/%s.js' % lesson_id
    if not os.path.exists(os.path.join(ROOT, lesson_path)):
        raise SystemExit('Thieu du lieu bai hoc: ' + lesson_path)
    data.append(read(lesson_path))
    question_path = 'data/questions/%s.js' % lesson_id
    if os.path.exists(os.path.join(ROOT, question_path)): data.append(read(question_path))

html = read('course.html')
nl = chr(10)
escape_script = '<' + chr(92) + '/script'
for css in ('assets/css/style.css', 'assets/css/panels.css'):
    link = '<link rel="stylesheet" href="%s">' % css
    html = html.replace(link, '<style>' + nl + read(css) + nl + '</style>')
scripts = ('assets/js/app.js', 'assets/js/panels.js', 'assets/js/supabase-config.js',
           'assets/js/supabase-cloud.js', 'assets/js/teacher-dashboard.js')
bundle = '<script>' + nl + nl.join(data).replace('</script', escape_script) + nl + '</script>' + nl
for script in scripts:
    source = read(script).replace('</script', escape_script)
    bundle += '<script>' + nl + source + nl + '</script>' + nl
html = html.replace('<script src="assets/js/course-loader.js"></script>', '')
for script in ('data/catalog.js',) + scripts:
    html = html.replace('<script src="%s"></script>' % script, '')
html = html.replace('</body>', bundle + '</body>')
out = os.path.join(ROOT, 'Tin12_MotFile.html')
with open(out, 'w', encoding='utf-8') as f: f.write(html)
print('Da tao Tin12_MotFile.html (%d KB), gom %d bai.' %
      (len(html.encode('utf-8')) // 1024, len(ids)))