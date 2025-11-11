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
      className="py-20 lg:py-32 bg-gradient-to-br from-planM-primary/10 via-background to-planI-primary/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            ctaContent.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance transform hover:scale-105 transition-transform duration-300">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Choose between our two world-class business parks, each designed to provide 
            the perfect environment for your business to thrive and grow.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div 
              className={`p-8 rounded-3xl bg-planM-muted border border-planM-primary/20 hover-lift transform transition-all duration-700 ${
                ctaContent.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-planM-primary/10 flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-planM-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Plan M Business Park</h3>
              <p className="text-muted-foreground mb-6">
                G+30 storey IT/ITES park on LBS Road with cutting-edge infrastructure
              </p>
              <Button
                onClick={() => navigate("/plan-m")}
                className="bg-planM-primary hover:bg-planM-accent text-white w-full rounded-xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Plan M <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div 
              className={`p-8 rounded-3xl bg-planI-muted border border-planI-primary/20 hover-lift transform transition-all duration-700 ${
                ctaContent.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 translate-x-10 scale-95"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-planI-primary/10 flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-planI-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Plan I Business Park</h3>
              <p className="text-muted-foreground mb-6">
                G+23 storey park in Nerul with sustainable design and prime connectivity
              </p>
              <Button
                onClick={() => navigate("/plan-i")}
                className="bg-planI-primary hover:bg-planI-accent text-white w-full rounded-xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Plan I <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <div 
            className={`p-8 rounded-3xl bg-background border border-border transform transition-all duration-700 ${
              ctaContent.isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p className="text-lg text-foreground mb-4">
              <strong>Need help deciding?</strong> Our team is ready to assist you
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="rounded-xl transform hover:scale-105 transition-all"
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
