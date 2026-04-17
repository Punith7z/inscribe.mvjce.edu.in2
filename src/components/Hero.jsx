import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Hero = ({ onVideoEnd }) => {
  const { theme } = useTheme()
  const [showVideo, setShowVideo] = useState(false)
  const [titleNumber, setTitleNumber] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === 5 ? 0 : prev + 1))
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [titleNumber])

  useEffect(() => {
    if (onVideoEnd) {
      onVideoEnd()
    }
  }, [onVideoEnd])

  return (
    <>
      <section
        id="hero-video-section"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ zIndex: 3 }}
      >
        {/* Background color after video - always present but behind video initially */}
        {!showVideo && (
          <div
            className="absolute inset-0 hero-bg"
            style={{
              zIndex: 0
            }}
          >
            {/* Transparent background to show global fixed background */}
          </div>
        )}

        <div className="relative z-10 text-center px-5">
            <div className="relative flex justify-center items-center w-full min-h-[100px] md:min-h-[150px] lg:min-h-[200px]">
              {/* Light Mode Text */}
              <div 
                className={`absolute transition-all duration-1000 ease-in-out ${
                  theme === 'light' ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-95 pointer-events-none'
                }`}
              >
                <h1
                  className={`text-6xl md:text-8xl lg:text-[9rem] font-bold font-cinzel tracking-tight flex justify-center gap-1 flex-wrap drop-shadow-xl ${showVideo ? 'text-white' : ''
                    }`}
                >
                  {showVideo ? (
                    "INSCRIBE"
                  ) : (
                    "INSCRIBE".split('').map((char, index) => {
                      let colorClass = ''

                      const blendClass = 'bg-gradient-to-r from-[#FF4B4B] to-[#4B7BFF] bg-clip-text !text-transparent'
                      const redClass = '!text-[#FF4B4B]'
                      const blueClass = '!text-[#4B7BFF]'

                      if (index % 4 === 0) colorClass = redClass
                      else if (index % 4 === 2) colorClass = blueClass
                      else colorClass = blendClass

                      return (
                        <span key={index} className={colorClass}>
                          {char}
                        </span>
                      )
                    })
                  )}
                </h1>
              </div>

              {/* Dark Mode Image */}
              <div 
                className={`absolute transition-all duration-1000 ease-in-out w-[90%] md:w-[350px] lg:w-[450px] ${
                  theme === 'dark' ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105 pointer-events-none'
                }`}
              >
                <img
                  src="/images/logo letter.png"
                  alt="INSCRIBE logo"
                  className="w-full h-auto mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]"
                />
              </div>
            </div>
            <div className="relative flex w-full justify-center overflow-hidden h-[100px] md:h-[80px] mt-4">
              {[
                "Where creativity meets code, and imagination meets innovation.",
                "Where design meets technology, and ideas meet progress.",
                "Where art meets logic, and dreams meet invention.",
                "Where expression meets engineering, and thinking meets advancement.",
                "Where vision meets development, and concepts meet transformation.",
                "Where ingenuity meets algorithms, and mind meets evolution."
              ].map((phrase, index) => (
                <motion.p
                  key={index}
                  className={`absolute w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl px-4 mx-auto drop-shadow-lg font-playfair italic font-medium leading-relaxed transition-colors duration-1000 ${
                    showVideo ? 'text-white/90' : theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                  }
                >
                  {phrase}
                </motion.p>
              ))}
            </div>
        </div>
      </section>
    </>
  )
}


export default Hero
