import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ActionButton } from '@/components/ui/action-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "How can my university join the EuroTech Federation?",
    answer: "Universities can join through their student tech associations. Visit our \"Join Us\" page and fill out the association application form to start the process."
  },
  {
    question: "Do you offer internship or job opportunities?",
    answer: "While we don't directly offer employment, our network includes many leading tech companies that regularly recruit from our community. Attend our events to connect with potential employers."
  },
  {
    question: "Can I attend events if my university isn't a member?",
    answer: "Yes! Most of our events are open to all students, though members may receive priority registration or discounted tickets. Check individual event details for specific eligibility requirements."
  },
  {
    question: "How can companies sponsor EuroTech Federation events?",
    answer: "We offer various sponsorship packages for companies looking to engage with Europe's tech talent. Contact us through the partnership inquiry form on our Partners page to discuss options."
  }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        try {
          const text = await response.text();
          data = text ? JSON.parse(text) : {};
        } catch (parseError) {
          console.error("JSON parsing error:", parseError);
          throw new Error("Invalid server response");
        }
      } else {
        console.warn("Response is not in JSON format");
        data = { message: await response.text() || "Empty response" };
      }
      
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while sending the message');
      }
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Sending failed",
        description: error instanceof Error ? error.message : "An error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-40 pb-24">
          <div className="container-section">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray">Contact Us</h1>
              <p className="text-xl mb-6">
                Have questions or want to learn more about EuroTech Federation? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="container-section pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..." 
                    rows={6} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <ActionButton 
                  type="submit" 
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ActionButton>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-eurotech-blue mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                You can also reach out to us directly using the information below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-eurotech-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@eurotechfederation.com</p>
                    <p className="text-gray-500 text-sm mt-1">For general inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-eurotech-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">
                      PSL Dauphine University<br />
                      Place du Maréchal de Lattre de Tassigny<br />
                      75016 Paris, France
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/eurotech-federation/" 
                      className="bg-eurotech-blue text-white p-3 rounded-full hover:bg-eurotech-dark transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 bg-gray-200 h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.467145428186!2d2.2699736765450365!3d48.8682708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665462d3fa229%3A0x8c56dccde4f693d0!2sUniversit%C3%A9%20Paris%20Dauphine%20-%20PSL!5e0!3m2!1sen!2sus!4v1682437085985!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-eurotech-blue mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
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

export default Contact;
