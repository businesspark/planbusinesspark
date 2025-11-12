import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeSpaceIcon from "@/assets/images/icons/office-space.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plan M", path: "/plan-m" },
    { name: "Plan I", path: "/plan-i" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="bg-yellow-600 p-2 rounded-lg shadow-md transition-all duration-300 group-hover:bg-yellow-700 group-hover:scale-105">
              <img 
                src={officeSpaceIcon} 
                alt="Plan Business Parks Logo" 
                className="w-4 h-4 sm:w-8 sm:h-8 transition-transform filter brightness-0 invert"
              />
            </div>
            <div className="font-bold text-lg sm:text-2xl tracking-tight transition-transform group-hover:scale-105 text-black">
              Plan <span className="text-yellow-600">Business Parks</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+918104124183"
              className="ml-2 px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-yellow-700 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">+91 81041 24183</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up bg-white shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-1 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-yellow-600 text-white"
                      : "text-black hover:bg-gray-100 active:bg-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+918104124183"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 bg-yellow-600 text-white rounded-lg text-base font-medium transition-all hover:bg-yellow-700 flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>+91 81041 24183</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
