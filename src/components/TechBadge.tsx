interface TechBadgeProps {
  name: string;
  color: "java" | "mysql" | "typescript" | "react" | "nextjs" | "tailwind";
}

const colorClasses = {
  java: "bg-orange-500/20 text-orange-400 border-orange-500/40 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  mysql: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.3)]",
  typescript: "bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  react: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.3)]",
  nextjs: "bg-foreground/10 text-foreground border-foreground/30 shadow-[0_0_8px_rgba(255,255,255,0.1)]",
  tailwind: "bg-teal-500/20 text-teal-400 border-teal-500/40 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
};

const TechBadge = ({ name, color }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border transition-all duration-300 hover:scale-105 ${colorClasses[color]}`}
    >
      {name}
    </span>
  );
};

export default TechBadge;
