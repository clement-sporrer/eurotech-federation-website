import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, ExternalLink, Users, Globe, Presentation, Lightbulb, Building, Award } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import PartnerGrid from '@/components/PartnerGrid';
import { universities, companies } from '@/data/partnersData';

const Partners = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
  };

  const benefits = [
    {
      title: "Access to Top Talent",
      description: "Connect with the brightest minds from Europe's premier universities",
      icon: <Users className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-1",
      rows: "row-span-1",
    },
    {
      title: "Co-branding Opportunities",
      description: "Gain visibility at high-profile tech events across Europe",
      icon: <Building className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-1",
      rows: "row-span-1",
    },
    {
      title: "Speaking Engagements",
      description: "Share your expertise through workshops and presentations",
      icon: <Presentation className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-2 md:col-span-1",
      rows: "row-span-1",
    },
    {
      title: "Recruitment Network",
      description: "Connect with future tech leaders and potential team members",
      icon: <Users className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-2",
      rows: "row-span-1",
    },
    {
      title: "Innovation Pipeline",
      description: "Early access to innovative student projects and emerging startups",
      icon: <Lightbulb className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-1 md:col-span-1",
      rows: "row-span-1 md:row-span-2",
    },
    {
      title: "Pan-European Reach",
      description: "Gain visibility across the European tech education landscape",
      icon: <Globe className="h-10 w-10" />,
      color: "bg-eurotech-blue",
      textColor: "text-white",
      cols: "col-span-2 md:col-span-2",
      rows: "row-span-1",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Partnering with EuroTech Federation has given us access to an incredible pool of young tech talent from across Europe. The quality of students and their innovative thinking has been impressive.",
      author: "Sophie Laurent",
      title: "Head of University Relations, Google Europe"
    },
    {
      quote: "EuroTech events provide the perfect platform to connect with the next generation of tech leaders. We've found valuable team members and fresh perspectives through this partnership.",
      author: "Martin Hoffman",
      title: "CTO, SAP Innovation Lab"
    },
    {
      quote: "The cross-border network that EuroTech has built is unlike anything else in the European tech education space. It's been invaluable for our recruitment and innovation initiatives.",
      author: "Elena Costa",
      title: "VP of Talent Acquisition, Siemens Digital"
    }
  ];

  // EuroTech Federation LinkedIn URL
  const eurotechLinkedIn = "https://www.linkedin.com/company/eurotech-federation";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-40 pb-24">
          <div className="container-section">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
              <p className="text-xl mb-6">
                Join forces with Europe's largest student-led tech network and connect with the brightest minds across the continent.
              </p>
              <Link to="/join-us">
                <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 container-section">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between mb-16 gap-6">
            <h2 className="section-title">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-xl">
              Partnering with EuroTech Federation offers unique advantages for organizations looking to engage with Europe's tech talent ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`${benefit.cols} ${benefit.rows} ${benefit.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group`}
              >
                <div className="flex flex-col h-full justify-between z-10 relative">
                  <div>
                    <h3 className={`font-bold text-xl mb-2 ${benefit.textColor}`}>{benefit.title}</h3>
                    <p className={`${benefit.color === 'bg-white' ? 'text-gray-600' : 'text-white/80'}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Showcase */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="container-section">
            <h2 className="section-title text-center mb-12">Our Current Partners</h2>
            
            {/* University Partners */}
            <PartnerGrid 
              title="Universities Represented" 
              partners={universities} 
              buttonLink="/university-associations"
            />
            
            {/* Corporate Partners */}
            <PartnerGrid 
              title="Corporate Partners" 
              partners={companies} 
              buttonLink="/contact"
            />
          </div>
        </section>

        {/* Join Network CTA Section */}
        <section className="py-24 container-section text-center">
          <h2 className="section-title mb-8">Join Our Growing Network</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Is your company or university association looking to connect with Europe's leading tech talent network?
            Partner with us today and gain access to exclusive recruitment opportunities, collaborative events, and innovation resources.
          </p>
          <Link to="/join-us">
            <Button className="bg-eurotech-blue text-white hover:bg-eurotech-accent px-8 py-6 text-lg font-semibold">
              Join Our Network
            </Button>
          </Link>
        </section>
     </main>
      <Footer />
    </div>
  );
};

export default Partners;
