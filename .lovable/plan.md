# Por que a atualização de parcelamento não aplica

## Diagnóstico

A pré-visualização aberta agora não é a versão atual do projeto: é a pré-visualização de um commit antigo (`92c98a09`, "Virada Inteligente — categoryLabel atualizado para EDUCAÇÃO / EXPERIÊNCIA", de 12/06). Enquanto essa tela de histórico está aberta, ela é somente leitura — qualquer alteração nova não aparece ali, e é por isso que a correção fica "pendente".

O texto de parcelamento hoje existe em um único lugar do código:

- `src/pages/ViradaInteligente.tsx` (linha 519): `*Parcelamento em até 12x no cartão de crédito. PIX e boleto à vista.`

Nenhuma outra página do site menciona parcelamento.

## Como resolver

1. Sair da visualização do commit antigo e voltar para a versão mais recente do projeto (ou clicar em **Restore** se você realmente quiser voltar o projeto para aquele ponto do dia 12/06 — atenção: isso descarta o que veio depois).
2. Confirmar a nova regra de parcelamento desejada (número de parcelas, valor, se há juros, formas de pagamento à vista).
3. Aplicar o ajuste no texto em `src/pages/ViradaInteligente.tsx` e, se necessário, replicar em outras páginas de oferta.

## Detalhes técnicos

- A alteração é apenas de conteúdo/apresentação: uma string em `ViradaInteligente.tsx`. Não há lógica de pagamento ou backend envolvida.
- Se no futuro o parcelamento aparecer em mais de uma página, vale extrair o texto para uma constante compartilhada para evitar divergência.

Assim que você confirmar a redação nova (ex.: "em até 12x sem juros no cartão"), aplico a correção na versão atual.
