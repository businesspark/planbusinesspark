import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  const navigate = useNavigate();
  const ctaContent = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ctaContent.elementRef}
      className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-planM-primary/10 via-background to-planI-primary/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            ctaContent.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance transform hover:scale-105 transition-transform duration-300">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-balance px-4">
            Choose between our two world-class business parks, each designed to provide 
            the perfect environment for your business to thrive and grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div 
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-planM-muted border border-planM-primary/20 hover-lift transform transition-all duration-700 ${
                ctaContent.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-planM-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-planM-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 text-balance">Plan M Business Park</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base text-balance">
                G+30 storey IT/ITES park on LBS Road with cutting-edge infrastructure
              </p>
              <Button
                onClick={() => navigate("/plan-m")}
                className="bg-planM-primary hover:bg-planM-accent text-white w-full rounded-xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Explore Plan M <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>

            <div 
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-planI-muted border border-planI-primary/20 hover-lift transform transition-all duration-700 ${
                ctaContent.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 translate-x-10 scale-95"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-planI-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 transform hover:rotate-12 transition-transform duration-300">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-planI-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 text-balance">Plan I Business Park</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base text-balance">
                G+23 storey park in Nerul with sustainable design and prime connectivity
              </p>
              <Button
                onClick={() => navigate("/plan-i")}
                className="bg-planI-primary hover:bg-planI-accent text-white w-full rounded-xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Explore Plan I <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          <div 
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-background border border-border transform transition-all duration-700 ${
              ctaContent.isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4 text-balance">
              <strong>Need help deciding?</strong> Our team is ready to assist you
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="rounded-xl transform hover:scale-105 transition-all text-sm sm:text-base"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
