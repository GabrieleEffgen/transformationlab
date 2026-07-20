const fs = require('fs');

// Build lookup from English text to key
const i18n = fs.readFileSync('assets/i18n.js', 'utf8');
const entries = i18n.match(/'[^']+':\s*\{[^}]+\}/g) || [];

const textToKey = {};
const keyToText = {};

for (const entry of entries) {
  const keyMatch = entry.match(/'([^']+)'/);
  const enMatch = entry.match(/en:\s*'([^']*)'/);
  if (keyMatch && enMatch) {
    const key = keyMatch[1];
    const enText = enMatch[1].trim();
    textToKey[enText] = key;
    keyToText[key] = enText;
  }
}

console.log(`Loaded ${Object.keys(textToKey).length} text→key mappings`);

// Process each case
const dirs = fs.readdirSync('cases').filter(d => /^\d/.test(d)).sort();

for (const dir of dirs) {
  const fp = `cases/${dir}/index.html`;
  if (!fs.existsSync(fp)) continue;
  
  let html = fs.readFileSync(fp, 'utf8');
  let modified = false;
  
  // Extract case number from dir name
  const caseNum = dir.match(/^(\d+)/)[1];
  
  // Process each section
  const sectionRegex = /<section class="case-section" id="section-(\d+)">([\s\S]*?)<\/section>/g;
  
  html = html.replace(sectionRegex, (fullMatch, secNum, secContent) => {
    let newContent = secContent;
    
    // Process h2 elements (section titles) - shared keys
    newContent = newContent.replace(/<h2>([\s\S]*?)<\/h2>/, (m, text) => {
      const cleanText = text.replace(/<[^>]+>/g, '').replace(/^\d+\.\s*/, '').trim();
      // Look for matching section title key
      const secKey = textToKey[cleanText];
      if (secKey && secKey.startsWith('sec')) {
        return `<h2 data-i18n="${secKey}">${text}</h2>`;
      }
      // Try without number prefix
      const altKey = textToKey[cleanText.replace(/^\d+\.\s*/, '')];
      if (altKey) {
        return `<h2 data-i18n="${altKey}">${text}</h2>`;
      }
      return m;
    });
    
    // Process p elements
    newContent = newContent.replace(/<p>([\s\S]*?)<\/p>/g, (m, text) => {
      if (m.includes('data-i18n')) return m;
      const cleanText = text.replace(/<[^>]+>/g, '').trim();
      if (!cleanText) return m;
      const key = textToKey[cleanText];
      if (key) {
        modified = true;
        return `<p data-i18n="${key}">${text}</p>`;
      }
      // Try prefix: Case N - ...
      return m;
    });
    
    // Process li elements
    newContent = newContent.replace(/<li>([\s\S]*?)<\/li>/g, (m, text) => {
      if (m.includes('data-i18n')) return m;
      const cleanText = text.replace(/<[^>]+>/g, '').trim();
      if (!cleanText) return m;
      const key = textToKey[cleanText];
      if (key) {
        modified = true;
        return `<li data-i18n="${key}">${text}</li>`;
      }
      return m;
    });
    
    return fullMatch.replace(secContent, newContent);
  });
  
  if (modified) {
    fs.writeFileSync(fp, html);
    console.log(`Fixed: ${dir}`);
  } else {
    console.log(`No changes: ${dir}`);
  }
}

console.log('Done');
