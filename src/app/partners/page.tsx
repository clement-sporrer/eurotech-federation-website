import React from 'react';
import PartnersHero from '@/components/partners/PartnersHero';
import BenefitsSection from '@/components/partners/BenefitsSection';
import PartnersShowcase from '@/components/partners/PartnersShowcase';

const PartnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <PartnersHero />

        <div className='bg-eurotech-gray'>
          <BenefitsSection />
          <PartnersShowcase />
        </div>
      </main>
    </div>
  );
};

export default PartnersPage;
