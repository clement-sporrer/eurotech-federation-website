
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
};

const Events = () => {
  // Sample events data
  const allEvents: EventType[] = [
    {
      id: 1,
      title: "European Tech Summit 2025",
      date: "May 15-16, 2025",
      location: "Munich, Germany",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Conference",
      description: "Join Europe's largest tech summit, featuring keynotes from industry leaders, workshops, and networking opportunities with professionals from across the continent."
    },
    {
      id: 2,
      title: "AI Innovation Hackathon",
      date: "June 10-12, 2025",
      location: "Paris, France",
      attendees: "200+",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Hackathon",
      description: "A 48-hour hackathon challenging teams to develop AI-powered solutions for real-world problems. €10,000 in prizes available for the winning teams."
    },
    {
      id: 3,
      title: "Future of Tech: Keynote Series",
      date: "July 5, 2025",
      location: "London, UK",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Keynote",
      description: "An evening of inspiring talks from tech visionaries about the future of European innovation, digital transformation, and emerging technologies."
    },
    {
      id: 4,
      title: "Startup Networking Mixer",
      date: "August 20, 2025",
      location: "Berlin, Germany",
      attendees: "150+",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Side Event",
      description: "Connect with founders, investors, and tech enthusiasts in a casual setting. Perfect for expanding your network and discovering collaboration opportunities."
    },
    {
      id: 5,
      title: "Women in Tech Conference",
      date: "September 8-9, 2025",
      location: "Stockholm, Sweden",
      attendees: "400+",
      image: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Conference",
      description: "A two-day conference celebrating and supporting women in technology fields across Europe, with workshops, panels, and mentorship opportunities."
    },
    {
      id: 6,
      title: "FinTech Innovation Workshop",
      date: "October 15, 2025",
      location: "Zurich, Switzerland",
      attendees: "100+",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Side Event",
      description: "An interactive workshop exploring the latest in financial technology innovations, blockchain applications, and digital banking solutions."
    }
  ];

  // Past events
  const pastEvents: EventType[] = [
    {
      id: 101,
      title: "European Tech Conference 2024",
      date: "November 10-11, 2024",
      location: "Amsterdam, Netherlands",
      attendees: "450+",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Conference",
      description: "Our flagship event featuring industry leaders, innovative startups, and cutting-edge research presentations from across Europe."
    },
    {
      id: 102,
      title: "Blockchain Hackathon",
      date: "October 5-7, 2024",
      location: "Lisbon, Portugal",
      attendees: "180+",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      type: "Hackathon",
      description: "A successful 3-day hackathon focused on blockchain solutions for supply chain, identity management, and financial services."
    },
    {
      id: 103,
      title: "AI Ethics Symposium",
      date: "September 15, 2024",
      location: "Vienna, Austria",
      attendees: "250+",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
      type: "Keynote",
      description: "A thought-provoking symposium on the ethical implications of artificial intelligence and its impact on society and industry."
    }
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  // Filter events based on selected filter
  const filteredUpcomingEvents = activeFilter === 'All' 
    ? allEvents 
    : allEvents.filter(event => event.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
              <p className="text-xl mb-6">
                Join EuroTech Federation at our events across Europe. 
                From major conferences to intimate networking opportunities, 
                we bring together the brightest minds in tech.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="container-section">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <Button className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                        Register Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <h2 className="text-3xl font-bold text-eurotech-blue mb-8">Past Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden card-hover">
                    <div className="relative h-48">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover grayscale"
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
                      <Button variant="outline" className="w-full border-eurotech-blue text-eurotech-blue hover:bg-eurotech-blue hover:text-white">
                        View Event Recap
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" className="border-eurotech-blue text-eurotech-blue hover:bg-eurotech-blue hover:text-white">
                  Load More Past Events
                </Button>
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
