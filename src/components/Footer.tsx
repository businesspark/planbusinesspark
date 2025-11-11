import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Plan Business Parks</h3>
            <p className="text-primary-foreground/80 text-sm">
              Building smarter business spaces with world-class amenities and modern architecture.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/plan-m" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Plan M Business Park
              </Link>
              <Link to="/plan-i" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Plan I Business Park
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-primary-foreground/80 text-sm space-y-2">
              <p>Mumbai & Navi Mumbai</p>
              <p>Maharashtra, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
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
