
import React from 'react';
import { Button } from '@/components/ui/button';

const PartnersSection = () => {
  // Sample partner logos (these would be replaced with actual partner logos)
  const universities = [
    { name: "Imperial College London", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Imperial_College_London_Logo.svg/1200px-Imperial_College_London_Logo.svg.png" },
    { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
    { name: "EPFL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/EPFL_logo.svg/2560px-EPFL_logo.svg.png" },
    { name: "Dauphine-PSL", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Logo_Universit%C3%A9_Paris-Dauphine.svg/1200px-Logo_Universit%C3%A9_Paris-Dauphine.svg.png" },
  ];
  
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png" },
    { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png" },
  ];

  return (
    <section className="bg-eurotech-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EuroTech Federation collaborates with top universities and industry leaders to create opportunities for Europe's tech talent.
          </p>
        </div>

        {/* University Partners */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Academic Institutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="flex justify-center items-center bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src={university.logo} 
                  alt={university.name} 
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Partners */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Corporate Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center items-center bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-eurotech-blue hover:bg-eurotech-dark text-white text-lg px-6 py-6">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
