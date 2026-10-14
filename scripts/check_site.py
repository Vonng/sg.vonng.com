#!/usr/bin/env python3
"""Validate source metadata and production links. Does not certify facts or rendering."""
import argparse, hashlib, json, re, sys
from pathlib import Path
from collections import Counter
from datetime import date
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit
import yaml

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.ids=set(); self.refs=[]; self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        for k in ('href','src'):
            if a.get(k): self.refs.append(a[k])

def route(p,meta):
    if meta.get('url'): return meta['url']
    parts=list(p.relative_to('content').parts); name=Path(parts.pop()).stem
    if name not in ('_index','index'): parts.append(str(meta.get('slug',name)))
    return '/'+'/'.join(parts)+('/' if parts else '')

def foreign_residue(text):
    # Allow only the deliberate sibling-guide link in the site footer. Content,
    # region routes and the old site's analytics ID remain subject to the gate.
    footer = r'<footer\b[^>]*\bdata-td-shell-footer(?=[\s=>])[^>]*>.*?</footer>'
    sibling = r'<a href=(?:"https://ca\.vonng\.com/"|https://ca\.vonng\.com/) target=(?:"_blank"|_blank) rel="noopener noreferrer">加拿大生活指南</a>'
    checked = re.sub(footer, lambda m: re.sub(sibling, '', m[0]), text, flags=re.S)
    return bool(re.search(r'ca\.vonng\.com|加拿大生活|/docs/regions/|G-KTPE9LDZ2W', checked))

args=argparse.ArgumentParser(); args.add_argument('--public-dir',default='public'); args.add_argument('--include-drafts',action='store_true'); a=args.parse_args()
out=Path(a.public_dir); errors=[]; pages=[]; ids=[]; titles=[]
approvals=json.loads(Path('ops/reviews/accepted.json').read_text()) if Path('ops/reviews/accepted.json').exists() else {}
for p in sorted(Path('content').rglob('*.md')):
    text=p.read_text()
    try:
        _,fm,body=text.split('---',2); m=yaml.safe_load(fm)
        assert isinstance(m,dict)
    except Exception as e: errors.append(f'{p}: invalid frontmatter {e}'); continue
    missing=set(('title','description','page_id','content_kind','scope','status','draft','verified','reviewed_by'))-m.keys()
    if missing: errors.append(f'{p}: missing {sorted(missing)}')
    ids.append(m.get('page_id')); titles.append(m.get('title'))
    if not body.strip(): errors.append(f'{p}: empty body')
    if re.search(r'^# ',body,re.M): errors.append(f'{p}: repeated H1')
    prose=re.sub(r'^```.*?^```[^\n]*', '', body, flags=re.M|re.S)
    for mark in re.finditer(r'\*\*(.+?)\*\*',prose):
        before=prose[mark.start()-1:mark.start()] if mark.start() else ''
        after=prose[mark.end():mark.end()+1]
        if mark[1]!=mark[1].strip() or (before and not before.isspace()) or (after and not after.isspace()):
            errors.append(f'{p}: bold needs inner trim and outer spaces: {mark[1][:35]}')
    if re.search(r'(turn\d+(?:search|view|fetch)\d+|/Users/|TODO|TBD|待补充正文)',body): errors.append(f'{p}: internal marker')
    is_topic=m.get('content_kind')!='editorial'; draft=m.get('draft') is True
    if not isinstance(m.get('draft'),bool): errors.append(f'{p}: draft must be boolean')
    if is_topic and not draft:
        approval=approvals.get(str(p),{})
        if approval.get('body_sha256')!=hashlib.sha256(body.encode()).hexdigest(): errors.append(f'{p}: body differs from accepted review')
        if len({approval.get(k) for k in ('author','facts','editor')})!=3: errors.append(f'{p}: three independent roles required')
        if not approval.get('report') or not Path(approval['report']).is_file(): errors.append(f'{p}: missing factual review record')
        if m.get('status') not in ('verified','integrated','published'): errors.append(f'{p}: unreviewed production topic')
        if not m.get('reviewed_by'): errors.append(f'{p}: missing reviewer')
        try:
            if date.fromisoformat(str(m['verified']))>date.today(): raise ValueError('future date')
        except Exception: errors.append(f'{p}: invalid verification date')
    if m.get('status')=='written' and (not draft or m.get('verified') or m.get('reviewed_by')): errors.append(f'{p}: written state inconsistent')
    url=route(p,m); target=out/url.lstrip('/')/'index.html'
    if draft and not a.include_drafts and target.exists(): errors.append(f'{p}: draft leaked')
    if (not draft or a.include_drafts) and not target.exists(): errors.append(f'{p}: missing output {url}')
    if is_topic and not re.search(r'\]\(https?://',body): errors.append(f'{p}: no source link')
    pages.append({'path':str(p),'url':url,'draft':draft,'hidden':bool(m.get('toc_hide') or m.get('search_exclude')),'topic':is_topic,'state':m.get('status'),'sha256':hashlib.sha256(text.encode()).hexdigest()})
for field,vals in [('page_id',ids),('title',titles)]:
    for v,n in Counter(vals).items():
        if n>1: errors.append(f'duplicate {field}: {v}')
docs={p:Document(p.read_text()) for p in out.rglob('*.html')}; external=0; local=0
for p,doc in docs.items():
    text=p.read_text()
    if foreign_residue(text): errors.append(f'{p}: Canada residue')
    if re.search(r'\*\*[^*\n]{1,100}\*\*',re.sub(r'<(?:script|code|pre)\b.*?</(?:script|code|pre)>','',text,flags=re.S)): errors.append(f'{p}: unrendered bold')
    for ref in doc.refs:
        u=urlsplit(ref)
        if u.scheme in ('mailto','tel','data','javascript'): continue
        if u.netloc and u.netloc!='sg.vonng.com': external+=1; continue
        local+=1; path=unquote(u.path)
        dest=(out/path.lstrip('/')) if path.startswith('/') else (p.parent/path if path else p)
        if dest.is_dir(): dest=dest/'index.html'
        if not dest.exists(): errors.append(f'{p}: broken {ref}'); continue
        if u.fragment and dest.suffix=='.html':
            d=docs.get(dest) or Document(dest.read_text())
            if unquote(u.fragment) not in d.ids: errors.append(f'{p}: missing anchor {ref}')
indexes=list(out.glob('**/*offline-search-index*.json'))
for ix in indexes:
    items=json.loads(ix.read_text()); refs={x['ref'] for x in items}
    for p in pages:
        if (p['draft'] and not a.include_drafts or p['hidden']) and p['url'] in refs: errors.append(f'{ix}: hidden/draft in search {p["url"]}')
output_inventory={str(p.relative_to(out)):{'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in out.rglob('*') if p.is_file()}
report={'source_pages':len(pages),'topics':sum(p['topic'] for p in pages),'drafts':sum(p['draft'] for p in pages),'html':len(docs),'internal_references':local,'external_references_skipped':external,'errors':errors,'source_inventory':pages,'output_dir':str(out.resolve()),'output_inventory':output_inventory,'limitations':['No external URL check; no factual approval; no browser or visual certification.']}
Path('.cache').mkdir(exist_ok=True);Path('.cache/site-check.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k not in ('source_inventory','output_inventory','output_dir','limitations')},ensure_ascii=False,indent=2))
sys.exit(bool(errors))
