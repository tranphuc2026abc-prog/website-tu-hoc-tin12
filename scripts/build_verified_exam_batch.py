#!/usr/bin/env python3
"""Build only explicitly reviewed occurrences; fuzzy OCR proposals are never inputs."""
import argparse,ast,hashlib,json,unicodedata
from pathlib import Path
import pymupdf
from PIL import Image,ImageDraw
ROOT=Path(__file__).resolve().parents[1];BASE=ROOT/'data/exams'
p=argparse.ArgumentParser();p.add_argument('--year',choices=('2025','2026'),default='2025');p.add_argument('--codes',nargs='+',required=True);p.add_argument('--layout-dir',type=Path,required=True);a=p.parse_args()
year=a.year
def load(p):return json.loads(p.read_text(encoding='utf-8'))
def dump(p,obj):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(obj,ensure_ascii=False,indent=2),encoding='utf-8')
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
manifest=load(BASE/'manifest.json');bank=load(BASE/'questions.json');templates={q['template_id']:q for q in load(BASE/'reviewed-templates'/f'{year}.json')['templates']}
audit={e['path']:e for e in load(BASE/'source-audit.json')['exams']};answer_pdf=manifest['answers'][year];answer_sha=sha(ROOT/answer_pdf);pending=[]
for code in a.codes:
 if code in manifest.get('papers',{}).get(year,{}):print('Already released:',code);continue
 review=load(BASE/'reviews'/year/f'{code}.json');layout=load(a.layout_dir/f'{code}.json')
 methods={'manual_source_reviewed':'manual_visual_comparison','source_matched':'source_ocr_and_official_key_comparison'}
 assert review['status'] in methods and layout['sequence_ok']
 method=methods[review['status']]
 assert str(review['year'])==year and review['code']==code
 answer_page=review['review'].get('answer_pdf_page')
 if answer_page is None and year=='2025':answer_page=1 if int(code)<=524 else 2
 assert type(answer_page) is int and answer_page>0
 assert review['review'].get('answer_column',code)==code
 assert len(review['mcq'])==24 and len(review['answer_mcq'])==24 and len(review['answer_tf'])==6
 source=manifest['files'][year][code];assert sha(ROOT/source)==audit[source]['sha256']
 tf_order=review.get('tf_order',list(range(1,7)))
 assert len(tf_order)==6
 for start in (0,2,4):
  assert sorted(tf_order[start:start+2])==[start+1,start+2]
 all_specs=review['mcq']+[[f"{review['tf']}-II-{n}",'0123'] for n in tf_order]
 rows=[]
 for i,(template_id,permutation) in enumerate(all_specs):
  t=templates[template_id];perm=[int(c) for c in permutation];assert sorted(perm)==[0,1,2,3]
  part='I' if i<24 else 'II';number=i+1 if i<24 else i-23
  answer=ord(review['answer_mcq'][i])-65 if i<24 else [c=='D' for c in review['answer_tf'][number-1]]
  expected=perm.index(t['answer']) if i<24 else [t['answer'][k] for k in perm]
  assert answer==expected,(code,part,number,'official key/order disagreement',answer,expected)
  for block in t.get('code_blocks',[]):
   if block['language']=='python':ast.parse(block['code'])
  q={k:t[k] for k in ['prompt','type','code_blocks']};q['options']=[t['options'][k] for k in perm]
  q.update(id=f"{year}-{code}-{part}-{number:02}",year=int(year),code=code,part=part,number=number,answer=answer,track='common' if i<26 else 'cs' if i<28 else 'ict',source_pdf=source,source_sha256=audit[source]['sha256'],verification='verified',
   answer_source={'pdf':answer_pdf,'sha256':answer_sha,'page':answer_page,'column':code,'row':i+1,'kind':'official'},
   review={'method':method,'date':review['review'].get('date','2026-11-20'),'template_id':template_id,'occurrence_review':f'data/exams/reviews/{year}/{code}.json','option_order':perm})
  q['canonical_id']=t.get('canonical_id') or hashlib.sha256(json.dumps([t['type'],t['prompt'],t['options'],t.get('code_blocks',[])],ensure_ascii=False).encode()).hexdigest()
  q['source_image']=f'data/exams/images/{year}/{code}/{part}-{number:02}.png'
  rows.append(q)
 pending.append((code,source,layout,rows))
# All answer/order checks complete before writing any release data.
for code,source,layout,rows in pending:
 with pymupdf.open(ROOT/source) as doc:
  for i,q in enumerate(rows):
   start=layout['heads'][i];end=layout['heads'][i+1] if i+1<len(rows) else None;last_page=end['page'] if end else 4;segments=[];pieces=[]
   for page_num in range(start['page'],last_page+1):
    page=doc[page_num-1];top=start['top']-2 if page_num==start['page'] else 20
    bottom=end['top']-2 if end and page_num==end['page'] else page.rect.height-39
    if bottom<=top:continue
    rect=[30,top,page.rect.width-22,bottom];pix=page.get_pixmap(matrix=pymupdf.Matrix(2.5,2.5),clip=pymupdf.Rect(rect));pieces.append(Image.frombytes('RGB',[pix.width,pix.height],pix.samples));segments.append({'page':page_num,'rect_points':rect})
   image=Image.new('RGB',(max(im.width for im in pieces),sum(im.height for im in pieces)+12*(len(pieces)-1)),'white');y=0
   for im in pieces:image.paste(im,(0,y));y+=im.height+12
   dest=ROOT/q['source_image'];dest.parent.mkdir(parents=True,exist_ok=True);image.save(dest)
   q['source_pages']=[s['page'] for s in segments];q['source_segments']=segments;q['source_image_sha256']=sha(dest)
   q['prompt']=unicodedata.normalize('NFC',q['prompt']);q['options']=[unicodedata.normalize('NFC',x) for x in q['options']]
  bank['questions'].extend(rows)
  path=f'data/exams/papers/{year}/{code}.json';dump(ROOT/path,{'schema_version':1,'year':int(year),'code':code,'duration_seconds':3000,'status':'verified','source_pdf':source,'question_ids':[q['id'] for q in rows],'tracks':['ict','cs'],'question_count':30,'scored_question_count':28})
  manifest.setdefault('papers',{}).setdefault(year,{})[code]=path
  print('Verified/released',code,'questions',len(rows),'multi-page',sum(len(q['source_pages'])>1 for q in rows))
dump(BASE/'questions.json',bank);dump(BASE/'manifest.json',manifest)
