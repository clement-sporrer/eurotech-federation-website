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

  // Partners logos - updated to only include the 4 requested corporate partners
  const universities = [
    { name: "Imperial College London", logo: "/lovable-uploads/imperial-college-london5190.jpg" },
    { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
    { name: "EPFL", logo: "/lovable-uploads/logo-epfl-1024x576.png" },
    { name: "Dauphine-PSL", logo: "/lovable-uploads/000104777.jpg" },
    { name: "UCL", logo: "/lovable-uploads/UCL_Institute_of_Education_logo.png" },
    { name: "CentraleSupélec", logo: "/lovable-uploads/Logo_CentraleSupélec.png" },
    { name: "ESSEC Business School", logo: "/lovable-uploads/Logo-essec.jpg" },
    { name: "ESILV Engineering School", logo: "/lovable-uploads/Logo_esilv_png_blanc.png" },
  ];
  
  const companies = [
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" },
    { name: "Kima Ventures", logo: "/lovable-uploads/1_GJACgbkjAaphmVP8uxGEAQ.png" },
    { name: "Entrepreneurs First", logo: "/lovable-uploads/entrepreneurFirst.jpeg" },
    { name: "Project Europe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png" },
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
              <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">
                Become a Partner
              </Button>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Our Current Partners</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              We're proud to collaborate with leading academic institutions and companies.
            </p>

            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Universities Represented</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {universities.map((university, index) => (
                  <Link key={index} to="/university-associations" className="block">
                    <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                      <img 
                        src={university.logo} 
                        alt={university.name} 
                        className="h-12 md:h-16 object-contain"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Corporate Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companies.map((company, index) => (
                  <div key={index} className="flex justify-center items-center bg-white p-6 rounded-lg shadow-sm">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="h-10 md:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Partner Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="text-4xl text-eurotech-blue mb-4">"</div>
                    <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-eurotech-blue">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
     </main>
      <Footer />
    </div>
  );
};

export default Partners;
