import { useEffect, useRef } from "react";
import gsap from "gsap";
import { projects, technologyColors } from "../data/projects";

export default function ProjectsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Add hover animations to project cards
    cardRefs.current.forEach((card) => {
      const image = card.querySelector("img");
      const content = card.querySelector(".p-6");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate image zoom
        gsap.to(image, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate content
        gsap.to(content, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });

        // Reset image zoom
        gsap.to(image, {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });

        // Reset content
        gsap.to(content, {
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  const getTechnologyColor = (tech) => {
    const colors = technologyColors[tech] || { bg: "#666", text: "#666" };
    return {
      backgroundColor: `${colors.bg}20`,
      color: colors.text,
      border: `1px solid ${colors.bg}40`,
    };
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon section-title">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="project-card glass-effect rounded-xl overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--primary-light-green)" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded"
                      style={getTechnologyColor(tech)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    className="flex items-center transition-colors"
                    style={{ color: "var(--primary-green)" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--primary-light-green)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--primary-green)")
                    }
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center transition-colors"
                    style={{ color: "var(--primary-purple)" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--primary-magenta)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--primary-purple)")
                    }
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
