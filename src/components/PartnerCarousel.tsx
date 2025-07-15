import React, { useEffect, useState } from 'react';
import { ActionButton } from '@/components/ui/action-button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="mb-16">
      <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0'>
        <h3 className="section-title text-eurotech-blue text-begin">{title}</h3>
        {showButton && buttonText && buttonLink && (
          <Link href={buttonLink}>
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
              <Link href={buttonLink || '#'} className="block h-full">
                <div className="group flex justify-center items-center p-8 h-full rounded-xl transition-all duration-300">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={128}
                    height={96}
                    className="h-20 md:h-24 lg:h-28 object-contain group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 hidden sm:flex bg-eurotech-gray/10 border-eurotech-gray/20 text-eurotech-blue hover:bg-eurotech-gray/20 hover:text-eurotech-blue" />
        <CarouselNext className="right-0 hidden sm:flex bg-eurotech-gray/10 border-eurotech-gray/20 text-eurotech-blue hover:bg-eurotech-gray/20 hover:text-eurotech-blue" />
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
const UseAutoplay = ({ api, delay, enabled }: { api: CarouselApi, delay: number, enabled: boolean }) => {
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