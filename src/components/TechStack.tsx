const techStack = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Git", color: "#F05032" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
];

const TechStack = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Tech Stack
        </h3>
        <div 
          className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.65s" }}
        >
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/30 transition-all cursor-default"
              style={{ animationDelay: `${0.65 + index * 0.03}s` }}
            >
              <div
                className="w-6 h-6 rounded-md"
                style={{ backgroundColor: tech.color }}
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
