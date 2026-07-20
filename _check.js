const fs = require('fs');
const path = require('path');

for (let cn = 15; cn <= 21; cn++) {
  const dir = fs.readdirSync(path.join(__dirname, 'cases')).find(d => d.startsWith(cn + '-'));
  if (!dir) continue;
  const html = fs.readFileSync(path.join(__dirname, 'cases', dir, 'index.html'), 'utf-8');
  const sections = html.match(/<section class="case-section"[^>]*id="section-\d+"[^>]*>[\s\S]*?<\/section>/g);
  if (!sections) { console.log(`Case ${cn}: no sections found`); continue; }
  let total = 0, missing = 0, secCount = sections.length;
  for (const sec of sections) {
    const sNum = sec.match(/id="section-(\d+)"/)[1];
    const els = sec.match(/<(h2|h3|p|li|td|th)(\s[^>]*)?>[\s\S]*?<\/\1>/g) || [];
    for (const el of els) {
      total++;
      if (!/data-i18n\s*=/.test(el)) {
        const tag = el.match(/<(\w+)/)[1];
        const text = el.replace(/<[^>]*>/g, '').trim().substring(0, 60);
        console.log(`  c${cn} s${sNum} ${tag} MISSING: "${text}"`);
        missing++;
      }
    }
  }
  console.log(`=== Case ${cn} (${dir}): ${missing}/${total} elements missing data-i18n across ${secCount} sections ===`);
}
