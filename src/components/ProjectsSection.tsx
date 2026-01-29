import { Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Expense Tracker Application",
    description:
      "A desktop-based application to record, categorize, and manage daily expenses with persistent database storage. Implemented CRUD operations, expense filtering, and summary reports to analyze user spending patterns.",
    techStack: ["Java", "MySQL", "JDBC", "JavaFX"],
    links: {
      github: "https://github.com/vipulchavan47/expense-tracker",
    },
  },
  {
    title: "Task Management REST API",
    description:
      "A RESTful backend application with full CRUD operations using layered architecture. Implemented DTOs, JPA-based persistence, and tested endpoints using Postman.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Postman"],
    links: {
      github: "https://github.com/vipulchavan47/task-manager-api",
    },
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 
          className="text-lg md:text-xl font-semibold font-mono text-foreground mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative bg-card border border-border rounded-xl overflow-hidden opacity-0 animate-fade-in transition-all duration-500 hover:border-primary/50 hover:-translate-y-2"
              style={{ animationDelay: `${0.75 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Glowing border effect */}
              <div 
                className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'shadow-[0_0_30px_rgba(16,185,129,0.2),inset_0_0_20px_rgba(16,185,129,0.05)]' 
                    : ''
                }`}
              />

              {/* Animated corner accents */}
              <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 rounded-tl-xl transition-all duration-500 ${
                hoveredIndex === index ? 'border-primary/60 w-12 h-12' : ''
              }`} />
              <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 rounded-br-xl transition-all duration-500 ${
                hoveredIndex === index ? 'border-primary/60 w-12 h-12' : ''
              }`} />

              {/* Project Info */}
              <div className="relative p-5 z-10">
                <div className="flex items-start justify-between mb-3">
                  <h4 className={`text-lg font-semibold text-foreground transition-all duration-300 ${
                    hoveredIndex === index ? 'text-primary' : ''
                  }`}>
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-md transition-all duration-300 ${
                          hoveredIndex === index 
                            ? 'bg-primary/20 text-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
                            : 'hover:bg-secondary text-muted-foreground'
                        }`}
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className={`text-sm text-muted-foreground mb-4 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-foreground/80' : ''
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack with stagger animation */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-md transition-all duration-300 ${
                        hoveredIndex === index 
                          ? 'bg-primary/20 text-primary shadow-[0_0_8px_rgba(16,185,129,0.2)]' 
                          : ''
                      }`}
                      style={{
                        transitionDelay: hoveredIndex === index ? `${techIndex * 50}ms` : '0ms'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
