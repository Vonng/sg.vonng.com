#!/usr/bin/env python3
"""Exercise actual Hugo draft/hidden filtering in an ignored content copy."""
from pathlib import Path
import shutil,subprocess,json
src=Path('.cache/filter-fixture-content');dst=Path('.cache/filter-fixture-public')
shutil.copytree('content',src,dirs_exist_ok=True)
f=src/'book/life/documents/filter-draft.md'
f.write_text('---\ntitle: SG_DRAFT_SENTINEL_7C91\ndraft: true\n---\n\nSG_DRAFT_SENTINEL_7C91\n')
h=src/'book/life/documents/filter-hidden.md'
h.write_text('---\ntitle: SG_HIDDEN_SENTINEL_8A22\ncontent_kind: editorial\ntoc_hide: true\nsearch_exclude: true\nno_print: true\n---\n\nSG_HIDDEN_SENTINEL_8A22\n')
subprocess.run(['hugo','--contentDir',str(src),'--destination',str(dst),'--cleanDestinationDir','--panicOnWarning'],check=True)
assert not (dst/'book/life/documents/filter-draft/index.html').exists()
assert (dst/'book/life/documents/filter-hidden/index.html').exists()
indexes=list(dst.glob('*offline-search*.json'));assert indexes
for p in indexes+[dst/'_print/book/index.html',dst/'book/index.html']:
    t=p.read_text();assert 'SG_DRAFT_SENTINEL_7C91' not in t;assert 'SG_HIDDEN_SENTINEL_8A22' not in t,p
for p in dst.rglob('*'):
    if p.is_file() and p.suffix in ('.html','.json','.xml','.md','.txt'):assert 'SG_DRAFT_SENTINEL_7C91' not in p.read_text(),p
Path('ops/checks/draft-filter.json').write_text(json.dumps({'draft_absent_from_all_text_outputs':True,'hidden_page_exists':True,'hidden_absent_from_search_book_directory_print':True,'scope':'Synthetic fixture in ignored .cache; production sources untouched.'},indent=2)+'\n')
print('PASS: real Hugo draft and hidden filtering')
