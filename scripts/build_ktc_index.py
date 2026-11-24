"""Build reproducible, grade-separated KTC knowledge indexes."""
import json, re, hashlib
from pathlib import Path
from sentence_transformers import SentenceTransformer
ROOT=Path(__file__).resolve().parents[1]
MODEL="sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
def parse(path,marker):
    return json.loads(path.read_text(encoding="utf-8").split(marker,1)[1].strip().rstrip(";"))
def texts(v):
    if isinstance(v,str): yield v
    elif isinstance(v,list):
        for x in v: yield from texts(x)
    elif isinstance(v,dict):
        for k,x in v.items():
            if k not in ("t","src"): yield from texts(x)
def corpus(grade):
    catalog=parse(ROOT/"data"/("catalog.js" if grade==12 else f"catalog-{grade}.js"),".cat=")
    assert len(catalog["lessons"])=={10:34,11:31,12:28}[grade]
    rows=[]
    for lesson in catalog["lessons"]:
        lid=lesson["id"]
        data=parse(ROOT/"data"/"lessons"/f"{lid}.js","]=")
        assert data["sec"].get("key"),lid
        for section, value in data["sec"].items():
            if section=="obj": continue
            body="\n".join(dict.fromkeys(x.strip() for x in texts(value) if x.strip()))
            if not body: continue
            for start in range(0,len(body),650):
                chunk=body[start:start+800]
                if not chunk.strip(): continue
                rows.append(dict(id=hashlib.sha256(f"{lid}:{section}:{start}:{chunk}".encode()).hexdigest()[:24],lesson=lid,title=lesson["title"],section=section,text=chunk))
                if start+800>=len(body): break
    return rows
def main():
    model=SentenceTransformer(MODEL,device="cpu")
    out=ROOT/"data"/"ktc";out.mkdir(exist_ok=True)
    for grade in (10,11,12):
        rows=corpus(grade)
        vectors=model.encode([r["title"]+"\n"+r["text"] for r in rows],normalize_embeddings=True,batch_size=32)
        for r,v in zip(rows,vectors): r["vector"]=[round(float(x),5) for x in v]
        (out/f"grade-{grade}.json").write_text(json.dumps(dict(model=MODEL,grade=grade,chunks=rows),ensure_ascii=False,separators=(",",":")),encoding="utf-8")
        print(grade,len(rows))
if __name__=="__main__": main()
