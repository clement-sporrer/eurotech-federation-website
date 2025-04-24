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
    { name: "Imperial College London", logo: "/Imperial_logo.png" },
    { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
    { name: "EPFL", logo: "/epfl_logo.png" },
    { name: "ESSEC Business School", logo: "/ESSEC_Logo.svg" },
    { name: "Bocconi University", logo: "/Bocconi_University_Logo.png" },
  ];
  
  const companies = [
    { name: "IBM", logo: "/ibm_logo.png" },
    { name: "Kima Ventures", logo: "/kima_ventures.png" },
    { name: "Raise Summit", logo: "/raise_summit.svg" },
    { name: "More Coming Soon", logo: "/more.png" },
  ];

  // Using plain options without autoplay plugins to avoid type errors
  // We'll rely on the loop option for continuous movement instead

  return (
    <section className="bg-eurotech-gray py-16 md:pb-48 md:pt-64">
      <div className="container-section">
        {/* Corporate Partners Carousel */}
        <div className="mb-16">
            <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0'>
              <h3 className="section-title text-eurotech-blue text-begin">Corporate Partners</h3>
              <Link to="/partners">
                <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
                  Become a Partner
                </Button>
              </Link>
            </div>
            <Carousel 
              className="w-full" 
              opts={{ loop: true, align: "start", dragFree: true }}
            >
              <CarouselContent>
                {companies.map((company, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <div className="group flex justify-center items-center p-6 h-full rounded-xl transition-all duration-300">
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
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
          <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0'>
            <h3 className="section-title text-eurotech-blue text-begin">Universities Represented</h3>
            <Link to="/university-associations">
              <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
                Become a University Partner
              </Button>
            </Link>
          </div>
            <Carousel 
              className="w-full" 
              opts={{ loop: true, align: "start", dragFree: true }}
            >
              <CarouselContent>
                {universities.map((university, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <Link to="/university-associations" className="block h-full">
                      <div className="group flex justify-center items-center p-6 h-full rounded-xl transition-all duration-300">
                        <img 
                          src={university.logo} 
                          alt={university.name} 
                          className="h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
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
