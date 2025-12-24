import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const TerminalDialog = () => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit', 
      year: 'numeric'
    }) + ', ' + now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const fullText = `Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

Last login: ${getCurrentDate()} on tty1
Type 'help' for available commands.

vipul@portfolio:~$ `;

  useEffect(() => {
    if (isOpen) {
      setText("");
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 15);
      
      return () => clearInterval(timer);
    }
  }, [isOpen, fullText]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          aria-label="Open Terminal"
        >
          <Terminal className="w-4 h-4 text-muted-foreground" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 bg-[#1a1a2e] border-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#252540] border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer" />
          </div>
          <span className="flex-1 text-center text-sm text-muted-foreground font-mono">
            {">"}_  vipul@portfolio:~
          </span>
        </div>
        <div className="p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-auto">
          <pre className="whitespace-pre-wrap leading-relaxed">
            <span className="text-muted-foreground">{text.split('\n').map((line, i) => {
              if (line.includes('Last login:')) {
                return <span key={i} className="text-primary">{line}{'\n'}</span>;
              }
              if (line.includes('vipul@portfolio')) {
                return <span key={i} className="text-green-400">{line}</span>;
              }
              return <span key={i}>{line}{'\n'}</span>;
            })}</span>
            <span className="animate-pulse text-green-400">█</span>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TerminalDialog;
