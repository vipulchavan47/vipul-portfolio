import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContributionGraph from "@/components/ContributionGraph";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ContributionGraph />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-sm text-muted-foreground font-mono">
            © 2024 Your Name. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
