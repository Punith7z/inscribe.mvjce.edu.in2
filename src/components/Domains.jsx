import { motion } from 'framer-motion'
import { domains } from '../data/domains'
import { Link } from 'react-router-dom'
import Reveal from './animations/Reveal'
import { useTheme } from '../contexts/ThemeContext'

const Domains = () => {
  const { theme } = useTheme()
  
  return (
    <section
      id="domains"
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
    >
      <div className="w-full transition-all duration-1000 ease-out">
        <div className="flex justify-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`section-title text-4xl text-center font-montserrat font-bold relative pb-4 ${theme === 'dark' ? 'text-transparent bg-clip-text' : 'text-light-maroon'}`}
            style={theme === 'dark' ? {
              backgroundImage: 'linear-gradient(135deg, #FF4B4B 0%, #7B4BFF 50%, #4B7BFF 100%)'
            } : {}}
          >
          <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          Our Domain
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>
          </motion.h2>
        </div>

        <Reveal width="100%">
          <div className="max-w-7xl mx-auto overflow-hidden">
            <style>{`
            .domain-carousel-wrapper {
              display: flex;
              gap: 2rem;
              animation: scrollDomains 40s linear infinite;
              width: max-content;
            }
            .domain-carousel-wrapper:hover {
              animation-play-state: paused;
            }
            @keyframes scrollDomains {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .domain-carousel-container {
              overflow: hidden;
              padding: 0 20px;
            }
          `}</style>
            <div className="domain-carousel-container">
              <div className="domain-carousel-wrapper p-4">
                {[...domains, ...domains].map((domain, index) => (
                  <div
                    key={`${domain.id}-${index}`}
                    className="flex-shrink-0 w-[350px] glass-card-base relative overflow-hidden group description-box"
                  >
                    <div className="text-5xl text-purple-500 mb-5 text-center drop-shadow-lg ">
                      <i className={`fas ${domain.icon}`}></i>
                    </div>

                    <h3 className="text-2xl text-glass-primary mb-4 text-center font-bold nw-font-color">
                      {domain.title}
                    </h3>

                    <p className="text-glass-secondary text-center mb-4 italic nw-color">
                      {domain.description}
                    </p>

                    <p className="text-glass-tertiary text-center leading-relaxed nw-color">
                      {domain.fullDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Domains

