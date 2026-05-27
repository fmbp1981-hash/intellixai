import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, MessageCircle, Search, Hammer, Map, Users } from "lucide-react";

const WHATSAPP_NUMBER = "5581988514775";
const TOTAL_STEPS = 3;

// ─── OPTIONS ─────────────────────────────────────────────────────────────────

const segmentos = [
  "Serviços profissionais (consultoria, advocacia, contabilidade)",
  "Saúde (clínicas, hospitais, laboratórios)",
  "Imobiliário (incorporadoras, imobiliárias, coliving)",
  "Indústria e manufatura",
  "Varejo e e-commerce",
  "Tecnologia e SaaS",
  "Educação",
  "Financeiro e fintech",
  "Hospitalidade (hotéis, turismo)",
  "Logística e transporte",
  "Outro",
];

const tamanhos = [
  "Solo (eu mesmo)",
  "2 a 10 colaboradores",
  "11 a 50 colaboradores",
  "51 a 200 colaboradores",
  "201 a 500 colaboradores",
  "Mais de 500 colaboradores",
];

const cargos = [
  "Sócio / Fundador / CEO",
  "Diretor de área",
  "Gerente",
  "Coordenador / Líder de time",
  "Especialista / Analista sênior",
  "Outro",
];

const urgencias = [
  "Esta semana",
  "Nos próximos 30 dias",
  "Nos próximos 90 dias",
  "Sem prazo definido — quero explorar",
];

const faturamentos = [
  "Até R$ 500 mil / ano",
  "R$ 500 mil – R$ 1 milhão / ano",
  "R$ 1 milhão – R$ 5 milhões / ano",
  "R$ 5 milhões – R$ 20 milhões / ano",
  "Acima de R$ 20 milhões / ano",
  "Prefiro não informar",
];

const operacoes = [
  "B2B — vendo para empresas",
  "B2C — vendo para consumidor final",
  "Ambos (B2B e B2C)",
];

const maturidadesIA = [
  "Não uso IA no trabalho",
  "Estou começando a explorar",
  "Uso algumas ferramentas pontualmente",
  "Uso IA regularmente em vários processos",
];

const objetivos = [
  "Automatizar processos manuais repetitivos",
  "Melhorar atendimento e experiência do cliente",
  "Aumentar vendas e conversão de leads",
  "Reduzir custos operacionais",
  "Escalar operação sem aumentar headcount",
  "Estruturar governança e base de conhecimento",
  "Outro",
];

const comoConheceu = [
  "Instagram / Redes Sociais",
  "Indicação de alguém",
  "Google / Pesquisa",
  "LinkedIn",
  "Evento ou palestra",
  "Outro",
];

const frentes = [
  {
    value: "RADAR.AI — Consultoria estratégica de IA",
    icon: Search,
    label: "RADAR.AI",
    description: "Diagnóstico estratégico — quero mapear onde a IA gera mais ROI antes de investir",
    color: "border-primary/50 bg-primary/8",
    activeColor: "border-primary bg-primary/15",
    iconColor: "text-primary",
  },
  {
    value: "FORJA.AI — Solução sob medida para minha empresa",
    icon: Hammer,
    label: "FORJA.AI",
    description: "Desenvolvimento sob medida — tenho um problema específico que precisa de solução própria",
    color: "border-accent/40 bg-accent/6",
    activeColor: "border-accent bg-accent/15",
    iconColor: "text-accent",
  },
  {
    value: "TRILHA.AI — Mentoria individual para mim",
    icon: Map,
    label: "TRILHA.AI",
    description: "Mentoria individual — quero aprender a aplicar IA no meu próprio trabalho com acompanhamento 1:1",
    color: "border-white/10 bg-white/4",
    activeColor: "border-white/30 bg-white/10",
    iconColor: "text-white/70",
  },
  {
    value: "Virada Inteligente in-company — Treinar minha equipe",
    icon: Users,
    label: "Virada Inteligente in-company",
    description: "Imersão in-company — quero treinar minha equipe inteira em 4 horas com casos reais",
    color: "border-yellow-500/30 bg-yellow-500/5",
    activeColor: "border-yellow-400 bg-yellow-400/12",
    iconColor: "text-yellow-400",
  },
  {
    value: "Virada Inteligente turma aberta — Participar individualmente",
    icon: Users,
    label: "Virada Inteligente turma aberta",
    description: "Turma aberta — quero participar individualmente da próxima imersão",
    color: "border-emerald-500/30 bg-emerald-500/5",
    activeColor: "border-emerald-400 bg-emerald-400/12",
    iconColor: "text-emerald-400",
  },
  {
    value: "Ainda não sei — preciso de orientação",
    icon: Search,
    label: "Ainda não sei",
    description: "Não tenho certeza ainda — quero orientação para escolher o melhor caminho",
    color: "border-white/10 bg-white/4",
    activeColor: "border-white/30 bg-white/10",
    iconColor: "text-white/50",
  },
];

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface FormData {
  nome: string;
  empresa: string;
  cargo: string;
  email: string;
  whatsapp: string;
  segmento: string;
  tamanho_empresa: string;
  faturamento_anual: string;
  tipo_operacao: string;
  usa_ia_hoje: string;
  frentes_interesse: string[];
  objetivo_principal: string;
  dores_principais: string;
  urgencia: string;
  como_conheceu: string;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function buildWhatsAppMessage(data: FormData, origem: string): string {
  const lines = [
    "🎯 *NOVO DIAGNÓSTICO INTELIGENTE — IntelliX.AI*",
    "",
    "👤 *Contato*",
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa}`,
    data.cargo ? `Cargo: ${data.cargo}` : null,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    "",
    "🏢 *Empresa*",
    `Segmento: ${data.segmento}`,
    `Tamanho: ${data.tamanho_empresa}`,
    `Faturamento: ${data.faturamento_anual}`,
    `Operação: ${data.tipo_operacao}`,
    `Maturidade em IA: ${data.usa_ia_hoje}`,
    "",
    "🎯 *O que precisa*",
    `Frentes de interesse: ${data.frentes_interesse.join(", ")}`,
    `Objetivo principal: ${data.objetivo_principal}`,
    `Principais dores: ${data.dores_principais}`,
    data.urgencia ? `Prazo para começar: ${data.urgencia}` : null,
    data.como_conheceu ? `Como conheceu: ${data.como_conheceu}` : null,
    origem ? `\n📍 Origem: ${origem}` : null,
  ];

  return lines.filter(Boolean).join("\n");
}

// ─── STEP INDICATOR ──────────────────────────────────────────────────────────

function StepIndicator({ current, total }: { current: number; total: number }) {
  const labels = ["Quem você é", "Sua empresa", "O que precisa"];
  return (
    <div className="mb-10">
      <div className="flex items-center gap-0 mb-3">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-[background-color,border-color] duration-300 border-2 ${
                i + 1 < current
                  ? "bg-accent border-accent text-accent-foreground"
                  : i + 1 === current
                  ? "bg-accent/15 border-accent text-accent"
                  : "bg-white/4 border-white/15 text-white/35"
              }`}
            >
              {i + 1 < current ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
            </div>
            {i < total - 1 && (
              <div className="flex-1 h-0.5 mx-2">
                <div
                  className={`h-full transition-[width,background-color] duration-500 rounded-full ${
                    i + 1 < current ? "bg-accent w-full" : "bg-white/10 w-full"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {labels.map((label, i) => (
          <p
            key={label}
            className={`text-xs font-medium transition-colors duration-300 ${
              i + 1 === current ? "text-accent" : i + 1 < current ? "text-white/50" : "text-white/25"
            } ${i === 0 ? "text-left" : i === labels.length - 1 ? "text-right" : "text-center"} flex-1`}
          >
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}

// ─── FIELD COMPONENTS ────────────────────────────────────────────────────────

const inputClass =
  "bg-white/6 border-white/12 text-white placeholder:text-white/30 focus:border-accent/60 focus:bg-white/8 transition-[border-color,background-color] duration-200 h-11";

const labelClass = "text-sm font-medium text-white/70 mb-1.5 block";

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Diagnostico() {
  const [searchParams] = useSearchParams();
  const origem = searchParams.get("origem") ?? "";

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "", empresa: "", cargo: "", email: "", whatsapp: "",
    segmento: "", tamanho_empresa: "", faturamento_anual: "", tipo_operacao: "", usa_ia_hoje: "",
    frentes_interesse: [], objetivo_principal: "", dores_principais: "", urgencia: "", como_conheceu: "",
  });

  const toggleFrente = (value: string) =>
    setFormData(prev => ({
      ...prev,
      frentes_interesse: prev.frentes_interesse.includes(value)
        ? prev.frentes_interesse.filter(f => f !== value)
        : [...prev.frentes_interesse, value],
    }));

  const set = (name: keyof FormData, value: string) =>
    setFormData(prev => ({ ...prev, [name]: value }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    set(e.target.name as keyof FormData, e.target.value);

  const step1Valid = !!(formData.nome && formData.empresa && formData.cargo && formData.email && formData.whatsapp);
  const step2Valid = !!(formData.segmento && formData.tamanho_empresa && formData.faturamento_anual && formData.tipo_operacao && formData.usa_ia_hoje);
  const step3Valid = !!(formData.frentes_interesse.length > 0 && formData.objetivo_principal && formData.dores_principais && formData.urgencia);

  const isCurrentStepValid = step === 1 ? step1Valid : step === 2 ? step2Valid : step3Valid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step3Valid) return;

    const message = buildWhatsAppMessage(formData, origem);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    setTimeout(() => window.open(url, "_blank"), 600);
  };

  // ── Success State ───────────────────────────────────────────────────────────
  if (submitted) {
    const message = buildWhatsAppMessage(formData, origem);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
      <Layout>
        <section className="min-h-[85vh] flex items-center bg-[#060D1A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-primary/6 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                Diagnóstico <span className="gradient-text-gold">enviado!</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Obrigado, <strong className="text-white">{formData.nome}</strong>. Estamos abrindo o WhatsApp com seu diagnóstico completo — continue a conversa por lá para agendar sua sessão.
              </p>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-6 rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.5)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir no WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>

              <p className="text-xs text-white/25 mt-6">
                Caso o WhatsApp não abra automaticamente, clique no botão acima.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <Layout>
      <Helmet>
        <title>Diagnóstico Gratuito de IA | IntelliX.AI</title>
        <meta name="description" content="Descubra em 5 minutos como a inteligência artificial pode transformar o seu negócio. Diagnóstico 100% gratuito e personalizado." />
        <meta property="og:title" content="Diagnóstico Gratuito de IA | IntelliX.AI" />
        <meta property="og:description" content="Descubra em 5 minutos como a inteligência artificial pode transformar o seu negócio." />
        <meta property="og:url" content="https://intellixai.com.br/diagnostico" />
        <link rel="canonical" href="https://intellixai.com.br/diagnostico" />
      </Helmet>

      {/* Hero */}
      <section className="pt-20 pb-10 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">100% Gratuito · 5 minutos</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Diagnóstico{" "}
              <span className="gradient-text-gold">Inteligente</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed">
              Responda 3 etapas rápidas. Com base no seu perfil, mapeamos qual frente IntelliX.AI gera mais resultado para o seu negócio — e agendamos uma conversa de 30 minutos para aprofundar.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 bg-[#060D1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">

            <StepIndicator current={step} total={TOTAL_STEPS} />

            <form onSubmit={handleSubmit}>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-7 md:p-10">

                {/* ── Step 1: Quem você é ─────────────────────────────────── */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-white">Quem você é</h2>
                      <p className="text-sm text-white/40 mt-1">Dados de contato para agendar sua conversa.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="nome" className={labelClass}>Nome completo *</Label>
                        <Input id="nome" name="nome" value={formData.nome} onChange={handleChange}
                          placeholder="Seu nome" required className={inputClass} />
                      </div>
                      <div>
                        <Label htmlFor="empresa" className={labelClass}>Empresa *</Label>
                        <Input id="empresa" name="empresa" value={formData.empresa} onChange={handleChange}
                          placeholder="Nome da empresa" required className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <Label className={labelClass}>Cargo *</Label>
                      <Select value={formData.cargo} onValueChange={v => set("cargo", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione seu cargo" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {cargos.map(c => <SelectItem key={c} value={c} className="text-white focus:bg-white/10">{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="email" className={labelClass}>Email *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                          placeholder="seu@email.com" required className={inputClass} />
                      </div>
                      <div>
                        <Label htmlFor="whatsapp" className={labelClass}>WhatsApp *</Label>
                        <Input id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange}
                          placeholder="(00) 00000-0000" required className={inputClass} />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Step 2: Sua empresa ─────────────────────────────────── */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-white">Sua empresa</h2>
                      <p className="text-sm text-white/40 mt-1">Contexto para entender sua operação atual.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label className={labelClass}>Segmento *</Label>
                        <Select value={formData.segmento} onValueChange={v => set("segmento", v)}>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0D1830] border-white/15">
                            {segmentos.map(s => <SelectItem key={s} value={s} className="text-white focus:bg-white/10">{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className={labelClass}>Tamanho da equipe *</Label>
                        <Select value={formData.tamanho_empresa} onValueChange={v => set("tamanho_empresa", v)}>
                          <SelectTrigger className={inputClass}>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0D1830] border-white/15">
                            {tamanhos.map(t => <SelectItem key={t} value={t} className="text-white focus:bg-white/10">{t}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className={labelClass}>Faturamento anual estimado *</Label>
                      <Select value={formData.faturamento_anual} onValueChange={v => set("faturamento_anual", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione a faixa" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {faturamentos.map(f => <SelectItem key={f} value={f} className="text-white focus:bg-white/10">{f}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className={labelClass}>Tipo de operação *</Label>
                      <Select value={formData.tipo_operacao} onValueChange={v => set("tipo_operacao", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {operacoes.map(o => <SelectItem key={o} value={o} className="text-white focus:bg-white/10">{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className={labelClass}>Qual é sua relação atual com IA? *</Label>
                      <Select value={formData.usa_ia_hoje} onValueChange={v => set("usa_ia_hoje", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione a opção mais próxima" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {maturidadesIA.map(m => <SelectItem key={m} value={m} className="text-white focus:bg-white/10">{m}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* ── Step 3: O que precisa ───────────────────────────────── */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-white">O que você precisa</h2>
                      <p className="text-sm text-white/40 mt-1">Isso define qual frente IntelliX.AI faz mais sentido para o seu caso.</p>
                    </div>

                    {/* Frentes de interesse — multi-select */}
                    <div>
                      <Label className={labelClass}>Por qual frente você se interessa? * <span className="text-white/35 font-normal">(pode selecionar mais de uma)</span></Label>
                      <div className="grid sm:grid-cols-2 gap-3 mt-2">
                        {frentes.map((frente) => {
                          const isSelected = formData.frentes_interesse.includes(frente.value);
                          return (
                            <button
                              key={frente.value}
                              type="button"
                              onClick={() => toggleFrente(frente.value)}
                              className={`text-left p-4 rounded-xl border transition-[border-color,background-color] duration-200 ${
                                isSelected ? frente.activeColor : frente.color
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <frente.icon className={`w-4 h-4 ${isSelected ? frente.iconColor : "text-white/40"}`} />
                                <span className={`text-sm font-bold ${isSelected ? "text-white" : "text-white/60"}`}>
                                  {frente.label}
                                </span>
                                {isSelected && (
                                  <CheckCircle2 className="w-4 h-4 text-accent ml-auto flex-shrink-0" />
                                )}
                              </div>
                              <p className={`text-xs leading-relaxed ${isSelected ? "text-white/70" : "text-white/35"}`}>
                                {frente.description}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-white/30 mt-2">Não tem certeza? Selecione a que mais se aproxima — vamos ajustar na conversa.</p>
                    </div>

                    <div>
                      <Label className={labelClass}>Principal objetivo *</Label>
                      <Select value={formData.objetivo_principal} onValueChange={v => set("objetivo_principal", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione o objetivo" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {objetivos.map(o => <SelectItem key={o} value={o} className="text-white focus:bg-white/10">{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="dores_principais" className={labelClass}>
                        Descreva seu principal gargalo ou dor hoje *
                      </Label>
                      <Textarea
                        id="dores_principais"
                        name="dores_principais"
                        value={formData.dores_principais}
                        onChange={handleChange}
                        placeholder="Ex: Perco muito tempo com relatórios manuais toda semana. Minha equipe não consegue acompanhar o volume de atendimento..."
                        rows={4}
                        required
                        className={`${inputClass} h-auto resize-none`}
                      />
                    </div>

                    <div>
                      <Label className={labelClass}>Em que prazo você quer começar? *</Label>
                      <Select value={formData.urgencia} onValueChange={v => set("urgencia", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {urgencias.map(u => <SelectItem key={u} value={u} className="text-white focus:bg-white/10">{u}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className={labelClass}>Como conheceu a IntelliX.AI?</Label>
                      <Select value={formData.como_conheceu} onValueChange={v => set("como_conheceu", v)}>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Selecione (opcional)" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1830] border-white/15">
                          {comoConheceu.map(c => <SelectItem key={c} value={c} className="text-white focus:bg-white/10">{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* ── Navigation ──────────────────────────────────────────── */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/8">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(s => s - 1)}
                      className="border-white/15 text-white/60 hover:border-white/30 hover:text-white hover:bg-white/5"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Voltar
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < TOTAL_STEPS ? (
                    <Button
                      type="button"
                      onClick={() => setStep(s => s + 1)}
                      disabled={!isCurrentStepValid}
                      className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-6 shadow-[0_0_20px_hsl(var(--accent)/0.35)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.55)] transition-[box-shadow,opacity] duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none group"
                    >
                      Próximo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!step3Valid}
                      className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-6 shadow-[0_0_20px_hsl(var(--accent)/0.35)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.55)] transition-[box-shadow,opacity] duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none group"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enviar e continuar no WhatsApp
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  )}
                </div>

              </div>
            </form>

            <p className="text-xs text-white/25 text-center mt-5">
              Seus dados são usados exclusivamente para personalizar a conversa. Sem spam, sem lista de e-mail.
            </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
