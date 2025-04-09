
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Award, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const PastEventDetail = () => {
  // Event details
  const event = {
    title: "From LLM to Agentic AI Hackathon",
    date: "April 4-6, 2024",
    location: "ESSEC Business School, Paris",
    organizers: ["Utopia", "KRYPTOSPHERE®"],
    attendees: "250+ registrants, 70+ participants",
    image: "/lovable-uploads/d0fd3b60-b34d-46b7-a481-e715896ff019.png",
    description: "36 hours of non-stop innovation to shape the future of AI.",
  };

  // Winning teams
  const winners = [
    {
      team: "JACID",
      project: "Trustee",
      track: "Cyber track",
      description: "Online anti-scam protection"
    },
    {
      team: "VibeCoding",
      project: "HYRAI",
      track: "Finance/Industry track",
      description: "AI-powered HR solution"
    },
    {
      team: "AgenticMappers",
      project: "City Scout",
      track: "Consumer track",
      description: "Smart urban GPS"
    }
  ];

  // Hackathon partners
  const hackathonPartners = [
    "LEDGER", "FRANCE 2030 x METALAB", "BPI FRANCE", "MISTRAL AI", 
    "AWS", "GOOGLE CLOUD", "NVIDIA", "KIMA VENTURE", 
    "ENTREPRENEUR FIRST", "PARIS BLOCKCHAIN WEEK", "RAISE SUMMIT"
  ];

  // BeforeHack partners
  const beforeHackPartners = [
    "LEDGER", "NVIDIA", "GOOGLE CLOUD", "MISTRAL AI", "MICRSOFT GENAI STUDIO"
  ];

  // Speakers
  const speakers = [
    "Natalia Segal (Nvidia)", 
    "Mohamed Ait Alla (Google Cloud)", 
    "Guillaume MATHIAS (Ledger)", 
    "Antonin Faure (Mistra AI)", 
    "Maxime Zarrillo (Microsoft)"
  ];

  // Jury members
  const juryMembers = [
    "Eva Morin (European Central Bank)",
    "Alexis BOGROFF (ESILV)",
    "Francesca Bugiotti (CentraleSupélec)",
    "Badereddine K. (50 partners)",
    "Rafael Lopez (InfolabAI)",
    "Samir Abbassi (Thales)",
    "Olesia Khrapunova (WeLocalize)",
    "Filipp Trigub (InfolabAI)",
    "Tarek Makaila (Waterflai AI)",
    "Delphin Barankanira (Google Cloud)",
    "Fayed Al Rashid (Entrepreneurs First)"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url(${event.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
              <p className="text-xl mb-8">
                {event.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{event.attendees}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Overview */}
        <section className="container-section py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">Event Overview</h2>
              <div className="prose max-w-none text-lg text-gray-700">
                <p className="mb-4">What. A. Weekend.</p>
                <p className="mb-4">36 hours of non-stop innovation, co-organized by Utopia and KRYPTOSPHERE®, to shape the future of AI.</p>
                <p className="mb-4">Let's look back at an unforgettable event:</p>
                <p className="mb-4">The exclusive BeforeHack—over 100 participants gathered on Ledger's rooftop the night before the hackathon.</p>
                <p className="mb-4">Inspiring talks by industry leaders energized the community. Huge thanks to Erwan Gallo (Ledger) for making it all possible!</p>
                
                <h3 className="text-xl font-bold text-eurotech-blue mt-8 mb-4">Key event figures:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>250+ registrants, 70+ selected participants</li>
                  <li>20+ innovative projects created</li>
                  <li>30+ organizing team members working 24/7 for 36 hours 🔥</li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Winning Teams */}
        <section className="bg-eurotech-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-eurotech-blue mb-12 text-center">🏆 Winning Teams</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {winners.map((winner, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <Award className="h-12 w-12 text-eurotech-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-eurotech-blue mb-2 text-center">{winner.team}</h3>
                    <div className="text-center mb-4">
                      <span className="inline-block bg-eurotech-blue/10 text-eurotech-blue rounded-full px-3 py-1 text-sm">
                        {winner.track}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-gray-800 text-center mb-2">
                      {winner.project}
                    </p>
                    <p className="text-gray-600 text-center">
                      {winner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700">
                Each winning project brilliantly showcased the power of agentic AI in its domain. 
                Kudos to all teams for pushing boundaries in such a short time! 🙏
              </p>
            </div>
          </div>
        </section>

        {/* Team & Speakers */}
        <section className="container-section py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">BeforeHack Speakers</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {speakers.map((speaker, index) => (
                      <li key={index} className="flex items-start">
                        <MessageSquare className="h-5 w-5 text-eurotech-blue mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{speaker}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">Jury Members</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {juryMembers.map((member, index) => (
                      <li key={index} className="flex items-start">
                        <Users className="h-5 w-5 text-eurotech-blue mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{member}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-eurotech-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-eurotech-blue mb-12 text-center">Partners</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-eurotech-blue mb-6 text-center">Hackathon Partners</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {hackathonPartners.map((partner, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-md shadow-sm text-gray-700">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-eurotech-blue mb-6 text-center">BeforeHack Partners</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {beforeHackPartners.map((partner, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-md shadow-sm text-gray-700">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organizing Team */}
        <section className="container-section py-16">
          <h2 className="text-3xl font-bold text-eurotech-blue mb-8 text-center">Organizing Team</h2>
          
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Bravo and thank you to the wonderful organizing team from Utopia & KRYPTOSPHERE for this incredible adventure 🙌
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <img 
              src="/lovable-uploads/b48a4ca7-0621-46f8-990b-809affd8341d.png" 
              alt="Clément Sporrer" 
              className="w-full rounded-lg shadow-md"
            />
            <img 
              src="/lovable-uploads/05f48d13-7ec0-4300-8d2f-fb18a60ad628.png" 
              alt="Stanislas Michel" 
              className="w-full rounded-lg shadow-md"
            />
            <img 
              src="/lovable-uploads/b360efb5-beeb-4bd0-a7a6-f3ce41a9a04c.png" 
              alt="Louis Piallat" 
              className="w-full rounded-lg shadow-md"
            />
            <img 
              src="/lovable-uploads/cbe74abd-6016-4e3a-87f4-b60934900860.png" 
              alt="Nicolas Bigeard" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              ...and many more amazing team members who made this event possible! 🙏
            </p>
            <p className="text-xl font-medium text-eurotech-blue">
              This is just the beginning. Photos, recaps, deep dives, aftermovie, and big announcements… it's all coming. Stay tuned.🔥
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-eurotech-blue text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us for Future Events</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              EuroTech Federation hosts events throughout the year. 
              Follow us to stay updated on upcoming hackathons, conferences, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">
                  See Upcoming Events
                </Button>
              </Link>
              <Link to="/join-us">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-eurotech-blue">
                  Join Our Network
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PastEventDetail;
