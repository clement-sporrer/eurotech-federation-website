
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-eurotech-blue text-white py-24">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="EuroTech Federation Logo"
                className="h-12 mr-3"
              />
            </Link>
            <h3 className="text-xl font-heading font-bold mt-4">EuroTech <span className="font-extralight">Federation</span></h3>
            <p className="mt-2 text-gray-300">Uniting Europe's brightest tech talents</p>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-eurotech-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-eurotech-accent transition-colors">About Us</Link></li>
              <li><Link to="/incubator" className="hover:text-eurotech-accent transition-colors">Incubator</Link></li>
              <li><Link to="/partners" className="hover:text-eurotech-accent transition-colors">Partners</Link></li>
              <li><Link to="/events" className="hover:text-eurotech-accent transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/join-us" className="hover:text-eurotech-accent transition-colors">Join Us</Link></li>
              <li><Link to="/contact" className="hover:text-eurotech-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/eurotech-federation/" className="text-white hover:text-eurotech-accent transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@eurotech-federation.org" className="text-white hover:text-eurotech-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-300">contact@eurotechfederation.com</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} EuroTech Federation. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-eurotech-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-eurotech-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
