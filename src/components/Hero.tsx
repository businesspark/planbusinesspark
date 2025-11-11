import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeroProps {
  image: string;
  mobileImage?: string;
  title: string;
  subtitle: string;
  showButtons?: boolean;
  onButtonClick?: (type: "primary" | "secondary") => void;
}

const Hero = ({ image, mobileImage, title, subtitle, showButtons, onButtonClick }: HeroProps) => {
  const [isCrossed, setIsCrossed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCrossed(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex justify-center pt-16 bg-white">
      {/* Background Image - Responsive sizing */}
      {mobileImage ? (
        <>
          {/* Mobile Image - Hidden on SM and above */}
          <img
            src={mobileImage}
            alt={title}
            className="block sm:hidden w-full h-auto object-contain min-h-[300px]"
          />
          {/* Desktop Image - Hidden on mobile */}
          <img
            src={image}
            alt={title}
            className="hidden sm:block w-full h-auto object-contain min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          />
        </>
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
        />
      )}
    </div>
  );
};

export default Hero;
