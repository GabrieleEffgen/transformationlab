const i18n = {
  currentLang: localStorage.getItem('lang') || 'en',

  translations: {
    // NAV
    'nav-brand': { en: 'THE <span>TRANSFORMATION LAB</span>', pt: 'THE <span>TRANSFORMATION LAB</span>' },
    'nav-home': { en: 'HOME', pt: 'HOME' },
    'nav-capabilities': { en: 'CAPABILITIES', pt: 'CAPACIDADES' },
    'nav-cases': { en: 'CASE STUDIES', pt: 'CASES' },
    'nav-frameworks': { en: 'FRAMEWORKS', pt: 'FRAMEWORKS' },
    'nav-insights': { en: 'INSIGHTS', pt: 'INSIGHTS' },
    'nav-about': { en: 'ABOUT', pt: 'SOBRE' },
    'nav-contact': { en: 'CONTACT', pt: 'CONTATO' },

    // HERO
    'hero-title-line': { en: 'Business Transformation Leader', pt: 'Líder em Business Transformation' },
    'hero-title': { en: 'Gabriele <span>Miranda</span>', pt: 'Gabriele <span>Miranda</span>' },
    'tag-opex': { en: 'Operational Excellence', pt: 'Excelência Operacional' },
    'tag-digital': { en: 'Digital Transformation', pt: 'Transformação Digital' },
    'tag-ci': { en: 'Continuous Improvement', pt: 'Melhoria Contínua' },
    'tag-product': { en: 'Product Strategy', pt: 'Estratégia de Produto' },
    'hero-lead': { en: 'Transforming complex operations into scalable, high-performing business systems.', pt: 'Transformando operações complexas em sistemas de negócio escaláveis e de alta performance.' },
    'hero-btn-portfolio': { en: 'Explore Case Studies →', pt: 'Explorar Cases →' },
    'hero-btn-resume': { en: 'Download Executive Resume →', pt: 'Baixar Currículo Executivo →' },

    // IMPACT
    'impact-label': { en: 'Executive Impact', pt: 'Impacto Executivo' },
    'impact-title': { en: 'Track Record by the Numbers', pt: 'Trajetória em Números' },
    'stat1': { en: 'Years Leading Transformation', pt: 'Anos Liderando Transformação' },
    'stat2': { en: 'Projects Delivered', pt: 'Projetos Entregues' },
    'stat3': { en: 'Teams Led', pt: 'Equipes Lideradas' },
    'stat4': { en: 'Business Value Generated', pt: 'Valor de Negócio Gerado' },
    'stat5': { en: 'Operational Improvements', pt: 'Melhorias Operacionais' },
    'stat6': { en: 'Industries', pt: 'Indústrias' },

    // CAPABILITIES
    'cap-label': { en: 'Core Capabilities', pt: 'Capacidades Essenciais' },
    'cap-title': { en: 'What I Deliver', pt: 'O Que Eu Entrego' },
    'cap-desc': { en: 'Each capability represents a distinct discipline I apply to solve complex operational and strategic challenges.', pt: 'Cada capacidade representa uma disciplina distinta que aplico para resolver desafios operacionais e estratégicos complexos.' },
    'cap1-title': { en: 'Operational Excellence', pt: 'Excelência Operacional' },
    'cap1-desc': { en: 'Improving operational performance through Lean, process redesign, governance and performance management.', pt: 'Melhorando a performance operacional através de Lean, redesenho de processos, governança e gestão de performance.' },
    'cap2-title': { en: 'Business Transformation', pt: 'Business Transformation' },
    'cap2-desc': { en: 'Leading large-scale transformation initiatives involving people, processes, governance and strategic execution.', pt: 'Liderando iniciativas de transformação em larga escala envolvendo pessoas, processos, governança e execução estratégica.' },
    'cap3-title': { en: 'Continuous Improvement', pt: 'Melhoria Contínua' },
    'cap3-desc': { en: 'Creating sustainable improvement systems through structured problem solving and operational excellence.', pt: 'Criando sistemas sustentáveis de melhoria através de solução estruturada de problemas e excelência operacional.' },
    'cap4-title': { en: 'Leadership & Change', pt: 'Liderança & Mudança' },
    'cap4-desc': { en: 'Developing people, building engagement and sustaining change through complex transformations.', pt: 'Desenvolvendo pessoas, construindo engajamento e sustentando mudanças em transformações complexas.' },
    'cap5-title': { en: 'Digital Transformation', pt: 'Transformação Digital' },
    'cap5-desc': { en: 'Applying business transformation principles to digital products, technology and innovation.', pt: 'Aplicando princípios de business transformation a produtos digitais, tecnologia e inovação.' },
    'cap6-title': { en: 'Product Strategy', pt: 'Estratégia de Produto' },
    'cap6-desc': { en: 'Applying operational thinking to create, validate and continuously improve digital products.', pt: 'Aplicando pensamento operacional para criar, validar e melhorar continuamente produtos digitais.' },

    // FEATURED
    'featured-label': { en: 'Featured Transformation', pt: 'Transformação em Destaque' },
    'featured-title': { en: 'Product Availability Transformation', pt: 'Transformação de Disponibilidade de Produto' },
    'featured-desc': { en: 'Cross-functional transformation reducing product unavailability from 12% to 2% in approximately two months.', pt: 'Transformação multifuncional reduzindo a indisponibilidade de produto de 12% para 2% em aproximadamente dois meses.' },
    'featured-btn': { en: 'Read Case →', pt: 'Ler Case →' },
    'metric-unav': { en: 'Unavailability', pt: 'Indisponibilidade' },
    'metric-red': { en: 'Relative reduction', pt: 'Redução relativa' },
    'metric-value': { en: 'Identified value', pt: 'Valor identificado' },
    'metric-time': { en: 'Delivery period', pt: 'Período de entrega' },

    // PORTFOLIO
    'portfolio-label': { en: 'Transformation Portfolio', pt: 'Portfólio de Transformação' },
    'portfolio-title': { en: '23 Business Cases', pt: '23 Business Cases' },
    'portfolio-desc': { en: 'Real-world transformation cases across operational excellence, digital, strategy and leadership.', pt: 'Casos reais de transformação em excelência operacional, digital, estratégia e liderança.' },

    // CASE CARDS
    'case01-tag': { en: 'Case 01 · Operational Excellence', pt: 'Case 01 · Excelência Operacional' },
    'case01-title': { en: 'Product Availability Transformation', pt: 'Transformação de Disponibilidade de Produto' },
    'case01-desc': { en: '12% → 2% · ≈ BRL 8M identified value opportunity', pt: '12% → 2% · ≈ BRL 8M de oportunidade identificada' },
    'case02-tag': { en: 'Case 02 · Performance Recovery', pt: 'Case 02 · Recuperação de Performance' },
    'case02-title': { en: 'Operational Turnaround', pt: 'Turnaround Operacional' },
    'case02-desc': { en: '18% losses · 90-day recovery roadmap', pt: '18% de perdas · Roadmap de 90 dias' },
    'case03-tag': { en: 'Case 03 · KPI Governance', pt: 'Case 03 · Governança de KPI' },
    'case03-title': { en: 'Enterprise Performance Management', pt: 'Gestão de Performance Empresarial' },
    'case03-desc': { en: 'One KPI architecture · Faster executive decisions', pt: 'Arquitetura única de KPI · Decisões executivas mais rápidas' },
    'case04-tag': { en: 'Case 04 · Digital Transformation', pt: 'Case 04 · Transformação Digital' },
    'case04-title': { en: 'End-to-End Process Digitalization', pt: 'Digitalização de Processos End-to-End' },
    'case04-desc': { en: '40% cycle-time target · 70% fewer manual entries', pt: 'Meta de 40% de ciclo · 70% menos entradas manuais' },
    'case05-tag': { en: 'Case 05 · Operational Excellence', pt: 'Case 05 · Excelência Operacional' },
    'case05-title': { en: 'Multi-Site Variability Reduction', pt: 'Redução de Variabilidade Multifábrica' },
    'case05-desc': { en: '30% variability reduction · Best-known-method deployment', pt: '30% de redução de variabilidade · Melhor método conhecido' },
    'case06-tag': { en: 'Case 06 · Leadership', pt: 'Case 06 · Liderança' },
    'case06-title': { en: 'High-Performance Teams', pt: 'Times de Alta Performance' },
    'case06-desc': { en: 'Clear ownership · Faster issue resolution', pt: 'Responsabilidade clara · Resolução mais rápida' },
    'case07-tag': { en: 'Case 07 · Risk & Safety', pt: 'Case 07 · Risco & Segurança' },
    'case07-title': { en: 'Predictive Safety Management', pt: 'Gestão Preditiva de Segurança' },
    'case07-desc': { en: 'Leading indicators · Critical-control verification', pt: 'Indicadores antecedentes · Verificação de controles críticos' },
    'case08-tag': { en: 'Case 08 · Continuous Improvement', pt: 'Case 08 · Melhoria Contínua' },
    'case08-title': { en: 'Continuous Improvement System', pt: 'Sistema de Melhoria Contínua' },
    'case08-desc': { en: 'Strategy-linked funnel · Sustained benefits', pt: 'Funil ligado à estratégia · Benefícios sustentados' },
    'case09-tag': { en: 'Case 09 · AI & Productivity', pt: 'Case 09 · IA & Produtividade' },
    'case09-title': { en: 'AI-Enabled Operations', pt: 'Operações Habilitadas por IA' },
    'case09-desc': { en: 'Human-in-the-loop · Value-first use cases', pt: 'Humano no ciclo · Casos de uso com valor primeiro' },
    'case10-tag': { en: 'Case 10 · Supply Chain', pt: 'Case 10 · Cadeia de Suprimentos' },
    'case10-title': { en: 'Inventory Optimization', pt: 'Otimização de Estoque' },
    'case10-desc': { en: '15–25% inventory target · Service protected', pt: 'Meta de 15–25% de estoque · Serviço protegido' },
    'case11-tag': { en: 'Case 11 · Corporate Efficiency', pt: 'Case 11 · Eficiência Corporativa' },
    'case11-title': { en: 'Lean Office Transformation', pt: 'Transformação Lean Office' },
    'case11-desc': { en: '30% lead-time target · Fewer approvals', pt: 'Meta de 30% de lead-time · Menos aprovações' },
    'case12-tag': { en: 'Case 12 · Change Management', pt: 'Case 12 · Gestão de Mudanças' },
    'case12-title': { en: 'Enterprise Change Management', pt: 'Gestão de Mudanças Empresarial' },
    'case12-desc': { en: 'Readiness gates · Operational continuity', pt: 'Gates de prontidão · Continuidade operacional' },
    'case13-tag': { en: 'Case 13 · Investment Strategy', pt: 'Case 13 · Estratégia de Investimento' },
    'case13-title': { en: 'Strategic CAPEX Governance', pt: 'Governança Estratégica de CAPEX' },
    'case13-desc': { en: 'Risk-adjusted scoring · Benefits realization', pt: 'Pontuação ajustada ao risco · Realização de benefícios' },
    'case14-tag': { en: 'Case 14 · Transformation Governance', pt: 'Case 14 · Governança de Transformação' },
    'case14-title': { en: 'Transformation Management Office', pt: 'Escritório de Gestão de Transformação' },
    'case14-desc': { en: 'One portfolio view · Faster decisions', pt: 'Visão única do portfólio · Decisões mais rápidas' },
    'case15-tag': { en: 'Case 15 · Portfolio Management', pt: 'Case 15 · Gestão de Portfólio' },
    'case15-title': { en: 'Transformation Portfolio Management', pt: 'Gestão de Portfólio de Transformação' },
    'case15-desc': { en: 'Capacity-based prioritization · Higher return', pt: 'Priorização baseada em capacidade · Maior retorno' },
    'case16-tag': { en: 'Case 16 · Customer Value', pt: 'Case 16 · Valor ao Cliente' },
    'case16-title': { en: 'Operations-Led Customer Experience', pt: 'Experiência do Cliente Liderada por Operações' },
    'case16-desc': { en: 'End-to-end journeys · Lower customer effort', pt: 'Jornadas completas · Menor esforço do cliente' },
    'case17-tag': { en: 'Case 17 · ESG & Efficiency', pt: 'Case 17 · ESG & Eficiência' },
    'case17-title': { en: 'Operational Sustainability', pt: 'Sustentabilidade Operacional' },
    'case17-desc': { en: 'Process-level targets · Financial + environmental value', pt: 'Metas por processo · Valor financeiro + ambiental' },
    'case18-tag': { en: 'Case 18 · Manufacturing Strategy', pt: 'Case 18 · Estratégia de Manufatura' },
    'case18-title': { en: 'Lean Plant Expansion', pt: 'Expansão Lean de Planta' },
    'case18-desc': { en: 'Flow-based layout · Faster ramp-up', pt: 'Layout baseado em fluxo · Ramp-up mais rápido' },
    'case19-tag': { en: 'Case 19 · Business Resilience', pt: 'Case 19 · Resiliência de Negócios' },
    'case19-title': { en: 'Operational Crisis Recovery', pt: 'Recuperação de Crise Operacional' },
    'case19-desc': { en: 'Control tower · Recovery + redesign', pt: 'Torre de controle · Recuperação + redesenho' },
    'case20-tag': { en: 'Case 20 · Enterprise Strategy', pt: 'Case 20 · Estratégia Empresarial' },
    'case20-title': { en: 'Five-Year Transformation Roadmap', pt: 'Roadmap de Transformação de 5 Anos' },
    'case20-desc': { en: 'Sequenced agenda · Capability-led growth', pt: 'Agenda sequenciada · Crescimento liderado por capacidades' },
    'case21-tag': { en: 'Case 21 · Digital Product', pt: 'Case 21 · Produto Digital' },
    'case21-title': { en: 'Digital Product Strategy', pt: 'Estratégia de Produto Digital' },
    'case21-desc': { en: 'From OpEx to product · MVP launched', pt: 'Da Excelência Operacional ao Produto · MVP lançado' },
    'case22-tag': { en: 'Case 22 · Digital Transformation', pt: 'Case 22 · Transformação Digital' },
    'case22-title': { en: 'End-to-End Digital Factory Operating System', pt: 'Sistema Operacional Digital de Fábrica End-to-End' },
    'case22-desc': { en: 'Single platform · Real-time end-to-end visibility', pt: 'Plataforma única · Visibilidade end-to-end em tempo real' },
    'case23-tag': { en: 'Case 23 · Operational Excellence', pt: 'Case 23 · Excelência Operacional' },
    'case23-title': { en: 'Global Bottleneck Prioritization Framework', pt: 'Framework Global de Priorização de Gargalos' },
    'case23-desc': { en: '50% scrap reduction · 42% capacity increase', pt: '50% redução de refugo · 42% aumento de capacidade' },

    // FRAMEWORKS
    'fw-label': { en: 'Framework Library', pt: 'Biblioteca de Frameworks' },
    'fw-title': { en: 'Proven Methodologies', pt: 'Metodologias Comprovadas' },
    'fw-desc': { en: 'Reusable frameworks I apply across transformations to deliver consistent, measurable results.', pt: 'Frameworks reutilizáveis que aplico em transformações para entregar resultados consistentes e mensuráveis.' },
    'fw1-title': { en: 'Transformation Roadmap', pt: 'Roadmap de Transformação' },
    'fw1-desc': { en: 'Structured 5-phase approach from diagnosis to sustain.', pt: 'Abordagem estruturada de 5 fases, do diagnóstico à sustentação.' },
    'fw2-title': { en: 'Stakeholder Mapping', pt: 'Mapeamento de Stakeholders' },
    'fw2-desc': { en: 'Influence-impact matrix for change management.', pt: 'Matriz de influência-impacto para gestão de mudanças.' },
    'fw3-title': { en: 'Risk Heatmap', pt: 'Mapa de Calor de Riscos' },
    'fw3-desc': { en: 'Probability vs. impact matrix for transformation risks.', pt: 'Matriz de probabilidade vs. impacto para riscos de transformação.' },
    'fw4-title': { en: 'Operational Governance', pt: 'Governança Operacional' },
    'fw4-desc': { en: 'Routine structure for performance management.', pt: 'Estrutura de rotinas para gestão de performance.' },
    'fw5-title': { en: 'Decision Matrix', pt: 'Matriz de Decisão' },
    'fw5-desc': { en: 'Weighted criteria for objective prioritization.', pt: 'Critérios ponderados para priorização objetiva.' },
    'fw6-title': { en: 'PDCA Framework', pt: 'Framework PDCA' },
    'fw6-desc': { en: 'Plan-Do-Check-Act for continuous improvement cycles.', pt: 'Plan-Do-Check-Act para ciclos de melhoria contínua.' },
    'fw7-title': { en: 'CI Canvas', pt: 'Canvas de Melhoria Contínua' },
    'fw7-desc': { en: 'Visual framework for improvement opportunity capture.', pt: 'Framework visual para captura de oportunidades de melhoria.' },
    'fw8-title': { en: 'Performance Dashboard', pt: 'Dashboard de Performance' },
    'fw8-desc': { en: 'KPI hierarchy aligned to strategy execution.', pt: 'Hierarquia de KPIs alinhada à execução da estratégia.' },

    // INSIGHTS
    'insight-label': { en: 'Insights', pt: 'Insights' },
    'insight-title': { en: 'Thought Leadership', pt: 'Liderança de Pensamento' },
    'insight-desc': { en: 'Articles, reflections and frameworks from the front line of business transformation.', pt: 'Artigos, reflexões e frameworks da linha de frente da transformação de negócios.' },
    'insight1-cat': { en: 'Leadership', pt: 'Liderança' },
    'insight1-title': { en: 'The Difference Between Managing and Leading Transformation', pt: 'A Diferença Entre Gerenciar e Liderar Transformação' },
    'insight1-desc': { en: 'Why execution alone isn\'t enough — and how to build the change muscle in your organization.', pt: 'Por que apenas execução não basta — e como construir o músculo da mudança na sua organização.' },
    'insight2-cat': { en: 'Operations', pt: 'Operações' },
    'insight2-title': { en: 'Why 70% of Transformations Fail (And What Works)', pt: 'Por Que 70% das Transformações Falham (E O Que Funciona)' },
    'insight2-desc': { en: 'Lessons from 50+ transformation initiatives on what separates success from failure.', pt: 'Lições de 50+ iniciativas de transformação sobre o que separa o sucesso do fracasso.' },
    'insight3-cat': { en: 'Product', pt: 'Produto' },
    'insight3-title': { en: 'From OpEx to Product: A New Career Trajectory', pt: 'Da Excelência Operacional ao Produto: Uma Nova Trajetória' },
    'insight3-desc': { en: 'How operational excellence principles apply to building digital products.', pt: 'Como princípios de excelência operacional se aplicam à construção de produtos digitais.' },

    // ABOUT
    'about-label': { en: 'About', pt: 'Sobre' },
    'about-title': { en: 'Transformation Story', pt: 'História de Transformação' },
    'about-p1': { en: 'Chemical Engineer and transformation leader. From engineering to executive management across four multinationals — leading over 50 initiatives in Operational Excellence, Digital Transformation, and Continuous Improvement.', pt: 'Engenheira Química e líder de transformação. Da engenharia à gestão executiva em quatro multinacionais — liderando mais de 50 iniciativas em Excelência Operacional, Transformação Digital e Melhoria Contínua.' },
    'about-p2': { en: 'Key results include reducing operational inefficiency from <strong>12% to 2%</strong> at Michelin, increasing capacity by <strong>130%</strong> at Moove, and reducing scrap by <strong>50%</strong> at Knauf.', pt: 'Resultados-chave incluem reduzir ineficiência operacional de <strong>12% para 2%</strong> na Michelin, aumentar capacidade em <strong>130%</strong> na Moove e reduzir refugo em <strong>50%</strong> na Knauf.' },
    'about-link': { en: 'Full Story →', pt: 'História Completa →' },

    // CONTACT
    'contact-label': { en: 'Contact', pt: 'Contato' },
    'contact-title': { en: 'Let\'s Connect', pt: 'Vamos Conectar' },
    'contact-desc': { en: 'Open to executive opportunities in Business Transformation, Operational Excellence, and strategic leadership.', pt: 'Aberta a oportunidades executivas em Business Transformation, Excelência Operacional e liderança estratégica.' },

    // CASE PAGE
    'back-btn': { en: '← Back to all cases', pt: '← Voltar para todos os cases' },

    // CASE LEADS (hero description)
    'case01-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case02-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case03-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case04-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case05-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case06-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case07-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case08-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case09-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case10-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case11-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case12-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case13-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case14-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case15-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case16-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case17-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case18-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case19-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case20-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case21-lead': { en: 'From Operational Excellence to Digital Product — an executive case on applying transformation principles to product strategy.', pt: 'Da Excelência Operacional ao Produto Digital — um case executivo sobre aplicar princípios de transformação à estratégia de produto.' },
    'case22-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },
    'case23-lead': { en: 'An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.', pt: 'Um business case executivo estruturado em torno de diagnóstico, estratégia de transformação, implementação, governança e realização de valor.' },

    // PAGE HEADERS
    'cap-page-title': { en: 'Core Capabilities', pt: 'Capacidades Essenciais' },
    'cap-page-desc': { en: 'Six disciplines I apply to transform complex operations into scalable, high-performing systems. Each capability links directly to real case studies.', pt: 'Seis disciplinas que aplico para transformar operações complexas em sistemas escaláveis e de alta performance. Cada capacidade está diretamente ligada a cases reais.' },
    'cs-page-title': { en: 'Case Studies', pt: 'Cases' },
    'cs-page-desc': { en: '23 transformation cases across Operational Excellence, Digital, Strategy, Leadership, and more. Filter by capability.', pt: '23 cases de transformação em Excelência Operacional, Digital, Estratégia, Liderança e mais. Filtre por capacidade.' },
    'fw-page-title': { en: 'Framework Library', pt: 'Biblioteca de Frameworks' },
    'fw-page-desc': { en: 'Proven methodologies and tools I use to diagnose, design, execute and sustain business transformations.', pt: 'Metodologias e ferramentas comprovadas que uso para diagnosticar, desenhar, executar e sustentar transformações de negócios.' },
    'ins-page-title': { en: 'Insights', pt: 'Insights' },
    'ins-page-desc': { en: 'Thought leadership, articles and reflections from the front line of business transformation.', pt: 'Liderança de pensamento, artigos e reflexões da linha de frente da transformação de negócios.' },
    'about-page-title': { en: 'Transformation Story', pt: 'História de Transformação' },
    'about-page-desc': { en: 'From Chemical Engineering to executive leadership — a career built on turning complexity into performance.', pt: 'Da Engenharia Química à liderança executiva — uma carreira construída transformando complexidade em performance.' },

    // CAPABILITY LABELS
    'cap01-label': { en: 'Capability 01', pt: 'Capacidade 01' },
    'cap02-label': { en: 'Capability 02', pt: 'Capacidade 02' },
    'cap03-label': { en: 'Capability 03', pt: 'Capacidade 03' },
    'cap04-label': { en: 'Capability 04', pt: 'Capacidade 04' },
    'cap05-label': { en: 'Capability 05', pt: 'Capacidade 05' },
    'cap06-label': { en: 'Capability 06', pt: 'Capacidade 06' },

    // CASE STUDY FILTERS
    'filter-all': { en: 'All', pt: 'Todos' },
    'filter-opex': { en: 'Operational Excellence', pt: 'Excelência Operacional' },
    'filter-biztrans': { en: 'Business Transformation', pt: 'Business Transformation' },
    'filter-leadership': { en: 'Leadership', pt: 'Liderança' },
    'filter-digital': { en: 'Digital', pt: 'Digital' },
    'filter-product': { en: 'Product', pt: 'Produto' },
    'filter-lean': { en: 'Lean', pt: 'Lean' },
    'filter-governance': { en: 'Governance', pt: 'Governança' },
    'filter-people': { en: 'People', pt: 'Pessoas' },
    'filter-innovation': { en: 'Innovation', pt: 'Inovação' },

    // FRAMEWORKS
    'fw1-used': { en: 'Used in: Case 01, Case 20', pt: 'Usado em: Case 01, Case 20' },
    'fw2-used': { en: 'Used in: Case 12, Case 19', pt: 'Usado em: Case 12, Case 19' },
    'fw3-used': { en: 'Used in: Case 07, Case 13', pt: 'Usado em: Case 07, Case 13' },
    'fw4-used': { en: 'Used in: Case 03, Case 06', pt: 'Usado em: Case 03, Case 06' },
    'fw5-used': { en: 'Used in: Case 13, Case 15', pt: 'Usado em: Case 13, Case 15' },
    'fw6-used': { en: 'Used in: Case 08, Case 10', pt: 'Usado em: Case 08, Case 10' },
    'fw7-used': { en: 'Used in: Case 08, Case 14', pt: 'Usado em: Case 08, Case 14' },
    'fw8-used': { en: 'Used in: Case 03, Case 16', pt: 'Usado em: Case 03, Case 16' },
    'fw9-title': { en: 'Problem Solving Canvas', pt: 'Canvas de Resolução de Problemas' },
    'fw9-desc': { en: 'Structured A3-like template for root cause analysis, countermeasure development and result tracking.', pt: 'Template estruturado no formato A3 para análise de causa raiz, desenvolvimento de contramedidas e acompanhamento de resultados.' },
    'fw9-used': { en: 'Used in: Case 02, Case 11', pt: 'Usado em: Case 02, Case 11' },
    'fw10-title': { en: 'Transformation Scorecard', pt: 'Scorecard de Transformação' },
    'fw10-desc': { en: 'Executive-level dashboard tracking transformation health, benefit realization, risks and dependencies.', pt: 'Dashboard executivo que acompanha a saúde da transformação, realização de benefícios, riscos e dependências.' },
    'fw10-used': { en: 'Used in: Case 14, Case 20', pt: 'Usado em: Case 14, Case 20' },

    // INSIGHT FILTERS
    'filter-ins-all': { en: 'All', pt: 'Todos' },
    'filter-ins-leadership': { en: 'Leadership', pt: 'Liderança' },
    'filter-ins-lean': { en: 'Lean', pt: 'Lean' },
    'filter-ins-operations': { en: 'Operations', pt: 'Operações' },
    'filter-ins-product': { en: 'Product', pt: 'Produto' },
    'filter-ins-ai': { en: 'AI', pt: 'IA' },
    'filter-ins-transformation': { en: 'Transformation', pt: 'Transformação' },
    'filter-ins-people': { en: 'People', pt: 'Pessoas' },
    'filter-ins-strategy': { en: 'Strategy', pt: 'Estratégia' },

    // INSIGHTS 4-6
    'insight4-cat': { en: 'Lean', pt: 'Lean' },
    'insight4-title': { en: 'Beyond the Tools: Building a Lean Culture That Lasts', pt: 'Além das Ferramentas: Construindo uma Cultura Lean Duradoura' },
    'insight4-desc': { en: 'Why Lean fails when implemented as a toolkit rather than a management system.', pt: 'Por que o Lean falha quando implementado como um kit de ferramentas em vez de um sistema de gestão.' },
    'insight5-cat': { en: 'People', pt: 'Pessoas' },
    'insight5-title': { en: 'The Engagement Multiplier: Why Teams Matter More Than Process', pt: 'O Multiplicador de Engajamento: Por Que Times Importam Mais Que Processos' },
    'insight5-desc': { en: 'How investing in people development amplifies every other transformation effort.', pt: 'Como investir no desenvolvimento de pessoas amplifica todos os outros esforços de transformação.' },
    'insight6-cat': { en: 'Strategy', pt: 'Estratégia' },
    'insight6-title': { en: 'Capability-Led Growth: A Framework for Transformation Roadmaps', pt: 'Crescimento Liderado por Capacidades: Um Framework para Roadmaps de Transformação' },
    'insight6-desc': { en: 'Moving from project-based to capability-based transformation planning.', pt: 'Migrando do planejamento de transformação baseado em projetos para o baseado em capacidades.' },

    // ABOUT DETAIL
    'about-tl-header': { en: 'Career Timeline', pt: 'Linha do Tempo' },
    'about-p3': { en: 'In less than 10 years, I evolved from trainee to executive manager across four major multinationals — Michelin, Knauf, Moove and Gerdau — leading increasingly complex operations and teams in the manufacturing industry.', pt: 'Em menos de 10 anos, evoluí de trainee a gerente executiva em quatro grandes multinacionais — Michelin, Knauf, Moove e Gerdau — liderando operações e equipes cada vez mais complexas na indústria manufatureira.' },
    'about-p4': { en: 'I have led over 50 transformation initiatives delivering significant gains in productivity, quality, safety, availability, operational efficiency, and business value generation.', pt: 'Liderei mais de 50 iniciativas de transformação entregando ganhos significativos em produtividade, qualidade, segurança, disponibilidade, eficiência operacional e geração de valor de negócio.' },
    'about-p5': { en: 'Key results include reducing operational inefficiency from <strong>12% to 2%</strong> at Michelin, increasing operational capacity by <strong>130%</strong> at Moove using VOC and Design Thinking, and reducing scrap by <strong>50%</strong> at Knauf through BPMN, Lean Manufacturing, and DMAIC.', pt: 'Resultados-chave incluem reduzir ineficiência operacional de <strong>12% para 2%</strong> na Michelin, aumentar capacidade operacional em <strong>130%</strong> na Moove usando VOC e Design Thinking, e reduzir refugo em <strong>50%</strong> na Knauf através de BPMN, Lean Manufacturing e DMAIC.' },
    'about-p6': { en: 'My leadership combines strategic thinking, analytical capability, and strong execution orientation. I use Lean Manufacturing, Six Sigma, BPMN, DMAIC, Design Thinking, and VOC as means to generate impact. I believe excellent processes only produce consistent results when supported by a strong culture, prepared leadership, and engaged teams.', pt: 'Minha liderança combina pensamento estratégico, capacidade analítica e forte orientação à execução. Utilizo Lean Manufacturing, Six Sigma, BPMN, DMAIC, Design Thinking e VOC como meios para gerar impacto. Acredito que processos excelentes só produzem resultados consistentes quando apoiados por uma cultura forte, liderança preparada e equipes engajadas.' },

    // TIMELINE
    'tl1-head': { en: 'Operations Manager', pt: 'Gerente de Operações' },
    'tl1-sub': { en: '2024 – Present · Gerdau', pt: '2024 – Presente · Gerdau' },
    'tl1-body': { en: 'Strategic leadership of industrial operations, driving transformation initiatives focused on operational excellence, performance management, and business value generation.', pt: 'Liderança estratégica de operações industriais, conduzindo iniciativas de transformação focadas em excelência operacional, gestão de performance e geração de valor de negócio.' },
    'tl2-head': { en: 'Regional Continuous Improvement Specialist', pt: 'Especialista Regional em Melhoria Contínua' },
    'tl2-sub': { en: '2023 – 2024 · Knauf', pt: '2023 – 2024 · Knauf' },
    'tl2-body': { en: 'Corporate role leading Business Transformation and Operational Excellence across business units — process architecture, digitalization, and continuous improvement.', pt: 'Função corporativa liderando Business Transformation e Excelência Operacional entre unidades de negócio — arquitetura de processos, digitalização e melhoria contínua.' },
    'tl3-head': { en: 'Production & Maintenance Coordinator', pt: 'Coordenadora de Produção e Manutenção' },
    'tl3-sub': { en: '2022 – 2023 · Moove', pt: '2022 – 2023 · Moove' },
    'tl3-body': { en: 'Managed production operations, team development, and operational discipline in a high-complexity industrial environment.', pt: 'Gerenciei operações de produção, desenvolvimento de equipe e disciplina operacional em ambiente industrial de alta complexidade.' },
    'tl4-head': { en: 'Production Supervisor', pt: 'Supervisora de Produção' },
    'tl4-sub': { en: '2021 – 2022 · Moove', pt: '2021 – 2022 · Moove' },
    'tl4-body': { en: 'Led complete restructuring of a production process using VOC and Design Thinking, increasing capacity by 130%.', pt: 'Liderei a reestruturação completa de um processo produtivo usando VOC e Design Thinking, aumentando a capacidade em 130%.' },
    'tl5-head': { en: 'Continuous Improvement Analyst', pt: 'Analista de Melhoria Contínua' },
    'tl5-sub': { en: '2018 – 2021 · Michelin', pt: '2018 – 2021 · Michelin' },
    'tl5-body': { en: 'Led continuous improvement projects using Lean Manufacturing, VOC, and Design Thinking for waste elimination and efficiency increase.', pt: 'Liderei projetos de melhoria contínua usando Lean Manufacturing, VOC e Design Thinking para eliminação de desperdícios e aumento de eficiência.' },
    'tl6-head': { en: 'Trainee → Process Engineer', pt: 'Trainee → Engenheira de Processos' },
    'tl6-sub': { en: '2017 – 2018 · Michelin', pt: '2017 – 2018 · Michelin' },
    'tl6-body': { en: 'Started industrial career in one of the world\'s largest tire manufacturers, building foundational expertise in process engineering and operational excellence.', pt: 'Iniciei a carreira industrial em um dos maiores fabricantes de pneus do mundo, construindo expertise fundamental em engenharia de processos e excelência operacional.' },

    // EDUCATION & CERTIFICATIONS
    'about-edu-label': { en: 'Education & Certifications', pt: 'Formação & Certificações' },
    'about-edu-header': { en: 'Education', pt: 'Formação' },
    'about-cert-header': { en: 'Certifications', pt: 'Certificações' },
    'about-edu1': { en: 'Chemical Engineering', pt: 'Engenharia Química' },
    'about-edu1-detail': { en: '2011 – 2020 · Bachelor\'s degree', pt: '2011 – 2020 · Graduação' },
    'about-edu2': { en: 'Science Without Borders', pt: 'Ciência Sem Fronteiras' },
    'about-edu2-detail': { en: '2014 – 2016 · Sandwich exchange in New York', pt: '2014 – 2016 · Intercâmbio sanduíche em Nova York' },
    'about-cert1': { en: 'Lean Six Sigma Green Belt', pt: 'Lean Six Sigma Green Belt' },
    'about-cert2': { en: 'BPMN — Business Process Model and Notation', pt: 'BPMN — Notação e Modelagem de Processos de Negócio' },
    'about-cert3': { en: 'Scrum Master', pt: 'Scrum Master' },
    'about-cert4': { en: 'Product Strategy', pt: 'Estratégia de Produto' },
    'about-cert5': { en: 'Digital Product Leadership', pt: 'Liderança de Produto Digital' },
    'about-cert6': { en: 'AI in Digital Business', pt: 'IA em Negócios Digitais' },

    // CONTACT
    'contact-based': { en: 'Based in Brazil · Available for remote, hybrid and international opportunities.', pt: 'Baseada no Brasil · Disponível para oportunidades remotas, híbridas e internacionais.' },
    'contact-dl-cv': { en: 'Download Executive Resume (CV)', pt: 'Baixar Currículo Executivo (CV)' },

    // CURRICULO / RESUME PAGE
    'nav-resume': { en: 'Resume', pt: 'Currículo' },
    'about-i18n': { en: 'About', pt: 'Sobre' },
    'about-p1b': { en: 'In less than 10 years, I evolved from trainee to executive manager across four major multinationals, leading increasingly complex operations and teams in the manufacturing industry. I have led over 50 transformation initiatives in multinational companies, delivering significant gains in productivity, quality, safety, availability, operational efficiency, and business value generation.', pt: 'Em menos de 10 anos, evoluí de trainee a gerente executiva em quatro grandes multinacionais, liderando operações e equipes cada vez mais complexas na indústria manufatureira. Liderei mais de 50 iniciativas de transformação em empresas multinacionais, entregando ganhos significativos em produtividade, qualidade, segurança, disponibilidade, eficiência operacional e geração de valor de negócio.' },
    'about-p1c': { en: 'Key results include reducing operational inefficiency from 12% to 2% at Michelin through process restructuring and performance management; increasing operational capacity by 130% at Moove using VOC and Design Thinking; and reducing scrap by 50% at Knauf through BPMN, Lean Manufacturing, and DMAIC.', pt: 'Resultados-chave incluem reduzir a ineficiência operacional de 12% para 2% na Michelin através de reestruturação de processos e gestão de performance; aumentar a capacidade operacional em 130% na Moove usando VOC e Design Thinking; e reduzir o refugo em 50% na Knauf através de BPMN, Lean Manufacturing e DMAIC.' },
    'about-p1d': { en: 'My leadership combines strategic thinking, analytical capability, and a strong execution orientation. I use Lean Manufacturing, Six Sigma Green Belt, BPMN, DMAIC, Design Thinking, and VOC as means to generate impact. I believe excellent processes only produce consistent results when supported by a strong culture, prepared leadership, and engaged teams.', pt: 'Minha liderança combina pensamento estratégico, capacidade analítica e forte orientação à execução. Utilizo Lean Manufacturing, Six Sigma Green Belt, BPMN, DMAIC, Design Thinking e VOC como meios para gerar impacto. Acredito que processos excelentes só produzem resultados consistentes quando apoiados por uma cultura forte, liderança preparada e equipes engajadas.' },
    'about-p1e': { en: 'I am currently seeking opportunities in Continuous Improvement Management, Business Transformation, and Manufacturing Excellence leadership positions.', pt: 'Atualmente busco oportunidades em cargos de liderança em Gestão de Melhoria Contínua, Business Transformation e Excelência em Manufatura.' },
    'exp-i18n': { en: 'Experience', pt: 'Experiência' },
    'job1-title': { en: 'Operations Manager', pt: 'Gerente de Operações' },
    'job1-dates': { en: 'Aug 2024 - Present · 2 years', pt: 'Ago 2024 - Presente · 2 anos' },
    'job1-desc': { en: 'Strategic leadership of industrial operations in a high-complexity environment, driving operational transformation initiatives focused on operational excellence, performance management, leadership development, and business value generation.', pt: 'Liderança estratégica de operações industriais em ambiente de alta complexidade, conduzindo iniciativas de transformação operacional focadas em excelência operacional, gestão de performance, desenvolvimento de liderança e geração de valor de negócio.' },
    'job1-b1': { en: 'Led an operational transformation that reduced production inefficiency from 12% to 2% in just two months through process restructuring, performance management, and team integration.', pt: 'Liderei uma transformação operacional que reduziu a ineficiência produtiva de 12% para 2% em apenas dois meses através de reestruturação de processos, gestão de performance e integração de equipes.' },
    'job1-b2': { en: 'Managed the strategic investment portfolio (CAPEX and OPEX), prioritizing initiatives based on financial return, operational impact, and business alignment — achieving over R$ 1M in OPEX reduction.', pt: 'Gerenciei o portfólio estratégico de investimentos (CAPEX e OPEX), priorizando iniciativas com base em retorno financeiro, impacto operacional e alinhamento aos negócios — alcançando mais de R$ 1M em redução de OPEX.' },
    'job1-b3': { en: 'Led transformation projects focused on productivity increase, loss reduction, process optimization, and industrial efficiency using Lean Manufacturing, BPMN, data analysis, and structured continuous improvement methodologies.', pt: 'Liderei projetos de transformação focados em aumento de produtividade, redução de perdas, otimização de processos e eficiência industrial usando Lean Manufacturing, BPMN, análise de dados e metodologias estruturadas de melhoria contínua.' },
    'job1-b4': { en: 'Structured performance management routines based on strategic indicators (SQCDMP), strengthening data-driven decision-making, operational governance, and result predictability.', pt: 'Estruturei rotinas de gestão de performance baseadas em indicadores estratégicos (SQCDMP), fortalecendo a tomada de decisão baseada em dados, a governança operacional e a previsibilidade de resultados.' },
    'job1-b5': { en: 'Worked cross-functionally with Production, Engineering, Quality, Logistics, and Maintenance, promoting stakeholder alignment and accelerating strategic initiative implementation.', pt: 'Atuei de forma transversal com Produção, Engenharia, Qualidade, Logística e Manutenção, promovendo alinhamento de stakeholders e acelerando a implementação de iniciativas estratégicas.' },
    'job1-b6': { en: 'Developed leadership and strengthened high-performance culture through close management, development plans, continuous feedback, and indicator monitoring — resulting in two employees promoted to managers.', pt: 'Desenvolvi lideranças e fortaleci a cultura de alta performance através de gestão próxima, planos de desenvolvimento, feedback contínuo e monitoramento de indicadores — resultando em dois funcionários promovidos a gerentes.' },
    'job2-title': { en: 'Regional Continuous Improvement Specialist', pt: 'Especialista Regional em Melhoria Contínua' },
    'job2-dates': { en: 'Jan 2023 - Aug 2024 · 1 yr 8 mos', pt: 'Jan 2023 - Ago 2024 · 1 ano 8 meses' },
    'job2-desc': { en: 'Corporate role leading Business Transformation and Operational Excellence initiatives, driving strategic projects focused on process standardization, digitalization, continuous improvement, and operational efficiency across different business units.', pt: 'Função corporativa liderando iniciativas de Business Transformation e Excelência Operacional, conduzindo projetos estratégicos focados em padronização de processos, digitalização, melhoria contínua e eficiência operacional em diferentes unidades de negócio.' },
    'job2-b1': { en: 'Structured and implemented the company\'s process architecture using BPMN, promoting standardization, governance, and greater integration between business areas.', pt: 'Estruturei e implementei a arquitetura de processos da empresa utilizando BPMN, promovendo padronização, governança e maior integração entre as áreas de negócio.' },
    'job2-b2': { en: 'Led operational transformation initiatives that reduced industrial scrap by 50% through Lean Manufacturing, DMAIC, data analysis, and continuous improvement, ensuring sustainable results.', pt: 'Liderei iniciativas de transformação operacional que reduziram o refugo industrial em 50% através de Lean Manufacturing, DMAIC, análise de dados e melhoria contínua, garantindo resultados sustentáveis.' },
    'job2-b3': { en: 'Conducted organizational diagnostics using Voice of Customer (VOC) and NPS to identify improvement opportunities and direct initiatives aligned with business needs.', pt: 'Realizei diagnósticos organizacionais utilizando Voice of Customer (VOC) e NPS para identificar oportunidades de melhoria e direcionar iniciativas alinhadas às necessidades do negócio.' },
    'job2-b4': { en: 'Acted as a facilitator of the operational excellence culture, training teams and leadership in Lean Manufacturing, continuous improvement, and process management.', pt: 'Atuei como facilitadora da cultura de excelência operacional, treinando equipes e lideranças em Lean Manufacturing, melhoria contínua e gestão de processos.' },
    'job2-b5': { en: 'Managed cross-functional projects involving different stakeholders, promoting strategic alignment, change management, and disciplined execution of transformation initiatives.', pt: 'Gerenciei projetos multifuncionais envolvendo diferentes stakeholders, promovendo alinhamento estratégico, gestão de mudanças e execução disciplinada de iniciativas de transformação.' },
    'job2-b6': { en: 'Led the digitalization and evolution of corporate processes, increasing operational efficiency, information reliability, and data-driven decision-making capability.', pt: 'Liderei a digitalização e evolução de processos corporativos, aumentando a eficiência operacional, a confiabilidade das informações e a capacidade de tomada de decisão baseada em dados.' },
    'job3-title': { en: 'Production and Maintenance Coordinator', pt: 'Coordenador de Produção e Manutenção' },
    'job3-dates': { en: 'Sep 2022 - Jan 2023 · 5 months', pt: 'Set 2022 - Jan 2023 · 5 meses' },
    'job3-desc': { en: 'Started my industrial leadership trajectory as coordinator, managing production operations, team development, and strengthening operational discipline in a high-complexity industrial environment.', pt: 'Iniciei minha trajetória de liderança industrial como coordenadora, gerenciando operações de produção, desenvolvimento de equipes e fortalecendo a disciplina operacional em ambiente industrial de alta complexidade.' },
    'job3-b1': { en: 'Managed operational teams, promoting safety, people development, and continuous improvement, ensuring production, quality, and performance targets.', pt: 'Gerenciei equipes operacionais, promovendo segurança, desenvolvimento de pessoas e melhoria contínua, garantindo metas de produção, qualidade e performance.' },
    'job3-b2': { en: 'Coordinated production activities, ensuring operational stability, process standardization, and adherence to performance indicators.', pt: 'Coordenei atividades produtivas, garantindo estabilidade operacional, padronização de processos e aderência aos indicadores de performance.' },
    'job3-b3': { en: 'Worked with cross-functional areas to solve operational problems, eliminate waste, and increase production process efficiency.', pt: 'Atuei com áreas transversais para solução de problemas operacionais, eliminação de desperdícios e aumento da eficiência dos processos produtivos.' },
    'job3-b4': { en: 'Developed performance monitoring routines through operational indicators, supporting decision-making and corrective/preventive actions.', pt: 'Desenvolvi rotinas de monitoramento de performance através de indicadores operacionais, apoiando a tomada de decisão e ações corretivas/preventivas.' },
    'job4-title': { en: 'Process Engineer', pt: 'Engenheira de Processos' },
    'job4-dates': { en: 'Jun 2022 - Aug 2022 · 3 months', pt: 'Jun 2022 - Ago 2022 · 3 meses' },
    'job5-title': { en: 'Production Supervisor', pt: 'Supervisora de Produção' },
    'job5-dates': { en: 'Mar 2021 - Jul 2022 · 1 yr 5 mos', pt: 'Mar 2021 - Jul 2022 · 1 ano 5 meses' },
    'job5-desc': { en: 'Began my leadership trajectory managing operational teams and production performance, driving operational transformation initiatives focused on productivity, safety, quality, and people development.', pt: 'Iniciei minha trajetória de liderança gerenciando equipes operacionais e performance produtiva, conduzindo iniciativas de transformação operacional focadas em produtividade, segurança, qualidade e desenvolvimento de pessoas.' },
    'job5-b1': { en: 'Led the complete restructuring of a production process using Voice of Customer (VOC) and Design Thinking, increasing operational capacity by 130% without significant infrastructure investments.', pt: 'Liderei a reestruturação completa de um processo produtivo utilizando Voice of Customer (VOC) e Design Thinking, aumentando a capacidade operacional em 130% sem investimentos significativos em infraestrutura.' },
    'job5-b2': { en: 'Managed multidisciplinary teams, promoting people development, safety culture, and continuous improvement, aligning team performance with strategic operational goals.', pt: 'Gerenciei equipes multidisciplinares, promovendo desenvolvimento de pessoas, cultura de segurança e melhoria contínua, alinhando a performance do time com os objetivos operacionais estratégicos.' },
    'job5-b3': { en: 'Structured performance management routines based on operational indicators, strengthening data-driven decision-making and action plan execution discipline.', pt: 'Estruturei rotinas de gestão de performance baseadas em indicadores operacionais, fortalecendo a tomada de decisão baseada em dados e a disciplina de execução de planos de ação.' },
    'job6-title': { en: 'Continuous Improvement Analyst', pt: 'Analista de Melhoria Contínua' },
    'job6-dates': { en: 'Aug 2018 - Feb 2021 · 2 yrs 7 mos', pt: 'Ago 2018 - Fev 2021 · 2 anos 7 meses' },
    'job6-desc': { en: 'Responsible for leading continuous improvement initiatives focused on productivity increase, process optimization, and business value generation, working cross-functionally with operational areas.', pt: 'Responsável por liderar iniciativas de melhoria contínua focadas em aumento de produtividade, otimização de processos e geração de valor de negócio, atuando de forma transversal com áreas operacionais.' },
    'job6-b1': { en: 'Led continuous improvement projects using Lean Manufacturing, VOC, Design Thinking, and structured methodologies for waste elimination and operational efficiency increase.', pt: 'Liderei projetos de melhoria contínua usando Lean Manufacturing, VOC, Design Thinking e metodologias estruturadas para eliminação de desperdícios e aumento de eficiência operacional.' },
    'job6-b2': { en: 'Conducted process analysis, bottleneck identification, and sustainable solution implementation, supporting the evolution of operational performance indicators.', pt: 'Realizei análise de processos, identificação de gargalos e implementação de soluções sustentáveis, apoiando a evolução dos indicadores de performance operacional.' },
    'job6-b3': { en: 'Worked with Production, Engineering, Quality, and Maintenance areas, promoting stakeholder alignment and accelerating improvement initiative implementation.', pt: 'Atuei com as áreas de Produção, Engenharia, Qualidade e Manutenção, promovendo alinhamento de stakeholders e acelerando a implementação de iniciativas de melhoria.' },
    'job7-title': { en: 'Trainee', pt: 'Trainee' },
    'job7-dates': { en: 'Jan 2017 - Aug 2018 · 1 yr 8 mos', pt: 'Jan 2017 - Ago 2018 · 1 ano 8 meses' },
    'job8-title': { en: 'Undergraduate Researcher', pt: 'Pesquisadora de Iniciação Científica' },
    'job8-dates': { en: 'Nov 2012 - Jul 2014 · 1 yr 9 mos', pt: 'Nov 2012 - Jul 2014 · 1 ano 9 meses' },
    'job8-b1': { en: 'Synthesized catalysts and performed analysis using TPD, X-RAY, ASAP 2010 and catalytic tests in chromatograph.', pt: 'Sintetizei catalisadores e realizei análises utilizando TPD, RAIO-X, ASAP 2010 e testes catalíticos em cromatógrafo.' },
    'job8-b2': { en: 'Part of a Petrobras project focused on finding larger pores for zeolites used in crude-oil catalysis.', pt: 'Participei de um projeto da Petrobras focado em encontrar poros maiores para zeólitas utilizadas na catálise de petróleo bruto.' },
    'edu-i18n': { en: 'Education', pt: 'Formação' },
    'edu1-title': { en: 'Bachelor\'s in Chemical Engineering', pt: 'Bacharelado em Engenharia Química' },
    'edu1-dates': { en: '2011 – 2020', pt: '2011 – 2020' },
    'edu1-desc': { en: 'Chemical Engineering degree with solid foundation in data analysis, quality control, and unit operations optimization. Thesis focused on innovation in automotive grease production process.', pt: 'Graduação em Engenharia Química com sólida base em análise de dados, controle de qualidade e otimização de operações unitárias. Tese focada em inovação no processo de produção de graxa automotiva.' },
    'edu2-title': { en: 'Sandwich Exchange Program — Science Without Borders', pt: 'Programa de Intercâmbio Sanduíche — Ciência Sem Fronteiras' },
    'edu2-dates': { en: 'Aug 2014 – Jan 2016', pt: 'Ago 2014 – Jan 2016' },
    'edu2-desc': { en: 'One and a half years studying chemical engineering courses in New York. Participated in a consulting project for a small business, structuring the business model and strategic plan.', pt: 'Um ano e meio cursando disciplinas de engenharia química em Nova York. Participei de um projeto de consultoria para uma pequena empresa, estruturando o modelo de negócio e o plano estratégico.' },
    'lang-i18n': { en: 'Languages', pt: 'Idiomas' },
    'lang-en': { en: '— Fluent', pt: '— Fluente' },
    'lang-pt': { en: '— Native', pt: '— Nativo' },
    'lang-es': { en: '— Basic to Intermediate', pt: '— Básico a Intermediário' },
    'certs-i18n': { en: 'Certifications', pt: 'Certificações' },
    'cert1': { en: 'Lean Six Sigma Green Belt', pt: 'Lean Six Sigma Green Belt' },
    'cert2': { en: 'BPMN - Business Process Model and Notation', pt: 'BPMN - Notação e Modelagem de Processos de Negócio' },
    'cert3': { en: 'Scrum Master', pt: 'Scrum Master' },
    'cert4': { en: 'Advanced Microsoft Excel', pt: 'Microsoft Excel Avançado' },
    'cert5': { en: 'Product Strategy', pt: 'Estratégia de Produto' },
    'cert6': { en: 'Digital Product Leadership', pt: 'Liderança de Produto Digital' },
    'cert7': { en: 'AI in Digital Business', pt: 'IA em Negócios Digitais' },

    // FOOTER
    'footer-text': { en: '© 2026 Gabriele Miranda — THE TRANSFORMATION LAB', pt: '© 2026 Gabriele Miranda — THE TRANSFORMATION LAB' },
  },

  init() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (this.translations[key]) {
        el.dataset.i18nOriginal = el.innerHTML;
      }
    });
    this.apply();
    this.createToggle();
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (this.translations[key] && this.translations[key][this.currentLang]) {
        el.innerHTML = this.translations[key][this.currentLang];
      }
    });
    document.documentElement.lang = this.currentLang === 'en' ? 'en' : 'pt';
  },

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', this.currentLang);
    this.apply();
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = this.currentLang === 'en' ? 'PT' : 'EN';
  },

  createToggle() {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;
    const toggle = document.createElement('a');
    toggle.id = 'lang-toggle';
    toggle.href = '#';
    toggle.textContent = this.currentLang === 'en' ? 'PT' : 'EN';
    toggle.style.cssText = 'font-size:0.7rem;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;border:1px solid var(--line-light);padding:4px 10px;border-radius:100px;cursor:pointer;color:var(--text-secondary);background:none;margin-left:4px;';
    toggle.addEventListener('mouseover', () => { toggle.style.borderColor = 'var(--primary)'; toggle.style.color = 'var(--primary)'; });
    toggle.addEventListener('mouseout', () => { toggle.style.borderColor = ''; toggle.style.color = ''; });
    toggle.addEventListener('click', (e) => { e.preventDefault(); this.toggle(); });
    navLinks.appendChild(toggle);
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
