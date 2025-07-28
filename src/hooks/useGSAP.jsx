import { useCallback } from "react";

export function useGSAP() {
  const initializeAnimations = useCallback(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin, window.TextPlugin);

    // Scroll Progress Bar
    window.gsap.to("#scroll-progress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    // Hero Section Animation
    const heroTl = window.gsap.timeline();
    heroTl.from(".hero-title", { y: 100, opacity: 0, duration: 1.2, ease: "power3.out" })
          .from(".hero-subtitle", { y: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.8")
          .from(".hero-description", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
          .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

    // Section Titles Animation
    window.gsap.utils.toArray(".section-title").forEach((title) => {
      window.gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });

    // About Section Animation
    window.gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    window.gsap.from(".about-card", {
      scrollTrigger: {
        trigger: ".about-card",
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Skills Animation
    window.gsap.utils.toArray(".skill-card").forEach((card, index) => {
      window.gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out"
      });
    });

    // Skill Bars Animation
    window.gsap.utils.toArray(".skill-item").forEach((item) => {
      const bar = item.querySelector(".skill-bar");
      const percentage = bar.dataset.percentage;
      
      window.gsap.to(bar, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
        width: percentage + "%",
        duration: 1.5,
        ease: "power2.out"
      });
    });

    // Projects Animation
    window.gsap.utils.toArray(".project-card").forEach((card, index) => {
      window.gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: (index % 3) * 0.2,
        ease: "power2.out"
      });
    });

    // Contact Form Animation
    window.gsap.utils.toArray(".form-field").forEach((field, index) => {
      window.gsap.from(field, {
        scrollTrigger: {
          trigger: field,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out"
      });
    });

    window.gsap.from(".contact-info", {
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Footer Social Icons Animation
    window.gsap.utils.toArray(".footer-social .social-icon").forEach((icon, index) => {
      window.gsap.from(icon, {
        scrollTrigger: {
          trigger: ".footer-social",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out"
      });
    });

    // Social Icons Glow Animation
    document.querySelectorAll('.social-icon').forEach(icon => {
      icon.addEventListener('mouseenter', function() {
        window.gsap.to(this, {
          textShadow: "0 0 5px var(--primary-green), 0 0 10px var(--primary-green)",
          duration: 0.3
        });
      });
      
      icon.addEventListener('mouseleave', function() {
        window.gsap.to(this, {
          textShadow: "none",
          duration: 0.3
        });
      });
    });

  }, []);

  return { initializeAnimations };
}
