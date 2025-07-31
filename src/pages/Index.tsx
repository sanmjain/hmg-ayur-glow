import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import AboutSection from "@/components/AboutSection";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <HeroSection />
      <ProductHighlights />
      <AboutSection />
      <HowToUse />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
