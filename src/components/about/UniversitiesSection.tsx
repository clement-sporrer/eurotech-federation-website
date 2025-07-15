import React from 'react';
import PartnerGrid from '../PartnerGrid';
import { universities } from '@/data/partnersData';
import AnimatedSection from '../AnimatedSection';

const UniversitiesSection = () => {
  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container-section">
        <PartnerGrid 
          title="Universities represented" 
          partners={universities} 
          buttonLink="/partners"
          showTitle={true}
        />
      </div>
    </AnimatedSection>
  );
};

export default UniversitiesSection;
