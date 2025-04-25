import React, { useState } from 'react';
import { ActionButton } from '@/components/ui/action-button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send this to your newsletter service
    console.log('Subscribing email:', email);
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-gradient-blue text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest updates on events, opportunities, and tech news.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 text-white placeholder:text-white/70 border-white/20 focus-visible:ring-white"
              required
            />
            <ActionButton 
              type="submit" 
              variant="secondary"
            >
              Subscribe
            </ActionButton>
          </form>
          
          <p className="mt-4 text-sm text-white/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
