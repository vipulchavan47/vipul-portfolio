const LeetCodeStats = () => {
  const stats = {
    solved: 136,
    total: 3791,
    attempting: 3,
    easy: { solved: 84, total: 918 },
    medium: { solved: 50, total: 1977 },
    hard: { solved: 2, total: 896 },
  };

  // Calculate percentages for the circular progress
  const easyPercent = (stats.easy.solved / stats.solved) * 100;
  const mediumPercent = (stats.medium.solved / stats.solved) * 100;
  const hardPercent = (stats.hard.solved / stats.solved) * 100;

  // SVG circle calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke offsets for stacked arcs
  const easyStroke = (easyPercent / 100) * circumference * 0.75;
  const mediumStroke = (mediumPercent / 100) * circumference * 0.75;
  const hardStroke = (hardPercent / 100) * circumference * 0.75;

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-lg font-mono text-muted-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          // LeetCode Progress
        </h3>
        
        <div className="bg-card border border-border rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* Left: Circular Progress */}
            <div className="relative w-48 h-48">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                {/* Background circle */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${circumference * 0.75} ${circumference}`}
                  opacity="0.3"
                />
                {/* Hard (red) - bottom layer */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${hardStroke} ${circumference}`}
                  strokeDashoffset={-(easyStroke + mediumStroke)}
                  className="transition-all duration-1000"
                />
                {/* Medium (amber) - middle layer */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${mediumStroke} ${circumference}`}
                  strokeDashoffset={-easyStroke}
                  className="transition-all duration-1000"
                />
                {/* Easy (emerald) - top layer */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${easyStroke} ${circumference}`}
                  className="transition-all duration-1000"
                />
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-foreground">
                  {stats.solved}<span className="text-lg text-muted-foreground">/{stats.total}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-sm mt-1">
                  <span className="text-xs">✓</span>
                  <span>Solved</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{stats.attempting} Attempting</span>
                </div>
              </div>
            </div>

            {/* Right: Difficulty Cards */}
            <div className="flex flex-col gap-3">
              {/* Easy */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-6 py-3 min-w-[120px]">
                <div className="text-emerald-400 font-semibold text-sm">Easy</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold">{stats.easy.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.easy.total}</span>
                </div>
              </div>
              
              {/* Medium */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-6 py-3 min-w-[120px]">
                <div className="text-amber-400 font-semibold text-sm">Med.</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold">{stats.medium.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.medium.total}</span>
                </div>
              </div>
              
              {/* Hard */}
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg px-6 py-3 min-w-[120px]">
                <div className="text-rose-400 font-semibold text-sm">Hard</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold">{stats.hard.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.hard.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
