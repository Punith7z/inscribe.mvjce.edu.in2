import { useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const AnimatedBackground = () => {
  const { theme } = useTheme()
  const [particles, setParticles] = useState([])
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Generate floating particles/equations for dark theme
    if (theme === 'dark') {
      const mathExpressions = [
        '(12+12)', '-15+6', '3y', '24', '12', '17+6-4', '-8', '5x9/8',
        'x²', '∫', '∑', 'π', '√', 'α', 'β', 'γ', 'δ', 'ε'
      ]

      // Reduce particle count on mobile for better performance
      const particleCount = isMobile ? 8 : 15

      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        text: mathExpressions[i % mathExpressions.length],
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        size: isMobile ? 10 + Math.random() * 6 : 12 + Math.random() * 8,
        color: i % 2 === 0 ? '#FF4B4B' : '#4B7BFF', // Red or Blue
        shadowColor: i % 2 === 0 ? '255, 75, 75' : '75, 123, 255'
      }))

      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [theme, isMobile])

  return (
    <div className="animated-bg">
      {/* Floating shapes - visible in both themes - scaled for mobile */}
      <div
        className="floating-shape"
        style={{
          width: isMobile ? '60px' : '100px',
          height: isMobile ? '60px' : '100px',
          top: '10%',
          left: '10%',
          animationDelay: '0s'
        }}
      ></div>
      <div
        className="floating-shape"
        style={{
          width: isMobile ? '90px' : '150px',
          height: isMobile ? '90px' : '150px',
          top: '60%',
          right: '10%',
          animationDelay: '5s'
        }}
      ></div>
      <div
        className="floating-shape"
        style={{
          width: isMobile ? '50px' : '80px',
          height: isMobile ? '50px' : '80px',
          bottom: '20%',
          left: '50%',
          animationDelay: '10s'
        }}
      ></div>
      <div
        className="floating-shape"
        style={{
          width: isMobile ? '80px' : '120px',
          height: isMobile ? '80px' : '120px',
          top: '30%',
          right: '30%',
          animationDelay: '15s'
        }}
      ></div>

      {/* Red/Blue glowing particles for dark theme */}
      {theme === 'dark' && (
        <>
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute font-mono font-bold opacity-60"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                fontSize: `${particle.size}px`,
                color: particle.color,
                animation: `floatParticle ${particle.duration}s infinite ease-in-out`,
                animationDelay: `${particle.delay}s`,
                textShadow: `0 0 10px rgba(${particle.shadowColor},0.5), 0 0 20px rgba(${particle.shadowColor},0.3)`,
                filter: 'blur(0.5px)'
              }}
            >
              {particle.text}
            </div>
          ))}

          {/* Additional sparkle particles */}
          {Array.from({ length: 20 }).map((_, i) => {
            const isRed = i % 2 === 0;
            const color = isRed ? '#FF4B4B' : '#4B7BFF';
            const shadow = isRed ? '255, 75, 75' : '75, 123, 255';

            return (
              <div
                key={`sparkle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: color,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `sparkle ${3 + Math.random() * 2}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 3}s`,
                  boxShadow: `0 0 6px rgba(${shadow},0.8), 0 0 12px rgba(${shadow},0.5)`
                }}
              ></div>
            )
          })}
        </>
      )}

      <style>{`
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(-30px) translateX(15px) rotate(90deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-60px) translateX(-15px) rotate(180deg); 
            opacity: 0.5; 
          }
          75% { 
            transform: translateY(-30px) translateX(10px) rotate(270deg); 
            opacity: 0.55; 
          }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.5); 
            opacity: 0.8; 
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBackground

