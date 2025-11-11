import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Plan Business Parks</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building smarter business spaces with world-class amenities and modern architecture.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover:translate-x-1 transform duration-200">
                Home
              </Link>
              <Link to="/plan-m" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover:translate-x-1 transform duration-200">
                Plan M Business Park
              </Link>
              <Link to="/plan-i" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover:translate-x-1 transform duration-200">
                Plan I Business Park
              </Link>
            </nav>
          </div>
          
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="text-primary-foreground/80 text-sm space-y-2">
              <p>Mumbai & Navi Mumbai</p>
              <p>Maharashtra, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Plan Business Parks | All Rights Reserved
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Crafted with innovation and vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
