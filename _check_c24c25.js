const fs = require('fs');
const f = fs.readFileSync('assets/i18n.js','utf8');
['case24-tag','case24-title','case24-lead','case24-desc','case25-tag','case25-title','case25-lead','case25-desc'].forEach(k => {
  const re = new RegExp("'"+k+"'\\s*:");
  console.log(k+': '+(re.test(f)?'OK':'MISSING'));
});
// Also check section content keys
const c24keys = [...f.matchAll(/'c24-[^']+'/g)].map(m=>m[0]);
const c25keys = [...f.matchAll(/'c25-[^']+'/g)].map(m=>m[0]);
console.log('c24-* keys:', c24keys.length);
console.log('c25-* keys:', c25keys.length);
