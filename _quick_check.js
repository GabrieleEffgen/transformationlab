const fs = require('fs');

// Check specific files
const files = ['cases/24-building-high-performance-leadership-team/index.html',
               'cases/25-leading-organizational-change/index.html',
               'case-studies.html', 'capabilities.html'];

for (const f of files) {
  const h = fs.readFileSync(f, 'utf8');
  const refs = [...h.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  console.log(`${f}: ${refs.length} refs`);
}
