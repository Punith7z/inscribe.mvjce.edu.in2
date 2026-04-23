
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

        <div className="max-w-4xl mx-auto glass-card-base text-center description-box">
          <div>
            <p className="text-glass-secondary mb-10 text-lg nw-color">
              "Explore our exciting events that bring people together to learn, share, and celebrate innovation.
              From workshops to cultural fests, there's something for everyone!"
            </p>

            <Link
              to="/events"
              className="inline-block px-8 py-4 rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all  text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 btn-clr"
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

