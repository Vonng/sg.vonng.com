// Exercise the real production index with the pinned Lunr implementation.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const lunr = require('../themes/oink/assets/js/third_party/lunr.min.js');
const output = process.argv[2] || '.cache/production-review';
const indexes = fs.readdirSync(output).filter(name => /^offline-search-index.*\.json$/.test(name));
assert.equal(indexes.length, 1, 'one production search index');
const documents = JSON.parse(fs.readFileSync(path.join(output, indexes[0]), 'utf8'));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('assets/js/search-engine.js', 'utf8'), context);
const engine = context.window.OinkSearchEngine.create(documents, lunr, 10);
const checks = [
  ['Certificate of Posting', '/book/rights/contracts/performance/', true],
  ['certificate   OF posting', '/book/rights/contracts/performance/', true],
  ['credit note', '/book/rights/contracts/performance/', true],
  ['合同履行', '/book/rights/contracts/performance/', true],
  ['SES', '/book/rights/contracts/before-signing/', false],
  ['KET', '/book/work/career/offer/', false],
  ['JPJS', '/book/work/career/job-search/', false],
  ['SIP 2.0', '/book/work/business/risk-exit/', false],
  ['地铁', '/book/life/transport/public-transport/', false],
  ['Singlish', '/book/people/language/everyday-language/', false],
];
for (const [query, target, first] of checks) {
  const results = engine.query(query);
  assert(results.some(hit => hit.doc.ref === target), `${query}: target reachable`);
  if (first) assert.equal(results[0].doc.ref, target, `${query}: exact phrase first`);
  assert.equal(new Set(results.map(hit => hit.doc.ref)).size, results.length, `${query}: no duplicate results`);
}
console.log(`Search passed: ${checks.length} real queries over ${documents.length} indexed pages.`);
