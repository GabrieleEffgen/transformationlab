const fs = require('fs');

// Function code (from the broken file's ending)
const fnCode = `
  init() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (this.translations[key]) {
        el.dataset.i18nOriginal = el.innerHTML;
      }
    });
    this.apply();
    this.createToggle();
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (this.translations[key] && this.translations[key][this.currentLang]) {
        el.innerHTML = this.translations[key][this.currentLang];
      }
    });
    document.documentElement.lang = this.currentLang === 'en' ? 'en' : 'pt';
  },

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', this.currentLang);
    this.apply();
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = this.currentLang === 'en' ? 'PT' : 'EN';
  },

  createToggle() {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    const btn = document.createElement('a');
    btn.id = 'lang-toggle';
    btn.textContent = 'PT';
    btn.href = '#';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', (e) => { e.preventDefault(); this.toggle(); });
    nav.appendChild(btn);
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
`;

// Collect all data-i18n refs from all HTML files
const allRefs = {};

function scanFile(fp) {
  if (!fs.existsSync(fp)) return;
  const html = fs.readFileSync(fp, 'utf8');
  const refs = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  for (const ref of refs) {
    allRefs[ref] = true;
  }
}

// Scan all HTML files
['index.html','capabilities.html','case-studies.html','frameworks.html','insights.html','about.html','contact.html','curriculo.html'].forEach(f => scanFile(f));

const dirs = fs.readdirSync('cases').filter(d => /^\d/.test(d));
for (const d of dirs) {
  scanFile(`cases/${d}/index.html`);
}

console.log('Total data-i18n refs found:', Object.keys(allRefs).length);

// Check which refs don't have i18n.js entries
const old = fs.readFileSync('assets/i18n.js', 'utf8');
let missingRefs = [];
for (const ref of Object.keys(allRefs).sort()) {
  const re = new RegExp(`'${ref.replace(/'/g, "\\'")}'\\s*:`);
  if (!re.test(old)) {
    missingRefs.push(ref);
  }
}

console.log('Missing keys:', missingRefs.length);
if (missingRefs.length > 0) {
  console.log('First 10 missing:', missingRefs.slice(0, 10));
}

// Regenerate file with all existing keys
const entries = [...old.matchAll(/'[^']+':\s*\{[^}]+?en:\s*'[^']*'\s*,\s*pt:\s*'[^']*'\s*\}/g)];
const seen = new Set();
let body = '';

for (const e of entries) {
  const key = e[0].match(/'([^']+)'/)[1];
  if (seen.has(key)) continue;
  seen.add(key);
  body += '    ' + e[0] + ',\n';
}

console.log('Valid entries extracted:', seen.size);

const result = `const i18n = {
  currentLang: localStorage.getItem('lang') || 'en',

  translations: {
${body.trimEnd()}
  },${fnCode}
`;

try {
  new Function(result);
  console.log('Syntax: OK');
  fs.writeFileSync('assets/i18n.js', result);
} catch(e) {
  console.log('Syntax: FAIL -', e.message.substring(0, 300));
}
