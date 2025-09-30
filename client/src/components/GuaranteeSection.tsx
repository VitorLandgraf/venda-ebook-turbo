import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-chart-2/10 to-primary/5 border-chart-2/20 p-8 md:p-12 text-center hover-elevate active-elevate-2" data-testid="card-guarantee">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-chart-2/20 flex items-center justify-center">
              <Shield className="h-10 w-10 text-chart-2" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            <span className="inline-block mr-2">⚡</span>
            Garantia incondicional de 7 dias
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Se você não gostar do conteúdo, devolvemos seu dinheiro sem perguntas.
          </p>
        </Card>
      </div>
    </section>
  );
}
