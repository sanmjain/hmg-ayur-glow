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
    <section className="min-h-screen bg-gradient-earth flex items-center py-12 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="flex justify-center lg:justify-end animate-in slide-in-from-left duration-700">
          <div className="relative">
            <img
              src={hairOilBottle}
              alt="HMG Herbal Hair Oil Bottle"
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="animate-in slide-in-from-right duration-700 delay-300">
          <Card className="bg-card/95 backdrop-blur-sm shadow-deep border-0">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h1 className="font-heading text-4xl lg:text-5xl text-foreground leading-tight">
                    Ayurveda for Your Hair,{" "}
                    <span className="text-herb-green">Just a Message Away</span>
                  </h1>
                  <p className="text-muted-foreground text-lg font-body">
                    Reach out to us for orders, queries, or product information.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 py-6">
                  <div className="flex items-center justify-center gap-3 text-foreground">
                    <MessageCircle className="w-5 h-5 text-herb-green" />
                    <span className="font-body font-medium">+91-9876543210</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-foreground">
                    <Mail className="w-5 h-5 text-herb-green" />
                    <span className="font-body">info@hmgherbal.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-herb-green" />
                    <span className="font-body">+91-9876543210</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={handleWhatsApp}
                    variant="whatsapp"
                    size="lg"
                    className="flex-1 font-body font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Now
                  </Button>
                  <Button
                    onClick={handleCall}
                    variant="herbal"
                    size="lg"
                    className="flex-1 font-body font-semibold"
                  >
                    <Phone className="w-5 h-5" />
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