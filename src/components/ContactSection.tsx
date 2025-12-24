import { useState } from "react";
import { Calendar, Mail, Twitter, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a free call",
      description: "30-minute strategy session",
      href: "#",
    },
    {
      icon: Mail,
      title: "hello@example.com",
      description: "Quick inquiries & questions",
      href: "mailto:hello@example.com",
    },
    {
      icon: Twitter,
      title: "Connect on X",
      description: "Follow for updates & insights",
      href: "https://twitter.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 
          className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Let's Work Together
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Methods */}
          <div 
            className="bg-card border border-border rounded-xl p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.85s" }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Choose your preferred method to connect and let's discuss your project.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <method.icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {method.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Response within 24 hours • Available for hire
            </p>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-card border border-border rounded-xl p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Send a Message
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Prefer to write? Fill out the form and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-secondary/30 border-border"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-secondary/30 border-border"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-secondary/30 border-border resize-none"
              />
              <Button type="submit" className="w-full gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
