import { useState } from 'react';

const LeetCodeStats = () => {
  const [hoveredDifficulty, setHoveredDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);

  const stats = {
    solved: 203,
    total: 3846,
    attempting: 2,
    easy: { solved: 129, total: 927 },
    medium: { solved: 70, total: 2010 },
    hard: { solved: 4, total: 909 },
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

  const getDifficultyGlow = (difficulty: 'easy' | 'medium' | 'hard') => {
    const glows = {
      easy: '0 0 30px rgba(16,185,129,0.4)',
      medium: '0 0 30px rgba(245,158,11,0.4)',
      hard: '0 0 30px rgba(244,63,94,0.4)',
    };
    return glows[difficulty];
  };

  return (
    <section className="py-12 px-6">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(-90deg); }
          to { transform: rotate(270deg); }
        }
        .ring-spin:hover {
          filter: drop-shadow(0 0 6px currentColor);
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .difficulty-card-active {
          animation: float-card 1.8s ease-in-out infinite;
        }
        @keyframes pulse-center {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .center-pulse {
          animation: pulse-center 2s ease-in-out infinite;
        }
      `}</style>
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-lg md:text-xl font-semibold font-mono text-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          LeetCode Progress
        </h3>
        
        <div 
          className="bg-card border border-border rounded-xl p-8 opacity-0 animate-fade-in transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* Left: Circular Progress */}
            <div className="relative w-48 h-48 group">
              <svg 
                className="w-full h-full -rotate-90 transition-transform duration-700 group-hover:scale-105" 
                viewBox="0 0 160 160"
                style={{
                  filter: hoveredDifficulty
                    ? `drop-shadow(${getDifficultyGlow(hoveredDifficulty)})`
                    : 'none',
                  transition: 'filter 0.3s ease',
                }}
              >
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
                {/* Easy (emerald) */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={hoveredDifficulty === 'easy' ? 13 : 8}
                  strokeDasharray={`${easyStroke} ${circumference}`}
                  strokeDashoffset="0"
                  opacity={hoveredDifficulty && hoveredDifficulty !== 'easy' ? 0.35 : 1}
                  className="transition-all duration-400 cursor-pointer"
                  style={{ transition: 'stroke-width 0.3s ease, opacity 0.3s ease' }}
                  onMouseEnter={() => setHoveredDifficulty('easy')}
                  onMouseLeave={() => setHoveredDifficulty(null)}
                />
                {/* Medium (amber) */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={hoveredDifficulty === 'medium' ? 13 : 8}
                  strokeDasharray={`${mediumStroke} ${circumference}`}
                  strokeDashoffset={-easyStroke}
                  opacity={hoveredDifficulty && hoveredDifficulty !== 'medium' ? 0.35 : 1}
                  className="transition-all duration-400 cursor-pointer"
                  style={{ transition: 'stroke-width 0.3s ease, opacity 0.3s ease' }}
                  onMouseEnter={() => setHoveredDifficulty('medium')}
                  onMouseLeave={() => setHoveredDifficulty(null)}
                />
                {/* Hard (rose) */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth={hoveredDifficulty === 'hard' ? 13 : 8}
                  strokeDasharray={`${hardStroke} ${circumference}`}
                  strokeDashoffset={-(easyStroke + mediumStroke)}
                  opacity={hoveredDifficulty && hoveredDifficulty !== 'hard' ? 0.35 : 1}
                  className="transition-all duration-400 cursor-pointer"
                  style={{ transition: 'stroke-width 0.3s ease, opacity 0.3s ease' }}
                  onMouseEnter={() => setHoveredDifficulty('hard')}
                  onMouseLeave={() => setHoveredDifficulty(null)}
                />
              </svg>
              
              {/* Center text */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 ${hoveredDifficulty ? 'center-pulse' : ''}`}>
                <div className="text-4xl font-bold text-foreground transition-all duration-300">
                  {hoveredDifficulty === 'easy' ? stats.easy.solved :
                   hoveredDifficulty === 'medium' ? stats.medium.solved :
                   hoveredDifficulty === 'hard' ? stats.hard.solved :
                   stats.solved}
                  <span className="text-lg text-muted-foreground">
                    /{hoveredDifficulty === 'easy' ? stats.easy.total :
                       hoveredDifficulty === 'medium' ? stats.medium.total :
                       hoveredDifficulty === 'hard' ? stats.hard.total :
                       stats.total}
                  </span>
                </div>
                <div className={`flex items-center gap-1 text-sm mt-1 transition-colors duration-300 ${
                  hoveredDifficulty === 'easy' ? 'text-emerald-400' :
                  hoveredDifficulty === 'medium' ? 'text-amber-400' :
                  hoveredDifficulty === 'hard' ? 'text-rose-400' :
                  'text-emerald-400'
                }`}>
                  <span className="text-xs">✓</span>
                  <span>
                    {hoveredDifficulty === 'easy' ? 'Easy' :
                     hoveredDifficulty === 'medium' ? 'Medium' :
                     hoveredDifficulty === 'hard' ? 'Hard' :
                     'Solved'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Difficulty Cards */}
            <div className="flex flex-col gap-3">
              {/* Easy */}
              <div 
                className={`border rounded-lg px-6 py-3 min-w-[140px] cursor-pointer select-none
                  transition-all duration-300
                  bg-emerald-500/10 border-emerald-500/30
                  ${hoveredDifficulty === 'easy' 
                    ? 'difficulty-card-active border-emerald-400 bg-emerald-500/20 shadow-[0_0_24px_rgba(16,185,129,0.45)] scale-105 -translate-x-1' 
                    : hoveredDifficulty 
                      ? 'opacity-50 scale-95' 
                      : 'hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/15 hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]'
                  }`}
                onMouseEnter={() => setHoveredDifficulty('easy')}
                onMouseLeave={() => setHoveredDifficulty(null)}
              >
                <div className="text-emerald-400 font-semibold text-sm tracking-wide">Easy</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold text-lg">{stats.easy.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.easy.total}</span>
                </div>
              </div>
              
              {/* Medium */}
              <div 
                className={`border rounded-lg px-6 py-3 min-w-[140px] cursor-pointer select-none
                  transition-all duration-300
                  bg-amber-500/10 border-amber-500/30
                  ${hoveredDifficulty === 'medium' 
                    ? 'difficulty-card-active border-amber-400 bg-amber-500/20 shadow-[0_0_24px_rgba(245,158,11,0.45)] scale-105 -translate-x-1' 
                    : hoveredDifficulty 
                      ? 'opacity-50 scale-95' 
                      : 'hover:scale-105 hover:border-amber-400 hover:bg-amber-500/15 hover:shadow-[0_0_16px_rgba(245,158,11,0.25)]'
                  }`}
                onMouseEnter={() => setHoveredDifficulty('medium')}
                onMouseLeave={() => setHoveredDifficulty(null)}
              >
                <div className="text-amber-400 font-semibold text-sm tracking-wide">Medium</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold text-lg">{stats.medium.solved}</span>
                  <span className="text-muted-foreground text-sm">/{stats.medium.total}</span>
                </div>
              </div>
              
              {/* Hard */}
              <div 
                className={`border rounded-lg px-6 py-3 min-w-[140px] cursor-pointer select-none
                  transition-all duration-300
                  bg-rose-500/10 border-rose-500/30
                  ${hoveredDifficulty === 'hard' 
                    ? 'difficulty-card-active border-rose-400 bg-rose-500/20 shadow-[0_0_24px_rgba(244,63,94,0.45)] scale-105 -translate-x-1' 
                    : hoveredDifficulty 
                      ? 'opacity-50 scale-95' 
                      : 'hover:scale-105 hover:border-rose-400 hover:bg-rose-500/15 hover:shadow-[0_0_16px_rgba(244,63,94,0.25)]'
                  }`}
                onMouseEnter={() => setHoveredDifficulty('hard')}
                onMouseLeave={() => setHoveredDifficulty(null)}
              >
                <div className="text-rose-400 font-semibold text-sm tracking-wide">Hard</div>
                <div className="text-foreground font-mono">
                  <span className="font-bold text-lg">{stats.hard.solved}</span>
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
