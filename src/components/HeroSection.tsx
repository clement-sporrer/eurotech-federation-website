'use client';

import React, { useState, useEffect } from 'react';
import { ActionButton } from '@/components/ui/action-button';
import Link from 'next/link';
import Image from 'next/image';
import { universities } from '@/data/partnersData';

const HeroSection = () => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  // Écouter l'état du menu de la navbar
  useEffect(() => {
    const handleNavbarMenuToggle = (event: CustomEvent<boolean>) => {
      setIsNavbarMenuOpen(event.detail);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('navbarMenuToggle', handleNavbarMenuToggle as EventListener);
      return () => window.removeEventListener('navbarMenuToggle', handleNavbarMenuToggle as EventListener);
    }
  }, []);
  // Only use university logos
  const universityLogos = universities.map(partner => ({
    src: partner.logo,
    alt: partner.name
  }));

  return (
    <section className="relative md:h-screen md:min-h-[600px] md:max-h-[1000px] bg-eurotech-blue text-eurotech-gray overflow-hidden pt-16">
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center py-16 md:py-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full md:h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between md:h-full">
            <div className="lg:w-2/3 text-left lg:mr-8 flex flex-col justify-center md:h-full lg:h-auto">
              <h1 className="text-3xl text-eurotech-gray md:text-5xl lg:text-8xl font-bold mb-6 leading-none animate-fade-in">
                Uniting Europe&apos;s Brightest<br />
                <span className="text-eurotech-accent">Tech Talents</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                EuroTech Federation connects students, institutions, and corporate partners to position Europe as a global leader in tech innovation.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-start animate-fade-in transition-opacity duration-300 ${isNavbarMenuOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`} style={{ animationDelay: '0.4s' }}>
                <Link href="/join-us">
                  <ActionButton variant="secondary" className="w-full sm:w-auto">
                    Join Network
                  </ActionButton>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 hidden md:flex justify-end items-center animate-fade-in h-full" style={{ animationDelay: '0.3s' }}>
              <div className="logo-scroll-wrapper relative w-full max-w-[400px] h-full overflow-hidden">
                <div className="logo-scroll-container">
                  {/* Top blur effect - commence plus tard pour laisser voir les logos */}
                  <div className="absolute top-0 left-0 right-0 h-10 z-10" style={{
                    background: 'linear-gradient(to bottom, #123192 0%, #123192 30%, rgba(18, 49, 146, 0.8) 70%, transparent 100%)'
                  }}></div>
                  
                  <div className="logo-scroll-track">
                    {/* First set of logos */}
                    {universityLogos.map((logo, index) => (
                      <div 
                        key={`logo-1-${index}`} 
                        className={`opacity-80 logo-item p-1.5 rounded-lg w-64 mx-auto`}
                      >
                        <Image 
                          src={logo.src} 
                          alt={logo.alt} 
                          width={256}
                          height={128}
                          className="w-full h-32 object-contain" 
                          style={{ 
                            filter: `brightness(0) saturate(100%) invert(100%) sepia(9%) saturate(335%) hue-rotate(40deg) brightness(115%) contrast(81%)`,
                            /* Cette combinaison de filtres reproduit la couleur exacte #F5F3ED */
                          }}
                        />
                      </div>
                    ))}
                    
                    {/* Duplicate set of logos for seamless looping */}
                    {universityLogos.map((logo, index) => (
                      <div 
                        key={`logo-2-${index}`} 
                        className={`opacity-80 logo-item p-1.5 rounded-lg w-64 mx-auto`}
                      >
                        <Image 
                          src={logo.src} 
                          alt={logo.alt} 
                          width={256}
                          height={128}
                          className="w-full h-32 object-contain" 
                          style={{ 
                            filter: `brightness(0) saturate(100%) invert(100%) sepia(9%) saturate(335%) hue-rotate(40deg) brightness(115%) contrast(81%)`,
                          }}
                        />
                      </div>
                    ))}
                    
                    {/* Third set for extra smooth looping */}
                    {universityLogos.slice(0, 2).map((logo, index) => (
                      <div 
                        key={`logo-3-${index}`} 
                        className={`opacity-80 logo-item p-1.5 rounded-lg w-64 mx-auto`}
                      >
                        <Image 
                          src={logo.src} 
                          alt={logo.alt} 
                          width={256}
                          height={128}
                          className="w-full h-32 object-contain" 
                          style={{ 
                            filter: `brightness(0) saturate(100%) invert(100%) sepia(9%) saturate(335%) hue-rotate(40deg) brightness(115%) contrast(81%)`,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Bottom blur effect - s'arrête plus tôt pour laisser voir les logos */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 z-10" style={{
                    background: 'linear-gradient(to top, #123192 0%, #123192 30%, rgba(18, 49, 146, 0.8) 70%, transparent 100%)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
