
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const PartnersSection = () => {
  // Updated university partners with CS = CentraleSupélec
  const universities = [
    { name: "Imperial College London", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Imperial_College_London_Logo.svg/1200px-Imperial_College_London_Logo.svg.png" },
    { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
    { name: "EPFL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/EPFL_logo.svg/2560px-EPFL_logo.svg.png" },
    { name: "Dauphine-PSL", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Logo_Universit%C3%A9_Paris-Dauphine.svg/1200px-Logo_Universit%C3%A9_Paris-Dauphine.svg.png" },
    { name: "UCL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/UCL_logo.svg/2560px-UCL_logo.svg.png" },
    { name: "CentraleSupélec", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Logo_CentraleSup%C3%A9lec.svg/1200px-Logo_CentraleSup%C3%A9lec.svg.png" },
    { name: "ESSEC Business School", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/ESSEC_Business_School_logo.svg/2560px-ESSEC_Business_School_logo.svg.png" },
  ];
  
  // Updated corporate partners
  const companies = [
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" },
    { name: "Kima Ventures", logo: "https://website-v3-assets.s3.amazonaws.com/assets/5ef40e465f0a2845c149aa91/5ef582a25f0a281b40507c0d/kima.png" },
    { name: "Entrepreneurs First", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Entrepreneur_First_Logo.png" },
    { name: "Project Europe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png" },
  ];

  // Configure autoplay plugin for carousels
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  return (
    <section className="bg-eurotech-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EuroTech Federation collaborates with top universities and industry leaders to create opportunities for Europe's tech talent.
          </p>
        </div>

        {/* University Partners Carousel */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Universities Represented</h3>
          <div className="mx-auto max-w-6xl px-6">
            <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay(autoplayOptions)]}>
              <CarouselContent>
                {universities.map((university, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <Link to="/partners" className="block h-full">
                      <div className="flex justify-center items-center bg-white p-6 h-full rounded-lg shadow-sm hover:shadow-md transition-all">
                        <img 
                          src={university.logo} 
                          alt={university.name} 
                          className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" 
                        />
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>

        {/* Corporate Partners Carousel */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Corporate Partners</h3>
          <div className="mx-auto max-w-6xl px-6">
            <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay(autoplayOptions)]}>
              <CarouselContent>
                {companies.map((company, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <div className="flex justify-center items-center bg-white p-6 h-full rounded-lg shadow-sm hover:shadow-md transition-all">
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/partners">
            <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
