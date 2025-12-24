import { FileText, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import TerminalDialog from "./TerminalDialog";

const SocialLinks = () => {
  const actionButtons = [
    { icon: FileText, label: "Resume", href: "#" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/vipulchavan47", label: "GitHub" },
    { icon: Mail, href: "mailto:vipulchavan3301@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {actionButtons.map((button) => (
        <Button
          key={button.label}
          variant="outline"
          size="sm"
          className="gap-2 font-mono text-xs"
          asChild
        >
          <a href={button.href}>
            <button.icon className="w-4 h-4" />
            {button.label}
          </a>
        </Button>
      ))}

      <div className="w-px h-6 bg-border mx-2" />

      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-4 h-4 text-muted-foreground" />
        </a>
      ))}
      
      <TerminalDialog />
    </div>
  );
};

export default SocialLinks;
