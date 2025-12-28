import { useMemo } from "react";

const ContributionGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // LeetCode stats based on actual profile
  const stats = {
    solved: 136,
    total: 3791,
    attempting: 3,
    easy: { solved: 84, total: 918 },
    medium: { solved: 50, total: 1977 },
    hard: { solved: 2, total: 896 },
  };

  // Calculate percentage for circular progress
  const solvedPercentage = (stats.solved / stats.total) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (solvedPercentage / 100) * circumference;

  // Contribution data for the grid
  const contributions = useMemo(() => {
    const data: number[] = [];
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        if (week < 31) {
          const random = Math.random();
          if (random < 0.92) data.push(0);
          else if (random < 0.96) data.push(1);
          else data.push(2);
        } else if (week < 35) {
          const random = Math.random();
          if (random < 0.5) data.push(0);
          else if (random < 0.7) data.push(1);
          else if (random < 0.85) data.push(2);
          else data.push(3);
        } else if (week < 44) {
          const random = Math.random();
          if (random < 0.25) data.push(0);
          else if (random < 0.45) data.push(1);
          else if (random < 0.65) data.push(2);
          else if (random < 0.85) data.push(3);
          else data.push(4);
        } else {
          const random = Math.random();
          if (random < 0.15) data.push(0);
          else if (random < 0.35) data.push(1);
          else if (random < 0.55) data.push(2);
          else if (random < 0.8) data.push(3);
          else data.push(4);
        }
      }
    }
    return data;
  }, []);

  const getLevelClass = (level: number) => {
    const classes = [
      "bg-contribution-empty",
      "bg-contribution-level1",
      "bg-contribution-level2",
      "bg-contribution-level3",
      "bg-contribution-level4",
    ];
    return classes[level] || classes[0];
  };

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-lg font-mono text-muted-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          // LeetCode Progress
        </h3>
        
        {/* Stats Card */}
        <div className="bg-card border border-border rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {/* Circular Progress + Difficulty Breakdown */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Circular Progress */}
            <div className="relative">
              <svg width="140" height="140" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="45"
                  stroke="hsl(var(--muted))"
                  strokeWidth="8"
                  fill="none"
                  className="opacity-30"
                />
                {/* Progress circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="45"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-foreground">{stats.solved}</span>
                <span className="text-xs text-muted-foreground">/{stats.total}</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-primary text-xs">✓</span>
                  <span className="text-xs text-muted-foreground">Solved</span>
                </div>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="flex flex-col gap-3">
              {/* Easy */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-muted/30 border border-border flex flex-col items-center justify-center">
                  <span className="text-emerald-400 font-semibold text-sm">Easy</span>
                  <span className="text-foreground font-mono text-sm">
                    <span className="font-bold">{stats.easy.solved}</span>
                    <span className="text-muted-foreground">/{stats.easy.total}</span>
                  </span>
                </div>
                <div className="w-32 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(stats.easy.solved / stats.easy.total) * 100}%` }}
                  />
                </div>
              </div>

              {/* Medium */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-muted/30 border border-border flex flex-col items-center justify-center">
                  <span className="text-amber-400 font-semibold text-sm">Med.</span>
                  <span className="text-foreground font-mono text-sm">
                    <span className="font-bold">{stats.medium.solved}</span>
                    <span className="text-muted-foreground">/{stats.medium.total}</span>
                  </span>
                </div>
                <div className="w-32 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(stats.medium.solved / stats.medium.total) * 100}%` }}
                  />
                </div>
              </div>

              {/* Hard */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-muted/30 border border-border flex flex-col items-center justify-center">
                  <span className="text-rose-400 font-semibold text-sm">Hard</span>
                  <span className="text-foreground font-mono text-sm">
                    <span className="font-bold">{stats.hard.solved}</span>
                    <span className="text-muted-foreground">/{stats.hard.total}</span>
                  </span>
                </div>
                <div className="w-32 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-rose-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(stats.hard.solved / stats.hard.total) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-6" />

          {/* Contribution Graph */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-mono text-foreground">
              <span className="text-primary font-semibold">164</span>{" "}
              <span className="text-muted-foreground">submissions in the past year</span>
            </span>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>Total active days: <span className="text-foreground">100</span></span>
              <span>Max streak: <span className="text-foreground">21</span></span>
            </div>
          </div>

          {/* Month labels */}
          <div className="flex justify-between mb-2 px-1">
            {months.map((month) => (
              <span key={month} className="text-xs text-muted-foreground font-mono">
                {month}
              </span>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="grid grid-rows-7 grid-flow-col gap-[3px] overflow-x-auto pb-2">
            {contributions.map((level, index) => (
              <div
                key={index}
                className={`w-[10px] h-[10px] rounded-sm ${getLevelClass(level)} transition-colors hover:ring-1 hover:ring-primary/50`}
                title={`${level} contributions`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-[10px] h-[10px] rounded-sm ${getLevelClass(level)}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionGraph;
