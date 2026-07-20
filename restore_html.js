const fs = require('fs');
const dirs = ['01-product-availability-transformation','02-operational-turnaround','03-enterprise-performance-management','04-end-to-end-digitalization','05-multisite-variability-reduction','06-high-performance-teams','07-predictive-safety-management'];
for (const dir of dirs) {
  let html = fs.readFileSync('cases/' + dir + '/index.html', 'utf8');
  // Remove data-i18n from elements inside case-sections only
  html = html.replace(/(<section class="case-section"[^>]*>[\s\S]*?<\/section>)/g, (m) => {
    return m.replace(/\s*data-i18n="[^"]*"/g, '');
  });
  fs.writeFileSync('cases/' + dir + '/index.html', html, 'utf8');
  console.log('Stripped ' + dir);
}
