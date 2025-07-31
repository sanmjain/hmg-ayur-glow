import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import AboutSection from "@/components/AboutSection";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <div className="pt-16"> {/* Add padding for fixed navbar */}
        <HeroSection />
        <ProductHighlights />
        <AboutSection />
        <HowToUse />
        <Testimonials />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
