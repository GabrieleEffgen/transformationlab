const fs = require('fs');

// For each case, check the current state of data-i18n attributes
const cases = [
  { num: '01', dir: '01-product-availability-transformation' },
  { num: '02', dir: '02-operational-turnaround' },
  { num: '03', dir: '03-enterprise-performance-management' },
  { num: '04', dir: '04-end-to-end-digitalization' },
  { num: '05', dir: '05-multisite-variability-reduction' },
  { num: '06', dir: '06-high-performance-teams' },
  { num: '07', dir: '07-predictive-safety-management' }
];

// First, read all HTML files and strip ALL data-i18n from inside case-sections
for (const c of cases) {
  const htmlPath = `cases/${c.dir}/index.html`;
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Remove ALL data-i18n attributes from elements inside case-sections
  // We use a regex that matches the <section ...case-section...> ... </section> region
  // and removes data-i18n from all inner tags: h2, h3, p, li, td, th
  html = html.replace(
    /(<section[^>]*class="case-section[^"]*"[^>]*>[\s\S]*?<\/section>)/g,
    (match) => {
      return match.replace(
        /(<(?:h2|h3|p|li|td|th)(?:\s[^>]*)?)\s+data-i18n="[^"]*"([^>]*>)/g,
        '$1$2'
      );
    }
  );
  
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`Cleaned data-i18n from case ${c.num}`);
}
