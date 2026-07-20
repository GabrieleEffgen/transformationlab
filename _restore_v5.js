const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, 'cases');
const i18nContent = fs.readFileSync(path.join(__dirname, 'assets', 'i18n.js'), 'utf-8');

function stripHtml(s) {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

const entries = [];
const re = /'([^']+)':\s*\{\s*en:\s*'((?:[^'\\]|\\.)*)'/g;
let m;
while ((m = re.exec(i18nContent)) !== null) {
  entries.push({ key: m[1], en: m[2].replace(/\\'/g, "'") });
}

function findKey(caseNum, sectionNum, tag, text) {
  const prefix = `c${caseNum}-s${sectionNum}-${tag}`;
  let found = null;
  for (const e of entries) {
    if (e.key.startsWith(prefix) && e.key !== prefix && !e.key.includes('back') && !e.key.includes('portfolio')) {
      const eText = stripHtml(e.en);
      if (eText === text) return e.key;
      if (eText.toLowerCase() === text.toLowerCase()) found = e.key;
    }
  }
  if (found) return found;

  for (const e of entries) {
    const eText = stripHtml(e.en);
    if (eText === text) return e.key;
  }
  return null;
}

function processCase(caseNum) {
  const dir = fs.readdirSync(casesDir).find(d => d.startsWith(caseNum + '-'));
  if (!dir) { console.log(`Case ${caseNum}: directory not found`); return; }
  
  const htmlPath = path.join(casesDir, dir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');
  let totalChanges = 0;

  const parts = html.split(/(<section class="case-section" id="section-\d+">[\s\S]*?<\/section>)/);
  const outParts = [];

  for (const part of parts) {
    if (!part.startsWith('<section class="case-section"')) {
      outParts.push(part);
      continue;
    }

    const secMatch = part.match(/id="section-(\d+)"/);
    if (!secMatch) { outParts.push(part); continue; }
    const sNum = secMatch[1];

    let modified = part;

    for (const tag of ['h2', 'h3', 'p', 'li', 'td', 'th']) {
      const elRegex = new RegExp(`<${tag}([^>]*)>([\\s\\S]*?)<\\/${tag}>`, 'g');
      let match;
      while ((match = elRegex.exec(part)) !== null) {
        const fullEl = match[0];
        const attrs = match[1];
        const inner = match[2];

        if (/data-i18n\s*=/.test(attrs)) continue;

        const text = stripHtml(inner);
        if (!text) continue;

        if (tag === 'h2' && /^\d+\.\s/.test(text)) {
          const secN = text.match(/^(\d+)\./);
          if (secN) {
            const titleKey = `sec${secN[1]}-title`;
            const oldOpen = `<h2${attrs}>`;
            const newOpen = `<h2 data-i18n="${titleKey}">`;
            modified = modified.replace(fullEl, fullEl.replace(oldOpen, newOpen));
            totalChanges++;
            console.log(`  c${caseNum} s${sNum} h2 -> ${titleKey}`);
            continue;
          }
        }

        const key = findKey(caseNum, sNum, tag, text);
        if (key) {
          const oldOpen = `<${tag}${attrs}>`;
          const newAttrs = ` data-i18n="${key}"${attrs ? ' ' + attrs.trim() : ''}`.replace(/  +/g, ' ').trim();
          const newOpen = `<${tag} ${newAttrs}>`;
          modified = modified.replace(fullEl, fullEl.replace(oldOpen, newOpen));
          totalChanges++;
          const display = text.length > 50 ? text.substring(0, 50) + '...' : text;
          console.log(`  c${caseNum} s${sNum} ${tag} -> ${key}: "${display}"`);
        }
      }
    }

    outParts.push(modified);
  }

  html = outParts.join('');
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`\n=== Case ${caseNum} (${dir}): ${totalChanges} changes ===`);
}

for (let cn = 15; cn <= 21; cn++) processCase(String(cn));
