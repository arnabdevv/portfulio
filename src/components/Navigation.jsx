import { useEffect, useState } from "react";

// Navigation bar with section highlighting and smooth scroll
export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Highlight nav item based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to section
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 glass-effect rounded-full px-8 py-3 z-30">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-sm transition-colors nav-link"
              style={{
                color:
                  activeSection === item.id ? "var(--primary-green)" : "#fff",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id)
                  e.target.style.color = "var(--primary-light-green)";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = "#fff";
                }
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
