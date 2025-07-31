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
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-8 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-3 font-bold">
            Why Choose <span className="text-herb-green">HMG Herbal Hair Oil?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-natural hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-herb-green/10 border animate-in fade-in-50 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-heading text-xl text-foreground mb-2 font-bold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body font-medium">
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