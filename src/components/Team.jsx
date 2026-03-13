import { facultyCoordinator, leadership, domainLeads, teamMembers } from '../data/team'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Team = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      id="team"
      ref={ref}
      className="py-16 px-5 relative min-h-screen flex flex-col items-center justify-center"
    >
      <div
        className={`transition-all duration-1000 ease-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
          }`}
      >
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Meet Our Team
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-7xl mx-auto w-full">
          {/* Faculty Coordinator */}
          {facultyCoordinator.length > 0 && (
            <div className="mb-20">
              <h3 className="text-3xl text-center mb-10 text-accent-2 font-montserrat font-bold relative pb-4 dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] dark:bg-clip-text dark:text-transparent">
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
            <div className="mb-20">
              <h3 className="text-3xl text-center mb-10 text-accent-2 font-montserrat font-bold relative pb-4 dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] dark:bg-clip-text dark:text-transparent">
                Leadership
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] rounded"></span>
              </h3>
              <div className="flex justify-center gap-10 max-w-4xl mx-auto">
                {leadership.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Domain Leads */}
          {domainLeads.length > 0 && (
            <div className="mb-20">
              <h3 className="text-3xl text-center mb-10 text-accent-2 font-montserrat font-bold relative pb-4 dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] dark:bg-clip-text dark:text-transparent">
                Domain Leads
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-gradient-to-r dark:from-[#FF4B4B] dark:to-[#4B7BFF] rounded"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domainLeads.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Team Members by Domain */}
          {teamMembers.length > 0 && teamMembers.map((domainGroup, index) => (
            <div key={index} className="mb-20">
              <h3 className="text-2xl text-center mb-8 text-accent-2 font-montserrat font-bold">
                {domainGroup.domain}
              </h3>
              <div className="flex gap-6 overflow-x-auto pb-5 scrollbar-hide">
                <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
                {domainGroup.members.map((member) => (
                  <TeamCard key={member.id} member={member} compact />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TeamCard = ({ member, compact = false }) => {
  return (
    <div
      className={`card-gradient rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-accent-2/20 border border-black/5 cursor-pointer flex flex-col ${compact ? 'min-w-[220px]' : 'w-full max-w-[280px]'
        }`}
    >
      <div className={`relative w-full ${compact ? 'h-48' : 'h-56'} overflow-hidden`}>
        <img
          src={member.image || '/images/inslogo.jpg'}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
      </div>

      <div className={`p-6 text-center flex flex-col flex-1 ${compact ? 'p-4' : ''}`}>
        <h4 className={`text-heading font-bold mb-2 ${compact ? 'text-lg' : 'text-xl'}`}>
          {member.name}
        </h4>
        <p className={`text-accent-2 font-semibold mb-2 ${compact ? 'text-sm' : 'text-base'}`}>
          {member.role}
        </p>
        {member.domain && (
          <p className={`text-gray-600 mb-4 ${compact ? 'text-xs' : 'text-sm'}`}>
            {member.domain}
          </p>
        )}

        {/* Social Links */}
        {(member.social?.instagram || member.social?.github || member.social?.linkedin) && (
          <div className="flex justify-center gap-4 mt-auto">
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-r from-brand-red to-brand-blue rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1 hover:scale-110 border border-black/5 glass-social-btn  hover:bg-[#E1306C] hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-r from-brand-red to-brand-blue rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1 hover:scale-110 border border-black/5  glass-social-btn  hover:bg-[#333] hover:text-white"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-r from-brand-red to-brand-blue rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1 hover:scale-110 border border-black/5 glass-social-btn  hover:bg-[#0077B5] hover:text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Team

