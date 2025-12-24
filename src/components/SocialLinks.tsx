import { FileText, Mail, Github, Twitter, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const actionButtons = [
    { icon: FileText, label: "Resume", href: "#" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Terminal, href: "#", label: "Terminal" },
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
    </div>
  );
};

export default SocialLinks;
