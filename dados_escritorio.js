// DADOS DO ESCRITÓRIO VIRTUAL — ATUALIZADO AUTOMATICAMENTE
// Edson: NÃO edite este arquivo. O Claude atualiza via CLAUDE_CODE.
const DADOS = {
  "sessao": 68,
  "data": "17/05/2026",
  "total": 95,
  "horas_restantes": 10,
  "sprint": {
    "titulo": "EXECUÇÃO PLANO 48H ✅ → Escritório Virtual Deploy",
    "status": "5 tasks executadas ✅ | Cross-sell iniciado ✅ | DRE baseline criado ✅ | Churn investigado ✅",
    "proximo": "Deploy Vercel atualizado | Executar 5 mensagens cross-sell | Jessica consolidar receita maio | Louis preencher DRE"
  },
  "paineis_ativos": [
    {
      "nome": "Portal Central",
      "url": "file:///Users/juniorsachetti/Meu%20Drive/CLAUDE_CODE/PORTAL_CENTRAL.html",
      "desc": "Homepage — todos os sistemas"
    },
    {
      "nome": "Painel Pedro (Checklist)",
      "url": "file:///Users/juniorsachetti/Meu%20Drive/CLAUDE_CODE/05_OPERACAO_DIARIA/PAINEIS/PEDRO_CHECKLIST.html",
      "desc": "Checklist operacional diário"
    },
    {
      "nome": "Painel Metas (Deploy pendente)",
      "url": "#deploy-gas",
      "desc": "Metas comerciais + produtos (Google Apps Script)"
    }
  ],
  "socios": [
    {
      "id": "donna",
      "nome": "DONNA",
      "role": "CEO Digital — Hub Central",
      "icon": "👩‍💼",
      "pct": 90,
      "horas": 8,
      "cor": "gold",
      "borda": "gold",
      "local": "01_CORE/agentes/donna/",
      "descricao": "Hub central de toda a empresa. Segundo cérebro do Edson — aprende como ele fala, decide, monta projetos, quais taxas e métricas usa. Coordena todos os especialistas, gera briefings, escreve mensagens, audita o Pedro, e apresenta oportunidades. Nunca decide sozinha — apresenta opções, Edson valida.",
      "alimentar": [
        "Qualquer pergunta ou pedido do Edson",
        "Situação de cliente (nome, produto, histórico)",
        "Pedido de briefing matinal: diz 'briefing'",
        "Pedido de review: diz 'review semanal'",
        "Pedido de mensagem: diz 'mensagem pro [nome]'"
      ],
      "entrega": [
        "Briefing matinal (urgências + agenda + números + sugestão)",
        "Lista diária do Pedro (tarefas até 12h + tarde)",
        "Dashboard domingo (KPIs + agenda + prioridades da semana)",
        "Review semanal consolidado (todos os setores)",
        "Mensagens de WhatsApp prontas para validação",
        "Alertas de inadimplência, cross-sell e oportunidades"
      ],
      "como_usar": "Claude Code → /donna-vincent | Rotina matinal: todo dia 8h",
      "itens": [
        { "txt": "DONNA.md v2 (identidade, alertas, anti-Frankenstein)", "ok": true },
        { "txt": "CEO_DIGITAL.md v2", "ok": true },
        { "txt": "Acordo de Parceria (firmado 29/03/2026)", "ok": true },
        { "txt": "Sala de Guerra (8 tipos sessão)", "ok": true },
        { "txt": "Reunião domingo 2h (sala de guerra + dashboard)", "ok": true },
        { "txt": "QUESTIONARIO_VINCENT.md — 100% completo", "ok": true },
        { "txt": "Análise completa 'palheiro' (15/05/2026)", "ok": true },
        { "txt": "Portal Central criado (16/05/2026)", "ok": true },
        { "txt": "Sessão 68: Plano 48h executado (17/05)", "ok": true },
        { "txt": "Cross-sell: 5 mensagens prontas (Juca, Kelly, Roseti)", "ok": true },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false },
        { "txt": "Briefing matinal automático (Make.com)", "ok": false }
      ]
    },
    {
      "id": "harvey",
      "nome": "HARVEY",
      "role": "Edson — O Closer",
      "icon": "👨‍💼",
      "pct": 100,
      "horas": 0,
      "cor": "green",
      "borda": "green",
      "local": "Escritório Vincent + campo",
      "status_label": "ATIVO",
      "status_sub": "Vendendo",
      "descricao": "Harvey vende. O resto da equipe cuida de tudo pra ele vender tranquilo. 3-5 reuniões por dia. Gestão: 1h30/semana (segunda + domingo com Donna). Meta: R$120k/mês.",
      "alimentar": [
        "Projetos financeiros preparados pelo Pedro",
        "Briefings pré-AP do SOP 006",
        "Propostas validadas da Jessica/Alex/Rachel"
      ],
      "entrega": [
        "APs realizadas (meta: 5+/semana)",
        "FCs fechados (meta: conversão 65%)",
        "Feedbacks das reuniões para Donna"
      ],
      "como_usar": "Edson É o Harvey. Nenhuma configuração necessária.",
      "itens": []
    },
    {
      "id": "mike",
      "nome": "MIKE (PEDRO)",
      "role": "Operacional — Braço Direito",
      "icon": "📋",
      "pct": 85,
      "horas": 3,
      "cor": "green",
      "borda": "blue",
      "local": "Escritório Vincent + remoto",
      "descricao": "Pedro executa o sistema. Follow-up de leads, cobranças de inadimplentes, criação de pastas, briefings pré-AP, cadastros no APX e DataCrazy. Atualiza 7 planilhas de rotina. Trabalha com a lista gerada pela Donna.",
      "alimentar": [
        "Lista diária da Donna",
        "SOPs 001-013 (documentados)",
        "7 planilhas de rotina (Google Sheets)",
        "Acesso ao DataCrazy, APX e Drive"
      ],
      "entrega": [
        "Follow-ups enviados (meta: 50 contatos/semana)",
        "Inadimplentes contatados por prioridade",
        "Pastas de clientes criadas (5 subpastas padrão)",
        "Briefings pré-AP salvos no Drive",
        "Planilhas atualizadas no prazo certo"
      ],
      "como_usar": "Pedro usa Painel Pedro (PEDRO_CHECKLIST.html) diariamente às 9h",
      "rotinas": [
        { "txt": "📋 Verificar DataCrazy — inadimplência + follow-ups + confirmação de reuniões", "freq": "Diário" },
        { "txt": "📊 FLUXO_APX + PLANILHA RECS — registrar delays e novas indicações", "freq": "Diário" },
        { "txt": "🗓️ TODA SEGUNDA: reunião Edson 09h30 + atualizar planilha PLJ", "freq": "Segunda-feira" },
        { "txt": "📈 Preencher ATE SEXTA_ACOMPANHAMENTO_METAS com KPIs da semana", "freq": "Sexta/Sábado" },
        { "txt": "🔍 Atualizar INADIMPLENCIA + Gestão Apólices PG + GESTÃO Consultoria Base", "freq": "Sexta/Sábado" },
        { "txt": "💰 Atualizar Comissões Parceiros MetLife", "freq": "Até dia 5 do mês" }
      ],
      "itens": [
        { "txt": "Rotina Pedro v2 (5 tarefas/dia)", "ok": true },
        { "txt": "7 planilhas mapeadas com frequência e função", "ok": true },
        { "txt": "13 SOPs documentados", "ok": true },
        { "txt": "Painel Pedro (PEDRO_CHECKLIST.html) pronto", "ok": true },
        { "txt": "Meta 50 contatos/semana via DataCrazy API + PLANILHA RECS", "ok": true },
        { "txt": "Testar Painel Pedro v3 no n8n", "ok": false }
      ]
    }
  ],
  "especialistas": [
    {
      "id": "jessica",
      "nome": "JESSICA",
      "role": "Proteção / Seguros",
      "icon": "🛡️",
      "pct": 95,
      "horas": 2,
      "cor": "green",
      "local": "01_CORE/agentes/jessica/",
      "descricao": "Expert em MetLife, MAG e AZOS. Sabe tudo sobre coberturas, comissões, subscrição, reajustes e objeções. Compara as 3 seguradoras e recomenda o produto certo para cada perfil de cliente. MetLife: R$18.978/mês médio (54.8% da receita total).",
      "alimentar": [
        "Dados do cliente: idade, renda, capital desejado, dependentes",
        "Objetivo: proteção, resgate, herança, renda",
        "Orçamento mensal disponível",
        "Condições de saúde relevantes"
      ],
      "entrega": [
        "Comparativo MetLife vs MAG vs AZOS personalizado",
        "Proposta com prêmio mensal por seguradora",
        "Script de apresentação e rebatimento de objeções",
        "Alerta de inadimplência e SOP de cobrança"
      ],
      "como_usar": "Claude Code: /especialista-seguro-vida | Skill instalada ✅",
      "itens": [
        { "txt": "Base MetLife + MAG + AZOS completas", "ok": true },
        { "txt": "JESSICA_PROTECAO_COMPLETA.md", "ok": true },
        { "txt": "SOP 001 Inadimplência MetLife (validado)", "ok": true },
        { "txt": "Skill /especialista-seguro-vida instalada", "ok": true },
        { "txt": "MetLife: R$379.568,59 total (Set/24-Abr/26)", "ok": true },
        { "txt": "11 inadimplentes 61+ dias mapeados (R$29.9k risco)", "ok": true },
        { "txt": "Template consolidação receita maio criado", "ok": true },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false }
      ]
    },
    {
      "id": "alex",
      "nome": "ALEX",
      "role": "Investimentos",
      "icon": "📈",
      "pct": 98,
      "horas": 1,
      "cor": "green",
      "local": "01_CORE/agentes/alex/",
      "descricao": "Expert em BTG Pactual e Dominion. Sabe alocação por perfil, suitability, renda fixa, Dominion internacional, cross-sell timing e como falar com investidores de diferentes níveis. Carteira: 264 contas, R$29M AUM.",
      "alimentar": [
        "Perfil do cliente: patrimônio atual, perfil de risco, horizonte",
        "Objetivo: crescimento, renda, proteção patrimonial, internacional",
        "Situação atual: onde investe hoje, rentabilidade"
      ],
      "entrega": [
        "Alocação recomendada (3 perfis: conservador, moderado, agressivo)",
        "Simulação Dominion com projeção em dólares",
        "Timing de cross-sell (13 eventos de vida)",
        "Argumentos para migrar para BTG"
      ],
      "como_usar": "Chat direto → mencione 'Alex' + situação do cliente | Base: ALEX_INVESTIMENTOS_COMPLETA.md",
      "itens": [
        { "txt": "Carteira BTG (264 contas, R$29M)", "ok": true },
        { "txt": "ALEX_INVESTIMENTOS_COMPLETA.md (10 partes)", "ok": true },
        { "txt": "Cross-sell timing (13 eventos de vida)", "ok": true },
        { "txt": "172 clientes BTG SEM MetLife (R$4-6k/mês potencial)", "ok": true },
        { "txt": "103 contas BTG com PL=0 (churn investigar)", "ok": true },
        { "txt": "Roteiro investigação churn 3 contas criado", "ok": true },
        { "txt": "Simuladores Dominion (Kelly R$886k pronto)", "ok": true },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false }
      ]
    },
    {
      "id": "rachel",
      "nome": "RACHEL",
      "role": "Consultoria / PLJ",
      "icon": "📊",
      "pct": 98,
      "horas": 1,
      "cor": "green",
      "local": "01_CORE/agentes/rachel/",
      "descricao": "Expert em PLJ, holdings familiares, PGBL/VGBL e planejamento tributário. Gerencia 19 clientes PLJ ativos (R$17M patrimônio total). Sabe quando oferecer consultoria e como calcular o ganho fiscal.",
      "alimentar": [
        "Dados do cliente: faturamento mensal, regime tributário",
        "Patrimônio: imóveis, empresas, investimentos",
        "Objetivos: reduzir imposto, blindar patrimônio, aposentadoria"
      ],
      "entrega": [
        "Análise PLJ: Simples vs PLJ (breakeven R$15.960/mês)",
        "Planejamento tributário personalizado",
        "Relatório AC mensal por cliente",
        "Cross-sell Rachel→Alex→Jessica"
      ],
      "como_usar": "Chat direto → mencione 'Rachel' + situação do cliente",
      "rotinas": [
        { "txt": "📅 Verificar agenda semanal dos 19 clientes PLJ", "freq": "Segunda-feira" },
        { "txt": "📊 Preparar relatório pós-reunião PLJ", "freq": "Após cada reunião" },
        { "txt": "🔔 Alertar Edson: reuniões AC devidas no mês", "freq": "Início do mês" }
      ],
      "itens": [
        { "txt": "19 clientes PLJ ativos (R$17M patrimônio)", "ok": true },
        { "txt": "RACHEL_CONSULTORIA_COMPLETA.md", "ok": true },
        { "txt": "Jhonas Mendes XU R$1.900 (deadline 20/05)", "ok": true },
        { "txt": "Vitor Maia: sinistro AZOS + PLJ pendente", "ok": true },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false }
      ]
    },
    {
      "id": "robert",
      "nome": "ROBERT",
      "role": "Parcerias",
      "icon": "🤝",
      "pct": 85,
      "horas": 2,
      "cor": "green",
      "local": "05_OPERACAO_DIARIA/GERENTES/GERENTE_PARCERIAS.md",
      "descricao": "Gestor de parcerias externas. Consórcios, advocacia, contabilidade, imóveis. Sabe quando indicar cada parceiro, qual comissão esperar e como abordar o cliente.",
      "alimentar": [
        "Necessidade identificada no cliente",
        "Perfil do cliente (PJ ou PF, patrimônio, objetivo)",
        "Parceiro a acionar"
      ],
      "entrega": [
        "Indicação qualificada com briefing do cliente",
        "Script de abordagem para o parceiro",
        "Estimativa de comissão (1% da carta para consórcios)",
        "Tags no DataCrazy para rastrear a indicação"
      ],
      "como_usar": "Chat direto → mencione 'Robert' + necessidade do cliente",
      "itens": [
        { "txt": "8 parceiros mapeados + Scripts", "ok": true },
        { "txt": "Consórcios: 1% carta (Jardel + Ramon)", "ok": true },
        { "txt": "ROBERT_BASE_MERCADO.md", "ok": true },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false }
      ]
    }
  ],
  "operacoes": [
    {
      "id": "samantha",
      "nome": "SAMANTHA",
      "role": "Marketing Digital",
      "icon": "📱",
      "pct": 98,
      "horas": 1,
      "cor": "green",
      "local": "vincent-dashboard.netlify.app",
      "link": "https://vincent-dashboard.netlify.app",
      "link_label": "🔗 Abrir Vincent Agency",
      "descricao": "Agência de marketing digital da Vincent. Analisa Instagram, YouTube e TikTok. Gera scorecard semanal (nota A-F), tendências de hashtags, melhores horários e sugestões de conteúdo.",
      "alimentar": [
        "Mac ligado às 22h (n8n roda automaticamente)",
        "CSV do TikTok Analytics (baixar toda segunda)"
      ],
      "entrega": [
        "Scorecard semanal: nota A-F com 5 pilares",
        "Trending: hashtags do nicho + melhores horários",
        "30 ideias de conteúdo baseadas nas APs",
        "Análise semanal para reunião domingo"
      ],
      "como_usar": "vincent-dashboard.netlify.app → aba Samantha | n8n automático 22h",
      "itens": [
        { "txt": "vincent-dashboard NO AR", "ok": true },
        { "txt": "SAMANTHA_BASE_MERCADO.md", "ok": true },
        { "txt": "n8n: Instagram + YouTube + NewsAPI", "ok": true },
        { "txt": "Scorecard Samantha (A-F)", "ok": true },
        { "txt": "Publicar workflow n8n", "ok": false }
      ]
    },
    {
      "id": "scottie",
      "nome": "SCOTTIE PIERSON",
      "role": "Vendas / Funil / Role-play",
      "icon": "🎯",
      "pct": 50,
      "horas": 10,
      "cor": "yellow",
      "local": "05_OPERACAO_DIARIA/AGENTES/SCOTTIE_BASE/",
      "descricao": "Expert em otimização de funil comercial. Analisa transcrições de 82 APs, mapeia conversão AP→FC (44%), identifica vazamentos por etapa e prepara scripts baseados em reuniões reais. Conduz role-play semanal com Edson para treinar rebatidas de objeções. Responsável por subir taxa de conversão de 44% para 65%.",
      "alimentar": [
        "Transcrições de AP e FC (Plaud)",
        "Taxas de conversão por etapa do funil",
        "Objeções mais comuns dos clientes",
        "Feedback de reuniões (o que funcionou/não funcionou)"
      ],
      "entrega": [
        "Scripts de AP e FC baseados em reuniões reais (top performers)",
        "Análise semanal de objeções com rebatidas testadas",
        "Identificação de vazamentos no funil (onde perdem leads)",
        "Role-play gravado + feedback para Edson",
        "Plano de ação para subir conversão 44% → 65%"
      ],
      "como_usar": "Chat direto → mencione 'Scottie' + etapa do funil ou objeção específica",
      "itens": [
        { "txt": "Taxa AP→FC: 44% documentada (análise 82 APs)", "ok": true },
        { "txt": "Análise completa 82 APs (transcrições Plaud)", "ok": true },
        { "txt": "Mapa de objeções + rebatidas (top 10)", "ok": false },
        { "txt": "Scripts AP e FC (base reuniões top performers)", "ok": false },
        { "txt": "Role-play vendas semanal com Edson", "ok": false },
        { "txt": "Plano conversão 44% → 65%", "ok": false }
      ]
    },
    {
      "id": "harold",
      "nome": "HAROLD GUNDERSON",
      "role": "Jurídico / Compliance",
      "icon": "⚖️",
      "pct": 60,
      "horas": 6,
      "cor": "yellow",
      "local": "07_WIKI/agentes/juridico.md",
      "descricao": "Conselheiro jurídico sênior sob demanda. Especialista em direito civil, tributário, regulatório CVM/SUSEP, LGPD e sucessório. Interpreta cenários complexos, avalia riscos legais, revisa contratos e defende clientes em negativas de sinistro. Parceiro: escritório Bettoni Advocacia.",
      "alimentar": [
        "Situação específica que requer análise jurídica",
        "Contratos ou documentos para revisão",
        "Questão regulatória SUSEP/CVM/LGPD",
        "Casos de negativa de sinistro (seguro)"
      ],
      "entrega": [
        "Análise jurídica do cenário com riscos identificados",
        "Parecer com recomendação (ir/não ir/negociar)",
        "Redação ou revisão de contratos",
        "Defesa em negativa de sinistro (argumentação técnica)",
        "Orientação sobre compliance LGPD/CVM/SUSEP"
      ],
      "como_usar": "Chat direto → mencione 'Harold' ou 'Jurídico' + situação legal",
      "itens": [
        { "txt": "JURIDICO.md v1.0", "ok": true },
        { "txt": "Escopo: CC, tributário, CVM, SUSEP, LGPD, sucessório", "ok": true },
        { "txt": "Parceiro: Bettoni Advocacia (casos complexos)", "ok": true },
        { "txt": "Base de objeções sinistro + rebatidas", "ok": false },
        { "txt": "Templates de contratos Vincent (padrão)", "ok": false },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false }
      ]
    },
    {
      "id": "katrina",
      "nome": "KATRINA",
      "role": "Auditoria / BI",
      "icon": "🔍",
      "pct": 75,
      "horas": 8,
      "cor": "yellow",
      "local": "N8N local + 05_OPERACAO_DIARIA/",
      "descricao": "O cérebro analítico. Audita o funil de vendas, cruza dados DataCrazy × Calendar × APX, analisa conversões e gera relatório operacional automático. Prepara dashboard para reunião domingo.",
      "alimentar": [
        "DataCrazy API ativa",
        "n8n rodando localmente no Mac",
        "Google Drive credencial no workflow"
      ],
      "entrega": [
        "Relatório operacional HTML diário 19h30",
        "Dashboard consolidado para reunião domingo",
        "Painel Pedro (checklist SDR)",
        "Alertas: Pedro 8h, Edson 19h30"
      ],
      "como_usar": "n8n local → importar JSON dos workflows",
      "itens": [
        { "txt": "DataCrazy API + Script Python", "ok": true },
        { "txt": "Análise 82 APs completa", "ok": true },
        { "txt": "KATRINA_BASE_MERCADO.md", "ok": true },
        { "txt": "N8N Relatório Operacional", "ok": true },
        { "txt": "Dashboard domingo (KPIs)", "ok": false }
      ]
    },
    {
      "id": "louis",
      "nome": "LOUIS",
      "role": "Financeiro / CFO",
      "icon": "💰",
      "pct": 82,
      "horas": 4,
      "cor": "green",
      "local": "05_OPERACAO_DIARIA/GERENTES/FINANCEIRO/",
      "descricao": "CFO virtual da Vincent. Acompanha receita real (R$34.6k/mês atual vs meta R$120k), DRE mensal, mapa de comissões de 8 produtos. Cuida das finanças da empresa.",
      "alimentar": [
        "Exportação MetLife CSV (comissões mensais)",
        "Relatório BTG Power BI (mensal)",
        "Dados Dominion (mensal)"
      ],
      "entrega": [
        "DRE real mensal",
        "Mapa 9 fontes receita: atual vs meta",
        "Análise de comissões 8 produtos",
        "Plano para chegar ao R$120k"
      ],
      "como_usar": "Chat direto → mencione 'Louis' + período",
      "itens": [
        { "txt": "DRE real 6 meses (Out/25-Mar/26)", "ok": true },
        { "txt": "Receita atual: R$34.6k/mês (vs meta R$120k)", "ok": true },
        { "txt": "MetLife: R$18.978/mês médio (54.8% receita)", "ok": true },
        { "txt": "Template DRE consolidado maio 2026 criado", "ok": true },
        { "txt": "DEFINICAO.md separado de CONTABIL.md", "ok": false },
        { "txt": "DRE PJ automatizado + Fluxo caixa", "ok": false }
      ]
    },
    {
      "id": "benjamin",
      "nome": "BENJAMIN",
      "role": "Tecnologia / IA",
      "icon": "⚙️",
      "pct": 45,
      "horas": 12,
      "cor": "yellow",
      "local": "Make.com + APIs externas",
      "descricao": "Especialista em Make, integrações API, Google Ads e automações. Responsável por conectar todos os sistemas da Vincent. Análise de campanhas pagas, criativos e CAC.",
      "alimentar": [
        "Processo que precisa ser automatizado",
        "APIs disponíveis (DataCrazy, BTG, MetLife)",
        "Dados de campanhas Google Ads"
      ],
      "entrega": [
        "Automações Make prontas para ativar",
        "Integrações entre sistemas documentadas",
        "Análise de campanhas: CAC, ROAS, conversão",
        "Dashboards técnicos funcionando"
      ],
      "como_usar": "Chat direto → mencione 'Benjamin' + sistema/automação",
      "itens": [
        { "txt": "Plataforma: Make (não N8N)", "ok": true },
        { "txt": "Google Ads: análise campanhas + CAC", "ok": true },
        { "txt": "TECNOLOGIA_IA.md v1.0", "ok": true },
        { "txt": "DEFINICAO.md (padrão 4 arquivos)", "ok": false },
        { "txt": "Automações Make ativas (briefing + alertas)", "ok": false }
      ]
    },
    {
      "id": "reuniao",
      "nome": "SALA DE GUERRA",
      "role": "Edson + Donna | Domingo 2h",
      "icon": "🏛️",
      "pct": 90,
      "horas": 3,
      "cor": "green",
      "local": "Claude Code sessões domingo",
      "descricao": "Reunião semanal de 2h todo domingo. Edson + Donna analisam todos os dados coletados, recebem contribuições dos agentes e definem as prioridades da semana. Dashboard pré-montado pela Katrina.",
      "alimentar": [
        "Automações executadas previamente (Katrina prepara)",
        "Dashboard consolidado (KPIs, leads, conversões, marketing, agenda)",
        "Contribuições dos agentes especialistas",
        "Histórico da semana anterior"
      ],
      "entrega": [
        "Lista de prioridades da semana",
        "Ajustes estratégicos (campanhas, abordagem, produto foco)",
        "Próximo passo para meta de faturamento",
        "Segundo cérebro atualizado (decisões registradas)"
      ],
      "como_usar": "Todo domingo → Claude Code + '/donna-vincent' + 'sala de guerra domingo'",
      "itens": [
        { "txt": "SALA_DE_GUERRA.md (8 tipos sessão)", "ok": true },
        { "txt": "Histórico de decisões registrado", "ok": true },
        { "txt": "Modelo sala de reunião: múltiplos agentes", "ok": true },
        { "txt": "Reunião domingo 2h fixas definida", "ok": true },
        { "txt": "Dashboard consolidado (Katrina prepara)", "ok": false }
      ]
    }
  ],
  "sops": [
    { "num": "001", "titulo": "Inadimplência MetLife", "status": "ok", "data": "02/04/2026", "desc": "Pedro verifica portal diário | Prioridade: 61+d primeiro | Donna audita segunda | Cancelamento: 90 dias" },
    { "num": "002", "titulo": "Follow-up de Leads", "status": "ok", "data": "02/04/2026", "desc": "Pedro executa diário | Regra: ninguém fica 7+ dias sem contato | Donna audita 22h" },
    { "num": "003", "titulo": "Criação de Pasta Cliente", "status": "ok", "data": "04/04/2026", "desc": "Lead fecha → Pedro cria pasta BASE_CLIENTES_VINCENT/ com 5 subpastas + cadastro APX + DataCrazy" },
    { "num": "004", "titulo": "Pós-Reunião (Plaud → Hub v3 → HTML)", "status": "ok", "data": "03/04/2026", "desc": "Edson grava → Pedro baixa Plaud → ChatGPT Hub v3 → Relatório HTML" },
    { "num": "005", "titulo": "Onboarding Cliente Novo", "status": "ok", "data": "04/04/2026", "desc": "D+0 pasta+cadastro | D+1 boas-vindas | D+7 check-in+apólice | D+30 indicação" },
    { "num": "006", "titulo": "Pesquisa Pré-AP", "status": "ok", "data": "03/04/2026", "desc": "Pedro pesquisa lead → ChatGPT gera briefing → salva PRE_AP_[NOME]" },
    { "num": "007", "titulo": "Follow-up AP sem FC", "status": "ok", "data": "03/04/2026", "desc": "AP feita sem FC → Pedro envia 12 msgs em 1 mês via DataCrazy" },
    { "num": "008", "titulo": "Rotina Pedro — Semanal", "status": "ok", "data": "16/05/2026", "desc": "Segunda 09h30 reunião Edson | Diário: inadimplência + follow-up + planilhas" },
    { "num": "009", "titulo": "Base Maçons GOSC — Abordagem", "status": "pendente", "desc": "5.334 leads qualificados | 86 já no DataCrazy | Disparo WhatsApp em lotes" },
    { "num": "010", "titulo": "Verificação Pós-AP", "status": "ok", "data": "21/04/2026", "desc": "11 etapas: Calendário → Drive → WhatsApp → Trava Edson → Relatórios → Diário → Trello → Kanban → APX → Revisão → FC" },
    { "num": "011", "titulo": "Verificação Pós-FC/FC2", "status": "pendente", "desc": "Pedro confere: DataCrazy + APX + pasta cliente + projetos prontos" },
    { "num": "012", "titulo": "AC Reunião — 3 tipos", "status": "ok", "data": "16/05/2026", "desc": "Pós-venda (1m seguro, 1-3m invest) | Obrigatório (3m >R$300k, 11m seguro) | Análise ativa" },
    { "num": "013", "titulo": "Contatos Pedro — Meta 50/semana", "status": "ok", "data": "16/05/2026", "desc": "Pedro preenche PLANILHA RECS → Donna busca via API DC → relatório" }
  ],
  "fluxos": [
    {
      "titulo": "Fluxo Comercial — Lead a Cliente",
      "etapas": [
        { "txt": "📱 Lead chega", "sub": "DataCrazy", "ativo": true },
        { "txt": "🔍 Pedro pesquisa", "sub": "SOP 006 Pré-AP", "ativo": true },
        { "txt": "📋 Briefing pré-AP", "sub": "ChatGPT → Drive", "ativo": true },
        { "txt": "🤝 AP (Edson)", "sub": "Filtro 20min / Completa 45min", "ativo": true },
        { "txt": "📊 Projeto (Pedro 80%)", "sub": "IF + Seguro + PLJ", "ativo": true },
        { "txt": "✅ Edson revisa (20%)", "sub": "15 min", "ativo": true },
        { "txt": "🏛️ FC em 72h", "sub": "Apresentação + dados", "ativo": true },
        { "txt": "💰 Fechamento", "sub": "Seguro/BTG/PLJ/Dominion", "ativo": true },
        { "txt": "📁 Pasta cliente", "sub": "BASE_CLIENTES_VINCENT", "ativo": true }
      ]
    },
    {
      "titulo": "Ciclo Semanal — Rotina da Operação",
      "etapas": [
        { "txt": "☀️ Segunda 09h30", "sub": "Reunião Edson+Pedro 60min", "ativo": true },
        { "txt": "📋 Seg a Sex", "sub": "Pedro: DC + follow-up + inadimplência", "ativo": true },
        { "txt": "🗓️ Seg: PLJ", "sub": "Planilha Reuniões atualizada", "ativo": true },
        { "txt": "🔍 Sex/Sáb", "sub": "Pedro fecha: metas + inadimplência + apólices", "ativo": true },
        { "txt": "📊 Sáb 12h", "sub": "Pedro entrega tudo fechado", "ativo": true },
        { "txt": "🤖 Sáb tarde", "sub": "Donna revisa + prepara painel", "ativo": true },
        { "txt": "🏛️ Dom 2h", "sub": "Sala de Guerra Edson+Donna", "ativo": true }
      ]
    },
    {
      "titulo": "Fluxo Pós-Reunião (SOP 004 — Plaud → Hub v3)",
      "etapas": [
        { "txt": "🎙️ Edson grava", "sub": "Plaud", "ativo": true },
        { "txt": "📥 Pedro baixa", "sub": ".txt na pasta do lead", "ativo": true },
        { "txt": "🤖 Pedro → ChatGPT Hub v3", "sub": "Conversa + menu", "ativo": true },
        { "txt": "📄 Relatório interno", "sub": "HTML + especialistas", "ativo": true },
        { "txt": "📄 Relatório cliente", "sub": "HTML timbrado → PDF", "ativo": true },
        { "txt": "📁 Salva na pasta", "sub": "02_REUNIOES/", "ativo": true }
      ]
    },
    {
      "titulo": "Fluxo Inadimplência (SOP 001)",
      "etapas": [
        { "txt": "🔍 Pedro verifica", "sub": "Portal MetLife diário", "ativo": true },
        { "txt": "📞 Cobra por prioridade", "sub": "61+d → 31-60d → 6-30d", "ativo": true },
        { "txt": "📝 Registra planilha", "sub": "Ação + resposta", "ativo": true },
        { "txt": "🤖 Donna audita segunda", "sub": "Portal × planilha", "ativo": false },
        { "txt": "⚠️ Alerta se erro", "sub": "Sem ação 15+ dias", "ativo": false },
        { "txt": "👨‍💼 Edson decide", "sub": "Se necessário", "ativo": false }
      ]
    },
    {
      "titulo": "Fluxo AC — Acompanhamento de Clientes",
      "etapas": [
        { "txt": "🔔 Gatilho", "sub": "1m seguro / 3m invest / 11m alerta", "ativo": true },
        { "txt": "📅 Pedro agenda", "sub": "Stage MARCAR REUNIÃO AC", "ativo": true },
        { "txt": "📋 Prepara análise", "sub": "MONTAR ANALISE + dados", "ativo": true },
        { "txt": "🤝 Reunião AC", "sub": "Edson + cliente", "ativo": true },
        { "txt": "📊 Pós-AC", "sub": "Stage PÓS-REUNIÃO AC", "ativo": true },
        { "txt": "🔄 Cross-sell?", "sub": "Nova proposta se pertinente", "ativo": false }
      ]
    },
    {
      "titulo": "Fluxo Follow-up (SOP 002 + 007)",
      "etapas": [
        { "txt": "🤝 AP feita", "sub": "Plaud gravou", "ativo": true },
        { "txt": "🏷️ Pedro classifica", "sub": "Tags no DataCrazy", "ativo": true },
        { "txt": "📱 12 msgs em 1 mês", "sub": "3x/semana via DataCrazy", "ativo": true },
        { "txt": "📅 FC agendada?", "sub": "SIM → Fluxo Comercial", "ativo": true },
        { "txt": "😴 Adormecer", "sub": "1 mês sem resposta", "ativo": true },
        { "txt": "🤖 Donna verifica 22h", "sub": "Parado 7+ dias?", "ativo": false }
      ]
    }
  ],
  "proximos": [
    {
      "prioridade": "URGENTE",
      "titulo": "Deploy Escritório Virtual no Vercel",
      "responsavel": "Donna",
      "descricao": "Finalizar dados_escritorio.js atualizado (SCOTTIE + HAROLD expandidos + campo 'local' em todos), fazer deploy no Vercel.",
      "tempo": "30min",
      "impacto": "Centraliza todos os sistemas com visibilidade completa de cada sala/agente"
    },
    {
      "prioridade": "URGENTE",
      "titulo": "Ativar Painel Metas (Google Apps Script)",
      "responsavel": "Edson",
      "descricao": "Copiar Code_V2.4.md e Index_V2.4.md pro Google Apps Script, fazer deploy, obter URL pública. Pedro e Edson acessam diariamente.",
      "tempo": "5min",
      "impacto": "Pedro e Edson visualizam metas comerciais + produtos em tempo real"
    },
    {
      "prioridade": "ALTA",
      "titulo": "Rotina CEO Matinal (Briefing 8h)",
      "responsavel": "Donna + Edson",
      "descricao": "Todo dia 8h, Edson abre Painel Metas e vê: quem tem reunião hoje, inadimplentes críticos, cross-sell quente, faturamento ontem.",
      "tempo": "2min/dia",
      "impacto": "Edson sabe exatamente o que fazer no dia sem precisar perguntar"
    },
    {
      "prioridade": "ALTA",
      "titulo": "Donna Coleta Dados Semanais (Sexta 17h)",
      "responsavel": "Donna",
      "descricao": "Toda sexta 17h, Donna faz 5 perguntas a Edson para atualizar agentes (Jessica, Alex, Rachel, Mike, Louis). 2min de resposta.",
      "tempo": "2min/semana",
      "impacto": "Agentes sempre têm dados frescos sem Edson precisar lembrar de atualizar"
    },
    {
      "prioridade": "MEDIA",
      "titulo": "Jhonas Mendes XU — Fechar PLJ R$1.900",
      "responsavel": "Edson + Rachel",
      "descricao": "Proposta enviada 12/05. Deadline 20/05 (4 dias). Agendar primeira reunião + designar funcionário responsável pelo acompanhamento semanal.",
      "tempo": "1h",
      "impacto": "+R$1.900/mês garantido (PLJ operacional 12 meses)"
    },
    {
      "prioridade": "MEDIA",
      "titulo": "Cross-sell Teste — 5 clientes BTG → MetLife",
      "responsavel": "Edson + Jessica",
      "descricao": "Enviar 5 mensagens WhatsApp (template pronto). Validar taxa de resposta e interesse. Se funcionar: executar nos 172 clientes restantes.",
      "tempo": "20min",
      "impacto": "Validar R$4-6k/mês potencial em cross-sell"
    },
    {
      "prioridade": "MEDIA",
      "titulo": "Investigar Churn BTG (3 contas PL=0)",
      "responsavel": "Edson + Alex",
      "descricao": "Ligar para 3 clientes com PL=0. Entender: saiu pra onde? Por quê? Isso valida se 103 contas realmente é churn ou só erro de dados.",
      "tempo": "15min",
      "impacto": "Confirmar causa de queda 60% comissões BTG"
    }
  ]
};

// Não edite abaixo desta linha
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DADOS;
}
