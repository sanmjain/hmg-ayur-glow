import { Card, CardContent } from "@/components/ui/card";

const ProductHighlights = () => {
  const highlights = [
    {
      icon: "🌿",
      title: "100% Ayurvedic",
      text: "Infused with traditional herbs like Amla & Bhringraj"
    },
    {
      icon: "💧",
      title: "Prevents Hair Fall",
      text: "Nourishes from root to tip"
    },
    {
      icon: "✨",
      title: "Promotes Regrowth",
      text: "Clinically proven Ayurvedic ingredients"
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-6 sm:mb-8 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2 sm:mb-3 font-bold">
            Why Choose <span className="text-herb-green">HMG Herbal Hair Oil?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-natural hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-herb-green/10 border animate-in fade-in-up duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 animate-bounce" style={{ animationDelay: `${index * 300}ms` }}>{item.icon}</div>
                <h3 className="font-heading text-lg sm:text-xl text-foreground mb-2 font-bold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body font-medium text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;