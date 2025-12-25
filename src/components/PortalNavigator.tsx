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
  { id: "about", label: "About", href: "#about", description: "Who is this guy?" },
  { id: "skills", label: "Skills", href: "#skills", description: "Tech stack & abilities" },
  { id: "projects", label: "Projects", href: "#projects", description: "Cool stuff built" },
  { id: "contact", label: "Contact", href: "#contact", description: "Get in touch" },
];

const PortalNavigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePortal, setActivePortal] = useState<string | null>(null);

  const handleNavigate = (href: string, id: string) => {
    setActivePortal(id);
    setTimeout(() => {
      setIsOpen(false);
      setActivePortal(null);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors relative group"
          aria-label="Portal Navigator"
        >
          <PortalGunIcon />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-[#39FF14]/30">
        <DialogHeader>
          <DialogTitle className="text-center font-mono flex items-center justify-center gap-2">
            <span className="text-[#39FF14]">⌬</span>
            Portal Navigator
            <span className="text-[#39FF14]">⌬</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative p-4">
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
                onClick={() => handleNavigate(section.href, section.id)}
                className={`
                  relative p-4 rounded-xl border transition-all duration-300 text-left
                  ${activePortal === section.id 
                    ? "border-[#39FF14] bg-[#39FF14]/20 scale-95" 
                    : "border-border hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5"
                  }
                `}
              >
                {/* Portal Effect */}
                <div className={`
                  absolute inset-0 rounded-xl overflow-hidden
                  ${activePortal === section.id ? "opacity-100" : "opacity-0"}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/40 to-[#00ff88]/40 animate-pulse" />
                  <div className="absolute inset-2 rounded-lg border-2 border-[#39FF14] animate-ping" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${activePortal === section.id 
                        ? "bg-[#39FF14] shadow-[0_0_10px_#39FF14]" 
                        : "bg-muted-foreground/30"
                      }
                    `} />
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

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#39FF14]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#39FF14]/10 rounded-full blur-xl" />
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
            Click a portal to navigate • Dimension C-137
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortalNavigator;
