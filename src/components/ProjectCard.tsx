import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  colorScheme: "yellow" | "green";
  slideDirection?: "left" | "right";
  isVisible?: boolean;
}

const ProjectCard = ({ image, title, description, link, colorScheme, slideDirection = "left", isVisible = true }: ProjectCardProps) => {
  const navigate = useNavigate();
  
  const gradientClass = colorScheme === "yellow" 
    ? "from-planM-primary/20 to-planM-accent/20" 
    : "from-planI-primary/20 to-planI-accent/20";
  
  const buttonClass = colorScheme === "yellow"
    ? "bg-planM-primary hover:bg-planM-accent"
    : "bg-planI-primary hover:bg-planI-accent";

  const isPlanI = title === "Plan I Business Park";
  
  // Determine slide animation class based on direction
  const slideClass = slideDirection === "right" 
    ? isVisible 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 translate-x-20"
    : isVisible 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 -translate-x-20";

  return (
    <div 
      className={`group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-[1800ms] ease-in-out hover-lift ${slideClass}`}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className={`relative h-80 md:h-full overflow-hidden ${isPlanI ? 'order-2 md:order-2' : 'order-1 md:order-1'}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>

        {/* Content Side */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${isPlanI ? 'order-1 md:order-1' : 'order-2 md:order-2'}`}>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 transform hover:scale-105 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            {description}
          </p>
          <Button
            onClick={() => navigate(link)}
            className={`${buttonClass} text-white px-8 py-6 text-lg rounded-2xl group/btn transition-all hover:scale-110 w-fit shadow-lg hover:shadow-xl`}
            size="lg"
          >
            View Details
            <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
