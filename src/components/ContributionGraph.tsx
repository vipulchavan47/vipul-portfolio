const LeetCodeStats = () => {
  const stats = {
    solved: 136,
    total: 3791,
    easy: { solved: 84, total: 918 },
    medium: { solved: 50, total: 1977 },
    hard: { solved: 2, total: 896 },
    rank: "1,061,031",
    badges: 2,
    activeDays: 100,
    maxStreak: 21,
  };

  const difficultyData = [
    { label: "Easy", solved: stats.easy.solved, total: stats.easy.total, color: "text-emerald-400", bg: "bg-emerald-400" },
    { label: "Medium", solved: stats.medium.solved, total: stats.medium.total, color: "text-amber-400", bg: "bg-amber-400" },
    { label: "Hard", solved: stats.hard.solved, total: stats.hard.total, color: "text-rose-400", bg: "bg-rose-400" },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-lg font-mono text-muted-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          // LeetCode Progress
        </h3>
        
        <div className="bg-card border border-border rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Main Stats */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-foreground mb-1">{stats.solved}</div>
                <div className="text-muted-foreground text-sm">problems solved</div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 w-full max-w-xs">
                <div className="text-center">
                  <div className="text-xl font-semibold text-foreground">{stats.activeDays}</div>
                  <div className="text-xs text-muted-foreground">Active Days</div>
                </div>
                <div className="text-center border-x border-border">
                  <div className="text-xl font-semibold text-foreground">{stats.maxStreak}</div>
                  <div className="text-xs text-muted-foreground">Max Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-foreground">{stats.badges}</div>
                  <div className="text-xs text-muted-foreground">Badges</div>
                </div>
              </div>
            </div>

            {/* Right: Difficulty Breakdown */}
            <div className="flex flex-col justify-center gap-4">
              {difficultyData.map((item) => (
                <div key={item.label} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${item.color}`}>{item.label}</span>
                    <span className="text-foreground font-mono">
                      <span className="font-bold">{item.solved}</span>
                      <span className="text-muted-foreground text-sm"> / {item.total}</span>
                    </span>
                  </div>
                  <div className="h-2.5 bg-muted/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.bg} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                      style={{ width: `${(item.solved / item.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Rank */}
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-2">
            <span className="text-muted-foreground text-sm">Global Rank:</span>
            <span className="text-primary font-mono font-semibold">#{stats.rank}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
