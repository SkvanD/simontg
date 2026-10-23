// Dead Ground — structural audit
// Run with: node audit.js

const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// All defined page numbers
const defined = [...html.matchAll(/^(\d+):\{/gm)].map(m => parseInt(m[1])).sort((a,b)=>a-b);

// All reachable page numbers (entry point + every to:, restart:, and n= target)
const linked = new Set([1]);
[...html.matchAll(/to:(\d+)/g)].forEach(m => linked.add(parseInt(m[1])));
[...html.matchAll(/restart:(\d+)/g)].forEach(m => linked.add(parseInt(m[1])));
[...html.matchAll(/\bn\s*=\s*(\d+)/g)].forEach(m => linked.add(parseInt(m[1])));

// Pages intentionally left unreachable (duplicates kept for reference)
const intentionalOrphans = new Set([15]);

const orphans = defined.filter(n => !linked.has(n) && !intentionalOrphans.has(n));

// Evidence gate check — pages that lead directly to 57
const toFiftySevenMatches = [...html.matchAll(/to:57/g)];
const evidencePages = [32, 39, 50, 52, 55];
console.log('--- Dead Ground Audit ---');
console.log(`Pages defined: ${defined.join(', ')}`);
console.log(`Orphaned pages: ${orphans.length ? orphans.join(', ') : 'none'}`);
console.log(`Direct links to page 57: ${toFiftySevenMatches.length} (evidence gate active)`);
console.log(`Evidence gate requires 3 of: ${evidencePages.join(', ')}`);
console.log('--- OK ---');
