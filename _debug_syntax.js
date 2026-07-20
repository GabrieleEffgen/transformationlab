const fs = require('fs');
const f = fs.readFileSync('assets/i18n.js', 'utf8');

// Check for unescaped single quotes inside pt/en values
const ptMatches = [...f.matchAll(/pt:\s*'([^']*?)'/g)];
let badCount = 0;
for (const m of ptMatches) {
  const val = m[1];
  // Check if value has text that ends abruptly (suggests quote break)
  if (val.length > 0 && !val.endsWith('.')) {
    // Count actual internal single quotes by checking if the full regex match was correct
  }
}

// Better approach: find the last 50 keys and check their values
const lines = f.split('\n');
const lastLines = lines.slice(-10);
console.log('Last 10 lines:');
lastLines.forEach((l, i) => console.log(`${i}: ${l.substring(0, 120)}`));

// Check for 'Risk:' pattern which might have unescaped quotes
const riskKeys = [...f.matchAll(/'(c\d+[^']+)':\s*\{[^}]+en:\s*'([^']*)'/g)];
for (const m of riskKeys) {
  if (m[2].includes("'")) {
    console.log(`BAD QUOTE in key ${m[1]}: ${m[2].substring(0, 80)}`);
  }
}
