import { useState } from "react";
import { User, Code, FolderOpen, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PortalGunIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" style={{ filter: "drop-shadow(0 0 4px #39FF14)" }}>
    <defs>
      <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#39FF14" />
        <stop offset="50%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="#39FF14" stopOpacity="0.3" />
      </radialGradient>
    </defs>
    <ellipse cx="12" cy="12" rx="8" ry="8" fill="url(#portalGlow)" opacity="0.4" />
    <ellipse cx="12" cy="12" rx="5" ry="5" fill="#39FF14" opacity="0.7" />
    <ellipse cx="12" cy="12" rx="2.5" ry="2.5" fill="#fff" opacity="0.9" />
  </svg>
);

const sections = [
  { id: "about", label: "About", description: "Who is this guy?", icon: User },
  { id: "skills", label: "Skills", description: "Tech stack & abilities", icon: Code },
  { id: "projects", label: "Projects", description: "Cool stuff built", icon: FolderOpen },
  { id: "contact", label: "Contact", description: "Get in touch", icon: Mail },
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

// Rick and Morty Portal Component
const RickPortal = () => (
  <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80 backdrop-blur-sm">
    <div className="relative w-48 h-48">
      {/* Outer glow pulse */}
      <div className="absolute inset-0 rounded-full bg-[#39FF14]/30 blur-3xl animate-pulse" />
      
      {/* Electric sparks around portal */}
      <div className="absolute -inset-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-gradient-to-t from-transparent via-[#39FF14] to-transparent opacity-80"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 45}deg) translateY(-100px)`,
              animation: `pulse 0.3s ease-in-out ${i * 0.1}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Main portal - outer ring with glow */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #39FF14, #00ff88, #39FF14, #00ff88, #39FF14)',
          animation: 'spin 1s linear infinite',
          boxShadow: '0 0 60px #39FF14, 0 0 100px #39FF14, inset 0 0 60px #39FF14',
        }}
      />
      
      {/* Second swirl layer */}
      <div 
        className="absolute inset-3 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, #00ff88, #39FF14, #00ff88, #39FF14, #00ff88)',
          animation: 'spin 0.8s linear infinite reverse',
          boxShadow: 'inset 0 0 40px rgba(0,255,136,0.8)',
        }}
      />
      
      {/* Third swirl layer - creates depth */}
      <div 
        className="absolute inset-6 rounded-full"
        style={{
          background: 'conic-gradient(from 90deg, #39FF14, #7fff7f, #39FF14, #00ff88, #39FF14)',
          animation: 'spin 0.6s linear infinite',
          boxShadow: 'inset 0 0 30px rgba(57,255,20,0.9)',
        }}
      />
      
      {/* Inner swirl - fastest */}
      <div 
        className="absolute inset-10 rounded-full"
        style={{
          background: 'conic-gradient(from 270deg, #7fff7f, #39FF14, #bfffbf, #39FF14, #7fff7f)',
          animation: 'spin 0.4s linear infinite reverse',
        }}
      />
      
      {/* Bright center vortex */}
      <div 
        className="absolute inset-14 rounded-full"
        style={{
          background: 'radial-gradient(circle, #ffffff 0%, #bfffbf 30%, #7fff7f 60%, #39FF14 100%)',
          animation: 'pulse 0.2s ease-in-out infinite alternate',
          boxShadow: '0 0 30px #fff, 0 0 60px #39FF14',
        }}
      />
      
      {/* Center white core */}
      <div 
        className="absolute inset-[72px] rounded-full bg-white"
        style={{
          boxShadow: '0 0 20px #fff, 0 0 40px #39FF14',
          animation: 'pulse 0.15s ease-in-out infinite alternate',
        }}
      />
      
      {/* Spiral lines overlay */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ animation: 'spin 2s linear infinite' }}>
        <defs>
          <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#39FF14" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00ff88" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#39FF14" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d="M50,10 Q70,30 50,50 Q30,70 50,90"
          fill="none"
          stroke="url(#spiralGrad)"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M10,50 Q30,30 50,50 Q70,70 90,50"
          fill="none"
          stroke="url(#spiralGrad)"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#39FF14]"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animation: `ping ${0.5 + Math.random() * 0.5}s ease-in-out ${i * 0.1}s infinite`,
            boxShadow: '0 0 10px #39FF14',
          }}
        />
      ))}
    </div>
    
    {/* Portal opening text */}
    <p className="absolute bottom-4 text-[#39FF14] font-mono text-xs animate-pulse">
      Opening interdimensional portal...
    </p>
  </div>
);

const PortalNavigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (id: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(id);
      setIsTransitioning(false);
    }, 1200);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(null);
      setIsTransitioning(false);
    }, 1200);
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
          {/* Rick and Morty Portal Transition */}
          {isTransitioning && <RickPortal />}

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
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleNavigate(section.id)}
                      className="relative p-4 rounded-xl border border-border hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all duration-300 text-left group hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-muted-foreground/10 group-hover:bg-[#39FF14]/20 flex items-center justify-center transition-all duration-300">
                            <IconComponent className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[#39FF14] transition-colors duration-300" style={{ filter: "drop-shadow(0 0 3px currentColor)" }} />
                          </div>
                          <span className="font-mono text-sm font-medium text-foreground">
                            {section.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-8">
                          {section.description}
                      </p>
                      </div>
                    </button>
                  );
                })}
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
