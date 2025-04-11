
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

const PastEvents = () => {
  // Improved page that shows past events with links instead of just redirecting
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-eurotech-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Past Events</h1>
              <p className="text-xl mb-6">
                Explore our previous events and hackathons across Europe.
              </p>
            </div>
          </div>
        </section>

        <section className="container-section py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <Link 
                to="/past-events/llm-to-agentic-ai" 
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-eurotech-blue mb-2">From LLM to Agentic AI Hackathon</h2>
                    <p className="text-gray-600 mb-4">April 4-6, 2024 • ESSEC Business School, Paris</p>
                    <p className="text-gray-700">36 hours of non-stop innovation to shape the future of AI.</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center text-eurotech-blue font-medium">
                      View Event Details <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PastEvents;
