const fs = require('fs');

const dirs = [
  '01-product-availability-transformation',
  '02-operational-turnaround',
  '03-enterprise-performance-management',
  '04-end-to-end-digitalization',
  '05-multisite-variability-reduction',
  '06-high-performance-teams',
  '07-predictive-safety-management'
];

// Corrupted patterns:
// Em dash U+2014 in UTF-8 is 0xE2 0x80 0x94
// When read as Latin-1/Win-1252: U+00E2 (â) + U+20AC (€) + U+201D (right double quote ")
// En dash U+2013 in UTF-8 is 0xE2 0x80 0x93
// When read as Latin-1/Win-1252: U+00E2 (â) + U+20AC (€) + U+201C (left double quote ")

for (const dir of dirs) {
  const path = `cases/${dir}/index.html`;
  let html = fs.readFileSync(path, 'utf8');
  
  const beforeEmCount = (html.match(/\u00e2\u20ac\u201d/g) || []).length;
  const beforeEnCount = (html.match(/\u00e2\u20ac\u201c/g) || []).length;
  
  // Replace corrupted em dashes with proper Unicode em dash
  html = html.replace(/\u00e2\u20ac\u201d/g, '\u2014');
  // Replace corrupted en dashes with proper Unicode en dash
  html = html.replace(/\u00e2\u20ac\u201c/g, '\u2013');
  
  const afterEmCount = (html.match(/\u00e2\u20ac\u201d/g) || []).length;
  const afterEnCount = (html.match(/\u00e2\u20ac\u201c/g) || []).length;
  
  fs.writeFileSync(path, html, 'utf8');
  console.log(`${dir}: em=${beforeEmCount}->${afterEmCount}, en=${beforeEnCount}->${afterEnCount}`);
}
