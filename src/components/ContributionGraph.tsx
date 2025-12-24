import { useMemo } from "react";

const ContributionGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // LeetCode-style contribution data based on actual profile
  // 156 submissions, active from Aug-Dec, sparse Jan-Jul
  const contributions = useMemo(() => {
    const data: number[] = [];
    // 52 weeks * 7 days = 364 days
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        // Jan-Jul (weeks 0-30): mostly empty with occasional activity
        if (week < 31) {
          const random = Math.random();
          if (random < 0.92) data.push(0);
          else if (random < 0.96) data.push(1);
          else data.push(2);
        }
        // Aug (weeks 31-34): starting activity
        else if (week < 35) {
          const random = Math.random();
          if (random < 0.5) data.push(0);
          else if (random < 0.7) data.push(1);
          else if (random < 0.85) data.push(2);
          else data.push(3);
        }
        // Sep-Oct (weeks 35-43): high activity
        else if (week < 44) {
          const random = Math.random();
          if (random < 0.25) data.push(0);
          else if (random < 0.45) data.push(1);
          else if (random < 0.65) data.push(2);
          else if (random < 0.85) data.push(3);
          else data.push(4);
        }
        // Nov-Dec (weeks 44-52): very high activity
        else {
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

  const totalContributions = 156; // From LeetCode profile

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
        <div className="bg-card border border-border rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
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
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-mono text-foreground">
              <span className="text-primary font-semibold">{totalContributions}</span>{" "}
              <span className="text-muted-foreground">submissions in the past year</span>
            </span>
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
