import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'
import { useEffect, useState } from 'react'

const About = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'fade-in'
  })
  const [scrollPastHero, setScrollPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-video-section')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setScrollPastHero(window.scrollY > heroHeight * 0.8)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldShow = isVisible && scrollPastHero

  return (
    <section
      id="about"
      ref={ref}
      className={`pt-32 pb-16 px-5 relative min-h-[40vh] flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
        shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div>
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          About Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card-base relative z-10 group overflow-hidden description-box">
          <p className="text-base leading-relaxed text-glass-secondary relative z-10 nw-color">
            Welcome to Inscribe — where tech meets creativity, and ideas become reality.
            We're a community of makers, thinkers, and creators who believe that the best
            solutions come from blending technical expertise with creative vision. Whether
            you're coding the next big app, designing stunning visuals, or building immersive
            experiences, Inscribe is your space to learn, create, and grow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

