export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Socket.io", "Express"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with interactive charts, location search, and 7-day forecast using OpenWeather API.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Chart.js", "API"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "D3.js", "GraphQL"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "React Native App",
      description: "Cross-platform mobile application for fitness tracking with offline capabilities and cloud sync.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Redux", "Firebase"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Cryptocurrency portfolio tracking application with real-time prices, portfolio analysis, and market trends.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Next.js", "CoinGecko API", "Tailwind"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const getTechnologyColor = (tech) => {
    const colorMap = {
      "React": { bg: 'var(--primary-green)', text: 'var(--primary-green)' },
      "Node.js": { bg: 'var(--primary-light-green)', text: 'var(--primary-light-green)' },
      "MongoDB": { bg: 'var(--primary-purple)', text: 'var(--primary-purple)' },
      "Socket.io": { bg: 'var(--primary-magenta)', text: 'var(--primary-magenta)' },
      "Express": { bg: 'var(--primary-green)', text: 'var(--primary-green)' },
      "Vue.js": { bg: 'var(--primary-green)', text: 'var(--primary-green)' },
      "Chart.js": { bg: 'var(--primary-purple)', text: 'var(--primary-purple)' },
      "API": { bg: 'var(--primary-magenta)', text: 'var(--primary-magenta)' },
      "D3.js": { bg: 'var(--primary-purple)', text: 'var(--primary-purple)' },
      "GraphQL": { bg: 'var(--primary-magenta)', text: 'var(--primary-magenta)' },
      "React Native": { bg: 'var(--primary-green)', text: 'var(--primary-green)' },
      "Redux": { bg: 'var(--primary-magenta)', text: 'var(--primary-magenta)' },
      "Firebase": { bg: 'var(--primary-light-green)', text: 'var(--primary-light-green)' },
      "Next.js": { bg: 'var(--primary-green)', text: 'var(--primary-green)' },
      "CoinGecko API": { bg: 'var(--primary-light-green)', text: 'var(--primary-light-green)' },
      "Tailwind": { bg: 'var(--primary-purple)', text: 'var(--primary-purple)' }
    };
    const colors = colorMap[tech] || { bg: '#666', text: '#666' };
    return {
      backgroundColor: `${colors.bg}20`,
      color: colors.text,
      border: `1px solid ${colors.bg}40`
    };
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card glass-effect rounded-xl overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary-light-green)' }}>{project.title}</h3>
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
                  <a href={project.liveUrl} className="flex items-center transition-colors" style={{ color: 'var(--primary-green)' }}
                     onMouseEnter={(e) => e.target.style.color = 'var(--primary-light-green)'}
                     onMouseLeave={(e) => e.target.style.color = 'var(--primary-green)'}>
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a href={project.codeUrl} className="flex items-center transition-colors" style={{ color: 'var(--primary-purple)' }}
                     onMouseEnter={(e) => e.target.style.color = 'var(--primary-magenta)'}
                     onMouseLeave={(e) => e.target.style.color = 'var(--primary-purple)'}>
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
