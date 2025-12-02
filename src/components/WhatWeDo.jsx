import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhatWeDo = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      id="what-we-do" 
      ref={ref}
      className="py-16 px-5 relative min-h-[40vh] flex flex-col items-center justify-center"
    >
      <div 
        className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          What We Do
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto card-gradient rounded-3xl p-10 text-center relative z-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-accent-2/15 border border-black/5 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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

