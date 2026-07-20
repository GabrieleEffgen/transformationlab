const fs = require('fs');

// Cases to process
const cases = [
  { num: '24', name: 'Leadership Team', tag: 'Leadership & Change', desc: 'Leadership coaching, autonomy, accountability and decision ownership' },
  { num: '25', name: 'Organizational Change', tag: 'Change Leadership', desc: 'Shared priorities, cross-functional governance and adoption' }
];

for (const c of cases) {
  const dir = fs.readdirSync('cases').find(d => d.startsWith(c.num));
  if (!dir) { console.log(`Case ${c.num}: dir not found`); continue; }
  
  let html = fs.readFileSync(`cases/${dir}/index.html`, 'utf8');
  
  // Find all sections and their content
  const sectionRegex = /<section class="case-section" id="section-(\d+)">([\s\S]*?)<\/section>/g;
  let match;
  let sectionCounts = {};
  
  while ((match = sectionRegex.exec(html)) !== null) {
    const secNum = match[1];
    const secContent = match[2];
    
    // Count elements in this section to generate unique keys
    const pTags = [...secContent.matchAll(/<p>(.*?)<\/p>/g)];
    const liTags = [...secContent.matchAll(/<li>(.*?)<\/li>/g)];
    const h2Tags = [...secContent.matchAll(/<h2>(.*?)<\/h2>/g)];
    
    let pCount = 0, liCount = 0, h3Count = 0;
    
    // Process each element type
    let modifiedSection = secContent;
    
    // Replace h2 with data-i18n
    modifiedSection = modifiedSection.replace(/<h2>(.*?)<\/h2>/, (m, text) => {
      return `<h2 data-i18n="sec${secNum}-title">${text}</h2>`;
    });
    
    // Replace p tags
    modifiedSection = modifiedSection.replace(/<p>(.*?)<\/p>/g, (m, text) => {
      pCount++;
      const key = `c${c.num}-s${secNum}-p${pCount}`;
      return `<p data-i18n="${key}">${text}</p>`;
    });
    
    // Replace li tags
    modifiedSection = modifiedSection.replace(/<li>(.*?)<\/li>/g, (m, text) => {
      liCount++;
      const key = `c${c.num}-s${secNum}-li${liCount}`;
      return `<li data-i18n="${key}">${text}</li>`;
    });
    
    html = html.replace(secContent, modifiedSection);
  }
  
  fs.writeFileSync(`cases/${dir}/index.html`, html);
  console.log(`Case ${c.num}: data-i18n added`);
}

console.log('Done adding data-i18n to all cases');
