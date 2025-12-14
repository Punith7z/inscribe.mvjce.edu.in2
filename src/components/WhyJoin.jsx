import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const WhyJoin = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'fade-in'
  })

  const reasons = [
    {
      icon: 'fa-lightbulb',
      title: 'Learn & Grow',
      description: 'Access workshops, resources, and mentorship from industry experts and fellow creators.'
    },
    {
      icon: 'fa-network-wired',
      title: 'Build Connections',
      description: 'Connect with like-minded individuals, form teams, and build lasting friendships.'
    },
    {
      icon: 'fa-project-diagram',
      title: 'Real Projects',
      description: 'Work on real-world projects that matter. Build your portfolio and gain experience.'
    },
    {
      icon: 'fa-star',
      title: 'Showcase Talent',
      description: 'Participate in competitions, exhibitions, and showcases to display your creativity.'
    }
  ]

  return (
    <section
      id="why-join"
      ref={ref}
      className="py-16 px-5 relative overflow-hidden"
    >
      <div>
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Why Join Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-7xl mx-auto overflow-hidden">
          <style>{`
            .reasons-carousel-wrapper {
              display: flex;
              gap: 2rem;
              animation: scrollReasons 40s linear infinite;
              width: max-content;
            }
            .reasons-carousel-wrapper:hover {
              animation-play-state: paused;
            }
            @keyframes scrollReasons {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .reasons-carousel-container {
              overflow: hidden;
              padding: 0 20px;
            }
          `}</style>
          <div className="reasons-carousel-container">
            <div className="reasons-carousel-wrapper p-4">
              {[...reasons, ...reasons].map((reason, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] glass-effect card-gradient rounded-3xl p-8 text-center hover-glow glass-card border border-black/5 relative overflow-hidden cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>

                  <div className="relative z-10">
                    <div className="text-4xl text-accent-2 mb-5 drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <i className={`fas ${reason.icon}`}></i>
                    </div>

                    <h3 className="text-xl text-heading mb-4 font-bold">
                      {reason.title}
                    </h3>

                    <p className="text-gray-600 text-center leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin

