import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import EventsSection from '@/components/EventsSection';
import PartnersSection from '@/components/PartnersSection';
import NewsletterSection from '@/components/NewsletterSection';
import LinkedInFeed from '@/components/LinkedInFeed';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <PillarsSection />
        <LinkedInFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
