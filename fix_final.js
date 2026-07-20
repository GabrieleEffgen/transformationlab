const fs = require('fs');
const path = require('path');

// ===== PT-BR Translations =====
const ptTranslations = {
  "A leading manufacturer identified significant revenue leakage caused by chronic product unavailability. Stockouts reached 12% of SKUs, leading to lost sales, customer dissatisfaction, and emergency logistics costs.": "Uma fabricante líder identificou um vazamento significativo de receita causado pela indisponibilidade crônica de produtos. A ruptura de estoque atingiu 12% dos SKUs, resultando em perda de vendas, insatisfação de clientes e custos logísticos emergenciais.",
  "The recommended approach combines demand-sensing improvements, inventory policy redesign, cross-functional governance, and integrated planning. The objective is to reduce stockout rates from 12% to below 2% within six months while releasing working capital.": "A abordagem recomendada combina melhorias na percepção de demanda, redesenho da política de estoques, governança multifuncional e planejamento integrado. O objetivo é reduzir as taxas de ruptura de 12% para abaixo de 2% em seis meses, liberando capital de giro.",
  "A manufacturing site is operating with 18% productivity losses, unstable output, frequent schedule changes, and low confidence in operational data. Leadership needs a recovery plan that produces results within 90 days without compromising safety or quality.": "Um site de manufatura está operando com 18% de perdas de produtividade, produção instável, mudanças frequentes de programação e baixa confiança nos dados operacionais. A liderança precisa de um plano de recuperação que produza resultados em 90 dias sem comprometer segurança ou qualidade.",
  "Senior leaders receive many reports but lack a coherent view of business performance. Indicators are inconsistent, backward-looking, and disconnected from strategic decisions.": "Líderes seniores recebem muitos relatórios, mas não têm uma visão coerente do desempenho do negócio. Os indicadores são inconsistentes, retrospectivos e desconectados das decisões estratégicas.",
  "A core operational process relies on spreadsheets, emails, and manual handoffs. Data is duplicated, approvals are slow, and customers receive inconsistent information.": "Um processo operacional central depende de planilhas, e-mails e transferências manuais. Os dados são duplicados, as aprovações são lentas e os clientes recebem informações inconsistentes.",
  "Several sites perform the same core process but show significant differences in cost, yield, quality, and lead time. Local practices have evolved without a common standard.": "Vários sites executam o mesmo processo central, mas apresentam diferenças significativas em custo, rendimento, qualidade e lead time. As práticas locais evoluíram sem um padrão comum.",
  "A transformation program is technically sound but progress is slow because teams feel overloaded, priorities change, and leaders manage through control rather than ownership.": "Um programa de transformação é tecnicamente sólido, mas o progresso é lento porque as equipes se sentem sobrecarregadas, as prioridades mudam e os líderes gerenciam através de controle em vez de responsabilização.",
  "The organization reacts strongly after incidents but has limited visibility of weak signals, exposure patterns, and deteriorating controls.": "A organização reage fortemente após incidentes, mas tem visibilidade limitada de sinais fracos, padrões de exposição e controles em deterioração.",
  "The recommended approach combines strategic prioritization, process redesign, governance, data discipline, leadership alignment, and change management. The objective is not only to improve short-term performance, but to create a management system capable of sustaining results.": "A abordagem recomendada combina priorização estratégica, redesenho de processos, governança, disciplina de dados, alinhamento de liderança e gestão de mudanças. O objetivo não é apenas melhorar o desempenho de curto prazo, mas criar um sistema de gestão capaz de sustentar resultados.",
  "The organization must address the immediate availability gap while protecting service levels, customer commitments, operational efficiency, and financial discipline.": "A organização precisa tratar a lacuna imediata de disponibilidade enquanto protege os níveis de serviço, compromissos com clientes, eficiência operacional e disciplina financeira.",
  "The organization must address the immediate performance gap while protecting safety, quality, customer commitments, employee engagement, and financial discipline.": "A organização precisa tratar a lacuna imediata de desempenho enquanto protege a segurança, a qualidade, os compromissos com clientes, o engajamento dos funcionários e a disciplina financeira.",
  "The assessment would combine:": "A avaliação combinaria:",
  "End-to-end supply chain mapping": "Mapeamento da cadeia de suprimentos ponta a ponta",
  "Demand forecast accuracy review": "Revisão da precisão da previsão de demanda",
  "Inventory segmentation and policy audit": "Segmentação de estoque e auditoria de políticas",
  "Root-cause analysis of stockout events": "Análise de causa raiz de eventos de ruptura",
  "Capability and governance assessment": "Avaliação de capacidade e governança",
  "Financial value-leakage analysis": "Análise financeira de vazamento de valor",
  "Risk and change-readiness evaluation": "Avaliação de risco e prontidão para mudança",
  "Current-State Signals": "Sinais do Estado Atual",
  "Stockout rate of 12% across core product families": "Taxa de ruptura de 12% nas famílias de produtos principais",
  "Excess inventory in slow-moving categories": "Excesso de estoque em categorias de baixo giro",
  "Fragmented demand forecasting across channels": "Previsão de demanda fragmentada entre canais",
  "Low confidence in inventory data accuracy": "Baixa confiança na precisão dos dados de estoque",
  "Unclear ownership of availability targets": "Responsabilidade pouco clara pelas metas de disponibilidade",
  "A significant share of stockouts is caused by planning-system weaknesses rather than supply disruptions.": "Uma parcela significativa das rupturas é causada por fragilidades no sistema de planejamento, não por interrupções no suprimento.",
  "The organization lacks one reliable view of demand, inventory, and availability.": "A organização não possui uma visão única e confiável de demanda, estoque e disponibilidade.",
  "Local inventory optimization will not sustain without governance, capability building, and integrated planning routines.": "A otimização local de estoques não se sustentará sem governança, desenvolvimento de capacidade e rotinas integradas de planejamento.",
  "The transformation should be sequenced to stabilize availability, optimize inventory, and then scale.": "A transformação deve ser sequenciada para estabilizar a disponibilidade, otimizar o estoque e depois escalar.",
  "Segment inventory using ABC-XYZ classification": "Segmentar estoque usando classificação ABC-XYZ",
  "Redesign forecasting and demand review process": "Redesenhar o processo de previsão e revisão de demanda",
  "Implement inventory policy optimization": "Implementar otimização da política de estoques",
  "Launch daily availability monitoring": "Lançar monitoramento diário de disponibilidade",
  "Build planner capability in structured problem solving": "Desenvolver capacidade de planejadores em solução estruturada de problemas",
  "Confirm baseline, scope, and value at stake": "Confirmar linha de base, escopo e valor em jogo",
  "Establish governance and decision rights": "Estabelecer governança e direitos de decisão",
  "Contain critical availability risks": "Conter riscos críticos de disponibilidade",
  "Select priority product families": "Selecionar famílias de produtos prioritárias",
  "Align leaders around a single transformation narrative": "Alinhar líderes em torno de uma única narrativa de transformação",
  "Redesign planning processes and inventory policies": "Redesenhar processos de planejamento e políticas de estoque",
  "Pilot future-state solutions on priority SKUs": "Pilotar soluções de estado futuro em SKUs prioritários",
  "Build dashboards and availability-monitoring standards": "Construir dashboards e padrões de monitoramento de disponibilidade",
  "Train planners and demand reviewers": "Treinar planejadores e revisores de demanda",
  "Validate operational and financial impact": "Validar impacto operacional e financeiro",
  "Scale proven practices across all categories": "Escalar práticas comprovadas para todas as categorias",
  "Integrate standards into daily management": "Integrar padrões à gestão diária",
  "Link inventory performance to value realization": "Vincular performance de estoque à realização de valor",
  "Develop internal planning capability": "Desenvolver capacidade interna de planejamento",
  "Audit sustainability and adjust the operating model": "Auditar sustentabilidade e ajustar o modelo operacional",
  "Forum": "Fórum",
  "Cadence": "Cadência",
  "Purpose": "Propósito",
  "Executive Steering Committee": "Comitê Diretivo Executivo",
  "Monthly": "Mensal",
  "Strategic decisions, value and risk": "Decisões estratégicas, valor e risco",
  "Transformation Review": "Revisão da Transformação",
  "Biweekly": "Quinzenal",
  "Milestones, dependencies and escalation": "Marcos, dependências e escalação",
  "Workstream Review": "Revisão de Workstream",
  "Weekly": "Semanal",
  "Delivery, actions and barriers": "Entrega, ações e barreiras",
  "Daily Management": "Gestão Diária",
  "Daily": "Diário",
  "Availability monitoring and rapid response": "Monitoramento de disponibilidade e resposta rápida",
  "Core Roles": "Funções Principais",
  "Risk": "Risco",
  "Mitigation": "Mitigação",
  "Transformation fatigue": "Fadiga de transformação",
  "Limit priorities and visibly stop low-value work": "Limitar prioridades e interromper visivelmente trabalhos de baixo valor",
  "Weak leadership alignment": "Alinhamento fraco da liderança",
  "Use explicit decision rights and sponsor routines": "Usar direitos de decisão explícitos e rotinas de patrocínio",
  "Poor data quality": "Qualidade de dados deficiente",
  "Establish baseline validation and metric governance": "Estabelecer validação de linha de base e governança de métricas",
  "Benefits not sustained": "Benefícios não sustentados",
  "Assign process owners and audit post-implementation results": "Atribuir donos de processo e auditar resultados pós-implantação",
  "Employee resistance": "Resistência de funcionários",
  "Involve users in design and provide role-based support": "Envolver usuários no design e fornecer suporte baseado em funções",
  "Operational disruption": "Interrupção operacional",
  "Pilot changes and use readiness gates before scaling": "Pilotar mudanças e usar gates de prontidão antes de escalar",
  "The transformation is expected to improve availability, inventory efficiency, customer service levels, planning capability, and financial performance. Final benefits would be validated jointly by operations and finance.": "Espera-se que a transformação melhore a disponibilidade, a eficiência de estoque, os níveis de serviço ao cliente, a capacidade de planejamento e o desempenho financeiro. Os benefícios finais seriam validados em conjunto pelas operações e finanças.",
  "Sustainable availability is not managed through firefighting. It is a disciplined system connecting demand sensing, inventory policy, planning capability, governance, and value realization.": "A disponibilidade sustentável não é gerenciada através de apagar incêndios. É um sistema disciplinado que conecta percepção de demanda, política de estoques, capacidade de planejamento, governança e realização de valor.",
  "The transformation is expected to improve operational control, decision speed, accountability, workforce capability, customer outcomes, and financial performance. Final benefits would be validated jointly by operations and finance.": "Espera-se que a transformação melhore o controle operacional, a velocidade de decisão, a responsabilização, a capacidade da força de trabalho, os resultados para o cliente e o desempenho financeiro. Os benefícios finais seriam validados em conjunto pelas operações e finanças.",
  "Sustainable transformation is not a collection of isolated projects. It is a disciplined system that connects strategy, processes, people, governance, data, and value realization.": "Transformação sustentável não é uma coleção de projetos isolados. É um sistema disciplinado que conecta estratégia, processos, pessoas, governança, dados e realização de valor.",
  "Performance control and rapid response": "Controle de performance e resposta rápida",
  "Fragmented loss reporting": "Relato fragmentado de perdas",
  "Reactive daily management": "Gestão diária reativa",
  "Unclear ownership of constraints": "Responsabilidade pouco clara por restrições",
  "Excessive schedule changes": "Mudanças excessivas de programação",
  "Limited problem-solving discipline": "Disciplina limitada de solução de problemas",
  "Create one loss taxonomy and daily performance baseline": "Criar uma taxonomia única de perdas e linha de base de desempenho diário",
  "Stabilize the production plan and critical resources": "Estabilizar o plano de produção e recursos críticos",
  "Launch tiered daily management": "Lançar gestão diária em camadas",
  "Prioritize the three largest loss families": "Priorizar as três maiores famílias de perdas",
  "Build supervisor capability in structured problem solving": "Desenvolver capacidade de supervisores em solução estruturada de problemas",
  "Loss rate below 8% in 90 days": "Taxa de perda abaixo de 8% em 90 dias",
  "Schedule adherence above 90%": "Adesão à programação acima de 90%",
  "OEE improvement of 8\u201312 points": "Melhoria de 8\u201312 pontos no OEE",
  "30% reduction in unplanned downtime": "Redução de 30% no tempo de parada não planejado",
  "Weekly verified financial impact": "Impacto financeiro verificado semanalmente",
  "Too many KPIs": "KPIs em excesso",
  "Conflicting definitions": "Definições conflitantes",
  "Manual consolidation": "Consolidação manual",
  "Predominantly lagging indicators": "Indicadores predominantemente de resultado",
  "No clear action thresholds": "Sem limites de ação claros",
  "Build a strategy-to-KPI architecture": "Construir uma arquitetura de estratégia para KPI",
  "Define KPI owners and standard formulas": "Definir responsáveis por KPIs e fórmulas padrão",
  "Balance leading and lagging indicators": "Equilibrar indicadores antecedentes e de resultado",
  "Create executive, tactical, and operational views": "Criar visões executiva, tática e operacional",
  "Establish exception-based performance reviews": "Estabelecer revisões de desempenho baseadas em exceção",
  "100% KPI definition governance": "100% de governança de definição de KPIs",
  "Reporting effort reduced by 50%": "Esforço de reporte reduzido em 50%",
  "Decision cycle shortened": "Ciclo de decisão encurtado",
  "Action closure above 90%": "Fechamento de ações acima de 90%",
  "Benefits linked to strategic objectives": "Benefícios vinculados a objetivos estratégicos",
  "Disconnected systems": "Sistemas desconectados",
  "Manual re-entry": "Redigitação manual",
  "Low traceability": "Baixa rastreabilidade",
  "Unclear process ownership": "Responsabilidade de processo pouco clara",
  "High approval latency": "Alta latência de aprovação",
  "Map the current-state journey using BPMN": "Mapear a jornada atual usando BPMN",
  "Remove non-value-added approvals": "Remover aprovações sem valor agregado",
  "Design a single digital workflow": "Projetar um fluxo de trabalho digital único",
  "Define master data and integration requirements": "Definir dados mestres e requisitos de integração",
  "Pilot, measure, and scale": "Pilotar, medir e escalar",
  "Cycle time reduced by 40%": "Tempo de ciclo reduzido em 40%",
  "Manual entries reduced by 70%": "Entradas manuais reduzidas em 70%",
  "Process compliance above 95%": "Conformidade de processo acima de 95%",
  "Fewer customer status inquiries": "Menos consultas de status de clientes",
  "Higher data reliability": "Maior confiabilidade de dados",
  "Different operating methods": "Métodos operacionais diferentes",
  "Inconsistent measurement systems": "Sistemas de medição inconsistentes",
  "Uneven technical capability": "Capacidade técnica desigual",
  "Local optimization": "Otimização local",
  "Weak knowledge transfer": "Transferência de conhecimento fraca",
  "Validate measurement systems": "Validar sistemas de medição",
  "Benchmark performance and practices": "Benchmark de desempenho e práticas",
  "Define critical-to-quality parameters": "Definir parâmetros críticos para a qualidade",
  "Create a best-known-method standard": "Criar um padrão de melhor método conhecido",
  "Establish site maturity reviews and coaching": "Estabelecer revisões de maturidade e coaching",
  "Variation reduced by 30%": "Variação reduzida em 30%",
  "Yield improvement across bottom-quartile sites": "Melhoria de rendimento em sites do quartil inferior",
  "Shared standard adoption above 90%": "Adoção de padrão compartilhado acima de 90%",
  "Fewer quality deviations": "Menos desvios de qualidade",
  "Sustained gap closure": "Fechamento sustentado de lacunas",
  "Low psychological safety": "Baixa segurança psicológica",
  "Unclear roles": "Papéis pouco claros",
  "Limited coaching capability": "Capacidade limitada de coaching",
  "Recognition focused only on outcomes": "Reconhecimento focado apenas em resultados",
  "Clarify purpose, roles, and decision boundaries": "Esclarecer propósito, papéis e limites de decisão",
  "Develop leaders as coaches": "Desenvolver líderes como coaches",
  "Create team-level transformation charters": "Criar cartas de transformação no nível do time",
  "Use visible workload and priority management": "Usar gestão visível de carga de trabalho e prioridades",
  "Recognize learning, collaboration, and results": "Reconhecer aprendizado, colaboração e resultados",
  "Engagement improvement": "Melhoria de engajamento",
  "Lower regrettable turnover": "Menor rotatividade indesejada",
  "Faster issue resolution": "Resolução mais rápida de problemas",
  "More employee-led improvements": "Mais melhorias lideradas por funcionários",
  "Higher milestone reliability": "Maior confiabilidade de marcos",
  "Incident-centric metrics": "Métricas centradas em incidentes",
  "Inspections not risk-based": "Inspeções não baseadas em risco",
  "Corrective actions age without escalation": "Ações corretivas envelhecem sem escalação",
  "Limited frontline participation": "Participação limitada da linha de frente",
  "Critical controls not routinely verified": "Controles críticos não verificados rotineiramente",
  "Create a dynamic risk register": "Criar um registro dinâmico de riscos",
  "Define critical controls and verification routines": "Definir controles críticos e rotinas de verificação",
  "Track leading indicators and weak signals": "Monitorar indicadores antecedentes e sinais fracos",
  "Use risk-based field observations": "Usar observações de campo baseadas em risco",
  "Create escalation rules for overdue high-risk actions": "Criar regras de escalação para ações de alto risco em atraso",
  "Critical control verification above 95%": "Verificação de controles críticos acima de 95%",
  "High-risk action closure above 90%": "Fechamento de ações de alto risco acima de 90%",
  "Near-miss reporting quality improvement": "Melhoria da qualidade do relato de quase-acidentes",
  "Reduced repeat deviations": "Redução de desvios repetidos",
  "Lower serious incident potential": "Menor potencial de incidentes graves",
  "KPIs should include clear definitions, owners, data sources, targets, thresholds, and required actions when performance moves outside tolerance.": "Os KPIs devem incluir definições claras, responsáveis, fontes de dados, metas, limites e ações necessárias quando a performance sair da tolerância.",
  "A significant share of the performance gap is caused by management-system weaknesses rather than isolated technical issues.": "Uma parcela significativa da lacuna de desempenho é causada por fragilidades no sistema de gestão, não por questões técnicas isoladas.",
  "The organization lacks one reliable view of priorities, performance, and ownership.": "A organização não possui uma visão única e confiável de prioridades, desempenho e responsabilidades.",
  "Local improvements will not sustain without governance, capability building, and leadership routines.": "Melhorias locais não se sustentarão sem governança, desenvolvimento de capacidade e rotinas de liderança.",
  "The transformation should be sequenced to stabilize, improve, and then scale.": "A transformação deve ser sequenciada para estabilizar, melhorar e depois escalar.",
  "Executive and frontline stakeholder interviews": "Entrevistas com stakeholders executivos e operacionais",
  "Process and value-stream mapping": "Mapeamento de processos e fluxo de valor",
  "KPI and data-quality review": "Revisão de KPIs e qualidade de dados",
  "Root-cause analysis": "Análise de causa raiz",
  "Contain critical operational and business risks": "Conter riscos operacionais e de negócio críticos",
  "Select priority workstreams": "Selecionar workstreams prioritárias",
  "Redesign priority processes and management routines": "Redesenhar processos prioritários e rotinas de gestão",
  "Pilot future-state solutions": "Pilotar soluções de estado futuro",
  "Build dashboards and action-management standards": "Construir dashboards e padrões de gestão de ações",
  "Train leaders and process owners": "Treinar líderes e donos de processo",
  "Scale proven practices": "Escalar práticas comprovadas",
  "Link performance reviews to value realization": "Vincular revisões de performance à realização de valor",
  "Develop internal transformation capability": "Desenvolver capacidade interna de transformação",
  "Back to the main portfolio": "Voltar ao portfólio principal",
  "Phase 1 — Diagnose and Stabilize | 0–30 Days": "Fase 1 — Diagnosticar e Estabilizar | 0–30 Dias",
  "Phase 2 — Redesign and Pilot | 31–90 Days": "Fase 2 — Redesenhar e Pilotar | 31–90 Dias",
  "Phase 3 — Scale and Embed | 3–12 Months": "Fase 3 — Escalar e Incorporar | 3–12 Meses"
};

// Section title PT translations
const sectionTitlePT = {
  '1. Executive Summary': '1. Resumo Executivo',
  '2. Business Challenge': '2. Desafio de Negócio',
  '3. Diagnostic Approach': '3. Abordagem de Diagnóstico',
  '4. Key Hypotheses': '4. Hipóteses-Chave',
  '5. Recommended Transformation': '5. Transformação Recomendada',
  '6. Transformation Roadmap': '6. Roadmap de Transformação',
  '7. Governance Model': '7. Modelo de Governança',
  '8. KPI Framework': '8. Framework de KPIs',
  '9. Risks and Mitigations': '9. Riscos e Mitigações',
  '10. Business Impacts and Results': '10. Impactos e Resultados de Negócio',
  '11. Executive Takeaway': '11. Conclusão Executiva'
};

function getPT(text) {
  if (ptTranslations[text]) return ptTranslations[text];
  console.error(`  [WARN] No PT-BR translation for: "${text.substring(0, 100)}..."`);
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

// Find insertion point (before closing }; of translations)
const insertPos = i18nContent.indexOf('};');
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

function nextAvailableKey(prefix) {
  let count = 1;
  while (keyMap.has(`${prefix}-${count}`)) {
    count++;
  }
  return `${prefix}-${count}`;
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

  // Process each section
  html = html.replace(
    /(<section class="case-section"[^>]*id="section-(\d+)"[^>]*>)([\s\S]*?)(<\/section>)/g,
    (fullMatch, openTag, sectionNumStr, content, closeTag) => {
      const sectionNum = parseInt(sectionNumStr);
      
      // Process elements in this section
      const processedContent = content.replace(
        /<(h2|h3|p|li|td|th)(\s[^>]*)?>([\s\S]*?)<\/\1>/g,
        (elemFull, tagName, attrs, innerContent) => {
          const attrStr = attrs || '';
          
          // Skip if already has data-i18n (shouldn't after cleaning, but just in case)
          if (attrStr.includes('data-i18n=')) return elemFull;
          
          const textContent = extractText(innerContent);
          if (!textContent) return elemFull;
          
          let keyName = null;
          
          if (tagName === 'h2') {
            // Section titles use sec{num}-title
            keyName = `sec${sectionNum}-title`;
          } else {
            // Try to match by text
            const matches = textToKeys.get(textContent);
            if (matches && matches.length > 0) {
              keyName = matches[0].key;
            }
          }
          
          if (!keyName) {
            // Create new key
            const prefix = `c${caseNum}-s${sectionNum}-${tagName}`;
            keyName = nextAvailableKey(prefix);
            
            // Generate PT translation
            let pt;
            if (tagName === 'h2') {
              pt = sectionTitlePT[textContent] || textContent;
            } else {
              pt = getPT(textContent);
            }
            
            // Add to maps
            keyMap.set(keyName, { en: textContent, pt });
            if (!textToKeys.has(textContent)) {
              textToKeys.set(textContent, []);
            }
            textToKeys.get(textContent).push({ key: keyName, pt });
            allNewKeys.push({ key: keyName, en: textContent, pt });
            caseNew++;
          }
          
          caseRestored++;
          
          // Add data-i18n attribute
          const newAttrs = attrStr ? attrStr.trim() : '';
          return `<${tagName} data-i18n="${keyName}"${newAttrs ? ' ' + newAttrs : ''}>${innerContent}</${tagName}>`;
        }
      );
      
      return openTag + processedContent + closeTag;
    }
  );
  
  // Also handle h2 elements that might be section titles but also the ones with wrong data-i18n
  // The above regex handles everything inside sections
  
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
  
  const updatedI18n = i18nContent.substring(0, insertPos) + newEntriesStr + i18nContent.substring(insertPos);
  fs.writeFileSync('assets/i18n.js', updatedI18n, 'utf8');
  console.log(`\nAdded ${allNewKeys.length} new keys to i18n.js`);
} else {
  console.log('\nNo new keys to add');
}

console.log(`\nFinal Summary: ${totalRestored} data-i18n attributes restored, ${totalNew} new keys created`);
