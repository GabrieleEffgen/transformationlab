const fs = require('fs');
const path = require('path');

// ===== PT-BR Translations =====
const ptTranslations = {
  "A manufacturing site is operating with 18% productivity losses, unstable output, frequent schedule changes, and low confidence in operational data. Leadership needs a recovery plan that produces results within 90 days without compromising safety or quality.": "Um site de manufatura está operando com 18% de perdas de produtividade, produção instável, mudanças frequentes de programação e baixa confiança nos dados operacionais. A liderança precisa de um plano de recuperação que produza resultados em 90 dias sem comprometer segurança ou qualidade.",
  "Senior leaders receive many reports but lack a coherent view of business performance. Indicators are inconsistent, backward-looking, and disconnected from strategic decisions.": "Líderes seniores recebem muitos relatórios, mas não têm uma visão coerente do desempenho do negócio. Os indicadores são inconsistentes, retrospectivos e desconectados das decisões estratégicas.",
  "A core operational process relies on spreadsheets, emails, and manual handoffs. Data is duplicated, approvals are slow, and customers receive inconsistent information.": "Um processo operacional central depende de planilhas, e-mails e transferências manuais. Os dados são duplicados, as aprovações são lentas e os clientes recebem informações inconsistentes.",
  "Several sites perform the same core process but show significant differences in cost, yield, quality, and lead time. Local practices have evolved without a common standard.": "Vários sites executam o mesmo processo central, mas apresentam diferenças significativas em custo, rendimento, qualidade e lead time. As práticas locais evoluíram sem um padrão comum.",
  "A transformation program is technically sound but progress is slow because teams feel overloaded, priorities change, and leaders manage through control rather than ownership.": "Um programa de transformação é tecnicamente sólido, mas o progresso é lento porque as equipes se sentem sobrecarregadas, as prioridades mudam e os líderes gerenciam através de controle em vez de responsabilização.",
  "Fragmented loss reporting": "Relato fragmentado de perdas",
  "Reactive daily management": "Gestão diária reativa",
  "Unclear ownership of constraints": "Responsabilidade pouco clara por restrições",
  "Excessive schedule changes": "Mudanças excessivas de programação",
  "Limited problem-solving discipline": "Disciplina limitada de solução de problemas",
  "Too many KPIs": "KPIs em excesso",
  "Conflicting definitions": "Definições conflitantes",
  "Manual consolidation": "Consolidação manual",
  "Predominantly lagging indicators": "Indicadores predominantemente de resultado",
  "No clear action thresholds": "Sem limites de ação claros",
  "Disconnected systems": "Sistemas desconectados",
  "Manual re-entry": "Redigitação manual",
  "Low traceability": "Baixa rastreabilidade",
  "Unclear process ownership": "Responsabilidade de processo pouco clara",
  "High approval latency": "Alta latência de aprovação",
  "Different operating methods": "Métodos operacionais diferentes",
  "Inconsistent measurement systems": "Sistemas de medição inconsistentes",
  "Uneven technical capability": "Capacidade técnica desigual",
  "Local optimization": "Otimização local",
  "Weak knowledge transfer": "Transferência de conhecimento fraca",
  "Low psychological safety": "Baixa segurança psicológica",
  "Unclear roles": "Papéis pouco claros",
  "Limited coaching capability": "Capacidade limitada de coaching",
  "Recognition focused only on outcomes": "Reconhecimento focado apenas em resultados",
  "OEE improvement of 8\u201312 points": "Melhoria de 8\u201312 pontos no OEE"
};

function getPT(text) {
  if (ptTranslations[text]) return ptTranslations[text];
  console.log(`  [WARN] No PT translation for: "${text.substring(0, 80)}"`);
  return text;
}

// ===== Read i18n.js =====
const i18nContent = fs.readFileSync('assets/i18n.js', 'utf8');

// Parse all keys
const keyMap = new Map(); // key -> {en, pt}
const textToKeys = new Map(); // stripped en text -> [{key, pt}]

const entryRegex = /'([^']+)':\s*\{\s*en:\s*'((?:[^'\\]|\\.)*)'\s*,\s*pt:\s*'((?:[^'\\]|\\.)*)'\s*\}/g;
let match;
while ((match = entryRegex.exec(i18nContent)) !== null) {
  const key = match[1];
  const en = match[2].replace(/\\'/g, "'");
  const pt = match[3].replace(/\\'/g, "'");
  keyMap.set(key, { en, pt });
  
  const stripped = en.replace(/<[^>]*>/g, '').trim();
  if (!textToKeys.has(stripped)) {
    textToKeys.set(stripped, []);
  }
  textToKeys.get(stripped).push({ key, pt });
}

// Find the insertion point in i18n.js - right before the closing of translations object
// The pattern is: after the last entry, there's }, then newline + spaces + }, then methods
// We insert new entries right before the translations object closing brace
const initIdx = i18nContent.indexOf('\n  init()');
// Find the },\n\n before init - that's the translations close
const transClosePattern = '},\n  },\n\n  init()';
const insertPos = i18nContent.indexOf(transClosePattern);
const beforeInsert = i18nContent.substring(0, insertPos);
const afterInsert = i18nContent.substring(insertPos);

// ===== Process each case =====
const cases = [
  { num: '01', dir: '01-product-availability-transformation' },
  { num: '02', dir: '02-operational-turnaround' },
  { num: '03', dir: '03-enterprise-performance-management' },
  { num: '04', dir: '04-end-to-end-digitalization' },
  { num: '05', dir: '05-multisite-variability-reduction' },
  { num: '06', dir: '06-high-performance-teams' },
  { num: '07', dir: '07-predictive-safety-management' }
];

function extractText(raw) {
  return raw.replace(/<[^>]*>/g, '').trim();
}

// Generate next available key for a given prefix and type
function nextKey(prefix, tagName, usedSet) {
  // Format: 
  // - h3: prefix-{count} (e.g., c01-s6-h3-1)
  // - li, p, th: prefix{count} (e.g., c01-s2-li1)
  const dashTypes = ['h3', 'td'];
  const needsDash = dashTypes.includes(tagName);
  
  let count = 1;
  while (true) {
    const keyName = needsDash ? `${prefix}-${count}` : `${prefix}${count}`;
    if (!keyMap.has(keyName) && !usedSet.has(keyName)) {
      usedSet.add(keyName);
      return keyName;
    }
    count++;
  }
}

let totalRestored = 0;
let totalNew = 0;
const allNewKeys = [];

for (const c of cases) {
  const htmlPath = `cases/${c.dir}/index.html`;
  let html = fs.readFileSync(htmlPath, 'utf8');
  const caseNum = c.num;
  
  let caseRestored = 0;
  let caseNew = 0;

  // Track already-assigned keys per prefix to avoid collisions within this run
const usedKeysInRun = new Set();

// Process each section
  html = html.replace(
    /(<section class="case-section"[^>]*id="section-(\d+)"[^>]*>)([\s\S]*?)(<\/section>)/g,
    (fullMatch, openTag, sectionNumStr, content, closeTag) => {
      const sectionNum = parseInt(sectionNumStr);
      
      const processedContent = content.replace(
        /<(h2|h3|p|li|td|th)(\s[^>]*)?>([\s\S]*?)<\/\1>/g,
        (elemFull, tagName, attrs, innerContent) => {
          const attrStr = attrs || '';
          
          if (attrStr.includes('data-i18n=')) return elemFull;
          
          const textContent = extractText(innerContent);
          if (!textContent) return elemFull;
          
          let keyName = null;
          
          if (tagName === 'h2') {
            keyName = `sec${sectionNum}-title`;
          } else {
            // Always create case-specific keys to avoid cross-case conflicts
            const prefix = `c${caseNum}-s${sectionNum}-${tagName}`;
            keyName = nextKey(prefix, tagName, usedKeysInRun);
            
            let pt = getPT(textContent);
            
            keyMap.set(keyName, { en: textContent, pt });
            allNewKeys.push({ key: keyName, en: textContent, pt });
            caseNew++;
          }
          
          caseRestored++;
          
          const newAttrs = attrStr ? attrStr.trim() : '';
          return `<${tagName} data-i18n="${keyName}"${newAttrs ? ' ' + newAttrs : ''}>${innerContent}</${tagName}>`;
        }
      );
      
      return openTag + processedContent + closeTag;
    }
  );
  
  // Also handle the portfolio back link (p outside section but still needs data-i18n)
  // It already has data-i18n from before, so skip
  
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`Case ${caseNum}: ${caseRestored} data-i18n added, ${caseNew} new keys created`);
  totalRestored += caseRestored;
  totalNew += caseNew;
}

// ===== Update i18n.js with new keys =====
if (allNewKeys.length > 0) {
  let newEntriesStr = '\n';
  for (const entry of allNewKeys) {
    const enEscaped = entry.en.replace(/'/g, "\\'");
    const ptEscaped = entry.pt.replace(/'/g, "\\'");
    newEntriesStr += `    '${entry.key}': { en: '${enEscaped}', pt: '${ptEscaped}' },\n`;
  }
  
  const updatedI18n = beforeInsert + newEntriesStr + afterInsert;
  fs.writeFileSync('assets/i18n.js', updatedI18n, 'utf8');
  console.log(`\nAdded ${allNewKeys.length} new keys to i18n.js`);
}

console.log(`\nFinal Summary: ${totalRestored} data-i18n attributes restored, ${totalNew} new keys created`);
