import { useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import Navbar from '../components/Navbar'
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
    <div className="min-h-screen bg-bg-1">
      <Navbar />
      <div className="container mx-auto px-5 py-10 pt-24 max-w-6xl">
        <Link
          to="/"
          className="inline-block mb-8 px-6 py-2.5 bg-accent-2 dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue text-white rounded-full no-underline font-semibold text-lg transition-colors hover:font-bold"
        >
          ← Back to Home
        </Link>

        <h2 className="text-4xl text-center mb-12 text-heading font-montserrat font-bold">
          Our Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => openModal(event)}
              className="bg-bg-1 rounded-3xl shadow-lg border border-black/5 overflow-hidden transition-all duration-200 cursor-pointer hover:shadow-2xl hover:scale-105 hover:shadow-accent-2/20"
            >
              <div className="relative w-full h-64 overflow-hidden group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-accent-2/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold tracking-wide pointer-events-none">
                  Click to view
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-accent-2 mb-2.5 font-bold">{event.title}</h3>
                <p className="italic text-heading mb-2.5">{event.tagline}</p>
                <p className="text-gray-800 text-base">{event.description}</p>
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
              className="bg-white dark:bg-black/90 dark:border dark:border-white/10 rounded-3xl max-w-md w-full shadow-2xl relative p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-6 text-3xl text-accent-2 dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue dark:bg-clip-text dark:text-transparent font-bold cursor-pointer hover:text-heading transition-colors"
              >
                &times;
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full max-h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-accent-2 dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue dark:bg-clip-text dark:text-transparent text-xl mb-2.5 font-bold">{selectedEvent.title}</h3>
              <p className="italic text-heading dark:text-white/90 mb-2.5">{selectedEvent.tagline}</p>
              <p className="text-gray-800 dark:text-gray-300 text-base">{selectedEvent.description}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Events

