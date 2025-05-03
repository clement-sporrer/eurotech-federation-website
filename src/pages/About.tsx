
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import AnimatedSection from '../components/AnimatedSection';
import FellowsSection from '../components/FellowsSection';

const About = () => {
  useEffect(() => {
    document.title = "About EuroTech Federation";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About EuroTech</h1>
              <p className="text-xl opacity-90">Uniting Europe's brightest tech minds to build a stronger, more innovative future</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Mission & Vision */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
                <p className="text-lg mb-8 leading-relaxed">
                  EuroTech Federation is a community-driven network connecting Europe's most promising tech talent. We foster collaboration across borders, bringing together students, young professionals, and tech enthusiasts from Europe's top universities and beyond. Our mission is to build bridges between the next generation of tech leaders, creating a thriving ecosystem where innovation knows no boundaries.
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  As a community, we believe in the power of sharing knowledge, experiences, and opportunities. We facilitate connections that transcend national borders, institutional affiliations, and traditional barriers to entry in the tech world. Together, we're building a more inclusive, dynamic, and connected European tech landscape.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Vision & Goals */}
        <AnimatedSection>
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vision & Goals</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                      We envision a Europe where tech talent flourishes through community support, where innovation is accessible to all, and where collaborative networks drive technological advancement for social good. Our community aims to be the connective tissue between Europe's tech hubs, universities, and innovation centers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Our Goals</h3>
                    <ul className="list-disc pl-6 space-y-3 text-lg">
                      <li>Foster meaningful connections among tech enthusiasts across European countries</li>
                      <li>Create platforms for knowledge exchange and collaborative learning</li>
                      <li>Promote diversity and inclusion within the European tech community</li>
                      <li>Bridge the gap between academic institutions and industry innovators</li>
                      <li>Support members in developing technical and entrepreneurial skills</li>
                      <li>Advocate for policies that strengthen Europe's position in global tech innovation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Fellows Component */}
        <AnimatedSection>
          <FellowsSection />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
