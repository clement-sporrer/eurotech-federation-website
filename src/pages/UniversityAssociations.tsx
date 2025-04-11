
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityAssociations = () => {
  // University associations data
  const associations = [
    {
      name: "Utopia",
      university: "ESSEC Business School",
      focus: "AI",
      location: "Paris, France",
      members: "40+",
      description: "Utopia is the AI Association of ESSEC Business School",
      linkedin: "https://www.linkedin.com/company/utopiaessec",
      logo: "/lovable-uploads/ece78350-bd62-4988-aab3-166e64d240b3.png"
    },
    {
      name: "Kryptosphere",
      university: "Network",
      focus: "Web3",
      location: "Paris/Belgium/UK",
      members: "600",
      description: "Europe's leading Tech network advocating Crypto, AI and Cybersecurity. By and for students.",
      linkedin: "https://www.linkedin.com/company/kryptosphere/",
      logo: "/lovable-uploads/335a22b8-818a-42b1-906f-de1450f445e1.png"
    },
    {
      name: "BSA EPFL",
      university: "EPFL",
      focus: "Web3",
      location: "Lausanne, Switzerland",
      members: "24",
      description: "Leading Blockchain Student Association in Switzerland. Based at EPFL, Lausanne",
      linkedin: "https://www.linkedin.com/company/blockchain-student-association/",
      logo: "/lovable-uploads/4c37c2be-f917-4059-a8fc-e2bdb24151f5.png"
    },
    {
      name: "Imperial Blockchain",
      university: "Imperial College",
      focus: "Web3",
      location: "London, UK",
      members: "14",
      description: "The Blockchain & FinTech society at Imperial College London. Build, Research, Innovate, Inspire.",
      linkedin: "https://www.linkedin.com/company/imperial-blockchain/",
      logo: "/lovable-uploads/cb34cfe1-d8d9-44d1-af16-b1cad27bc501.png"
    },
    {
      name: "Imperial AI",
      university: "Imperial College",
      focus: "AI",
      location: "London, UK",
      members: "12",
      description: "Imperial College London Artificial Intelligence Group",
      linkedin: "https://www.linkedin.com/company/imperial-ai-society/",
      logo: "/lovable-uploads/a20a4454-7e24-48ff-9aba-fb17fe9a7183.png"
    },
    {
      name: "TUM Blockchain Club",
      university: "TUM",
      focus: "Web3",
      location: "Munich, Germany",
      members: "39",
      description: "Leading student-run Blockchain Club in Germany | founded in 2022 | Munich based",
      linkedin: "https://www.linkedin.com/company/tum-blockchain-club/posts/?feedView=all",
      logo: "/lovable-uploads/05c9dffb-5e48-40f5-b3b4-05c9df15a4fb.png"
    },
    {
      name: "TUM AI",
      university: "TUM",
      focus: "AI",
      location: "Munich, Germany",
      members: "60",
      description: "TUM.ai is Germany's leading student initiative around AI about which we educate, connect and run projects and events.",
      linkedin: "https://www.linkedin.com/company/tum-ai/",
      logo: "/lovable-uploads/0bc9d94c-7517-4fcc-99b3-198674e58b8a.png"
    },
    {
      name: "RoboTUM",
      university: "TUM",
      focus: "Robotics",
      location: "Munich, Germany",
      members: "20",
      description: "The robotics student initiative at the Technical University of Munich.",
      linkedin: "https://www.linkedin.com/company/therobotum/",
      logo: "/lovable-uploads/a23c2f8c-a437-4612-a9a2-fc96f63bff6c.png"
    },
    {
      name: "DAU'IA",
      university: "Dauphine",
      focus: "AI",
      location: "Paris, France",
      members: "9",
      description: "Artificial intelligence association of Paris Dauphine-PSL University",
      linkedin: "https://www.linkedin.com/company/dauia/",
      logo: ""
    }
  ];

  // EuroTech Federation LinkedIn URL
  const eurotechLinkedIn = "https://www.linkedin.com/company/eurotech-federation";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">University Associations</h1>
              <p className="text-xl mb-6">
                Discover the leading student associations across Europe's top universities that form the backbone of EuroTech Federation.
              </p>
              <Link to="/join-us" className="inline-block">
                <button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Join Our Network
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Associations Grid */}
        <section className="py-16 container-section">
          <h2 className="section-title text-center mb-12">Our Member Associations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {associations.map((association, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-eurotech-gray h-16 w-16 rounded-full flex items-center justify-center overflow-hidden">
                      {association.logo ? (
                        <img 
                          src={association.logo} 
                          alt={association.name} 
                          className="h-12 w-12 object-contain"
                        />
                      ) : (
                        <div className="text-2xl font-bold text-eurotech-blue">
                          {association.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <a 
                      href={association.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-eurotech-blue hover:text-eurotech-accent"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold text-eurotech-blue mb-2">{association.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">University:</span>
                      <span className="font-medium">{association.university}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Focus:</span>
                      <span className="font-medium">{association.focus}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{association.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Members:</span>
                      <span className="font-medium">{association.members}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {association.description}
                  </p>
                  
                  <a 
                    href={association.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eurotech-blue hover:text-eurotech-accent font-medium"
                  >
                    Visit LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-eurotech-gray py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-eurotech-blue">Join the EuroTech Federation</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Is your student association focused on technology and innovation? Join our growing network of Europe's brightest tech talents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-us" className="inline-block">
                <button className="bg-eurotech-blue hover:bg-eurotech-dark text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Apply to Join
                </button>
              </Link>
              <a 
                href={eurotechLinkedIn}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Follow Us on LinkedIn <Linkedin className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityAssociations;
