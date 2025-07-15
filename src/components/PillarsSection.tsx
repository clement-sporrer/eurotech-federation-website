'use client';

import React from 'react';
import { Network, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

const PillarsSection = () => {
  const pillars = [
    {
      title: "Open Collaboration",
      description: "Anyone can be a member — to connect, contribute, and take part across Europe. Fellows, selected for their talent and initiative, help shape direction, uphold quality, and access unique opportunities.",
      icon: <Network className="h-12 w-12 text-white" />
    },
    {
      title: "Decentralized by Design", 
      description: "No legal entity. No HQ. No hierarchy. EuroTech is a peer-to-peer community where everything is locally led, voluntarily coordinated, and globally connected — powered by shared ambition, not centralized control.",
      icon: <Calendar className="h-12 w-12 text-white" />
    }
  ];

  return (
    <AnimatedSection className="">
      <div className="container-section">
        <div className="text-center mb-16 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <h2 className="section-title text-eurotech-blue">Our Pillars</h2>
        <p className="text-xl text-left text-gray-600 max-w-3xl">
          
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <Card key={index} className="card-hover bg-eurotech-blue h-full hover:shadow-lg transition-all duration-300 hover:scale-102">
            <CardContent className="pt-6">
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white">{pillar.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </AnimatedSection>
  );
};

export default PillarsSection;
