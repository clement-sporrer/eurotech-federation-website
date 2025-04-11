
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
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-eurotech-blue text-lg px-6 py-6 w-full sm:w-auto">
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
                  <span className="text-5xl font-bold">8+</span>
                  <span className="text-lg leading-tight">World Class European Universities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats KPIs */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/15 transition-colors">
            <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
            <div className="text-lg">World Class European Universities</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/15 transition-colors">
            <div className="text-4xl md:text-5xl font-bold mb-2">35k+</div>
            <div className="text-lg">People Network</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/15 transition-colors">
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-lg">Events Per Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
