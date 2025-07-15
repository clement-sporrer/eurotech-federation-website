import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import PartnerGrid from '@/components/PartnerGrid';
import { universities, companies } from '@/data/partnersData';

const PartnersShowcase = () => {
  return (
    <AnimatedSection className="bg-eurotech-gray py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title text-center mb-12 text-eurotech-blue">Our Current Partners</h2>
        
        {/* University Partners */}
        <PartnerGrid 
          title="Universities Represented" 
          partners={universities} 
          buttonLink="/partners"
        />
        
        {/* Corporate Partners */}
        <PartnerGrid 
          title="Corporate Partners" 
          partners={companies} 
          buttonLink="/partners"
        />
      </div>
    </AnimatedSection>
  );
};

export default PartnersShowcase;
