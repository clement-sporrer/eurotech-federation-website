
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, GraduationCap, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const JoinUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Network</h1>
              <p className="text-xl mb-6">
                EuroTech Federation offers multiple ways to get involved in Europe's largest student-led tech network.
              </p>
            </div>
          </div>
        </section>

        {/* Join Options Section */}
        <section className="container-section">
          <div className="text-center mb-16">
            <h2 className="section-title">How to Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a student, association, academic institution, or company, there's a place for you in our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-eurotech-blue mb-4" />
                <CardTitle className="text-2xl font-heading text-eurotech-blue">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  Join our network as an individual student to access events, opportunities, and connect with peers across Europe.
                </CardDescription>
                <Button className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                  Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <User className="h-12 w-12 text-eurotech-blue mb-4" />
                <CardTitle className="text-2xl font-heading text-eurotech-blue">For Associations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  Student associations can join our federation to collaborate on events, share resources, and expand your network.
                </CardDescription>
                <Button className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                  Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Building className="h-12 w-12 text-eurotech-blue mb-4" />
                <CardTitle className="text-2xl font-heading text-eurotech-blue">For Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  Companies and institutions can partner with us to access talent, sponsor events, and promote innovation.
                </CardDescription>
                <Button className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Tabs */}
        <section className="bg-eurotech-gray py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Apply to Join</h2>
            
            <Tabs defaultValue="students" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="associations">Associations</TabsTrigger>
                <TabsTrigger value="organizations">Organizations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="students">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-eurotech-blue">Student Application</CardTitle>
                    <CardDescription>
                      Join our network as an individual student to access opportunities and connect with peers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="student-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <Input id="student-name" placeholder="John Doe" required />
                        </div>
                        <div>
                          <label htmlFor="student-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input id="student-email" type="email" placeholder="you@example.com" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="student-university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
                          <Input id="student-university" placeholder="Imperial College London" required />
                        </div>
                        <div>
                          <label htmlFor="student-field" className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                          <Input id="student-field" placeholder="Computer Science" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="student-motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join?</label>
                        <Textarea id="student-motivation" placeholder="Tell us why you're interested in joining EuroTech Federation" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="associations">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-eurotech-blue">Association Application</CardTitle>
                    <CardDescription>
                      Student associations can apply to become official members of the EuroTech Federation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="assoc-name" className="block text-sm font-medium text-gray-700 mb-1">Association Name</label>
                          <Input id="assoc-name" placeholder="Imperial AI Society" required />
                        </div>
                        <div>
                          <label htmlFor="assoc-university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
                          <Input id="assoc-university" placeholder="Imperial College London" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="assoc-contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                          <Input id="assoc-contact" placeholder="John Doe" required />
                        </div>
                        <div>
                          <label htmlFor="assoc-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input id="assoc-email" type="email" placeholder="contact@association.org" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="assoc-description" className="block text-sm font-medium text-gray-700 mb-1">About the Association</label>
                        <Textarea id="assoc-description" placeholder="Tell us about your association, its purpose, and activities" rows={4} required />
                      </div>
                      <div>
                        <label htmlFor="assoc-motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join?</label>
                        <Textarea id="assoc-motivation" placeholder="How do you envision your association contributing to and benefiting from the EuroTech Federation?" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="organizations">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-eurotech-blue">Organization Partnership Inquiry</CardTitle>
                    <CardDescription>
                      Companies and institutions can partner with EuroTech Federation for talent recruitment, event sponsorship, and more.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="org-name" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                          <Input id="org-name" placeholder="Tech Company Inc." required />
                        </div>
                        <div>
                          <label htmlFor="org-type" className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                          <select 
                            id="org-type" 
                            className="w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                          >
                            <option value="">Select an option</option>
                            <option value="company">Company</option>
                            <option value="university">University/Academic Institution</option>
                            <option value="nonprofit">Non-profit Organization</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="org-contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                          <Input id="org-contact" placeholder="Jane Smith" required />
                        </div>
                        <div>
                          <label htmlFor="org-position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                          <Input id="org-position" placeholder="Head of University Relations" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="org-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input id="org-email" type="email" placeholder="contact@company.com" required />
                        </div>
                        <div>
                          <label htmlFor="org-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                          <Input id="org-phone" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="org-interest" className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest</label>
                        <Textarea id="org-interest" placeholder="Describe how you would like to partner with EuroTech Federation and what you hope to achieve" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full bg-eurotech-blue hover:bg-eurotech-dark">
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-4">Stay Informed</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter to receive updates on events, opportunities, and news from the EuroTech network.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
                required
              />
              <Button 
                type="submit" 
                className="bg-eurotech-blue hover:bg-eurotech-dark"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;
