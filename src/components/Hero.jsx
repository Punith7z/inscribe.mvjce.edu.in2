import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Hero = ({ onVideoEnd }) => {
  const { theme } = useTheme()
  const [showVideo, setShowVideo] = useState(false)

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
          <h1
            className={`text-5xl md:text-7xl font-bold mb-8 font-montserrat transition-colors duration-1000 flex justify-center gap-1 flex-wrap ${showVideo || theme === 'light' ? 'text-white' : 'text-white'
              }`}
          >
            {showVideo || theme === 'light' ? (
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
          <p
            className={`text-xl md:text-2xl max-w-2xl mx-auto transition-colors duration-1000 drop-shadow-md font-semibold ${showVideo || theme === 'light' ? 'text-white/90' : 'text-white'
              }`}
          >
            Where creativity meets code, and imagination meets innovation.
          </p>
        </div>
      </section>
    </>
  )
}


export default Hero
