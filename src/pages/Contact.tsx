import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Zap, Users, TrendingUp } from "lucide-react";
import homeHero1 from "@/assets/home-hero-1.jpg";

const Contact = () => {
  const headerSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const formSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const infoSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const mapSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 81041 24183",
        "+91 93366 36577",
        "+91 87792 96362"
      ],
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Quick Response",
      details: [
        "Instant response to your queries",
        "Same-day site visits available",
        "Fast-track booking assistance"
      ],
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      details: [
        "Free property consultation",
        "Customized space planning",
        "Investment guidance & support"
      ],
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Benefits",
      details: [
        "Premium location advantage",
        "High ROI potential",
        "Flexible payment plans"
      ],
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Header Section */}
      <section 
        ref={headerSection.elementRef}
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${homeHero1})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div 
            className={`text-center transition-all duration-1000 ${
              headerSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              Have questions about Plan M or Plan I Business Parks? We're here to help you find the perfect space for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div 
              ref={formSection.elementRef}
              className={`transform transition-all duration-1000 ${
                formSection.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
            >
              <ContactForm colorScheme="yellow" />
            </div>

            {/* Contact Information */}
            <div 
              ref={infoSection.elementRef}
              className={`space-y-6 transform transition-all duration-1000 delay-300 ${
                infoSection.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-600"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-yellow-100 ${info.color} transform hover:rotate-12 transition-transform duration-300`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                            <div className="space-y-2">
                              {info.details.map((detail, detailIndex) => {
                                const isPhone = info.title === "Phone";
                                const content = isPhone ? (
                                  <a 
                                    href={`tel:${detail.replace(/\s/g, '')}`}
                                    className="text-muted-foreground hover:text-blue-600 transition-colors block flex items-center gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
                                    {detail}
                                  </a>
                                ) : (
                                  <p className="text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0"></span>
                                    <span>{detail}</span>
                                  </p>
                                );
                                return <div key={detailIndex}>{content}</div>;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section 
        ref={mapSection.elementRef}
        className="py-12 lg:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className={`transition-all duration-1000 ${
              mapSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Find Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Plan M Map */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-700 text-center">Plan M Business Park</h3>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <iframe
                    className="w-full h-[400px] md:h-[500px]"
                    src="https://www.google.com/maps?q=Plan+M+business+park,+Turbhe,+Navi+Mumbai,+Maharashtra+400706&output=embed"
                    title="Plan M Location"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-muted-foreground">
                  Next to IKEA Road, Turbhe, Navi Mumbai, Maharashtra 400706
                </p>
              </div>

              {/* Plan I Map */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-700 text-center">Plan I Business Park</h3>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <iframe
                    className="w-full h-[400px] md:h-[500px]"
                    src="https://www.google.com/maps?q=Plan+I+business+park,+Nerul,+Navi+Mumbai,+Maharashtra&output=embed"
                    title="Plan I Location"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-muted-foreground">
                  Nerul, Navi Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

