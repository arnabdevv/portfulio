export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-8 footer-social">
          <a href="#" className="text-2xl transition-colors transform hover:scale-125 social-icon" style={{ color: 'var(--primary-purple)' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-2xl transition-colors transform hover:scale-125 social-icon" style={{ color: 'var(--primary-green)' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-2xl transition-colors transform hover:scale-125 social-icon" style={{ color: 'var(--primary-magenta)' }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl transition-colors transform hover:scale-125 social-icon" style={{ color: 'var(--primary-light-green)' }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl transition-colors transform hover:scale-125 social-icon" style={{ color: 'var(--primary-purple)' }}>
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
        
        <div className="text-gray-400 mb-4">
          <p>&copy; 2024 Arnab Kumar. All rights reserved.</p>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Built with ❤️ using React, GSAP, and modern web technologies</p>
        </div>
      </div>
    </footer>
  );
}
