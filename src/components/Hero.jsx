import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Hero = ({ onVideoEnd }) => {
  const { theme } = useTheme()
  // Check if video has already been played in this session
  const hasPlayedVideo = sessionStorage.getItem('introVideoPlayed') === 'true'

  const [showVideo, setShowVideo] = useState(!hasPlayedVideo)
  const [videoEnded, setVideoEnded] = useState(hasPlayedVideo)
  const videoRef = useRef(null)
  const hasInterrupted = useRef(false)

  useEffect(() => {
    // If video already played, trigger onVideoEnd immediately and skip video logic
    if (hasPlayedVideo) {
      if (onVideoEnd) {
        onVideoEnd()
      }
      return
    }

    const video = videoRef.current
    if (!video) return

    let hasEnded = false

    const stopVideo = () => {
      if (hasInterrupted.current) return
      hasInterrupted.current = true

      if (video) {
        video.pause()
      }
      setShowVideo(false)
      setVideoEnded(true)
      // Mark video as played
      sessionStorage.setItem('introVideoPlayed', 'true')
      if (onVideoEnd) {
        onVideoEnd()
      }
    }

    const handleEnded = () => {
      if (hasInterrupted.current) return
      hasEnded = true
      hasInterrupted.current = true
      setVideoEnded(true)
      setShowVideo(false)
      // Mark video as played
      sessionStorage.setItem('introVideoPlayed', 'true')
      if (onVideoEnd) {
        onVideoEnd()
      }
    }

    const handleLoadedData = () => {
      // Try to play the video
      video.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
        stopVideo()
      })
    }

    // Stop video on scroll (only if significant scroll)
    const handleScroll = () => {
      // Stop if user scrolls more than 100px or 30% of viewport height
      if ((window.scrollY > 100 || window.scrollY > window.innerHeight * 0.3) && !hasInterrupted.current) {
        stopVideo()
      }
    }

    // Stop video on user interaction (click, keypress, etc.)
    const handleUserInteraction = (e) => {
      // Don't stop on navbar clicks
      if (e.target.closest('nav') || e.target.closest('button[aria-label="Menu"]')) {
        return
      }
      if (!hasInterrupted.current) {
        stopVideo()
      }
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('loadeddata', handleLoadedData)
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })

    // Fallback: Hide video after 15 seconds even if it hasn't ended
    const timeout = setTimeout(() => {
      if (video && !hasEnded && !hasInterrupted.current) {
        stopVideo()
      }
    }, 15000)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadeddata', handleLoadedData)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      clearTimeout(timeout)
    }
  }, [onVideoEnd, hasPlayedVideo])

  return (
    <>
      {/* Video - fixed position, covers entire viewport when showing */}
      {showVideo && (
        <video
          ref={videoRef}
          id="hero-video"
          className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none"
          muted
          playsInline
          autoPlay
          style={{
            zIndex: 1,
            position: 'fixed'
          }}
        >
          <source src="/images/ani.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark overlay for video */}
      {showVideo && (
        <div
          className="fixed top-0 left-0 w-screen h-screen pointer-events-none transition-opacity duration-1000"
          style={{
            backgroundColor: 'rgba(10, 15, 28, 0.45)',
            zIndex: 2
          }}
        ></div>
      )}

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
            {theme === 'dark' && <div className="hero-glow-overlay"></div>}
          </div>
        )}



        <div className="relative z-10 text-center px-5">
          {theme !== 'dark' && !showVideo ? (
            <h1 className="section-title text-5xl md:text-7xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
              INSCRIBE
            </h1>
          ) : (
            <h1
              className={`text-5xl md:text-7xl font-bold mb-4 font-montserrat transition-colors duration-1000 flex justify-center gap-1 flex-wrap ${showVideo ? 'text-white' : theme === 'dark' ? 'text-white' : 'text-heading'
                }`}
            >
              {/* Pattern: Red, White, Blue, White, Blend, White, Blue, White */}
              {"INSCRIBE".split('').map((char, index) => {
                let colorClass = ''
                // Only apply colors if not showing video (or maybe even if showing video? User said "in the hero section" usually implies the final state. 
                // But during video it might be better white. 
                // The original code toggled text-white.
                // Let's assume we want the colors in the final state (theme dark/light) but maybe White during video?
                // The prompt says "color used in dark theme" etc.
                // Let's keep it simple: Use dynamic classes.

                const blendClass = 'bg-gradient-to-r from-[#FF4B4B] to-[#4B7BFF] bg-clip-text !text-transparent'
                const redClass = '!text-[#FF4B4B]'
                const blueClass = '!text-[#4B7BFF]'

                if (!showVideo) {
                  if (index % 4 === 0) colorClass = redClass // I, R - Red
                  else if (index % 4 === 2) colorClass = blueClass // S, B - Blue
                  else colorClass = blendClass // N, C, I, E - Blend
                } else {
                  colorClass = 'text-white'
                }

                return (
                  <span key={index} className={colorClass}>
                    {char}
                  </span>
                )
              })}
            </h1>
          )}
          <p
            className={`text-xl md:text-2xl max-w-2xl mx-auto transition-colors duration-1000 ${showVideo ? 'text-white/90' : theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
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
