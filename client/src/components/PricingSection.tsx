import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Lock, Calendar, CheckSquare, ArrowRight } from "lucide-react";
import ebookCover from "@assets/Capa-Livro_1759265757123.png";

interface PricingSectionProps {
  onCTAClick?: () => void;
}

export default function PricingSection({ onCTAClick }: PricingSectionProps) {
  const benefits = [
    "Estratégias práticas para reduzir o vício",
    "Técnicas de alta performance e foco",
    "Reprogramação de hábitos digitais",
    "Controle total da sua vida digital",
  ];

  const bonuses = [
    { icon: Calendar, text: "Planner Semanal de Foco" },
    { icon: CheckSquare, text: "Checklist Diário – Uso Consciente" },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <Badge className="text-base px-4 py-2 bg-warning text-warning-foreground mb-4" data-testid="badge-limited-offer">
            ⏰ Oferta de lançamento por tempo limitado!
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-[Montserrat] mb-4 break-words px-2">
            Recupere seu tempo por menos do que uma pizza 🍕
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Invista em você e transforme sua relação com as redes sociais hoje mesmo
          </p>
        </div>

        <Card className="overflow-hidden hover-elevate active-elevate-2 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-12">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-[Poppins] mb-4">O que você vai receber:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`benefit-item-${index}`}>
                      <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold mb-3 font-[Poppins]">+ Bônus Exclusivos:</h4>
                <ul className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-center gap-2" data-testid={`bonus-item-${index}`}>
                      <bonus.icon className="h-5 w-5 text-chart-2" />
                      <span className="text-sm text-muted-foreground">{bonus.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-2xl p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">De:</p>
                    <p className="text-xl sm:text-2xl font-bold text-muted-foreground line-through decoration-2" data-testid="text-original-price">
                      R$ 59,00
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-success font-semibold mb-1">Por apenas:</p>
                    <p className="text-4xl sm:text-5xl font-bold text-success font-[Montserrat]" data-testid="text-promo-price">
                      R$ 10
                    </p>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Economia de <strong className="text-foreground">R$ 49,00</strong> (83% OFF)
                </p>
              </div>

              <Button
                size="lg"
                onClick={onCTAClick}
                data-testid="button-pricing-cta"
                className="w-full bg-success hover:bg-success text-success-foreground border border-success-border text-base sm:text-xl px-4 sm:px-8 py-6 sm:py-7 rounded-2xl shadow-2xl hover-elevate active-elevate-2 font-[Poppins]"
              >
                Quero meu eBook agora!
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <div className="flex flex-wrap justify-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4 text-success" />
                  <span>Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-success" />
                  <span>7 dias de garantia</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <img 
                  src={ebookCover} 
                  alt="eBook Prisão Digital" 
                  className="w-full max-w-sm drop-shadow-2xl"
                  data-testid="img-ebook-pricing"
                />
                <div className="absolute -top-4 -right-4">
                  <Badge className="bg-warning text-warning-foreground text-lg px-4 py-2 shadow-lg">
                    83% OFF
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Mais de 500 pessoas</strong> já transformaram suas vidas com este método
          </p>
        </div>
      </div>
    </section>
  );
}
