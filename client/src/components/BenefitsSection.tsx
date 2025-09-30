import { Card } from "@/components/ui/card";
import { Clock, Target, Heart, Shield } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Mais tempo livre",
      description: "Para o que realmente importa",
    },
    {
      icon: Target,
      title: "Mais foco",
      description: "No trabalho, estudos e projetos pessoais",
    },
    {
      icon: Heart,
      title: "Mais tranquilidade mental",
      description: "Menos ansiedade",
    },
    {
      icon: Shield,
      title: "Mais controle",
      description: "Da sua vida digital",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            A Transformação que Te Espera
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-elevate active-elevate-2"
              data-testid={`card-benefit-${index}`}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-chart-2/10 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-[Poppins]">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
