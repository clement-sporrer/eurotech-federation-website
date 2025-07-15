'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const LinkedInFeed = () => {
  // Simplified version without widget due to view limits
  return (
    <AnimatedSection className="">
      <div className="container-section">
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-eurotech-blue mb-4">Follow us on LinkedIn</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest news and insights directly on LinkedIn.
          </p>
          <Link 
            href="https://www.linkedin.com/company/eurotech-federation/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-eurotech-blue text-eurotech-gray px-6 py-3 rounded-lg hover:bg-eurotech-accent transition-colors"
          >
            Visit our LinkedIn page
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LinkedInFeed;
