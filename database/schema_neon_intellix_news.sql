-- ============================================================
-- INTELLIX.AI - SCHEMA COMPLETO PARA WORKFLOW DE AUTOMACAO
-- Banco: neondb @ Neon (PostgreSQL 17.7 Serverless)
-- Endpoint: ep-floral-mud-acnwecam.sa-east-1.aws.neon.tech
-- Versao: 2.0
-- Data: 2026-02
-- Status: EXECUTADO
-- Inclui: 9 tabelas, ENUMs, triggers, views, dados seed
-- Tabelas: ai_news, blog_posts, promo_content, weekly_summary,
--          publication_log, workflow_metrics, brand_config,
--          keywords_config, rss_feeds
-- ============================================================

-- ============================================================
-- EXTENSOES NECESSARIAS
-- ============================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- TIPOS ENUMERADOS (ENUMS)
-- ============================================================

-- Status do conteudo editorial (noticias)
CREATE TYPE content_status AS ENUM (
    'novo',
    'em_analise',
    'aprovado',
    'em_producao',
    'revisao',
    'agendado',
    'publicado',
    'descartado',
    'erro'
);

-- Categorias de noticias de IA
CREATE TYPE news_category AS ENUM (
    'lancamentos',
    'pesquisa',
    'regulamentacao',
    'mercado',
    'tutoriais',
    'opiniao',
    'eventos'
);

-- Tipos de conteudo promocional
CREATE TYPE promo_type AS ENUM (
    'case_estudo',
    'produto_interno',
    'servico',
    'depoimento',
    'oferta',
    'institucional'
);

-- Formato de publicacao
CREATE TYPE pub_format AS ENUM (
    'artigo_completo',
    'artigo_rapido',
    'news_flash',
    'carrossel',
    'feed_single',
    'stories',
    'resumo_semanal'
);

-- Fonte de pesquisa
CREATE TYPE news_source AS ENUM (
    'perplexity',
    'google_news',
    'rss_feed',
    'twitter_x',
    'manual'
);

-- ============================================================
-- FUNCAO UTILITARIA: update_updated_at_column
-- (Criada antes das tabelas para ser referenciada nos triggers)
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- FUNCAO: calculate_total_score
-- Media ponderada: impacto(30%) + novidade(25%) + relevancia(30%) + engajamento(15%)
-- ============================================================
CREATE OR REPLACE FUNCTION calculate_total_score()
RETURNS TRIGGER AS $$
BEGIN
    NEW.score_total = (
        COALESCE(NEW.score_impacto, 0) * 0.30 +
        COALESCE(NEW.score_novidade, 0) * 0.25 +
        COALESCE(NEW.score_relevancia, 0) * 0.30 +
        COALESCE(NEW.score_engajamento, 0) * 0.15
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- TABELA 1: ai_news (Conteudo Editorial - tabela principal)
-- ============================================================
CREATE TABLE ai_news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Dados da noticia original
    titulo TEXT NOT NULL,
    titulo_original TEXT,
    fonte TEXT NOT NULL,
    fonte_tipo news_source DEFAULT 'perplexity',
    url_fonte TEXT UNIQUE NOT NULL,
    resumo_bruto TEXT,
    data_noticia TIMESTAMP,
    idioma_original VARCHAR(5) DEFAULT 'en',

    -- Curadoria e classificacao
    categoria news_category,
    palavras_chave TEXT[],
    score_impacto DECIMAL(3,1),
    score_novidade DECIMAL(3,1),
    score_relevancia DECIMAL(3,1),
    score_engajamento DECIMAL(3,1),
    score_total DECIMAL(4,2),
    motivo_descarte TEXT,

    -- Conteudo produzido
    conteudo_blog TEXT,
    conteudo_resumo TEXT,
    ponto_vista_intellix TEXT,
    meta_title VARCHAR(70),
    meta_description VARCHAR(160),
    slug VARCHAR(200),
    tempo_leitura INTEGER,
    formato_publicacao pub_format DEFAULT 'artigo_completo',

    -- Instagram
    legenda_instagram TEXT,
    legenda_carrossel TEXT[],
    hashtags TEXT[],

    -- Imagens
    imagem_capa_url TEXT,
    imagem_feed_url TEXT,
    imagem_carrossel_urls TEXT[],
    imagem_stories_url TEXT,
    imagem_prompt TEXT,
    imagem_fallback BOOLEAN DEFAULT FALSE,

    -- Publicacao
    status content_status DEFAULT 'novo',
    url_blog TEXT,
    url_instagram TEXT,
    agendado_para TIMESTAMP,
    publicado_em TIMESTAMP,

    -- Controle de erros e retry
    erro_mensagem TEXT,
    erro_etapa VARCHAR(50),
    tentativas_publicacao INTEGER DEFAULT 0,

    -- Metadados
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    processado_por VARCHAR(100),

    -- Validacao de qualidade
    checklist_titulo BOOLEAN DEFAULT FALSE,
    checklist_meta BOOLEAN DEFAULT FALSE,
    checklist_conteudo BOOLEAN DEFAULT FALSE,
    checklist_pov BOOLEAN DEFAULT FALSE,
    checklist_subtitulos BOOLEAN DEFAULT FALSE,
    checklist_cta BOOLEAN DEFAULT FALSE,
    checklist_imagens BOOLEAN DEFAULT FALSE,
    qualidade_aprovada BOOLEAN DEFAULT FALSE
);

CREATE TRIGGER update_ai_news_updated_at
    BEFORE UPDATE ON ai_news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER calculate_ai_news_score
    BEFORE INSERT OR UPDATE OF score_impacto, score_novidade, score_relevancia, score_engajamento
    ON ai_news
    FOR EACH ROW EXECUTE FUNCTION calculate_total_score();

-- ============================================================
-- TABELA 2: blog_posts (Posts publicados no Blog)
-- O workflow insere aqui via INSERT direto (sem Supabase)
-- O frontend le desta tabela para exibir o blog
-- ============================================================
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    category TEXT DEFAULT 'Geral',
    author TEXT DEFAULT 'IntelliX.AI',
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- TABELA 3: promo_content (Conteudo Promocional / Cases)
-- ============================================================
CREATE TABLE promo_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Classificacao
    tipo promo_type NOT NULL,
    nome_projeto VARCHAR(200) NOT NULL,
    segmento VARCHAR(100),

    -- Dados do case/produto
    descricao_curta TEXT,
    descricao_completa TEXT,
    problema_resolvido TEXT,
    solucao_aplicada TEXT,
    resultados TEXT,
    depoimento_cliente TEXT,
    cliente_nome VARCHAR(100),

    -- URLs e referencias
    url_projeto TEXT,
    url_imagem_principal TEXT,
    url_imagens_extras TEXT[],

    -- Conteudo para Instagram
    legenda_feed TEXT,
    legenda_carrossel TEXT[],
    legenda_stories TEXT,
    hashtags TEXT[],
    cta_texto VARCHAR(200),
    cta_link TEXT,

    -- Controle de rotacao
    status VARCHAR(20) DEFAULT 'ativo',
    prioridade INTEGER DEFAULT 5,
    ultima_publicacao TIMESTAMP,
    proxima_publicacao TIMESTAMP,
    frequencia_dias INTEGER DEFAULT 14,
    total_publicacoes INTEGER DEFAULT 0,

    -- Metadados
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER update_promo_content_updated_at
    BEFORE UPDATE ON promo_content
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- TABELA 4: weekly_summary (Resumos Semanais)
-- ============================================================
CREATE TABLE weekly_summary (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Periodo
    semana_inicio DATE NOT NULL,
    semana_fim DATE NOT NULL,
    numero_semana INTEGER,
    ano INTEGER,

    -- Estatisticas
    total_noticias_capturadas INTEGER DEFAULT 0,
    total_noticias_publicadas INTEGER DEFAULT 0,
    total_promos_publicadas INTEGER DEFAULT 0,
    categorias_cobertas TEXT[],

    -- Top 5 noticias da semana
    top_noticias_ids UUID[],
    top_noticias_titulos TEXT[],

    -- Conteudo do resumo
    titulo_resumo VARCHAR(200),
    introducao TEXT,
    conteudo_resumo TEXT,
    conclusao TEXT,
    ponto_vista_semanal TEXT,

    -- Instagram
    legenda_instagram TEXT,
    carrossel_slides TEXT[],
    hashtags TEXT[],

    -- Imagens
    imagem_capa_url TEXT,
    imagem_carrossel_urls TEXT[],

    -- Publicacao
    status content_status DEFAULT 'novo',
    url_blog TEXT,
    url_instagram TEXT,
    publicado_em TIMESTAMP,

    -- Metadados
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER update_weekly_summary_updated_at
    BEFORE UPDATE ON weekly_summary
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- TABELA 5: publication_log (Log de Publicacoes)
-- ============================================================
CREATE TABLE publication_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Referencia
    content_type VARCHAR(20) NOT NULL,
    content_id UUID NOT NULL,

    -- Publicacao
    plataforma VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL,

    -- Detalhes
    url_publicada TEXT,
    mensagem TEXT,
    tempo_execucao_ms INTEGER,
    tentativa_numero INTEGER DEFAULT 1,

    -- Metadados
    created_at TIMESTAMP DEFAULT NOW(),
    execution_id VARCHAR(100)
);

-- ============================================================
-- TABELA 6: workflow_metrics (Metricas do Workflow)
-- ============================================================
CREATE TABLE workflow_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Periodo
    data DATE NOT NULL,
    hora INTEGER,

    -- Metricas de captura
    noticias_capturadas INTEGER DEFAULT 0,
    noticias_duplicadas INTEGER DEFAULT 0,
    noticias_aprovadas INTEGER DEFAULT 0,
    noticias_descartadas INTEGER DEFAULT 0,

    -- Metricas de publicacao
    publicacoes_blog INTEGER DEFAULT 0,
    publicacoes_instagram INTEGER DEFAULT 0,
    publicacoes_falhas INTEGER DEFAULT 0,

    -- Metricas de qualidade
    score_medio DECIMAL(4,2),
    tempo_medio_pipeline_ms INTEGER,

    -- Por categoria
    categoria_lancamentos INTEGER DEFAULT 0,
    categoria_pesquisa INTEGER DEFAULT 0,
    categoria_regulamentacao INTEGER DEFAULT 0,
    categoria_mercado INTEGER DEFAULT 0,
    categoria_tutoriais INTEGER DEFAULT 0,

    -- Alertas
    alerta_gerado BOOLEAN DEFAULT FALSE,
    alerta_tipo VARCHAR(50),
    alerta_mensagem TEXT,

    -- Metadados
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================================
-- TABELA 7: brand_config (Configuracoes da Marca)
-- ============================================================
CREATE TABLE brand_config (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chave VARCHAR(100) UNIQUE NOT NULL,
    valor TEXT NOT NULL,
    descricao TEXT,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ============================================================
-- TABELA 8: keywords_config (Palavras-chave de Pesquisa)
-- ============================================================
CREATE TABLE keywords_config (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    keyword VARCHAR(100) NOT NULL,
    categoria news_category,
    prioridade INTEGER DEFAULT 5,
    ativa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================================
-- TABELA 9: rss_feeds (Fontes RSS)
-- ============================================================
CREATE TABLE rss_feeds (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(100) NOT NULL,
    url TEXT NOT NULL,
    categoria news_category,
    prioridade INTEGER DEFAULT 5,
    ultima_leitura TIMESTAMP,
    ativa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================================================
-- INDICES PARA PERFORMANCE
-- ============================================================

-- ai_news
CREATE INDEX idx_ai_news_status ON ai_news(status);
CREATE INDEX idx_ai_news_created ON ai_news(created_at DESC);
CREATE INDEX idx_ai_news_categoria ON ai_news(categoria);
CREATE INDEX idx_ai_news_score ON ai_news(score_total DESC);
CREATE INDEX idx_ai_news_agendado ON ai_news(agendado_para) WHERE agendado_para IS NOT NULL;
CREATE INDEX idx_ai_news_url_fonte ON ai_news(url_fonte);

-- blog_posts
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_published ON blog_posts(published) WHERE published = true;

-- promo_content
CREATE INDEX idx_promo_status ON promo_content(status);
CREATE INDEX idx_promo_tipo ON promo_content(tipo);
CREATE INDEX idx_promo_proxima ON promo_content(proxima_publicacao);
CREATE INDEX idx_promo_prioridade ON promo_content(prioridade DESC);

-- weekly_summary
CREATE INDEX idx_weekly_semana ON weekly_summary(semana_inicio);
CREATE INDEX idx_weekly_status ON weekly_summary(status);

-- publication_log
CREATE INDEX idx_publog_content ON publication_log(content_type, content_id);
CREATE INDEX idx_publog_data ON publication_log(created_at DESC);
CREATE INDEX idx_publog_status ON publication_log(status);

-- workflow_metrics
CREATE INDEX idx_metrics_data ON workflow_metrics(data DESC);

-- ============================================================
-- VIEWS UTEIS
-- ============================================================

-- View: Noticias prontas para producao (top 10 por score)
CREATE VIEW vw_noticias_para_produzir AS
SELECT id, titulo, categoria, score_total, created_at
FROM ai_news
WHERE status = 'aprovado'
ORDER BY score_total DESC, created_at ASC
LIMIT 10;

-- View: Proximas publicacoes agendadas
CREATE VIEW vw_proximas_publicacoes AS
SELECT
    'ai_news' AS tipo,
    id,
    titulo AS nome,
    agendado_para,
    status::text
FROM ai_news
WHERE status = 'agendado' AND agendado_para > NOW()
UNION ALL
SELECT
    'promo' AS tipo,
    id,
    nome_projeto AS nome,
    proxima_publicacao AS agendado_para,
    status
FROM promo_content
WHERE status = 'ativo' AND proxima_publicacao > NOW()
ORDER BY agendado_para ASC;

-- View: Metricas resumidas do dia
CREATE VIEW vw_metricas_hoje AS
SELECT
    COUNT(*) FILTER (WHERE status = 'novo') AS novos,
    COUNT(*) FILTER (WHERE status = 'aprovado') AS aprovados,
    COUNT(*) FILTER (WHERE status = 'publicado') AS publicados,
    COUNT(*) FILTER (WHERE status = 'descartado') AS descartados,
    COUNT(*) FILTER (WHERE status = 'erro') AS erros,
    AVG(score_total) FILTER (WHERE score_total IS NOT NULL) AS score_medio
FROM ai_news
WHERE DATE(created_at) = CURRENT_DATE;

-- View: Performance por categoria
CREATE VIEW vw_performance_categoria AS
SELECT
    categoria,
    COUNT(*) AS total,
    COUNT(*) FILTER (WHERE status = 'publicado') AS publicados,
    ROUND(AVG(score_total)::numeric, 2) AS score_medio
FROM ai_news
WHERE categoria IS NOT NULL
GROUP BY categoria
ORDER BY total DESC;

-- View: Posts publicados no blog (leitura publica)
CREATE VIEW vw_blog_publicados AS
SELECT id, title, slug, excerpt, cover_image, category, author, published_at
FROM blog_posts
WHERE published = true
ORDER BY published_at DESC;

-- ============================================================
-- DADOS SEED: brand_config
-- ============================================================
INSERT INTO brand_config (chave, valor, descricao) VALUES
('tom_voz', 'Profissional, acessivel, inovador. Evitar jargoes excessivos. Focar em valor pratico.', 'Tom de voz para todos os conteudos'),
('personalidade', 'Especialista confiavel em IA aplicada a negocios. Parceiro estrategico, nao vendedor.', 'Personalidade da marca'),
('palavras_evitar', 'revolucionario, disruptivo, game-changer, sinergias, leverage', 'Termos proibidos'),
('cta_padrao', 'Quer aplicar IA no seu negocio? Faca um diagnostico gratuito.', 'Call-to-action padrao'),
('hashtags_fixas', '#InteligenciaArtificial #IA #AutomacaoInteligente #IntelliXAI #TechBrasil', 'Hashtags sempre incluidas'),
('cores_marca', '{"primary": "#6366f1", "accent": "#f59e0b", "dark": "#1e1b4b"}', 'Paleta de cores JSON'),
('estilo_imagem', 'Futurista minimalista, tons azul/roxo, elementos tech abstratos, sem pessoas genericas', 'Estilo visual para IA'),
('horario_blog', '09:00', 'Melhor horario para publicar no blog'),
('horario_instagram', '12:00', 'Melhor horario para publicar no Instagram'),
('min_score_aprovacao', '7.0', 'Score minimo para aprovar noticia');

-- ============================================================
-- DADOS SEED: keywords_config (24 palavras-chave)
-- ============================================================
INSERT INTO keywords_config (keyword, categoria, prioridade) VALUES
-- Ferramentas e empresas
('OpenAI', 'lancamentos', 10),
('Claude AI', 'lancamentos', 10),
('Anthropic', 'lancamentos', 10),
('GPT-5', 'lancamentos', 10),
('Gemini Google', 'lancamentos', 9),
('Microsoft Copilot', 'lancamentos', 9),
('Midjourney', 'lancamentos', 8),
('Stable Diffusion', 'lancamentos', 8),
-- Conceitos tecnicos
('LLM', 'pesquisa', 8),
('Large Language Model', 'pesquisa', 8),
('Machine Learning', 'pesquisa', 7),
('Deep Learning', 'pesquisa', 7),
('Neural Network', 'pesquisa', 7),
('RAG Retrieval', 'pesquisa', 8),
('Fine-tuning', 'pesquisa', 7),
('Prompt Engineering', 'tutoriais', 8),
-- Mercado
('AI startup', 'mercado', 8),
('AI investment', 'mercado', 8),
('AI funding', 'mercado', 7),
('AI acquisition', 'mercado', 7),
-- Regulamentacao
('AI regulation', 'regulamentacao', 9),
('AI ethics', 'regulamentacao', 8),
('AI safety', 'regulamentacao', 9),
('EU AI Act', 'regulamentacao', 9),
-- Aplicacoes
('AI automation', 'tutoriais', 9),
('AI business', 'mercado', 9),
('AI agents', 'lancamentos', 10),
('Chatbot AI', 'lancamentos', 8);

-- ============================================================
-- DADOS SEED: rss_feeds (8 fontes)
-- ============================================================
INSERT INTO rss_feeds (nome, url, categoria, prioridade) VALUES
('TechCrunch AI', 'https://techcrunch.com/category/artificial-intelligence/feed/', 'lancamentos', 9),
('MIT Tech Review AI', 'https://www.technologyreview.com/topic/artificial-intelligence/feed', 'pesquisa', 10),
('The Verge AI', 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', 'lancamentos', 8),
('Wired AI', 'https://www.wired.com/feed/tag/ai/latest/rss', 'lancamentos', 8),
('VentureBeat AI', 'https://venturebeat.com/category/ai/feed/', 'mercado', 9),
('AI News', 'https://www.artificialintelligence-news.com/feed/', 'lancamentos', 7),
('Google AI Blog', 'https://blog.google/technology/ai/rss/', 'lancamentos', 9),
('OpenAI Blog', 'https://openai.com/blog/rss/', 'lancamentos', 10);

-- ============================================================
-- DADOS SEED: promo_content (10 cases IntelliX)
-- ============================================================
INSERT INTO promo_content (tipo, nome_projeto, segmento, descricao_curta, descricao_completa, problema_resolvido, solucao_aplicada, resultados, url_projeto, prioridade) VALUES

('produto_interno', 'IntelliX CRM', 'Produto IntelliX',
 'Sistema de gestao de relacionamento 100% adaptavel ao seu negocio.',
 'CRM personalizado com dashboards inteligentes, gestao de leads e clientes, automacao de tarefas e integracao completa com WhatsApp e email.',
 'CRMs genericos nao se adaptam ao fluxo real da empresa, gerando retrabalho e perda de oportunidades.',
 'Desenvolvimento de CRM sob medida com campos, pipelines e automacoes especificos para cada negocio.',
 'Aumento de 40% na conversao de leads e reducao de 60% no tempo de gestao comercial.',
 '#', 10),

('produto_interno', 'IntelliX Disparo', 'Produto IntelliX',
 'Plataforma de disparo em massa via API Oficial do WhatsApp.',
 'Campanhas segmentadas, automacoes inteligentes, atendimento escalavel com total seguranca e conformidade com as politicas do WhatsApp.',
 'Empresas precisam escalar comunicacao via WhatsApp sem risco de bloqueio ou perda de numero.',
 'Plataforma white-label com API oficial, templates aprovados e gestao completa de campanhas.',
 'Alcance de 50.000+ mensagens/dia com taxa de entrega de 98% e zero bloqueios.',
 '#', 10),

('case_estudo', 'LeadFinder Pro', 'Vendas B2B',
 'Plataforma de prospeccao que aumenta eficiencia de vendas em ate 3x.',
 'Sistema completo de qualificacao automatica de leads com automacao de outbound, scoring inteligente e integracao com CRMs.',
 'Equipes de vendas gastavam 70% do tempo em prospeccao manual e leads frios.',
 'Automacao de prospeccao com IA, scoring preditivo e cadencias de outbound personalizadas.',
 'Reducao de 70% no tempo de prospeccao e aumento de 3x na taxa de agendamento de reunioes.',
 'https://prospect-pulse-54.vercel.app/', 9),

('case_estudo', 'Vo.AI', 'Agencias de Viagem',
 'CRM inteligente com atendimento via IA para agencias de viagem.',
 'Plataforma completa para gestao de agencias com atendimento automatizado, vendas, gestao de clientes e orcamentos personalizados.',
 'Agencias perdiam vendas por demora no atendimento e dificuldade em gerenciar multiplos canais.',
 'IA para atendimento 24/7, CRM integrado e automacao de orcamentos.',
 'Aumento de 150% nas conversoes e atendimento 24/7 sem custos adicionais.',
 'https://vo-ai.vercel.app/', 8),

('case_estudo', 'Sistema GIG', 'Consultoria Empresarial',
 'Portal de governanca para consultorias especializadas.',
 'Sistema de gestao e controle corporativo para consultorias de governanca, compliance e gestao de riscos.',
 'Consultorias usavam planilhas e documentos dispersos para controlar projetos complexos.',
 'Portal centralizado com workflows, controle de entregas e dashboards de compliance.',
 'Reducao de 80% no tempo de geracao de relatorios e zero nao-conformidades em auditorias.',
 'https://cavendish-gig.vercel.app/auth', 8),

('case_estudo', 'ClinicaFlow', 'Clinicas Odontologicas',
 'Gestao integrada para clinicas odontologicas.',
 'Plataforma com agenda inteligente, prontuarios digitais, controle financeiro e comunicacao automatizada com pacientes.',
 'Clinicas perdiam pacientes por falhas de agendamento e falta de follow-up.',
 'Sistema completo de gestao com lembretes automaticos, prontuario digital e controle financeiro.',
 'Reducao de 90% em faltas de pacientes e aumento de 35% no faturamento.',
 'https://allo-oral-clinic-gest-o.vercel.app/', 7),

('case_estudo', 'VibeGuard', 'Compliance e Seguranca',
 'Sistema de monitoramento para ambientes de controle.',
 'Monitoramento de atividades e indicadores de seguranca para empresas com necessidade de controle rigoroso.',
 'Empresas nao conseguiam monitorar atividades suspeitas em tempo real.',
 'Dashboard de monitoramento com alertas automaticos e logs completos de auditoria.',
 'Identificacao 10x mais rapida de anomalias e compliance 100% em auditorias.',
 'https://vibeguard-monitor.vercel.app/', 7),

('case_estudo', 'XPagBrasil', 'Fintech / Pagamentos',
 'Landing page de alta conversao para solucoes de pagamento.',
 'Pagina otimizada para captura de leads qualificados no setor de pagamentos e servicos financeiros.',
 'Fintech com baixa conversao no site e custo alto de aquisicao de clientes.',
 'Landing page com copy persuasivo, design conversion-focused e integracao com CRM.',
 'Aumento de 200% na taxa de conversao e reducao de 40% no CAC.',
 'https://xpagbrasil-one-page.vercel.app/', 6),

('case_estudo', 'Be Your Home', 'Incorporadora Imobiliaria',
 'Portal de imoveis com apresentacao premium.',
 'Site com galeria de fotos, tour virtual e captacao de leads interessados em empreendimentos.',
 'Incorporadora perdia leads por site desatualizado e sem captura eficiente.',
 'Portal moderno com tour virtual, galeria profissional e formularios inteligentes.',
 'Aumento de 180% na geracao de leads qualificados.',
 'https://grupo-cavendish-byh-site.vercel.app/', 6),

('case_estudo', 'Grupo Cavendish', 'Consultoria de Governanca',
 'Site institucional premium para consultoria de alto nivel.',
 'Presenca digital completa com apresentacao de servicos, equipe e cases de sucesso.',
 'Consultoria de alto ticket sem presenca digital a altura do posicionamento.',
 'Site institucional premium com posicionamento estrategico e captura de leads.',
 'Aumento de 120% em consultas via site e posicionamento como referencia no setor.',
 'https://grupo-cavendish.vercel.app/', 6);

-- ============================================================
-- FIM DO SCHEMA v2.0
-- 9 tabelas | 5 ENUMs | 2 funcoes | 5 triggers | 5 views
-- 10 brand configs | 28 keywords | 8 RSS feeds | 10 cases promo
-- ============================================================
