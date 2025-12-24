import { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const commands: Record<string, string> = {
  help: `Available commands:
  about     - Learn about me
  skills    - View my technical skills
  projects  - See my projects
  contact   - Get my contact info
  clear     - Clear the terminal
  help      - Show this help message`,
  
  about: `╔══════════════════════════════════════════════════════════════╗
║                        ABOUT ME                              ║
╠══════════════════════════════════════════════════════════════╣
║  Name: Vipul Chavan                                          ║
║  Role: Software Engineer                                     ║
║                                                              ║
║  I'm a passionate developer who loves building               ║
║  elegant solutions to complex problems.                      ║
║                                                              ║
║  Currently focused on web development, creating              ║
║  performant and user-friendly applications.                  ║
╚══════════════════════════════════════════════════════════════╝`,

  skills: `╔══════════════════════════════════════════════════════════════╗
║                      TECHNICAL SKILLS                        ║
╠══════════════════════════════════════════════════════════════╣
║  Languages:    JavaScript, TypeScript, Python, Java          ║
║  Frontend:     React, Next.js, Tailwind CSS, HTML/CSS        ║
║  Backend:      Node.js, Express, REST APIs                   ║
║  Database:     PostgreSQL, MongoDB, MySQL                    ║
║  Tools:        Git, Docker, VS Code, Linux                   ║
║  Cloud:        AWS, Vercel, Netlify                          ║
╚══════════════════════════════════════════════════════════════╝`,

  projects: `╔══════════════════════════════════════════════════════════════╗
║                        PROJECTS                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  [01] E-Commerce Dashboard                                   ║
║       → Full-stack dashboard with analytics                  ║
║       → Tech: React, Node.js, PostgreSQL                     ║
║                                                              ║
║  [02] Real-time Chat App                                     ║
║       → WebSocket-based messaging platform                   ║
║       → Tech: React, Socket.io, MongoDB                      ║
║                                                              ║
║  Type 'projects --open' to view on GitHub                    ║
╚══════════════════════════════════════════════════════════════╝`,

  contact: `╔══════════════════════════════════════════════════════════════╗
║                       CONTACT INFO                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Email:     vipulchavan3301@gmail.com                        ║
║  GitHub:    github.com/vipulchavan47                         ║
║  LinkedIn:  linkedin.com/in/vipulchavan47                    ║
║  LeetCode:  leetcode.com/u/vipulcx                           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝`,
};

type HistoryLine = {
  type: "command" | "output" | "system";
  content: string;
};

const TerminalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }) + ", " + now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const bootSequence = `Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

Last login: ${getCurrentDate()} on tty1
Type 'help' for available commands.
`;

  useEffect(() => {
    if (isOpen) {
      setIsBooting(true);
      setBootText("");
      setHistory([]);
      setInput("");

      let index = 0;
      const timer = setInterval(() => {
        if (index < bootSequence.length) {
          setBootText(bootSequence.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
          setIsBooting(false);
          inputRef.current?.focus();
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, bootText]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setHistory((prev) => [
      ...prev,
      { type: "command", content: `vipul@portfolio:~$ ${cmd}` },
    ]);

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "projects --open") {
      window.open("https://github.com/vipulchavan47", "_blank");
      setHistory((prev) => [
        ...prev,
        { type: "output", content: "Opening GitHub..." },
      ]);
      return;
    }

    if (commands[trimmedCmd]) {
      setHistory((prev) => [
        ...prev,
        { type: "output", content: commands[trimmedCmd] },
      ]);
    } else if (trimmedCmd === "") {
      // Do nothing for empty command
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          content: `Command not found: ${cmd}. Type 'help' for available commands.`,
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  const handleTerminalClick = () => {
    if (!isBooting) {
      inputRef.current?.focus();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="p-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          aria-label="Open Terminal"
        >
          <Terminal className="w-4 h-4 text-foreground" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 bg-[#0d1117] border-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer" />
          </div>
          <span className="flex-1 text-center text-sm text-muted-foreground font-mono">
            {">"}_  vipul@portfolio:~
          </span>
        </div>
        <div
          ref={terminalRef}
          className="p-4 font-mono text-sm min-h-[350px] max-h-[450px] overflow-auto cursor-text"
          onClick={handleTerminalClick}
        >
          {/* Boot sequence */}
          <pre className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
            {bootText.split("\n").map((line, i) => {
              if (line.includes("Last login:")) {
                return (
                  <span key={i} className="text-primary">
                    {line}
                    {"\n"}
                  </span>
                );
              }
              return (
                <span key={i}>
                  {line}
                  {"\n"}
                </span>
              );
            })}
          </pre>

          {/* Command history */}
          {!isBooting &&
            history.map((line, i) => (
              <pre
                key={i}
                className={`whitespace-pre-wrap leading-relaxed ${
                  line.type === "command"
                    ? "text-green-400"
                    : "text-muted-foreground"
                }`}
              >
                {line.content}
              </pre>
            ))}

          {/* Input line */}
          {!isBooting && (
            <div className="flex items-center">
              <span className="text-green-400">vipul@portfolio:~$&nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-sm caret-green-400"
                spellCheck={false}
                autoComplete="off"
              />
              <span className="animate-pulse text-green-400">█</span>
            </div>
          )}

          {isBooting && (
            <span className="animate-pulse text-green-400">█</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TerminalDialog;
