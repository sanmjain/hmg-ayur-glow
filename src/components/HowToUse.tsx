import { Card, CardContent } from "@/components/ui/card";

const HowToUse = () => {
  const steps = [
    "Pour a few drops into your palm.",
    "Gently massage into scalp for 5–10 minutes.",
    "Leave overnight or for at least 2 hours.",
    "Wash with a mild herbal shampoo."
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in-50 duration-700">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2 sm:mb-4 font-bold">
            How to <span className="text-herb-green">Apply</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-card shadow-natural hover:shadow-warm transition-all duration-300 border-herb-green/10 border animate-in slide-up duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-heading text-lg sm:text-xl mb-3 sm:mb-4 mx-auto animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed font-medium">
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