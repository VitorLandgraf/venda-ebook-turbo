import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Como recebo o eBook?",
      answer: "Você recebe imediatamente no seu e-mail após a compra.",
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Sim, o eBook e os bônus funcionam em qualquer dispositivo (celular, tablet ou computador).",
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim, 100% processado por uma plataforma de checkout confiável.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] mb-4">
            Perguntas Frequentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card border border-card-border rounded-md px-6"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
