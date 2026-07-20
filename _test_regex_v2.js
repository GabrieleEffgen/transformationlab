const fs = require('fs');
const html = fs.readFileSync('cases/01-product-availability-transformation/index.html', 'utf8');

// Test the regex
const regex = /<[a-z][^>]*\bdata-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/[a-z]+>/gi;
const matches = [...html.matchAll(regex)];

console.log('Regex matches:', matches.length);

const allKeys = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]))];
console.log('All unique refs:', allKeys.length);

// Check which are missing
const matchedKeys = {};
for (const m of matches) {
  // Clean inner content
  let inner = m[2].trim();
  inner = inner.replace(/<[a-z][^>]*\bdata-i18n="[^"]*"[^>]*>[\s\S]*?<\/[a-z]+>/gi, '').trim();
  
  if (inner.length > 1000) {
    console.log('SKIP (too long):', m[1], 'len:', inner.length);
    continue;
  }
  matchedKeys[m[1]] = true;
}

const missing = allKeys.filter(k => !matchedKeys[k]);
console.log('Missing:', missing.length);
for (const m of missing) {
  console.log('  MISSING:', m);
  
  // Find in source
  const pos = html.indexOf(`data-i18n="${m}"`);
  if (pos > -1) {
    const snippet = html.substring(Math.max(0, pos - 20), pos + 120);
    console.log('  CONTEXT:', snippet.replace(/\n/g, '\\n'));
  }
}
