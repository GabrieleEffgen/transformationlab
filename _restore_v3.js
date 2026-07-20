const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, 'cases');
const i18nPath = path.join(__dirname, 'assets', 'i18n.js');

const i18nContent = fs.readFileSync(i18nPath, 'utf-8');

function stripHtml(s) {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function softTrim(s) {
  return s.replace(/\s+/g, ' ').trim();
}

function extractEntries(content) {
  const entries = [];
  const regex = /'([^']+)':\s*\{\s*en:\s*'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    entries.push({ key: m[1], en: m[2].replace(/\\'/g, "'") });
  }
  return entries;
}

const allEntries = extractEntries(i18nContent);

function findEntry(caseNum, sectionNum, tag, rawText, rawWithTags) {
  const enText = stripHtml(rawWithTags).replace(/\s+/g, ' ').trim();
  const prefix = `c${caseNum}-s${sectionNum}-${tag}`;
  
  let best = null;
  let bestScore = 0;

  for (const e of allEntries) {
    if (!e.key.startsWith(prefix)) continue;
    if (e.key.split('-').length !== prefix.split('-').length + (tag === 'h3' || tag === 'td' || tag === 'th' ? 1 : 0)) continue;
    
    const eText = stripHtml(e.en).replace(/\s+/g, ' ').trim();
    if (eText === enText) {
      best = e.key;
      bestScore = 2;
      break;
    }
    
    const n1 = eText.toLowerCase();
    const n2 = enText.toLowerCase();
    if (n1 === n2) {
      best = e.key;
      bestScore = 1;
    }
  }

  return best;
}

function findAnyEntry(text) {
  const n = stripHtml(text).replace(/\s+/g, ' ').trim();
  const nl = n.toLowerCase();
  for (const e of allEntries) {
    const et = stripHtml(e.en).replace(/\s+/g, ' ').trim();
    if (et === n || et.toLowerCase() === nl) return e.key;
  }
  return null;
}

function fixFile(caseNum) {
  const dir = fs.readdirSync(casesDir).find(d => d.startsWith(caseNum + '-'));
  if (!dir) { console.log(`Case ${caseNum}: no dir`); return; }
  
  const htmlPath = path.join(casesDir, dir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');
  const original = html;
  let changes = 0;

  // Section titles
  for (let s = 1; s <= 11; s++) {
    const titleKey = `sec${s}-title`;
    const sectionRegex = new RegExp(`(<section[^>]*id="section-${s}"[^>]*>)`);
    const match = html.match(sectionRegex);
    if (!match) continue;

    const sectionStart = match.index;
    const nextSection = html.indexOf('<section class="case-section"', sectionStart + match[0].length);
    const sectionEnd = nextSection > 0 ? nextSection : html.indexOf('</div>', sectionStart);
    const sectionHtml = html.substring(sectionStart, sectionEnd > 0 ? sectionEnd : html.length);

    const h2Regex = /<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/;
    const h2Match = sectionHtml.match(h2Regex);
    if (h2Match && !h2Match[0].includes('data-i18n=')) {
      const h2Start = sectionStart + h2Match.index;
      const h2End = h2Start + h2Match[0].length;
      const h2Content = h2Match[1];
      const tagPart = h2Match[0].match(/^<h2(\s[^>]*)?>/);
      const oldAttrs = tagPart ? tagPart[1] || '' : '';
      const before = html.substring(0, h2Start);
      const after = html.substring(h2End);
      html = before + `<h2 data-i18n="${titleKey}">${h2Content}</h2>` + after;
      changes++;
    }
  }

  // Non-title elements: work through each element specifically
  const caseTag = `c${caseNum}-`;

  // Process using a different strategy: find all elements in each section
  const sectionOpenRegex = /<section class="case-section"[^>]*id="section-(\d+)"[^>]*>/g;
  let secMatch;
  while ((secMatch = sectionOpenRegex.exec(html)) !== null) {
    const sNum = secMatch[1];
    const secStart = secMatch.index;
    
    const nextSec = html.indexOf('<section class="case-section"', secStart + 1);
    const secEnd = nextSec > 0 ? nextSec : html.indexOf('</div>', secStart);
    const secHtml = html.substring(secStart, nextSec > 0 ? nextSec : html.length);

    const tagRegex = /<(h3|p|li|td|th)(\s[^>]*)?>([\s\S]*?)<\/\1>/g;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(secHtml)) !== null) {
      const tag = tagMatch[1];
      const attrs = tagMatch[2] || '';
      const inner = tagMatch[3];
      const fullMatch = tagMatch[0];

      if (/data-i18n\s*=/.test(attrs)) continue;

      const text = stripHtml(inner).replace(/\s+/g, ' ').trim();
      if (!text) continue;

      const allText = stripHtml(fullMatch).replace(/\s+/g, ' ').trim().substring(0, 80);

      // Try to find a matching entry
      const prefix = `c${caseNum}-s${sNum}-${tag}`;
      let foundKey = null;

      for (const e of allEntries) {
        if (!e.key.startsWith(prefix)) continue;
        const eText = stripHtml(e.en).replace(/\s+/g, ' ').trim();
        if (eText === text) {
          foundKey = e.key;
          break;
        }
        if (eText.toLowerCase() === text.toLowerCase()) {
          foundKey = e.key;
        }
      }

      if (foundKey) {
        const absStart = secStart + tagMatch.index;
        const absEnd = absStart + fullMatch.length;
        const before = html.substring(0, absStart);
        const after = html.substring(absEnd);
        const oldStart = `<${tag}${attrs}>`;
        const newStart = `<${tag} data-i18n="${foundKey}"${attrs ? ' ' + attrs.trim() : ''}>`.replace(/  +/g, ' ');
        html = before + oldStart + inner + `</${tag}>`.replace(/^/, '').replace(fullMatch, oldStart + inner + `</${tag}>`);
        // Actually simpler - just do direct string replacement
        // Since we know the exact text, let's use replace with the full match
        html = before + `<${tag} data-i18n="${foundKey}"${attrs ? ' ' + attrs.trim() : ''}>${inner}</${tag}>` + after;
        changes++;
        
        const displayText = text.length > 50 ? text.substring(0, 50) + '...' : text;
        console.log(`  c${caseNum} s${sNum} ${tag} -> ${foundKey}: "${displayText}"`);
      } else {
        // Check if it matches a non-case-specific entry
        for (const e of allEntries) {
          const eText = stripHtml(e.en).replace(/\s+/g, ' ').trim();
          if (eText === text && !e.key.startsWith('sec') && !e.key.startsWith('case') && !e.key.startsWith('fw') && !e.key.startsWith('c0')) {
            const absStart = secStart + tagMatch.index;
            const absEnd = absStart + fullMatch.length;
            const before = html.substring(0, absStart);
            const after = html.substring(absEnd);
            html = before + `<${tag} data-i18n="${e.key}"${attrs ? ' ' + attrs.trim() : ''}>${inner}</${tag}>` + after;
            changes++;
            console.log(`  c${caseNum} s${sNum} ${tag} -> ${e.key}: "${text.substring(0, 50)}..."`);
            break;
          }
        }
      }
    }
  }

  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`\n=== Case ${caseNum} (${dir}): ${changes} changes ===`);
}

for (let cn = 15; cn <= 21; cn++) {
  fixFile(String(cn));
}
