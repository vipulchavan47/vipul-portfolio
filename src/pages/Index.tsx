import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContributionGraph from "@/components/ContributionGraph";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle grid background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(220 10% 12% / 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(220 10% 12% / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <ContributionGraph />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
