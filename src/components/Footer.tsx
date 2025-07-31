import { MessageCircle, Mail, Phone, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@hmgherbal.com", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_blank");
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">HMG Herbal</h3>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              80 years of Ayurvedic tradition bringing nature's wisdom to your hair care routine.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <button 
                onClick={handleEmail}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                <Mail className="w-4 h-4" />
                info@hmgherbal.com
              </button>
              <button 
                onClick={handleCall}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                <Phone className="w-4 h-4" />
                +91-9876543210
              </button>
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/hmgherbal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@hmgherbal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-body text-primary-foreground/70 text-sm">
            © 2025 HMG Herbal. All rights reserved. | 100% Ayurvedic & Natural | Developed by Prallax Global
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;