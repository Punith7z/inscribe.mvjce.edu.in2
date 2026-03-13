import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ReadyToInscribe = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
=======
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const ReadyToInscribe = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'fade-in'
  })
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

  return (
    <section
      id="ready-to-inscribe"
      ref={ref}
      className="py-16 px-5 relative min-h-[50vh] flex flex-col items-center justify-center"
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
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Ready to Inscribe Your Mark?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto glass-effect card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 group overflow-hidden relative">
=======
        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 group overflow-hidden relative">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
          <div className="relative z-10">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Join our community and be part of something amazing. Whether you're a beginner or an expert,
              there's a place for you here. Let's create, innovate, and inspire together.
            </p>
            <Link
              to="/register"
<<<<<<< HEAD
              className="inline-block px-8 py-4 bg-gradient-primary dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue text-white rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
=======
              className="inline-block px-8 py-4 bg-transparent border-2 border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all dark:hover:bg-[#ED3E21]/60"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadyToInscribe

