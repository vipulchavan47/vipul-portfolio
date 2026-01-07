import { Home, Code2, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const IconSidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Code2, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 p-3 rounded-2xl bg-background/60 backdrop-blur-xl border border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]">
      {/* Decorative top line */}
      <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent mb-1" />
      
      {navItems.map((item, index) => (
        <Tooltip key={item.label} delayDuration={0}>
          <TooltipTrigger asChild>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`
                group relative flex items-center justify-center w-11 h-11 rounded-xl 
                transition-all duration-300 ease-out
                hover:bg-primary/15 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]
                ${index === 0 
                  ? "bg-primary/20 text-primary shadow-[0_0_15px_-5px_hsl(var(--primary)/0.4)]" 
                  : "text-muted-foreground hover:text-primary"
                }
              `}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              
              <item.icon className="w-5 h-5 relative z-10 stroke-[1.5]" />
              
              {/* Active indicator dot */}
              {index === 0 && (
                <span className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary animate-pulse" />
              )}
            </a>
          </TooltipTrigger>
          <TooltipContent 
            side="right" 
            sideOffset={12}
            className="font-mono text-xs bg-background/95 backdrop-blur-md border-primary/30 px-3 py-1.5"
          >
            <span className="text-primary/60">~/</span>{item.label.toLowerCase()}
          </TooltipContent>
        </Tooltip>
      ))}
      
      {/* Decorative bottom line */}
      <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent mt-1" />
    </aside>
  );
};

export default IconSidebar;
