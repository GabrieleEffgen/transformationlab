const fs = require('fs');

// ===== RESTORE i18n.js: Remove ALL bad new keys =====
let i18n = fs.readFileSync('assets/i18n.js', 'utf8');

// Find the end of the translations object by finding the ONLY }; that's at top level
// The translations object starts with 'translations: {' and ends with '};'
// We find it by looking for the }; that's followed by whitespace/newline and then document.addEventListener
const closePos = i18n.indexOf('};');
const afterClose = i18n.substring(closePos + 2);
const beforeClose = i18n.substring(0, closePos);

// The bad keys are all entries between the last legitimate entry and the closing };
// We find the last legitimate entry by looking at the CASE 25 section which is the last original section
// Find the last entry that ends this pattern: c25-back-portfolio
const lastLegitMarker = 'c25-back-portfolio';
const lastIdx = beforeClose.lastIndexOf(lastLegitMarker);
if (lastIdx >= 0) {
  // Find the end of this entry (the next comma or end)
  const entryEnd = beforeClose.indexOf(',\n', lastIdx);
  if (entryEnd >= 0) {
    const cleanBeforeClose = beforeClose.substring(0, entryEnd + 2) + '\n';
    const restored = cleanBeforeClose + afterClose;
    fs.writeFileSync('assets/i18n.js', restored, 'utf8');
    console.log('Restored i18n.js to clean state');
  }
}

// ===== STRIP data-i18n from case-sections again =====
const caseDirs = [
  '01-product-availability-transformation',
  '02-operational-turnaround',
  '03-enterprise-performance-management',
  '04-end-to-end-digitalization',
  '05-multisite-variability-reduction',
  '06-high-performance-teams',
  '07-predictive-safety-management'
];

for (const dir of caseDirs) {
  let html = fs.readFileSync(`cases/${dir}/index.html`, 'utf8');
  
  // Fix dashes
  html = html.replace(/\u00e2\u20ac\u201d/g, '\u2014');
  html = html.replace(/\u00e2\u20ac\u201c/g, '\u2013');
  
  // Strip data-i18n from elements inside case-sections
  html = html.replace(
    /(<section class="case-section"[^>]*>[\s\S]*?<\/section>)/g,
    (match) => {
      return match.replace(
        /(<(?:h2|h3|p|li|td|th)(?:\s[^>]*)?)\s+data-i18n="[^"]*"([^>]*>)/g,
        '$1$2'
      );
    }
  );
  
  fs.writeFileSync(`cases/${dir}/index.html`, html, 'utf8');
  console.log(`Cleaned ${dir}`);
}

console.log('Ready for re-processing');
