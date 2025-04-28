import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';
import { Link } from 'react-router-dom';
import { universities } from '@/data/partnersData';

const HeroSection = () => {
  // Only use university logos
  const universityLogos = universities.map(partner => ({
    src: partner.logo,
    alt: partner.name
  }));

  return (
    <section className="relative  md:h-screen bg-eurotech-blue text-white overflow-hidden pt-16">
      {/* Hero Content */}
      <div className="container-section relative z-10 h-full flex items-center py-24 md:py-0">
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-center lg:justify-between gap-12">
          <div className="lg:w-2/3 text-left lg:text-left">
            <h1 className="text-3xl text-eurotech-gray md:text-5xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
              Uniting Europe's Brightest<br />
              <span className="text-eurotech-accent">Tech Talents</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              EuroTech Federation connects students, institutions, and corporate partners to position Europe as a global leader in tech innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/join-us">
                <ActionButton variant="secondary" className="w-full sm:w-auto">
                  Join Network
                </ActionButton>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/3 hidden md:flex justify-center lg:justify-end animate-fade-in h-full" style={{ animationDelay: '0.3s' }}>
            <div className="logo-scroll-wrapper relative w-full max-w-[400px] overflow-hidden">
              <div className="logo-scroll-container w-full h-full">
                {/* Top blur effect */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-eurotech-blue via-eurotech-blue to-transparent z-10"></div>
                
                <div className="logo-scroll-track">
                  {/* First set of logos */}
                  {universityLogos.map((logo, index) => (
                    <div 
                      key={`logo-1-${index}`} 
                      className={`opacity-80 logo-item p-1.5 rounded-lg w-64 mx-auto`}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
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
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
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
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="w-full h-32 object-contain" 
                        style={{ 
                          filter: `brightness(0) saturate(100%) invert(100%) sepia(9%) saturate(335%) hue-rotate(40deg) brightness(115%) contrast(81%)`,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom blur effect */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-eurotech-blue via-eurotech-blue to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
