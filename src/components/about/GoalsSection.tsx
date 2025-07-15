import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Flag, Network } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const GoalsSection = () => {
  const goals = [
    {
      title: "Connect Europe&apos;s Emerging Talent",
      description: "Bring together builders, hackers, researchers, and creators under 30 from across Europe to share ideas and form meaningful connections.",
      icon: <Network className="h-12 w-12 text-white" />,
    },
    {
      title: "Support Locally-Led Initiatives",
      description: "Encourage and amplify events and projects initiated by community members — from hackathons and roundtables to informal meetups.",
      icon: <Flag className="h-12 w-12 text-white" />,
    },
    {
      title: "Highlight and Empower Fellows",
      description: "Recognize exceptional individuals through a selective fellowship that enables access to curated opportunities and shapes the future of the community.",
      icon: <Briefcase className="h-12 w-12 text-white" />,
    },
  ];

  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center md:text-left">Our Goals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="card-hover bg-eurotech-blue h-full hover:shadow-lg transition-all duration-300 hover:scale-102">
              <CardContent className="pt-6">
                <div className="mb-4">{goal.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
                <p className="text-white">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GoalsSection;
