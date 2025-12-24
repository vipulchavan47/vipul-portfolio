import { useState, useEffect } from "react";

const TerminalVibe = () => {
  const [text, setText] = useState("");
  const fullText = "$ echo 'Welcome to my portfolio'\nWelcome to my portfolio\n$ whoami\nvipul_chavan\n$ cat skills.txt\nJava | MySQL | DSA | Problem Solving\n$ _";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 p-4 rounded-lg bg-card border border-border font-mono text-xs">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-muted-foreground">terminal</span>
      </div>
      <pre className="text-primary whitespace-pre-wrap leading-relaxed">
        {text}
        <span className="animate-pulse">█</span>
      </pre>
    </div>
  );
};

export default TerminalVibe;
