import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyMobileCTAProps {
  onCTAClick?: () => void;
}

export default function StickyMobileCTA({ onCTAClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
      <Button
        size="lg"
        onClick={onCTAClick}
        data-testid="button-sticky-mobile-cta"
        className="w-full bg-success hover:bg-success text-success-foreground border border-success-border text-base font-[Poppins] hover-elevate active-elevate-2"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Quero meu eBook agora!
      </Button>
    </div>
  );
}
