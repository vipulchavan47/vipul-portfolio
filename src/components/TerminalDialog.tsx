import { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const neofetch = `
       _____       vipul@portfolio
   ___|_____|___   ----------------
  |   ▀▀▀▀▀▀▀   |  OS: Fedora 41 (Workstation)
  |  ███   ███  |  Host: portfolio.local
  |  ███   ███  |  Kernel: 6.12.0-fc41
  |  ▀▀▀▀▀▀▀▀▀  |  Shell: zsh 5.9
  |_____________|  DE: GNOME 47
       ╱   ╲        Terminal: gnome-terminal
      ╱     ╲       CPU: Coffee @ 99%
                    Memory: 8GB / ∞
                    Uptime: since 2026
                    Status: Building cool stuff ⚡
`;

const commands: Record<string, string | (() => string)> = {
  help: `Available commands:
  about      - Learn about me
  skills     - View my technical skills
  projects   - See my projects
  contact    - Get my contact info
  whoami     - Who am I?
  ls         - List contents
  neofetch   - System info (flex mode)
  pwd        - Print working directory
  cat        - Meow? 🐱
  sudo       - Nice try...
  rm -rf /   - Definitely not
  clear      - Clear the terminal
  help       - Show this help message
  
  Hint: Try 'ls skills' or 'ls projects'`,
  
  about: `╔══════════════════════════════════════════════════════════════╗
║                        ABOUT ME                              ║
╠══════════════════════════════════════════════════════════════╣
║  Name: Vipul Chavan                                          ║
║  Role: Software Engineer                                     ║
║  Education: B.E. in Information Technology (2026)            ║
║  Location: Navi Mumbai, India                                ║
║                                                              ║
║  I'm an IT undergraduate with a strong foundation in         ║
║  Java and MySQL. I enjoy building efficient software         ║
║  solutions, solving real-world problems through code,        ║
║  and strengthening my problem-solving skills through         ║
║  consistent DSA practice.                                    ║
╚══════════════════════════════════════════════════════════════╝`,

  skills: `╔══════════════════════════════════════════════════════════════╗
║                      TECHNICAL SKILLS                        ║
╠══════════════════════════════════════════════════════════════╣
║  Languages:    Java, Python, C, JavaScript                   ║
║  Frontend:     HTML, CSS, JavaScript                         ║
║  Backend:      Java, JDBC                                    ║
║  Database:     MySQL                                         ║
║  Tools:        Git, GitHub, VS Code, IntelliJ IDEA           ║
║  OS:           Linux (Fedora 🎩)                             ║
║  Frameworks:   JavaFX, Swing                                 ║
╚══════════════════════════════════════════════════════════════╝`,

  projects: `╔══════════════════════════════════════════════════════════════╗
║                        PROJECTS                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  [01] Expense Tracker Application                            ║
║       → Desktop app to record & manage daily expenses        ║
║       → CRUD operations, filtering, summary reports          ║
║       → Tech: Java, MySQL, JDBC, JavaFX                      ║
║                                                              ║
║  [02] Employee Management Application                        ║
║       → Java-based system to manage employee records         ║
║       → Complete CRUD functionality with database            ║
║       → Tech: Java, MySQL, Swing                             ║
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

  whoami: `vipul_chavan
A software engineer who thinks debugging is just aggressive negotiating with the code.
Currently running on caffeine and curiosity.
Status: Compiling dreams... ⚙️`,

  neofetch: neofetch,

  pwd: `/home/vipul/portfolio`,

  cat: `😺 Meow! Did you mean 'cat <filename>'?
Available files: resume.pdf, motivation.txt, coffee_addiction.log

Try: cat motivation.txt`,

  "cat motivation.txt": `📄 motivation.txt
-------------------
"First, solve the problem. Then, write the code."
                                    - John Johnson

Current motivation level: ████████░░ 80%
Coffee level: ██████████ 100%
Bugs fixed today: 42 (nice)`,

  "cat resume.pdf": `📄 Opening resume.pdf...
Just kidding, this is a terminal! 
Visit my LinkedIn or GitHub for the real deal. 😄`,

  "cat coffee_addiction.log": `[INFO] 06:00 - First coffee of the day
[INFO] 08:30 - Second coffee, debugging begins
[WARN] 11:00 - Third coffee, still debugging
[ERROR] 14:00 - Fourth coffee, considering career change
[INFO] 16:00 - Bug found! Fifth coffee in celebration
[DEBUG] 18:00 - It was a missing semicolon. Again.`,

  ls: `drwxr-xr-x  projects/
drwxr-xr-x  skills/
-rw-r--r--  about.md
-rw-r--r--  resume.pdf
-rw-r--r--  motivation.txt
-rw-r--r--  coffee_addiction.log`,

  "ls skills": `📁 skills/
├── languages/
│   ├── java.rs        ⭐⭐⭐⭐⭐
│   ├── python.py      ⭐⭐⭐⭐
│   ├── javascript.js  ⭐⭐⭐
│   └── c.c            ⭐⭐⭐
├── databases/
│   └── mysql.sql      ⭐⭐⭐⭐
├── tools/
│   ├── git            ⭐⭐⭐⭐
│   ├── linux          ⭐⭐⭐⭐
│   └── vscode         ⭐⭐⭐⭐⭐
└── soft_skills/
    ├── problem_solving ⭐⭐⭐⭐⭐
    └── debugging       ⭐⭐⭐⭐ (it's a love-hate thing)`,

  "ls projects": `📁 projects/
├── expense-tracker/     [Java, MySQL, JavaFX]
├── employee-manager/    [Java, MySQL, Swing]
├── portfolio-website/   [React, TypeScript] ← you are here
└── secret-project/      [Coming Soon™]`,

  sudo: `[sudo] password for vipul: ********
Nice try! But you don't have sudo privileges here. 🔒
This incident will be reported... just kidding! 😄`,

  "rm -rf /": `🚫 Permission denied.
What did you think would happen? 😅
System integrity: ████████████ 100% (still safe)`,

  "sudo rm -rf /": `🚫 ABSOLUTELY NOT.
I appreciate the creativity, but let's keep this portfolio intact! 🛡️`,

  exit: `Goodbye! Thanks for visiting my terminal. 👋
(The terminal stays open because I enjoy your company)`,
};

type HistoryLine = {
  type: "command" | "output" | "system" | "fedora";
  content: string;
};

const TerminalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState("");
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);
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

  const bootSequence = `Welcome to Fedora 41 (Workstation Edition)
Kernel: Linux 6.12.0-fc41.x86_64

 * Documentation:  https://docs.fedoraproject.org
 * Community:      https://ask.fedoraproject.org

Last login: ${getCurrentDate()} on pts/0
Type 'help' for available commands. Try 'neofetch' for fun! 🎩
`;

  // Easter egg: Ctrl+Shift+H for hidden message
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        if (isOpen && !isBooting) {
          setEasterEggTriggered(true);
          setHistory((prev) => [
            ...prev,
            { type: "fedora", content: `
🎩 SECRET UNLOCKED! 🎩
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You found the easter egg! (Ctrl+Shift+H)

Fun facts about me:
• I debug in my dreams (it's concerning)
• My git commit messages are poetry
• I believe tabs > spaces (fight me)
• I've mass debugged 47 times (and counting)
• My favorite HTTP status is 418 (I'm a teapot)

Thanks for exploring! You're officially cool. 😎
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━` },
          ]);
          setTimeout(() => setEasterEggTriggered(false), 3000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isBooting]);

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
      }, 8);

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
      { type: "command", content: `vipul@fedora:~$ ${cmd}` },
    ]);

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "projects --open") {
      window.open("https://github.com/vipulchavan47", "_blank");
      setHistory((prev) => [
        ...prev,
        { type: "output", content: "Opening GitHub... 🚀" },
      ]);
      return;
    }

    const commandResult = commands[trimmedCmd];
    if (commandResult) {
      const output = typeof commandResult === 'function' ? commandResult() : commandResult;
      setHistory((prev) => [
        ...prev,
        { type: "output", content: output },
      ]);
    } else if (trimmedCmd === "") {
      // Do nothing for empty command
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          content: `bash: ${cmd}: command not found
Type 'help' for available commands.`,
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
      <DialogContent className="sm:max-w-2xl p-0 bg-[#0d0d0d] border-[#3c6eb4]/30 overflow-hidden">
        {/* Fedora-styled header bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-[#3c6eb4]/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#cc0000]/80 hover:bg-[#cc0000] cursor-pointer transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#f4bf49]/80 hover:bg-[#f4bf49] cursor-pointer transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#73d216]/80 hover:bg-[#73d216] cursor-pointer transition-colors" />
          </div>
          <span className="flex-1 text-center text-sm text-muted-foreground font-mono flex items-center justify-center gap-2">
            <span className="text-[#3c6eb4]">●</span>
            vipul@fedora:~
          </span>
        </div>
        <div
          ref={terminalRef}
          className={`p-4 font-mono text-sm min-h-[350px] max-h-[450px] overflow-auto cursor-text transition-all duration-300 ${
            easterEggTriggered ? 'bg-[#3c6eb4]/5' : ''
          }`}
          onClick={handleTerminalClick}
        >
          {/* Boot sequence */}
          <pre className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
            {bootText.split("\n").map((line, i) => {
              if (line.includes("Last login:")) {
                return (
                  <span key={i} className="text-[#3c6eb4]">
                    {line}
                    {"\n"}
                  </span>
                );
              }
              if (line.includes("Fedora")) {
                return (
                  <span key={i} className="text-[#3c6eb4] font-semibold">
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
                    ? "text-[#3c6eb4]"
                    : line.type === "fedora"
                    ? "text-[#51a2da]"
                    : "text-muted-foreground"
                }`}
              >
                {line.content}
              </pre>
            ))}

          {/* Input line */}
          {!isBooting && (
            <div className="flex items-center">
              <span className="text-[#3c6eb4]">vipul@fedora:~$&nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-sm caret-[#3c6eb4]"
                spellCheck={false}
                autoComplete="off"
              />
              <span className="animate-pulse text-[#3c6eb4]">█</span>
            </div>
          )}

          {isBooting && (
            <span className="animate-pulse text-[#3c6eb4]">█</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TerminalDialog;
