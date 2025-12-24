import { useState } from "react";
import { Send } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:vipulchavan3301@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the message.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-2xl">
        <h3 
          className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Let's Connect
        </h3>

        <div 
          className="bg-card border border-border rounded-xl p-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.85s" }}
        >
          <h4 className="text-xl font-semibold text-foreground mb-2">
            Send a Message
          </h4>
          <p className="text-sm text-muted-foreground mb-6">
            Have a question or want to work together? Fill out the form below.
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
    </section>
  );
};

export default ContactSection;
