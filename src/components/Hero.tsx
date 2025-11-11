import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  showButtons?: boolean;
  onButtonClick?: (type: "primary" | "secondary") => void;
}

const Hero = ({ image, title, subtitle, showButtons, onButtonClick }: HeroProps) => {
  const [isCrossed, setIsCrossed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCrossed(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Only */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
