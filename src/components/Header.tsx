
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/987b295b-2e7d-4c36-a6d1-e9bc43844786.png"
                alt="EuroTech Federation Logo"
                className="h-10 mr-3"
              />
              <span className="text-eurotech-blue font-heading font-semibold text-xl">EuroTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-eurotech-blue font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-eurotech-blue font-medium">
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-eurotech-blue font-medium flex items-center">
                  <span>Events</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/events" className="w-full">Upcoming Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/events/past" className="w-full">Past Events</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/partners" className="text-gray-700 hover:text-eurotech-blue font-medium">
              Partners
            </Link>
            <Link to="/join-us" className="text-gray-700 hover:text-eurotech-blue font-medium">
              Join Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-eurotech-blue font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/join-us">
              <Button className="bg-eurotech-blue hover:bg-eurotech-dark">Join Network</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/partners"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              to="/join-us"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              Join Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eurotech-blue"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="mt-4 px-3">
              <Link to="/join-us">
                <Button className="w-full bg-eurotech-blue hover:bg-eurotech-dark">Join Network</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
