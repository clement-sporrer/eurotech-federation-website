import React, { useEffect } from 'react';

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
    <section className="bg-eurotech-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and innovations from the EuroTech community through our LinkedIn feed.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <div 
            className="elfsight-app-6b872f49-7315-4ea1-9684-339385210326" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed; 