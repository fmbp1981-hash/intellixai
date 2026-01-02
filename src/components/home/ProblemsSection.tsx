import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Processos Manuais",
    description: "Tarefas repetitivas consomem horas que poderiam ser investidas em crescimento estratégico.",
  },
  {
    icon: Users,
    title: "Atendimento Lento",
    description: "Clientes esperam respostas imediatas, mas sua equipe não consegue dar conta da demanda.",
  },
  {
    icon: TrendingDown,
    title: "Leads Perdidos",
    description: "Oportunidades escapam por falta de follow-up ou qualificação adequada.",
  },
  {
    icon: AlertTriangle,
    title: "Dados Desorganizados",
    description: "Informações espalhadas em planilhas e sistemas que não conversam entre si.",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Esses problemas estão <span className="text-destructive">travando</span> seu crescimento?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você reconhece algum desses desafios, sua empresa está deixando dinheiro na mesa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="glass-card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="text-destructive" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
