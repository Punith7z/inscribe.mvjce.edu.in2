
import { Link } from 'react-router-dom'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'
import { useTheme } from '../contexts/ThemeContext'

const EventsPreview = () => {
  const { theme } = useTheme()
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'scale'
  })

  return (
    <section
      id="events"
      ref={ref}
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
    >
      <div className="w-full transition-all duration-1000 ease-out">
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          Our Events
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-accent-2/15 border border-black/5 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10">
            <p className="text-gray-700 mb-10 text-lg">
              "Explore our exciting events that bring people together to learn, share, and celebrate innovation.
              From workshops to cultural fests, there's something for everyone!"
            </p>

            <Link
              to="/events"
              className="inline-block px-8 py-4 rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-white dark-hover-effect"
              style={{
                backgroundColor: theme === 'dark' ? 'transparent' : '#3D0A05',
                border: theme === 'dark' ? '2px solid #ED3E21' : '2px solid transparent'
              }}
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

