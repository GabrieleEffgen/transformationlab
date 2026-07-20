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

function findKeyForCase(caseNum, sectionNum, tag, text) {
  const prefix = `c${caseNum}-s${sectionNum}-${tag}`;
  
  // First, try exact match with correct case prefix
  for (const e of entries) {
    if (e.key.startsWith(prefix) && e.key !== prefix) {
      const eText = stripHtml(e.en);
      if (eText === text) return e.key;
    }
  }
  
  // Try case-insensitive with correct case prefix
  let found = null;
  for (const e of entries) {
    if (e.key.startsWith(prefix) && e.key !== prefix) {
      const eText = stripHtml(e.en);
      if (eText.toLowerCase() === text.toLowerCase()) { found = e.key; }
    }
  }
  if (found) return found;
  
  return null;
}

function processCase(caseNum) {
  const dir = fs.readdirSync(casesDir).find(d => d.startsWith(caseNum + '-'));
  if (!dir) { console.log(`Case ${caseNum}: directory not found`); return; }
  
  const htmlPath = path.join(casesDir, dir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');
  const original = html;
  let totalChanges = 0;

  // Split by section - more robust approach: find each section boundary
  const sectionRegex = /<section class="case-section"[^>]*id="section-(\d+)"[^>]*>[\s\S]*?<\/section>/g;
  let sectionMatch;
  const sections = [];
  
  while ((sectionMatch = sectionRegex.exec(original)) !== null) {
    sections.push({
      full: sectionMatch[0],
      num: sectionMatch[1],
      start: sectionMatch.index,
      end: sectionMatch.index + sectionMatch[0].length
    });
  }

  // Process from end to start to maintain positions
  sections.reverse();
  
  for (const sec of sections) {
    let modified = sec.full;
    let changed = true;
    let iterations = 0;
    
    while (changed && iterations < 30) {
      changed = false;
      iterations++;
      
        const sNum = sec.num;
        
        for (const tag of ['h2', 'h3', 'p', 'li', 'td', 'th']) {
        const elRegex = new RegExp(`<${tag}([^>]*)>([\\s\\S]*?)<\\/${tag}>`, 'g');
        let match;
        while ((match = elRegex.exec(modified)) !== null) {
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
              const replacement = fullEl.replace(oldOpen, newOpen);
              modified = modified.replace(fullEl, replacement);
              totalChanges++;
              changed = true;
              console.log(`  c${caseNum} s${sNum} h2 -> ${titleKey}`);
            }
            continue;
          }

          const key = findKeyForCase(caseNum, sNum, tag, text);
          if (key) {
            const oldOpen = `<${tag}${attrs}>`;
            const attrStr = attrs ? ' ' + attrs.trim() : '';
            const newOpen = `<${tag} data-i18n="${key}"${attrStr}>`.replace(/>\s+$/, '>').replace(/\s{2,}/g, ' ');
            const replacement = fullEl.replace(oldOpen, newOpen);
            if (modified.includes(fullEl)) {
              modified = modified.replace(fullEl, replacement);
              totalChanges++;
              changed = true;
              const display = text.length > 50 ? text.substring(0, 50) + '...' : text;
              console.log(`  c${caseNum} s${sNum} ${tag} -> ${key}: "${display}"`);
            }
          }
        }
      }
    }
    
    // Apply section changes to full HTML
    html = html.substring(0, sec.start) + modified + html.substring(sec.end);
  }

  if (html !== original) {
    fs.writeFileSync(htmlPath, html, 'utf-8');
  }
  console.log(`\n=== Case ${caseNum} (${dir}): ${totalChanges} changes ===`);
}

for (let cn = 15; cn <= 21; cn++) processCase(String(cn));
