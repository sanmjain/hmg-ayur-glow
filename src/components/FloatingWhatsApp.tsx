import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      variant="floating"
      size="icon"
      className="animate-pulse hover:animate-none sm:w-16 sm:h-16"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
    </Button>
  );
};

export default FloatingWhatsApp;