const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-herb-green/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            {/* Logo/Icon */}
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-natural">
              <span className="text-white font-heading text-lg font-bold">H</span>
            </div>
            
            {/* Brand Name */}
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-foreground">
                HMG <span className="text-herb-green">Herbal</span>
              </h1>
              <p className="font-body text-xs text-muted-foreground leading-none">
                Ayurvedic Hair Care
              </p>
            </div>
            
            {/* Mobile Brand Name */}
            <div className="sm:hidden">
              <h1 className="font-heading text-lg font-bold text-foreground">
                HMG <span className="text-herb-green">Herbal</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;