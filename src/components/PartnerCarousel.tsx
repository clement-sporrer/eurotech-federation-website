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

export interface Partner {
  name: string;
  logo: string;
}

export interface PartnerCarouselProps {
  title: string;
  partners: Partner[];
  buttonText: string;
  buttonLink: string;
  itemsPerView?: string;
}

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({
  title,
  partners,
  buttonText,
  buttonLink,
  itemsPerView = "md:basis-1/3 lg:basis-1/4"
}) => {
  return (
    <div className="mb-16">
      <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0'>
        <h3 className="section-title text-eurotech-blue text-begin">{title}</h3>
        <Link to={buttonLink}>
          <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
            {buttonText}
          </Button>
        </Link>
      </div>
      <Carousel 
        className="w-full" 
        opts={{ loop: true, align: "start", dragFree: true }}
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem key={index} className={itemsPerView}>
              <Link to={buttonLink} className="block h-full">
                <div className="group flex justify-center items-center p-6 h-full rounded-xl transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
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
  );
};

export default PartnerCarousel; 