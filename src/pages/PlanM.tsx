import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AmenityCard from "@/components/AmenityCard";
import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import planMHero from "@/assets/plan-m-hero.jpg";
import amenityConcierge from "@/assets/amenity-concierge.jpg";
import amenityValet from "@/assets/amenity-valet.jpg";
import amenityCafeteria from "@/assets/amenity-cafeteria.jpg";
import amenityGym from "@/assets/amenity-gym.jpg";
import SimpleEnquiryForm from "@/components/SimpleEnquiryForm";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PlanM = () => {
  const [openEnquiry, setOpenEnquiry] = React.useState(false);

  // Scroll animation hooks
  const overviewSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const priceSection = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const amenitiesSection = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const walkthroughSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const locationSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const contactSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const heroSlides = [
    {
      image: planMHero,
      title: "Plan M Business Park",
      subtitle: "Redefining workspace excellence with next-gen infrastructure",
    },
    {
      image: "https://planmbusinesspark.com/assets/images/resources/about-1-1.jpg",
      title: "Modern Architecture",
      subtitle: "A new benchmark for business spaces in Navi Mumbai",
    },
  ];

  const amenities = [
    {
      image: amenityConcierge,
      title: "Concierge Services",
      description: "Professional concierge services ensuring seamless day-to-day operations for your business.",
    },
    {
      image: amenityValet,
      title: "Valet Parking",
      description: "Premium valet parking services for your convenience and that of your clients.",
    },
    {
      image: amenityCafeteria,
      title: "Cafeteria",
      description: "Modern cafeteria offering diverse dining options in a comfortable setting.",
    },
    {
      image: amenityGym,
      title: "Fitness Center",
      description: "Fully equipped gymnasium with state-of-the-art equipment and professional trainers.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <HeroSlider slides={heroSlides} />

      {/* About Section */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={overviewSection.elementRef}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              overviewSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image Side */}
            <div className="flex justify-center">
              <div 
                className={`relative transform transition-all duration-1000 delay-300 ${
                  overviewSection.isVisible 
                    ? "opacity-100 translate-x-0 scale-100" 
                    : "opacity-0 -translate-x-10 scale-95"
                }`}
              >
                <div className="absolute -inset-4 bg-yellow-600/20 rounded-3xl blur-xl transform rotate-6 animate-pulse"></div>
                <img
                  src="https://planmbusinesspark.com/assets/images/resources/about-1-1.jpg"
                  alt="Plan M Project Overview"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Content Side */}
            <div 
              className={`transform transition-all duration-1000 delay-500 ${
                overviewSection.isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-5xl font-bold text-yellow-700 mb-6 uppercase tracking-wide transform hover:scale-105 transition-transform duration-300">
                PROJECT OVERVIEW
              </h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Plan M is a state-of-the-art G+36 storeyed elevation situated at Turbhe, the business district of Navi Mumbai. This ultra modern project comprises a list of modern workspaces coupled with amenities that are unheard in the commercial real estate segment. Plan M is all set to redefine the way you perceive business spaces.
              </p>
              <ul className="mb-8 space-y-4">
                {[
                  "Glass Façade Elevation",
                  "8-Level Covered Parking Area",
                  "Floor Height 13 ft.",
                  "Hi-Speed Branded Elevators",
                  "Bare Shell Offices"
                ].map((feature, index) => (
                  <li 
                    key={index}
                    className={`flex items-center gap-3 transform transition-all duration-500 ${
                      overviewSection.isVisible 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 -translate-x-5"
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <span className="text-yellow-500 text-xl animate-bounce-in">✔</span>
                    <span className="font-bold text-gray-800 hover:text-yellow-600 transition-colors cursor-default">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                <button className="group relative bg-black text-white px-8 py-4 rounded-md font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all transform hover:scale-110 hover:shadow-2xl overflow-hidden">
                  <span className="relative z-10">Call Now</span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
                <button 
                  className="group relative bg-yellow-600 text-white px-8 py-4 rounded-md font-semibold text-lg shadow-lg hover:bg-yellow-700 transition-all transform hover:scale-110 hover:shadow-2xl animate-pulse-glow overflow-hidden"
                  onClick={() => setOpenEnquiry(true)}
                >
                  <span className="relative z-10">View Details</span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </div>
              {/* Enquiry Dialog */}
              <Dialog open={openEnquiry} onOpenChange={setOpenEnquiry}>
                <DialogContent className="animate-zoom-in">
                  <DialogHeader>
                    <DialogTitle>Enquire about Plan M</DialogTitle>
                    <DialogDescription>Fill out the form below and our team will contact you soon.</DialogDescription>
                  </DialogHeader>
                  <SimpleEnquiryForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={["https://planmproject.com/images/floor-plan/Picture2.jpeg","https://planmproject.com/images/floor-plan/Picture2.jpeg","https://planmproject.com/images/floor-plan/Picture4.jpeg","https://planmproject.com/images/floor-plan/Picture4.jpeg","https://planmproject.com/images/floor-plan/Picture4.jpeg","https://planmproject.com/images/floor-plan/Picture4.jpeg","https://planmproject.com/images/floor-plan/Picture4.jpeg","https://planmproject.com/images/floor-plan/Picture4.jpeg"]}
        colorScheme="yellow"
      />

      {/* Price & Unit Details Section */}
      <section 
        ref={priceSection.elementRef}
        className={`py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000 ${
          priceSection.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-yellow-700 mb-6 text-center uppercase tracking-wide transform hover:scale-105 transition-transform duration-300">
            PRICE & UNIT DETAILS - PLAN M BUSINESS PARK
          </h2>
          <div className="mb-6 text-sm text-muted-foreground space-y-2">
            <p className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600 transform hover:scale-105 transition-transform">A. Midas Wing (Commercial Units) - 2333sq.ft carpet @ 4.18cr (negotiable) + taxes , 3000sq.ft carpet @ Price On Request & 6000sq.ft carpet @ Price On Request.</p>
            <p className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600 transform hover:scale-105 transition-transform">B. West Wing (IT/ITES office spaces) - 370sq.ft carpet @ 67.77L (negotiable) + Taxes, 568sq.ft carpet @ 98.56L (negotiable) + Taxes.</p>
            <p className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600 transform hover:scale-105 transition-transform">C. East Wing (IT/ITES office spaces) - 397sq.ft carpet @ 70L (negotiable) + taxes & 575sq.ft carpet @ 97.83L (negotiable) + Taxes.</p>
          </div>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border border-gray-300 text-center mb-10 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
                <tr>
                  <th className="px-4 py-3 border font-bold">Carpet</th>
                  <th className="px-4 py-3 border font-bold">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { carpet: "371", price: "67.77L* + taxes", isPrice: true },
                  { carpet: "389", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "408", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "422", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "428", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "432", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "447", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "486", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "559", price: "PRICE ON REQUEST", isPrice: false },
                  { carpet: "588", price: "PRICE ON REQUEST", isPrice: false },
                ].map((row, index) => (
                  <tr 
                    key={index}
                    className={`hover:bg-yellow-50 transition-all duration-500 border-b ${
                      priceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ 
                      transitionDelay: priceSection.isVisible ? `${index * 0.05}s` : "0s"
                    }}
                  >
                    <td className="border px-4 py-3 font-semibold">{row.carpet}</td>
                    <td className="border px-4 py-3">
                      {row.isPrice ? (
                        <span className="font-bold text-yellow-700 text-lg">{row.price}</span>
                      ) : (
                        <button className="bg-yellow-700 text-white px-4 py-2 rounded font-bold hover:bg-yellow-800 transform hover:scale-110 transition-all shadow-md">
                          {row.price}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-yellow-700 mb-6 text-center uppercase tracking-wide transform hover:scale-105 transition-transform duration-300">
            Payment Schedule (Plan M)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-center shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
                <tr>
                  <th className="px-4 py-3 border font-bold">Sr. No.</th>
                  <th className="px-4 py-3 border font-bold">Schedule</th>
                  <th className="px-4 py-3 border font-bold">Collection Percentage</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { sr: "1", schedule: "Booking", percentage: "20%" },
                  { sr: "2", schedule: "On Completion of Plinth", percentage: "10%" },
                  { sr: "3", schedule: "On Completion of 7th Slab", percentage: "8%" },
                  { sr: "4", schedule: "On Completion of 14th Slab", percentage: "8%" },
                  { sr: "5", schedule: "On Completion of 21st Slab", percentage: "8%" },
                  { sr: "6", schedule: "On Completion of 28th Slab", percentage: "8%" },
                  { sr: "7", schedule: "On Completion of 35th Slab", percentage: "8%" },
                  { sr: "8", schedule: "On Completion of Brickwork", percentage: "5%" },
                  { sr: "9", schedule: "On Completion of Internal Plaster", percentage: "5%" },
                  { sr: "10", schedule: "On Completion of External Plaster", percentage: "5%" },
                  { sr: "11", schedule: "On Completion of Flooring", percentage: "5%" },
                  { sr: "12", schedule: "On Completion of Painting", percentage: "5%" },
                  { sr: "13", schedule: "On Completion of Lift Installation", percentage: "2%" },
                  { sr: "14", schedule: "On Completion of Firefighting", percentage: "2%" },
                  { sr: "15", schedule: "On Completion of Plumbing", percentage: "2%" },
                  { sr: "16", schedule: "On Completion of Final Finishing", percentage: "2%" },
                  { sr: "17", schedule: "On Possession", percentage: "5%" },
                ].map((row, index) => (
                  <tr 
                    key={index}
                    className={`hover:bg-yellow-50 transition-all duration-500 border-b transform hover:scale-[1.01] ${
                      priceSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ 
                      transitionDelay: priceSection.isVisible ? `${index * 0.03}s` : "0s"
                    }}
                  >
                    <td className="border px-3 py-2 font-semibold">{row.sr}</td>
                    <td className="border px-3 py-2">{row.schedule}</td>
                    <td className="border px-3 py-2 font-bold text-yellow-700">{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section 
        ref={amenitiesSection.elementRef}
        className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              amenitiesSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 transform hover:scale-105 transition-transform duration-300">
              World-Class Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan M offers a curated range of lifestyle and business facilities designed for your comfort and productivity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-700 ${
                  amenitiesSection.isVisible 
                    ? "opacity-100 translate-y-0 scale-100 animate-zoom-in" 
                    : "opacity-0 translate-y-20 scale-95"
                } hover:scale-105 hover:shadow-2xl`}
                style={{ 
                  transitionDelay: amenitiesSection.isVisible ? `${index * 0.15}s` : "0s"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={
                    index === 0
                      ? "https://planmbusinesspark.com/assets/images/resources/apartment-1-1.jpg"
                      : index === 1
                        ? "https://planmbusinesspark.com/assets/images/resources/apartment-1-2.jpg"
                        : index === 2
                          ? "https://planmbusinesspark.com/assets/images/resources/apartment-1-3.jpg"
                          : index === 3
                            ? "https://planmbusinesspark.com/assets/images/resources/apartment-1-4.jpg"
                            : amenity.image
                  }
                  alt={amenity.title}
                  className="w-full h-[440px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{amenity.title}</h3>
                  <p className="text-white/90 text-sm">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walk Through Section */}
      <section 
        ref={walkthroughSection.elementRef}
        className="py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className={`w-full transition-all duration-1000 ${
              walkthroughSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 text-yellow-700 uppercase tracking-wide transform hover:scale-105 transition-transform duration-300">
              Walk Through
            </h2>
            <div 
              className={`w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 ${
                walkthroughSection.isVisible ? "animate-zoom-in" : ""
              }`}
            >
              <iframe
                className="w-full h-[400px] md:h-[600px]"
                src="https://www.youtube.com/embed/D9KejXdC59k"
                title="Plan M Business Park Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section 
        ref={locationSection.elementRef}
        className="py-12 lg:py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h2 
            className={`text-3xl lg:text-4xl font-bold text-yellow-700 mb-8 text-center uppercase tracking-wide transform transition-all duration-1000 ${
              locationSection.isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-10 scale-95"
            } hover:scale-105`}
          >
            Location
          </h2>
          <div 
            className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
              locationSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <div 
              className="flex justify-center transform transition-all duration-1000 delay-300"
              style={{
                transform: locationSection.isVisible 
                  ? "translateX(0) scale(1)" 
                  : "translateX(-50px) scale(0.9)"
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-yellow-600/20 rounded-3xl blur-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <img
                  src="https://planmproject.com/images/location-map-min.jpg"
                  alt="Location Map"
                  className="relative w-full max-w-xl object-cover shadow-2xl rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div 
              className="flex flex-col justify-center transform transition-all duration-1000 delay-500"
              style={{
                transform: locationSection.isVisible 
                  ? "translateX(0)" 
                  : "translateX(50px)"
              }}
            >
              <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold text-yellow-700 mb-4">Prime Location</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Plan M Business Park is strategically located for maximum connectivity and convenience, offering easy access to major highways, commercial hubs, and essential services.</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  {[
                    "Close to Mumbai-Pune Expressway",
                    "Near major IT and business centers",
                    "Surrounded by residential and retail developments",
                    "Excellent public transport connectivity"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="transform hover:translate-x-2 transition-transform duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700">Experience the advantage of a location that supports business growth and lifestyle needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section 
        ref={contactSection.elementRef}
        className="py-20 lg:py-32 bg-planM-muted relative overflow-hidden" 
        id="contact"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              contactSection.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 transform hover:scale-105 transition-transform duration-300">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to explore Plan M? Contact us to schedule a visit or learn more about available spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ${
                contactSection.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 -translate-x-10 scale-95"
              }`}
            >
              <ContactForm colorScheme="yellow" />
            </div>

            {/* Location & Map */}
            <div 
              className={`space-y-6 transform transition-all duration-1000 delay-500 ${
                contactSection.isVisible 
                  ? "opacity-100 translate-x-0 scale-100" 
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span role="img" aria-label="location" className="text-3xl animate-bounce">📍</span>
                  <h3 className="text-xl font-bold text-foreground">ADDRESS</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  plan M Business Park, Next to IKEA Road, Turbhe, Navi Mumbai<br />
                  Maharashtra 400706
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span role="img" aria-label="phone" className="text-3xl animate-pulse">📞</span>
                  <h3 className="text-xl font-bold text-foreground">CALL US NOW</h3>
                </div>
                <div className="space-y-2">
                  {[
                    "+91 81041 24183",
                    "+91 93366 36577",
                    "+91 87792 96362"
                  ].map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-lg text-blue-700 font-semibold hover:text-blue-900 transform hover:translate-x-2 transition-all duration-300 cursor-pointer"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div 
                className={`rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ${
                  contactSection.isVisible ? "animate-zoom-in" : ""
                }`}
                style={{
                  transitionDelay: contactSection.isVisible ? "0.7s" : "0s"
                }}
              >
                <iframe
                  className="w-full h-96"
                  src="https://www.google.com/maps?q=Plan+M+business+park,+Turbhe,+Navi+Mumbai,+Maharashtra+400706&output=embed"
                  title="Plan M Location"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanM;
