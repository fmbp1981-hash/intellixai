-- Exemplo de material. NÃO é aplicado automaticamente.
-- 1) Suba o arquivo no bucket privado "materiais" (ex.: guias/guia-agentes-ia.pdf).
-- 2) Ajuste os campos abaixo e rode no SQL editor do Lovable Cloud.
-- Na descrição, linhas iniciadas por "- " viram a lista "O que você vai aprender".

insert into public.materiais (slug, titulo, descricao, palavra_chave, arquivo_path, capa_url, ativo)
values (
  'guia-agentes-ia',
  'Guia prático: agentes de IA no atendimento',
  E'Um guia direto ao ponto para colocar um agente de IA atendendo no WhatsApp sem perder o controle.\n- Onde um agente de IA resolve e onde ele atrapalha\n- Como escrever as instruções do agente\n- Quais números acompanhar na primeira semana',
  'AGENTE',
  'guias/guia-agentes-ia.pdf',
  null,
  true
)
on conflict (slug) do nothing;
