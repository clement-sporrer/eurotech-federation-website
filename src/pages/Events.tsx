import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Filter } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

// Event type definition
type EventType = {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  type: 'Conference' | 'Hackathon' | 'Keynote' | 'Side Event';
  description: string;
  link?: string;
};

const Events = () => {
  // Sample events data - updated to only have one upcoming event as requested
  const allEvents: EventType[] = [
    {
      id: 1,
      title: "RAISE Summit — Biggest Side Event (Opening Event)",
      date: "June 12, 2025",
      location: "Paris, France",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Conference",
      description: "Join us for the opening event of RAISE Summit, the biggest side event in Paris bringing together tech leaders, investors, and innovators from across Europe."
    }
  ];
  
  // Past events - only showing the one specific event as requested
  const pastEvents: EventType[] = [
    {
      id: 101,
      title: "From LLM to Agentic AI Hackathon",
      date: "April 4-6, 2024",
      location: "ESSEC Business School, Paris",
      attendees: "250+",
      image: "/lovable-uploads/d0fd3b60-b34d-46b7-a481-e715896ff019.png",
      type: "Hackathon",
      description: "A 36-hour hackathon co-organized by Utopia and KRYPTOSPHERE® focused on developing agentic AI solutions across multiple domains.",
      link: "/past-events/llm-to-agentic-ai"
    }
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  // Filter events based on selected filter
  const filteredUpcomingEvents = activeFilter === 'All' 
    ? allEvents 
    : allEvents.filter(event => event.type === activeFilter);

  // EuroTech Federation LinkedIn URL
  const eurotechLinkedIn = "https://www.linkedin.com/company/eurotech-federation";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-16">
          <div className="container-section py-4">
            <div className="max-w-3xl min-h-96 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray">Events</h1>
              <p className="text-xl mb-6">
                Join initiatives across Europe supported by EuroTech Federation — from member-led projects to fellow-driven events and aligned community gatherings. 
                We don’t organize events ourselves, but we proudly support and amplify the ones that reflect our vision, wherever they happen.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href={eurotechLinkedIn}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ActionButton variant="secondary">
                    Follow us on LinkedIn for event updates
                    <Calendar className="ml-2 h-5 w-5" />
                  </ActionButton>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="container-section py-24">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <iframe
              src="https://lu.ma/embed/calendar/cal-8MjGJtLdOO2UB9m/events?lt=light"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
