import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AmenityCard from "@/components/AmenityCard";
import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import galleryImage from "@/assets/image.png";
import image0 from "@/assets/image0.png";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import planIHero from "@/assets/plan-i-hero.jpg";
import amenityConference from "@/assets/amenity-conference.jpg";
import amenityValet from "@/assets/amenity-valet.jpg";
import amenityCafeteria from "@/assets/amenity-cafeteria.jpg";
import amenityGym from "@/assets/amenity-gym.jpg";
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
  const heroSlides = [
    {
      image: planIHero,
      title: "Plan I Business Park",
      subtitle: "Where design meets technology and sustainability",
    },
    {
      image: "https://plani-tescon.com/media/images/amenities/podium-level-new.webp",
      title: "Podium Level View",
      subtitle: "Premium amenities for your business success",
    },
  ];

  const amenities = [
    {
      image: amenityConference,
      title: "Digital Conference Area",
      description: "State-of-the-art digitally equipped conference facilities for seamless business meetings.",
    },
    {
      image: amenityValet,
      title: "Valet & Concierge",
      description: "Premium valet and concierge services ensuring exceptional hospitality for your business.",
    },
    {
      image: amenityCafeteria,
      title: "Cafeteria",
      description: "Contemporary dining space with diverse culinary options for your convenience.",
    },
    {
      image: amenityGym,
      title: "Equipped Gymnasium",
      description: "Fully equipped fitness center with modern amenities for your wellness journey.",
    },
    {
      image: "https://plani-tescon.com/media/images/amenities/room.webp",
      title: "Children Cache",
      description: "A dedicated play area for children to enjoy and have fun in a safe environment.",
    },
    {
      image: "https://plani-tescon.com/media/images/amenities/pool.webp",
      title: "Infinity Pool",
      description: "Luxurious infinity pool for relaxation and leisure with a stunning view.",
    },
    {
      image: "https://plani-tescon.com/media/images/amenities/mini-golf.jpg",
      title: "Mini Golf",
      description: "Mini golf course for recreation and entertainment for all ages.",
    },
    {
      image: "https://plani-tescon.com/media/images/amenities/gazebo.jpg",
      title: "Gazebo",
      description: "Beautifully designed gazebo for gatherings, relaxation, and outdoor enjoyment.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
  {/* Hero Section */}
  <HeroSlider slides={heroSlides} showButtons={false} />

      {/* About Section */}
      <section className={`py-16 lg:py-24 bg-white relative overflow-hidden transition-all duration-1000 ${overviewSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={overviewSection.elementRef} className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Project Overview Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-block px-6 py-2 border-2 border-planI-primary rounded-lg font-bold text-planI-primary bg-white text-lg tracking-wide shadow-sm" style={{letterSpacing: "1px"}}>
                PROJECT OVERVIEW
              </span>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center mb-8">
              <span className="h-1 w-32 bg-planI-muted" />
              <span className="mx-2"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" width="4" height="32" rx="2" fill="#1A7F4A"/></svg></span>
              <span className="h-1 w-32 bg-planI-muted" />
            </div>
            {/* Heading */}
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6" style={{fontFamily: 'serif'}}>
              PLAN I - NAVI MUMBAI'S URBAN FOREST FOR ENTERPRISES
            </h1>
            {/* Description */}
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-2">
              Located just minutes away from the Sion-Panvel highway, Plan I Business Park is more than just another commercial address - it's a visionary workspace that's redefining the way modern businesses operate. Spread across an impressive 4,75,000 sq.ft. and soaring 23 stories into the sky, this landmark destination features office spaces engineered to uplift your business experience, providing your team the perfect launchpad for success. Whether you're a solopreneur or leading a sizable organization, Plan I is the workspace that's <span className="font-bold">designed to deliver the maximum</span> to support your ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className={`py-16 bg-[#115C37] transition-all duration-1000 ${highlightsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={highlightsSection.elementRef} className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Key Highlights Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-block px-6 py-2 border-2 border-white rounded-lg font-bold text-white bg-[#115C37] text-lg tracking-wide shadow-sm" style={{letterSpacing: "1px"}}>
                KEY HIGHLIGHTS
              </span>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center mb-12">
              <span className="h-1 w-32 bg-white" />
              <span className="mx-2"><svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" width="4" height="32" rx="2" fill="#fff"/></svg></span>
              <span className="h-1 w-32 bg-white" />
            </div>
            {/* Highlights Grid */}
            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-x-8 gap-y-16 text-white">
                {/* Row 1 */}
                <div className="flex flex-col items-center">
                  <img src="https://plani-tescon.com/media/images/highlights/park.svg" alt="G+23 Storey Commercial Business Park" className="w-16 h-16 mb-2" />
                  <div className="font-bold mt-4 text-center text-base">G+23 Storey Commercial<br />Business Park</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://plani-tescon.com/media/images/highlights/office-space.svg" alt="Office Spaces Ranging From 387 Sq. Ft. to 10,000 Sq. Ft." className="w-16 h-16 mb-2" />
                  <div className="font-bold mt-4 text-center text-base">Office Spaces Ranging From 387 Sq. Ft. to<br />10,000 Sq. Ft.</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://plani-tescon.com/media/images/highlights/parking.svg" alt="Robotic Car Parking" className="w-16 h-16 mb-2" />
                  <div className="font-bold mt-4 text-center text-base">Robotic Car Parking</div>
                </div>
                {/* Row 2 */}
                <div className="flex flex-col items-center">
                  <img src="https://plani-tescon.com/media/images/highlights/lifts.svg" alt="Miconic Lifts" className="w-16 h-16 mb-2" />
                  <div className="font-bold mt-4 text-center text-base">Miconic Lifts</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://plani-tescon.com/media/images/highlights/desk.svg" alt="Bare Shell Office Spaces" className="w-16 h-16 mb-2" />
                  <div className="font-bold mt-4 text-center text-base">Bare Shell Office Spaces</div>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://plani-tescon.com/media/images/highlights/charging-stations.svg" alt="Electric Car Charging Stations" className="w-16 h-16 mb-2" />
                  <div className="font-bold mt-4 text-center text-base">Electric Car Charging Stations</div>
                </div>
              </div>
              {/* Vertical Dividers */}
              <div className="absolute top-0 left-1/3 w-px h-full bg-white opacity-40" style={{transform: 'translateX(-50%)'}}></div>
              <div className="absolute top-0 left-2/3 w-px h-full bg-white opacity-40" style={{transform: 'translateX(-50%)'}}></div>
              {/* Horizontal Divider */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white opacity-40" style={{transform: 'translateY(-50%)'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <div ref={gallerySection.elementRef} className={`transition-all duration-1000 ${gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <ImageGallery
          images={[image0, image1, image2, image3, image4]} 
          colorScheme="green"
        />
      </div>

  {/* Pricing Section */}
  <section ref={pricingSection.elementRef} className={`py-20 lg:py-32 bg-gradient-to-br from-green-50 to-green-100 transition-all duration-1000 ${pricingSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <span className="inline-block px-6 py-2 border-2 border-green-700 rounded-lg font-bold text-green-700 bg-white text-lg tracking-wide shadow-sm">
                COST SHEET
              </span>
            </div>
            <div className="flex items-center justify-center mb-8">
              <span className="h-1 w-32 bg-green-400" />
              <span className="mx-2 text-green-700 text-2xl">•</span>
              <span className="h-1 w-32 bg-green-400" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Investment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing plans designed to meet your business requirements with transparent cost structure.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-green-700 text-white p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-center">PLAN I - COST BREAKDOWN</h3>
            </div>
            
            {/* Pricing Table */}
            <div className="bg-white shadow-2xl rounded-b-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-100 border-b-2 border-green-200">
                      <th className="px-6 py-4 text-left font-bold text-green-800">Particulars</th>
                      <th className="px-6 py-4 text-center font-bold text-green-800">774 Sq.Ft</th>
                      <th className="px-6 py-4 text-center font-bold text-green-800">794 Sq.Ft</th>
                      <th className="px-6 py-4 text-center font-bold text-green-800">1128 Sq.Ft</th>
                      <th className="px-6 py-4 text-center font-bold text-green-800">1418 Sq.Ft</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Maintenance Area (Sq.ft)</td>
                      <td className="px-6 py-4 text-center text-gray-800">774</td>
                      <td className="px-6 py-4 text-center text-gray-800">794</td>
                      <td className="px-6 py-4 text-center text-gray-800">1128</td>
                      <td className="px-6 py-4 text-center text-gray-800">1418</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-700">Usable Carpet Area (Sq.ft)</td>
                      <td className="px-6 py-4 text-center text-gray-800">387</td>
                      <td className="px-6 py-4 text-center text-gray-800">397</td>
                      <td className="px-6 py-4 text-center text-gray-800">564</td>
                      <td className="px-6 py-4 text-center text-gray-800">709</td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors bg-green-25">
                      <td className="px-6 py-4 font-bold text-green-800">Sale Value</td>
                      <td className="px-6 py-4 text-center font-bold text-green-800">69,00,000</td>
                      <td className="px-6 py-4 text-center font-bold text-green-800">71,46,000</td>
                      <td className="px-6 py-4 text-center font-bold text-green-800">1,01,52,000</td>
                      <td className="px-6 py-4 text-center font-bold text-green-800">1,27,62,000</td>
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
            <div className="bg-gray-50 p-8 rounded-2xl mt-8 border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-6">TERMS & CONDITIONS:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 space-y-2">
                <div className="space-y-3">
                  <p><span className="font-semibold">1.</span> Total value includes Basic Rate, Development Charges, Car Parking and Club Membership.</p>
                  <p><span className="font-semibold">2.</span> Stamp Duty 6% & Registration charges as applicable. Subject to Change.</p>
                  <p><span className="font-semibold">3.</span> GST to be paid separately as applicable.</p>
                  <p><span className="font-semibold">4.</span> Society Maintenance Charges for 2 years at the time of possession on Maintenance area.</p>
                </div>
                <div className="space-y-3">
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
  <section ref={amenitiesSection.elementRef} className={`py-20 lg:py-32 bg-background transition-all duration-1000 ${amenitiesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}` }>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Amenities & Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for performance and comfort, Plan I offers a premium range of amenities for your business success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
                <div className="min-h-[220px] flex animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AmenityCard {...amenity} />
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
                  <img src="https://plani-tescon.com/media/images/location/station.svg" alt="Railway Station" className="w-10 h-10" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 text-xl">•</span>
                      <span className="text-base lg:text-lg text-foreground">Near Nerul & Juninagar Railway Station</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="https://plani-tescon.com/media/images/location/highway.svg" alt="Highway" className="w-10 h-10" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 text-xl">•</span>
                      <span className="text-base lg:text-lg text-foreground">100 Meters Away From Thane-Belapur Highway</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="https://plani-tescon.com/media/images/location/stadium.svg" alt="Stadium" className="w-10 h-10" />
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
              <img src="https://plani-tescon.com/media/images/location/map.webp" alt="Plan I Location Map" className="w-full max-w-xl rounded-xl shadow-lg" />
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
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Prime Location
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Plan I's strategic location ensures seamless access to major highways, ports, and Mumbai's 
                  growing commercial belt. Situated near the Thane–Belapur Road in Nerul, it offers excellent 
                  connectivity to both Mumbai and the extended metropolitan region.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-planI-primary mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground">Nerul, Navi Mumbai</h4>
                      <p className="text-sm text-muted-foreground">Minutes from Sion–Panvel Highway</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-planI-primary mt-2" />
                    <div>
                      <h4 className="font-semibold text-foreground">Superior Connectivity</h4>
                      <p className="text-sm text-muted-foreground">Access to ports and major transport hubs</p>
                    </div>
                  </div>
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
