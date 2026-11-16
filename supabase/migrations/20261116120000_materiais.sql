-- Materiais (lead magnet dos CTAs "comente X" do Instagram)
-- Aplicar pelo Lovable Cloud. Não contém dados pessoais.
--
-- Modelo de acesso: NENHUMA política para anon/authenticated. Todo acesso passa
-- pelas server functions do site usando a service role (que ignora RLS).
-- O arquivo do material fica em bucket PRIVADO e só é entregue via URL assinada (1 hora).

-- ---------------------------------------------------------------------------
-- Função de updated_at
-- ---------------------------------------------------------------------------
create or replace function public.materiais_set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- materiais
-- ---------------------------------------------------------------------------
create table if not exists public.materiais (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  titulo text not null check (char_length(titulo) between 2 and 200),
  descricao text,
  palavra_chave text,
  arquivo_path text not null,
  capa_url text,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.materiais is
  'Materiais gratuitos oferecidos no site (/materiais/<slug>). Sem dados pessoais.';
comment on column public.materiais.palavra_chave is
  'Palavra que a pessoa comenta no Instagram para receber o link deste material.';
comment on column public.materiais.arquivo_path is
  'Caminho do arquivo no bucket privado "materiais". Nunca exposto ao navegador; entregue por URL assinada de 1 hora.';
comment on column public.materiais.ativo is
  'Só materiais ativos aparecem no site e aceitam cadastro.';

drop trigger if exists materiais_set_updated_at on public.materiais;
create trigger materiais_set_updated_at
  before update on public.materiais
  for each row execute function public.materiais_set_updated_at();

-- ---------------------------------------------------------------------------
-- material_leads (dados pessoais — LGPD)
-- ---------------------------------------------------------------------------
create table if not exists public.material_leads (
  id uuid primary key default gen_random_uuid(),
  material_id uuid not null references public.materiais (id) on delete restrict,
  nome text not null check (char_length(nome) between 2 and 80),
  whatsapp text not null check (whatsapp ~ '^\+55[1-9][0-9]{9,10}$'),
  email text not null check (email = lower(email) and char_length(email) <= 254),
  consentimento_material boolean not null default true check (consentimento_material = true),
  consentimento_novidades boolean not null default false,
  politica_versao text not null,
  ip inet,
  user_agent text check (user_agent is null or char_length(user_agent) <= 512),
  origem text check (origem is null or char_length(origem) <= 200),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists material_leads_material_created_idx
  on public.material_leads (material_id, created_at);
create index if not exists material_leads_email_idx
  on public.material_leads (lower(email));
create index if not exists material_leads_ip_created_idx
  on public.material_leads (ip, created_at);

comment on table public.material_leads is
  'Cadastros para receber materiais. Dados pessoais tratados com base no consentimento (LGPD art. 7º, I). '
  'Retenção: 24 meses a partir de created_at; depois disso os registros devem ser excluídos '
  '(ex.: delete from public.material_leads where created_at < now() - interval ''24 months''). '
  'Sem rotina automática por enquanto: executar a exclusão manualmente ao menos uma vez por mês.';
comment on column public.material_leads.nome is
  'Dado pessoal. Base legal: consentimento (art. 7º, I). Retenção: 24 meses.';
comment on column public.material_leads.whatsapp is
  'Dado pessoal, E.164 (+55...). Base legal: consentimento (art. 7º, I). Retenção: 24 meses.';
comment on column public.material_leads.email is
  'Dado pessoal, normalizado em minúsculas. Base legal: consentimento (art. 7º, I). Retenção: 24 meses.';
comment on column public.material_leads.consentimento_material is
  'Aceite obrigatório para receber o material e da Política de Privacidade (versão em politica_versao).';
comment on column public.material_leads.consentimento_novidades is
  'Aceite opcional para receber novidades por WhatsApp e e-mail. Só contatar com true. Revogável a qualquer momento.';
comment on column public.material_leads.politica_versao is
  'Versão da Política de Privacidade aceita (prova do consentimento).';
comment on column public.material_leads.ip is
  'Dado pessoal. Usado para prova do consentimento e limite anti-abuso. Retenção: 24 meses.';
comment on column public.material_leads.user_agent is
  'Navegador informado na requisição. Prova do consentimento. Retenção: 24 meses.';
comment on column public.material_leads.origem is
  'Origem do acesso (utm_source/ref), sem dados pessoais.';

drop trigger if exists material_leads_set_updated_at on public.material_leads;
create trigger material_leads_set_updated_at
  before update on public.material_leads
  for each row execute function public.materiais_set_updated_at();

-- ---------------------------------------------------------------------------
-- RLS: ativo e forçado, sem políticas para anon/authenticated
-- ---------------------------------------------------------------------------
alter table public.materiais enable row level security;
alter table public.materiais force row level security;
alter table public.material_leads enable row level security;
alter table public.material_leads force row level security;

revoke all on table public.materiais from anon, authenticated;
revoke all on table public.material_leads from anon, authenticated;
revoke all on function public.materiais_set_updated_at() from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Storage: bucket privado, sem políticas públicas
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit)
values ('materiais', 'materiais', false, 52428800)
on conflict (id) do update set public = false;
