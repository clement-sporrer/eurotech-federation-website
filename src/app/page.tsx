import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import PillarsSection from "@/components/PillarsSection";
import LinkedInFeed from "@/components/LinkedInFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-eurotech-blue text-foreground">
      <HeroSection />
      <div className="bg-eurotech-gray space-y-8 md:space-y-12 py-16 md:py-20">
        <PartnersSection />
        <PillarsSection />
        <LinkedInFeed />
      </div>
    </main>
  );
}
