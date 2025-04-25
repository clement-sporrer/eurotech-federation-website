import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "European Tech Summit 2025",
      date: "May 15-16, 2025",
      location: "Munich, Germany",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Conference"
    },
    {
      id: 2,
      title: "AI Innovation Hackathon",
      date: "June 10-12, 2025",
      location: "Paris, France",
      attendees: "200+",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Hackathon"
    },
    {
      id: 3,
      title: "Future of Tech: Keynote Series",
      date: "July 5, 2025",
      location: "London, UK",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "Keynote"
    }
  ];

  return (
    <section className="container-section">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <div>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Join us at our upcoming events across Europe to connect, learn, and innovate.
          </p>
        </div>
        <ActionButton variant="primary" className="mt-4 md:mt-0 flex items-center">
          View All Events <ArrowRight className="ml-2 h-5 w-5" />
        </ActionButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
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
              <ActionButton 
                variant="secondary" 
                className="w-full border border-eurotech-blue"
              >
                Register Now
              </ActionButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
