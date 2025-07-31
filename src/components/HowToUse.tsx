import { Card, CardContent } from "@/components/ui/card";

const HowToUse = () => {
  const steps = [
    "Pour a few drops into your palm.",
    "Gently massage into scalp for 5–10 minutes.",
    "Leave overnight or for at least 2 hours.",
    "Wash with a mild herbal shampoo."
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            How to <span className="text-herb-green">Apply</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-card shadow-natural hover:shadow-warm transition-all duration-300 border-0 animate-in fade-in-50 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-heading text-xl mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {step}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;