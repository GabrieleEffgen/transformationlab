const fs = require('fs');

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, m => {
    const map = { '&#8212;': '\u2014', '&#183;': '\u00B7', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&ndash;': '\u2013', '&mdash;': '\u2014' };
    return map[m] || m;
  }).trim();
}

// Load i18n.js and build lookup: normalized text -> array of keys
const i18nSrc = fs.readFileSync('assets/i18n.js', 'utf8');
const entryRegex = /'([^']+)':\s*\{[^}]*en:\s*'([^']*)'/g;
const textToKeys = {};  // clean text -> [key, ...]

let m;
while ((m = entryRegex.exec(i18nSrc)) !== null) {
  const key = m[1];
  const enText = m[2];
  const cleanText = stripTags(enText);
  if (cleanText && !cleanText.includes('{') && !cleanText.includes('}')) {
    if (!textToKeys[cleanText]) textToKeys[cleanText] = [];
    textToKeys[cleanText].push(key);
  }
}

console.log(`Loaded ${Object.keys(textToKeys).length} unique texts`);

// Shared section title mapping (must use data-i18n="secN-title")
const secNum = {
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

let restoredCount = 0;
let createdCount = 0;

function findBestKey(text, casePrefix) {
  const keys = textToKeys[text];
  if (!keys || keys.length === 0) return null;
  // Prefer key with matching case prefix
  const prefixed = keys.filter(k => k.startsWith(casePrefix));
  if (prefixed.length > 0) return prefixed[0];
  // Prefer key with matching section pattern
  const secMatch = casePrefix.match(/c(\d+)-s(\d+)/);
  if (secMatch) {
    const [, cn, sn] = secMatch;
    const sameSec = keys.filter(k => k.match(new RegExp(`-s${sn}-`)));
    if (sameSec.length > 0) return sameSec[0];
  }
  return keys[0];
}

function processHtml(caseNum, html) {
  const casePrefix = `c${caseNum.padStart(2, '0')}-`;

  // Process each case-section
  return html.replace(/<section class="case-section" id="section-(\d+)">([\s\S]*?)<\/section>/g, (fullMatch, secNumStr, secContent) => {
    let newContent = secContent;
    const secPrefix = `${casePrefix}s${secNumStr}-`;

    // Process h2 elements (skip if already has data-i18n)
    newContent = newContent.replace(/<h2\b((?:(?!data-i18n)[^>])*)>([\s\S]*?)<\/h2>/g, (t, attrs, inner) => {
      const text = stripTags(inner);
      // Check section title first
      if (secNum[text] || secNum[text.replace(/\s*$/, '')]) {
        const key = secNum[text] || secNum[text.replace(/\s*$/, '')];
        restoredCount++;
        return `<h2 data-i18n="${key}"${attrs}>${inner}</h2>`;
      }
      // Try chaining with existing already-has-key
      return t;
    });

    // Process h3 elements
    newContent = newContent.replace(/<h3\b((?:(?!data-i18n)[^>])*)>([\s\S]*?)<\/h3>/g, (t, attrs, inner) => {
      const text = stripTags(inner);
      const key = findBestKey(text, secPrefix);
      if (key) {
        restoredCount++;
        return `<h3 data-i18n="${key}"${attrs}>${inner}</h3>`;
      }
      return t;
    });

    // Process p elements
    newContent = newContent.replace(/<p\b((?:(?!data-i18n)[^>])*)>([\s\S]*?)<\/p>/g, (t, attrs, inner) => {
      const text = stripTags(inner);
      if (!text) return t;
      if (/<(div|table|ul|ol|h[1-6])/i.test(inner)) return t;
      const key = findBestKey(text, secPrefix);
      if (key) {
        restoredCount++;
        return `<p data-i18n="${key}"${attrs}>${inner}</p>`;
      }
      return t;
    });

    // Process li elements (not containing nested lists)
    newContent = newContent.replace(/<li\b((?:(?!data-i18n)[^>])*)>([\s\S]*?)<\/li>/g, (t, attrs, inner) => {
      if (/<(ul|ol)>/i.test(inner)) return t;
      const text = stripTags(inner);
      if (!text) return t;
      const key = findBestKey(text, secPrefix);
      if (key) {
        restoredCount++;
        return `<li data-i18n="${key}"${attrs}>${inner}</li>`;
      }
      return t;
    });

    // Process th elements - MUST NOT match <thead>
    // Use a negative lookbehind or more precise pattern
    newContent = newContent.replace(/(<th\b(?:(?!data-i18n)[^>]*)>)([\s\S]*?)<\/th>/g, (t, openTag, inner) => {
      const text = stripTags(inner);
      if (!text) return t;
      const key = findBestKey(text, secPrefix);
      if (key) {
        restoredCount++;
        return `<th data-i18n="${key}" ${openTag.slice(4).trimStart()}>${inner}</th>`;
      }
      return t;
    });

    // Process td elements
    newContent = newContent.replace(/(<td\b(?:(?!data-i18n)[^>]*)>)([\s\S]*?)<\/td>/g, (t, openTag, inner) => {
      const text = stripTags(inner);
      if (!text) return t;
      if (/<(div|table|ul|ol|h[1-6])/i.test(inner)) return t;
      const key = findBestKey(text, secPrefix);
      if (key) {
        restoredCount++;
        return `<td data-i18n="${key}" ${openTag.slice(3).trimStart()}>${inner}</td>`;
      }
      return t;
    });

    return fullMatch.replace(secContent, newContent);
  });
}

// Process cases 08-14
const caseDirs = [
  { num: '08', dir: '08-continuous-improvement-system' },
  { num: '09', dir: '09-ai-enabled-operations' },
  { num: '10', dir: '10-inventory-optimization' },
  { num: '11', dir: '11-lean-office-transformation' },
  { num: '12', dir: '12-enterprise-change-management' },
  { num: '13', dir: '13-capex-governance' },
  { num: '14', dir: '14-transformation-management-office' },
];

// FIRST: restore from original files (before first run corrupted them)
// Need to re-read originals
for (const { num, dir } of caseDirs) {
  const fp = `cases/${dir}/index.html`;
  if (!fs.existsSync(fp)) {
    console.log(`Missing: ${fp}`);
    continue;
  }
  
  let html = fs.readFileSync(fp, 'utf8');
  const beforeRestore = restoredCount;
  html = processHtml(num, html);
  
  if (restoredCount > beforeRestore) {
    fs.writeFileSync(fp, html);
    console.log(`Case ${num} (${dir}): restored ${restoredCount - beforeRestore} attributes`);
  } else {
    console.log(`Case ${num} (${dir}): no changes`);
  }
}

console.log(`\nTotal: ${restoredCount} data-i18n attributes restored, ${createdCount} new keys created`);
