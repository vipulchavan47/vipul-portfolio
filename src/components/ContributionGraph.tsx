import { useState } from 'react';

const LeetCodeStats = () => {
  const [hoveredDifficulty, setHoveredDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);

  const stats = {
    solved: 175,
    total: 3822,
    attempting: 3,
    easy: { solved: 114, total: 922 },
    medium: { solved: 58, total: 1997 },
    hard: { solved: 3, total: 903 },
  };

  // Calculate percentages for the circular progress
  const easyPercent = (stats.easy.solved / stats.solved) * 100;
  const mediumPercent = (stats.medium.solved / stats.solved) * 100;
  const hardPercent = (stats.hard.solved / stats.solved) * 100;

  // SVG circle calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke lengths for full circle
  const easyStroke = (easyPercent / 100) * circumference;
  const mediumStroke = (mediumPercent / 100) * circumference;
  const hardStroke = (hardPercent / 100) * circumference;

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-lg md:text-xl font-semibold font-mono text-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          LeetCode Progress
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
                  opacity="0.3"
                />
                {/* Easy (emerald) - starts at 0 */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={hoveredDifficulty === 'easy' ? 12 : 8}
                  strokeDasharray={`${easyStroke} ${circumference}`}
                  strokeDashoffset="0"
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredDifficulty('easy')}
                  onMouseLeave={() => setHoveredDifficulty(null)}
                />
                {/* Medium (amber) - starts after easy */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={hoveredDifficulty === 'medium' ? 12 : 8}
                  strokeDasharray={`${mediumStroke} ${circumference}`}
                  strokeDashoffset={-easyStroke}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredDifficulty('medium')}
                  onMouseLeave={() => setHoveredDifficulty(null)}
                />
                {/* Hard (red) - starts after easy + medium */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth={hoveredDifficulty === 'hard' ? 12 : 8}
                  strokeDasharray={`${hardStroke} ${circumference}`}
                  strokeDashoffset={-(easyStroke + mediumStroke)}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredDifficulty('hard')}
                  onMouseLeave={() => setHoveredDifficulty(null)}
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
              </div>
            </div>

            {/* Right: Difficulty Cards */}
            <div className="flex flex-col gap-3">
              {/* Easy */}
              <div 
                className={`bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-6 py-3 min-w-[120px] transition-all duration-300 cursor-pointer ${
                  hoveredDifficulty === 'easy' ? 'shadow-[0_0_20px_rgba(16,185,129,0.5)] border-emerald-400 scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredDifficulty('easy')}
                onMouseLeave={() => setHoveredDifficulty(null)}
              >
                <div className="text-emerald-400 font-semibold text-sm">Easy</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold">{stats.easy.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.easy.total}</span>
                </div>
              </div>
              
              {/* Medium */}
              <div 
                className={`bg-amber-500/10 border border-amber-500/30 rounded-lg px-6 py-3 min-w-[120px] transition-all duration-300 cursor-pointer ${
                  hoveredDifficulty === 'medium' ? 'shadow-[0_0_20px_rgba(245,158,11,0.5)] border-amber-400 scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredDifficulty('medium')}
                onMouseLeave={() => setHoveredDifficulty(null)}
              >
                <div className="text-amber-400 font-semibold text-sm">Med.</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold">{stats.medium.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.medium.total}</span>
                </div>
              </div>
              
              {/* Hard */}
              <div 
                className={`bg-rose-500/10 border border-rose-500/30 rounded-lg px-6 py-3 min-w-[120px] transition-all duration-300 cursor-pointer ${
                  hoveredDifficulty === 'hard' ? 'shadow-[0_0_20px_rgba(244,63,94,0.5)] border-rose-400 scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredDifficulty('hard')}
                onMouseLeave={() => setHoveredDifficulty(null)}
              >
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
