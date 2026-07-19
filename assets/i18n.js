const i18n = {
  currentLang: localStorage.getItem('lang') || 'en',

  translations: {
    'nav-brand': { en: 'THE <span>TRANSFORMATION LAB</span>', pt: 'THE <span>TRANSFORMATION LAB</span>' },
    'nav-resume': { en: 'Resume', pt: 'Currículo' },
    'nav-about': { en: 'About', pt: 'Sobre' },
    'nav-portfolio': { en: 'Portfolio', pt: 'Portfólio' },
    'nav-contact': { en: 'Contact', pt: 'Contato' },

    'hero-eyebrow': { en: 'Executive Portfolio · Business Transformation', pt: 'Portfólio Executivo · Business Transformation' },
    'hero-title': { en: 'Gabriele <span class="gold">Miranda</span>', pt: 'Gabriele <span class="gold">Miranda</span>' },
    'hero-subtitle': { en: 'Business Transformation &amp; Operational Excellence Leader', pt: 'Líder em Business Transformation &amp; Excelência Operacional' },
    'hero-desc': { en: 'This portfolio brings together the <strong>21 business cases</strong> most representative of my career in Business Transformation and Operational Excellence — each connecting strategy, processes, people, and performance management to deliver measurable outcomes in multinational industries.', pt: 'Este portfólio reúne os <strong>21 business cases</strong> mais representativos da minha carreira em Business Transformation e Operational Excellence — cada um conectando estratégia, processos, pessoas e gestão da performance para gerar resultados mensuráveis em indústrias multinacionais.' },
    'hero-btn-portfolio': { en: 'Explore portfolio →', pt: 'Explorar portfólio →' },
    'hero-btn-about': { en: 'More about me →', pt: 'Mais sobre mim →' },

    'about-p1': { en: 'Throughout my career, I discovered that a company\'s competitive advantage lies not only in its processes, but in the ability to transform strategy into execution through people. My work goes beyond leading continuous improvement projects: I structure management systems, lead organizational transformation programs, strengthen process governance, and develop teams capable of sustaining long-term results.', pt: 'Ao longo da minha carreira, descobri que a vantagem competitiva de uma indústria não está apenas em seus processos, mas na capacidade de transformar estratégia em execução por meio das pessoas. Minha atuação vai além da condução de projetos de melhoria contínua: estruturo sistemas de gestão, lidero programas de transformação organizacional, fortaleço a governança dos processos e desenvolvo equipes capazes de sustentar resultados de longo prazo.' },
    'about-p2': { en: 'Key results include reducing operational inefficiency from <strong>12% to 2%</strong> at Michelin, increasing operational capacity by <strong>130%</strong> at Moove, and reducing industrial scrap by <strong>50%</strong> at Knauf.', pt: 'Entre os principais resultados destacam-se a redução da ineficiência operacional de <strong>12% para 2%</strong> na Michelin, o aumento de <strong>130%</strong> da capacidade operacional na Moove, e a redução de <strong>50%</strong> no refugo industrial na Knauf.' },
    'about-btn-resume': { en: 'Full resume →', pt: 'Currículo completo →' },

    'tag-opex': { en: 'Operational Excellence', pt: 'Excelência Operacional' },
    'tag-ci': { en: 'Continuous Improvement', pt: 'Melhoria Contínua' },
    'tag-lss': { en: 'Lean Six Sigma', pt: 'Lean Six Sigma' },
    'tag-digital': { en: 'Digital Transformation', pt: 'Transformação Digital' },
    'tag-cm': { en: 'Change Management', pt: 'Gestão de Mudanças' },
    'tag-kpi': { en: 'KPI Governance', pt: 'Governança de KPI' },
    'tag-bpm': { en: 'Process Redesign', pt: 'Redesenho de Processos' },
    'tag-people': { en: 'People Development', pt: 'Desenvolvimento de Pessoas' },

    'featured-eyebrow': { en: 'Featured real-world case', pt: 'Case real em destaque' },
    'featured-title': { en: 'Product Availability Transformation', pt: 'Transformação de Disponibilidade de Produto' },
    'featured-desc': { en: 'Cross-functional transformation reducing product unavailability from 12% to 2% in approximately two months.', pt: 'Transformação multifuncional reduzindo a indisponibilidade de produto de 12% para 2% em aproximadamente dois meses.' },
    'featured-btn': { en: 'Explore the case →', pt: 'Explorar o case →' },
    'metric-unav': { en: 'Unavailability', pt: 'Indisponibilidade' },
    'metric-red': { en: 'Relative reduction', pt: 'Redução relativa' },
    'metric-value': { en: 'Identified value opportunity', pt: 'Oportunidade identificada' },
    'metric-time': { en: 'Delivery period', pt: 'Período de entrega' },

    'method-eyebrow': { en: 'Executive Method', pt: 'Método Executivo' },
    'method-title': { en: 'Discover. Diagnose. Prioritize.<br>Design. Deliver. Sustain.', pt: 'Descobrir. Diagnosticar. Priorizar.<br>Desenhar. Entregar. Sustentar.' },

    'logos-eyebrow': { en: 'Experience Across', pt: 'Experiência em' },
    'logos-title': { en: 'Trusted by Industry Leaders', pt: 'Parceiros da Indústria' },

    'portfolio-eyebrow': { en: 'Portfolio', pt: 'Portfólio' },
    'portfolio-title': { en: '21 Business Cases', pt: '21 Business Cases' },

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

    'footer-text': { en: '© 2026 Gabriele Miranda', pt: '© 2026 Gabriele Miranda' },
    'footer-email': { en: 'Email', pt: 'Email' },
    'footer-linkedin': { en: 'LinkedIn', pt: 'LinkedIn' },

    'about-hero-eyebrow': { en: 'About', pt: 'Sobre' },
    'about-hero-title': { en: 'Gabriele <span class="gold">Miranda</span>', pt: 'Gabriele <span class="gold">Miranda</span>' },
    'about-hero-desc': { en: 'Chemical Engineer and transformation leader with experience in operational excellence, continuous improvement, process redesign, digitalization, governance, and people development in multinational industrial environments.', pt: 'Engenheira Química e líder de transformação com experiência em excelência operacional, melhoria contínua, redesenho de processos, digitalização, governança e desenvolvimento de pessoas em ambientes industriais multinacionais.' },
    'about-section-title': { en: 'Executive positioning', pt: 'Posicionamento executivo' },
    'about-section-desc': { en: 'My work connects strategy, processes, people, and performance to turn complex operational challenges into measurable and sustainable business outcomes.', pt: 'Meu trabalho conecta estratégia, processos, pessoas e performance para transformar desafios operacionais complexos em resultados de negócio mensuráveis e sustentáveis.' },
    'about-btn-resume': { en: 'Full resume →', pt: 'Currículo completo →' },
    'about-btn-portfolio': { en: '← Portfolio', pt: '← Portfólio' },

    'about-i18n': { en: 'About', pt: 'Sobre' },
    'about-p1b': { en: 'In less than 10 years, I evolved from trainee to executive manager across four major multinationals, leading increasingly complex operations and teams in the manufacturing industry. I have led over 50 transformation initiatives in multinational companies, delivering significant gains in productivity, quality, safety, availability, operational efficiency, and business value generation.', pt: 'Em menos de 10 anos, evoluí de trainee para gerente executiva em quatro multinacionais de grande porte, liderando operações e equipes cada vez mais complexas na indústria de transformação. Liderei mais de 50 iniciativas de transformação em empresas multinacionais, promovendo ganhos expressivos em produtividade, qualidade, segurança, disponibilidade, eficiência operacional e geração de valor para o negócio.' },
    'about-p1c': { en: 'Key results include reducing operational inefficiency from 12% to 2% at Michelin through process restructuring and performance management; increasing operational capacity by 130% at Moove using VOC and Design Thinking; and reducing scrap by 50% at Knauf through BPMN, Lean Manufacturing, and DMAIC.', pt: 'Entre meus principais resultados destacam-se a redução da ineficiência operacional de 12% para 2% na Michelin por meio da reestruturação de processos e gestão da performance; o aumento de 130% da capacidade operacional na Moove utilizando VOC e Design Thinking; e a redução de 50% no refugo através da implantação de BPMN, Lean Manufacturing e DMAIC.' },
    'about-p1d': { en: 'My leadership combines strategic thinking, analytical capability, and a strong execution orientation. I use Lean Manufacturing, Six Sigma Green Belt, BPMN, DMAIC, Design Thinking, and VOC as means to generate impact. I believe excellent processes only produce consistent results when supported by a strong culture, prepared leadership, and engaged teams.', pt: 'Minha forma de liderar combina pensamento estratégico, capacidade analítica e forte orientação para execução. Utilizo metodologias como Lean Manufacturing, Six Sigma Green Belt, BPMN, DMAIC, Design Thinking e VOC como meios para gerar impacto. Acredito que processos excelentes somente produzem resultados consistentes quando existe uma cultura forte, liderança preparada e equipes engajadas.' },
    'about-p1e': { en: 'I am currently seeking opportunities in Continuous Improvement Management, Business Transformation, and Manufacturing Excellence leadership positions.', pt: 'Atualmente busco contribuir em posições de Gerência de Melhoria Contínua e Business Transformation, Manufacturing Excellence.' },

    'exp-i18n': { en: 'Experience', pt: 'Experiência' },
    'job1-title': { en: 'Operations Manager', pt: 'Gerente de Operações' },
    'job1-dates': { en: 'Aug 2024 - Present · 2 years', pt: 'ago de 2024 - o momento · 2 anos' },
    'job1-desc': { en: 'Strategic leadership of industrial operations in a high-complexity environment, driving operational transformation initiatives focused on operational excellence, performance management, leadership development, and business value generation.', pt: 'Responsável pela liderança estratégica de operações industriais em ambiente de alta complexidade, conduzindo iniciativas de transformação operacional com foco em excelência operacional, gestão da performance, desenvolvimento de lideranças e geração de valor para o negócio.' },
    'job1-b1': { en: 'Led an operational transformation that reduced production inefficiency from 12% to 2% in just two months through process restructuring, performance management, and team integration.', pt: 'Liderei uma transformação operacional que reduziu a ineficiência produtiva de 12% para 2% em apenas dois meses, por meio da reestruturação de processos, gestão da performance e integração entre equipes.' },
    'job1-b2': { en: 'Managed the strategic investment portfolio (CAPEX and OPEX), prioritizing initiatives based on financial return, operational impact, and business alignment — achieving over R$ 1M in OPEX reduction.', pt: 'Gerenciei o portfólio estratégico de investimentos (CAPEX e OPEX), priorizando iniciativas com base em retorno financeiro, impacto operacional e alinhamento aos objetivos do negócio, com resultado factual de diminuição de OPEX em mais de R$ 1M.' },
    'job1-b3': { en: 'Led transformation projects focused on productivity increase, loss reduction, process optimization, and industrial efficiency using Lean Manufacturing, BPMN, data analysis, and structured continuous improvement methodologies.', pt: 'Conduzi projetos de transformação voltados para aumento de produtividade, redução de perdas, otimização de processos e melhoria da eficiência industrial, utilizando Lean Manufacturing, BPMN, análise de dados e metodologias estruturadas de melhoria contínua.' },
    'job1-b4': { en: 'Structured performance management routines based on strategic indicators (SQCDMP), strengthening data-driven decision-making, operational governance, and result predictability.', pt: 'Estruturei rotinas de gestão da performance baseadas em indicadores estratégicos (SQCDMP), fortalecendo a tomada de decisão orientada por dados, a governança operacional e a previsibilidade dos resultados.' },
    'job1-b5': { en: 'Worked cross-functionally with Production, Engineering, Quality, Logistics, and Maintenance, promoting stakeholder alignment and accelerating strategic initiative implementation.', pt: 'Atuei de forma transversal junto às áreas de Produção, Engenharia, Qualidade, Logística e Manutenção, promovendo alinhamento entre stakeholders e acelerando a implementação de iniciativas estratégicas.' },
    'job1-b6': { en: 'Developed leadership and strengthened high-performance culture through close management, development plans, continuous feedback, and indicator monitoring — resulting in two employees promoted to managers.', pt: 'Desenvolvi lideranças e fortaleci a cultura de alta performance por meio de gestão próxima, planos de desenvolvimento, feedback contínuo e acompanhamento de indicadores, com resultado comprovado em dois funcionários promovidos à gestores.' },

    'job2-title': { en: 'Regional Continuous Improvement Specialist', pt: 'Especialista de Melhoria Contínua Regional' },
    'job2-dates': { en: 'Jan 2023 - Aug 2024 · 1 yr 8 mos', pt: 'jan de 2023 - ago de 2024 · 1 ano 8 meses' },
    'job2-desc': { en: 'Corporate role leading Business Transformation and Operational Excellence initiatives, driving strategic projects focused on process standardization, digitalization, continuous improvement, and operational efficiency across different business units.', pt: 'Atuação corporativa liderando iniciativas de Business Transformation e Operational Excellence, conduzindo projetos estratégicos voltados à padronização de processos, digitalização, melhoria contínua e aumento da eficiência operacional em diferentes unidades da organização.' },
    'job2-b1': { en: 'Structured and implemented the company\'s process architecture using BPMN, promoting standardization, governance, and greater integration between business areas.', pt: 'Estruturei e implementei a arquitetura de processos da companhia utilizando BPMN, promovendo padronização, governança e maior integração entre áreas de negócio.' },
    'job2-b2': { en: 'Led operational transformation initiatives that reduced industrial scrap by 50% through Lean Manufacturing, DMAIC, data analysis, and continuous improvement, ensuring sustainable results.', pt: 'Liderei iniciativas de transformação operacional que reduziram o refugo industrial em 50%, por meio da aplicação de Lean Manufacturing, DMAIC, análise de dados e melhoria contínua, garantindo resultados sustentáveis.' },
    'job2-b3': { en: 'Conducted organizational diagnostics using Voice of Customer (VOC) and NPS to identify improvement opportunities and direct initiatives aligned with business needs.', pt: 'Conduzi diagnósticos organizacionais utilizando Voice of Customer (VOC) e NPS para identificar oportunidades de melhoria e direcionar iniciativas alinhadas às necessidades do negócio.' },
    'job2-b4': { en: 'Acted as a facilitator of the operational excellence culture, training teams and leadership in Lean Manufacturing, continuous improvement, and process management.', pt: 'Atuei como facilitadora da cultura de excelência operacional, capacitando equipes e lideranças em Lean Manufacturing, melhoria contínua e gestão por processos.' },
    'job2-b5': { en: 'Managed cross-functional projects involving different stakeholders, promoting strategic alignment, change management, and disciplined execution of transformation initiatives.', pt: 'Gerenciei projetos multifuncionais envolvendo diferentes stakeholders, promovendo alinhamento estratégico, gestão da mudança e execução disciplinada das iniciativas de transformação.' },
    'job2-b6': { en: 'Led the digitalization and evolution of corporate processes, increasing operational efficiency, information reliability, and data-driven decision-making capability.', pt: 'Liderei a digitalização e evolução dos processos corporativos, aumentando a eficiência operacional, a confiabilidade das informações e a capacidade de tomada de decisão baseada em dados.' },

    'job3-title': { en: 'Production and Maintenance Coordinator', pt: 'Coordenadora de Produção e Manutenção' },
    'job3-dates': { en: 'Sep 2022 - Jan 2023 · 5 months', pt: 'set de 2022 - jan de 2023 · 5 meses' },
    'job3-desc': { en: 'Started my industrial leadership trajectory as coordinator, managing production operations, team development, and strengthening operational discipline in a high-complexity industrial environment.', pt: 'Iniciei minha trajetória em liderança industrial como coordenadora atuando na gestão de operações produtivas, desenvolvimento de equipes e fortalecimento da disciplina operacional em ambiente industrial de alta complexidade.' },
    'job3-b1': { en: 'Managed operational teams, promoting safety, people development, and continuous improvement, ensuring production, quality, and performance targets.', pt: 'Gerenciei equipes operacionais, promovendo segurança, desenvolvimento de pessoas e melhoria contínua, assegurando o cumprimento das metas de produção, qualidade e desempenho.' },
    'job3-b2': { en: 'Coordinated production activities, ensuring operational stability, process standardization, and adherence to performance indicators.', pt: 'Coordenei a execução das atividades produtivas, garantindo estabilidade operacional, padronização dos processos e aderência aos indicadores de performance.' },
    'job3-b3': { en: 'Worked with cross-functional areas to solve operational problems, eliminate waste, and increase production process efficiency.', pt: 'Atuei em conjunto com áreas multifuncionais para solucionar problemas operacionais, eliminar desperdícios e aumentar a eficiência dos processos produtivos.' },
    'job3-b4': { en: 'Developed performance monitoring routines through operational indicators, supporting decision-making and corrective/preventive actions.', pt: 'Desenvolvi rotinas de acompanhamento da performance por meio de indicadores operacionais, apoiando a tomada de decisão e a implementação de ações corretivas e preventivas.' },

    'job4-title': { en: 'Process Engineer', pt: 'Engenheira de Processos' },
    'job4-dates': { en: 'Jun 2022 - Aug 2022 · 3 months', pt: 'jun de 2022 - ago de 2022 · 3 meses' },

    'job5-title': { en: 'Production Supervisor', pt: 'Supervisora de Produção' },
    'job5-dates': { en: 'Mar 2021 - Jul 2022 · 1 yr 5 mos', pt: 'mar de 2021 - jul de 2022 · 1 ano 5 meses' },
    'job5-desc': { en: 'Began my leadership trajectory managing operational teams and production performance, driving operational transformation initiatives focused on productivity, safety, quality, and people development.', pt: 'Iniciei minha trajetória de liderança de equipes operacionais e pela gestão da performance da produção, conduzindo iniciativas de transformação operacional com foco em produtividade, segurança, qualidade e desenvolvimento de pessoas.' },
    'job5-b1': { en: 'Led the complete restructuring of a production process using Voice of Customer (VOC) and Design Thinking, increasing operational capacity by 130% without significant infrastructure investments.', pt: 'Liderei a reestruturação completa de um processo produtivo utilizando Voice of Customer (VOC) e Design Thinking, elevando a capacidade operacional em 130%, sem necessidade de investimentos significativos em infraestrutura.' },
    'job5-b2': { en: 'Managed multidisciplinary teams, promoting people development, safety culture, and continuous improvement, aligning team performance with strategic operational goals.', pt: 'Gerenciei equipes multidisciplinares, promovendo desenvolvimento de pessoas, fortalecimento da cultura de segurança e melhoria contínua, alinhando o desempenho das equipes às metas estratégicas da operação.' },
    'job5-b3': { en: 'Structured performance management routines based on operational indicators, strengthening data-driven decision-making and action plan execution discipline.', pt: 'Estruturei rotinas de gestão da performance baseadas em indicadores operacionais, fortalecendo a tomada de decisão orientada por dados e a disciplina na execução dos planos de ação.' },

    'job6-title': { en: 'Continuous Improvement Analyst', pt: 'Analista de Melhoria Contínua' },
    'job6-dates': { en: 'Aug 2018 - Feb 2021 · 2 yrs 7 mos', pt: 'ago de 2018 - fev de 2021 · 2 anos 7 meses' },
    'job6-desc': { en: 'Responsible for leading continuous improvement initiatives focused on productivity increase, process optimization, and business value generation, working cross-functionally with operational areas.', pt: 'Responsável pela condução de iniciativas de melhoria contínua voltadas para aumento da produtividade, otimização dos processos e geração de valor para o negócio, atuando de forma transversal junto às áreas operacionais.' },
    'job6-b1': { en: 'Led continuous improvement projects using Lean Manufacturing, VOC, Design Thinking, and structured methodologies for waste elimination and operational efficiency increase.', pt: 'Liderei projetos de melhoria contínua utilizando Lean Manufacturing, VOC, Design Thinking e metodologias estruturadas para eliminação de desperdícios e aumento da eficiência operacional.' },
    'job6-b2': { en: 'Conducted process analysis, bottleneck identification, and sustainable solution implementation, supporting the evolution of operational performance indicators.', pt: 'Conduzi análises de processos, identificação de gargalos e implementação de soluções sustentáveis, apoiando a evolução dos indicadores de desempenho da operação.' },
    'job6-b3': { en: 'Worked with Production, Engineering, Quality, and Maintenance areas, promoting stakeholder alignment and accelerating improvement initiative implementation.', pt: 'Atuei junto às áreas de Produção, Engenharia, Qualidade e Manutenção, promovendo alinhamento entre stakeholders e acelerando a implementação das iniciativas de melhoria.' },

    'job7-title': { en: 'Trainee', pt: 'Trainee' },
    'job7-dates': { en: 'Jan 2017 - Aug 2018 · 1 yr 8 mos', pt: 'jan de 2017 - ago de 2018 · 1 ano 8 meses' },

    'job8-title': { en: 'Undergraduate Researcher', pt: 'Pesquisadora de Iniciação Científica' },
    'job8-dates': { en: 'Nov 2012 - Jul 2014 · 1 yr 9 mos', pt: 'nov de 2012 - jul de 2014 · 1 ano 9 meses' },
    'job8-b1': { en: 'Synthesized catalysts and performed analysis using TPD, X-RAY, ASAP 2010 and catalytic tests in chromatograph.', pt: 'Síntese de catalisadores e análises utilizando TPD, RAIO-X, ASAP 2010 e testes catalíticos em cromatógrafo.' },
    'job8-b2': { en: 'Part of a Petrobras project focused on finding larger pores for zeolites used in crude-oil catalysis.', pt: 'Parte de um projeto da Petrobras focado em encontrar poros maiores para zeólitas usadas na catálise de petróleo.' },

    'edu-i18n': { en: 'Education', pt: 'Formação Acadêmica' },
    'edu1-title': { en: 'Bachelor\'s in Chemical Engineering', pt: 'Bacharelado em Engenharia Química' },
    'edu1-dates': { en: '2011 – 2020', pt: '2011 – 2020' },
    'edu1-desc': { en: 'Chemical Engineering degree with solid foundation in data analysis, quality control, and unit operations optimization. Thesis focused on innovation in automotive grease production process.', pt: 'Graduado em Engenharia Química com sólida base em análise de dados, controle de qualidade e otimização de operações unitárias. Conclusão de TCC com foco em Inovação no processo produtivo de fabricação de Graxas automobilísticas.' },
    'edu2-title': { en: 'Sandwich Exchange Program — Science Without Borders', pt: 'Graduação Sanduíche - Ciência Sem Fronteiras' },
    'edu2-dates': { en: 'Aug 2014 – Jan 2016', pt: 'ago de 2014 – jan de 2016' },
    'edu2-desc': { en: 'One and a half years studying chemical engineering courses in New York. Participated in a consulting project for a small business, structuring the business model and strategic plan.', pt: 'Realizei uma graduação sanduíche onde pude ficar 1 ano e meio estudando engenharia química em Nova Iorque. Participei de um projeto de consultoria para uma micro empresa.' },

    'lang-i18n': { en: 'Languages', pt: 'Idiomas' },
    'lang-en': { en: '— Fluent', pt: '— Fluente' },
    'lang-pt': { en: '— Native', pt: '— Fluente (nativo)' },
    'lang-es': { en: '— Basic to Intermediate', pt: '— Básico a intermediário' },

    'certs-i18n': { en: 'Certifications', pt: 'Certificados' },
    'cert1': { en: 'Lean Six Sigma Green Belt', pt: 'Green Belt Lean Six Sigma' },
    'cert2': { en: 'BPMN - Business Process Model and Notation', pt: 'BPMN - Modelo de Processo de Negócios e Notação' },
    'cert3': { en: 'Scrum Master', pt: 'Scrum Master' },
    'cert4': { en: 'Advanced Microsoft Excel', pt: 'Microsoft Excel Avançado' },
    'cert5': { en: 'Product Strategy', pt: 'Estratégia de Produto' },
    'cert6': { en: 'Digital Product Leadership', pt: 'Digital Product Leadership' },
    'cert7': { en: 'AI in Digital Business', pt: 'IA em Negócios Digitais' },
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
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const toggle = document.createElement('a');
    toggle.id = 'lang-toggle';
    toggle.href = '#';
    toggle.textContent = this.currentLang === 'en' ? 'PT' : 'EN';
    toggle.style.cssText = 'font-size:0.75rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;border:1px solid var(--line-light);padding:4px 12px;border-radius:100px;transition:color 0.2s,border-color 0.2s;margin-left:8px;';
    toggle.onmouseover = () => { toggle.style.borderColor = 'var(--brass-dark)'; toggle.style.color = 'var(--brass)'; };
    toggle.onmouseout = () => { toggle.style.borderColor = ''; toggle.style.color = ''; };
    toggle.addEventListener('click', (e) => { e.preventDefault(); this.toggle(); });
    nav.appendChild(toggle);
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
