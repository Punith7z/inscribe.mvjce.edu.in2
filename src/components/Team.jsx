import { facultyCoordinator, leadership, domainLeads, teamMembers } from '../data/team'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Github, Instagram, Linkedin } from './icons/socialIcons'

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
              <h3 className="text-3xl text-center mb-10 text-glass-primary font-montserrat font-bold relative pb-4">
                Faculty Coordinator
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded"></span>
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
              <h3 className="text-3xl text-center mb-10 text-glass-primary font-montserrat font-bold relative pb-4">
                Leadership
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded"></span>
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
    <h3 className="text-3xl text-center mb-10 text-glass-primary font-montserrat font-bold relative pb-4">
      Domain Leads
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded"></span>
    </h3>

    <div className="flex justify-center">
      <div className="grid grid-cols-6 gap-10">

        {/* Row 1 */}
        {domainLeads[0] && (
          <div className="col-span-2 col-start-1">
            <TeamCard member={domainLeads[0]} />
          </div>
        )}

        {domainLeads[1] && (
          <div className="col-span-2 col-start-3">
            <TeamCard member={domainLeads[1]} />
          </div>
        )}

        {domainLeads[2] && (
          <div className="col-span-2 col-start-5">
            <TeamCard member={domainLeads[2]} />
          </div>
        )}

        {/* Row 2 */}
        {domainLeads[3] && (
          < div className="flex justify-center gap-10 max-w-4xl mx-auto">
            <TeamCard member={domainLeads[3]} />
          </div>
        )}

        {domainLeads[4] && (
          < div className="flex justify-center gap-10 max-w-4xl mx-auto">
            <TeamCard member={domainLeads[4]} />
          </div>
        )}

      </div>
    </div>
  </div>
)}

          {/* Team Members by Domain */}
          {teamMembers.length > 0 && teamMembers.map((domainGroup, index) => (
            <div key={index} className="mb-20">
              <h3 className="text-2xl text-center mb-8 text-glass-primary font-montserrat font-bold">
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
      className={`glass-card-base overflow-hidden cursor-pointer flex flex-col ${compact ? 'min-w-[220px]' : 'w-full max-w-[280px]'}`}
    >
      <div className={`relative w-full ${compact ? 'h-40' : 'h-48'} overflow-hidden m-3 rounded-2xl border-2 border-white/40`}>
        <img
          src={member.image || '/images/inslogo.jpg'}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`flex-1 text-center flex flex-col px-4 py-3`}>
        <h4 className={`text-glass-primary font-bold mb-1 ${compact ? 'text-base' : 'text-lg'}`}>
          {member.name}
        </h4>
        <p className={`text-glass-secondary font-semibold mb-1 ${compact ? 'text-xs' : 'text-sm'}`}>
          {member.role}
        </p>
        {member.domain && (
          <p className={`text-glass-tertiary mb-3 ${compact ? 'text-xs' : 'text-xs'}`}>
            {member.domain}
          </p>
        )}

        {/* Social Links */}
        {(member.social?.instagram || member.social?.github || member.social?.linkedin) && (
          <div className="flex justify-center gap-3 mt-auto">
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg bg-white/80 hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#E1306C] hover:to-[#833AB4] hover:text-white text-gray-700"
              >
                <Instagram size={16} />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg bg-white/80 hover:bg-[#333333] hover:text-white text-gray-700"
              >
                <Github size={16} />
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg bg-white/80 hover:bg-[#0077B5] hover:text-white text-gray-700"
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Team

