const fs = require('fs');
let content = fs.readFileSync('assets/i18n.js', 'utf8');

let lines = content.split('\n');

const badPatterns = [
  /^\s+'c0[2-6]-s\d+-[a-z]+-\d+'/,  // c02-s1-p-1, c03-s2-li-1 etc
  /^\s+'c0[2-6]-s\d+-[a-z]+\d+'/,   // c02-s1-p3, c06-s6-h31 etc (from first run)
  /^\s+'c01-s6-h3-[4-9]'/,           // duplicate phase headers  
  /^\s+'c07-s6-h3-[4-9]'/,           // duplicate phase headers
  /^\s+'c0[2-6]-s\d+-li-\d+'/,       // c02-s2-li-1 etc with extra dash
  /^\s+'c0[2-6]-s\d+-p-\d+'/,        // c02-s1-p-1 etc with extra dash
  /^\s+'c0[2-6]-s\d+-h3\d+'/,        // c02-s6-h31 etc (no dash)
  /^\s+'c0[2-6]-s\d+-h3-\d+'/,       // c02-s6-h3-1 etc (with dash, but for wrong case)
  /^\s+'c01-s6-h3-\d+'/              // all c01-s6-h3 entries (keep only first 3)
];

// Actually let's be smarter - remove all entries for cases 02-06
// and keep all original entries for cases 01, 07, 08+

const filtered = lines.filter(line => {
  const trimmed = line.trim();
  // Keep empty lines, comments, non-entry lines
  if (!trimmed.startsWith("'c")) return true;
  
  // Check if this is a case 02-06 entry
  const match = trimmed.match(/^'c(\d+)-/);
  if (!match) {
    const keyMatch = trimmed.match(/^'([^']+)'/);
    if (keyMatch) {
      const key = keyMatch[1].match(/^c(\d+)/);
      if (key) match = [null, key[1]];
    }
  }
  if (match) {
    const caseNum = parseInt(match[1]);
    // Remove ALL case 02-06 entries (they were all created by our scripts)
    if (caseNum >= 2 && caseNum <= 6) return false;
    // Also remove duplicate phase headers for case 01
    if (caseNum === 1) {
      const key = trimmed.match(/^'(c[^']+)'/)?.[1];
      if (key && key.startsWith('c01-s6-h3-')) {
        const num = key.match(/c01-s6-h3-(\d+)/)?.[1];
        if (num && parseInt(num) >= 4) return false;
      }
    }
    // Also remove duplicate phase headers for case 07
    if (caseNum === 7) {
      const key = trimmed.match(/^'(c[^']+)'/)?.[1];
      if (key && key.startsWith('c07-s6-h3-')) {
        const num = key.match(/c07-s6-h3-(\d+)/)?.[1];
        if (num && parseInt(num) >= 4) return false;
      }
    }
  }
  return true;
});

content = filtered.join('\n');
content = content.replace(/\n{3,}/g, '\n\n');
fs.writeFileSync('assets/i18n.js', content, 'utf8');
const removed = lines.length - filtered.length;
console.log('Removed', removed, 'bad lines');
