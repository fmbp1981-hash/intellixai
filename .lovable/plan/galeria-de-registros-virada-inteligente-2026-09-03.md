# Galeria de Registros — Virada Inteligente

## Objetivo

Criar uma seção de galeria (fotos e vídeos) na página Virada Inteligente para mostrar os treinamentos já realizados, começando pelo registro in company na Yolo Coliving (27/08/2026).

## O que será criado

1. **Nova seção "Registros das turmas"** na página `/virada-inteligente`, posicionada após a seção de metodologia/fases e antes da área de turmas/inscrição — para funcionar como prova social antes da conversão.

2. **Estrutura por edição**: cada turma vira um bloco com:
   - Cliente/local (Yolo Coliving), formato (In Company), data (27/08/2026) e cidade
   - Uma frase curta de contexto ("Equipe capacitada nas principais ferramentas de IA aplicadas à rotina comercial")
   - Grade de mídias (fotos e, quando houver, vídeos)

3. **Grade de mídias responsiva**: layout tipo mosaico (2 colunas no mobile, 3–4 no desktop), imagens com cantos arredondados, borda sutil e hover discreto (leve zoom + brilho), mantendo o padrão visual escuro/premium do site.

4. **Lightbox**: clique na foto abre a mídia ampliada em um modal (usando o Dialog já existente do projeto), com legenda e navegação entre itens da mesma turma. Vídeos abrem no mesmo modal com player nativo.

5. **Suporte a vídeo**: cada item de mídia tem tipo `image` ou `video`; itens de vídeo exibem miniatura com ícone de play. Nesta primeira entrega entram as 4 fotos enviadas; os vídeos podem ser adicionados depois apenas incluindo novos itens na lista.

6. **Escalabilidade**: a lista de edições fica em um arquivo de dados separado, então cada nova turma é adicionada com poucas linhas, sem mexer no layout.

## Detalhes técnicos

- Novo componente `src/components/virada/GaleriaRegistros.tsx` + dados em `src/data/viradaRegistros.ts` (tipo `{ id, cliente, formato, data, local, descricao, midias: { tipo, url, alt, poster? }[] }`).
- Imagens enviadas publicadas via Lovable Assets (`lovable-assets create`) e referenciadas pelos ponteiros `.asset.json` — nenhum binário grande no repositório.
- Lightbox com `@/components/ui/dialog` (shadcn já instalado); animações de entrada com `AnimatedSection`, mantendo o padrão da página.
- `loading="lazy"` e `alt` descritivo em todas as imagens (SEO/performance).
- Alteração pontual em `src/pages/ViradaInteligente.tsx` apenas para inserir a nova seção.

## Observação

A foto do treinamento na TV e a foto do instrutor entram como registros de bastidores; as duas fotos de grupo entram como destaque da turma. Se você tiver os vídeos do dia 27/08, é só enviar depois que eu incluo na mesma galeria.
