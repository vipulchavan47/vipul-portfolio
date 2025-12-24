import { useState, useEffect } from "react";
import { Code, MapPin, Mail, Clock, User, Monitor } from "lucide-react";
import avatar from "@/assets/avatar.png";
import TechBadge from "./TechBadge";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  const infoItems = [
    { icon: Code, label: "Software Engineer" },
    { icon: MapPin, label: "Navi Mumbai, India" },
    { icon: Mail, label: "vipulchavan3301@gmail.com" },
    { icon: Clock, label: formatTime(currentTime), sublabel: "// IST" },
    { icon: Monitor, label: "Ubuntu" },
    { icon: User, label: "he/him" },
  ];

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 animate-fade-in">
          <img
            src={avatar}
            alt="Profile"
            className="w-20 h-20 rounded-2xl object-cover ring-2 ring-border"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
                Vipul Chavan
              </h1>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Available for work
              </span>
            </div>
            <p className="font-mono text-muted-foreground">Software Tinkerer</p>
          </div>
        </div>

        {/* Info Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          style={{ animationDelay: "0.1s" }}
        >
          {infoItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-sm opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-foreground">{item.label}</span>
              {item.sublabel && (
                <span className="text-muted-foreground text-xs">{item.sublabel}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bio */}
        <div 
          className="mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="font-mono text-muted-foreground leading-relaxed">
            I'm an Information Technology undergraduate (B.E. – IT, 2026) with a strong foundation in{" "}
            <TechBadge name="Java" color="typescript" /> and{" "}
            <TechBadge name="MySQL" color="react" />.
            I enjoy building efficient software solutions, solving real-world problems through code, 
            and strengthening my problem-solving skills through consistent DSA practice.
          </p>
        </div>


        {/* Action Buttons & Social Links */}
        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
