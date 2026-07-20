const fs = require('fs');

// Check all 7 cases for data-i18n inside case-sections
const cases = [
  '01-product-availability-transformation',
  '02-operational-turnaround',
  '03-enterprise-performance-management',
  '04-end-to-end-digitalization',
  '05-multisite-variability-reduction',
  '06-high-performance-teams',
  '07-predictive-safety-management'
];

for (const dir of cases) {
  const html = fs.readFileSync(`cases/${dir}/index.html`, 'utf8');
  const sectionContent = html.match(/<section class="case-section"[^>]*>[\s\S]*?<\/section>/g);
  let total = 0;
  for (const s of sectionContent) {
    const matches = s.match(/data-i18n=/g);
    if (matches) total += matches.length;
  }
  const allMatches = html.match(/data-i18n=/g);
  console.log(`${dir}: case-section data-i18n=${total}, total=${allMatches ? allMatches.length : 0}`);
}
