import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Terminal } from "lucide-react";
import notFoundGif from "@/assets/404.gif";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Terminal-style container */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-md mx-auto">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">error.sh</span>
          </div>

          {/* GIF */}
          <div className="mb-6">
            <img 
              src={notFoundGif} 
              alt="404 - Page not found" 
              className="w-48 h-48 mx-auto rounded-lg object-contain"
            />
          </div>

          {/* Glitch 404 text */}
          <h1 className="text-6xl font-bold font-mono mb-4 text-primary relative glitch-text">
            404
          </h1>

          {/* Error message with terminal styling */}
          <div className="font-mono text-sm text-muted-foreground mb-6">
            <p className="flex items-center justify-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary">$</span> cd {location.pathname}
            </p>
            <p className="text-destructive">
              bash: {location.pathname}: No such file or directory
            </p>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            Looks like you've ventured into the void...
          </p>

          {/* Return button */}
          <Link to="/">
            <Button 
              className="group transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Home className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0%, 90%, 100% {
            text-shadow: none;
          }
          92% {
            text-shadow: -2px 0 hsl(var(--primary)), 2px 0 hsl(var(--accent));
          }
          94% {
            text-shadow: 2px 0 hsl(var(--primary)), -2px 0 hsl(var(--accent));
          }
          96% {
            text-shadow: -1px 0 hsl(var(--accent)), 1px 0 hsl(var(--primary));
          }
          98% {
            text-shadow: 1px 0 hsl(var(--accent)), -1px 0 hsl(var(--primary));
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
