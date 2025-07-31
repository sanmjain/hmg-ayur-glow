import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ritika M.",
      text: "Within 3 weeks my hair fall reduced drastically. Feels like grandma's oil!",
      avatar: "R",
      rating: 5
    },
    {
      name: "Anuj P.",
      text: "My hair feels stronger and shinier. Loved the natural fragrance too!",
      avatar: "A",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-herb-green-light/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Real <span className="text-herb-green">Results</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            What our customers say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-natural hover:shadow-warm transition-all duration-300 border-0 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-heading text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-turmeric text-turmeric" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-body italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;