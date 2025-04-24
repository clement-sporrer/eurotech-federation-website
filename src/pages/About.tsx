import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Flag, Network, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnerGrid from '@/components/PartnerGrid';
import { universities } from '@/data/partnersData';

const About = () => {
  const goals = [
    {
      title: "Build an Active European Tech Network",
      description: "Create a vibrant community of students, professionals, and institutions across Europe to foster collaboration and innovation.",
      icon: <Network className="h-12 w-12 text-eurotech-blue" />,
    },
    {
      title: "Organize Flagship Events",
      description: "Host high-impact conferences, hackathons, and networking events across European cities to showcase talent and ideas.",
      icon: <Flag className="h-12 w-12 text-eurotech-blue" />,
    },
    {
      title: "Launch a Pan-European Startup Accelerator",
      description: "Support emerging tech entrepreneurs with resources, mentorship, and funding opportunities to create the next generation of European tech leaders.",
      icon: <Briefcase className="h-12 w-12 text-eurotech-blue" />,
    },
  ];

  // Updated leadership team with correct information
  const team = [
    {
      name: "Clément Sporrer",
      role: "Co-Founder @Utopia",
      university: "ESSEC Business School",
      linkedin: "https://www.linkedin.com/in/clementsporrer/",
      image: "/lovable-uploads/b48a4ca7-0621-46f8-990b-809affd8341d.png"
    },
    {
      name: "Stanislas Michel",
      role: "Head of Partnerships @Utopia",
      university: "ESSEC Business School & Fundação Getulio Vargas",
      linkedin: "https://www.linkedin.com/in/stanislas-michel-675b18224/",
      image: "/lovable-uploads/05f48d13-7ec0-4300-8d2f-fb18a60ad628.png"
    },
    {
      name: "Louis Piallat",
      role: "General Secretary @Utopia",
      university: "ESSEC Business School & Sorbonne University",
      linkedin: "https://www.linkedin.com/in/louispiallat/",
      image: "/lovable-uploads/b360efb5-beeb-4bd0-a7a6-f3ce41a9a04c.png"
    },
    {
      name: "Fawzi Elghazoui",
      role: "Head of Com @KS",
      university: "ESILV",
      linkedin: "https://www.linkedin.com/in/favsidv/",
      image: "/lovable-uploads/1744305940400.jpeg"
    },
    {
      name: "Nicolas Bigeard",
      role: "Partnership advisor @Utopia",
      university: "ESILV",
      linkedin: "https://www.linkedin.com/in/nicolas-bigeard-b12687272/",
      image: "/lovable-uploads/cbe74abd-6016-4e3a-87f4-b60934900860.png"
    },
    {
      name: "Mathieu Laruelle",
      role: "Treasurer @KS",
      university: "ESILV",
      linkedin: "https://www.linkedin.com/in/mathieu-laruelle/",
      image: "/lovable-uploads/1713304215880.jpeg"
    },
    {
      name: "Alexandre Mourot",
      role: "President @BSA EPFL",
      university: "EPFL",
      linkedin: "https://www.linkedin.com/in/alexandre-mourot-01b965239/",
      image: "/lovable-uploads/1730368238246.jpeg"
    },
    {
      name: "Gopi Mehta",
      role: "CS @ TUM Blockchain Club",
      university: "TUM",
      linkedin: "https://www.linkedin.com/in/gopimehta/",
      image: "/lovable-uploads/1724027530719.jpeg"
    },
    {
      name: "Laurenz Sommerlad",
      role: "Advisor @TUM AI",
      university: "TUM",
      linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
      image: "/lovable-uploads/1682378092540.jpeg"
    },
    {
      name: "Ming Xiao",
      role: "President @Imperial Blockchain Group",
      university: "Imperial College London",
      linkedin: "https://www.linkedin.com/in/minghan-xiao-b36678236/",
      image: "/lovable-uploads/1728905960703.jpeg"
    },
    {
      name: "Alessia Antonielli",
      role: "Co-Founder @Utopia",
      university: "ESSEC Business School",
      linkedin: "https://www.linkedin.com/in/alessia-antonielli/",
      image: "/lovable-uploads/1722526280418.jpeg"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-40 pb-24">
          <div className="container-section">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About EuroTech Federation</h1>
              <p className="text-xl mb-6">
                EuroTech Federation is the largest student-led tech network in Europe, 
                bringing together top universities, student associations, and corporate partners.
              </p>
              <Link to="/join-us">
                <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">
                  Join Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container-section pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                EuroTech Federation aims to position Europe as a global leader in technology 
                innovation through a united and collaborative network of students, startups, 
                and institutions.
              </p>
              <p className="text-lg text-gray-700">
                We believe in the power of connection and collaboration across borders, 
                institutions, and disciplines to drive technological advancement and 
                create opportunities for Europe's brightest minds.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                A connected Europe where talent, ideas, and resources flow seamlessly 
                across borders to create world-leading technology innovations and 
                solutions.
              </p>
              <p className="text-lg text-gray-700">
                We envision a future where European tech talent has access to the 
                networks, knowledge, and opportunities needed to thrive on the global stage.
              </p>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="container-section">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Our Goals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {goals.map((goal, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4">{goal.icon}</div>
                    <h3 className="text-xl font-bold text-eurotech-blue mb-3">{goal.title}</h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Universities represented */}
        <section className="container-section py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Universities represented</h2>
          
          <PartnerGrid 
            title="Member Universities" 
            partners={universities} 
            buttonLink="/university-associations"
            showTitle={false}
          />
        </section>

        {/* Our Team */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="container-section">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm card-hover">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-eurotech-blue">{member.name}</h3>
                    <p className="text-eurotech-accent font-medium">{member.role}</p>
                    <p className="text-gray-600 mb-3">{member.university}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-eurotech-blue hover:underline flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
