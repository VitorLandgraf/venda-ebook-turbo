import { Card } from "@/components/ui/card";
import { Search, Clock, Brain, Rocket, Lightbulb } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: Search,
      title: "Identifique seus gatilhos",
      description: "Como identificar seus gatilhos de uso compulsivo.",
    },
    {
      icon: Clock,
      title: "Reduza sem sofrimento",
      description: "Estratégias simples para reduzir o tempo nas redes sem sofrimento.",
    },
    {
      icon: Brain,
      title: "Reprograme sua mente",
      description: "Como reprogramar sua mente para novos hábitos.",
    },
    {
      icon: Rocket,
      title: "Alta performance",
      description: "Técnicas de foco e produtividade usadas por pessoas de alta performance.",
    },
    {
      icon: Lightbulb,
      title: "Use a seu favor",
      description: "Como usar as redes sociais a seu favor — sem ser dominado por elas.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            A Solução: Seu eBook Completo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No eBook <strong>"Liberte-se das Redes Sociais"</strong> você vai aprender:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate active-elevate-2"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-[Poppins]">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
