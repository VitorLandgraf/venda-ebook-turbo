import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FinalCTASectionProps {
  onCTAClick?: () => void;
}

export default function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section className="py-16 md:py-32 px-4 bg-gradient-to-br from-primary via-primary/90 to-chart-2 text-primary-foreground overflow-hidden">
      <div className="max-w-4xl mx-auto text-center overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-[Montserrat] mb-6 break-words px-2">
          <span className="inline-block mr-2">👉</span>
          Está pronto para recuperar seu foco e transformar sua relação com as redes sociais?
        </h2>
        
        <p className="text-lg md:text-xl mb-8 opacity-95">
          Adquira agora o eBook + os bônus exclusivos e dê o primeiro passo para retomar o controle da sua vida digital!
        </p>
        
        <Button
          size="lg"
          onClick={onCTAClick}
          data-testid="button-final-cta"
          className="bg-success hover:bg-success text-success-foreground border-2 border-success-foreground/20 text-base sm:text-xl px-6 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-2xl hover-elevate active-elevate-2 font-[Poppins] mb-8"
        >
          Quero meu eBook agora!
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Acesso imediato por e-mail</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Pagamento 100% seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
