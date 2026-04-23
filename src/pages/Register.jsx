import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CircleCheck } from 'lucide-react'

import Footer from '../components/Footer'
import { useTheme } from '../contexts/ThemeContext'

const Register = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    usn: '',
    email: '',
    event: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send data to a backend API
    console.log('Registration Data:', formData)
    setIsSubmitted(true)
    
    // Reset form after a few seconds
    setTimeout(() => {
      setFormData({ name: '', usn: '', email: '', event: '' })
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="relative min-h-screen text-[#73634F] dark:text-white overflow-x-hidden">


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-5 pt-24">
        
        {/* Back to Home Button - Top Left */}
        <Link
          to="/"
          className="absolute top-24 left-5 md:top-28 md:left-10 px-6 py-2.5 bg-transparent border border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white rounded-full no-underline font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl dark:hover:bg-[#ED3E21]/10"
        >
          <ArrowLeft size={18} className="mr-2 inline-block align-text-bottom" />
          Back to Home
        </Link>

        {/* Card */}
        <div className="max-w-xl w-full glass-card-base text-center mt-16 md:mt-0">
          <h1 className="font-montserrat text-4xl m-0 mb-6 text-glass-primary">
            Register for Event
          </h1>
          
          {isSubmitted ? (
            <div className="bg-gradient-to-br from-green-400/30 to-green-300/20 border border-green-300/50 text-green-700 p-6 rounded-2xl mb-4 transition-all duration-300">
              <CircleCheck size={36} className="mb-3 mx-auto" />
              <h2 className="text-xl font-bold font-montserrat mb-2">Registration Successful!</h2>
              <p>Thank you for registering. We will contact you shortly with more details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold px-2 text-glass-primary">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name" 
                  className="px-5 py-3 rounded-xl bg-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-glass-primary font-poppins transition-all placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="usn" className="font-semibold px-2 text-glass-primary">College USN</label>
                <input 
                  type="text" 
                  id="usn" 
                  name="usn" 
                  value={formData.usn}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 1MV21CS100" 
                  className="px-5 py-3 rounded-xl bg-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-glass-primary font-poppins transition-all uppercase placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold px-2 text-glass-primary">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email" 
                  className="px-5 py-3 rounded-xl bg-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-glass-primary font-poppins transition-all placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="event" className="font-semibold px-2 text-glass-primary">Select Event</label>
                <select 
                  id="event" 
                  name="event" 
                  value={formData.event}
                  onChange={handleChange}
                  required
                  className="px-5 py-3 rounded-xl bg-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-glass-primary font-poppins transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Choose an event...</option>
                  <option value="Meme Arena">Meme Arena</option>
                  <option value="Animaze">Animaze - Anime Quiz</option>
                  <option value="Poster Palooza">Poster Palooza</option>
                  <option value="3D Forge">3D Forge Workshop</option>
                  <option value="Tech Titan">Tech Titan - ML Quiz</option>
                </select>
              </div>

              <button 
                type="submit" 
                className={`mt-4 py-3.5 px-7 text-white font-extrabold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-montserrat text-lg w-full md:w-auto self-center dark-hover-effect`}
                style={{
                  backgroundColor: theme === 'dark' ? 'transparent' : '#3D0A05',
                  border: theme === 'dark' ? '2px solid #ED3E21' : '2px solid transparent'
                }}
              >
                Complete Registration
              </button>

            </form>
          )}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register

