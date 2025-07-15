import React from 'react';
import AnimatedSection from '../AnimatedSection';

const MissionVision = () => {
  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-eurotech-blue mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              EuroTech Federation is a community — not an organization, not an association, and not a company.
            </p>
            <p className="text-lg text-gray-700">
              We exist to connect ambitious people under 30 across Europe — to meet, collaborate, and build the future of tech together.
              We empower members and fellows to launch ideas, support one another, and grow without borders, hierarchy, or bureaucracy.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-eurotech-blue mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-4">
              A bold, borderless European tech scene powered by people — not institutions.
              We believe the next generation of builders, researchers, and creators will shape Europe&apos;s place in the world by working together across cities, schools, and cultures.
            </p>
            <p className="text-lg text-gray-700">
              No central structure. Just trust, talent, and action.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MissionVision;
