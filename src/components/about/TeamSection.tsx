import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

// Interface for Fellow data from API
interface Fellow {
  photo: string;
  fullName: string;
  country: string;
  linkedin: string;
}

// Interface for display format
interface FellowDisplay {
  image: string;
  name: string;
  role: string;
  university: string;
  linkedin: string;
  country: string;
}

const TeamSection = () => {
  // State to store fellows data
  const [fellows, setFellows] = useState<FellowDisplay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch fellows data from API
  useEffect(() => {
    const fetchFellows = async () => {
      try {
        setLoading(true);
        // Use local API endpoint
        const response = await fetch('/api/fellows');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch fellows: ${response.status}`);
        }
        
        const data: Fellow[] = await response.json();
        
        // Transform API data to display format
        const transformedData: FellowDisplay[] = data.map(fellow => ({
          image: fellow.photo || '/team/placeholder.png',
          name: fellow.fullName,
          role: "Fellow @EuroTech",
          country: fellow.country,
          university: "",  // API doesn't provide university info yet
          linkedin: fellow.linkedin.includes('linkedin.com') 
            ? fellow.linkedin 
            : `https://linkedin.com/in/${fellow.linkedin}`
        }));
        
        setFellows(transformedData);
      } catch (err) {
        console.error("Error fetching fellows:", err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchFellows();
  }, []);

  // Updated leadership team with correct team images
  const team = [
    {
      name: "Clément Sporrer",
      role: "Co-Founder",
      university: "",
      linkedin: "https://www.linkedin.com/in/clementsporrer/",
      image: "/team/Clément-Sporrer.png"
    },
    {
      name: "Stanislas Michel",
      role: "Co-Founder",
      university: "",
      linkedin: "https://www.linkedin.com/in/stanislas-michel-675b18224/",
      image: "/team/Stanislas-Michel.png"
    },
    {
      name: "Louise Maunoir",
      role: "Co-Founder",
      university: "",
      linkedin: "https://www.linkedin.com/in/louise-scarlette-maunoir/",
      image: "/team/Louise-Maunoir.jpeg"
    },
    {
      name: "Laurenz Sommerlad",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
      image: "/team/Laurenz-Sommerlad.jpeg"
    },
    {
      name: "Nicolas Bigeard",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/nicolas-bigeard-b12687272/",
      image: "/team/Nicolas-Bigeard.png"
    },
    {
      name: "Pasha Rizali",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/pasha-rizali/",
      image: "/team/Pasha-Rizali.jpeg"
    },
    {
      name: "Andrea Procopio",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/procopioandrea/",
      image: "/team/Andrea-Procopio.jpeg"
    },
    {
      name: "Enguerrand Perrine",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/enguerrand-perrine-459178224/",
      image: "/team/Enguerrand-Perrine.jpeg"
    },
    {
      name: "Salim Boujaddi",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/salim-boujaddi/",
      image: "/team/Salim-Boujaddi.jpeg"
    },  
    {
      name: "Tobias Kotzian",
      role: "Founding Fellow",
      university: "",
      linkedin: "https://www.linkedin.com/in/tobias-kotzian/",
      image: "/team/Tobias-Kotzian.jpeg"
    }
  ];

  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-6 text-center md:text-left">Core Team</h2>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-eurotech-blue">{member.name}</h3>
                  <p className="text-eurotech-blue font-medium">{member.role}</p>
                  <p className="text-eurotech-blue mb-3">{member.university}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-eurotech-blue hover:underline flex items-center"
                  >
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fellows Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-2xl font-bold text-eurotech-blue mb-6 text-center md:text-left">Fellows</h2>
          
          {loading ? (
            <p className="text-center text-eurotech-blue">Loading fellows data...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error loading fellows: {error}</p>
          ) : fellows.length === 0 ? (
            <p className="text-center text-eurotech-blue">No fellows data available</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {fellows.map((member, index) => (
                <div key={index} className="rounded-lg">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-eurotech-blue">{member.name}</h3>
                    <p className="text-eurotech-blue font-medium">{member.role}</p>
                    {member.university && (
                      <p className="text-eurotech-blue">{member.university}</p>
                    )}
                    <p className="text-eurotech-blue italic">{member.country}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-eurotech-blue hover:underline flex items-center mt-4"
                    >
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TeamSection;
