import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana M.",
      initials: "AM",
      text: "Segui os passos do ebook e consegui reduzir 3 horas por dia nas redes. Foi libertador!",
    },
    {
      name: "Pedro L.",
      initials: "PL",
      text: "O Planner e o Checklist me ajudaram muito. Agora consigo focar no meu trabalho sem cair na armadilha do celular.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            O Que Dizem Nossos Leitores
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate active-elevate-2"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
