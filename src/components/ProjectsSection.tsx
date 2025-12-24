import { Github } from "lucide-react";

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
    title: "Employee Management Application",
    description:
      "A Java-based system to manage employee records with complete CRUD functionality and database integration. Centralized employee data to improve data accuracy and reduce manual record handling.",
    techStack: ["Java", "MySQL", "Swing"],
    links: {
      github: "https://github.com/vipulchavan47/employee-management",
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h3 
          className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          Featured Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.75 + index * 0.1}s` }}
            >

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-md"
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
