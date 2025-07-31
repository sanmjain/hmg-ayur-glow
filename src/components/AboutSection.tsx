import ayurvedicHeritage from "@/assets/ayurvedic-heritage.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 px-4 bg-herb-green-light/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-in slide-in-from-left duration-700">
            <img
              src={ayurvedicHeritage}
              alt="Ayurvedic Heritage"
              className="w-full h-auto rounded-lg shadow-deep"
            />
          </div>
          
          <div className="animate-in slide-in-from-right duration-700 delay-300">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4 font-bold">
              Our <span className="text-herb-green">Ayurvedic Legacy</span>
            </h2>
            
            <p className="text-muted-foreground font-body text-lg leading-relaxed font-medium">
              Rooted in an 80-year-old family tradition of Ayurvedic healing, 
              HMG Herbal brings you nature's wisdom for hair care in a bottle. 
              Our hair oil is handcrafted with love and backed by generations 
              of trust.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-heading text-herb-green mb-1 font-bold">80+</div>
                <div className="text-sm text-muted-foreground font-body font-medium">Years of Tradition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading text-herb-green mb-1 font-bold">100%</div>
                <div className="text-sm text-muted-foreground font-body font-medium">Natural Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;