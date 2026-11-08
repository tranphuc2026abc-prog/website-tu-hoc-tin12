#!/usr/bin/env python3
"""Doc ho so nguon (CSV + KHO_KIEN_THUC + NGAN_HANG_CAU_HOI) -> data/*.js
Chay: python scripts/build_data.py nguon"""
import csv, hashlib, json, re, sys, os, unicodedata
from pathlib import Path
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
        elif b['t'] == 'tb': r.extend(c for row in b['r'] for c in row)
    return r

def content_signature(value):
    value = unicodedata.normalize('NFD', str(value or '').lower()).replace('đ', 'd')
    value = ''.join(c for c in value if unicodedata.category(c) != 'Mn')
    return re.sub(r'\s+', ' ', value).strip()

def node_signature(node):
    return content_signature(node.get('x', '')) + '[' + '|'.join(
        node_signature(child) for child in node.get('c', [])) + ']'

def dedupe_nodes(source):
    out, seen = [], set()
    for raw in source:
        node = dict(raw)
        if raw.get('c'):
            node['c'] = dedupe_nodes(raw['c'])
        signature = node_signature(node)
        if signature not in seen:
            seen.add(signature)
            out.append(node)
    return out

def dedupe_blocks(source):
    """Remove only identical text items within one lesson section; keep distinct wording."""
    out, seen = [], set()
    for block in source:
        item = dict(block)
        if block.get('t') == 'ul':
            item['i'] = dedupe_nodes(block.get('i', []))
            sig = 'ul:' + '|'.join(node_signature(x) for x in item['i'])
        elif block.get('t') in ('p', 'code'):
            sig = block.get('t', '') + ':' + content_signature(block.get('x', ''))
        elif block.get('t') == 'tb':
            sig = 'tb:' + '|'.join(content_signature(c) for row in block.get('r', []) for c in row)
        else:
            sig = json.dumps(block, ensure_ascii=False, sort_keys=True)
        if sig and sig not in seen:
            seen.add(sig)
            out.append(item)
    return out

rows = list(csv.DictReader(open(os.path.join(SRC, 'MUC_LUC_BAI_HOC.csv'), encoding='utf-8-sig')))
assert len(rows) == 28 and len({r['Ma_Bai'] for r in rows}) == 28, 'Danh muc phai co 28 bai khong trung ma'
ids = [r['Ma_Bai'] for r in rows]
topics = []
for r in rows:
    if r['Chu_De'] not in topics: topics.append(r['Chu_De'])

lessons = {}
def old_lesson(lid):
    for folder in ('lessons', 'lesons'):
        path = os.path.join(OUT, folder, lid + '.js')
        if not os.path.exists(path): continue
        text = open(path, encoding='utf-8').read()
        m = re.search(r'\.L\["' + re.escape(lid) + r'"\]=(\{.*\});\s*$', text, re.S)
        if m:
            try: return json.loads(m.group(1))
            except json.JSONDecodeError: pass
    return {}

ROMAN = {'I': 'obj', 'II': 'key', 'III': 'key', 'IV': 'ex', 'V': 'steps', 'VI': 'terms', 'VII': 'rem'}
for n in range(1, 29):
    lid = 'ICT12_B%02d' % n
    path = os.path.join(SRC, 'kien-thuc-chuan-hoa', 'BAI_%02d.md' % n)
    assert os.path.exists(path), 'Thieu hoc lieu chuan hoa: ' + path
    text = open(path, encoding='utf-8').read()
    heads = list(re.finditer(r'^##\s+(I{1,3}|IV|V|VI|VII)\.\s+(.+)$', text, re.M))
    sections = {}
    for j, h in enumerate(heads):
        end = heads[j + 1].start() if j + 1 < len(heads) else len(text)
        sections[h.group(1)] = {'title': h.group(2).strip(), 'blocks': blocks(text[h.end():end].splitlines())}
    assert set(sections) == set(ROMAN), 'Bai %d phai co du 7 muc I-VII' % n
    old = old_lesson(lid)
    old_sec = old.get('sec', {})
    sec = {k: [] for k in ('obj', 'key', 'terms', 'ex', 'steps', 'err', 'rem')}
    for roman, key in ROMAN.items(): sec[key].extend(sections[roman]['blocks'])
    # Giữ lại các khối bài học cũ không có trong nguồn chuẩn hóa.
    for key in sec:
        seen_blocks = {json.dumps(x, ensure_ascii=False, sort_keys=True) for x in sec[key]}
        for block in old_sec.get(key, []):
            sig = json.dumps(block, ensure_ascii=False, sort_keys=True)
            if sig not in seen_blocks:
                sec[key].append(block); seen_blocks.add(sig)
        sec[key] = dedupe_blocks(sec[key])
    terms = []
    for block in sections['VI']['blocks']:
        if block['t'] == 'tb':
            for row in block['r'][1:]:
                if len(row) >= 3: terms.append({'t': row[0], 'd': row[1] + ': ' + row[2]})
    term_keys = {norm_question(x['t']) for x in terms} if 'norm_question' in globals() else {x['t'].lower() for x in terms}
    for item in old.get('terms', []):
        if item.get('t', '').lower() not in term_keys:
            terms.append(item)
    L = dict(old)
    L.update({'sec': sec, 'terms': terms, 'src': 'nguon/kien-thuc-chuan-hoa/BAI_%02d.md' % n})
    L['txt'] = ' '.join(x for key in sec for x in flat(sec[key]))
    lessons[lid] = L
assert len(lessons) == 28, 'Kho kien thuc chuan hoa khong du 28 bai'

Q = {i: [] for i in ids}
# Hai câu trong mục nguồn gộp được ánh xạ theo nội dung và đã đối chiếu với
# KHO_KIEN_THUC_THEO_BAI: câu lưu trữ dự án thuộc Bài 24; câu nhúng Forms thuộc Bài 27.
GROUPED_LESSON_MAP = {
    ('A', 1): ('ICT12_B24', ('Google Sites', 'lưu trữ')),
    ('A', 2): ('ICT12_B27', ('Google Sites', 'nhúng biểu mẫu')),
}
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
                if grp:
                    mapped = GROUPED_LESSON_MAP.get((sk, num))
                    assert mapped is not None, 'Cau trong nguon gop chua co anh xa bai hoc: %s-%d' % (sk, num)
                    lid, expected_terms = mapped
                    assert all(term.lower() in mm.group(2).lower() for term in expected_terms), \
                        'Noi dung cau hoi khong khop bai hoc da anh xa: %s' % lid
                else:
                    lid = 'ICT12_B%02d' % int(m.group(1))
                q = {'id': '%s-%s%02d' % (lid, sk, num), 'lesson': lid, 'q': mm.group(2), 'st': 'ok',
                     'src': 'NGAN_HANG_CAU_HOI.md - %s - mục %s - Câu %d' % (h[3:].strip(), sk, num)}
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


# JSON theo bai la nguon chinh; Markdown va du lieu cu chi duoc giu lam bo sung.
def norm_question(text):
    text = unicodedata.normalize('NFD', str(text or '').lower())
    text = ''.join(c for c in text if unicodedata.category(c) != 'Mn').replace('đ', 'd')
    return re.sub(r'[^a-z0-9]+', ' ', text).strip()

def question_signature(q):
    parts = [q.get('type', ''), norm_question(q.get('q', ''))]
    if q.get('type') == 'mcq': parts.extend(norm_question(x.get('x', '')) for x in q.get('opts', []))
    if q.get('type') == 'tf': parts.extend(norm_question(x.get('x', '')) for x in q.get('sts', []))
    return '|'.join(parts)

def read_existing_questions(lid):
    path = os.path.join(OUT, 'questions', lid + '.js')
    if not os.path.exists(path): return []
    text = open(path, encoding='utf-8').read()
    m = re.search(r'\.Q\["' + re.escape(lid) + r'"\]=(\[.*\]);\s*$', text, re.S)
    if not m: raise ValueError('Khong doc duoc du lieu cu: ' + path)
    return json.loads(m.group(1))

integration_rows = []
for n in range(1, 29):
    lid = 'ICT12_B%02d' % n
    jf = os.path.join(SRC, 'ngan-hang-cau-hoi', 'BAI_%02d_QUESTIONS.json' % n)
    with open(jf, encoding='utf-8') as f: doc = json.load(f)
    oldq = read_existing_questions(lid)
    old_by_id = {q.get('id'): q for q in oldq}
    srcq = []
    def add_source(e, kind):
        q = dict(old_by_id.get(e['id'], {})); q.update(e)
        q.update({'lesson': lid, 'q': e['noi_dung'], 'st': 'ok',
                  'src': 'nguon/ngan-hang-cau-hoi/BAI_%02d_QUESTIONS.json · %s' % (n, e['id']),
                  'type': kind})
        if kind == 'mcq':
            q.update({'opts': [{'k': k, 'x': v} for k, v in e['lua_chon'].items()],
                      'ans': e['dap_an'], 'exp': e.get('giai_thich', '')})
        elif kind == 'tf':
            q['sts'] = [{'k': k, 'x': v, 'a': e['dap_an'][k], 'e': e.get('giai_thich', '')}
                        for k, v in e['y_kien'].items()]
        else:
            q.update({'kind': 'Tự luận', 'ref': 'Ngân hàng câu hỏi đã duyệt',
                      'hint': e.get('dap_an_goi_y', ''), 'pts': [],
                      'nt': 'Học sinh tự trình bày và đối chiếu với đáp án gợi ý.'})
        if kind == 'mcq':
            assert len(q['opts']) == 4 and q.get('ans') in {x['k'] for x in q['opts']}, 'MCQ thieu phuong an/dap an: ' + e['id']
        elif kind == 'tf':
            assert len(q['sts']) == 4 and all(isinstance(x['a'], bool) for x in q['sts']), 'Dung/Sai khong du 4 menh de: ' + e['id']
        else:
            assert q.get('q'), 'Tu luan thieu noi dung: ' + e['id']
        srcq.append(q)
    for group in ('cau_hoi_goc', 'cau_hoi_bo_sung'):
        section = doc.get(group, {})
        for e in section.get('trac_nghiem', []): add_source(e, 'mcq')
        for e in section.get('dung_sai', []): add_source(e, 'tf')
        for e in section.get('tu_luan', []): add_source(e, 'essay')
    assert len(srcq) == int(doc.get('thong_ke', {}).get('tong_so_cau', 25)), \
        'BAI_%02d: so cau khong khop thong_ke' % n
    assert len({q['id'] for q in srcq}) == len(srcq), 'ID nguon bi trung trong ' + lid
    old_ids = {q.get('id') for q in oldq}
    source_ids = {q['id'] for q in srcq}
    merged = list(srcq)
    ids_seen = set(source_ids)
    signatures = {question_signature(q) for q in srcq}
    duplicates = 0
    for q in Q[lid] + oldq:
        qid = q.get('id')
        if qid in ids_seen: continue
        sig = question_signature(q)
        if sig != '|' and sig in signatures:
            duplicates += 1
            continue
        merged.append(q); ids_seen.add(qid); signatures.add(sig)
    present = len(source_ids & old_ids)
    added = len(source_ids - old_ids)
    integration_rows.append({'n': n, 'source': len(srcq), 'present': present, 'added': added,
                             'duplicates': duplicates, 'before': len(oldq), 'after': len(merged),
                             'web_only': sum(1 for q in oldq if q.get('id') not in source_ids)})
    Q[lid] = merged

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
reg = '(window.T=window.T||{L:{},Q:{}}).%s%s=%s;\n'
for lid, L in lessons.items():
    open(os.path.join(OUT, 'lessons', lid + '.js'), 'w', encoding='utf-8').write(reg % ('L', '["%s"]' % lid, js({'sec': L['sec'], 'terms': L['terms'], 'txt': L['txt']})))
    if Q[lid]: open(os.path.join(OUT, 'questions', lid + '.js'), 'w', encoding='utf-8').write(reg % ('Q', '["%s"]' % lid, js(Q[lid])))

version_files = [Path(__file__)] + [p for p in Path(SRC).rglob('*') if p.is_file() and p.suffix.lower() in ('.md', '.csv', '.json')]
version_hash = hashlib.sha256()
for version_file in sorted(version_files, key=lambda p: p.as_posix()):
    version_hash.update(version_file.as_posix().encode('utf-8'))
    version_hash.update(version_file.read_bytes())
data_version = version_hash.hexdigest()[:16]
cat = {'dataVersion': data_version, 'topics': topics, 'rel': R, 'hk': {'HK1': [1, 14], 'HK2': [15, 28]}, 'qfiles': [i for i in ids if Q[i]],
       'lessons': [{'id': r['Ma_Bai'], 'title': r['Ten_Bai'], 'n': int(r['Thu_Tu']), 'topic': topics.index(r['Chu_De']), 'src': r['Nguon_File'], 'tiet': int(r['So_Tiet'])} for r in rows]}
open(os.path.join(OUT, 'catalog.js'), 'w', encoding='utf-8').write(reg % ('cat', '', js(cat)))

total = {'mcq': 0, 'tf': 0, 'essay': 0}
report_table = []
print('Bai hoc: %d | Chu de: %d' % (len(ids), len(topics)))
for i, row in zip(ids, integration_rows):
    c = {t: sum(q.get('type') == t and q.get('st') == 'ok' for q in Q[i]) for t in total}
    for t in total: total[t] += c[t]
    status = 'Đạt' if row['present'] + row['added'] == row['source'] else 'Cần rà soát'
    print('%s: nguon=%d, da-co=%d, nhap-moi=%d, trung=%d, sau=%d, %s' %
          (i, row['source'], row['present'], row['added'], row['duplicates'], row['after'], c))
    report_table.append('| Bài %d | %d | %d | %d | %d | %d | %d | %d | %d | %s |' %
                        (row['n'], row['source'], row['present'], row['added'], row['duplicates'],
                         row['after'], c['mcq'], c['tf'], c['essay'], status))
source_total = sum(x['source'] for x in integration_rows)
before_total = sum(x['before'] for x in integration_rows)
after_total = sum(len(Q[i]) for i in ids)
added_total = sum(x['added'] for x in integration_rows)
duplicate_total = sum(x['duplicates'] for x in integration_rows)
missing_total = sum(max(0, x['source'] - x['present'] - x['added']) for x in integration_rows)
report_lines = [
    '# Báo cáo nghiệm thu hợp nhất học liệu Tin học 12', '',
    'Nguồn kiến thức: `nguon/kien-thuc-chuan-hoa/BAI_XX.md`; ngân hàng chuẩn: `nguon/ngan-hang-cau-hoi/BAI_XX_QUESTIONS.json`.',
    'Câu chỉ có trên website được giữ lại. Nhận diện trùng dùng ID, sau đó so nội dung cùng phương án hoặc mệnh đề.',
    '',
    '## Tổng hợp', '',
    '- Tổng câu nguồn: %d.' % source_total,
    '- Câu website trước build: %d.' % before_total,
    '- Câu nguồn đã có trước build (khớp ID): %d.' % sum(x['present'] for x in integration_rows),
    '- Câu nguồn nhập mới: %d.' % added_total,
    '- Bản ghi trùng thực sự được bỏ qua khi ghép: %d.' % duplicate_total,
    '- Câu nguồn còn thiếu sau build: %d.' % missing_total,
    '- Tổng câu sau build: %d (gồm %d câu chỉ có trên website được giữ lại).' %
        (after_total, sum(x['web_only'] for x in integration_rows)),
    '- Phân loại toàn bộ sau build: %d MCQ, %d đúng/sai, %d tự luận.' %
        (total['mcq'], total['tf'], total['essay']),
    '- Bài có kiến thức nguồn: %d/28; bài có câu hỏi nguồn: %d/28.' %
        (len(lessons), sum(1 for i in ids if Q[i])),
    '- Kiểm tra cấu trúc dữ liệu, ID, số lượng nguồn và loại câu: chạy trong build_data.py.',
    '- Playwright E2E: cần chạy riêng bằng `node tests/e2e.js file`.',
    '',
    '## Bảng đối chiếu theo bài', '',
    '| Bài | Câu nguồn | Câu đã có | Câu nhập mới | Câu trùng | Tổng sau hợp nhất | MCQ | Đúng/sai | Tự luận | Trạng thái |',
    '|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|'
] + report_table
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'BAO_CAO_NGHIEM_THU.md'),
     'w', encoding='utf-8').write('\n'.join(report_lines) + '\n')
print('TONG', total, '| so cau', after_total, '| cau nguon', source_total,
      '| da co', sum(x['present'] for x in integration_rows), '| nhap moi', added_total,
      '| trung xu ly', duplicate_total, '| thieu', missing_total)
assert len(lessons) == 28 and sum(x['source'] for x in integration_rows) == 700
assert sum(x['present'] + x['added'] for x in integration_rows) == 700
assert missing_total == 0
