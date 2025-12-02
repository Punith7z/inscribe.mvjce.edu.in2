import { domains } from '../data/domains'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Domains = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      id="domain-info" 
      ref={ref}
      className="py-20 px-5 relative overflow-hidden"
    >
      <div 
        className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Our Domains
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded"></span>
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
                className="flex-shrink-0 w-[350px] card-gradient rounded-3xl p-8 border-2 border-accent-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-2/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/10 to-transparent transform -translate-x-full transition-transform duration-600 hover:translate-x-full"></div>
                
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
      </div>
    </section>
  )
}

export default Domains

