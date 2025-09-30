import { Card } from "@/components/ui/card";
import { Smartphone, Clock, Frown } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Smartphone,
      text: "Você já se pegou abrindo o Instagram sem perceber?",
    },
    {
      icon: Clock,
      text: "Já perdeu horas rolando o feed e deixou coisas importantes para depois?",
    },
    {
      icon: Frown,
      text: "Já sentiu ansiedade ou comparação ao passar tempo demais nas redes?",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-warning/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            O Problema que Você Enfrenta
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate active-elevate-2 border-warning/20"
              data-testid={`card-problem-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center">
                  <problem.icon className="h-8 w-8 text-warning" />
                </div>
                <p className="text-lg leading-relaxed">{problem.text}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            <strong>Você não está sozinho.</strong> As redes sociais foram criadas para prender sua atenção. 
            Mas agora existe um caminho para recuperar o controle.
          </p>
        </div>
      </div>
    </section>
  );
}
