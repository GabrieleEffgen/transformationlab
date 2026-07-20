const fs = require('fs');
const i18n = fs.readFileSync('assets/i18n.js','utf8');

// Validate all HTML files
const files = [
  'index.html', 'capabilities.html', 'case-studies.html',
  'frameworks.html', 'insights.html', 'about.html', 'contact.html',
  'curriculo.html'
];

const caseDirs = fs.readdirSync('cases').filter(d => /^\d/.test(d));
for (const d of caseDirs) {
  files.push(`cases/${d}/index.html`);
}

let totalMissing = 0;
let totalRefs = 0;

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, 'utf8');
  const refs = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  const unique = [...new Set(refs)];
  const missing = unique.filter(k => {
    const re = new RegExp(`'${k.replace(/'/g, "\\'")}'\\s*:`);
    return !re.test(i18n);
  });
  totalRefs += unique.length;
  totalMissing += missing.length;
  if (missing.length > 0) {
    console.log(`${f}: ${missing.length} missing`);
  }
}

console.log(`\nTotal refs: ${totalRefs}`);
console.log(`Total missing: ${totalMissing}`);

// Syntax check
try {
  new Function(i18n);
  console.log('Syntax: OK');
} catch(e) {
  console.log('Syntax: FAIL -', e.message);
}

// Total keys
const keys = i18n.match(/'[a-z][^']*':\s*\{/g);
console.log(`Total keys: ${keys ? keys.length : 0}`);
