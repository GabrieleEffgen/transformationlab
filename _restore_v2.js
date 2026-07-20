const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, 'cases');
const i18nPath = path.join(__dirname, 'assets', 'i18n.js');

const i18nContent = fs.readFileSync(i18nPath, 'utf-8');

function stripHtml(s) {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function normalize(s) {
  return stripHtml(s)
    .replace(/\u2013/g, '-').replace(/\u2014/g, '-')
    .replace(/\u2018/g, "'").replace(/\u2019/g, "'")
    .replace(/\u201c/g, '"').replace(/\u201d/g, '"')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/&#8212;/g, '--').replace(/&#183;/g, '·')
    .replace(/&#8211;/g, '-')
    .replace(/\ue2/g, '').replace(/\u20/g, '-').replace(/\u94/g, '-')
    .replace(/\u93/g, '-')
    .replace(/\s+/g, ' ').trim();
}

function extractKeys(content) {
  const map = {};
  const sectionRegex = /\/\/ CASE (\d+) CONTENT/i;
  const kvRegex = /'((?:c\d+|sec\d+)[^']*)':\s*\{\s*en:\s*'((?:[^'\\]|\\.)*)'/g;
  
  let m;
  while ((m = kvRegex.exec(content)) !== null) {
    const key = m[1];
    const enVal = m[2].replace(/\\'/g, "'");
    map[normalize(enVal)] = key;
  }
  return map;
}

const keyMap = extractKeys(i18nContent);

function caseNumFromDir(d) {
  const m = d.match(/^(\d+)-/);
  return m ? m[1] : null;
}

function fixHtml(html, caseNum, log) {
  const changes = [];

  const sectionRegex = /(<section class="case-section"[^>]*id="section-(\d+)"[^>]*>)([\s\S]*?)(<\/section>)/gi;
  let htmlOut = html;

  let secMatch;
  while ((secMatch = sectionRegex.exec(html)) !== null) {
    const sectionNum = secMatch[2];
    const sectionContent = secMatch[3];

    const fixableRegex = /<(h2|h3|p|li|td|th)(\s[^>]*)?>([\s\S]*?)<\/\1>/gi;
    let elMatch;
    while ((elMatch = fixableRegex.exec(sectionContent)) !== null) {
      const tag = elMatch[1];
      const attrs = elMatch[2] || '';
      const inner = elMatch[3];
      const fullEl = elMatch[0];

      if (/data-i18n\s*=/i.test(attrs)) continue;

      const text = normalize(inner);
      if (!text) continue;

      if (tag === 'h2' && /^\d+\.\s/.test(text)) {
        const secNum = text.match(/^(\d+)\./);
        if (secNum) {
          const titleKey = `sec${secNum[1]}-title`;
          const newAttrs = ` data-i18n="${titleKey}"`;
          const oldStart = `<${tag}${attrs}>`;
          const newStart = `<${tag}${newAttrs}>`;
          const oldFull = oldStart + inner + `</${tag}>`;
          htmlOut = htmlOut.replace(oldFull, newStart + inner + `</${tag}>`);
          log.push(`  S${sectionNum} h2 -> ${titleKey}: "${text.substring(0, 40)}..."`);
          changes.push(titleKey);
        }
        continue;
      }

      if (tag === 'h3' || tag === 'th' || tag === 'td' || tag === 'p' || tag === 'li') {
        let foundKey = null;

        if (tag === 'p' && /^The assessment would combine/i.test(text)) {
          foundKey = `c${caseNum}-s${sectionNum}-p1`;
        } else if (tag === 'p' && /^KPIs should include/i.test(text)) {
          foundKey = `c${caseNum}-s${sectionNum}-p1`;
        } else {
          const prefix = `c${caseNum}-s${sectionNum}-${tag}`;
          for (const [nText, k] of Object.entries(keyMap)) {
            if (k.startsWith(prefix) && nText === text) {
              foundKey = k;
              break;
            }
          }
        }

        if (foundKey) {
          const newAttrs = ` data-i18n="${foundKey}"`;
          const oldStart = `<${tag}${attrs}>`;
          const newStart = `<${tag}${newAttrs}>`;
          const oldFull = oldStart + inner + `</${tag}>`;
          htmlOut = htmlOut.replace(oldFull, newStart + inner + `</${tag}>`);
          log.push(`  S${sectionNum} ${tag} -> ${foundKey}: "${text.substring(0, 40)}..."`);
          changes.push(foundKey);
        } else {
          const keys = Object.keys(keyMap).filter(k => k === text);
          if (keys.length > 0) {
            const foundK = keyMap[keys[0]];
            if (foundK.startsWith(`c${caseNum}-s${sectionNum}`)) {
              const newAttrs = ` data-i18n="${foundK}"`;
              const oldStart = `<${tag}${attrs}>`;
              const newStart = `<${tag}${newAttrs}>`;
              const oldFull = oldStart + inner + `</${tag}>`;
              htmlOut = htmlOut.replace(oldFull, newStart + inner + `</${tag}>`);
              log.push(`  S${sectionNum} ${tag} -> ${foundK}: "${text.substring(0, 40)}..."`);
              changes.push(foundK);
            }
          }
        }
      }
    }
  }

  return { html: htmlOut, changes };
}

const dirs = fs.readdirSync(casesDir);

for (const dir of dirs) {
  const cn = caseNumFromDir(dir);
  if (!cn || cn < '15' || cn > '21') continue;
  
  const htmlPath = path.join(casesDir, dir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');
  const log = [];

  const result = fixHtml(html, cn, log);
  html = result.html;

  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`\n=== Case ${cn} (${dir}) ===`);
  console.log(`  Changes: ${result.changes.length}`);
  log.forEach(l => console.log(l));
}
