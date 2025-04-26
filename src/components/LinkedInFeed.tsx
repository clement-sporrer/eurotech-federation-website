import React, { useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const LinkedInFeed = () => {
  useEffect(() => {
    // Load the Elfsight script if it hasn't been loaded yet
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <AnimatedSection className="bg-eurotech-gray py-16 md:pb-48">
      <div className="container-section">
        <div className="text-center mb-16 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <h2 className="section-title">Connect With Us</h2>
          <p className="text-xl text-left text-gray-600 max-w-3xl">
            Stay updated with the latest news, events, and innovations from the EuroTech community through our LinkedIn feed.
          </p>
        </div>
          <div 
            className="elfsight-app-6b872f49-7315-4ea1-9684-339385210326" 
            data-elfsight-app-lazy
          ></div>
      </div>
    </AnimatedSection>
  );
};

export default LinkedInFeed; 