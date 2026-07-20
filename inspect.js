const fs = require('fs');
const content = fs.readFileSync('assets/i18n.js', 'utf8');

const methods = ['toggle()', 'init()', 'createToggle()'];
for (const m of methods) {
  const idx = content.indexOf(m);
  console.log(m, 'at position', idx);
  if (idx >= 0) {
    const before = content.substring(Math.max(0, idx - 100), idx);
    console.log('  Before:', JSON.stringify(before.trim().slice(-60)));
  }
}

const transOpen = content.indexOf('translations: {');
console.log('\ntranslations: { at', transOpen);

// Find the actual end of translations by looking for the last }, before toggle
const toggleIdx = content.indexOf('toggle()');
const beforeToggle = content.substring(0, toggleIdx);
// Find the last }, in beforeToggle - that's likely the translations closing
const lastClosing = beforeToggle.lastIndexOf('\n}');
console.log('\nLast "\\n}" at', lastClosing);
if (lastClosing >= 0) {
  console.log('  Context:', content.substring(lastClosing, Math.min(lastClosing + 200, toggleIdx)));
}

// Search for c25-back-portfolio
const c25Idx = content.indexOf('c25-back-portfolio');
console.log('\nc25-back-portfolio at', c25Idx);
if (c25Idx >= 0) {
  console.log('  After:', content.substring(c25Idx, c25Idx + 200));
}
