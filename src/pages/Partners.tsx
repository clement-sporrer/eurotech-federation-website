
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Partners = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
  };

  const benefits = [
    "Access to top tech talent from Europe's premier universities",
    "Co-branding opportunities at high-profile tech events",
    "Speaking and workshop opportunities",
    "Recruitment and networking with future tech leaders",
    "Early access to innovative student projects and startups",
    "Pan-European visibility in the tech education sector"
  ];

  // Partners logos - updated to only include the 4 requested corporate partners
  const universities = [
    { name: "Imperial College London", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Imperial_College_London_Logo.svg/1200px-Imperial_College_London_Logo.svg.png" },
    { name: "Technical University of Munich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
    { name: "EPFL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/EPFL_logo.svg/2560px-EPFL_logo.svg.png" },
    { name: "Dauphine-PSL", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Logo_Universit%C3%A9_Paris-Dauphine.svg/1200px-Logo_Universit%C3%A9_Paris-Dauphine.svg.png" },
    { name: "UCL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/UCL_logo.svg/2560px-UCL_logo.svg.png" },
    { name: "CentraleSupélec", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Logo_CentraleSup%C3%A9lec.svg/1200px-Logo_CentraleSup%C3%A9lec.svg.png" },
    { name: "ESSEC Business School", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/ESSEC_Business_School_logo.svg/2560px-ESSEC_Business_School_logo.svg.png" },
  ];
  
  const companies = [
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" },
    { name: "Kima Ventures", logo: "https://website-v3-assets.s3.amazonaws.com/assets/5ef40e465f0a2845c149aa91/5ef582a25f0a281b40507c0d/kima.png" },
    { name: "Entrepreneurs First", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Entrepreneur_First_Logo.png" },
    { name: "Project Europe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png" },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Partnering with EuroTech Federation has given us access to an incredible pool of young tech talent from across Europe. The quality of students and their innovative thinking has been impressive.",
      author: "Sophie Laurent",
      title: "Head of University Relations, Google Europe"
    },
    {
      quote: "EuroTech events provide the perfect platform to connect with the next generation of tech leaders. We've found valuable team members and fresh perspectives through this partnership.",
      author: "Martin Hoffman",
      title: "CTO, SAP Innovation Lab"
    },
    {
      quote: "The cross-border network that EuroTech has built is unlike anything else in the European tech education space. It's been invaluable for our recruitment and innovation initiatives.",
      author: "Elena Costa",
      title: "VP of Talent Acquisition, Siemens Digital"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
              <p className="text-xl mb-6">
                Join forces with Europe's largest student-led tech network and connect with the brightest minds across the continent.
              </p>
              <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Partnering with EuroTech Federation offers unique advantages for organizations looking to engage with Europe's tech talent ecosystem.
            </p>

            <div className="bg-eurotech-gray rounded-xl p-8">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-eurotech-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Partners Showcase */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Our Current Partners</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              We're proud to collaborate with leading academic institutions and companies.
            </p>

            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Universities Represented</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {universities.map((university, index) => (
                  <Link key={index} to="/university-associations" className="block">
                    <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                      <img 
                        src={university.logo} 
                        alt={university.name} 
                        className="h-12 md:h-16 object-contain"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-eurotech-blue mb-8 text-center">Corporate Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companies.map((company, index) => (
                  <div key={index} className="flex justify-center items-center bg-white p-6 rounded-lg shadow-sm">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="h-10 md:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Partner Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="text-4xl text-eurotech-blue mb-4">"</div>
                    <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-eurotech-blue">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="container-section bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Partner Inquiry</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Interested in partnering with EuroTech Federation? Fill out the form below to start the conversation.
            </p>

            <div className="flex justify-center mb-8">
              <a 
                href={eurotechLinkedIn}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-eurotech-blue hover:text-eurotech-accent font-medium"
              >
                Visit our LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                  <Input id="organization" placeholder="Company Inc." required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest</label>
                <select 
                  id="partnershipType" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="corporate">Corporate Partner</option>
                  <option value="academic">Academic Institution</option>
                  <option value="sponsor">Event Sponsor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your goals and how you'd like to partner with us" rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
