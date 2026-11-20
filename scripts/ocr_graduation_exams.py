#!/usr/bin/env python3
"""OCR checkpointable; every output remains a review draft, never an exam bank."""
import argparse,concurrent.futures,csv,hashlib,json,os,re,subprocess,tempfile,unicodedata
from pathlib import Path
import pymupdf
from graduation_ocr_parser import parse_pages, structure_ok, apply_heading_corrections, VERSION
p=argparse.ArgumentParser();p.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[1]);p.add_argument('--tesseract',required=True);p.add_argument('--workers',type=int,default=4);p.add_argument('--data-dir');p.add_argument('--model-set',default='tessdata_best');p.add_argument('--year');p.add_argument('--code');a=p.parse_args()
root=a.root.resolve();base=root/'data/exams';manifest=json.loads((base/'manifest.json').read_text(encoding='utf-8'));out=base/'ocr-drafts';out.mkdir(exist_ok=True)
def process(job):
 year,code,src=job;target=out/year/(code+'.json');target.parent.mkdir(exist_ok=True)
 sha=hashlib.sha256((root/src).read_bytes()).hexdigest()
 if target.exists():
  old=json.loads(target.read_text(encoding='utf-8'))
  if old.get('source_sha256')==sha and len(old.get('pages',[]))==4:
   old['candidates']=parse_pages(apply_heading_corrections(old['pages'],old.get('heading_corrections',[])),year,code,src);old['parser_version']=VERSION;old['structure_matches_expected']=structure_ok(old['candidates']);target.write_text(json.dumps(old,ensure_ascii=False,indent=2),encoding='utf-8')
   return {'year':year,'code':code,'status':'cached_reparsed','candidates':len(old['candidates'])}
 pages=[]
 with pymupdf.open(root/src) as doc,tempfile.TemporaryDirectory(prefix='tin-ocr-') as tmp:
  for i,page in enumerate(doc):
   image=Path(tmp)/f'p{i+1}.png';output=Path(tmp)/f'ocr{i+1}';page.get_pixmap(matrix=pymupdf.Matrix(2.5,2.5)).save(image)
   env={**os.environ,'OMP_THREAD_LIMIT':'1'}
   subprocess.run([a.tesseract,str(image),str(output),*(['--tessdata-dir',a.data_dir] if a.data_dir else []),'-l','vie+eng','--psm','3','-c','tessedit_create_tsv=1','-c','tessedit_create_txt=1'],env=env,check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE,timeout=100)
   text=unicodedata.normalize('NFC',output.with_suffix('.txt').read_text(encoding='utf-8'))
   words=list(csv.DictReader(output.with_suffix('.tsv').open(encoding='utf-8'),delimiter='	'))
   low=[{'text':w['text'],'confidence':float(w['conf']),'bbox':[int(w[k]) for k in ('left','top','width','height')]} for w in words if w.get('text','').strip() and 0<=float(w['conf'])<70]
   pages.append({'page':i+1,'text':text,'low_confidence_words':low,'status':'ocr_unverified'})
 candidates=parse_pages(pages,year,code,src)
 payload={'schema_version':1,'year':int(year),'code':code,'source_pdf':src,'source_sha256':sha,'engine':'tesseract-5.5.3/vie+eng','model_set':a.model_set,'status':'needs_visual_review','pages':pages,'candidates':candidates,'parser_version':VERSION,'structure_matches_expected':structure_ok(candidates)}
 target.write_text(json.dumps(payload,ensure_ascii=False,indent=2),encoding='utf-8');return {'year':year,'code':code,'status':'ocr_draft','candidates':len(candidates),'structure_matches_expected':payload['structure_matches_expected']}
jobs=[(y,c,s) for y,items in manifest['files'].items() for c,s in items.items() if (not a.year or a.year==y) and (not a.code or a.code==c)]
with concurrent.futures.ThreadPoolExecutor(max_workers=a.workers) as executor:
 futures={executor.submit(process,j):j for j in jobs}
 for f in concurrent.futures.as_completed(futures):
  try:print(json.dumps(f.result()),flush=True)
  except Exception as e:print(json.dumps({'job':futures[f],'error':str(e)}),flush=True)
