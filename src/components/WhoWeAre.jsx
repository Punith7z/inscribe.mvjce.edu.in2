import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const WhoWeAre = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-left'
  })

  return (
    <section
      id="who-we-are"
      ref={ref}
      className="py-16 px-5 relative min-h-[40vh] flex flex-col items-center justify-center"
    >
      <div className="w-full transition-all duration-1000 ease-out">
        <h2 className="section-title text-4xl mb-8 text-center text-heading font-montserrat font-bold relative pb-4">
          Who We Are
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card-base">
          <p className="text-base leading-relaxed text-glass-secondary">
            CS majors who secretly love typography. Design students curious about code.
            Anyone who refuses to choose between logic and imagination. We're building a
            community of well-rounded creators who tackle complex problems with both technical
            brilliance and creative vision.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

