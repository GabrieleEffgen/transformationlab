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
    'portfolio-title': { en: '22 Business Cases', pt: '22 Business Cases' },
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

    // CASE DISCLAIMERS
    'case01-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case02-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case03-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case04-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case05-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case06-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case07-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case08-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case09-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case10-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case11-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case12-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case13-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case14-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case15-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case16-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case17-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case18-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case19-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case20-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case21-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },
    'case22-disc': { en: 'Disclaimer: This case is fictional or anonymized and is intended to demonstrate structured executive problem-solving.', pt: 'Aviso: Este case é fictício ou anonimizado e tem como objetivo demonstrar resolução estruturada de problemas executivos.' },

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
