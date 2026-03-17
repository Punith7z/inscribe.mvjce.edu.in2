import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = ({ videoEnded = false }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme, mode, cycleTheme } = useTheme()
  const isHomePage = location.pathname === '/'
  const shouldShow = isHomePage ? videoEnded : true

  // Scroll detection for navbar style
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setIsScrolled(currentScrollY > 50)

          // Detect active section
          if (isHomePage) {
            const sections = ['about', 'teams', 'events', 'gallery', 'contact']
            const currentSection = sections.find(section => {
              const element = document.getElementById(section)
              if (element) {
                const rect = element.getBoundingClientRect()
                return rect.top <= 150 && rect.bottom >= 150
              }
              return false
            })
            setActiveSection(currentSection || '')
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 500)
    } else {
      scrollToSection(sectionId)
    }
  }

  const handleMenuLink = (to) => {
    setIsMenuOpen(false)
    if (to) navigate(to)
  }

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full px-5 py-4 flex items-center justify-between transition-all duration-500 ease-out ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        style={{
          background: isScrolled
            ? theme === 'dark'
              ? 'rgba(0, 0, 0, 0.65)'
              : 'rgba(253, 251, 249, 0.85)'
            : theme === 'dark'
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(253, 251, 249, 0.6)',
          backdropFilter: isScrolled ? 'blur(24px) saturate(140%)' : 'blur(16px) saturate(120%)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(140%)' : 'blur(16px) saturate(120%)',
          borderBottom: theme === 'dark'
            ? `1px solid rgba(255,255,255,${isScrolled ? '0.1' : '0.05'})`
            : `1px solid rgba(0,0,0,${isScrolled ? '0.08' : '0.04'})`,
          boxShadow: isScrolled
            ? theme === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset'
              : '0 8px 32px rgba(0, 0, 0, 0.15)'
            : theme === 'dark'
              ? '0 4px 16px rgba(0, 0, 0, 0.2)'
              : '0 4px 16px rgba(0, 0, 0, 0.05)',
          zIndex: 1000,
          pointerEvents: shouldShow ? 'auto' : 'none',
          transform: shouldShow ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <Link
          to="/"
          className={`flex items-center gap-3 text-2xl font-black font-montserrat uppercase tracking-wide no-underline transition-colors ${theme === 'dark'
            ? 'text-white hover:text-gray-200'
            : 'text-light-maroon hover:opacity-80'
            }`}
        >
          <img src="/images/inslogo.jpg" alt="Inscribe Logo" className="h-10 w-10 rounded-full object-cover shadow-md" />
          INSCRIBE
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-4 xl:gap-6">
          <NavLink onClick={() => handleNavClick('about')} isActive={activeSection === 'about'}>About</NavLink>

          {/* Correct Teams Section */}
          <NavLink onClick={() => handleNavClick('teams')} isActive={activeSection === 'teams'}>Teams</NavLink>

          <NavLink onClick={() => handleNavClick('events')} isActive={activeSection === 'events'}>Events</NavLink>

          <NavLink onClick={() => handleNavClick('gallery')} isActive={activeSection === 'gallery'}>Gallery</NavLink>

          <NavLink onClick={() => handleNavClick('contact')} isActive={activeSection === 'contact'}>Contact</NavLink>
        </div>

        {/* Medium Screen Center Nav */}
        <div className="hidden md:flex lg:hidden absolute left-1/2 transform -translate-x-1/2 items-center gap-2">
          <NavLink onClick={() => handleNavClick('about')} isActive={activeSection === 'about'}>About</NavLink>
          <NavLink onClick={() => handleNavClick('teams')} isActive={activeSection === 'teams'}>Teams</NavLink>
          <NavLink onClick={() => handleNavClick('events')} isActive={activeSection === 'events'}>Events</NavLink>
          <NavLink onClick={() => handleNavClick('gallery')} isActive={activeSection === 'gallery'}>Gallery</NavLink>
          <NavLink onClick={() => handleNavClick('contact')} isActive={activeSection === 'contact'}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={cycleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{
              background: theme === 'dark'
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(61, 10, 5, 0.1)',
              border: theme === 'dark'
                ? '1px solid rgba(255,255,255,0.2)'
                : '1px solid rgba(61, 10, 5, 0.3)',
            }}
            aria-label={`Current mode: ${mode}. Click to cycle theme.`}
            title={`Current mode: ${mode}. Click to cycle: Light -> Dark -> System`}
          >
            {mode === 'light' && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#3D0A05' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
            {mode === 'dark' && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#ffffff' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
            {mode === 'system' && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme === 'dark' ? '#ffffff' : '#3D0A05' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          {/* Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:gap-2 transition-all group"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ background: theme === 'dark' ? '#e5e7eb' : '#3D0A05' }}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              style={{ background: theme === 'dark' ? '#e5e7eb' : '#3D0A05' }}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ background: theme === 'dark' ? '#e5e7eb' : '#3D0A05' }}
            ></span>
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-16 right-5 backdrop-blur-xl rounded-2xl shadow-2xl transition-all duration-300 ease-out z-[999] ${isMenuOpen && shouldShow ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        style={{
          minWidth: '200px',
          padding: '0.75rem 0',
          background: theme === 'dark'
            ? 'rgba(15, 23, 42, 0.8)'
            : '#FDFBF9',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: theme === 'dark'
            ? '1px solid rgba(255,255,255,0.1)'
            : '1px solid rgba(0,0,0,0.1)',
          boxShadow: theme === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset'
            : '0 8px 32px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className="flex flex-col">

          {/* Mobile Nav */}
          <div className="md:hidden">
            <MenuLink onClick={() => handleNavClick('about')} icon="fa-info-circle">About</MenuLink>

            {/* Corrected Teams – was wrong earlier */}
            <MenuLink onClick={() => handleNavClick('teams')} icon="fa-users">Teams</MenuLink>

            <MenuLink onClick={() => handleNavClick('events')} icon="fa-calendar-alt">Events</MenuLink>
            <MenuLink onClick={() => handleNavClick('gallery')} icon="fa-images">Gallery</MenuLink>

            <MenuLink onClick={() => handleNavClick('contact')} icon="fa-envelope">Contact</MenuLink>

            <div
              className="my-2"
              style={{
                borderTop: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(229,231,235,1)'}`
              }}
            ></div>
          </div>

          {/* Extra Dropdown Items */}
          <MenuLink to="/register" onClick={() => handleMenuLink('/register')} icon="fa-edit">
            Registration
          </MenuLink>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[998]" onClick={() => setIsMenuOpen(false)} style={{ pointerEvents: shouldShow ? 'auto' : 'none' }}></div>
      )}
    </>
  )
}

const NavLink = ({ children, onClick, to, isActive = false }) => {
  const { theme } = useTheme()
  const baseClasses = `font-medium no-underline transition-all duration-300 relative px-3 py-2 rounded-lg group cursor-pointer text-sm md:text-base ${theme === 'dark'
    ? isActive
      ? 'text-white'
      : 'text-gray-200 hover:text-white'
    : isActive
      ? 'text-heading'
      : 'text-gray-800 hover:text-heading'
    }`

  const activeUnderlineStyle = {
    width: isActive ? '100%' : '0',
    background: theme === 'dark' ? '#ffffff' : '#3D0A05'
  }

  if (to) {
    return (
      <Link
        to={to}
        className={baseClasses}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = theme === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(61, 10, 5, 0.05)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
        }}
      >
        <span className="relative z-10">{children}</span>
        <span
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 rounded-full"
          style={activeUnderlineStyle}
        ></span>
        {!isActive && (
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
            style={{
              background: theme === 'dark' ? '#ffffff' : '#3D0A05'
            }}
          ></span>
        )}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = theme === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(212, 163, 115, 0.1)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 rounded-full"
        style={activeUnderlineStyle}
      ></span>
      {!isActive && (
        <span
          className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
          style={{
            background: theme === 'dark' ? '#ffffff' : '#3D0A05'
          }}
        ></span>
      )}
    </button>
  )
}

const MenuLink = ({ children, onClick, to, icon }) => {
  const { theme } = useTheme()
  const baseClasses = `flex items-center gap-3 px-5 py-3 transition-colors duration-200 cursor-pointer ${theme === 'dark'
    ? 'text-gray-200 hover:bg-white/10 hover:text-white'
    : 'text-gray-800 hover:bg-accent-2/10 hover:text-heading'
    }`

  const iconColor = theme === 'dark' ? '#ffffff' : '#3D0A05'

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={baseClasses}>
        <i className={`fas ${icon} w-5`} style={{ color: iconColor }}></i>
        <span>{children}</span>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <i className={`fas ${icon} w-5`} style={{ color: iconColor }}></i>
      <span>{children}</span>
    </button>
  )
}

export default Navbar
