#!/usr/bin/env python3
"""Gop toan bo website thanh 1 tep HTML (dung cho dien thoai). Chay: python scripts/build_single.py"""
import os, re
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
rd = lambda p: open(os.path.join(R, p), encoding='utf-8').read()
cat = rd('data/catalog.js'); ids = re.findall(r'"id":"(ICT12_B\d\d)"', cat)
data = [cat] + [rd('data/lessons/%s.js' % i) for i in ids] + [rd('data/questions/%s.js' % i) for i in ids if os.path.exists(os.path.join(R, 'data/questions/%s.js' % i))]
h = rd('index.html')
h = h.replace('<link rel="stylesheet" href="assets/css/style.css">', '<style>' + rd('assets/css/style.css') + '</style>')
h = re.sub(r'<script src="data/catalog.js"></script>\s*<script src="assets/js/app.js"></script>', lambda m: '<script>' + '\n'.join(data).replace('</script', '<\\/script') + '</script>\n<script>' + rd('assets/js/app.js') + '</script>', h)
open(os.path.join(R, 'Tin12_MotFile.html'), 'w', encoding='utf-8').write(h)
print('Da tao Tin12_MotFile.html (%d KB)' % (len(h.encode('utf-8')) // 1024))
