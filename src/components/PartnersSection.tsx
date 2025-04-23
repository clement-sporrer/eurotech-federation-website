
import React, { useRef } from 'react';
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

  const universities = [
    { name: "Imperial College London", logo: "/lovable-uploads/imperial-college-london5190.jpg" },
    { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
    { name: "EPFL", logo: "/lovable-uploads/logo-epfl-1024x576.png" },
    { name: "Dauphine-PSL", logo: "/lovable-uploads/000104777.jpg" },
    { name: "UCL", logo: "/lovable-uploads/UCL_Institute_of_Education_logo.png" },
    { name: "CentraleSupélec", logo: "/lovable-uploads/Logo_CentraleSupélec.png" },
    { name: "ESSEC Business School", logo: "/lovable-uploads/Logo-essec.jpg" },
    { name: "ESILV Engineering School", logo: "/lovable-uploads/Logo_esilv_png_blanc.png" },
  ];
  
  const companies = [
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" },
    { name: "Kima Ventures", logo: "/lovable-uploads/1_GJACgbkjAaphmVP8uxGEAQ.png" },
    { name: "Entrepreneurs First", logo: "/lovable-uploads/entrepreneurFirst.jpeg" },
    { name: "Project Europe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png" },
  ];
  // Configure autoplay plugin with improved settings
  const autoplayOptionsUniversities = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const autoplayOptionsCompanies = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="bg-eurotech-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Corporate Partners Carousel */}
        <div className="mb-16">
            <div className='flex justify-between items-center mb-8'>
              <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue text-begin">Corporate Partners</h3>
              <Link to="/partners">
                <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
                  Become a Partner
                </Button>
              </Link>
            </div>
            <Carousel 
              className="w-full" 
              opts={{ loop: true, align: "start" }} 
              plugins={[autoplayOptionsCompanies.current]}
              onMouseEnter={() => autoplayOptionsCompanies.current.stop()}
              onMouseLeave={() => autoplayOptionsCompanies.current.play()}
            >
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
              <CarouselPrevious className="left-0 hidden sm:flex" />
              <CarouselNext className="right-0 hidden sm:flex" />
            </Carousel>
        </div>

        {/* University Partners Carousel */}
        <div className="mb-16">
          <div className='flex justify-between items-center mb-8'>
            <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue text-begin">Universities Represented</h3>
            <Link to="/university-associations">
              <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
                Become a University Partner
              </Button>
            </Link>
          </div>
            <Carousel 
              className="w-full" 
              opts={{ loop: true, align: "start" }} 
              plugins={[autoplayOptionsUniversities.current]}
              onMouseEnter={() => autoplayOptionsUniversities.current.stop()}
              onMouseLeave={() => autoplayOptionsUniversities.current.play()}
            >
              <CarouselContent>
                {universities.map((university, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <Link to="/university-associations" className="block h-full">
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
              <CarouselPrevious className="left-0 hidden sm:flex" />
              <CarouselNext className="right-0 hidden sm:flex" />
            </Carousel>
        </div>


        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
