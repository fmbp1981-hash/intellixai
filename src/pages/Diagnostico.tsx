import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5581988514775";

const segmentos = [
  "Tecnologia",
  "Saúde",
  "Educação",
  "Varejo",
  "Serviços",
  "Indústria",
  "Financeiro",
  "Imobiliário",
  "Turismo",
  "Consultoria",
  "Outro",
];

const tamanhos = [
  "1-10 funcionários",
  "11-50 funcionários",
  "51-200 funcionários",
  "201-500 funcionários",
  "500+ funcionários",
];

const operacoes = [
  "B2B (Vendo para empresas)",
  "B2C (Vendo para consumidor final)",
  "Ambos (B2B e B2C)",
];

const objetivos = [
  "Automatizar processos manuais",
  "Melhorar atendimento ao cliente",
  "Aumentar vendas e conversão",
  "Centralizar dados e informações",
  "Reduzir custos operacionais",
  "Escalar operação sem aumentar equipe",
  "Outro",
];

export default function Diagnostico() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    cargo: "",
    email: "",
    whatsapp: "",
    segmento: "",
    tamanho_empresa: "",
    tipo_operacao: "",
    dores_principais: "",
    objetivo_principal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Diagnóstico enviado!",
      description: "Entraremos em contato em até 24 horas.",
    });

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const isStep1Valid = formData.nome && formData.empresa && formData.email && formData.whatsapp;
  const isStep2Valid = formData.segmento && formData.tamanho_empresa && formData.tipo_operacao;
  const isStep3Valid = formData.dores_principais && formData.objetivo_principal;

  const whatsappMessage = `Olá! Acabei de enviar o formulário de diagnóstico no site da IntelliX.AI.\n\nNome: ${formData.nome}\nEmpresa: ${formData.empresa}\n\nGostaria de saber mais sobre as soluções!`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 animate-scale-in">
                <CheckCircle2 className="text-primary" size={40} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                Diagnóstico enviado com sucesso!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Obrigado, {formData.nome}! Nossa equipe analisará suas informações e 
                entrará em contato em até 24 horas com uma proposta personalizada.
              </p>
              
              <div className="glass-card p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-muted-foreground mb-4">
                  Quer acelerar o processo? Fale diretamente com nosso time:
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                    Continuar no WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <span className="text-primary font-medium">Tecnologia invisível.</span>{" "}
                <span className="text-accent font-medium">Resultado visível.</span>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">100% Gratuito</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Diagnóstico <span className="gradient-text">Inteligente</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Responda algumas perguntas sobre seu negócio e receba uma análise personalizada 
              de como podemos ajudar sua empresa a crescer com automação e IA.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {s}
                  </div>
                  <span className={`ml-3 hidden sm:block text-sm ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                    {s === 1 ? "Dados Pessoais" : s === 2 ? "Seu Negócio" : "Objetivos"}
                  </span>
                  {s < 3 && (
                    <div className={`w-12 sm:w-24 h-0.5 mx-4 transition-colors ${
                      step > s ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="glass-card p-8">
                {/* Step 1: Personal Data */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-semibold mb-6">Sobre você</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa *</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nome da empresa"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Seu cargo na empresa"
                        className="bg-background/50"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp *</Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Business Profile */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-semibold mb-6">Sobre seu negócio</h2>
                    
                    <div className="space-y-2">
                      <Label>Segmento de atuação *</Label>
                      <Select value={formData.segmento} onValueChange={(v) => handleSelectChange("segmento", v)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Selecione o segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          {segmentos.map((seg) => (
                            <SelectItem key={seg} value={seg}>{seg}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tamanho da empresa *</Label>
                      <Select value={formData.tamanho_empresa} onValueChange={(v) => handleSelectChange("tamanho_empresa", v)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Selecione o tamanho" />
                        </SelectTrigger>
                        <SelectContent>
                          {tamanhos.map((tam) => (
                            <SelectItem key={tam} value={tam}>{tam}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tipo de operação *</Label>
                      <Select value={formData.tipo_operacao} onValueChange={(v) => handleSelectChange("tipo_operacao", v)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {operacoes.map((op) => (
                            <SelectItem key={op} value={op}>{op}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Goals */}
                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-semibold mb-6">Seus desafios e objetivos</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dores_principais">Quais são seus principais gargalos ou dores? *</Label>
                      <Textarea
                        id="dores_principais"
                        name="dores_principais"
                        value={formData.dores_principais}
                        onChange={handleChange}
                        placeholder="Descreva os principais problemas que você enfrenta hoje (ex: processos manuais demorados, atendimento lento, perda de leads...)"
                        rows={4}
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Principal objetivo com automação *</Label>
                      <Select value={formData.objetivo_principal} onValueChange={(v) => handleSelectChange("objetivo_principal", v)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Selecione o objetivo" />
                        </SelectTrigger>
                        <SelectContent>
                          {objetivos.map((obj) => (
                            <SelectItem key={obj} value={obj}>{obj}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft size={18} className="mr-2" />
                      Voltar
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Próximo
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!isStep3Valid || isSubmitting}
                      className="bg-accent text-accent-foreground hover:bg-accent/90 glow-gold"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar diagnóstico"}
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
