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
      className="animate-pulse hover:animate-none"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default FloatingWhatsApp;