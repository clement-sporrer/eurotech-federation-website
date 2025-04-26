import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowRight, Building, GraduationCap, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState("students");
  const formSectionRef = useRef<HTMLDivElement>(null);
  
  const [isSubmittingStudent, setIsSubmittingStudent] = useState(false);
  const [isSubmittingAssociation, setIsSubmittingAssociation] = useState(false);
  const [isSubmittingOrganization, setIsSubmittingOrganization] = useState(false);
  
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    university: '',
    field: '',
    motivation: ''
  });
  
  const [associationForm, setAssociationForm] = useState({
    name: '',
    university: '',
    contactPerson: '',
    email: '',
    description: '',
    motivation: ''
  });
  
  const [organizationForm, setOrganizationForm] = useState({
    name: '',
    type: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    interests: ''
  });

  const navigateToTab = (tabId: string) => {
    setActiveTab(tabId);
    
    // Scroll to the form section with smooth behavior
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id.replace('student-', '');
    setStudentForm(prev => ({ ...prev, [key]: value }));
  };
  
  const handleAssociationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id.replace('assoc-', '');
    setAssociationForm(prev => ({ ...prev, [key]: value }));
  };
  
  const handleOrganizationChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id.replace('org-', '');
    setOrganizationForm(prev => ({ ...prev, [key]: value }));
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmittingStudent(true);
      
      const payload = {
        name: studentForm.name,
        email: studentForm.email,
        subject: 'Student Application',
        message: `
University: ${studentForm.university}
Field of Study: ${studentForm.field}
Motivation: ${studentForm.motivation}
        `,
        formType: 'student'
      };
      
      const response = await fetch(import.meta.env.VITE_API_URL + '/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const data = await getResponseData(response);
      
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while sending the application');
      }
      
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest! We'll review your application and be in touch soon.",
      });
      
      // Reset the form
      setStudentForm({
        name: '',
        email: '',
        university: '',
        field: '',
        motivation: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "An error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingStudent(false);
    }
  };
  
  const handleAssociationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmittingAssociation(true);
      
      const payload = {
        name: associationForm.contactPerson,
        email: associationForm.email,
        subject: 'Association Application',
        message: `
Association Name: ${associationForm.name}
University: ${associationForm.university}
Contact Person: ${associationForm.contactPerson}
About the Association: ${associationForm.description}
Motivation: ${associationForm.motivation}
        `,
        formType: 'association'
      };
      
      const response = await fetch(import.meta.env.VITE_API_URL + '/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const data = await getResponseData(response);
      
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while sending the application');
      }
      
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest! We'll review your application and be in touch soon.",
      });
      
      // Reset the form
      setAssociationForm({
        name: '',
        university: '',
        contactPerson: '',
        email: '',
        description: '',
        motivation: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "An error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingAssociation(false);
    }
  };
  
  const handleOrganizationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmittingOrganization(true);
      
      const payload = {
        name: organizationForm.contactPerson,
        email: organizationForm.email,
        subject: 'Organization Partnership Inquiry',
        message: `
Organization Name: ${organizationForm.name}
Organization Type: ${organizationForm.type}
Contact Person: ${organizationForm.contactPerson}
Position: ${organizationForm.position}
Phone: ${organizationForm.phone || 'Not provided'}
Partnership Interests: ${organizationForm.interests}
        `,
        formType: 'organization'
      };
      
      const response = await fetch(import.meta.env.VITE_API_URL + '/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const data = await getResponseData(response);
      
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while sending the inquiry');
      }
      
      toast({
        title: "Inquiry submitted!",
        description: "Thank you for your interest! We'll be in touch shortly to discuss partnership opportunities.",
      });
      
      // Reset the form
      setOrganizationForm({
        name: '',
        type: '',
        contactPerson: '',
        position: '',
        email: '',
        phone: '',
        interests: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "An error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingOrganization(false);
    }
  };
  
  // Helper function to parse API response
  const getResponseData = async (response: Response) => {
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
    return data;
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
        <section className="bg-eurotech-blue text-white pt-40 pb-24">
          <div className="container-section">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray">Join Our Network</h1>
              <p className="text-xl mb-6">
                EuroTech Federation offers multiple ways to get involved in Europe's largest student-led tech network.
              </p>
            </div>
          </div>
        </section>

        {/* Join Options Section */}
        <section className="container-section pt-24">
          <div className="text-center mb-16">
            <h2 className="section-title">How to Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a student, association, academic institution, or company, there's a place for you in our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover bg-eurotech-blue">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-2xl font-heading text-white">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-white mb-6">
                  Join our network as an individual student to access events, opportunities, and connect with peers across Europe.
                </CardDescription>
                <ActionButton variant="primary" onClick={() => navigateToTab("students")}>
                  Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                </ActionButton>
              </CardContent>
            </Card>

            <Card className="card-hover bg-eurotech-blue">
              <CardHeader>
                <User className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-2xl font-heading text-white">For Associations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-white mb-6">
                  Student associations can join our federation to collaborate on events, share resources, and expand your network.
                </CardDescription>
                <ActionButton variant="primary" onClick={() => navigateToTab("associations")}>
                  Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
                </ActionButton>
              </CardContent>
            </Card>

            <Card className="card-hover bg-eurotech-blue">
              <CardHeader>
                <Building className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-2xl font-heading text-white">For Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-white mb-6">
                  Companies and institutions can partner with us to access talent, sponsor events, and promote innovation.
                </CardDescription>
                <ActionButton variant="primary" onClick={() => navigateToTab("organizations")}>
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </ActionButton>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Tabs */}
        <section ref={formSectionRef} className="bg-eurotech-gray py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center">Apply to Join</h2>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-eurotech-blue text-white">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="associations">Associations</TabsTrigger>
                <TabsTrigger value="organizations">Organizations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="students">
                <Card className="bg-eurotech-gray border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl text-eurotech-blue">Student Application</CardTitle>
                    <CardDescription>
                      Join our network as an individual student to access opportunities and connect with peers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleStudentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="student-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <Input 
                            id="student-name" 
                            placeholder="John Doe" 
                            required 
                            value={studentForm.name}
                            onChange={handleStudentChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="student-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input 
                            id="student-email" 
                            type="email" 
                            placeholder="you@example.com" 
                            required 
                            value={studentForm.email}
                            onChange={handleStudentChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="student-university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
                          <Input 
                            id="student-university" 
                            placeholder="Imperial College London" 
                            required 
                            value={studentForm.university}
                            onChange={handleStudentChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="student-field" className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                          <Input 
                            id="student-field" 
                            placeholder="Computer Science" 
                            required 
                            value={studentForm.field}
                            onChange={handleStudentChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="student-motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join?</label>
                        <Textarea 
                          id="student-motivation" 
                          placeholder="Tell us why you're interested in joining EuroTech Federation" 
                          rows={4} 
                          required 
                          value={studentForm.motivation}
                          onChange={handleStudentChange}
                        />
                      </div>
                      <ActionButton 
                        type="submit" 
                        variant="primary" 
                        className="w-full"
                        disabled={isSubmittingStudent}
                      >
                        {isSubmittingStudent ? 'Submitting...' : 'Submit Application'}
                      </ActionButton>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="associations">
                <Card className="bg-eurotech-gray border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl text-eurotech-blue">Association Application</CardTitle>
                    <CardDescription>
                      Student associations can apply to become official members of the EuroTech Federation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAssociationSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="assoc-name" className="block text-sm font-medium text-gray-700 mb-1">Association Name</label>
                          <Input 
                            id="assoc-name" 
                            placeholder="Imperial AI Society" 
                            required 
                            value={associationForm.name}
                            onChange={handleAssociationChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="assoc-university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
                          <Input 
                            id="assoc-university" 
                            placeholder="Imperial College London" 
                            required 
                            value={associationForm.university}
                            onChange={handleAssociationChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="assoc-contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                          <Input 
                            id="assoc-contactPerson" 
                            placeholder="John Doe" 
                            required 
                            value={associationForm.contactPerson}
                            onChange={handleAssociationChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="assoc-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input 
                            id="assoc-email" 
                            type="email" 
                            placeholder="contact@association.org" 
                            required 
                            value={associationForm.email}
                            onChange={handleAssociationChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="assoc-description" className="block text-sm font-medium text-gray-700 mb-1">About the Association</label>
                        <Textarea 
                          id="assoc-description" 
                          placeholder="Tell us about your association, its purpose, and activities" 
                          rows={4} 
                          required 
                          value={associationForm.description}
                          onChange={handleAssociationChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="assoc-motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join?</label>
                        <Textarea 
                          id="assoc-motivation" 
                          placeholder="How do you envision your association contributing to and benefiting from the EuroTech Federation?" 
                          rows={4} 
                          required 
                          value={associationForm.motivation}
                          onChange={handleAssociationChange}
                        />
                      </div>
                      <ActionButton 
                        type="submit" 
                        variant="primary" 
                        className="w-full"
                        disabled={isSubmittingAssociation}
                      >
                        {isSubmittingAssociation ? 'Submitting...' : 'Submit Application'}
                      </ActionButton>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="organizations">
                <Card className="bg-eurotech-gray border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl text-eurotech-blue">Organization Partnership Inquiry</CardTitle>
                    <CardDescription>
                      Companies and institutions can partner with EuroTech Federation for talent recruitment, event sponsorship, and more.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleOrganizationSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="org-name" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                          <Input 
                            id="org-name" 
                            placeholder="Tech Company Inc." 
                            required 
                            value={organizationForm.name}
                            onChange={handleOrganizationChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="org-type" className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                          <select 
                            id="org-type" 
                            className="w-full rounded-md border border-input bg-background px-3 py-2"
                            required
                            value={organizationForm.type}
                            onChange={handleOrganizationChange}
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
                          <label htmlFor="org-contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                          <Input 
                            id="org-contactPerson" 
                            placeholder="Jane Smith" 
                            required 
                            value={organizationForm.contactPerson}
                            onChange={handleOrganizationChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="org-position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                          <Input 
                            id="org-position" 
                            placeholder="Head of University Relations" 
                            required 
                            value={organizationForm.position}
                            onChange={handleOrganizationChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="org-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input 
                            id="org-email" 
                            type="email" 
                            placeholder="contact@company.com" 
                            required 
                            value={organizationForm.email}
                            onChange={handleOrganizationChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="org-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                          <Input 
                            id="org-phone" 
                            placeholder="+1 (555) 123-4567"
                            value={organizationForm.phone}
                            onChange={handleOrganizationChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="org-interests" className="block text-sm font-medium text-gray-700 mb-1">Partnership Interests</label>
                        <Textarea 
                          id="org-interests" 
                          placeholder="Tell us how you'd like to partner with EuroTech Federation" 
                          rows={4} 
                          required 
                          value={organizationForm.interests}
                          onChange={handleOrganizationChange}
                        />
                      </div>
                      <ActionButton 
                        type="submit" 
                        variant="primary" 
                        className="w-full"
                        disabled={isSubmittingOrganization}
                      >
                        {isSubmittingOrganization ? 'Submitting...' : 'Submit Inquiry'}
                      </ActionButton>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;
