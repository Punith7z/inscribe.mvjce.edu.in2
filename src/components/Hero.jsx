import { useEffect, useRef, useState } from 'react'

const Hero = ({ onVideoEnd }) => {
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
          ></div>
        )}
        
        {/* Tech Animations - only show after video */}
        {!showVideo && <TechAnimations />}
        
        <div className="relative z-10 text-center px-5">
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 font-montserrat transition-colors duration-1000 ${
            showVideo ? 'text-white' : 'text-heading'
          }`}>
            INSCRIBE
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto transition-colors duration-1000 ${
            showVideo ? 'text-white/90' : 'text-gray-700'
          }`}>
            Where creativity meets code, and imagination meets innovation.
          </p>
        </div>
      </section>
    </>
  )
}

// Tech Animations Component
const TechAnimations = () => {
  // Generate fixed particle data to avoid re-renders
  const particles = [
    { id: 1, left: 15, top: 20, delay: 0, duration: 12, code: '&lt;/&gt;' },
    { id: 2, left: 85, top: 15, delay: 1, duration: 18, code: '{ }' },
    { id: 3, left: 25, top: 60, delay: 2, duration: 15, code: '[]' },
    { id: 4, left: 75, top: 70, delay: 0.5, duration: 20, code: '()' },
    { id: 5, left: 45, top: 35, delay: 1.5, duration: 14, code: '=>' },
    { id: 6, left: 10, top: 80, delay: 2.5, duration: 16, code: 'const' },
    { id: 7, left: 90, top: 45, delay: 1, duration: 22, code: 'function' },
    { id: 8, left: 30, top: 10, delay: 3, duration: 13, code: 'class' },
    { id: 9, left: 65, top: 25, delay: 0.8, duration: 17, code: '&lt;/&gt;' },
    { id: 10, left: 20, top: 50, delay: 2.2, duration: 19, code: '{ }' },
    { id: 11, left: 80, top: 60, delay: 1.2, duration: 21, code: '[]' },
    { id: 12, left: 50, top: 85, delay: 0.3, duration: 14, code: '()' },
    { id: 13, left: 35, top: 30, delay: 2.8, duration: 16, code: '=>' },
    { id: 14, left: 70, top: 75, delay: 1.8, duration: 18, code: 'const' },
    { id: 15, left: 5, top: 40, delay: 0.6, duration: 15, code: 'function' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Floating code-like particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-accent-2/60 font-mono text-base md:text-lg font-bold drop-shadow-md"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `floatParticle ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            {particle.code === '&lt;/&gt;' ? '</>' : particle.code}
          </div>
        ))}
      </div>
      
      {/* Geometric shapes - more visible and dynamic */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-2/45 rotate-45 shadow-lg" style={{ animation: 'spin-slow 20s linear infinite' }}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-accent-2/45 rounded-full shadow-lg" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}></div>
      <div className="absolute top-1/3 right-1/4 w-14 h-14 border-2 border-accent-2/45 rotate-12 shadow-lg" style={{ animation: 'bounce-slow 4s ease-in-out infinite' }}></div>
      <div className="absolute top-2/3 left-1/5 w-12 h-12 border-2 border-accent-2/45 rounded-full shadow-lg" style={{ animation: 'pulse-glow 3.5s ease-in-out infinite 1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border-2 border-accent-2/35 rotate-45 shadow-md" style={{ animation: 'spin-slow 30s linear infinite reverse' }}></div>
      <div className="absolute top-1/2 right-1/5 w-8 h-8 border-2 border-accent-2/35 rounded-full shadow-md" style={{ animation: 'pulse-glow 4s ease-in-out infinite 2s' }}></div>
      
      {/* Enhanced grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,163,115,0.5) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(212,163,115,0.5) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-float 20s linear infinite'
        }}
      ></div>
      
      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(12px) rotate(90deg); opacity: 0.7; }
          50% { transform: translateY(-40px) translateX(-12px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-20px) translateX(8px) rotate(270deg); opacity: 0.65; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-25px) rotate(12deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        @keyframes grid-float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}

export default Hero

