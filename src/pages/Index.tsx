import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import BonusesSection from "@/components/landing/BonusesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalOfferSection from "@/components/landing/FinalOfferSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <BonusesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalOfferSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
