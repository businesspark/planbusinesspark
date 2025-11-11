import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AmenityCard from "@/components/AmenityCard";
import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
// Gallery images - using floor plans as placeholders
import galleryImage from "@/assets/images/floor-plan-1.jpeg";
import image0 from "@/assets/images/floor-plan-1.jpeg";
import image1 from "@/assets/images/floor-plan-1.jpeg";
import image2 from "@/assets/images/floor-plan-2.jpeg";
import image3 from "@/assets/images/floor-plan-2.jpeg";
import image4 from "@/assets/images/floor-plan-2.jpeg";
import planIHero from "@/assets/images/banner2.png";
import planIHeroMobile from "@/assets/images/banner5.png";
import planIPodium from "@/assets/images/plan-i-podium.webp";
// Using apartment images as placeholders for missing amenity images
import amenityConference from "@/assets/images/apartment-1.jpg";
import amenityValet from "@/assets/images/apartment-2.jpg";
import amenityCafeteria from "@/assets/images/apartment-3.jpg";
import amenityGym from "@/assets/images/apartment-4.jpg";
import amenityRoom from "@/assets/images/amenity-room.webp";
import amenityPool from "@/assets/images/amenity-pool.webp";
import amenityMiniGolf from "@/assets/images/amenity-mini-golf.jpg";
import amenityGazebo from "@/assets/images/amenity-gazebo.jpg";
import locationMap from "@/assets/images/map.jpg";
// Import icons
import parkIcon from "@/assets/images/icons/park.svg";
import officeSpaceIcon from "@/assets/images/icons/office-space.svg";
import parkingIcon from "@/assets/images/icons/parking.svg";
import liftsIcon from "@/assets/images/icons/lifts.svg";
import deskIcon from "@/assets/images/icons/desk.svg";
import chargingStationsIcon from "@/assets/images/icons/charging-stations.svg";
import stationIcon from "@/assets/images/icons/station.svg";
import highwayIcon from "@/assets/images/icons/highway.svg";
import stadiumIcon from "@/assets/images/icons/stadium.svg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PlanI = () => {
  // Scroll animation hooks
  const overviewSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const highlightsSection = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const gallerySection = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const pricingSection = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const amenitiesSection = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const videoSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const locationSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const contactSection = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const amenities = [
    {
      image: amenityConference,
      title: "",
      description: "",
    },
    {
      image: amenityValet,
      title: "",
      description: "",
    },
    {
      image: amenityCafeteria,
      title: "",
      description: "",
    },
    {
      image: amenityGym,
      title: "",
      description: "",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
  {/* Hero Section */}
  <Hero
    image={planIHero}
    mobileImage={planIHeroMobile}
    title="Plan I Business Park"
    subtitle="Where design meets technology and sustainability"
    showButtons={false}
  />

      {/* About Section */}
      <section className={`py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden transition-all duration-1000 ${overviewSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={overviewSection.elementRef} className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Project Overview Badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <span className="inline-block px-4 sm:px-6 py-2 border-2 border-planI-primary rounded-lg font-bold text-planI-primary bg-white text-sm sm:text-lg tracking-wide shadow-sm" style={{letterSpacing: "1px"}}>
                PROJECT OVERVIEW
              </span>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <span className="h-1 w-16 sm:w-32 bg-planI-muted" />
              <span className="mx-2"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" width="4" height="32" rx="2" fill="#1A7F4A"/></svg></span>
              <span className="h-1 w-16 sm:w-32 bg-planI-muted" />
            </div>
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance" style={{fontFamily: 'serif'}}>
              PLAN I - NAVI MUMBAI'S URBAN FOREST FOR ENTERPRISES
            </h1>
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-2 px-4 text-balance">
              Located just minutes away from the Sion-Panvel highway, Plan I Business Park is more than just another commercial address - it's a visionary workspace that's redefining the way modern businesses operate. Spread across an impressive 4,75,000 sq.ft. and soaring 23 stories into the sky, this landmark destination features office spaces engineered to uplift your business experience, providing your team the perfect launchpad for success. Whether you're a solopreneur or leading a sizable organization, Plan I is the workspace that's <span className="font-bold">designed to deliver the maximum</span> to support your ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className={`py-12 sm:py-16 bg-[#115C37] transition-all duration-1000 ${highlightsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={highlightsSection.elementRef} className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Key Highlights Badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <span className="inline-block px-4 sm:px-6 py-2 border-2 border-white rounded-lg font-bold text-white bg-[#115C37] text-sm sm:text-lg tracking-wide shadow-sm" style={{letterSpacing: "1px"}}>
                KEY HIGHLIGHTS
              </span>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <span className="h-1 w-16 sm:w-32 bg-white" />
              <span className="mx-2"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" width="4" height="32" rx="2" fill="#fff"/></svg></span>
              <span className="h-1 w-16 sm:w-32 bg-white" />
            </div>
            {/* Highlights Grid */}
            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-12 lg:gap-y-16 text-white">
                {/* Row 1 */}
                <div className="flex flex-col items-center">
                  <img src={parkIcon} alt="G+23 Storey Commercial Business Park" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <div className="font-bold mt-2 sm:mt-4 text-center text-sm sm:text-base text-balance">G+23 Storey Commercial<br />Business Park</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src={officeSpaceIcon} alt="Office Spaces Ranging From 387 Sq. Ft. to 10,000 Sq. Ft." className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <div className="font-bold mt-2 sm:mt-4 text-center text-sm sm:text-base text-balance">Office Spaces Ranging From 387 Sq. Ft. to<br />10,000 Sq. Ft.</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src={parkingIcon} alt="Robotic Car Parking" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <div className="font-bold mt-2 sm:mt-4 text-center text-sm sm:text-base">Robotic Car Parking</div>
                </div>
                {/* Row 2 */}
                <div className="flex flex-col items-center">
                  <img src={liftsIcon} alt="Miconic Lifts" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <div className="font-bold mt-2 sm:mt-4 text-center text-sm sm:text-base">Miconic Lifts</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src={deskIcon} alt="Bare Shell Office Spaces" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <div className="font-bold mt-2 sm:mt-4 text-center text-sm sm:text-base">Bare Shell Office Spaces</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src={chargingStationsIcon} alt="Electric Car Charging Stations" className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <div className="font-bold mt-2 sm:mt-4 text-center text-sm sm:text-base text-balance">Electric Car Charging Stations</div>
                </div>
              </div>
              {/* Dividers - Hidden on mobile for cleaner look */}
              <div className="hidden lg:block absolute top-0 left-1/3 w-px h-full bg-white opacity-40" style={{transform: 'translateX(-50%)'}}></div>
              <div className="hidden lg:block absolute top-0 left-2/3 w-px h-full bg-white opacity-40" style={{transform: 'translateX(-50%)'}}></div>
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-white opacity-40" style={{transform: 'translateY(-50%)'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
  <section ref={pricingSection.elementRef} className={`py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-green-50 to-green-100 transition-all duration-1000 ${pricingSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="flex justify-center mb-4 sm:mb-6">
              <span className="inline-block px-4 sm:px-6 py-2 border-2 border-green-700 rounded-lg font-bold text-green-700 bg-white text-sm sm:text-lg tracking-wide shadow-sm">
                COST SHEET
              </span>
            </div>
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <span className="h-1 w-16 sm:w-32 bg-green-400" />
              <span className="mx-2 text-green-700 text-xl sm:text-2xl">•</span>
              <span className="h-1 w-16 sm:w-32 bg-green-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Investment Options
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 text-balance">
              Flexible pricing plans designed to meet your business requirements with transparent cost structure.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-green-700 text-white p-4 sm:p-6 rounded-t-2xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-balance">PLAN I - COST BREAKDOWN</h3>
            </div>
            
            {/* Pricing Table */}
            <div className="bg-white shadow-2xl rounded-b-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-green-100 border-b-2 border-green-200">
                      <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-bold text-green-800 text-xs sm:text-sm">Particulars</th>
                      <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">774 Sq.Ft</th>
                      <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">794 Sq.Ft</th>
                      <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">1128 Sq.Ft</th>
                      <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">1418 Sq.Ft</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-semibold text-gray-700 text-xs sm:text-sm">Maintenance Area (Sq.ft)</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">774</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">794</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">1128</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">1418</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-semibold text-gray-700 text-xs sm:text-sm">Usable Carpet Area (Sq.ft)</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">387</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">397</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">564</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center text-gray-800 text-xs sm:text-sm">709</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors bg-green-25">
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-bold text-green-800 text-xs sm:text-sm">Sale Value</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">69,00,000</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">71,46,000</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">1,01,52,000</td>
                      <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-center font-bold text-green-800 text-xs sm:text-sm">1,27,62,000</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Car Parking (1)</td>
                      <td className="px-6 py-4 text-center text-gray-800">7,00,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">7,00,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">7,00,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">7,00,000</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Club Membership</td>
                      <td className="px-6 py-4 text-center text-gray-800">2,00,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">2,00,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">2,00,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">2,00,000</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Development Charges</td>
                      <td className="px-6 py-4 text-center text-gray-800">2,70,900</td>
                      <td className="px-6 py-4 text-center text-gray-800">2,77,900</td>
                      <td className="px-6 py-4 text-center text-gray-800">3,94,800</td>
                      <td className="px-6 py-4 text-center text-gray-800">4,96,300</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors bg-yellow-50">
                      <td className="px-6 py-4 font-bold text-yellow-800">Total Value</td>
                      <td className="px-6 py-4 text-center font-bold text-yellow-800">80,70,900</td>
                      <td className="px-6 py-4 text-center font-bold text-yellow-800">83,23,900</td>
                      <td className="px-6 py-4 text-center font-bold text-yellow-800">1,14,46,800</td>
                      <td className="px-6 py-4 text-center font-bold text-yellow-800">1,41,58,300</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Stamp Duty @ 6%</td>
                      <td className="px-6 py-4 text-center text-gray-800">4,84,254</td>
                      <td className="px-6 py-4 text-center text-gray-800">4,99,434</td>
                      <td className="px-6 py-4 text-center text-gray-800">6,86,808</td>
                      <td className="px-6 py-4 text-center text-gray-800">8,49,498</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">GST @ 6%</td>
                      <td className="px-6 py-4 text-center text-gray-800">4,84,254</td>
                      <td className="px-6 py-4 text-center text-gray-800">4,99,434</td>
                      <td className="px-6 py-4 text-center text-gray-800">6,86,808</td>
                      <td className="px-6 py-4 text-center text-gray-800">8,49,498</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Registration</td>
                      <td className="px-6 py-4 text-center text-gray-800">30,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">30,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">30,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">30,000</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Legal Charges</td>
                      <td className="px-6 py-4 text-center text-gray-800">15,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">15,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">15,000</td>
                      <td className="px-6 py-4 text-center text-gray-800">15,000</td>
                    </tr>
                    <tr className="bg-green-600 text-white">
                      <td className="px-6 py-4 font-bold text-lg">Total Amount</td>
                      <td className="px-6 py-4 text-center font-bold text-lg">90,84,408</td>
                      <td className="px-6 py-4 text-center font-bold text-lg">93,67,768</td>
                      <td className="px-6 py-4 text-center font-bold text-lg">1,28,65,416</td>
                      <td className="px-6 py-4 text-center font-bold text-lg">1,59,02,296</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl mt-6 sm:mt-8 border-l-4 border-green-600">
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">TERMS & CONDITIONS:</h4>
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700 space-y-1 sm:space-y-2">
                <div className="space-y-2 sm:space-y-3">
                  <p><span className="font-semibold">1.</span> Total value includes Basic Rate, Development Charges, Car Parking and Club Membership.</p>
                  <p><span className="font-semibold">2.</span> Stamp Duty 6% & Registration charges as applicable. Subject to Change.</p>
                  <p><span className="font-semibold">3.</span> GST to be paid separately as applicable.</p>
                  <p><span className="font-semibold">4.</span> Society Maintenance Charges for 2 years at the time of possession on Maintenance area.</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p><span className="font-semibold">5.</span> Society Formation Charges, Transfer Charges payable as actual at the time of possession.</p>
                  <p><span className="font-semibold">6.</span> Society Formation Charges Rs. 1,00,000/- and MIDC Transfer Charges Rs. 1,50,000/-payable at the time of Possession.</p>
                  <p><span className="font-semibold">7.</span> Above rates are subject to change without prior intimation at the discretion of the Developer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Amenities Section */}
  <section 
    ref={amenitiesSection.elementRef}
    className={`py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden transition-all duration-1000 ${
      amenitiesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
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
          Designed for performance and comfort, Plan I offers a premium range of amenities for your business success.
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
              src={amenity.image}
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

  {/* Video Section */}
  <section ref={videoSection.elementRef} className={`py-20 lg:py-32 bg-background transition-all duration-1000 ${videoSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 text-green-700 uppercase tracking-wide transform hover:scale-105 transition-transform duration-300">
            Discover Plan I
          </h2>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <iframe
              className="w-full h-[400px] md:h-[600px]"
              src="https://www.youtube.com/embed/eP7qg3ghMYI"
              title="Plan I Business Park Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
  {/* Location Section */}
  <section ref={locationSection.elementRef} className={`w-full bg-background py-20 lg:py-32 transition-all duration-1000 ${locationSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text & Highlights */}
            <div className="flex-1 min-w-[320px]">
              <div className="flex items-center justify-center mb-8">
                <span className="border-2 border-green-700 rounded-md px-6 py-2 font-bold text-lg tracking-wide text-green-900">LOCATION</span>
              </div>
              <div className="border-t border-green-400 mb-8 relative flex items-center">
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-2 text-green-700 text-2xl">•</span>
              </div>
              <p className="text-muted-foreground mb-10 text-base lg:text-lg">
                Give your business the location advantage it deserves, complemented by views of the city and mountains. At Plan I, Nerul’s bustling commercial hub meets superior connectivity, making success more accessible.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={stationIcon} alt="Railway Station" className="w-10 h-10" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 text-xl">•</span>
                      <span className="text-base lg:text-lg text-foreground">Near Nerul & Juninagar Railway Station</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={highwayIcon} alt="Highway" className="w-10 h-10" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 text-xl">•</span>
                      <span className="text-base lg:text-lg text-foreground">100 Meters Away From Thane-Belapur Highway</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={stadiumIcon} alt="Stadium" className="w-10 h-10" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 text-xl">•</span>
                      <span className="text-base lg:text-lg text-foreground">Situated Opposite D.Y.Patil Stadium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Map Image */}
            <div className="flex-1 flex justify-center items-center">
              <img src={locationMap} alt="Plan I Location Map" className="w-full max-w-xl rounded-xl shadow-lg" />
            </div>
          </div>
          {/* Side Buttons */}
          {/* Side Buttons removed as requested */}
        </section>

      {/* Image Gallery Section */}


  {/* Contact & Location Section */}
  <section ref={contactSection.elementRef} className={`py-20 lg:py-32 bg-planI-muted transition-all duration-1000 ${contactSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} id="contact">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in Plan I? Reach out to schedule a tour or inquire about availability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <ContactForm colorScheme="green" />
            </div>

            {/* Location & Map */}
            <div className="animate-slide-in space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span role="img" aria-label="location" className="text-3xl animate-bounce">📍</span>
                  <h3 className="text-xl font-bold text-foreground">ADDRESS</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Plan I Business Park, Nerul, Navi Mumbai<br />
                  Maharashtra 400706
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span role="img" aria-label="phone" className="text-3xl animate-pulse">📞</span>
                  <h3 className="text-xl font-bold text-foreground">CALL US NOW</h3>
                </div>
                <div className="space-y-2">
                  {[
                    "+91 93366 36577",
                    "+91 81041 24183",
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

              <div className="rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  className="w-full h-96"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30168.123456!2d73.0195!3d19.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzU4LjgiTiA3M8KwMDEnMTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  title="Plan I Location"
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

export default PlanI;
