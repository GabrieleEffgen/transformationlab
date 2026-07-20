const fs = require('fs');

const dirs = {
  8:'08-continuous-improvement-system', 9:'09-ai-enabled-operations',
  10:'10-inventory-optimization', 11:'11-lean-office-transformation',
  12:'12-enterprise-change-management', 13:'13-capex-governance',
  14:'14-transformation-management-office'
};

// The HTML has mojibake: UTF-8 bytes of em-dash (E2 80 94) and en-dash (E2 80 93)
// stored as Windows-1252 characters: â (U+00E2), € (U+20AC), ” (U+201D) 
// and â (U+00E2), € (U+20AC), “ (U+201C)
// Fix: replace these 3-char sequences with proper Unicode

let totalFixed = 0;

for (let n = 8; n <= 14; n++) {
  const fp = 'cases/' + dirs[n] + '/index.html';
  let html = fs.readFileSync(fp, 'utf8');

  // Fix mojibake em-dash (â€” → —)
  const before = html.length;
  html = html.replace(/\u00E2\u20AC\u201D/g, '\u2014');
  // Fix mojibake en-dash (â€“ → –)  
  html = html.replace(/\u00E2\u20AC\u2013/g, '\u2013');

  const fixed = (before - html.length) / 2; // each replacement removes 2 chars
  totalFixed += fixed;

  fs.writeFileSync(fp, html);
  console.log(`Case ${n.toString().padStart(2,'0')}: fixed ${fixed} dash sequences`);
}

console.log(`Total: ${totalFixed} dash sequences fixed`);
