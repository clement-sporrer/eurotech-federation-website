
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-eurotech-blue text-white overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      {/* Hero Content */}
      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Uniting Europe's Brightest<br />
              <span className="text-eurotech-accent">Tech Talents</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              EuroTech Federation connects students, institutions, and corporate partners to position Europe as a global leader in tech innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/join-us">
                <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white text-lg px-6 py-6 w-full sm:w-auto">
                  Join Our Network
                </Button>
              </Link>
              <Link to="/events">
                <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white text-lg px-6 py-6 w-full sm:w-auto">
                  Discover Events <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-blue opacity-20 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Tech conference attendees collaborating"
                className="rounded-lg shadow-xl w-full max-w-lg object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-eurotech-accent p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-lg leading-tight">Make European Tech Great Again</span>
                  <span className="text-5xl font-bold"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors We Operate In */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            "Descriptive and Generative AI",
            "Cyber",
            "Robotics",
            "Quantum Computing",
            "Web3",
            "Finance",
            "Defense",
            "Energy",
          ].map((sector, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur text-white text-sm md:text-base font-medium px-5 py-3 rounded-lg shadow-sm hover:bg-white/15 transition-colors"
            >
              {sector}
            </div>
          ))}
        </div>


        {/* University Logos Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-10">Partner Universities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {[
              { name: "Imperial College London", logo: "/lovable-uploads/imperial-college-london5190.jpg" },
              { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
              { name: "EPFL", logo: "/lovable-uploads/logo-epfl-1024x576.png" },
              { name: "Dauphine-PSL", logo: "/lovable-uploads/000104777.jpg" },
              { name: "UCL", logo: "/lovable-uploads/UCL_Institute_of_Education_logo.png" },
              { name: "CentraleSupélec", logo: "/lovable-uploads/Logo_CentraleSupélec.png" },
              { name: "ESSEC Business School", logo: "/lovable-uploads/Logo-essec.jpg" },
              { name: "ESILV Engineering School", logo: "/lovable-uploads/Logo_esilv_png_blanc.png" },
            ].map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-all hover:shadow-lg"
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="h-12 md:h-16 object-contain mb-2"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
