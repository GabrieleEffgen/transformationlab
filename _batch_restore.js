const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, 'cases');
const i18nPath = path.join(__dirname, 'assets', 'i18n.js');
const cases = ['15', '16', '17', '18', '19', '20', '21'];

const i18nContent = fs.readFileSync(i18nPath, 'utf-8');

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
}

function stripHtmlForMatch(str) {
  return stripHtml(str).replace(/\u2013/g, '--').replace(/\u2014/g, '--').replace(/\u00e2\u0080\u0093/g, '--').replace(/\u2018/g, "'").replace(/\u2019/g, "'").replace(/\u00c2/g, '').replace(/\u00a0/g, ' ').trim();
}

function normalizeForMatch(s) {
  return s.replace(/\s+/g, ' ').replace(/['']/g, "'").replace(/[""]/g, '"').replace(/[\u2013\u2014]/g, '--').trim();
}

function readI18nMap(content) {
  const map = {};
  const regex = /'([^']+)':\s*\{\s*en:\s*'((?:[^'\\]|\\.)*)'\s*,\s*pt:\s*'((?:[^'\\]|\\.)*)'\s*\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    const en = match[2].replace(/\\'/g, "'");
    map[normalizeForMatch(stripHtml(en))] = key;
  }
  return map;
}

const i18nMap = readI18nMap(i18nContent);

function processHtml(html, caseNum, stats) {
  const sectionRegex = /<section class="case-section"[^>]*id="section-(\d+)"[^>]*>([\s\S]*?)<\/section>/gi;
  let caseMatch;
  const sectionTitles = {
    '1': 'sec1-title', '2': 'sec2-title', '3': 'sec3-title',
    '4': 'sec4-title', '5': 'sec5-title', '6': 'sec6-title',
    '7': 'sec7-title', '8': 'sec8-title', '9': 'sec9-title',
    '10': 'sec10-title', '11': 'sec11-title'
  };

  while ((caseMatch = sectionRegex.exec(html)) !== null) {
    const sectionNum = caseMatch[1];
    const sectionContent = caseMatch[0];

    const tags = ['h2', 'h3', 'p', 'li', 'td', 'th'];
    for (const tag of tags) {
      const tagRegex = new RegExp(`<${tag}(\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'gi');
      let tagMatch;
      while ((tagMatch = tagRegex.exec(sectionContent)) !== null) {
        const fullTag = tagMatch[0];
        const attrs = tagMatch[1] || '';
        const innerContent = tagMatch[2];

        if (attrs.includes('data-i18n=')) continue;

        const sectionTag = `<${tag}${attrs}>`;
        const sectionFull = sectionTag + innerContent + `</${tag}>`;

        const text = normalizeForMatch(stripHtml(innerContent));
        if (!text) continue;

        if (tag === 'h2' && sectionTitles[sectionNum]) {
          const expectedTitle = sectionTitles[sectionNum];
          let keyName = null;

          if (i18nMap[text]) {
            keyName = i18nMap[text];
          }

          if (keyName) {
            const newTag = `<${tag} data-i18n="${keyName}"${attrs ? attrs.replace(/^ /, '') : ''}>`;
            const replacement = newTag + innerContent + `</${tag}>`;
            html = html.replace(fullTag, replacement);
            stats.restored++;
          } else {
            keyName = expectedTitle;
            const newTag = `<${tag} data-i18n="${keyName}"${attrs ? attrs.replace(/^ /, '') : ''}>`;
            const replacement = newTag + innerContent + `</${tag}>`;
            html = html.replace(fullTag, replacement);
            stats.restored++;
          }
          continue;
        }

        if (tag === 'h3') {
          const keys = Object.keys(i18nMap);
          let matched = false;
          for (const key of keys) {
            if (key === text && i18nMap[key].startsWith(`c${caseNum}-s${sectionNum}-h3`)) {
              const newTag = `<${tag} data-i18n="${i18nMap[key]}"${attrs.replace(/^ /, '')}>`;
              const replacement = newTag + innerContent + `</${tag}>`;
              html = html.replace(fullTag, replacement);
              stats.restored++;
              matched = true;
              break;
            }
          }
          if (!matched) {
            for (const key of keys) {
              if (key === text) {
                const k = i18nMap[key];
                if (k.startsWith(`c${caseNum}-s${sectionNum}`)) {
                  const newTag = `<${tag} data-i18n="${k}"${attrs.replace(/^ /, '')}>`;
                  const replacement = newTag + innerContent + `</${tag}>`;
                  html = html.replace(fullTag, replacement);
                  stats.restored++;
                  matched = true;
                  break;
                }
              }
            }
          }
          if (matched) continue;

          const count = stats.newKeyCounts[sectionNum]?.[tag] || 0;
          const keyName = `c${caseNum}-s${sectionNum}-${tag}-${count + 1}`;
          const enVal = innerContent;
          const equivalentPT = ptForH3(text, caseNum);
          stats.newKeys.push(`    '${keyName}': { en: '${enVal.replace(/'/g, "\\'")}', pt: '${equivalentPT.replace(/'/g, "\\'")}' },`);
          stats.newKeyCounts[sectionNum] = stats.newKeyCounts[sectionNum] || {};
          stats.newKeyCounts[sectionNum][tag] = (stats.newKeyCounts[sectionNum][tag] || 0) + 1;
          const newTag = `<${tag} data-i18n="${keyName}"${attrs.replace(/^ /, '')}>`;
          const replacement = newTag + innerContent + `</${tag}>`;
          html = html.replace(fullTag, replacement);
          stats.newlyCreated++;
          continue;
        }

        if (tag === 'th' || tag === 'td') {
          const keys = Object.keys(i18nMap);
          let matched = false;
          for (const key of keys) {
            if (key === text && i18nMap[key].startsWith(`c${caseNum}-s${sectionNum}-${tag}`)) {
              const newTag = `<${tag} data-i18n="${i18nMap[key]}"${attrs.replace(/^ /, '')}>`;
              const replacement = newTag + innerContent + `</${tag}>`;
              html = html.replace(fullTag, replacement);
              stats.restored++;
              matched = true;
              break;
            }
          }
          if (!matched) {
            for (const key of keys) {
              if (key === text) {
                const k = i18nMap[key];
                const kSection = k.match(/c\d+-s(\d+)/);
                if (kSection && kSection[1] === sectionNum) {
                  const newTag = `<${tag} data-i18n="${k}"${attrs.replace(/^ /, '')}>`;
                  const replacement = newTag + innerContent + `</${tag}>`;
                  html = html.replace(fullTag, replacement);
                  stats.restored++;
                  matched = true;
                  break;
                }
              }
            }
          }
          if (matched) continue;

          const count = stats.newKeyCounts[sectionNum]?.[tag] || 0;
          const keyName = `c${caseNum}-s${sectionNum}-${tag}-${count + 1}`;
          const enVal = innerContent;
          const equivalentPT = ptForGeneric(enVal, tag, caseNum);
          stats.newKeys.push(`    '${keyName}': { en: '${enVal.replace(/'/g, "\\'")}', pt: '${equivalentPT.replace(/'/g, "\\'")}' },`);
          stats.newKeyCounts[sectionNum] = stats.newKeyCounts[sectionNum] || {};
          stats.newKeyCounts[sectionNum][tag] = (stats.newKeyCounts[sectionNum][tag] || 0) + 1;
          const newTag = `<${tag} data-i18n="${keyName}"${attrs.replace(/^ /, '')}>`;
          const replacement = newTag + innerContent + `</${tag}>`;
          html = html.replace(fullTag, replacement);
          stats.newlyCreated++;
          continue;
        }

        if (i18nMap[text]) {
          const k = i18nMap[text];
          if (k.startsWith(`c${caseNum}-s${sectionNum}`)) {
            const newTag = `<${tag} data-i18n="${k}"${attrs.replace(/^ /, '')}>`;
            const replacement = newTag + innerContent + `</${tag}>`;
            html = html.replace(fullTag, replacement);
            stats.restored++;
          }
        }
      }
    }
  }

  return html;
}

function ptForH3(en, caseNum) {
  if (en.startsWith('Phase 1')) return 'Fase 1 — Diagnosticar e Estabilizar | 0–30 Dias';
  if (en.startsWith('Phase 2') && en.includes('Discovery')) return 'Fase 2 — Descoberta e Definição | 31–90 Dias';
  if (en.startsWith('Phase 2') && en.includes('Build')) return 'Fase 2 — Construir e Lançar | 31–90 Dias';
  if (en.startsWith('Phase 2')) return 'Fase 2 — Redesenhar e Pilotar | 31–90 Dias';
  if (en.startsWith('Phase 3') && en.includes('Iterate')) return 'Fase 3 — Escalar e Iterar | 3–12 Meses';
  if (en.startsWith('Phase 3')) return 'Fase 3 — Escalar e Incorporar | 3–12 Meses';
  if (en === 'Current-State Signals') return 'Sinais do Estado Atual';
  if (en === 'Core Roles') return 'Funções Principais';
  return en;
}

function ptForGeneric(en, tag, caseNum) {
  const ptMap = {
    'Forum': 'Fórum',
    'Cadence': 'Cadência',
    'Purpose': 'Propósito',
    'Risk': 'Risco',
    'Mitigation': 'Mitigação',
    'Transformation fatigue': 'Fadiga de transformação',
    'Weak leadership alignment': 'Alinhamento fraco da liderança',
    'Poor data quality': 'Qualidade de dados deficiente',
    'Benefits not sustained': 'Benefícios não sustentados',
    'Employee resistance': 'Resistência de funcionários',
    'Operational disruption': 'Interrupção operacional',
    'Limit priorities and visibly stop low-value work': 'Limitar prioridades e interromper visivelmente trabalhos de baixo valor',
    'Use explicit decision rights and sponsor routines': 'Usar direitos de decisão explícitos e rotinas de patrocínio',
    'Establish baseline validation and metric governance': 'Estabelecer validação de linha de base e governança de métricas',
    'Assign process owners and audit post-implementation results': 'Atribuir donos de processo e auditar resultados pós-implantação',
    'Involve users in design and provide role-based support': 'Envolver usuários no design e fornecer suporte baseado em funções',
    'Pilot changes and use readiness gates before scaling': 'Pilotar mudanças e usar gates de prontidão antes de escalar',
    'Executive Steering Committee': 'Comitê Diretivo Executivo',
    'Monthly': 'Mensal',
    'Strategic decisions, value and risk': 'Decisões estratégicas, valor e risco',
    'Transformation Review': 'Revisão da Transformação',
    'Biweekly': 'Quinzenal',
    'Milestones, dependencies and escalation': 'Marcos, dependências e escalação',
    'Workstream Review': 'Revisão de Workstream',
    'Weekly': 'Semanal',
    'Delivery, actions and barriers': 'Entrega, ações e barreiras',
    'Daily Management': 'Gestão Diária',
    'Daily': 'Diário',
    'Performance control and rapid response': 'Controle de performance e resposta rápida',
  };
  return ptMap[en] || en;
}

const dirs = fs.readdirSync(casesDir);

for (const caseNum of cases) {
  const caseDir = dirs.find(d => d.startsWith(caseNum + '-'));
  if (!caseDir) {
    console.log(`Case ${caseNum}: directory not found`);
    continue;
  }
  const htmlPath = path.join(casesDir, caseDir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');

  const stats = { restored: 0, newlyCreated: 0, newKeys: [], newKeyCounts: {} };

  html = processHtml(html, caseNum, stats);

  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`Case ${caseNum} (${caseDir}): ${stats.restored} restored, ${stats.newlyCreated} newly created`);
  if (stats.newKeys.length > 0) {
    console.log(`  New keys needed: ${stats.newKeys.length}`);
  }
}
