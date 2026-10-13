#!/usr/bin/env python3
"""Sync a checked build and compare all relative paths, sizes and SHA256."""
from pathlib import Path
import hashlib,json,subprocess,sys
src,dst=map(Path,sys.argv[1:])
assert src.resolve()!=dst.resolve() and src.is_dir()
report=json.loads(Path('.cache/site-check.json').read_text()); assert not report['errors']
def inventory(d):
    return {str(p.relative_to(d)):{'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in d.rglob('*') if p.is_file()}
i=inventory(src)
assert str(src.resolve())==report['output_dir'] and i==report['output_inventory'], 'Build changed since check'
subprocess.run(['rsync','-a','--delete',str(src)+'/',str(dst)+'/'],check=True)
assert i==inventory(dst)
Path('.cache/public-inventory.json').write_text(json.dumps(i,ensure_ascii=False,indent=2)+'\n'); print(f'{len(i)} files: relative paths, sizes and SHA256 match')
