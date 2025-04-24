import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Globe, Lightbulb, Rocket, Users2, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Incubator = () => {
  const features = [
    {
      title: "12-Week Intensive Program",
      description: "A focused curriculum designed to accelerate your startup from concept to market-ready in just three months.",
      icon: <Calendar className="h-12 w-12 text-eurotech-blue" />,
    },
    {
      title: "Hybrid Format",
      description: "Combine online learning and mentorship with in-person workshops and networking events for maximum flexibility.",
      icon: <Lightbulb className="h-12 w-12 text-eurotech-blue" />,
    },
    {
      title: "Pan-European Network",
      description: "Access resources and connections across multiple European tech hubs, expanding your startup's reach from day one.",
      icon: <Globe className="h-12 w-12 text-eurotech-blue" />,
    },
  ];

  const benefits = [
    {
      title: "Expert Mentorship",
      description: "Work with seasoned entrepreneurs and industry specialists who provide personalized guidance and feedback.",
      icon: <Users2 className="h-10 w-10 text-eurotech-blue" />,
    },
    {
      title: "Access to Funding",
      description: "Connect with our network of investors and venture capital firms looking for promising European startups.",
      icon: <Building2 className="h-10 w-10 text-eurotech-blue" />,
    },
    {
      title: "Technical Resources",
      description: "Leverage cloud credits, development tools, and technical support to build your product.",
      icon: <Rocket className="h-10 w-10 text-eurotech-blue" />,
    },
  ];

  const phases = [
    {
      number: "01",
      title: "Ideation & Validation",
      duration: "Weeks 1-3",
      description: "Refine your business concept and validate it through customer interviews and market research.",
    },
    {
      number: "02",
      title: "Product Development",
      duration: "Weeks 4-8",
      description: "Build your MVP with technical guidance and regular feedback sessions from industry experts.",
    },
    {
      number: "03",
      title: "Go-to-Market Strategy",
      duration: "Weeks 9-12",
      description: "Develop a comprehensive launch strategy and prepare for investor pitches and demo day.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-40 pb-24">
          <div className="container-section">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">EuroTech Incubator Program</h1>
              <p className="text-xl mb-6">
                Launch your tech startup with Europe's premier student-led incubator program, 
                connecting you with resources, mentors, and opportunities across the continent.
              </p>
              <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">
                Apply Now
              </Button>
              <div className="flex items-center mt-12 space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">12</span>
                  <span className="text-sm">Weeks</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">Hybrid</span>
                  <span className="text-sm">Format</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">Pan-European</span>
                  <span className="text-sm">Network</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="container-section py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700">
              The EuroTech Incubator is designed to support the next generation of European tech entrepreneurs. 
              Our 12-week program combines virtual learning with in-person events across major European tech hubs, 
              providing you with the perfect balance of convenience and hands-on experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-eurotech-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Structure */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="container-section">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Program Structure</h2>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {phases.map((phase, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-eurotech-blue flex items-center justify-center text-white font-bold text-xl">
                      {phase.number}
                    </div>
                  </div>
                  <div>
                    <div className="text-eurotech-accent font-medium mb-1">{phase.duration}</div>
                    <h3 className="text-2xl font-bold text-eurotech-blue mb-3">{phase.title}</h3>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container-section py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Program Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="bg-eurotech-gray rounded-full p-4 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-eurotech-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-eurotech-blue py-16">
          <div className="container-section text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Applications for our next cohort are now open. Join Europe's most promising tech entrepreneurs 
              and take your startup to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-eurotech-blue text-white hover:bg-eurotech-accent hover:text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Incubator; 