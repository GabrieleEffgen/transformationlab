const fs = require('fs');
let content = fs.readFileSync('assets/i18n.js', 'utf8');

let lines = content.split('\n');

const filtered = lines.filter(line => {
  const trimmed = line.trim();
  
  // Keep empty lines, comments, non-entry lines
  if (!trimmed.startsWith("'c")) return true;
  
  // Extract case number from key
  const keyMatch = trimmed.match(/^'c(\d+)/);
  if (!keyMatch) return true;
  
  const caseNum = parseInt(keyMatch[1]);
  
  // Remove ALL case 02-06 entries (they were all created by our scripts)
  if (caseNum >= 2 && caseNum <= 6) return false;
  
  // Remove duplicate phase headers for case 01 (only keep h3-1, h3-2, h3-3)
  if (caseNum === 1) {
    const fullKey = trimmed.match(/^'(c[^']+)'/)?.[1];
    if (fullKey && /^c01-s6-h3-(\d+)$/.test(fullKey)) {
      const num = parseInt(fullKey.match(/^c01-s6-h3-(\d+)$/)[1]);
      if (num >= 4) return false;
    }
  }
  
  // Remove duplicate phase headers for case 07 (only keep h3-1, h3-2, h3-3)
  if (caseNum === 7) {
    const fullKey = trimmed.match(/^'(c[^']+)'/)?.[1];
    if (fullKey && /^c07-s6-h3-(\d+)$/.test(fullKey)) {
      const num = parseInt(fullKey.match(/^c07-s6-h3-(\d+)$/)[1]);
      if (num >= 4) return false;
    }
  }
  
  return true;
});

content = filtered.join('\n');
content = content.replace(/\n{3,}/g, '\n\n');
fs.writeFileSync('assets/i18n.js', content, 'utf8');
const removed = lines.length - filtered.length;
console.log('Removed', removed, 'bad lines');
console.log('Lines remaining:', filtered.length);
