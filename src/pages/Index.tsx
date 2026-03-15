import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import BonusesSection from "@/components/landing/BonusesSection";
import OrderBumpSection from "@/components/landing/OrderBumpSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalOfferSection from "@/components/landing/FinalOfferSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import FooterSection from "@/components/landing/FooterSection";
import SocialProofPopup from "@/components/landing/SocialProofPopup";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <BonusesSection />
      <OrderBumpSection />
      <TestimonialsSection />
      <FinalOfferSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
      <SocialProofPopup />
      <ThemeToggle />
    </div>
  );
};

export default Index;
