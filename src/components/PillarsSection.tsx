
import React from 'react';
import { Network, Calendar, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PillarsSection = () => {
  const pillars = [
    {
      title: "Network",
      description: "Building a collaborative ecosystem of students, universities, and corporate partners across Europe.",
      icon: <Network className="h-12 w-12 text-eurotech-blue" />,
      link: "/about"
    },
    {
      title: "Events",
      description: "Organizing high-impact conferences, hackathons, and networking opportunities throughout Europe.",
      icon: <Calendar className="h-12 w-12 text-eurotech-blue" />,
      link: "/events"
    },
    {
      title: "Startup Acceleration",
      description: "Supporting the next generation of European tech entrepreneurs with resources and mentorship.",
      icon: <Lightbulb className="h-12 w-12 text-eurotech-blue" />,
      link: "/join-us"
    }
  ];

  return (
    <section className="container-section">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Pillars</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          EuroTech Federation stands on three foundational pillars that guide our mission to position Europe as a global tech leader.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="mb-4">{pillar.icon}</div>
              <CardTitle className="text-2xl font-heading text-eurotech-blue">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">{pillar.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <a 
                href={pillar.link} 
                className="text-eurotech-blue font-medium flex items-center hover:underline"
              >
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
