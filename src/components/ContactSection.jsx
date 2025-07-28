import { useState } from "react";
import { sendEmail } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await sendEmail(data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.target.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-noise">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--primary-light-green)' }}>Let's Connect</h3>
            <p className="text-lg text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <i className="fas fa-envelope text-xl mr-4" style={{ color: 'var(--primary-green)' }}></i>
                <span>arnab.developer@example.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-xl mr-4" style={{ color: 'var(--primary-magenta)' }}></i>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-xl mr-4" style={{ color: 'var(--primary-purple)' }}></i>
                <span>Bangalore, India</span>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-2xl transition-colors social-icon" style={{ color: 'var(--primary-purple)' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl transition-colors social-icon" style={{ color: 'var(--primary-green)' }}>
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-2xl transition-colors social-icon" style={{ color: 'var(--primary-magenta)' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl transition-colors social-icon" style={{ color: 'var(--primary-light-green)' }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl">
              <div className="mb-6 form-field">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary-green)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(6, 208, 1, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#4B5563';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div className="mb-6 form-field">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary-green)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(6, 208, 1, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#4B5563';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div className="mb-6 form-field">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary-green)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(6, 208, 1, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#4B5563';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div className="mb-8 form-field">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none transition-all resize-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary-green)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(6, 208, 1, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#4B5563';
                    e.target.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 submit-btn disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(90deg, var(--primary-green), var(--primary-light-green))`,
                  color: 'black'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(6, 208, 1, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <i className="fas fa-spinner fa-spin ml-2"></i>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
