import React from 'react';
import { ActionButton } from '@/components/ui/action-button';
import Link from 'next/link';

const PartnersHero = () => {
  return (
    <section className="bg-eurotech-blue text-white pt-16">
      <div className="container-section py-4">
        <div className="max-w-3xl min-h-96 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray text-center md:text-left w-full md:w-auto">
            Partner With Us
          </h1>
          <p className="text-xl mb-6">
            Join forces with Europe&apos;s largest student-led tech network and connect with the brightest minds across the continent.
          </p>
          <Link href="/join-us">
            <ActionButton variant="secondary">
              Become a Partner
            </ActionButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
