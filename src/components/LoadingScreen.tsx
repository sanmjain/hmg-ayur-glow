import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-hero-bg flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      
      <div className="relative z-10 text-center">
        {/* Oil Drop Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Main oil drop */}
            <div className="absolute inset-0 rounded-full bg-gradient-hero animate-pulse">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-6 h-8 bg-gradient-hero rounded-full animate-bounce" 
                     style={{ 
                       clipPath: 'ellipse(50% 60% at 50% 40%)',
                       animationDuration: '1.5s',
                       animationDelay: '0.5s' 
                     }}>
                </div>
              </div>
            </div>
            
            {/* Ripple effects */}
            <div className="absolute inset-0 rounded-full border-2 border-herb-green/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-2 border-turmeric/20 animate-ping" 
                 style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Floating herbs animation */}
          <div className="absolute -top-4 -left-4 text-2xl animate-float" style={{ animationDelay: '0s' }}>🌿</div>
          <div className="absolute -top-2 -right-6 text-xl animate-float" style={{ animationDelay: '1s' }}>🍃</div>
          <div className="absolute -bottom-4 -left-6 text-lg animate-float" style={{ animationDelay: '2s' }}>🌱</div>
          <div className="absolute -bottom-2 -right-4 text-xl animate-float" style={{ animationDelay: '1.5s' }}>🌿</div>
        </div>

        {/* Brand Name */}
        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4 font-bold animate-in fade-in-50 duration-1000">
          HMG <span className="text-herb-green">Herbal</span>
        </h1>
        
        <p className="font-body text-muted-foreground mb-6 animate-in fade-in-50 duration-1000 delay-300">
          Ayurvedic Hair Care Excellence
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto bg-herb-green-light/30 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-hero transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="font-body text-sm text-muted-foreground mt-4 animate-pulse">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;