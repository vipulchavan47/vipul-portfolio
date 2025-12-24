import { useMemo } from "react";

const ContributionGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Generate random contribution data
  const contributions = useMemo(() => {
    const data: number[] = [];
    for (let i = 0; i < 52 * 7; i++) {
      const random = Math.random();
      if (random < 0.4) data.push(0);
      else if (random < 0.6) data.push(1);
      else if (random < 0.8) data.push(2);
      else if (random < 0.9) data.push(3);
      else data.push(4);
    }
    return data;
  }, []);

  const totalContributions = contributions.filter(c => c > 0).length;

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
              <span className="text-muted-foreground">contributions in 2024</span>
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
