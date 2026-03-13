<<<<<<< HEAD
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhoWeAre = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
=======
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const WhoWeAre = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-left'
  })
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

  return (
    <section
      id="who-we-are"
      ref={ref}
      className="py-16 px-5 relative min-h-[40vh] flex flex-col items-center justify-center"
    >
<<<<<<< HEAD
      <div
        className={`transition-all duration-1000 ease-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
          }`}
      >
=======
      <div className="w-full transition-all duration-1000 ease-out">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          Who We Are
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

<<<<<<< HEAD
        <div className="max-w-4xl mx-auto glass-effect card-gradient rounded-3xl p-10 text-center relative z-10 hover-glow glass-card group overflow-hidden">
=======
        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center relative z-10 hover-glow glass-card group overflow-hidden">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
          <p className="text-base leading-relaxed text-gray-800 relative z-10">
            CS majors who secretly love typography. Design students curious about code.
            Anyone who refuses to choose between logic and imagination. We're building a
            community of well-rounded creators who tackle complex problems with both technical
            brilliance and creative vision.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

