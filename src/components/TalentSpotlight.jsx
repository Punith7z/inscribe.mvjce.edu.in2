<<<<<<< HEAD
import { domainLeads } from '../data/team'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TalentSpotlight = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
=======

import { domainLeads } from '../data/team'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const TalentSpotlight = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'slide-right'
  })
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

  return (
    <section
      id="talent-spotlight"
      ref={ref}
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
    >
<<<<<<< HEAD
      <div
        className={`transition-all duration-1000 ease-out w-full ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
          }`}
      >
=======
      <div className="w-full transition-all duration-1000 ease-out">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Domain Leads
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {domainLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      </div>
    </section>
  )
}

const LeadCard = ({ lead }) => {
  return (
<<<<<<< HEAD
    <div className="w-full max-w-[280px] card-gradient rounded-3xl overflow-hidden border border-black/5 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-accent-2/15 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={lead.image?.startsWith('/') ? lead.image : `/images/${lead.image}`}
=======
    <div className="w-full max-w-[280px] liquid-glass card-gradient rounded-3xl overflow-hidden border border-black/5 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-accent-2/15 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={lead.image?.startsWith('/') ? lead.image : `/ images / ${lead.image} `}
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
          alt={lead.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/images/inslogo.jpg'
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 text-center flex flex-col flex-1">
        <h4 className="text-heading font-bold mb-2 text-xl">
          {lead.name}
        </h4>
        <p className="text-accent-2 font-semibold mb-2 text-base">
          {lead.role}
        </p>
        {lead.domain && (
          <p className="text-gray-600 mb-4 text-sm">
            {lead.domain}
          </p>
        )}

        {/* Social Links */}
        {(lead.social?.instagram || lead.social?.github || lead.social?.linkedin) && (
          <div className="flex justify-center gap-4 mt-auto">
            {lead.social.linkedin && (
              <a
                href={lead.social.linkedin}
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
            {lead.social.github && (
              <a
                href={lead.social.github}
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
            {lead.social.instagram && (
              <a
                href={lead.social.instagram}
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

export default TalentSpotlight
