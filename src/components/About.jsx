import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const About = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'fade-in'
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 px-5 relative min-h-[40vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          About Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center relative z-10 hover-glow glass-card group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
          <p className="text-base leading-relaxed text-gray-800 relative z-10">
            Welcome to Inscribe — where tech meets creativity, and ideas become reality.
            We're a community of makers, thinkers, and creators who believe that the best
            solutions come from blending technical expertise with creative vision. Whether
            you're coding the next big app, designing stunning visuals, or building immersive
            experiences, Inscribe is your space to learn, create, and grow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

