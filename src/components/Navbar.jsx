import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'
import { useTheme } from 'next-themes'
import CinematicThemeSwitcher from './ui/cinematic-theme-switcher'

const Navbar = ({ videoEnded = false }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const [activeSection, setActiveSection] = useState('')
  const { resolvedTheme: theme } = useTheme()
  const isHomePage = location.pathname === '/'
  const isVideoScreen = isHomePage && !videoEnded
  
  // Final visibility combines: overall visibility, video state, and scroll state
  const shouldHide = !isVisible && !isMenuOpen
  const shouldShow = isVideoScreen ? false : !shouldHide

  // Scroll detection for navbar style and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine background state
      setIsScrolled(currentScrollY > 50)

      // Instant Reveal Logic: Show on any upward scroll, hide on downward scroll after threshold
      if (currentScrollY <= 50) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current + 5 && currentScrollY > 120) {
        // Scrolling DOWN (with tiny 5px buffer to prevent flicker)
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY

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
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
          background: 'transparent',
          backdropFilter: isScrolled ? 'blur(12px) saturate(100%)' : 'blur(4px)',
          WebkitBackdropFilter: isScrolled ? 'blur(12px) saturate(100%)' : 'blur(4px)',
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
          <CinematicThemeSwitcher />

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
        className={`fixed top-20 right-4 backdrop-blur-2xl rounded-2xl shadow-2xl transition-all duration-300 ease-out z-[1001] ${isMenuOpen && shouldShow ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        style={{
          minWidth: '240px',
          maxHeight: 'calc(100vh - 100px)',
          overflowY: 'auto',
          padding: '0.75rem 0',
          background: theme === 'dark'
            ? 'rgba(15, 23, 42, 0.9)'
            : 'rgba(253, 251, 249, 0.95)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: theme === 'dark'
            ? '1px solid rgba(255,255,255,0.15)'
            : '1px solid rgba(0,0,0,0.1)',
          boxShadow: theme === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset'
            : '0 20px 40px rgba(0, 0, 0, 0.12)'
        }}
      >
        <div className="flex flex-col">

          {/* Navigation Items (Visible on all screens now) */}
          <div className="">
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
  const baseClasses = `font-cinzel font-bold uppercase tracking-widest no-underline transition-all duration-300 relative px-3 py-2 rounded-lg group cursor-pointer text-sm md:text-base ${theme === 'dark'
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
  const baseClasses = `font-cinzel font-bold uppercase tracking-widest flex items-center gap-3 px-5 py-3 transition-colors duration-200 cursor-pointer text-sm ${theme === 'dark'
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
