import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Users, Globe, Presentation, Lightbulb, Building } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Access to Top Talent",
      description: "Connect with the brightest minds from Europe&apos;s premier universities",
      icon: <Users className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-1",
      rows: "row-span-1",
    },
    {
      title: "Co-branding Opportunities",
      description: "Gain visibility at high-profile tech events across Europe",
      icon: <Building className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-1",
      rows: "row-span-1",
    },
    {
      title: "Speaking Engagements",
      description: "Share your expertise through workshops and presentations",
      icon: <Presentation className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-2 md:col-span-1",
      rows: "row-span-1",
    },
    {
      title: "Recruitment Network",
      description: "Connect with future tech leaders and potential team members",
      icon: <Users className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-2",
      rows: "row-span-1",
    },
    {
      title: "Innovation Pipeline",
      description: "Early access to innovative student projects and emerging startups",
      icon: <Lightbulb className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-1",
      rows: "row-span-1 md:row-span-2",
    },
    {
      title: "Pan-European Reach",
      description: "Gain visibility across the European tech education landscape",
      icon: <Globe className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-2 md:col-span-2",
      rows: "row-span-1",
    },
  ];

  return (
    <AnimatedSection className="pt-24 container-section">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between mb-16 gap-6">
        <h2 className="section-title text-eurotech-blue">Why Partner With Us?</h2>
        <p className="text-xl text-gray-600 max-w-xl">
          Partnering with EuroTech Federation offers unique advantages for organizations looking to engage with Europe&apos;s tech talent ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className={`${benefit.cols} ${benefit.rows} ${benefit.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group`}
          >
            <div className="flex flex-col h-full justify-between z-10 relative">
              <div>
                <div className="mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className={`font-bold text-xl mb-2 ${benefit.textColor}`}>
                  {benefit.title}
                </h3>
                <p className={`${benefit.color === 'bg-white' ? 'text-gray-600' : 'text-white/80'}`}>
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
