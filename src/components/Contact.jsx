import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'
import { useTheme } from '../contexts/ThemeContext'
import { Mail } from 'lucide-react'
import { Instagram, Linkedin } from './icons/socialIcons'

const Contact = () => {
  const { theme } = useTheme()
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-left'
  })

  const buttonStyle = {
    backgroundColor: theme === 'dark' ? 'transparent' : '#3D0A05',
    color: '#FFFFFF',
    border: theme === 'dark' ? '2px solid' : '2px solid transparent'
  }

  const textStyle = {
    color: '#FFFFFF'
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 px-5 relative min-h-[50vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Contact Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card-base text-center group overflow-hidden relative">
          <div className="relative z-10">
            <p className="text-glass-secondary mb-8 text-lg leading-relaxed">
              Have questions? Want to collaborate? Or just say hello? We'd love to hear from you!
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:inscribe.mvjce24@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-purple-400 to-purple-500 dark:from-pink-500 dark:to-purple-600 text-white hover:from-purple-500 hover:to-purple-600 dark:hover:from-pink-600 dark:hover:to-purple-700"
              >
                <Mail size={20} />
                <span className="text-lg">Email Us</span>
              </a>
              <a
                href="https://www.instagram.com/inscribe.mvjce/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-[#F58529] via-[#E1306C] to-[#833AB4] dark:from-[#FF6B35] dark:via-[#FF1493] dark:to-[#9D4EDD] text-white hover:shadow-xl"
              >
                <Instagram size={20} />
                <span className="text-lg">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/inscribe-mvjce24/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white hover:shadow-xl"
              >
                <Linkedin size={20} />
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

