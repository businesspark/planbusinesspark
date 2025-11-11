import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ImageGalleryProps {
  images: string[];
  colorScheme?: "yellow" | "green";
}

const ImageGallery = ({ images, colorScheme = "yellow" }: ImageGalleryProps) => {
  const bgColor = colorScheme === "yellow" ? "bg-planM-muted" : "bg-planI-muted";
  return (
    <section className={`py-20 lg:py-32 ${bgColor}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Floor Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the detailed layout and design of our business park
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="px-2 flex justify-center">
                    <div className="relative overflow-hidden shadow-lg bg-white" style={{maxWidth: '1000px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="object-contain w-auto h-auto max-h-[600px] max-w-full"
                        style={{margin: '0 auto'}}
                      />
                      {/* Arrows overlayed on image */}
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                        <CarouselPrevious />
                      </div>
                      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                        <CarouselNext />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Remove default arrows placement */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
