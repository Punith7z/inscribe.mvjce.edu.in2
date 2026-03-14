import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Register = () => {
  const [registrationLink, setRegistrationLink] = useState('#')
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    // Check if there's a registration link (you can modify this logic)
    const link = registrationLink && registrationLink !== '#' ? registrationLink : null
    if (!link) {
      // No active registration
    }
  }, [registrationLink])

  const handleOpenForm = (e) => {
    if (registrationLink && registrationLink !== '#') {
      window.open(registrationLink, '_blank')
    } else {
      e.preventDefault()
      setShowOverlay(true)
    }
  }

  const closeOverlay = () => {
    setShowOverlay(false)
  }

  return (
    <div className="relative min-h-screen text-[#73634F] dark:text-white overflow-x-hidden">
      {/* Spline Background */}
      {/* Spline Background handled globally */}

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-5 pt-24">

        {/* Back to Home Button - Top Left */}
        <Link
          to="/"
          className="absolute top-24 left-5 md:top-28 md:left-10 px-6 py-2.5 bg-transparent border border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white rounded-full no-underline font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl dark:hover:bg-[#ED3E21]/10"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Home
        </Link>

        {/* Card */}
        <div className="max-w-4xl w-full bg-white/60 dark:bg-black/40 rounded-3xl border border-black/5 dark:border-white/10 shadow-lg p-9 text-center backdrop-blur-sm mt-16 md:mt-0">
          <h1 className="font-montserrat text-4xl m-0 mb-2.5 text-[#73634F] dark:text-white">
            Event Registration
          </h1>
          <p
            id="status"
            className="text-[#73634F] dark:text-gray-200 m-0 mb-5"
          >
            {registrationLink && registrationLink !== '#'
              ? 'Registrations are open. You can fill the form below or open it in a new tab.'
              : 'There are no active forms right now. When registrations open, the form will appear here.'}
          </p>
          <div className="h-2.5"></div>
          <a
            id="registrationLink"
            href={registrationLink}
            onClick={handleOpenForm}
            className="inline-block bg-transparent border border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white no-underline font-extrabold py-3.5 px-7 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 dark:hover:bg-[#ED3E21]/10"
            target={registrationLink && registrationLink !== '#' ? '_blank' : undefined}
            rel={registrationLink && registrationLink !== '#' ? 'noopener noreferrer' : undefined}
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Open Form
          </a>
          <div className="mt-3.5 text-sm text-[#73634F] dark:text-gray-300">
            This button opens the form in a new tab when available.
          </div>
          {registrationLink && registrationLink !== '#' && (
            <div id="embedSlot" className="mt-5">
              <iframe
                src={registrationLink}
                className="w-full h-[70vh] border-0 rounded-2xl shadow-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm"
                title="Registration Form"
              ></iframe>
            </div>
          )}

          {/* Overlay Modal */}
          {showOverlay && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={closeOverlay}
            >
              <div
                className="max-w-md w-[92%] bg-white/90 dark:bg-black/40 backdrop-blur-sm border border-black/5 dark:border-[#ED3E21] rounded-2xl shadow-2xl p-7 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="m-0 mb-2 text-[#73634F] dark:text-white font-montserrat font-bold">
                  We're recruiting soon
                </h2>
                <p className="m-0 mb-4 text-[#73634F] dark:text-gray-300">
                  No active registration is available at the moment. Please check back shortly.
                </p>
                <button
                  onClick={closeOverlay}
                  className="inline-block mt-1.5 py-2.5 px-4.5 w-32 rounded-full bg-transparent border border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white font-extrabold no-underline cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 dark:hover:bg-[#ED3E21]/10"
                >
                  Okay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register

