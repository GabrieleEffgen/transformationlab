const fs = require('fs');

// ===== STEP 1: Fix corrupted dashes in all 7 HTML files =====
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
  const htmlPath = `cases/${dir}/index.html`;
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Fix corrupted em-dash: â (U+00E2) + € (U+20AC) + ” (U+201D) → — (U+2014)
  html = html.replace(/\u00e2\u20ac\u201d/g, '\u2014');
  // Fix corrupted en-dash: â (U+00E2) + € (U+20AC) + " (U+201C) → – (U+2013)
  html = html.replace(/\u00e2\u20ac\u201c/g, '\u2013');
  
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`Fixed dashes in ${dir}`);
}

// Verify
for (const dir of caseDirs) {
  const html = fs.readFileSync(`cases/${dir}/index.html`, 'utf8');
  const idx = html.indexOf('Phase 1');
  if (idx >= 0) {
    const snippet = html.substring(idx, idx + 60);
    const hasCorrupted = snippet.indexOf('\u00e2') >= 0;
    console.log(`${dir}: Phase 1 dash fixed = ${!hasCorrupted}`);
  }
}
