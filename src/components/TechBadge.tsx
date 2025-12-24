interface TechBadgeProps {
  name: string;
  color: "java" | "mysql" | "typescript" | "react" | "nextjs" | "tailwind";
}

const colorClasses = {
  java: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  mysql: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  typescript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  react: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  nextjs: "bg-foreground/10 text-foreground border-foreground/20",
  tailwind: "bg-teal-500/20 text-teal-400 border-teal-500/30",
};

const TechBadge = ({ name, color }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${colorClasses[color]}`}
    >
      {name}
    </span>
  );
};

export default TechBadge;
