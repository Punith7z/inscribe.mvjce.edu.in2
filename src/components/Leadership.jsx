import { facultyCoordinator, leadership } from '../data/team'
<<<<<<< HEAD
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Leadership = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
=======
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const Leadership = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'fade-in'
  })
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-16 px-5 relative min-h-screen flex flex-col items-center justify-center"
    >
<<<<<<< HEAD
      <div
        className={`transition-all duration-1000 ease-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
          }`}
      >
=======
      <div className="w-full transition-all duration-1000 ease-out">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Meet Our Team
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-7xl mx-auto w-full">
          {/* Faculty Coordinator */}
          {facultyCoordinator.length > 0 && (
            <div className="mb-20">
              <h3 className="text-2xl text-center mb-10 text-accent-2 font-montserrat font-bold relative pb-4 dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] dark:bg-clip-text dark:text-transparent">
                Faculty Coordinator
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] rounded"></span>
              </h3>
              <div className="flex justify-center gap-8 flex-wrap">
                {facultyCoordinator.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Leadership */}
          {leadership.length > 0 && (
            <div>
              <h3 className="text-2xl text-center mb-10 text-accent-2 font-montserrat font-bold relative pb-4 dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] dark:bg-clip-text dark:text-transparent">
                Leadership
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] rounded"></span>
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto items-center">
                {leadership.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const TeamCard = ({ member }) => {
  return (
    <div
<<<<<<< HEAD
      className="card-gradient rounded-3xl overflow-hidden border border-black/5 flex flex-col w-full max-w-[280px] transition-all duration-300 hover:shadow-xl hover:shadow-accent-2/15 hover:-translate-y-1"
=======
      className="liquid-glass card-gradient rounded-3xl overflow-hidden border border-black/5 flex flex-col w-full max-w-[280px] transition-all duration-300 hover:shadow-xl hover:shadow-accent-2/15 hover:-translate-y-1"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
    >
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={member.image || '/images/inslogo.jpg'}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 text-center flex flex-col flex-1">
        <h4 className="text-heading font-bold mb-2 text-xl">
          {member.name}
        </h4>
        <p className="text-accent-2 font-semibold mb-2 text-base">
          {member.role}
        </p>
        {member.domain && (
          <p className="text-gray-600 mb-4 text-sm">
            {member.domain}
          </p>
        )}

        {/* Social Links */}
        {(member.social?.instagram || member.social?.github || member.social?.linkedin) && (
          <div className="flex justify-center gap-4 mt-auto">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 border border-black/5 glass-effect text-accent-2 hover:bg-[#0077B5] hover:text-white dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue dark:glass-effect-none dark:text-white dark:hover:from-[#0077B5] dark:hover:to-[#0077B5]"
=======
                className="w-9 h-9 glass-social-btn rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 hover:bg-[#0077B5] hover:text-white"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
              >
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 border border-black/5 glass-effect text-accent-2 hover:bg-[#333] hover:text-white dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue dark:glass-effect-none dark:text-white dark:hover:from-[#333] dark:hover:to-[#333]"
=======
                className="w-9 h-9 glass-social-btn rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 hover:bg-[#333] hover:text-white"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 border border-black/5 glass-effect text-accent-2 hover:bg-[#E1306C] hover:text-white dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue dark:glass-effect-none dark:text-white dark:hover:from-[#E1306C] dark:hover:to-[#E1306C]"
=======
                className="w-9 h-9 glass-social-btn rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 hover:bg-[#E1306C] hover:text-white"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Leadership
