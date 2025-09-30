import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckSquare } from "lucide-react";

export default function BonusSection() {
  const bonuses = [
    {
      icon: Calendar,
      title: "Planner Semanal de Foco",
      description: "Organize sua rotina longe das distrações digitais.",
    },
    {
      icon: CheckSquare,
      title: "Checklist Diário – Uso Consciente",
      description: "Passos práticos para aplicar todos os dias e medir seu progresso.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge className="text-lg px-4 py-2 bg-success text-success-foreground" data-testid="badge-bonus">
              🎁 Bônus Exclusivos
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            Ao adquirir o eBook, você também leva de graça:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2 relative"
              data-testid={`card-bonus-${index}`}
            >
              <div className="absolute top-4 right-4">
                <Badge className="bg-success text-success-foreground">GRÁTIS</Badge>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 pt-4">
                <div className="w-20 h-20 rounded-2xl bg-success/10 flex items-center justify-center">
                  <bonus.icon className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-xl font-semibold font-[Poppins]">{bonus.title}</h3>
                <p className="text-muted-foreground">{bonus.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
