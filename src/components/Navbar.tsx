'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ActionButton } from '@/components/ui/action-button';

// Déclaration de type pour la propriété window
declare global {
  interface Window {
    navbarMenuOpen?: boolean;
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour partager l'état du menu avec d'autres composants
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.navbarMenuOpen = isMenuOpen;
      window.dispatchEvent(new CustomEvent('navbarMenuToggle', { detail: isMenuOpen }));
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Partners', href: '/partners' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-eurotech-blue text-eurotech-gray z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="EuroTech Federation Logo" 
                width={40}
                height={40}
                className="h-10 w-auto mr-3"
              />
              <span className="text-eurotech-gray font-heading font-extrabold text-2xl">
                EuroTech <span className="font-extralight">Federation</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-eurotech-gray hover:text-eurotech-accent transition-colors duration-200 font-semibold text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Join Network Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/join-us">
              <ActionButton variant="secondary" className="text-sm px-6 font-semibold">
                Join Network
              </ActionButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-eurotech-gray hover:text-eurotech-accent focus:outline-none focus:text-eurotech-accent"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-eurotech-blue border-t border-eurotech-accent/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-eurotech-gray hover:text-eurotech-accent transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/join-us">
                  <ActionButton variant="secondary" className="w-full text-sm">
                    Join Network
                  </ActionButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
