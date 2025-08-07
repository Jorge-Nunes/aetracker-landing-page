import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpecialOfferPopup from "@/components/SpecialOfferPopup";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UrgencySection />
      <PricingSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <SpecialOfferPopup />
      <FloatingCTA />
    </div>
  );
};

export default Index;