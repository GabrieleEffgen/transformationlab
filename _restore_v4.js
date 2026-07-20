const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, 'cases');
const i18nContent = fs.readFileSync(path.join(__dirname, 'assets', 'i18n.js'), 'utf-8');

function stripHtml(s) {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// Extract all key->en mappings
const entries = [];
const re = /'([^']+)':\s*\{\s*en:\s*'((?:[^'\\]|\\.)*)'/g;
let m;
while ((m = re.exec(i18nContent)) !== null) {
  entries.push({ key: m[1], en: m[2].replace(/\\'/g, "'") });
}

function processCase(caseNum) {
  const dir = fs.readdirSync(casesDir).find(d => d.startsWith(caseNum + '-'));
  if (!dir) { console.log(`Case ${caseNum}: directory not found`); return 0; }
  
  const htmlPath = path.join(casesDir, dir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');
  let count = 0;

  // 1. Fix section titles (h2)
  for (let s = 1; s <= 11; s++) {
    const patterns = [
      { section: s, text: `${s}. Executive Summary` },
      { section: s, text: `${s}. Business Challenge` },
      { section: s, text: `${s}. Diagnostic Approach` },
      { section: s, text: `${s}. Key Hypotheses` },
      { section: s, text: `${s}. Recommended Transformation` },
      { section: s, text: `${s}. Transformation Roadmap` },
      { section: s, text: `${s}. Governance Model` },
      { section: s, text: `${s}. KPI Framework` },
      { section: s, text: `${s}. Risks and Mitigations` },
      { section: s, text: `${s}. Business Impacts and Results` },
      { section: s, text: `${s}. Executive Takeaway` },
    ];
    
    for (const p of patterns) {
      const h2Regex = new RegExp(`<h2(?![^>]*data-i18n)[^>]*>${escapeRegex(p.text)}</h2>`);
      if (h2Regex.test(html)) {
        const titleKey = `sec${p.section}-title`;
        html = html.replace(h2Regex, `<h2 data-i18n="${titleKey}">${p.text}</h2>`);
        count++;
      }
    }
  }

  // 2. For each section, fix h3, p, li, td, th
  // We iterate sections by their id
  for (let s = 1; s <= 11; s++) {
    // Find the section
    const secStart = html.indexOf(`id="section-${s}"`);
    if (secStart < 0) continue;
    
    // Find the section content boundaries
    const secTagStart = html.lastIndexOf('<section', secStart);
    if (secTagStart < 0) continue;
    
    // Get section content
    let secTagEnd = html.indexOf('>', secTagStart);
    let secContentStart = secTagEnd + 1;
    
    // Find matching </section>
    const nextSecTag = html.indexOf('<section class="case-section"', secContentStart);
    const secCloseTag = html.indexOf('</section>', secContentStart);
    const secEnd = nextSecTag > 0 && nextSecTag < secCloseTag + 50 ? nextSecTag : secCloseTag + '</section>'.length;
    
    const sectionHtml = html.substring(secContentStart, nextSecTag > 0 ? nextSecTag : secCloseTag);
    
    // Process each element type
    for (const tag of ['h3', 'p', 'li', 'td', 'th']) {
      const elRegex = new RegExp(`<${tag}(?![^>]*data-i18n)(\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'g');
      let match;
      while ((match = elRegex.exec(sectionHtml)) !== null) {
        const fullEl = match[0];
        const attrs = match[1] || '';
        const inner = match[2];
        const text = stripHtml(inner);
        if (!text) continue;

        // Look for matching key
        const prefix = `c${caseNum}-s${s}-${tag}`;
        let foundKey = null;

        for (const e of entries) {
          if (!e.key.startsWith(prefix)) continue;
          const eText = stripHtml(e.en);
          if (eText === text) { foundKey = e.key; break; }
          if (eText.toLowerCase() === text.toLowerCase() && !foundKey) foundKey = e.key;
        }

        if (!foundKey) {
          // Try case-insensitive match
          for (const e of entries) {
            if (!e.key.startsWith(prefix)) continue;
            const eText = stripHtml(e.en);
            if (eText.toLowerCase() === text.toLowerCase()) { foundKey = e.key; break; }
          }
        }

        if (foundKey) {
          const oldStart = `<${tag}${attrs}>`;
          const newStart = `<${tag} data-i18n="${foundKey}"${attrs ? ' ' + attrs.trim() : ''}>`.replace(/  +/g, ' ');
          const replacement = newStart + inner + `</${tag}>`;
          html = html.replace(fullEl, replacement);
          count++;
          const display = text.length > 50 ? text.substring(0, 50) + '...' : text;
          console.log(`  c${caseNum} s${s} ${tag} -> ${foundKey}: "${display}"`);
        }
      }
    }
  }

  fs.writeFileSync(htmlPath, html, 'utf-8');
  return count;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

for (let cn = 15; cn <= 21; cn++) {
  console.log(`\n=== Case ${cn} ===`);
  const c = processCase(String(cn));
  console.log(`  Total: ${c} changes`);
}
