#!/usr/bin/env python3
"""Doc ho so nguon (CSV + KHO_KIEN_THUC + NGAN_HANG_CAU_HOI) -> data/*.js
Chay: python scripts/build_data.py nguon"""
import csv, json, re, sys, os
SRC = sys.argv[1] if len(sys.argv) > 1 else 'nguon'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data')
rd = lambda f: open(os.path.join(SRC, f), encoding='utf-8').read()
SEC = {'1': 'obj', '2': 'key', '3': 'terms', '4': 'ex', '5': 'steps', '6': 'err', '7': 'rem'}
LI = re.compile(r'^(\s*)(?:[*-]|\d+\.)\s+(.*)$')


def blocks(lines):
    out, i = [], 0
    while i < len(lines):
        L = lines[i]
        if L.strip().startswith('```'):
            lang, buf, i = L.strip()[3:], [], i + 1
            while i < len(lines) and not lines[i].strip().startswith('```'):
                buf.append(lines[i]); i += 1
            out.append({'t': 'code', 'l': lang, 'x': '\n'.join(buf)}); i += 1; continue
        if L.strip().startswith('|'):
            rows = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                c = [x.strip() for x in lines[i].strip().strip('|').split('|')]
                if not all(re.fullmatch(r':?-+:?', x) for x in c): rows.append(c)
                i += 1
            out.append({'t': 'tb', 'r': rows}); continue
        if LI.match(L):
            root, stack = [], []
            while i < len(lines):
                m = LI.match(lines[i])
                if not m: break
                ind, node = len(m.group(1)), {'x': m.group(2).rstrip(), 'c': []}
                while stack and stack[-1][0] >= ind: stack.pop()
                (stack[-1][1]['c'] if stack else root).append(node); stack.append((ind, node)); i += 1
            def clean(n):
                if not n['c']: del n['c']
                else:
                    for k in n['c']: clean(k)
            for n in root: clean(n)
            out.append({'t': 'ul', 'i': root}); continue
        if L.strip() and L.strip() != '---': out.append({'t': 'p', 'x': L.strip()})
        i += 1
    return out


def flat(bl):
    r = []
    def w(ns):
        for n in ns: r.append(n['x']); w(n.get('c', []))
    for b in bl:
        if b['t'] == 'ul': w(b['i'])
        elif b['t'] in ('p', 'code'): r.append(b['x'])
    return r


rows = list(csv.DictReader(open(os.path.join(SRC, 'MUC_LUC_BAI_HOC.csv'), encoding='utf-8-sig')))
assert len(rows) == 28 and len({r['Ma_Bai'] for r in rows}) == 28, 'Danh muc phai co 28 bai khong trung ma'
ids = [r['Ma_Bai'] for r in rows]
topics = []
for r in rows:
    if r['Chu_De'] not in topics: topics.append(r['Chu_De'])

lessons = {}
for part in re.split(r'\n(?=## BÀI )', rd('KHO_KIEN_THUC_THEO_BAI.md'))[1:]:
    n = int(re.match(r'## BÀI (\d+)', part).group(1)); lid = 'ICT12_B%02d' % n
    L = {'sec': {}}
    for s in re.split(r'\n(?=### \d\. )', part)[1:]:
        lines = s.split('\n'); L['sec'][SEC[re.match(r'### (\d)', lines[0]).group(1)]] = blocks(lines[1:])
    L['terms'] = [{'t': m.group(1), 'd': m.group(2)} for b in L['sec']['terms'] if b['t'] == 'ul'
                  for it in b['i'] for m in [re.match(r'^`(.+?)`:\s*(.*)$', it['x'])] if m]
    L['txt'] = ' '.join(x for k in SEC.values() for x in flat(L['sec'][k]))
    assert all(L['sec'].get(k) for k in SEC.values()), 'Bai %d thieu muc' % n
    lessons[lid] = L
assert set(lessons) == set(ids), 'Kho kien thuc khong du 28 bai'

Q = {i: [] for i in ids}; flags = []
for part in re.split(r'\n(?=## )', rd('NGAN_HANG_CAU_HOI.md'))[1:]:
    h = part.split('\n')[0]
    m = re.match(r'## BÀI (\d+)(?: - (\d+))?', h)
    if not m: continue
    grp = m.group(2) is not None
    for sec in re.split(r'\n(?=### )', part)[1:]:
        lines = sec.split('\n'); sk = lines[0][4]
        if sk in 'AB':
            for blk in re.split(r'\n(?=\*\*Câu \d+\.\*\*)', '\n' + '\n'.join(lines[1:]))[1:]:
                bl = blk.split('\n'); mm = re.match(r'\*\*Câu (\d+)\.\*\* (.*)', bl[0]); num = int(mm.group(1))
                lid = ('ICT12_B24' if num == 1 else 'ICT12_B27') if grp else 'ICT12_B%02d' % int(m.group(1))
                q = {'id': '%s-%s%02d' % (lid, sk, num), 'lesson': lid, 'q': mm.group(2), 'st': 'ok',
                     'src': 'NGAN_HANG_CAU_HOI.md - %s - mục %s - Câu %d' % (h[3:].strip(), sk, num)}
                if grp:
                    q['st'] = 'review'; flags.append(q['id'])
                    q['nt'] = 'Nguồn gộp nhóm Bài 24–28; gắn bài theo đối chiếu kho kiến thức (cần giáo viên rà soát).'
                if sk == 'A':
                    q['type'] = 'mcq'; q['opts'] = []
                    for l in bl[1:]:
                        o = re.match(r'^\* (?:\*\*)?([A-D])\. (.*?)(?:\*\*)?$', l)
                        if o: q['opts'].append({'k': o.group(1), 'x': o.group(2)})
                        a = re.match(r'^\* \*Đáp án đúng:\* \*\*([A-D])\*\* \| \*Giải thích:\* (.*)$', l)
                        if a: q['ans'], q['exp'] = a.group(1), a.group(2)
                    assert len(q['opts']) == 4 and q.get('ans') in list('ABCD'), q['id']
                else:
                    q['type'] = 'tf'; q['sts'] = []
                    for l in bl[1:]:
                        o = re.match(r'^\* \*\*([a-d])\.\*\* (.*?) -> \*\*(Đúng|Sai)\*\*(?: \(\*Giải thích:\* (.*)\))?\.?$', l)
                        if o: q['sts'].append({'k': o.group(1), 'x': o.group(2), 'a': o.group(3) == 'Đúng', 'e': (o.group(4) or '').rstrip(')')})
                    assert len(q['sts']) == 4, q['id']
                Q[lid].append(q)
        else:
            lid = 'ICT12_B%02d' % int(m.group(1)); k = 0
            for blk in re.split(r'\n(?=\* \*\*Câu hỏi )', '\n' + '\n'.join(lines[1:]))[1:]:
                k += 1; bl = blk.split('\n')
                mm = re.match(r'^\* \*\*Câu hỏi (Luyện tập|Vận dụng)(?: \d+)? \((.*?)\):\*\* (.*)$', bl[0])
                q = {'id': '%s-C%02d' % (lid, k), 'lesson': lid, 'type': 'essay', 'kind': mm.group(1), 'ref': mm.group(2),
                     'q': mm.group(3), 'hint': '', 'pts': [], 'st': 'ok', 'src': 'NGAN_HANG_CAU_HOI.md - %s - mục C' % h[3:].strip()}
                for l in bl[1:]:
                    g = re.match(r'^\s*\* \*Gợi ý đáp án.*?:\*\s*(.*)$', l)
                    t = re.match(r'^\s*\* \*Tình trạng đáp án:\*\s*(.*)$', l)
                    p = re.match(r'^\s+\d+\.\s+(.*)$', l)
                    if g: q['hint'] = g.group(1)
                    elif t: q['nt'] = t.group(1)
                    elif p: q['pts'].append(p.group(1))
                Q[lid].append(q)

R = {i: {'pre': [], 'rel': [], 'nx': [], 'why': []} for i in ids}
I = lambda n: 'ICT12_B%02d' % n
def add(a, key, bs, why):
    for b in bs:
        if b != a and I(b) not in R[I(a)][key]: R[I(a)][key].append(I(b))
    if why not in R[I(a)]['why']: R[I(a)]['why'].append(why)
add(8, 'pre', [7], 'Kho kiến thức Bài 8, mục 5: “Mở tệp HTML đã tạo ở Bài 7”.')
add(18, 'pre', range(7, 18), 'Kho kiến thức Bài 18, mục 1: tổng hợp HTML và CSS từ Bài 7 đến Bài 17.')
add(28, 'pre', range(23, 28), 'Kho kiến thức Bài 28, mục 1: vận dụng quy trình từ Bài 23 đến Bài 27.')
add(23, 'rel', [18], 'DE_XUAT_WEBSITE.md, mục IV.1: Google Sites áp dụng kiến thức bố cục ở Bài 18.')
for g in ([1, 2], [3, 4, 5], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17], [19, 20, 21], [23, 24, 25, 26, 27, 28]):
    for a in g: add(a, 'rel', g, 'DE_XUAT_WEBSITE.md, mục IV.1: cùng chuỗi bài học.')
for n in range(1, 28): R[I(n)]['nx'].append(I(n + 1))
for v in R.values():
    for key in ('pre', 'rel', 'nx'): assert all(x in ids for x in v[key])

js = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))
for d in ('lessons', 'questions'):
    os.makedirs(os.path.join(OUT, d), exist_ok=True)
    for f in os.listdir(os.path.join(OUT, d)): os.remove(os.path.join(OUT, d, f))
reg = '(window.T=window.T||{L:{},Q:{}}).%s%s=%s;\n'
for lid, L in lessons.items():
    open(os.path.join(OUT, 'lessons', lid + '.js'), 'w', encoding='utf-8').write(reg % ('L', '["%s"]' % lid, js({'sec': L['sec'], 'terms': L['terms'], 'txt': L['txt']})))
    if Q[lid]: open(os.path.join(OUT, 'questions', lid + '.js'), 'w', encoding='utf-8').write(reg % ('Q', '["%s"]' % lid, js(Q[lid])))
cat = {'topics': topics, 'rel': R, 'hk': {'HK1': [1, 14], 'HK2': [15, 28]}, 'qfiles': [i for i in ids if Q[i]],
       'lessons': [{'id': r['Ma_Bai'], 'title': r['Ten_Bai'], 'n': int(r['Thu_Tu']), 'topic': topics.index(r['Chu_De']), 'src': r['Nguon_File'], 'tiet': int(r['So_Tiet'])} for r in rows]}
open(os.path.join(OUT, 'catalog.js'), 'w', encoding='utf-8').write(reg % ('cat', '', js(cat)))

tot = {'mcq': 0, 'tf': 0, 'essay': 0}
print('Bai hoc: %d | Chu de: %d' % (len(ids), len(topics)))
for i in ids:
    c = {t: sum(q['type'] == t for q in Q[i]) for t in tot}
    for t in tot: tot[t] += c[t]
    print(i, c, 'thuat ngu', len(lessons[i]['terms']))
print('TONG', tot, '| so cau', sum(tot.values()), '| so nhan dinh Dung/Sai:', sum(len(q['sts']) for v in Q.values() for q in v if q['type'] == 'tf'))
print('Bai chua co cau hoi:', [i[-3:] for i in ids if not Q[i]])
print('Can ra soat:', flags)
