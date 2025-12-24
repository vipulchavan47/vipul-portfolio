import { Github, Globe } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform with real-time data visualization, custom reports, and team collaboration features.",
    image: project1,
    techStack: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    title: "AI Chat Interface",
    description:
      "An AI-powered chat application with multiple model support, conversation history, and intelligent responses.",
    image: project2,
    techStack: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
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
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

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
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                        aria-label="View live site"
                      >
                        <Globe className="w-4 h-4 text-muted-foreground" />
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
