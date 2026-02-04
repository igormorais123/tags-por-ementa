// ==========================================
// TAGS POR EMENTA - INTEIA v2.0
// Sistema de classificação automática de projetos legislativos
// Versão expandida com 500+ termos e suporte a PDF
// ==========================================

// ==========================================
// BASE DE CONHECIMENTO EXPANDIDA
// ==========================================

const SINONIMOS = {
    // ==========================================
    // CÓDIGOS PRINCIPAIS
    // ==========================================
    
    // Código Penal
    "código penal": "Código Penal (CP)",
    "codigo penal": "Código Penal (CP)",
    "cp": "Código Penal (CP)",
    "decreto-lei 2.848": "Código Penal (CP)",
    "decreto-lei 2848": "Código Penal (CP)",
    "decreto-lei nº 2.848": "Código Penal (CP)",
    "dl 2848": "Código Penal (CP)",
    "dl 2.848": "Código Penal (CP)",
    
    // Código Civil
    "código civil": "Código Civil (CC)",
    "codigo civil": "Código Civil (CC)",
    "cc": "Código Civil (CC)",
    "lei 10.406": "Código Civil (CC)",
    "lei 10406": "Código Civil (CC)",
    "lei nº 10.406": "Código Civil (CC)",
    
    // Código de Processo Civil
    "código de processo civil": "Código de Processo Civil (CPC)",
    "codigo de processo civil": "Código de Processo Civil (CPC)",
    "cpc": "Código de Processo Civil (CPC)",
    "lei 13.105": "Código de Processo Civil (CPC)",
    "lei 13105": "Código de Processo Civil (CPC)",
    "lei nº 13.105": "Código de Processo Civil (CPC)",
    "novo cpc": "Código de Processo Civil (CPC)",
    
    // Código de Processo Penal
    "código de processo penal": "Código de Processo Penal (CPP)",
    "codigo de processo penal": "Código de Processo Penal (CPP)",
    "cpp": "Código de Processo Penal (CPP)",
    "decreto-lei 3.689": "Código de Processo Penal (CPP)",
    "decreto-lei 3689": "Código de Processo Penal (CPP)",
    "dl 3689": "Código de Processo Penal (CPP)",
    
    // Código de Trânsito
    "código de trânsito": "Código de Trânsito Brasileiro (CTB)",
    "codigo de transito": "Código de Trânsito Brasileiro (CTB)",
    "código de trânsito brasileiro": "Código de Trânsito Brasileiro (CTB)",
    "ctb": "Código de Trânsito Brasileiro (CTB)",
    "lei 9.503": "Código de Trânsito Brasileiro (CTB)",
    "lei 9503": "Código de Trânsito Brasileiro (CTB)",
    
    // CDC
    "código de defesa do consumidor": "Código de Defesa do Consumidor (CDC)",
    "codigo de defesa do consumidor": "Código de Defesa do Consumidor (CDC)",
    "cdc": "Código de Defesa do Consumidor (CDC)",
    "lei 8.078": "Código de Defesa do Consumidor (CDC)",
    "lei 8078": "Código de Defesa do Consumidor (CDC)",
    "defesa do consumidor": "Código de Defesa do Consumidor (CDC)",
    "direito do consumidor": "Código de Defesa do Consumidor (CDC)",
    
    // Código Tributário Nacional
    "código tributário nacional": "Código Tributário Nacional (CTN)",
    "codigo tributario nacional": "Código Tributário Nacional (CTN)",
    "ctn": "Código Tributário Nacional (CTN)",
    "lei 5.172": "Código Tributário Nacional (CTN)",
    "lei 5172": "Código Tributário Nacional (CTN)",
    
    // Código Eleitoral
    "código eleitoral": "Código Eleitoral",
    "codigo eleitoral": "Código Eleitoral",
    "lei 4.737": "Código Eleitoral",
    "lei 4737": "Código Eleitoral",
    
    // CLT
    "consolidação das leis do trabalho": "CLT",
    "consolidacao das leis do trabalho": "CLT",
    "clt": "CLT",
    "decreto-lei 5.452": "CLT",
    "decreto-lei 5452": "CLT",
    "leis trabalhistas": "CLT",
    "direito do trabalho": "CLT",
    "legislação trabalhista": "CLT",
    
    // Código Florestal
    "código florestal": "Código Florestal",
    "codigo florestal": "Código Florestal",
    "lei 12.651": "Código Florestal",
    "lei 12651": "Código Florestal",
    
    // ==========================================
    // LEIS PENAIS ESPECIAIS
    // ==========================================
    
    // Lei Maria da Penha
    "maria da penha": "Lei Maria da Penha",
    "lei maria da penha": "Lei Maria da Penha",
    "lei 11.340": "Lei Maria da Penha",
    "lei 11340": "Lei Maria da Penha",
    "lmp": "Lei Maria da Penha",
    "violência doméstica": "Lei Maria da Penha",
    "violencia domestica": "Lei Maria da Penha",
    "violência contra a mulher": "Lei Maria da Penha",
    "violencia contra a mulher": "Lei Maria da Penha",
    "medida protetiva": "Lei Maria da Penha",
    "medidas protetivas": "Lei Maria da Penha",
    
    // ECA
    "eca": "Estatuto da Criança e do Adolescente (ECA)",
    "estatuto da criança": "Estatuto da Criança e do Adolescente (ECA)",
    "estatuto da crianca": "Estatuto da Criança e do Adolescente (ECA)",
    "estatuto da criança e do adolescente": "Estatuto da Criança e do Adolescente (ECA)",
    "lei 8.069": "Estatuto da Criança e do Adolescente (ECA)",
    "lei 8069": "Estatuto da Criança e do Adolescente (ECA)",
    "direitos da criança": "Estatuto da Criança e do Adolescente (ECA)",
    "menor infrator": "Estatuto da Criança e do Adolescente (ECA)",
    "ato infracional": "Estatuto da Criança e do Adolescente (ECA)",
    "medida socioeducativa": "Estatuto da Criança e do Adolescente (ECA)",
    
    // Lei de Drogas
    "lei de drogas": "Lei de Drogas",
    "lei 11.343": "Lei de Drogas",
    "lei 11343": "Lei de Drogas",
    "tráfico de drogas": "Lei de Drogas",
    "trafico de drogas": "Lei de Drogas",
    "entorpecentes": "Lei de Drogas",
    "substâncias entorpecentes": "Lei de Drogas",
    "drogas ilícitas": "Lei de Drogas",
    "porte de drogas": "Lei de Drogas",
    "uso de drogas": "Lei de Drogas",
    
    // LEP
    "lei de execução penal": "Lei de Execução Penal (LEP)",
    "lei de execucao penal": "Lei de Execução Penal (LEP)",
    "lep": "Lei de Execução Penal (LEP)",
    "lei 7.210": "Lei de Execução Penal (LEP)",
    "lei 7210": "Lei de Execução Penal (LEP)",
    "execução penal": "Lei de Execução Penal (LEP)",
    "execucao penal": "Lei de Execução Penal (LEP)",
    "regime prisional": "Lei de Execução Penal (LEP)",
    "progressão de regime": "Lei de Execução Penal (LEP)",
    "livramento condicional": "Lei de Execução Penal (LEP)",
    "remição de pena": "Lei de Execução Penal (LEP)",
    "indulto": "Lei de Execução Penal (LEP)",
    "saída temporária": "Lei de Execução Penal (LEP)",
    
    // Lei de Crimes Hediondos
    "lei de crimes hediondos": "Lei de Crimes Hediondos",
    "crimes hediondos": "Lei de Crimes Hediondos",
    "lei 8.072": "Lei de Crimes Hediondos",
    "lei 8072": "Lei de Crimes Hediondos",
    "hediondo": "Lei de Crimes Hediondos",
    "crime hediondo": "Lei de Crimes Hediondos",
    
    // Lei de Tortura
    "lei de tortura": "Lei de Tortura",
    "lei 9.455": "Lei de Tortura",
    "lei 9455": "Lei de Tortura",
    "crime de tortura": "Lei de Tortura",
    "tortura": "Lei de Tortura",
    
    // Lei de Abuso de Autoridade
    "lei de abuso de autoridade": "Lei de Abuso de Autoridade",
    "abuso de autoridade": "Lei de Abuso de Autoridade",
    "lei 13.869": "Lei de Abuso de Autoridade",
    "lei 13869": "Lei de Abuso de Autoridade",
    
    // Lei do Feminicídio
    "feminicídio": "Lei do Feminicídio",
    "feminicidio": "Lei do Feminicídio",
    "lei 13.104": "Lei do Feminicídio",
    "lei 13104": "Lei do Feminicídio",
    
    // Lei do Stalking
    "stalking": "Lei do Stalking (Perseguição)",
    "perseguição": "Lei do Stalking (Perseguição)",
    "lei 14.132": "Lei do Stalking (Perseguição)",
    "lei 14132": "Lei do Stalking (Perseguição)",
    
    // Lei Carolina Dieckmann
    "lei carolina dieckmann": "Lei Carolina Dieckmann (Crimes Cibernéticos)",
    "carolina dieckmann": "Lei Carolina Dieckmann (Crimes Cibernéticos)",
    "lei 12.737": "Lei Carolina Dieckmann (Crimes Cibernéticos)",
    "lei 12737": "Lei Carolina Dieckmann (Crimes Cibernéticos)",
    "invasão de dispositivo": "Lei Carolina Dieckmann (Crimes Cibernéticos)",
    "invasao de dispositivo": "Lei Carolina Dieckmann (Crimes Cibernéticos)",
    
    // Lei Antimanicomial
    "lei antimanicomial": "Lei Antimanicomial",
    "reforma psiquiátrica": "Lei Antimanicomial",
    "lei 10.216": "Lei Antimanicomial",
    "lei 10216": "Lei Antimanicomial",
    
    // Lei de Interceptação Telefônica
    "interceptação telefônica": "Lei de Interceptação Telefônica",
    "interceptacao telefonica": "Lei de Interceptação Telefônica",
    "lei 9.296": "Lei de Interceptação Telefônica",
    "lei 9296": "Lei de Interceptação Telefônica",
    "escuta telefônica": "Lei de Interceptação Telefônica",
    
    // Lei de Lavagem de Dinheiro
    "lavagem de dinheiro": "Lei de Lavagem de Dinheiro",
    "lei 9.613": "Lei de Lavagem de Dinheiro",
    "lei 9613": "Lei de Lavagem de Dinheiro",
    "branqueamento de capitais": "Lei de Lavagem de Dinheiro",
    "ocultação de bens": "Lei de Lavagem de Dinheiro",
    
    // Lei de Organizações Criminosas
    "organização criminosa": "Lei de Organizações Criminosas",
    "organizacao criminosa": "Lei de Organizações Criminosas",
    "organizações criminosas": "Lei de Organizações Criminosas",
    "lei 12.850": "Lei de Organizações Criminosas",
    "lei 12850": "Lei de Organizações Criminosas",
    "delação premiada": "Lei de Organizações Criminosas",
    "colaboração premiada": "Lei de Organizações Criminosas",
    "milícia": "Lei de Organizações Criminosas",
    "facção criminosa": "Lei de Organizações Criminosas",
    
    // Estatuto do Desarmamento
    "estatuto do desarmamento": "Estatuto do Desarmamento",
    "lei 10.826": "Estatuto do Desarmamento",
    "lei 10826": "Estatuto do Desarmamento",
    "porte de arma": "Estatuto do Desarmamento",
    "posse de arma": "Estatuto do Desarmamento",
    "arma de fogo": "Estatuto do Desarmamento",
    "armas de fogo": "Estatuto do Desarmamento",
    "tráfico de armas": "Estatuto do Desarmamento",
    "comércio ilegal de arma": "Estatuto do Desarmamento",
    
    // Estatuto do Idoso
    "estatuto do idoso": "Estatuto do Idoso",
    "lei 10.741": "Estatuto do Idoso",
    "lei 10741": "Estatuto do Idoso",
    "direitos do idoso": "Estatuto do Idoso",
    "pessoa idosa": "Estatuto do Idoso",
    "terceira idade": "Estatuto do Idoso",
    
    // Estatuto da Pessoa com Deficiência
    "estatuto da pessoa com deficiência": "Estatuto da Pessoa com Deficiência",
    "lei brasileira de inclusão": "Estatuto da Pessoa com Deficiência",
    "lbi": "Estatuto da Pessoa com Deficiência",
    "lei 13.146": "Estatuto da Pessoa com Deficiência",
    "lei 13146": "Estatuto da Pessoa com Deficiência",
    "pessoa com deficiência": "Estatuto da Pessoa com Deficiência",
    "acessibilidade": "Estatuto da Pessoa com Deficiência",
    "pcd": "Estatuto da Pessoa com Deficiência",
    
    // Estatuto da Igualdade Racial
    "estatuto da igualdade racial": "Estatuto da Igualdade Racial",
    "lei 12.288": "Estatuto da Igualdade Racial",
    "lei 12288": "Estatuto da Igualdade Racial",
    "igualdade racial": "Estatuto da Igualdade Racial",
    "discriminação racial": "Estatuto da Igualdade Racial",
    
    // Lei de Racismo
    "lei de racismo": "Lei de Racismo",
    "lei 7.716": "Lei de Racismo",
    "lei 7716": "Lei de Racismo",
    "crime de racismo": "Lei de Racismo",
    "injúria racial": "Lei de Racismo",
    "injuria racial": "Lei de Racismo",
    "racismo": "Lei de Racismo",
    "preconceito racial": "Lei de Racismo",
    
    // ==========================================
    // LEIS ADMINISTRATIVAS
    // ==========================================
    
    // Lei de Improbidade
    "lei de improbidade": "Lei de Improbidade Administrativa",
    "lei de improbidade administrativa": "Lei de Improbidade Administrativa",
    "improbidade administrativa": "Lei de Improbidade Administrativa",
    "lei 8.429": "Lei de Improbidade Administrativa",
    "lei 8429": "Lei de Improbidade Administrativa",
    "ato de improbidade": "Lei de Improbidade Administrativa",
    "enriquecimento ilícito": "Lei de Improbidade Administrativa",
    
    // Lei de Licitações (Nova)
    "lei de licitações": "Lei de Licitações",
    "nova lei de licitações": "Lei de Licitações",
    "licitações": "Lei de Licitações",
    "licitacoes": "Lei de Licitações",
    "lei 14.133": "Lei de Licitações",
    "lei 14133": "Lei de Licitações",
    "pregão": "Lei de Licitações",
    "pregao": "Lei de Licitações",
    "concorrência pública": "Lei de Licitações",
    "dispensa de licitação": "Lei de Licitações",
    "inexigibilidade": "Lei de Licitações",
    "contratação pública": "Lei de Licitações",
    
    // Lei 8.666 (antiga)
    "lei 8.666": "Lei 8.666/93 (Licitações antiga)",
    "lei 8666": "Lei 8.666/93 (Licitações antiga)",
    
    // Lei Anticorrupção
    "lei anticorrupção": "Lei Anticorrupção",
    "lei anticorrupcao": "Lei Anticorrupção",
    "lei 12.846": "Lei Anticorrupção",
    "lei 12846": "Lei Anticorrupção",
    "responsabilização de pessoa jurídica": "Lei Anticorrupção",
    "acordo de leniência": "Lei Anticorrupção",
    
    // Lei de Acesso à Informação
    "lei de acesso à informação": "Lei de Acesso à Informação (LAI)",
    "lei de acesso a informação": "Lei de Acesso à Informação (LAI)",
    "lai": "Lei de Acesso à Informação (LAI)",
    "lei 12.527": "Lei de Acesso à Informação (LAI)",
    "lei 12527": "Lei de Acesso à Informação (LAI)",
    "transparência pública": "Lei de Acesso à Informação (LAI)",
    "sigilo de informação": "Lei de Acesso à Informação (LAI)",
    
    // Lei de Responsabilidade Fiscal
    "lei de responsabilidade fiscal": "Lei de Responsabilidade Fiscal (LRF)",
    "lrf": "Lei de Responsabilidade Fiscal (LRF)",
    "lei complementar 101": "Lei de Responsabilidade Fiscal (LRF)",
    "lc 101": "Lei de Responsabilidade Fiscal (LRF)",
    "responsabilidade fiscal": "Lei de Responsabilidade Fiscal (LRF)",
    "limite de gastos": "Lei de Responsabilidade Fiscal (LRF)",
    "teto de gastos": "Lei de Responsabilidade Fiscal (LRF)",
    
    // Regime Jurídico dos Servidores
    "lei 8.112": "Regime Jurídico dos Servidores (Lei 8.112)",
    "lei 8112": "Regime Jurídico dos Servidores (Lei 8.112)",
    "regime jurídico único": "Regime Jurídico dos Servidores (Lei 8.112)",
    "rju": "Regime Jurídico dos Servidores (Lei 8.112)",
    "estatuto do servidor": "Regime Jurídico dos Servidores (Lei 8.112)",
    
    // Lei do Processo Administrativo
    "lei do processo administrativo": "Lei do Processo Administrativo Federal",
    "lei 9.784": "Lei do Processo Administrativo Federal",
    "lei 9784": "Lei do Processo Administrativo Federal",
    "processo administrativo": "Lei do Processo Administrativo Federal",
    "pad": "Lei do Processo Administrativo Federal",
    
    // ==========================================
    // LEIS DE TECNOLOGIA E DADOS
    // ==========================================
    
    // LGPD
    "lgpd": "LGPD",
    "lei geral de proteção de dados": "LGPD",
    "lei 13.709": "LGPD",
    "lei 13709": "LGPD",
    "proteção de dados": "LGPD",
    "protecao de dados": "LGPD",
    "dados pessoais": "LGPD",
    "privacidade de dados": "LGPD",
    "tratamento de dados": "LGPD",
    
    // Marco Civil da Internet
    "marco civil da internet": "Marco Civil da Internet",
    "marco civil": "Marco Civil da Internet",
    "lei 12.965": "Marco Civil da Internet",
    "lei 12965": "Marco Civil da Internet",
    "neutralidade de rede": "Marco Civil da Internet",
    "responsabilidade de provedores": "Marco Civil da Internet",
    
    // Lei do Governo Digital
    "lei do governo digital": "Lei do Governo Digital",
    "lei 14.129": "Lei do Governo Digital",
    "lei 14129": "Lei do Governo Digital",
    "governo digital": "Lei do Governo Digital",
    "serviços digitais": "Lei do Governo Digital",
    
    // ==========================================
    // LEIS AMBIENTAIS
    // ==========================================
    
    // Lei de Crimes Ambientais
    "lei de crimes ambientais": "Lei de Crimes Ambientais",
    "crimes ambientais": "Lei de Crimes Ambientais",
    "lei 9.605": "Lei de Crimes Ambientais",
    "lei 9605": "Lei de Crimes Ambientais",
    "crime ambiental": "Lei de Crimes Ambientais",
    "desmatamento": "Lei de Crimes Ambientais",
    "poluição": "Lei de Crimes Ambientais",
    "fauna silvestre": "Lei de Crimes Ambientais",
    "tráfico de animais": "Lei de Crimes Ambientais",
    
    // Política Nacional do Meio Ambiente
    "política nacional do meio ambiente": "Política Nacional do Meio Ambiente",
    "lei 6.938": "Política Nacional do Meio Ambiente",
    "lei 6938": "Política Nacional do Meio Ambiente",
    "licenciamento ambiental": "Política Nacional do Meio Ambiente",
    "impacto ambiental": "Política Nacional do Meio Ambiente",
    "eia rima": "Política Nacional do Meio Ambiente",
    
    // Lei das Águas
    "lei das águas": "Lei das Águas",
    "lei 9.433": "Lei das Águas",
    "lei 9433": "Lei das Águas",
    "recursos hídricos": "Lei das Águas",
    "bacia hidrográfica": "Lei das Águas",
    
    // ==========================================
    // LEIS ELEITORAIS E PARTIDÁRIAS
    // ==========================================
    
    // Lei das Eleições
    "lei das eleições": "Lei das Eleições",
    "lei 9.504": "Lei das Eleições",
    "lei 9504": "Lei das Eleições",
    "propaganda eleitoral": "Lei das Eleições",
    "campanha eleitoral": "Lei das Eleições",
    "financiamento de campanha": "Lei das Eleições",
    "prestação de contas eleitoral": "Lei das Eleições",
    
    // Lei dos Partidos
    "lei dos partidos": "Lei dos Partidos Políticos",
    "lei 9.096": "Lei dos Partidos Políticos",
    "lei 9096": "Lei dos Partidos Políticos",
    "partido político": "Lei dos Partidos Políticos",
    "fundo partidário": "Lei dos Partidos Políticos",
    "fidelidade partidária": "Lei dos Partidos Políticos",
    
    // Lei da Ficha Limpa
    "lei da ficha limpa": "Lei da Ficha Limpa",
    "ficha limpa": "Lei da Ficha Limpa",
    "lei complementar 135": "Lei da Ficha Limpa",
    "lc 135": "Lei da Ficha Limpa",
    "inelegibilidade": "Lei da Ficha Limpa",
    
    // ==========================================
    // LEIS TRIBUTÁRIAS E FINANCEIRAS
    // ==========================================
    
    // Lei de Execução Fiscal
    "lei de execução fiscal": "Lei de Execução Fiscal",
    "execução fiscal": "Lei de Execução Fiscal",
    "lei 6.830": "Lei de Execução Fiscal",
    "lei 6830": "Lei de Execução Fiscal",
    "dívida ativa": "Lei de Execução Fiscal",
    "cobrança fiscal": "Lei de Execução Fiscal",
    
    // Simples Nacional
    "simples nacional": "Lei do Simples Nacional",
    "lei complementar 123": "Lei do Simples Nacional",
    "lc 123": "Lei do Simples Nacional",
    "microempresa": "Lei do Simples Nacional",
    "empresa de pequeno porte": "Lei do Simples Nacional",
    "mei": "Lei do Simples Nacional",
    "microempreendedor individual": "Lei do Simples Nacional",
    
    // ==========================================
    // LEIS DE SAÚDE
    // ==========================================
    
    // Lei do SUS
    "lei do sus": "Lei Orgânica da Saúde (SUS)",
    "lei orgânica da saúde": "Lei Orgânica da Saúde (SUS)",
    "lei 8.080": "Lei Orgânica da Saúde (SUS)",
    "lei 8080": "Lei Orgânica da Saúde (SUS)",
    "sus": "Lei Orgânica da Saúde (SUS)",
    "sistema único de saúde": "Lei Orgânica da Saúde (SUS)",
    "saúde pública": "Lei Orgânica da Saúde (SUS)",
    
    // Lei dos Planos de Saúde
    "lei dos planos de saúde": "Lei dos Planos de Saúde",
    "lei 9.656": "Lei dos Planos de Saúde",
    "lei 9656": "Lei dos Planos de Saúde",
    "plano de saúde": "Lei dos Planos de Saúde",
    "operadora de saúde": "Lei dos Planos de Saúde",
    
    // Lei de Biossegurança
    "lei de biossegurança": "Lei de Biossegurança",
    "lei 11.105": "Lei de Biossegurança",
    "lei 11105": "Lei de Biossegurança",
    "ogm": "Lei de Biossegurança",
    "organismos geneticamente modificados": "Lei de Biossegurança",
    "transgênico": "Lei de Biossegurança",
    "células-tronco": "Lei de Biossegurança",
    
    // ==========================================
    // LEIS DE EDUCAÇÃO
    // ==========================================
    
    // LDB
    "ldb": "Lei de Diretrizes e Bases da Educação (LDB)",
    "lei de diretrizes e bases": "Lei de Diretrizes e Bases da Educação (LDB)",
    "lei 9.394": "Lei de Diretrizes e Bases da Educação (LDB)",
    "lei 9394": "Lei de Diretrizes e Bases da Educação (LDB)",
    "educação básica": "Lei de Diretrizes e Bases da Educação (LDB)",
    "ensino fundamental": "Lei de Diretrizes e Bases da Educação (LDB)",
    "ensino médio": "Lei de Diretrizes e Bases da Educação (LDB)",
    
    // Lei de Cotas
    "lei de cotas": "Lei de Cotas",
    "lei 12.711": "Lei de Cotas",
    "lei 12711": "Lei de Cotas",
    "cotas raciais": "Lei de Cotas",
    "cotas sociais": "Lei de Cotas",
    "ações afirmativas": "Lei de Cotas",
    
    // FUNDEB
    "fundeb": "FUNDEB",
    "fundo de educação": "FUNDEB",
    "lei 14.113": "FUNDEB",
    "financiamento da educação": "FUNDEB",
    
    // ==========================================
    // LEIS DE SEGURANÇA PÚBLICA
    // ==========================================
    
    // SUSP
    "susp": "Sistema Único de Segurança Pública",
    "lei 13.675": "Sistema Único de Segurança Pública",
    "sistema único de segurança pública": "Sistema Único de Segurança Pública",
    "segurança pública": "segurança pública",
    
    // Lei Antiterrorismo
    "lei antiterrorismo": "Lei Antiterrorismo",
    "lei 13.260": "Lei Antiterrorismo",
    "lei 13260": "Lei Antiterrorismo",
    "terrorismo": "Lei Antiterrorismo",
    "ato terrorista": "Lei Antiterrorismo",
    
    // ==========================================
    // LEIS PREVIDENCIÁRIAS
    // ==========================================
    
    // Lei de Benefícios da Previdência
    "lei de benefícios": "Lei de Benefícios da Previdência",
    "lei 8.213": "Lei de Benefícios da Previdência",
    "lei 8213": "Lei de Benefícios da Previdência",
    "aposentadoria": "Lei de Benefícios da Previdência",
    "pensão por morte": "Lei de Benefícios da Previdência",
    "auxílio-doença": "Lei de Benefícios da Previdência",
    "benefício previdenciário": "Lei de Benefícios da Previdência",
    "inss": "Lei de Benefícios da Previdência",
    
    // LOAS
    "loas": "Lei Orgânica da Assistência Social",
    "lei orgânica da assistência social": "Lei Orgânica da Assistência Social",
    "lei 8.742": "Lei Orgânica da Assistência Social",
    "lei 8742": "Lei Orgânica da Assistência Social",
    "bpc": "Lei Orgânica da Assistência Social",
    "benefício de prestação continuada": "Lei Orgânica da Assistência Social",
    "assistência social": "Lei Orgânica da Assistência Social",
    
    // ==========================================
    // OUTRAS LEIS IMPORTANTES
    // ==========================================
    
    // Lei de Falências
    "lei de falências": "Lei de Recuperação Judicial e Falências",
    "lei de recuperação judicial": "Lei de Recuperação Judicial e Falências",
    "lei 11.101": "Lei de Recuperação Judicial e Falências",
    "lei 11101": "Lei de Recuperação Judicial e Falências",
    "recuperação judicial": "Lei de Recuperação Judicial e Falências",
    "falência": "Lei de Recuperação Judicial e Falências",
    "recuperação extrajudicial": "Lei de Recuperação Judicial e Falências",
    
    // Lei do Inquilinato
    "lei do inquilinato": "Lei do Inquilinato",
    "lei 8.245": "Lei do Inquilinato",
    "lei 8245": "Lei do Inquilinato",
    "locação de imóvel": "Lei do Inquilinato",
    "aluguel": "Lei do Inquilinato",
    "despejo": "Lei do Inquilinato",
    
    // Lei de Arbitragem
    "lei de arbitragem": "Lei de Arbitragem",
    "lei 9.307": "Lei de Arbitragem",
    "lei 9307": "Lei de Arbitragem",
    "arbitragem": "Lei de Arbitragem",
    "câmara arbitral": "Lei de Arbitragem",
    
    // Lei de Mediação
    "lei de mediação": "Lei de Mediação",
    "lei 13.140": "Lei de Mediação",
    "lei 13140": "Lei de Mediação",
    "mediação": "Lei de Mediação",
    "conciliação": "Lei de Mediação",
    
    // Juizados Especiais
    "juizados especiais": "Lei dos Juizados Especiais",
    "lei 9.099": "Lei dos Juizados Especiais",
    "lei 9099": "Lei dos Juizados Especiais",
    "pequenas causas": "Lei dos Juizados Especiais",
    "jecrim": "Lei dos Juizados Especiais",
    
    // Estatuto da Advocacia
    "estatuto da oab": "Estatuto da Advocacia",
    "estatuto da advocacia": "Estatuto da Advocacia",
    "lei 8.906": "Estatuto da Advocacia",
    "lei 8906": "Estatuto da Advocacia",
    "prerrogativas do advogado": "Estatuto da Advocacia",
    
    // Lei Orgânica da Magistratura
    "loman": "Lei Orgânica da Magistratura (LOMAN)",
    "lei complementar 35": "Lei Orgânica da Magistratura (LOMAN)",
    "magistratura": "Lei Orgânica da Magistratura (LOMAN)",
    
    // Lei Orgânica do MP
    "lei orgânica do ministério público": "Lei Orgânica do Ministério Público",
    "lei 8.625": "Lei Orgânica do Ministério Público",
    "ministério público": "Lei Orgânica do Ministério Público",
    
    // Lei da Ação Civil Pública
    "ação civil pública": "Lei da Ação Civil Pública",
    "lei 7.347": "Lei da Ação Civil Pública",
    "lei 7347": "Lei da Ação Civil Pública",
    "acp": "Lei da Ação Civil Pública",
    "direitos difusos": "Lei da Ação Civil Pública",
    "direitos coletivos": "Lei da Ação Civil Pública",
    
    // Lei de Ação Popular
    "ação popular": "Lei da Ação Popular",
    "lei 4.717": "Lei da Ação Popular",
    "lei 4717": "Lei da Ação Popular",
    
    // Mandado de Segurança
    "mandado de segurança": "Lei do Mandado de Segurança",
    "lei 12.016": "Lei do Mandado de Segurança",
    "lei 12016": "Lei do Mandado de Segurança",
    "ms": "Lei do Mandado de Segurança",
    
    // Habeas Corpus / Habeas Data
    "habeas corpus": "habeas corpus",
    "hc": "habeas corpus",
    "habeas data": "habeas data",
    
    // ==========================================
    // TEMAS DE ASSUNTO (CRIMES)
    // ==========================================
    
    // Crimes contra a vida
    "crimes contra a vida": "crimes contra a vida",
    "homicídio": "crimes contra a vida",
    "homicidio": "crimes contra a vida",
    "feminicídio": "crimes contra a vida",
    "feminicidio": "crimes contra a vida",
    "infanticídio": "crimes contra a vida",
    "infanticidio": "crimes contra a vida",
    "aborto": "crimes contra a vida",
    "lesão corporal": "crimes contra a vida",
    "lesao corporal": "crimes contra a vida",
    
    // Crimes contra o patrimônio
    "crimes contra o patrimônio": "crimes contra o patrimônio",
    "crimes contra o patrimonio": "crimes contra o patrimônio",
    "furto": "crimes contra o patrimônio",
    "roubo": "crimes contra o patrimônio",
    "estelionato": "crimes contra o patrimônio",
    "extorsão": "crimes contra o patrimônio",
    "extorsao": "crimes contra o patrimônio",
    "apropriação indébita": "crimes contra o patrimônio",
    "receptação": "crimes contra o patrimônio",
    "dano": "crimes contra o patrimônio",
    
    // Crimes contra a administração pública
    "crimes contra a administração": "crimes contra a administração pública",
    "crimes contra a administração pública": "crimes contra a administração pública",
    "corrupção passiva": "crimes contra a administração pública",
    "corrupção ativa": "crimes contra a administração pública",
    "peculato": "crimes contra a administração pública",
    "prevaricação": "crimes contra a administração pública",
    "prevaricacao": "crimes contra a administração pública",
    "concussão": "crimes contra a administração pública",
    "concussao": "crimes contra a administração pública",
    "advocacia administrativa": "crimes contra a administração pública",
    "tráfico de influência": "crimes contra a administração pública",
    "corrupção": "crimes contra a administração pública",
    
    // Crimes sexuais
    "crimes sexuais": "crimes sexuais",
    "crimes contra a dignidade sexual": "crimes sexuais",
    "estupro": "crimes sexuais",
    "assédio sexual": "crimes sexuais",
    "assedio sexual": "crimes sexuais",
    "importunação sexual": "crimes sexuais",
    "importunacao sexual": "crimes sexuais",
    "estupro de vulnerável": "crimes sexuais",
    "pornografia infantil": "crimes sexuais",
    "pedofilia": "crimes sexuais",
    
    // Crimes cibernéticos
    "crimes cibernéticos": "crimes cibernéticos",
    "crimes ciberneticos": "crimes cibernéticos",
    "crimes virtuais": "crimes cibernéticos",
    "crimes digitais": "crimes cibernéticos",
    "fraude eletrônica": "crimes cibernéticos",
    "golpe virtual": "crimes cibernéticos",
    "phishing": "crimes cibernéticos",
    "ransomware": "crimes cibernéticos",
    "fake news": "crimes cibernéticos",
    "desinformação": "crimes cibernéticos",
    
    // Crimes econômicos
    "crimes econômicos": "crimes econômicos",
    "crimes financeiros": "crimes econômicos",
    "crime contra a ordem econômica": "crimes econômicos",
    "crime contra o sistema financeiro": "crimes econômicos",
    "lei 7.492": "crimes econômicos",
    "evasão de divisas": "crimes econômicos",
    "gestão fraudulenta": "crimes econômicos",
    "pirâmide financeira": "crimes econômicos",
    
    // ==========================================
    // TEMAS DE ASSUNTO (CARREIRA E FUNCIONALISMO)
    // ==========================================
    
    "garantias da carreira": "garantias da carreira",
    "direitos funcionais": "garantias da carreira",
    "estabilidade": "garantias da carreira",
    "inamovibilidade": "garantias da carreira",
    "vitaliciedade": "garantias da carreira",
    "irredutibilidade": "garantias da carreira",
    
    "remuneração": "remuneração",
    "remuneracao": "remuneração",
    "vencimentos": "remuneração",
    "subsídio": "remuneração",
    "subsidio": "remuneração",
    "gratificação": "remuneração",
    "gratificacao": "remuneração",
    "auxílio": "remuneração",
    "auxilio": "remuneração",
    "adicional": "remuneração",
    "abono": "remuneração",
    "reajuste salarial": "remuneração",
    "piso salarial": "remuneração",
    "teto remuneratório": "remuneração",
    
    "aposentadoria servidor": "aposentadoria",
    "previdência do servidor": "aposentadoria",
    "previdencia do servidor": "aposentadoria",
    "pensão": "aposentadoria",
    "tempo de contribuição": "aposentadoria",
    "idade mínima": "aposentadoria",
    "regra de transição": "aposentadoria",
    
    "promoção": "promoção",
    "promocao": "promoção",
    "progressão": "promoção",
    "progressao": "promoção",
    "ascensão funcional": "promoção",
    "carreira": "promoção",
    "plano de cargos": "promoção",
    
    "concurso público": "concurso público",
    "concurso publico": "concurso público",
    "seleção pública": "concurso público",
    "processo seletivo": "concurso público",
    "nomeação": "concurso público",
    "posse": "concurso público",
    
    "servidor público": "servidores públicos",
    "servidores públicos": "servidores públicos",
    "servidor publico": "servidores públicos",
    "servidores publicos": "servidores públicos",
    "funcionalismo": "servidores públicos",
    "agente público": "servidores públicos",
    
    // ==========================================
    // TEMAS DE ASSUNTO (PROCESSO)
    // ==========================================
    
    "prazos processuais": "prazos processuais",
    "prazo": "prazos processuais",
    "contagem de prazo": "prazos processuais",
    "suspensão de prazo": "prazos processuais",
    "prazo em dobro": "prazos processuais",
    
    "recursos": "recursos",
    "recurso": "recursos",
    "apelação": "recursos",
    "apelacao": "recursos",
    "agravo": "recursos",
    "embargos": "recursos",
    "recurso especial": "recursos",
    "recurso extraordinário": "recursos",
    "resp": "recursos",
    "re": "recursos",
    
    "competência": "competência",
    "competencia": "competência",
    "jurisdição": "competência",
    "jurisdicao": "competência",
    "foro": "competência",
    "foro privilegiado": "competência",
    "prerrogativa de foro": "competência",
    
    "prisão": "prisão",
    "prisao": "prisão",
    "prisão preventiva": "prisão",
    "prisão temporária": "prisão",
    "prisão em flagrante": "prisão",
    "mandado de prisão": "prisão",
    "audiência de custódia": "prisão",
    
    "fiança": "fiança",
    "fianca": "fiança",
    "liberdade provisória": "fiança",
    "relaxamento de prisão": "fiança",
    
    "prescrição": "prescrição",
    "prescricao": "prescrição",
    "prescrição penal": "prescrição",
    "marco interruptivo": "prescrição",
    "prazo prescricional": "prescrição",
    
    // ==========================================
    // TEMAS DE ASSUNTO (DIVERSOS)
    // ==========================================
    
    "meio ambiente": "meio ambiente",
    "ambiental": "meio ambiente",
    "sustentabilidade": "meio ambiente",
    "mudanças climáticas": "meio ambiente",
    "energia renovável": "meio ambiente",
    
    "saúde": "saúde",
    "saude": "saúde",
    "política de saúde": "saúde",
    "medicamento": "saúde",
    "vacina": "saúde",
    "pandemia": "saúde",
    
    "educação": "educação",
    "educacao": "educação",
    "ensino": "educação",
    "escola": "educação",
    "universidade": "educação",
    "professor": "educação",
    "magistério": "educação",
    
    "segurança pública": "segurança pública",
    "seguranca publica": "segurança pública",
    "polícia": "segurança pública",
    "policia": "segurança pública",
    "polícia militar": "segurança pública",
    "polícia civil": "segurança pública",
    "polícia federal": "segurança pública",
    "bombeiro": "segurança pública",
    "guarda municipal": "segurança pública",
    
    "trânsito": "trânsito",
    "transito": "trânsito",
    "multa de trânsito": "trânsito",
    "infração de trânsito": "trânsito",
    "cnh": "trânsito",
    "habilitação": "trânsito",
    "veículo": "trânsito",
    
    "tributário": "tributário",
    "tributario": "tributário",
    "imposto": "tributário",
    "tributo": "tributário",
    "isenção fiscal": "tributário",
    "benefício fiscal": "tributário",
    "reforma tributária": "tributário",
    
    "trabalhista": "trabalhista",
    "direito do trabalho": "trabalhista",
    "empregado": "trabalhista",
    "empregador": "trabalhista",
    "rescisão contratual": "trabalhista",
    "fgts": "trabalhista",
    "férias": "trabalhista",
    "13º salário": "trabalhista",
    
    "previdenciário": "previdenciário",
    "previdenciario": "previdenciário",
    "previdência": "previdenciário",
    "inss": "previdenciário",
    "benefício previdenciário": "previdenciário",
    
    "consumidor": "direito do consumidor",
    "relação de consumo": "direito do consumidor",
    "fornecedor": "direito do consumidor",
    "produto defeituoso": "direito do consumidor",
    "recall": "direito do consumidor",
    
    "família": "direito de família",
    "familia": "direito de família",
    "casamento": "direito de família",
    "divórcio": "direito de família",
    "guarda": "direito de família",
    "pensão alimentícia": "direito de família",
    "alimentos": "direito de família",
    "adoção": "direito de família",
    "união estável": "direito de família",
    
    "sucessões": "direito das sucessões",
    "herança": "direito das sucessões",
    "testamento": "direito das sucessões",
    "inventário": "direito das sucessões",
    "partilha": "direito das sucessões",
    
    "propriedade": "direito de propriedade",
    "imóvel": "direito de propriedade",
    "registro de imóveis": "direito de propriedade",
    "usucapião": "direito de propriedade",
    "desapropriação": "direito de propriedade",
    
    "contratos": "contratos",
    "contrato": "contratos",
    "obrigações": "contratos",
    "inadimplemento": "contratos",
    "rescisão contratual": "contratos",
    
    // ==========================================
    // TEMAS ADICIONAIS
    // ==========================================
    
    // Direitos da mulher
    "mulher": "direitos da mulher",
    "mulheres": "direitos da mulher",
    "direitos da mulher": "direitos da mulher",
    "proteção da mulher": "direitos da mulher",
    "protecao da mulher": "direitos da mulher",
    "vítima de violência": "violência",
    "vitima de violencia": "violência",
    "vítimas de violência": "violência",
    "vitimas de violencia": "violência",
    
    // Armas (reforço para pegar variações)
    "arma": "armas de fogo",
    "armas": "armas de fogo",
    "armamento": "armas de fogo",
    "munição": "armas de fogo",
    "municao": "armas de fogo",
    "calibre": "armas de fogo",
    "cac": "armas de fogo",
    "caçador": "armas de fogo",
    "atirador": "armas de fogo",
    "colecionador": "armas de fogo",
    
    // Segurança pessoal
    "legítima defesa": "legítima defesa",
    "legitima defesa": "legítima defesa",
    "autodefesa": "legítima defesa",
    "defesa pessoal": "legítima defesa",
    
    // Violência geral
    "violência": "violência",
    "violencia": "violência",
    "agressão": "violência",
    "agressao": "violência",
    "agressor": "violência",
    "vítima": "vítima",
    "vitima": "vítima",
    "vítimas": "vítima",
    "vitimas": "vítima",
};

// Padrões de impacto expandidos
const PADROES_IMPACTO = [
    // Ampliação
    { padrao: /\b(amplia|ampliar|ampliação|estende|estender|extensão|expande|expandir|garante|garantir|assegura|assegurar|inclui|incluir|beneficia|beneficiar|facilita|facilitar|fortalece|fortalecer|aprimora|aprimorar|melhora|melhorar)\b/gi, tag: "amplia direitos" },
    
    // Restrição
    { padrao: /\b(restringe|restringir|restrição|limita|limitar|limitação|veda|vedar|proíbe|proibir|proibição|impede|impedir|suspende|suspender|revoga|revogar|exclui|excluir|retira|retirar|suprime|suprimir)\b/gi, tag: "restringe direitos" },
    
    // Aumento de pena
    { padrao: /\b(aumenta|aumentar|aumento|eleva|elevar|elevação|agrava|agravar|majora|majorar|recrudesce|recrudescer|endurece|endurecer).{0,40}(pena|sanção|sancao|punição|punicao|multa|reclusão|detenção)\b/gi, tag: "aumenta pena" },
    
    // Redução de pena
    { padrao: /\b(reduz|reduzir|redução|diminui|diminuir|atenua|atenuar|minora|minorar|abranda|abrandar|suaviza|suavizar).{0,40}(pena|sanção|sancao|punição|punicao|multa|reclusão|detenção)\b/gi, tag: "reduz pena" },
    
    // Alteração de prazos
    { padrao: /\b(altera|alterar|alteração|modifica|modificar|modificação|fixa|fixar|estabelece|estabelecer|amplia|reduz|estende|prorroga).{0,40}(prazo|prazos|termo|vigência)\b/gi, tag: "altera prazos" },
    
    // Criação de obrigação
    { padrao: /\b(cria|criar|criação|institui|instituir|instituição|estabelece|estabelecer|impõe|impor|determina|determinar|obriga|obrigar).{0,40}(obrigação|obrigacao|dever|exigência|exigencia|requisito|condição)\b/gi, tag: "cria obrigação" },
    
    // Revogação
    { padrao: /\b(revoga|revogar|revogação|extingue|extinguir|extinção|ab-roga|abroga|derroga|suprime|suprimir|supressão|anula|anular)\b/gi, tag: "revoga" },
    
    // Regulamentação
    { padrao: /\b(regulamenta|regulamentar|regulamentação|disciplina|disciplinar|normatiza|normatizar|dispõe sobre|dispoe sobre)\b/gi, tag: "regulamenta" },
    
    // Criação de programa/política
    { padrao: /\b(cria|criar|institui|instituir|implementa|implementar|estabelece|estabelecer).{0,40}(programa|política|politica|plano|fundo|benefício|beneficio|sistema)\b/gi, tag: "cria programa" },
    
    // Alteração de competência
    { padrao: /\b(altera|alterar|modifica|modificar|transfere|transferir|atribui|atribuir|delega|delegar).{0,40}(competência|competencia|atribuição|atribuicao|jurisdição)\b/gi, tag: "altera competência" },
    
    // Tipificação de crime
    { padrao: /\b(tipifica|tipificar|criminaliza|criminalizar|torna crime|define como crime|caracteriza como crime|qualifica como crime)\b/gi, tag: "tipifica crime" },
    
    // Descriminalização
    { padrao: /\b(descriminaliza|descriminalizar|descriminalização|despenaliza|despenalizar|despenalização|deixa de ser crime|abolitio criminis)\b/gi, tag: "descriminaliza" },
    
    // Aumento de valor/benefício
    { padrao: /\b(aumenta|aumentar|eleva|elevar|reajusta|reajustar|majora|majorar|amplia|ampliar).{0,40}(valor|benefício|beneficio|salário|salario|vencimento|subsídio|subsidio|auxílio|auxilio|piso|teto)\b/gi, tag: "aumenta valor/benefício" },
    
    // Isenção/redução tributária
    { padrao: /\b(isenta|isentar|isenção|reduz|reduzir|redução|desconera|desonerar|desoneração).{0,40}(imposto|tributo|contribuição|taxa|icms|ipi|irpf|irpj|cofins|pis)\b/gi, tag: "benefício fiscal" },
    
    // Autorização
    { padrao: /\b(autoriza|autorizar|autorização|permite|permitir|permissão|faculta|facultar|possibilita|possibilitar)\b/gi, tag: "autoriza" },
    
    // Proibição
    { padrao: /\b(proíbe|proibir|proibição|veda|vedar|vedação|impede|impedir|interdita|interditar)\b/gi, tag: "proíbe" },
    
    // Obrigatoriedade
    { padrao: /\b(obriga|obrigatório|obrigatoriedade|torna obrigatório|exige|exigir|exigência|determina|determinar)\b/gi, tag: "torna obrigatório" },
    
    // Facultativo
    { padrao: /\b(faculta|facultativo|torna facultativo|opcional|deixa de ser obrigatório)\b/gi, tag: "torna facultativo" },
    
    // Simplificação
    { padrao: /\b(simplifica|simplificar|simplificação|desburocratiza|desburocratizar|desburocratização|agiliza|agilizar|facilita|facilitar)\b/gi, tag: "simplifica/desburocratiza" },
    
    // Criação de cargo/órgão
    { padrao: /\b(cria|criar|institui|instituir).{0,40}(cargo|emprego|função|órgão|orgao|secretaria|ministério|ministerio|autarquia|fundação|agência)\b/gi, tag: "cria cargo/órgão" },
    
    // Extinção de cargo/órgão
    { padrao: /\b(extingue|extinguir|extinção|suprime|suprimir).{0,40}(cargo|emprego|função|órgão|orgao|secretaria|ministério|ministerio|autarquia|fundação|agência)\b/gi, tag: "extingue cargo/órgão" },
    
    // Reestruturação
    { padrao: /\b(reestrutura|reestruturar|reestruturação|reorganiza|reorganizar|reorganização|reforma|reformar)\b/gi, tag: "reestrutura" },
    
    // Atualização
    { padrao: /\b(atualiza|atualizar|atualização|moderniza|modernizar|modernização|adequa|adequar|adequação)\b/gi, tag: "atualiza/moderniza" },
    
    // Convalidação/Anistia
    { padrao: /\b(convalida|convalidar|convalidação|anistia|anistiar|perdoa|perdoar|perdão|remissão)\b/gi, tag: "convalida/anistia" },
    
    // Prorrogação
    { padrao: /\b(prorroga|prorrogar|prorrogação|estende|estender|extensão).{0,40}(prazo|vigência|vigencia|mandato|contrato)\b/gi, tag: "prorroga" },
];

// Estado global
let resultadosLote = [];
let pdfJsLoaded = false;

// ==========================================
// FUNÇÕES PRINCIPAIS
// ==========================================

function analisarEmenta() {
    const ementa = document.getElementById('ementa-input').value.trim();
    if (!ementa) {
        alert('Por favor, cole uma ementa para analisar.');
        return;
    }
    
    const resultado = classificarEmenta(ementa);
    exibirResultado(resultado);
}

function classificarEmenta(ementa) {
    const textoNormalizado = ementa.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos para matching
        .replace(/[^\w\s.]/g, ' '); // Mantém pontos para números de leis
    
    const textoOriginal = ementa.toLowerCase();
    
    const tagsAssunto = new Set();
    const tagsCodigo = new Set();
    const tagsImpacto = new Set();
    
    // Buscar sinônimos no texto
    for (const [termo, tagOficial] of Object.entries(SINONIMOS)) {
        const termoNorm = termo.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
        // Criar regex para o termo (word boundary)
        try {
            const regex = new RegExp(`\\b${escapeRegex(termoNorm)}\\b`, 'gi');
            const regexOriginal = new RegExp(`\\b${escapeRegex(termo)}\\b`, 'gi');
            
            if (regex.test(textoNormalizado) || regexOriginal.test(textoOriginal)) {
                // Classificar a tag
                if (isCodigoOuLei(tagOficial)) {
                    tagsCodigo.add(tagOficial);
                } else {
                    tagsAssunto.add(tagOficial);
                }
            }
        } catch (e) {
            // Ignora termos que causam erro de regex
        }
    }
    
    // Buscar padrões de impacto
    for (const { padrao, tag } of PADROES_IMPACTO) {
        // Reset lastIndex para evitar problemas com regex global
        padrao.lastIndex = 0;
        if (padrao.test(ementa)) {
            tagsImpacto.add(tag);
        }
    }
    
    return {
        ementa,
        tagsAssunto: Array.from(tagsAssunto).sort(),
        tagsCodigo: Array.from(tagsCodigo).sort(),
        tagsImpacto: Array.from(tagsImpacto).sort()
    };
}

function isCodigoOuLei(tag) {
    const padroes = [
        /código/i, /codigo/i, /\(c[a-z]{1,2}\)/i, /lei /i, /lei\s/i,
        /estatuto/i, /lgpd/i, /marco civil/i, /clt/i, /fundeb/i,
        /loman/i, /susp/i
    ];
    return padroes.some(p => p.test(tag));
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function exibirResultado(resultado) {
    document.getElementById('results-section').classList.remove('hidden');
    
    // Tags de Assunto
    const containerAssunto = document.getElementById('tags-assunto');
    containerAssunto.innerHTML = resultado.tagsAssunto.length > 0 
        ? resultado.tagsAssunto.map(tag => `<span class="tag bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-amber-500/30" onclick="copiarTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</span>`).join('')
        : '<span class="text-gray-500 text-sm">Nenhuma tag identificada</span>';
    
    // Tags de Código
    const containerCodigo = document.getElementById('tags-codigo');
    containerCodigo.innerHTML = resultado.tagsCodigo.length > 0
        ? resultado.tagsCodigo.map(tag => `<span class="tag bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-500/30" onclick="copiarTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</span>`).join('')
        : '<span class="text-gray-500 text-sm">Nenhuma tag identificada</span>';
    
    // Tags de Impacto
    const containerImpacto = document.getElementById('tags-impacto');
    containerImpacto.innerHTML = resultado.tagsImpacto.length > 0
        ? resultado.tagsImpacto.map(tag => `<span class="tag bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-500/30" onclick="copiarTag('${escapeHtml(tag)}')">${escapeHtml(tag)}</span>`).join('')
        : '<span class="text-gray-500 text-sm">Nenhuma tag identificada</span>';
    
    // Contagem
    const total = resultado.tagsAssunto.length + resultado.tagsCodigo.length + resultado.tagsImpacto.length;
    document.getElementById('tags-count').textContent = `(${total} tags encontradas)`;
    
    // Output para copiar
    document.getElementById('output-assunto').textContent = resultado.tagsAssunto.join('; ') || '-';
    document.getElementById('output-codigo').textContent = resultado.tagsCodigo.join('; ') || '-';
    document.getElementById('output-impacto').textContent = resultado.tagsImpacto.join('; ') || '-';
}

function copiarTag(tag) {
    navigator.clipboard.writeText(tag).then(() => {
        mostrarToast(`Tag copiada: ${tag}`);
    });
}

function copiarResultado() {
    const assunto = document.getElementById('output-assunto').textContent;
    const codigo = document.getElementById('output-codigo').textContent;
    const impacto = document.getElementById('output-impacto').textContent;
    
    const texto = `Tags Assunto: ${assunto}\nTags Código: ${codigo}\nTags Impacto: ${impacto}`;
    
    navigator.clipboard.writeText(texto).then(() => {
        mostrarToast('Resultado copiado!');
    });
}

function limparTudo() {
    document.getElementById('ementa-input').value = '';
    document.getElementById('results-section').classList.add('hidden');
}

function mostrarToast(mensagem) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-pulse';
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ==========================================
// PROCESSAMENTO DE PDF
// ==========================================

async function loadPdfJs() {
    if (pdfJsLoaded) return;
    
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        script.onload = () => {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            pdfJsLoaded = true;
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function extrairTextoPDF(file) {
    await loadPdfJs();
    
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    
    let textoCompleto = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        textoCompleto += pageText + '\n';
    }
    
    return textoCompleto;
}

// ==========================================
// PROCESSAMENTO EM LOTE
// ==========================================

function mostrarLoteTexto() {
    const section = document.getElementById('batch-text-section');
    section.classList.toggle('hidden');
}

function processarLote() {
    const texto = document.getElementById('batch-input').value.trim();
    if (!texto) {
        alert('Cole as ementas (uma por linha) para processar.');
        return;
    }
    
    const ementas = texto.split('\n').filter(e => e.trim().length > 10);
    processarEmentas(ementas);
}

async function processarArquivo(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Mostrar loading
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-overlay';
    loadingDiv.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    loadingDiv.innerHTML = `
        <div class="bg-gray-800 p-6 rounded-xl text-center">
            <div class="animate-spin w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p class="text-white">Processando arquivo...</p>
            <p class="text-gray-400 text-sm" id="loading-status">Lendo documento</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
    
    try {
        let ementas = [];
        
        if (file.name.toLowerCase().endsWith('.pdf')) {
            document.getElementById('loading-status').textContent = 'Extraindo texto do PDF...';
            const texto = await extrairTextoPDF(file);
            // Tentar separar por quebras de linha ou padrões comuns
            ementas = texto.split(/\n{2,}|\r\n{2,}/)
                .map(e => e.trim().replace(/\s+/g, ' '))
                .filter(e => e.length > 20);
            
            // Se não separou bem, tratar como uma única ementa grande
            if (ementas.length <= 1 && texto.length > 100) {
                // Tentar separar por padrões de PL/PEC/etc
                ementas = texto.split(/(?=PL\s|PEC\s|PLP\s|PDL\s|MPV\s)/i)
                    .map(e => e.trim())
                    .filter(e => e.length > 20);
            }
        } else if (file.name.endsWith('.csv')) {
            const content = await file.text();
            const linhas = content.split('\n');
            const header = linhas[0].toLowerCase();
            const cols = header.split(/[,;]/);
            const ementaCol = cols.findIndex(col => 
                col.trim().includes('ementa') || 
                col.trim().includes('descrição') ||
                col.trim().includes('descricao') ||
                col.trim().includes('texto')
            );
            
            if (ementaCol >= 0) {
                for (let i = 1; i < linhas.length; i++) {
                    const valores = linhas[i].split(/[,;]/);
                    if (valores[ementaCol]) {
                        ementas.push(valores[ementaCol].trim().replace(/^"|"$/g, ''));
                    }
                }
            } else {
                ementas = linhas.slice(1).filter(l => l.trim().length > 20);
            }
        } else {
            const content = await file.text();
            ementas = content.split('\n').filter(e => e.trim().length > 20);
        }
        
        document.getElementById('loading-status').textContent = `Classificando ${ementas.length} ementas...`;
        
        if (ementas.length > 0) {
            processarEmentas(ementas);
            mostrarToast(`${ementas.length} ementas processadas!`);
        } else {
            alert('Nenhuma ementa encontrada no arquivo. Verifique o formato.');
        }
    } catch (error) {
        console.error('Erro ao processar arquivo:', error);
        alert('Erro ao processar o arquivo: ' + error.message);
    } finally {
        document.getElementById('loading-overlay')?.remove();
    }
}

function processarEmentas(ementas) {
    resultadosLote = ementas.map((ementa, index) => ({
        id: index + 1,
        ...classificarEmenta(ementa)
    }));
    
    exibirResultadosLote();
}

function exibirResultadosLote() {
    document.getElementById('batch-results').classList.remove('hidden');
    document.getElementById('batch-count').textContent = `${resultadosLote.length} ementas processadas`;
    
    const tabela = `
        <div class="max-h-96 overflow-y-auto">
            <table class="w-full text-sm">
                <thead class="sticky top-0 bg-gray-700">
                    <tr>
                        <th class="px-3 py-2 text-left w-12">#</th>
                        <th class="px-3 py-2 text-left w-1/3">Ementa</th>
                        <th class="px-3 py-2 text-left">Tags Assunto</th>
                        <th class="px-3 py-2 text-left">Tags Código/Lei</th>
                        <th class="px-3 py-2 text-left">Tags Impacto</th>
                    </tr>
                </thead>
                <tbody>
                    ${resultadosLote.map(r => `
                        <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                            <td class="px-3 py-2 text-gray-400">${r.id}</td>
                            <td class="px-3 py-2 max-w-xs">
                                <div class="truncate" title="${escapeHtml(r.ementa)}">${escapeHtml(r.ementa.substring(0, 100))}${r.ementa.length > 100 ? '...' : ''}</div>
                            </td>
                            <td class="px-3 py-2 text-amber-400 text-xs">${r.tagsAssunto.join('; ') || '<span class="text-gray-500">-</span>'}</td>
                            <td class="px-3 py-2 text-green-400 text-xs">${r.tagsCodigo.join('; ') || '<span class="text-gray-500">-</span>'}</td>
                            <td class="px-3 py-2 text-blue-400 text-xs">${r.tagsImpacto.join('; ') || '<span class="text-gray-500">-</span>'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    document.getElementById('batch-table').innerHTML = tabela;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function exportarCSV() {
    if (resultadosLote.length === 0) {
        alert('Nenhum resultado para exportar.');
        return;
    }
    
    const headers = ['ID', 'Ementa', 'Tags Assunto', 'Tags Código/Lei', 'Tags Impacto', 'Todas as Tags'];
    const rows = resultadosLote.map(r => {
        const todasTags = [...r.tagsAssunto, ...r.tagsCodigo, ...r.tagsImpacto].join('; ');
        return [
            r.id,
            `"${r.ementa.replace(/"/g, '""')}"`,
            `"${r.tagsAssunto.join('; ')}"`,
            `"${r.tagsCodigo.join('; ')}"`,
            `"${r.tagsImpacto.join('; ')}"`,
            `"${todasTags}"`
        ];
    });
    
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ementas_classificadas_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    
    mostrarToast('CSV exportado com sucesso!');
}

function exportarExcel() {
    if (resultadosLote.length === 0) {
        alert('Nenhum resultado para exportar.');
        return;
    }
    
    // Criar HTML da tabela para Excel
    let html = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head><meta charset="UTF-8"></head>
        <body>
        <table border="1">
            <tr style="background-color: #2E5090; color: white; font-weight: bold;">
                <td>ID</td>
                <td>Ementa</td>
                <td>Tags Assunto</td>
                <td>Tags Código/Lei</td>
                <td>Tags Impacto</td>
                <td>Todas as Tags</td>
            </tr>
    `;
    
    resultadosLote.forEach(r => {
        const todasTags = [...r.tagsAssunto, ...r.tagsCodigo, ...r.tagsImpacto].join('; ');
        html += `
            <tr>
                <td>${r.id}</td>
                <td>${escapeHtml(r.ementa)}</td>
                <td style="color: #D69E2E;">${r.tagsAssunto.join('; ')}</td>
                <td style="color: #38A169;">${r.tagsCodigo.join('; ')}</td>
                <td style="color: #3182CE;">${r.tagsImpacto.join('; ')}</td>
                <td>${todasTags}</td>
            </tr>
        `;
    });
    
    html += '</table></body></html>';
    
    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ementas_classificadas_${new Date().toISOString().split('T')[0]}.xls`;
    link.click();
    URL.revokeObjectURL(url);
    
    mostrarToast('Excel exportado com sucesso!');
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Tags por Ementa v2.0 - INTEIA - Carregado');
    console.log(`Base de conhecimento: ${Object.keys(SINONIMOS).length} termos`);
    console.log(`Padrões de impacto: ${PADROES_IMPACTO.length} padrões`);
});
