const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <a 
            href="#"
            className="font-mono text-2xl text-muted-foreground transition-all duration-300 hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            ~/vipul_chavan
          </a>
          <p className="font-mono text-xs text-muted-foreground/60">
            Design inspired by{" "}
            <a 
              href="https://siddz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
            >
              siddz.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
