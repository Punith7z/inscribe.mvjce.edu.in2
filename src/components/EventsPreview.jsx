<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const EventsPreview = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
=======

import { Link } from 'react-router-dom'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const EventsPreview = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'scale'
  })
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

  return (
    <section
      id="events"
      ref={ref}
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
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
          Our Events
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

<<<<<<< HEAD
        <div className="max-w-4xl mx-auto card-gradient rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-accent-2/15 border border-black/5 group overflow-hidden relative">
=======
        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-accent-2/15 border border-black/5 group overflow-hidden relative">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10">
            <p className="text-gray-700 mb-10 text-lg">
              "Explore our exciting events that bring people together to learn, share, and celebrate innovation.
              From workshops to cultural fests, there's something for everyone!"
            </p>

            <Link
              to="/events"
<<<<<<< HEAD
              className="inline-block px-8 py-4 bg-gradient-primary dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue text-white rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
=======
              className="inline-block px-8 py-4 bg-transparent border-2 border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all dark:hover:bg-[#ED3E21]/60"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPreview

