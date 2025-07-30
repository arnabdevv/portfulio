import { useEffect } from "react";

// About section with 3D tilt card and summary
export default function AboutSection() {
  useEffect(() => {
    // Add 3D tilt effect to card
    if (window.VanillaTilt) {
      const card = document.querySelector(".about-card");
      if (card) {
        window.VanillaTilt.init(card, {
          max: 15,
          speed: 1000,
          glare: true,
          "max-glare": 0.2,
        });
      }
    }
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon section-title">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="about-text">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              I'm a passionate web developer with 5+ years of experience
              creating modern, responsive websites and applications. I
              specialize in React, Node.js, and cutting-edge web technologies.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or enjoying a good cup of
              coffee while planning my next creative project.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--primary-green)" }}
                >
                  50+
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--primary-magenta)" }}
                >
                  5+
                </div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--primary-light-green)" }}
                >
                  100%
                </div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
          {/* 3D Tilt Card */}
          <div className="flex justify-center">
            <div className="about-card glass-effect p-8 rounded-xl max-w-sm w-full transform-gpu">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Arnab - Web Developer"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-2"
                style={{ borderColor: "var(--primary-purple)" }}
              />
              <h3 className="text-2xl font-bold text-center mb-4 text-neon">
                Arnab Kumar
              </h3>
              <p className="text-center text-gray-300 mb-6">
                Full Stack Developer specialized in React, Node.js, and modern
                web technologies
              </p>
              <div className="flex justify-center space-x-4">
                <i
                  className="fab fa-react text-2xl"
                  style={{ color: "var(--primary-green)" }}
                ></i>
                <i
                  className="fab fa-node-js text-2xl"
                  style={{ color: "var(--primary-light-green)" }}
                ></i>
                <i
                  className="fab fa-js-square text-2xl"
                  style={{ color: "var(--primary-magenta)" }}
                ></i>
                <i
                  className="fab fa-python text-2xl"
                  style={{ color: "var(--primary-purple)" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
