import { Link } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

const Footer = () => {
  const handleNavClick = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/'
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 500)
    } else {
      scrollToSection(sectionId)
    }
  }

  return (
    <footer className="w-full py-12 px-5 border-t border-black/10" style={{ backgroundColor: '#fcf4d7' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Section - Logo and Info */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/images/inslogo.jpg" 
              alt="Inscribe Logo" 
              className="w-16 h-16 rounded-xl object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div>
              <h3 className="text-2xl font-bold text-heading font-montserrat">INSCRIBE</h3>
              <p className="text-sm text-gray-600">MVJ College of Engineering</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Near ITPB, Channasandra, Bangalore – 560067
          </p>
          <a 
            href="mailto:inscribe.mvjce@gmail.com" 
            className="text-accent-2 hover:text-heading transition-colors text-sm font-medium"
          >
            inscribe.mvjce@gmail.com
          </a>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-heading mb-4 font-montserrat">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/team" 
                className="text-accent-2 hover:text-heading transition-colors text-sm no-underline"
              >
                Our Domains
              </Link>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('leadership')}
                className="text-accent-2 hover:text-heading transition-colors text-sm cursor-pointer bg-transparent border-none p-0"
              >
                Meet Our Team
              </button>
            </li>
            <li>
              <Link 
                to="/events" 
                className="text-accent-2 hover:text-heading transition-colors text-sm no-underline"
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="text-accent-2 hover:text-heading transition-colors text-sm no-underline"
              >
                Registration
              </Link>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-accent-2 hover:text-heading transition-colors text-sm cursor-pointer bg-transparent border-none p-0"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media or Additional Info */}
        <div>
          <h4 className="text-lg font-bold text-heading mb-4 font-montserrat">Connect With Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/inscribe-mvjce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent-2/10 hover:bg-[#0077B5] flex items-center justify-center text-accent-2 hover:text-white transition-all hover:scale-110"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href="https://github.com/inscribe-mvjce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent-2/10 hover:bg-[#333] flex items-center justify-center text-accent-2 hover:text-white transition-all hover:scale-110"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/inscribe_mvjce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent-2/10 hover:bg-[#E1306C] flex items-center justify-center text-accent-2 hover:text-white transition-all hover:scale-110"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Inscribe Club. All rights reserved.
        </p>
        <p className="text-sm text-accent-2 font-medium">
          "Engineered by Inscribe minds"
        </p>
        <div className="flex gap-6 text-sm">
          <button 
            className="text-accent-2 hover:text-heading transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            Privacy Policy
          </button>
          <span className="text-gray-400">•</span>
          <button 
            className="text-accent-2 hover:text-heading transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
