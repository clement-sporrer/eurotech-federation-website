'use client';

import React from 'react';
import { ActionButton } from '@/components/ui/action-button';
import Link from 'next/link';
import MissionVision from '../../components/about/MissionVision';
import GoalsSection from '../../components/about/GoalsSection';
import UniversitiesSection from '../../components/about/UniversitiesSection';
import TeamSection from '../../components/about/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-16">
          <div className="container-section py-4">
            <div className="max-w-3xl min-h-96 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray">About EuroTech Federation</h1>
              <p className="text-xl mb-6">
                The next generation of European tech is already here. EuroTech Federation is a community of people under 30 — driven by action, united by vision, and building what Europe needs next.
              </p>
              <Link href="/join-us">
                <ActionButton variant="secondary">
                  Join Our Mission
                </ActionButton>
              </Link>
            </div>
          </div>
        </section>

        <div className='bg-eurotech-gray'>
          <MissionVision />
          <GoalsSection />
          <UniversitiesSection />
          <TeamSection />
        </div>
      </main>
    </div>
  );
};

export default About;
