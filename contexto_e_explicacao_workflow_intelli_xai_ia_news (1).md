# Contexto e Explicação do Workflow de Automação de Notícias de IA – IntelliX.AI

---

## OBJETIVO DESTE DOCUMENTO

Este arquivo tem como objetivo **explicar de forma clara, estratégica e operacional** o que o workflow descrito no prompt principal **realmente faz**, qual problema ele resolve e como ele deve ser interpretado por uma IA de geração de código (Claude Code) para criação correta do fluxo dentro do **n8n**.

Este documento **não substitui o prompt técnico**, mas serve como **contexto explicativo e alinhamento de intenção**, garantindo que o workflow seja gerado exatamente como uma **automação editorial profissional**, e não como um simples agregador de notícias.

---

## VISÃO GERAL DO PROBLEMA QUE O WORKFLOW RESOLVE

A IntelliX.AI precisa produzir conteúdo **recorrente, relevante e estratégico** sobre Inteligência Artificial para:

- Blog institucional
- Redes sociais (Instagram)
- Fortalecer autoridade de marca
- Acompanhar o ritmo acelerado de novidades do mercado de IA

Fazer isso manualmente exige:
- Pesquisa diária
- Curadoria
- Redação
- Criação de imagens
- Publicação multicanal
- Controle do que já foi publicado

O workflow descrito no prompt resolve exatamente esse problema, criando uma **redação automatizada baseada em IA**, orquestrada pelo **n8n**, com controle editorial e consistência estratégica.

---

## O QUE ESSE WORKFLOW É (EM TERMOS SIMPLES)

Este workflow funciona como um **editor-chefe automatizado**, que:

1. Pesquisa notícias relevantes sobre IA
2. Decide quais valem a pena
3. Armazena e controla essas notícias
4. Produz conteúdo editorial com identidade própria
5. Adapta o conteúdo para diferentes canais
6. Publica automaticamente
7. Registra tudo para auditoria e acompanhamento

---

## PRINCÍPIOS-CHAVE DO WORKFLOW

### 1. NÃO É UM SCRAPER CEGO
O workflow **não publica tudo o que encontra**. Ele:
- Avalia relevância
- Filtra ruído
- Prioriza qualidade

### 2. POSSUI MEMÓRIA EDITORIAL
O workflow não é stateless.
Ele mantém histórico e estado por meio de um banco de dados (Neon), evitando:
- Duplicações
- Reposts acidentais
- Perda de controle editorial

### 3. TEM POSICIONAMENTO PRÓPRIO
A IntelliX.AI não apenas replica notícias.
O workflow sempre gera:
- Um **ponto de vista próprio**
- Uma análise estratégica

---

## EXPLICAÇÃO DO FLUXO PASSO A PASSO

### ETAPA 1 — EXECUÇÃO PROGRAMADA (CRON)

O workflow inicia por um **gatilho de tempo**.

Isso garante que:
- A busca por novidades seja recorrente
- O processo seja previsível
- Não dependa de ação humana

---

### ETAPA 2 — PESQUISA DE NOTÍCIAS

Nesta etapa, o workflow atua como um **pesquisador especializado em IA**.

Ele utiliza ferramentas como:
- Perplexity (ou equivalente)
- APIs de busca
- Fontes confiáveis do setor

O objetivo aqui é **descobrir notícias recentes e relevantes**, como:
- Lançamentos de modelos
- Novas ferramentas
- Avanços científicos
- Movimentos de mercado

O output dessa etapa é uma lista estruturada de notícias.

---

### ETAPA 3 — CURADORIA E RELEVÂNCIA

Aqui entra um **agente de IA com papel editorial**.

Ele analisa cada notícia e decide:
- Se é relevante para o público da IntelliX.AI
- Qual o tema principal
- Qual o nível de impacto

Somente notícias que passam nesse filtro seguem adiante.

---

### ETAPA 4 — CONTROLE EDITORIAL (NEON)

O Neon (PostgreSQL) funciona como o **cérebro operacional do workflow**.

Nesta etapa:
- Notícias novas são inseridas
- Notícias duplicadas são ignoradas
- Cada item recebe um status (`novo`, `processado`, `publicado`, etc.)

Esse banco garante que o workflow:
- Saiba o que já foi tratado
- Escolha sempre a próxima notícia correta

---

### ETAPA 5 — PRODUÇÃO DE CONTEÚDO COM IA

Uma vez escolhida a notícia, entram os **agentes de IA produtores de conteúdo**.

Eles são responsáveis por:

#### 1. Conteúdo para Blog
- Texto original
- Estrutura editorial profissional
- Clareza e profundidade

#### 2. Ponto de Vista da IntelliX.AI
- Análise estratégica
- Impactos no mercado e nos negócios
- Posicionamento de autoridade

#### 3. SEO
- Palavras-chave
- Meta title
- Meta description

Essa etapa transforma uma notícia bruta em **conteúdo proprietário**.

---

### ETAPA 6 — GERAÇÃO DE IMAGENS

O workflow então cria imagens contextualizadas para:
- Capa do blog
- Instagram Feed
- Carrossel
- Stories

As imagens são pensadas para:
- Reforçar a mensagem
- Aumentar engajamento
- Manter identidade visual

---

### ETAPA 7 — PUBLICAÇÃO MULTICANAL

Aqui o workflow executa dois caminhos em paralelo:

#### Blog IntelliX.AI
- Publica o artigo completo
- Atualiza o status da notícia como publicada

#### Instagram
- Publica Feed, Carrossel e Stories
- Usa legendas e hashtags geradas pela IA

Essa etapa transforma conteúdo em **presença digital ativa**.

---

### ETAPA 8 — REGISTRO E HISTÓRICO (GOOGLE SHEETS)

Por fim, o workflow registra todas as ações em uma planilha Google Sheets.

Importante:
- O Sheets **não decide nada**
- Ele serve apenas para:
  - Auditoria
  - Visualização
  - Histórico

---

## DIFERENÇA ENTRE NEON E GOOGLE SHEETS NO FLUXO

- **Neon**: banco operacional, decisório, fonte de verdade
- **Google Sheets**: registro humano, histórico e acompanhamento

Essa separação evita erros e mantém o workflow escalável.

---

## COMO O CLAUDE CODE DEVE INTERPRETAR ESTE CONTEXTO

Ao receber o prompt técnico junto com este documento, o Claude Code deve entender que:

- Não está criando um simples script
- Está construindo uma **pipeline editorial automatizada**
- O foco é produção recorrente, confiável e estratégica de conteúdo
- O resultado final deve ser um **workflow real e executável no n8n**

---

## RESULTADO FINAL ESPERADO

Quando o workflow estiver ativo:

- A IntelliX.AI terá um fluxo contínuo de conteúdo sobre IA
- Com qualidade editorial
- Com identidade própria
- Com baixo esforço humano
- Com controle total do que foi publicado

---

## CONCLUSÃO

Este workflow representa a união de:

- Automação (n8n)
- Inteligência Artificial
- Estratégia de marketing de conteúdo
- Operação editorial profissional

Ele transforma o processo de criação de conteúdo em um **sistema escalável**, pronto para acompanhar a velocidade das inovações em Inteligência Artificial.

---

**Documento de contexto e alinhamento estratégico**  
IntelliX.AI – Automação Editorial com IA

