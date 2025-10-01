import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function LandingPage() {
  const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/4t7pnvz_591017', '_self');
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <HeroSection onCTAClick={handleCTAClick} />
      <ProblemSection />
      <SolutionSection />
      <BonusSection />
      <PricingSection onCTAClick={handleCTAClick} />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection onCTAClick={handleCTAClick} />
      <StickyMobileCTA onCTAClick={handleCTAClick} />
    </div>
  );
}
