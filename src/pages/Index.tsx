import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import homeHero1 from "@/assets/images/banner3.png";
import homeHeroMobile from "@/assets/images/banner4.png";
import planMHero from "@/assets/images/plan-m-hero-main.jpg";
import planIHero from "@/assets/images/plan-i-hero-main.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const navigate = useNavigate();

  // Scroll animation hooks
  const projectSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const planMCard = useScrollAnimation({ threshold: 0.15, triggerOnce: true });
  const planICard = useScrollAnimation({ threshold: 0.15, triggerOnce: true });

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        image={homeHero1}
        mobileImage={homeHeroMobile}
        title="Building Smarter Business Spaces"
        subtitle="Explore our landmark developments — Plan M and Plan I Business Parks."
        showButtons={true}
        onButtonClick={(type) => {
          if (type === "primary") navigate("/plan-m");
          else navigate("/plan-i");
        }}
      />

      {/* Project Showcase Section */}
      <section 
        ref={projectSection.elementRef}
        className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-home relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              projectSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance transform hover:scale-105 transition-transform duration-300">
              Our Flagship Developments
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
              Discover two world-class business parks designed for innovation, efficiency, and growth.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Plan M Card - Slides from Right */}
            <div ref={planMCard.elementRef}>
              <ProjectCard
              image={planMHero}
              title="Plan M Business Park"
              description="Plan M is a state-of-the-art G+36 storeyed elevation situated at Turbhe, the business district of Navi Mumbai. This ultra modern project comprises a list of modern workspaces coupled with amenities that are unheard in the commercial real estate segment. "
              link="/plan-m"
              colorScheme="yellow"
              slideDirection="right"
              isVisible={planMCard.isVisible}
              />
            </div>

            {/* Plan I Card - Slides from Left */}
            <div ref={planICard.elementRef}>
              <ProjectCard
                image={planIHero}
                title="Plan I Business Park"
                description="A G+23 storey premium business park located minutes from the Sion–Panvel Highway, blending design, technology, and sustainability in Nerul, Navi Mumbai."
                link="/plan-i"
                colorScheme="green"
                slideDirection="left"
                isVisible={planICard.isVisible}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
