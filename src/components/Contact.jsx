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

<<<<<<< HEAD
        <div className="max-w-4xl mx-auto glass-effect card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 group overflow-hidden relative">
=======
        <div className="max-w-4xl mx-auto liquid-glass card-gradient rounded-3xl p-10 text-center hover-glow glass-card border border-black/5 group overflow-hidden relative">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-2/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100 z-0"></div>
          <div className="relative z-10">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Have questions? Want to collaborate? Or just say hello? We'd love to hear from you!
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:contact@inscribe.com"
<<<<<<< HEAD
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold text-white bg-accent-2 dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1"
=======
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold text-[#73634F] dark:text-white bg-transparent border-2 border-transparent dark:border-[#ED3E21] shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-[#ED3E21]/60"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
              >
                <i className="fas fa-envelope text-2xl"></i>
                <span className="text-lg">Email Us</span>
              </a>
              <a
                href="https://www.instagram.com/inscribe.mvjce/"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold text-white bg-accent-2 dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1"
=======
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold text-[#73634F] dark:text-white bg-transparent border-2 border-transparent dark:border-[#E1306C] shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-[#E1306C]/60"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
              >
                <i className="fab fa-instagram text-2xl"></i>
                <span className="text-lg">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/inscribe-mvjce24/"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold text-white bg-accent-2 dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1"
=======
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full no-underline font-semibold text-[#73634F] dark:text-white bg-transparent border-2 border-transparent dark:border-[#0077B5] shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1 dark:hover:bg-[#0077B5]/60"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
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

