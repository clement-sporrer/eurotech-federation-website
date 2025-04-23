
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
    <header className="bg-eurotech-blue text-white absolute w-full top-0 z-50">
      <div className="container-section">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="EuroTech Federation Logo"
                className="h-10 mr-3"
              />
              <span className="text-white font-heading font-bold text-xl">EuroTech <span className="font-extralight">Federation</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-eurotech-accent font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-eurotech-accent font-medium">
              About Us
            </Link>
            <Link to="/events" className="text-white hover:text-eurotech-accent font-medium">
              Events
            </Link>
            <Link to="/partners" className="text-white hover:text-eurotech-accent font-medium">
              Partners
            </Link>
            <Link to="/contact" className="text-white hover:text-eurotech-accent font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/join-us">
              <Button className="bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">Join Network</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-eurotech-accent"
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
          <div className="px-2 py-32 space-y-1 sm:px-3 h-full">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-white hover:text-eurotech-accent"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-white hover:text-eurotech-accent"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-base font-medium text-white hover:text-eurotech-accent"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/partners"
              className="block px-3 py-2 text-base font-medium text-white hover:text-eurotech-accent"
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-white hover:text-eurotech-accent"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="mt-4 px-3">
              <Link to="/join-us">
                <Button className="w-full bg-white text-eurotech-blue hover:bg-eurotech-accent hover:text-white">Join Network</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
