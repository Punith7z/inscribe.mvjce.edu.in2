import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-left'
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 px-5 relative min-h-[50vh] flex flex-col items-center justify-center"
    >
      <div>
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Contact Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-effect card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
          <div className="relative z-10">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Have questions? Want to collaborate? Or just say hello? We'd love to hear from you!
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:contact@inscribe.com"
                className="flex items-center gap-2 text-accent-2 hover:text-heading transition-colors no-underline"
              >
                <i className="fas fa-envelope text-2xl"></i>
                <span className="text-lg">Email Us</span>
              </a>
              <a
                href="https://www.instagram.com/inscribe.mvjce/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-2 hover:text-heading transition-colors no-underline"
              >
                <i className="fab fa-instagram text-2xl"></i>
                <span className="text-lg">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/inscribe-mvjce24/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-2 hover:text-heading transition-colors no-underline"
              >
                <i className="fab fa-linkedin text-2xl"></i>
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

