import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Get in <span className="text-herb-green">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            We're happy to answer any questions or take your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card shadow-natural border-0 animate-in slide-in-from-left duration-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-body"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-body"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="font-body"
                  />
                </div>
                
                <Button type="submit" variant="ayurvedic" size="lg" className="w-full font-body font-semibold">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-in slide-in-from-right duration-700 delay-300">
            <Card className="bg-card shadow-natural border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-6 h-6 text-herb-green" />
                    <div>
                      <p className="font-body font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground font-body">+91-9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-herb-green" />
                    <div>
                      <p className="font-body font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground font-body">info@hmgherbal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-herb-green" />
                    <div>
                      <p className="font-body font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground font-body">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsApp}
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full mt-6 font-body font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Placeholder for map */}
            <Card className="bg-card shadow-natural border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-herb-green-light/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-herb-green mx-auto mb-2" />
                    <p className="text-muted-foreground font-body">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;