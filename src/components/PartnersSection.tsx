'use client';

import React from 'react';
import PartnerCarousel from '@/components/PartnerCarousel';
import { universities, companies } from '@/data/partnersData';
import AnimatedSection from './AnimatedSection';

const PartnersSection = () => {
  // Duplicate the companies array by concatenating it with itself
  const duplicatedCompanies = [...companies, ...companies];
  
  return (
    <AnimatedSection className="">
      <div className="container-section">
        {/* Corporate Partners Carousel */}
        <PartnerCarousel 
          title="Some of our Corporate Partners"
          partners={duplicatedCompanies}
          buttonText="Become a Partner"
          buttonLink="/partners"
          showButton={false}
        />

        {/* University Partners Carousel */}
        <PartnerCarousel 
          title="Some of our Universities Represented"
          partners={universities}
          buttonText="Become a University Partner"
          buttonLink="/partners"
          showButton={false}
        />
      </div>
    </AnimatedSection>
  );
};

export default PartnersSection;
