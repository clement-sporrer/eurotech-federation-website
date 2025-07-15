import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <>
      {showTitle && (
        <div className='mb-8'>
          <h3 className="section-title text-eurotech-blue text-center md:text-left">{title}</h3>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {partners.map((partner, index) => (
          <Link key={index} href={buttonLink} className="block">
            <div className="group flex justify-center items-center p-6 h-48 rounded-xl transition-all duration-300">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={200}
                height={200}
                className="h-32 md:h-36 object-contain group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PartnerGrid;
