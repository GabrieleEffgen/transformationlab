const fs = require('fs');

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, m => {
    const map = {
      '&#8212;': '\u2014', '&#183;': '\u00B7', '&amp;': '&',
      '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'",
      '&ndash;': '\u2013', '&mdash;': '\u2014', '&#8226;': '\u2022'
    };
    return map[m] || m;
  }).trim();
}

// Fix mojibake: convert Windows-1252 misinterpretation of UTF-8 em/en-dash bytes
// UTF-8 E2 80 94 (U+2014 em dash) misinterpreted as â (U+00E2) € (U+20AC) " (U+201D)
// UTF-8 E2 80 93 (U+2013 en dash) misinterpreted as â (U+00E2) € (U+20AC) " (U+201C)
function fixMojibake(s) {
  return s
    .replace(/\u00E2\u20AC\u201D/g, '\u2014')  // em dash fix
    .replace(/\u00E2\u20AC\u201C/g, '\u2013'); // en dash fix (WAS: \u201C not \u2013)
}

// Load i18n.js
const i18nSrc = fixMojibake(fs.readFileSync('assets/i18n.js', 'utf8'));
const entryRegex = /'([^']+)':\s*\{[^}]*en:\s*'([^']*)'/g;
const textToKeys = {};

let m;
while ((m = entryRegex.exec(i18nSrc)) !== null) {
  const key = m[1];
  const cleanText = stripTags(m[2]);
  if (cleanText && !cleanText.includes('{') && !cleanText.includes('}')) {
    if (!textToKeys[cleanText]) textToKeys[cleanText] = [];
    textToKeys[cleanText].push(key);
  }
}

console.log(`Loaded ${Object.keys(textToKeys).length} unique texts`);

const secKeys = {
  '1. Executive Summary': 'sec1-title',
  '2. Business Challenge': 'sec2-title',
  '3. Diagnostic Approach': 'sec3-title',
  '4. Key Hypotheses': 'sec4-title',
  '5. Recommended Transformation': 'sec5-title',
  '6. Transformation Roadmap': 'sec6-title',
  '7. Governance Model': 'sec7-title',
  '8. KPI Framework': 'sec8-title',
  '9. Risks and Mitigations': 'sec9-title',
  '10. Business Impacts and Results': 'sec10-title',
  '11. Executive Takeaway': 'sec11-title',
};

let restored = 0;

function bestKey(text, secPrefix) {
  const keys = textToKeys[text];
  if (!keys || keys.length === 0) return null;
  const prefixed = keys.filter(k => k.startsWith(secPrefix));
  if (prefixed.length > 0) return prefixed[0];
  const secMatch = secPrefix.match(/s(\d+)-/);
  if (secMatch) {
    const sn = secMatch[1];
    const sameSec = keys.filter(k => k.match(new RegExp(`-s${sn}-`)));
    if (sameSec.length > 0) return sameSec[0];
  }
  return keys[0];
}

const ELEM_TAGS = ['h2', 'h3', 'p', 'li', 'th', 'td'];
const BLOCK_TEST = /<(div|table|ul|ol|h[1-6])/i;
const NESTED_LIST = /<(ul|ol)>/i;

function processFile(caseNum, fp) {
  caseNum = caseNum.padStart(2, '0');
  const secPrefix = `c${caseNum}-s`;
  let html = fixMojibake(fs.readFileSync(fp, 'utf8'));
  let changed = false;

  html = html.replace(/<section class="case-section" id="section-(\d+)">([\s\S]*?)<\/section>/g, (full, sn, content) => {
    let c = content;
    const pref = `${secPrefix}${sn}-`;

    for (const tag of ELEM_TAGS) {
      const regex = new RegExp(`<${tag}\\b((?:(?!data-i18n)[^>])*)>([\\s\\S]*?)<\\/${tag}>`, 'g');
      c = c.replace(regex, (match, attrs, inner) => {
        const text = stripTags(inner);
        if (!text) return match;
        if (tag === 'p' && BLOCK_TEST.test(inner)) return match;
        if (tag === 'li' && NESTED_LIST.test(inner)) return match;

        // Section titles for h2
        if (tag === 'h2' && secKeys[text]) {
          changed = true; restored++;
          return `<h2 data-i18n="${secKeys[text]}"${attrs}>${inner}</h2>`;
        }

        const key = bestKey(text, pref);
        if (key) {
          changed = true; restored++;
          return `<${tag} data-i18n="${key}"${attrs}>${inner}</${tag}>`;
        }
        return match;
      });
    }

    return full.replace(content, c);
  });

  if (changed) fs.writeFileSync(fp, html);
  return changed;
}

const cases = [
  { n: '08', f: 'cases/08-continuous-improvement-system/index.html' },
  { n: '09', f: 'cases/09-ai-enabled-operations/index.html' },
  { n: '10', f: 'cases/10-inventory-optimization/index.html' },
  { n: '11', f: 'cases/11-lean-office-transformation/index.html' },
  { n: '12', f: 'cases/12-enterprise-change-management/index.html' },
  { n: '13', f: 'cases/13-capex-governance/index.html' },
  { n: '14', f: 'cases/14-transformation-management-office/index.html' },
];

for (const c of cases) {
  const before = restored;
  processFile(c.n, c.f);
  console.log(`Case ${c.n}: restored ${restored - before} attributes`);
}

console.log(`\nTotal: ${restored} data-i18n attributes restored`);
