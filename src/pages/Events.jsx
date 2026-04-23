import { useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import Footer from '../components/Footer'

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const openModal = (event) => {
    setSelectedEvent(event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Background handled globally in App.jsx */}
      </div>

      <div className="relative z-10">

        <div className="container mx-auto px-5 py-10 pt-24 max-w-6xl">
          <Link
            to="/"
            className="inline-block mb-8 px-6 py-2.5 bg-transparent border border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white rounded-full no-underline font-semibold text-lg transition-colors dark:hover:bg-[#ED3E21]/10"
          >
            ← Back to Home
          </Link>

          <h2 className="text-4xl text-center mb-12 font-montserrat font-bold text-heading dark:text-white">
            <span className="relative inline-block">
              <span className="text-heading dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#ED3E21] dark:to-[#4B7BFF]">
                Our Events
              </span>
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-heading dark:bg-gradient-to-r dark:from-[#ED3E21] dark:to-brand-blue rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => openModal(event)}
                className="glass-card-base overflow-hidden cursor-pointer group"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold tracking-wide pointer-events-none rounded-t-[22px]">
                    Click to view
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-glass-primary mb-2.5 font-bold">{event.title}</h3>
                  <p className="italic text-glass-secondary mb-2.5">{event.tagline}</p>
                  <p className="text-glass-tertiary text-base">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedEvent && (
            <div
              className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                className="glass-card-base max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-3xl text-glass-primary font-bold cursor-pointer hover:text-glass-secondary transition-colors z-10"
                >
                  &times;
                </button>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full max-h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-glass-primary text-xl mb-2.5 font-bold">{selectedEvent.title}</h3>
                <p className="italic text-glass-secondary mb-2.5">{selectedEvent.tagline}</p>
                <p className="text-glass-tertiary text-base">{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Events

