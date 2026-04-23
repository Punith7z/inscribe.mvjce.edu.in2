import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const WhatWeDo = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-right'
  })

  return (
    <section
      id="what-we-do"
      ref={ref}
      className="py-16 px-5 relative min-h-[40vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          What We Do
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card-base">
          <p className="text-base leading-relaxed text-glass-secondary">
            We explore the spectrum of creation — from art that moves to ideas that build,
            from visuals that inspire to innovations that connect. Through hands-on workshops,
            collaborative projects, events and way too much caffeine we bring ideas to life,
            connect minds, and keep the creative spark alive.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

