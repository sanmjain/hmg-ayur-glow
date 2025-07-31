import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail } from "lucide-react";
import hairOilBottle from "@/assets/hair-oil-bottle.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@hmgherbal.com", "_blank");
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-hero-bg relative overflow-hidden flex items-center py-4 px-4">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
        {/* Product Image */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end animate-in slide-in-from-bottom lg:slide-in-from-left duration-700">
          <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
            <img
              src={hairOilBottle}
              alt="HMG Herbal Hair Oil Bottle"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
            <div className="absolute -inset-4 lg:-inset-6 bg-gradient-hero opacity-15 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="order-1 lg:order-2 animate-in slide-in-from-top lg:slide-in-from-right duration-700 delay-300">
          <Card className="bg-card/98 backdrop-blur-md shadow-deep border-herb-green/10 border-2">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl text-foreground leading-tight font-bold">
                    Ayurveda for Your Hair,{" "}
                    <span className="text-herb-green">Just a Message Away</span>
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-body font-medium">
                    Reach out to us for orders, queries, or product information.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3 py-3 sm:py-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-foreground">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-herb-green" />
                    <span className="font-body font-semibold text-sm sm:text-base">+91-9876543210</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-foreground">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-herb-green" />
                    <span className="font-body font-medium text-sm sm:text-base">info@hmgherbal.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-foreground">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-herb-green" />
                    <span className="font-body font-semibold text-sm sm:text-base">+91-9876543210</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button
                    onClick={handleWhatsApp}
                    variant="whatsapp"
                    size="lg"
                    className="flex-1 font-body font-bold text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp Now
                  </Button>
                  <Button
                    onClick={handleCall}
                    variant="herbal"
                    size="lg"
                    className="flex-1 font-body font-bold text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;