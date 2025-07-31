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
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Why Choose <span className="text-herb-green">HMG Herbal Hair Oil?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-natural hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0 animate-in fade-in-50 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body">
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