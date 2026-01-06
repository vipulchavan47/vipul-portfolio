import { User, FolderOpen, Home, Briefcase, Send } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const IconSidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: FolderOpen, label: "Projects", href: "#projects" },
    { icon: Send, label: "Contact", href: "#contact" },
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
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 p-2 rounded-2xl bg-card/80 backdrop-blur-md border border-border">
      {navItems.map((item, index) => (
        <Tooltip key={item.label} delayDuration={100}>
          <TooltipTrigger asChild>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:bg-primary/20 ${
                index === 0 ? "bg-primary/30 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-mono text-xs">
            {item.label}
          </TooltipContent>
        </Tooltip>
      ))}
    </aside>
  );
};

export default IconSidebar;
