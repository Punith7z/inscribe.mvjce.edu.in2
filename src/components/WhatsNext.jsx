import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const WhatsNext = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
<<<<<<< HEAD
    type: 'rotate'
=======
    type: 'slide-right'
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
  })

  const nextItems = [
    {
      icon: 'fa-rocket',
      title: 'Upcoming Workshops',
      description: 'Hands-on sessions where you learn by doing. From beginner-friendly tutorials to advanced masterclasses.'
    },
    {
      icon: 'fa-trophy',
      title: 'Competitions',
      description: 'Test your skills, showcase your talent, and compete with the best. Prizes, recognition, and bragging rights await!'
    },
    {
      icon: 'fa-users',
      title: 'Community Projects',
      description: 'Collaborate on real-world projects, build your portfolio, and make an impact together.'
    }
  ]

  return (
    <section
      id="whats-next"
      ref={ref}
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          What's Next
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {nextItems.map((item, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className="glass-effect card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 relative overflow-hidden cursor-pointer group"
=======
              className="liquid-glass card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 relative overflow-hidden cursor-pointer group"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>

              <div className="relative z-10">
                <div className="text-5xl text-accent-2 mb-5 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                  <i className={`fas ${item.icon}`}></i>
                </div>

                <h3 className="text-2xl text-heading mb-4 font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatsNext

