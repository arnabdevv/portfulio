import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SkillsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Add hover animations to skill cards
    cardRefs.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
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
      });
    });
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", percentage: 90 },
        { name: "JavaScript", percentage: 95 },
        { name: "CSS/Tailwind", percentage: 88 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Python", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", percentage: 92 },
        { name: "Docker", percentage: 70 },
        { name: "AWS", percentage: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-noise">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon section-title">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-effect p-6 rounded-xl skill-card transition-all"
              ref={(el) => (cardRefs.current[categoryIndex] = el)}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "var(--primary-light-green)" }}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span
                        className="skill-percentage"
                        data-percentage={skill.percentage}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="skill-bar h-2 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, var(--primary-green), var(--primary-light-green))`,
                          width: "0%",
                        }}
                        data-percentage={skill.percentage}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
