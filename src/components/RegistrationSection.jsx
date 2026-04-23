import { Link } from 'react-router-dom'
import { SquarePen } from 'lucide-react'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const RegistrationSection = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-left'
  })

  return (
    <section
      id="event-register"
      ref={ref}
      className="py-16 px-5 relative min-h-[50vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          Register for Upcoming Events
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card-base text-center">
          <p className="text-glass-secondary mb-8 text-lg leading-relaxed">
            Be the first to know when registrations go live. We open limited slots for workshops,
            competitions, and showcases — save your spot as soon as we announce. Tap the button below
            to go to our registration page.
          </p>

          <Link
            to="/register"
            className="inline-block px-8 py-4 rounded-full no-underline font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600"
          >
            <SquarePen size={18} className="mr-2 inline-block align-text-bottom" />
            Open Registration
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection

