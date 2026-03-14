import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { teamMembers } from '../data/team'

// Domain configuration matching the data structure
const domainConfig = [
  {
    id: 'development',
    title: 'Development',
    subtitle: 'Creating responsive and dynamic web experiences',
    image: '/images/dev team.jpg',
    icon: 'fa-code'
  },
  {
    id: 'animation',
    title: 'Animation',
    subtitle: 'Bringing stories to life through motion',
    image: '/images/animation team.jpg',
    icon: 'fa-film'
  },
  {
    id: 'design',
    title: 'Digital Design & Arts',
    subtitle: 'Visual storytelling through design',
    image: '/images/design team.jpg',
    icon: 'fa-paint-brush'
  },
  {
    id: 'media',
    title: 'Media',
    subtitle: 'Creating engaging digital content',
    image: '/images/meadia team.jpg',
    icon: 'fa-camera'
  },
  {
    id: 'content',
    title: 'Content Writing',
    subtitle: 'Crafting impactful stories and articles',
    image: '/images/Content.jpg',
    icon: 'fa-pen-fancy'
  }
]

const TeamPage = () => {
  const [selectedDomain, setSelectedDomain] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modalOpen])

  const openDomainModal = (domainId) => {
    setSelectedDomain(domainId)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => setSelectedDomain(null), 300)
  }

  // Get members for selected domain
  const getDomainMembers = (domainId) => {
    const domainData = teamMembers.find(d => d.domain === domainId)
    return domainData ? domainData.members : []
  }

  const selectedDomainConfig = domainConfig.find(d => d.id === selectedDomain)

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Background handled globally in App.jsx */}
      </div>

      {/* Overlay for readability if needed, or purely relying on z-index */}
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-5 py-10 pt-24 max-w-7xl">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 bg-transparent dark:bg-white/5 backdrop-blur-md border border-transparent dark:border-[#ED3E21] text-[#73634F] dark:text-white rounded-full no-underline font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg dark:hover:bg-white/10"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>

          <h2 className="text-5xl text-center mb-16 font-montserrat font-extrabold relative pb-4 text-heading dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#ED3E21] dark:to-[#0077B5]">
            Our Domains
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded bg-heading dark:bg-gradient-to-r dark:from-[#ED3E21] dark:to-[#0077B5]"></span>
          </h2>

          {/* Domain Cards with Bouncing Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <style>{`
            @keyframes gentleBounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .bounce-card {
              animation: gentleBounce 3s ease-in-out infinite;
            }
            .bounce-card:nth-child(1) { animation-delay: 0s; }
            .bounce-card:nth-child(2) { animation-delay: 0.3s; }
            .bounce-card:nth-child(3) { animation-delay: 0.6s; }
            .bounce-card:nth-child(4) { animation-delay: 0.9s; }
            .bounce-card:nth-child(5) { animation-delay: 1.2s; }
            .bounce-card:hover {
              animation-play-state: paused;
            }
          `}</style>

            {domainConfig.map((domain) => (
              <div
                key={domain.id}
                onClick={() => openDomainModal(domain.id)}
                className="bounce-card bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[2rem] p-8 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#ED3E21]/20 border border-black/5 dark:border-white/10 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-2/5 via-transparent to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-accent-2 shadow-lg">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-accent-2/20 to-accent-2/40 items-center justify-center hidden">
                      <i className={`fas ${domain.icon} text-5xl text-accent-2`}></i>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-heading font-montserrat">
                    {domain.title}
                  </h3>
                  <p className="text-gray-600 italic text-sm">
                    {domain.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalOpen && selectedDomainConfig && (
          <div
            className="fixed inset-0 bg-black/80 z-[9999] flex items-start justify-center p-4 overflow-y-auto"
            onClick={closeModal}
            style={{ backdropFilter: 'blur(5px)' }}
            data-lenis-prevent
          >
            <div
              className="bg-white/90 dark:bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl max-w-6xl w-full shadow-2xl relative my-8 animate-slideIn"
              onClick={(e) => e.stopPropagation()}
            >
              <style>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(-50px) scale(0.9);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
              .animate-slideIn {
                animation: slideIn 0.3s ease-out;
              }
            `}</style>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/5 dark:bg-white/90 hover:bg-black/10 dark:hover:bg-white shadow-lg flex items-center justify-center text-accent-2 dark:text-accent-2 transition-all hover:scale-110 hover:rotate-90"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>

              {/* Header with "Back to Domains" */}
              <div className="p-6 border-b border-black/10">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 text-accent-2 hover:text-heading transition-colors font-semibold"
                >
                  <i className="fas fa-arrow-left"></i>
                  Back to Domains
                </button>
              </div>

              {/* Domain Title */}
              <div className="px-8 pt-6 pb-4">
                <h2 className="text-4xl font-bold text-center mb-2 font-montserrat text-[#8B7355] dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue dark:bg-clip-text dark:text-transparent">
                  {selectedDomainConfig.title} Team
                </h2>
              </div>

              {/* Team Photo */}
              <div className="px-8 pb-6">
                <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-accent-2/20">
                  <img
                    src={selectedDomainConfig.image}
                    alt={`${selectedDomainConfig.title} Team`}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                    onError={(e) => {
                      e.target.src = '/images/inslogo.jpg'
                    }}
                  />
                </div>
              </div>

              {/* Team Members */}
              <div className="px-8 pb-8">
                <div className="flex gap-6 overflow-x-auto p-4 justify-center flex-wrap">
                  {getDomainMembers(selectedDomain).map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  )
}

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 flex flex-col min-w-[220px] max-w-[220px] transition-all duration-300 hover:shadow-xl hover:shadow-[#ED3E21]/20 hover:-translate-y-1">
      {/* Profile Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={member.image?.startsWith('/') ? member.image : `/images/${member.image}`}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/images/inslogo.jpg'
          }}
        />
      </div>

      {/* Name and Social */}
      <div className="p-4 text-center flex flex-col flex-1">
        <h4 className="text-heading font-bold mb-3 text-base leading-tight">
          {member.name}
        </h4>

        {/* Social Links */}
        {(member.social?.instagram || member.social?.github || member.social?.linkedin) && (
          <div className="flex justify-center gap-3 mt-auto">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 glass-social-btn rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 hover:bg-[#0077B5] hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-linkedin text-sm"></i>
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 glass-social-btn rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 hover:bg-[#333] hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github text-sm"></i>
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 glass-social-btn rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:scale-110 hover:bg-[#E1306C] hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamPage
