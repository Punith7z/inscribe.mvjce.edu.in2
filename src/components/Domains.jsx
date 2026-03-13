<<<<<<< HEAD
import { domains } from '../data/domains'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const Domains = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'fade-in'
  })

  return (
    <section
      id="domain-info"
      ref={ref}
      className="py-20 px-5 relative overflow-hidden"
    >
      <div>
        <h2 className="section-title text-4xl mb-12 text-center text-heading dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] dark:bg-clip-text dark:!text-transparent font-montserrat font-bold relative pb-4">
          Our Domains
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-heading dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] rounded"></span>
        </h2>

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
                  className="flex-shrink-0 w-[350px] glass-effect card-gradient rounded-3xl p-8 border-2 border-accent-2 hover-glow glass-card relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/10 to-transparent transform -translate-x-full transition-transform duration-600 group-hover:translate-x-full opacity-0 group-hover:opacity-100 z-0"></div>

                  <div className="text-5xl text-accent-2 mb-5 text-center drop-shadow-lg">
                    <i className={`fas ${domain.icon}`}></i>
                  </div>

                  <h3 className="text-2xl text-heading mb-4 text-center font-bold">
                    {domain.title}
                  </h3>

                  <p className="text-gray-700 text-center mb-4 italic">
                    {domain.description}
                  </p>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {domain.fullDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
=======
import { motion } from 'framer-motion'
import { domains } from '../data/domains'
import { Link } from 'react-router-dom'
import Reveal from './animations/Reveal'

const Domains = () => {
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
            className="section-title text-4xl text-center text-heading dark:text-transparent dark:bg-dark-blend-gradient dark:bg-clip-text font-montserrat font-bold relative pb-4"
          >
            Our Domain
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
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
                    className="flex-shrink-0 w-[350px] liquid-glass card-gradient rounded-3xl p-8 border-2 border-accent-2 hover-glow glass-card relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/10 to-transparent transform -translate-x-full transition-transform duration-600 group-hover:translate-x-full opacity-0 group-hover:opacity-100 z-0"></div>

                    <div className="text-5xl text-accent-2 mb-5 text-center drop-shadow-lg">
                      <i className={`fas ${domain.icon}`}></i>
                    </div>

                    <h3 className="text-2xl text-heading mb-4 text-center font-bold">
                      {domain.title}
                    </h3>

                    <p className="text-gray-700 text-center mb-4 italic">
                      {domain.description}
                    </p>

                    <p className="text-gray-600 text-center leading-relaxed">
                      {domain.fullDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
      </div>
    </section>
  )
}

export default Domains

