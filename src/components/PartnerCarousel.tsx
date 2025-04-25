import React, { useEffect, useState } from 'react';
import { ActionButton } from '@/components/ui/action-button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface Partner {
  name: string;
  logo: string;
}

export interface PartnerCarouselProps {
  title: string;
  partners: Partner[];
  buttonText?: string;
  buttonLink?: string;
  itemsPerView?: string;
  showButton?: boolean;
  autoplayDelay?: number;
  autoplayEnabled?: boolean;
}

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({
  title,
  partners,
  buttonText,
  buttonLink,
  itemsPerView = "md:basis-1/3 lg:basis-1/4",
  showButton = true,
  autoplayDelay = 4000,
  autoplayEnabled = true
}) => {
  const [api, setApi] = useState<any>(null);

  return (
    <div className="mb-16">
      <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0'>
        <h3 className="section-title text-eurotech-blue text-begin">{title}</h3>
        {showButton && buttonText && buttonLink && (
          <Link to={buttonLink}>
            <ActionButton variant="primary">
              {buttonText}
            </ActionButton>
          </Link>
        )}
      </div>
      <Carousel 
        className="w-full" 
        opts={{ loop: true, align: "start", dragFree: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem key={index} className={itemsPerView}>
              <Link to={buttonLink || '#'} className="block h-full">
                <div className="group flex justify-center items-center p-6 h-full rounded-xl transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 md:h-16 object-contain group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 hidden sm:flex" />
        <CarouselNext className="right-0 hidden sm:flex" />
      </Carousel>
      
      {/* Set up autoplay using useEffect */}
      {autoplayEnabled && (
        <UseAutoplay 
          api={api} 
          delay={autoplayDelay} 
          enabled={autoplayEnabled} 
        />
      )}
    </div>
  );
};

// Custom hook to handle autoplay functionality
const UseAutoplay = ({ api, delay, enabled }: { api: any, delay: number, enabled: boolean }) => {
  useEffect(() => {
    if (!api || !enabled) return;
    
    // Set up interval for autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, delay);
    
    // Clear interval on cleanup
    return () => clearInterval(interval);
  }, [api, delay, enabled]);
  
  return null;
};

export default PartnerCarousel; 