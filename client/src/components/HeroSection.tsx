import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ebookCover from "@assets/Capa-Livro_1759265757123.png";

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[Montserrat] leading-tight break-words">
              <span className="inline-block mr-2">👉</span>
              Recupere seu tempo e sua mente: liberte-se do vício em redes sociais!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Um eBook 100% digital com estratégias práticas para você retomar o controle do seu foco, produtividade e bem-estar.
            </p>
            
            <div className="pt-4">
              <Button
                size="lg"
                onClick={onCTAClick}
                data-testid="button-hero-cta"
                className="bg-success hover:bg-success text-success-foreground border border-success-border text-lg px-8 py-6 rounded-2xl shadow-2xl hover-elevate active-elevate-2 font-[Poppins]"
              >
                Quero meu eBook agora!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="pt-2 flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center text-success-foreground text-xs">✓</div>
                <span>Garantia 7 dias</span>
              </div>
              <span>•</span>
              <span>Acesso imediato</span>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <img 
              src={ebookCover} 
              alt="eBook Prisão Digital - Liberte-se das Redes Sociais" 
              className="w-full max-w-md md:max-w-lg drop-shadow-2xl hover-elevate transition-all duration-300"
              data-testid="img-ebook-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
