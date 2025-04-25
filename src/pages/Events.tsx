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
        <section className="bg-eurotech-blue text-white pt-40 pb-24">
          <div className="container-section">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray">Events</h1>
              <p className="text-xl mb-6">
                Join EuroTech Federation at our events across Europe. 
                From major conferences to intimate networking opportunities, 
                we bring together the brightest minds in tech.
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
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 bg-eurotech-blue text-white">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-3xl font-bold text-eurotech-blue mb-4 sm:mb-0">Upcoming Events</h2>
                
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <div className="flex flex-wrap gap-2">
                    {['All', 'Conference', 'Hackathon', 'Keynote', 'Side Event'].map((filter) => (
                      <Badge 
                        key={filter} 
                        variant={activeFilter === filter ? "default" : "outline"}
                        className={activeFilter === filter ? "bg-eurotech-blue" : "cursor-pointer"}
                        onClick={() => setActiveFilter(filter)}
                      >
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                {filteredUpcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden card-hover">
                    <div className="relative h-48">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-eurotech-blue">
                        {event.type}
                      </Badge>
                    </div>
                    <CardHeader className="pt-6">
                      <h3 className="text-xl font-bold text-eurotech-blue">{event.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <ActionButton variant="primary" className="w-full">
                        View Event Details
                      </ActionButton>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <h2 className="text-3xl font-bold text-eurotech-blue mb-8">Past Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden card-hover">
                    <div className="relative h-48">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                      />
                      <Badge className="absolute top-4 right-4 bg-gray-600">
                        {event.type}
                      </Badge>
                    </div>
                    <CardHeader className="pt-6">
                      <h3 className="text-xl font-bold text-eurotech-blue">{event.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      {event.link ? (
                        <Link to={event.link} className="w-full">
                          <ActionButton variant="secondary" className="w-full border border-eurotech-blue">
                            View Event Recap
                          </ActionButton>
                        </Link>
                      ) : (
                        <ActionButton variant="secondary" className="w-full border border-eurotech-blue" disabled>
                          Recap Coming Soon
                        </ActionButton>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
