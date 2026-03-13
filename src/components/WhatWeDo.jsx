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

<<<<<<< HEAD
        <div className="max-w-4xl mx-auto glass-effect card-gradient rounded-3xl p-10 text-center relative z-10 hover-glow glass-card group overflow-hidden">
=======
        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center relative z-10 hover-glow glass-card group overflow-hidden">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
          <p className="text-base leading-relaxed text-gray-800 relative z-10">
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

