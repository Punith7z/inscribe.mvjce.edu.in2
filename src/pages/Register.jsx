import { useState, useEffect } from 'react'
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
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-5 pt-24">
        <div className="max-w-4xl w-full card-gradient rounded-3xl border border-black/5 shadow-lg p-9 text-center">
          <h1 className="font-montserrat text-4xl m-0 mb-2.5 text-heading">
            Event Registration
          </h1>
          <p 
            id="status" 
            className="text-gray-600 m-0 mb-5"
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
            className="inline-block bg-gradient-primary text-white no-underline font-extrabold py-3.5 px-7 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            target={registrationLink && registrationLink !== '#' ? '_blank' : undefined}
            rel={registrationLink && registrationLink !== '#' ? 'noopener noreferrer' : undefined}
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Open Form
          </a>
          <div className="mt-3.5 text-sm text-gray-600">
            This button opens the form in a new tab when available.
          </div>
          {registrationLink && registrationLink !== '#' && (
            <div id="embedSlot" className="mt-5">
              <iframe
                src={registrationLink}
                className="w-full h-[70vh] border-0 rounded-2xl shadow-lg"
                title="Registration Form"
              ></iframe>
            </div>
          )}

          {/* Overlay Modal */}
          {showOverlay && (
            <div
              className="fixed inset-0 bg-[rgba(255,249,227,0.95)] flex items-center justify-center z-10"
              onClick={closeOverlay}
            >
              <div
                className="max-w-md w-[92%] bg-gradient-to-br from-white/90 to-white/85 border border-black/5 rounded-2xl shadow-lg p-7 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="m-0 mb-2 text-heading font-montserrat font-bold">
                  We're recruiting soon
                </h2>
                <p className="m-0 mb-4 text-gray-700">
                  No active registration is available at the moment. Please check back shortly.
                </p>
                <button
                  onClick={closeOverlay}
                  className="inline-block mt-1.5 py-2.5 px-4.5 w-32 rounded-full bg-gradient-primary text-white font-extrabold no-underline border-0 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200"
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

