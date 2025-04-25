import React from 'react';
import { Link } from 'react-router-dom';

export interface Partner {
  name: string;
  logo: string;
}

export interface PartnerGridProps {
  title: string;
  partners: Partner[];
  buttonLink: string;
  showTitle?: boolean;
}

const PartnerGrid: React.FC<PartnerGridProps> = ({
  title,
  partners,
  buttonLink,
  showTitle = true,
}) => {
  return (
    <div className="mb-16">
      {showTitle && (
        <div className='mb-8'>
          <h3 className="section-title text-eurotech-blue">{title}</h3>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {partners.map((partner, index) => (
          <Link key={index} to={buttonLink} className="block">
            <div className="group flex justify-center items-center p-6 h-32 rounded-xl transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 object-contain group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartnerGrid; 