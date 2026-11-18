#!/usr/bin/env python3
"""Import the 31 reviewed Tin hoc 11 lessons into the current website structure.

Never changes grade-10 or grade-12 files. Rebuild-safe: call as the last step
of scripts/build_all_grades.py, and also after original source import.
"""
from __future__ import annotations
import hashlib, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'nguon' / 'khoi-11'
OUT = ROOT / 'data'
REQUIRED = ('trac_nghiem_nhieu_lua_chon','trac_nghiem_dung_sai','tra_loi_ngan','tu_luan')

def json_compact(data):
    return json.dumps(data,ensure_ascii=False,separators=(',',':'))

def markdown_sections(md):
    chunks = re.split(r'^##\s*(\d+)\.\s*(.+?)\s*$',md,flags=re.M)
    if len(chunks)<22:
        raise ValueError('Expected at least seven numbered Markdown sections')
    return {int(chunks[i]): (chunks[i+1].strip(),chunks[i+2].strip()) for i in range(1,len(chunks)-2,3)}

def list_blocks(text):
    """Render Markdown paragraphs and lists using existing app's content blocks."""
    out=[]; plain=[]; bullet=[]
    def flush_plain():
        if plain:
            out.append({'t':'p','x':' '.join(plain).strip()});plain.clear()
    def flush_bullet():
        if bullet:
            out.append({'t':'ul','i':[{'x':x} for x in bullet]});bullet.clear()
    for line in text.splitlines():
        s=line.strip()
        if not s:
            flush_plain();flush_bullet();continue
        if s.startswith('```'):
            flush_plain();flush_bullet();continue
        mm=re.match(r'^[-*+]\s+(.+)$',s) or re.match(r'^\d+[.)]\s+(.+)$',s)
        if mm:
            flush_plain();bullet.append(mm.group(1))
        elif bullet and line[:1].isspace():
            bullet[-1]+=' '+s
        else:
            flush_bullet();plain.append(s)
    flush_plain();flush_bullet()
    return out

def normalize_lesson(markdown, lesson_id, source_path):
    sections=markdown_sections(markdown)
    if not all(n in sections for n in range(1,8)):
        raise ValueError('Missing knowledge section in '+lesson_id)
    sec={x:[] for x in ('obj','key','terms','ex','steps','err','rem')}
    sec['obj']=list_blocks(sections[1][1])
    # Concise lesson overview (E2E requires <=1000 chars), with ALL original
    # scientific detail retained in the grade-11 detail panel below.
    detail=[]; synopsis=[]
    for n in range(2,6):
        heading,content=sections[n]
        detail.append({'t':'p','x':'**'+heading+'**'})
        detail.extend(list_blocks(content))
        snippet=re.sub(r'\s+',' ',content).strip()
        if len(snippet)>145:
            snippet=snippet[:145].rsplit(' ',1)[0].rstrip(' ,;:')+'…'
        synopsis.append({'x':'**'+heading+'**: '+snippet})
    sec['key']=[{'t':'ul','i':synopsis}]
    sec['err']=list_blocks(sections[6][1]);sec['rem']=list_blocks(sections[7][1])
    # The other panels provide a useful summary without replacing full content.
    concepts=[]; seen=set()
    for n in range(2,6):
        head,body=sections[n]
        for term in re.findall(r'\*\*(.{3,65}?)\*\*',body):
            clean=term.strip(' :.,')
            if re.match(r'^(đây|đó|ngay bên|ở bên|ở phía|trong đó|sau đó|trước đó|như vậy)',clean,re.I):
                clean='Khái niệm '+clean
            if clean.lower() not in seen and len(clean)<62:
                seen.add(clean.lower());concepts.append({'t':clean,'d':head})
    if not concepts:
        concepts=[{'t':sections[2][0],'d':'Nội dung trọng tâm của bài học.'}]
    concepts=concepts[:8]
    sec['terms']=[{'t':'ul','i':[{'x':'**'+x['t']+'** — '+x['d']} for x in concepts]}]
    examples=[]
    for n in range(2,6):
        for line in sections[n][1].splitlines():
            clean=line.strip('-*+ \t')
            if re.search(r'(?i)ví dụ|chẳng hạn|tình huống|minh họa',clean) and len(clean)>12:
                examples.append(clean)
    sec['ex']=list_blocks('\n'.join('- '+x for x in examples[:5])) if examples else [{'t':'p','x':'Xem các tình huống và ví dụ minh họa trong mục Kiến thức trọng tâm.'}]
    sec['steps']=detail
    txt='\n'.join(section[1] for section in sections.values())
    if not txt.strip() or not sec['key'] or not sec['err']:
        raise ValueError('Empty lesson content in '+lesson_id)
    return {'sec':sec,'terms':concepts,'txt':txt,'src':source_path}

def stringify(value):
    if isinstance(value,str):return value
    if isinstance(value,(int,float)):return str(value)
    if value is None:return ''
    return json.dumps(value,ensure_ascii=False)

def normalize_questions(doc,lesson_id):
    output=[]
    for key,typ in (('trac_nghiem_nhieu_lua_chon','mcq'),('trac_nghiem_dung_sai','tf'),('tra_loi_ngan','short'),('tu_luan','essay')):
        for raw in doc[key]:
            ident=raw['id']
            q={'id':'T11-'+ident,'lesson':lesson_id,'st':'ok','src':raw.get('nguon',''),
               'type':typ,'q':raw.get('cau_hoi',raw.get('dan_nhap',''))}
            if typ=='mcq':
                opts=raw['lua_chon']
                if set(opts)!=set('ABCD') or raw['dap_an_dung'] not in opts:
                    raise ValueError('Wrong MCQ options/answer: '+ident)
                q.update(opts=[{'k':k,'x':opts[k]} for k in 'ABCD'],ans=raw['dap_an_dung'],exp=raw.get('giai_thich',''))
            elif typ=='tf':
                q['q']=raw.get('dan_nhap',raw.get('cau_hoi',''))
                q['sts']=[{'k':it['ma'],'x':it['noi_dung'],'a':it['dap_an'],'e':it.get('giai_thich','')} for it in raw['cac_y']]
                if len(q['sts'])!=4 or any(type(it['a']) is not bool for it in q['sts']):
                    raise ValueError('Wrong true/false: '+ident)
            elif typ=='short':
                equiv=raw.get('dap_an_tuong_duong',[])
                q.update(kind='Trả lời ngắn',ref=raw.get('kien_thuc_danh_gia',''),
                         hint=stringify(raw.get('dap_an','')),pts=[stringify(it) for it in equiv],
                         nt=raw.get('giai_thich',''))
            else:
                rub=raw.get('thang_diem',[])
                if isinstance(rub,list):pts=[stringify(it) for it in rub]
                elif isinstance(rub,dict):pts=[f'{k}: {stringify(v)}' for k,v in rub.items()]
                else:pts=[stringify(rub)] if rub else []
                q.update(kind='Tự luận',ref=raw.get('kien_thuc_danh_gia',''),
                         hint=stringify(raw.get('goi_y_dap_an','')),pts=pts,nt='')
            if not q['q'].strip():raise ValueError('Blank question '+ident)
            output.append(q)
    return output

def build():
    if not (SRC / 'ngan-hang-cau-hoi' / 'BAI_01_QUESTIONS.json').exists():
        return False
    sample=json.loads((SRC/'ngan-hang-cau-hoi'/'BAI_01_QUESTIONS.json').read_text(encoding='utf-8'))
    if not all(k in sample for k in REQUIRED):
        print('Tin 11: original source schema, skip enhanced builder.')
        return False
    count=0; allids=set(); sha=hashlib.sha256()
    for n in range(1,32):
        id_=f'ICT11_B{n:02d}'
        mdfile=SRC/f'BAI_{n:02d}.md'
        qfile=SRC/'ngan-hang-cau-hoi'/f'BAI_{n:02d}_QUESTIONS.json'
        md=mdfile.read_text(encoding='utf-8')
        doc=json.loads(qfile.read_text(encoding='utf-8'))
        if doc.get('bai_id')!=f'BAI_{n:02d}' or not all(k in doc for k in REQUIRED):
            raise ValueError('Wrong metadata in '+str(qfile))
        questions=normalize_questions(doc,id_)
        if len(questions)<33:raise ValueError('Less than 33 questions in '+id_)
        for q in questions:
            if q['id'] in allids:raise ValueError('Duplicate id: '+q['id'])
            allids.add(q['id'])
        count+=len(questions)
        knowledge=normalize_lesson(md,id_,mdfile.relative_to(ROOT).as_posix())
        for path,prefix,content in ((OUT/'lessons'/f'{id_}.js','L',knowledge),(OUT/'questions'/f'{id_}.js','Q',questions)):
            path.parent.mkdir(parents=True,exist_ok=True)
            path.write_text(f'(window.T=window.T||{{L:{{}},Q:{{}}}}).{prefix}["{id_}"]='+json_compact(content)+';\n',encoding='utf-8')
        sha.update(md.encode());sha.update(qfile.read_bytes())
    if count!=1026:raise ValueError(f'Expected 1026 questions, got {count}')
    catpath=OUT/'catalog-11.js';raw=catpath.read_text(encoding='utf-8')
    prefix,rest=raw.split('.cat=',1)
    cat=json.loads(rest.strip().rstrip(';'))
    assert cat['grade']==11 and len(cat['lessons'])==31
    cat['dataVersion']='20261118-grade11-'+sha.hexdigest()[:12]
    catpath.write_text(prefix+'.cat='+json_compact(cat)+';\n',encoding='utf-8')
    print('Tin 11 reviewed source: 31 lessons, 1026 questions; other grades untouched')
    return True

if __name__=='__main__':build()
