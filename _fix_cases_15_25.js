const fs = require('fs');

// Load i18n.js
let i18n = fs.readFileSync('assets/i18n.js', 'utf8');
const entries = i18n.match(/'[^']+':\s*\{[^}]+\}/g) || [];
const textToKey = {};
for (const entry of entries) {
  const km = entry.match(/'([^']+)'/);
  const em = entry.match(/en:\s*'([^']*)'/);
  if (km && em) textToKey[em[1].trim()] = km[1];
}
console.log(`Loaded ${Object.keys(textToKey).length} text→key mappings`);

const secTitles = {
  'Executive Summary': 'sec1-title', 'Business Challenge': 'sec2-title',
  'Diagnostic Approach': 'sec3-title', 'Key Hypotheses': 'sec4-title',
  'Recommended Transformation': 'sec5-title', 'Transformation Roadmap': 'sec6-title',
  'Governance Model': 'sec7-title', 'KPI Framework': 'sec8-title',
  'Risks and Mitigations': 'sec9-title', 'Business Impacts and Results': 'sec10-title',
  'Executive Takeaway': 'sec11-title'
};

// Helper to add key to i18n.js
function addKey(key, enText) {
  const entry = `    '${key}': { en: '${enText.replace(/'/g, "\\'")}', pt: '${enText.replace(/'/g, "\\'")}' },\n`;
  i18n = i18n.replace(/\n\};/, `\n${entry}};`);
  textToKey[enText] = key;
}

for (let n = 15; n <= 25; n++) {
  const cn = n.toString();
  const dir = fs.readdirSync('cases').find(d => d.startsWith(cn));
  if (!dir) { console.log(`Case ${cn}: dir not found`); continue; }

  let html = fs.readFileSync(`cases/${dir}/index.html`, 'utf8');
  if (html.includes(`data-i18n="c${cn}-s1-p1"`)) {
    console.log(`Case ${cn}: already done, skip`);
    continue;
  }

  let modified = false;
  const counts = {};

  function nextKey(secNum, type) {
    const t = type === 'h3' || type === 'td' || type === 'th' ? `${type}` : type;
    counts[`${secNum}-${t}`] = (counts[`${secNum}-${t}`] || 0) + 1;
    const count = counts[`${secNum}-${t}`];
    return `c${cn}-s${secNum}-${t}${count}`;
  }

  html = html.replace(/<section class="case-section" id="section-(\d+)">([\s\S]*?)<\/section>/g, (full, secNum, content) => {
    let newContent = content;

    // h2 section titles
    newContent = newContent.replace(/<h2>([\s\S]*?)<\/h2>/, (m, inner) => {
      const text = inner.replace(/<[^>]+>/g, '').replace(/^\d+\.\s*/, '').trim();
      let key = textToKey[text] || secTitles[text];
      if (key) { modified = true; return `<h2 data-i18n="${key}">${inner}</h2>`; }
      console.log(`  Case ${cn} s${secNum}: h2 unmatched "${text}"`);
      return m;
    });

    // p elements
    newContent = newContent.replace(/<p>([\s\S]*?)<\/p>/g, (m, inner) => {
      if (m.includes('data-i18n')) return m;
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text) return m;
      let key = textToKey[text];
      if (!key) { key = nextKey(secNum, 'p'); addKey(key, text); console.log(`  Case ${cn} s${secNum}: new p key ${key}`); }
      modified = true;
      return `<p data-i18n="${key}">${inner}</p>`;
    });

    // li elements
    newContent = newContent.replace(/<li>([\s\S]*?)<\/li>/g, (m, inner) => {
      if (m.includes('data-i18n')) return m;
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text) return m;
      let key = textToKey[text];
      if (!key) { key = nextKey(secNum, 'li'); addKey(key, text); console.log(`  Case ${cn} s${secNum}: new li key ${key}`); }
      modified = true;
      return `<li data-i18n="${key}">${inner}</li>`;
    });

    // h3 elements
    newContent = newContent.replace(/<h3>([\s\S]*?)<\/h3>/g, (m, inner) => {
      if (m.includes('data-i18n')) return m;
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text) return m;
      let key = textToKey[text];
      if (!key) { key = nextKey(secNum, 'h3'); addKey(key, text); console.log(`  Case ${cn} s${secNum}: new h3 key ${key}`); }
      modified = true;
      return `<h3 data-i18n="${key}">${inner}</h3>`;
    });

    return full.replace(content, newContent);
  });

  if (modified) {
    // Fix hero lead/tag/title keys if needed
    html = html.replace(/(data-i18n=")case\d+-(lead")/, `$1case${cn}-$2`);
    html = html.replace(/(data-i18n=")case\d+-(tag")/, `$1case${cn}-$2`);
    html = html.replace(/(data-i18n=")case\d+-(title")/, `$1case${cn}-$2`);

    fs.writeFileSync(`cases/${dir}/index.html`, html);
    fs.writeFileSync('assets/i18n.js', i18n);
    console.log(`Case ${cn}: FIXED`);
  } else {
    console.log(`Case ${cn}: no changes needed`);
  }
}

try { new Function(i18n); console.log('i18n.js: OK'); }
catch(e) { console.log('i18n.js: FAIL -', e.message); }
