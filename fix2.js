const fs = require('fs');

// STEP 1: Fix corrupted dash characters in all 7 HTML files
const cases = [
  '01-product-availability-transformation',
  '02-operational-turnaround',
  '03-enterprise-performance-management',
  '04-end-to-end-digitalization',
  '05-multisite-variability-reduction',
  '06-high-performance-teams',
  '07-predictive-safety-management'
];

for (const dir of cases) {
  const htmlPath = `cases/${dir}/index.html`;
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Fix corrupted em-dash: â (U+00E2) + ¬ (U+00AC) ... 
  // Actually the corruption is: UTF-8 bytes of em-dash (E2 80 94) when read as Windows-1252 give â‚¬"
  // The file was then saved as UTF-8, so we have literal â (U+00E2), ¬ (U+20AC)... 
  // Actually let's just replace the specific corrupted sequences
  
  // The corrupted em-dash in the file is: U+00E2 U+20AC U+201D (â€”)
  // The corrupted en-dash in the file is: U+00E2 U+20AC U+201C (â€“)
  html = html.replace(/\u00e2\u20ac\u201d/g, '\u2014');  // em-dash
  html = html.replace(/\u00e2\u20ac\u201c/g, '\u2013');  // en-dash
  
  // Also fix any remaining corrupted characters
  html = html.replace(/\u00e2\u20ac\u2122/g, "'");  // right single quote
  html = html.replace(/\u00e2\u20ac\u2018/g, "'");  // left single quote
  
  // Also fix the HTML entities
  html = html.replace(/â€”/g, '—');
  html = html.replace(/â€“/g, '–');
  
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`Fixed dashes in ${htmlPath}`);
}

// STEP 2: Restore i18n.js by removing bad new keys
let i18n = fs.readFileSync('assets/i18n.js', 'utf8');
const closing = i18n.indexOf('};');
const beforeClose = i18n.substring(0, closing);
const afterClose = i18n.substring(closing);

// Find the last legitimate entry line before the closing
const lines = beforeClose.split('\n');
let lastGoodLine = lines.length - 1;

// Walk backwards from the end to find the last real entry (starting from just before the closing brace line)
for (let i = lines.length - 1; i >= 0; i--) {
  const trimmed = lines[i].trim();
  // Skip empty lines and the closing line
  if (trimmed === '' || trimmed === '};') continue;
  
  // Check if this looks like a legitimate entry (ends with comma)
  // Legitimate entries have proper format. Bad ones have keys like c02-s1-p3
  const keyMatch = trimmed.match(/'c(\d+)-/);
  if (keyMatch) {
    const caseNum = parseInt(keyMatch[1]);
    // Cases 01 and 07 existed originally. Cases 08+ existed originally too.
    // Only cases 02-06 are the potentially new ones
    if (caseNum >= 2 && caseNum <= 6) {
      // This is a suspicious key - check if it's a real original entry
      // Original entries for these cases exist in shared patterns
      // But our new entries have specific patterns like c02-s1-p3 (whole new p1)
      const afterKey = trimmed.substring(trimmed.indexOf(keyMatch[0]) + keyMatch[0].length);
      // Check if after the key it has format like -s or -:
      // New entries: c02-s1-p3 (whole new paragraph key)
      // Original entries reference other case keys like c01-s7-li1
      continue; // skip for now, we'll handle differently
    }
  }
  
  // Check if this line contains one of our badly-named keys
  if (trimmed.includes("'c0") && trimmed.match(/'c0[2-6]-s[0-9]+-(h3|p)[0-9]/)) {
    continue; // skip bad keys
  }
  
  // Also check for c01 and c07 bad keys (c01-s6-h31 format instead of c01-s6-h3-1)
  if (trimmed.match(/'c0[17]-s[0-9]+-h3[0-9]/)) {
    continue; // skip bad keys  
  }
  
  // Also check for the corrupted dash text in entries
  if (trimmed.includes('\u00e2\u20ac')) {
    continue; // skip entries with corrupted chars
  }
  
  // Also check for entries whose en: value matches our generated PT (which had no translation)
  if (trimmed.includes("pt: 'Phase") && !trimmed.includes("Fase")) {
    continue; // skip entries with English PT value
  }
  
  // This looks like a good line - everything after it is bad
  lastGoodLine = i;
  break;
}

// Find the line index of the last good line in the beforeClose section
// Actually, the lines array is from beforeClose. The last good line index tells us 
// everything after this line in the array (up to the };) needs to be removed.
const restored = lines.slice(0, lastGoodLine + 1).join('\n') + '\n';
const fullRestored = restored + afterClose;

fs.writeFileSync('assets/i18n.js', fullRestored, 'utf8');
console.log(`Restored i18n.js: ${lines.length - lastGoodLine - 1} bad lines removed`);
