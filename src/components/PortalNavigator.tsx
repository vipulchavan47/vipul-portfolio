import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PortalGunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <ellipse cx="12" cy="12" rx="8" ry="8" fill="#39FF14" opacity="0.3" />
    <ellipse cx="12" cy="12" rx="5" ry="5" fill="#39FF14" opacity="0.6" />
    <ellipse cx="12" cy="12" rx="2" ry="2" fill="#39FF14" />
  </svg>
);

const sections = [
  { id: "about", label: "About", description: "Who is this guy?" },
  { id: "skills", label: "Skills", description: "Tech stack & abilities" },
  { id: "projects", label: "Projects", description: "Cool stuff built" },
  { id: "contact", label: "Contact", description: "Get in touch" },
];

const sectionContent: Record<string, React.ReactNode> = {
  about: (
    <div className="space-y-3 text-sm">
      <p className="text-foreground">
        Hey! I'm <span className="text-[#39FF14] font-semibold">Vipul Chavan</span>, a passionate developer who loves building things that live on the internet.
      </p>
      <p className="text-muted-foreground">
        I specialize in Java, Python, and web technologies. Currently exploring the endless possibilities of full-stack development and always eager to learn new technologies.
      </p>
      <div className="pt-2 border-t border-[#39FF14]/20">
        <p className="text-xs text-[#39FF14]/70 font-mono">// Dimension C-137 resident</p>
      </div>
    </div>
  ),
  skills: (
    <div className="space-y-3 text-sm">
      <div className="grid grid-cols-2 gap-2">
        {["Java", "Python", "C", "JavaScript", "MySQL", "HTML/CSS", "React", "Git"].map((skill) => (
          <div key={skill} className="flex items-center gap-2 p-2 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20">
            <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
            <span className="text-foreground text-xs font-mono">{skill}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#39FF14]/70 font-mono pt-2">// More skills loading from multiverse...</p>
    </div>
  ),
  projects: (
    <div className="space-y-3 text-sm">
      <div className="p-3 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20">
        <h4 className="font-semibold text-foreground">Expense Tracker</h4>
        <p className="text-xs text-muted-foreground mt-1">Track your expenses with charts & analytics</p>
        <div className="flex gap-1 mt-2">
          {["React", "Node.js", "MongoDB"].map((tech) => (
            <span key={tech} className="text-[10px] px-1.5 py-0.5 bg-[#39FF14]/20 rounded text-[#39FF14]">{tech}</span>
          ))}
        </div>
      </div>
      <div className="p-3 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20">
        <h4 className="font-semibold text-foreground">Employee Management</h4>
        <p className="text-xs text-muted-foreground mt-1">Full-stack CRUD application</p>
        <div className="flex gap-1 mt-2">
          {["Java", "Spring Boot", "MySQL"].map((tech) => (
            <span key={tech} className="text-[10px] px-1.5 py-0.5 bg-[#39FF14]/20 rounded text-[#39FF14]">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  ),
  contact: (
    <div className="space-y-3 text-sm">
      <div className="space-y-2">
        <a href="mailto:vipulchavan3301@gmail.com" className="flex items-center gap-2 p-2 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 hover:bg-[#39FF14]/20 transition-colors">
          <span className="text-[#39FF14]">✉</span>
          <span className="text-foreground text-xs font-mono">vipulchavan3301@gmail.com</span>
        </a>
        <a href="https://github.com/vipulchavan47" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 hover:bg-[#39FF14]/20 transition-colors">
          <span className="text-[#39FF14]">⌘</span>
          <span className="text-foreground text-xs font-mono">github.com/vipulchavan47</span>
        </a>
        <a href="https://www.linkedin.com/in/vipulchavan47/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 hover:bg-[#39FF14]/20 transition-colors">
          <span className="text-[#39FF14]">in</span>
          <span className="text-foreground text-xs font-mono">linkedin.com/in/vipulchavan47</span>
        </a>
      </div>
      <p className="text-xs text-[#39FF14]/70 font-mono pt-2">// Transmissions welcome across dimensions</p>
    </div>
  ),
};

const PortalNavigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (id: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(id);
      setIsTransitioning(false);
    }, 500);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(null);
      setIsTransitioning(false);
    }, 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveSection(null);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) handleClose();
      else setIsOpen(true);
    }}>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors relative group"
          aria-label="Portal Navigator"
        >
          <PortalGunIcon />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-[#39FF14]/30 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-center font-mono flex items-center justify-center gap-2">
            <span className="text-[#39FF14]">⌬</span>
            {activeSection ? sections.find(s => s.id === activeSection)?.label : "Portal Navigator"}
            <span className="text-[#39FF14]">⌬</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative min-h-[300px]">
          {/* Portal Transition Effect */}
          {isTransitioning && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-[#39FF14]/20 blur-3xl animate-pulse" />
                {/* Portal rings */}
                <div className="w-32 h-32 rounded-full border-4 border-[#39FF14] animate-spin shadow-[0_0_30px_#39FF14,inset_0_0_30px_#39FF14]" />
                <div className="absolute inset-2 rounded-full border-2 border-[#00ff88] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.5s' }} />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#39FF14] to-[#00ff88] opacity-80 animate-pulse" />
                <div className="absolute inset-6 rounded-full bg-[#39FF14] opacity-60" />
                {/* Center swirl */}
                <div className="absolute inset-8 rounded-full bg-gradient-radial from-white/50 to-transparent" />
              </div>
            </div>
          )}

          {/* Main Menu */}
          {!activeSection && !isTransitioning && (
            <div className="p-4 animate-fade-in">
              {/* Portal Gun */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-8 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-lg shadow-lg" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#39FF14] to-[#00ff88] shadow-[0_0_20px_#39FF14] animate-pulse" />
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-400" />
                </div>
              </div>

              {/* Portal Options */}
              <div className="grid grid-cols-2 gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigate(section.id)}
                    className="relative p-4 rounded-xl border border-border hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all duration-300 text-left group"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/30 group-hover:bg-[#39FF14] group-hover:shadow-[0_0_10px_#39FF14] transition-all duration-300" />
                        <span className="font-mono text-sm font-medium text-foreground">
                          {section.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5">
                        {section.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
                Click a portal to explore • Dimension C-137
              </p>
            </div>
          )}

          {/* Section Content */}
          {activeSection && !isTransitioning && (
            <div className="p-4 animate-fade-in">
              {/* Portal Frame */}
              <div className="relative p-4 rounded-2xl border-2 border-[#39FF14]/50 bg-gradient-to-b from-[#39FF14]/5 to-transparent shadow-[0_0_20px_#39FF14/20,inset_0_0_20px_#39FF14/10]">
                {/* Swirling edge effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/20 via-transparent to-[#39FF14]/20 animate-pulse" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {sectionContent[activeSection]}
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={handleBack}
                className="mt-4 w-full p-2 rounded-lg border border-[#39FF14]/30 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 font-mono text-sm text-muted-foreground hover:text-[#39FF14] flex items-center justify-center gap-2"
              >
                <span>←</span> Back to Portal Menu
              </button>
            </div>
          )}

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#39FF14]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#39FF14]/10 rounded-full blur-xl" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortalNavigator;
