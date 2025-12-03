import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

const Navbar = ({ videoEnded = false }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSystemDark, setIsSystemDark] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event) => {
      setIsSystemDark(event.matches)
    }

    // Set initial value
    setIsSystemDark(mediaQuery.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const isHomePage = location.pathname === '/'
  const shouldShow = isHomePage ? videoEnded : true

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
        className={`fixed top-0 left-0 w-full px-5 py-4 flex items-center justify-between transition-all duration-1000 ease-out ${
          shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{
          background: isSystemDark
            ? 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.9))'
            : 'linear-gradient(135deg, rgba(255,245,214,0.92), rgba(233,210,167,0.92))',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          borderBottom: '1px solid rgba(0,0,0,0.04)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
          zIndex: 1000,
          pointerEvents: shouldShow ? 'auto' : 'none'
        }}
      >
        <Link to="/" className="text-2xl font-black text-heading font-montserrat uppercase tracking-wide no-underline hover:text-accent-2 transition-colors">
          INSCRIBE
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-4 xl:gap-6">
          <NavLink onClick={() => handleNavClick('about')}>About</NavLink>

          {/* Correct Teams Section */}
          <NavLink onClick={() => handleNavClick('teams')}>Teams</NavLink>

          <NavLink onClick={() => handleNavClick('events')}>Events</NavLink>

          <NavLink onClick={() => handleNavClick('gallery')}>Gallery</NavLink>

          <NavLink onClick={() => handleNavClick('contact')}>Contact</NavLink>
        </div>

        {/* Medium Screen Center Nav */}
        <div className="hidden md:flex lg:hidden absolute left-1/2 transform -translate-x-1/2 items-center gap-2">
          <NavLink onClick={() => handleNavClick('about')}>About</NavLink>
          <NavLink onClick={() => handleNavClick('teams')}>Teams</NavLink>
          <NavLink onClick={() => handleNavClick('events')}>Events</NavLink>
          <NavLink onClick={() => handleNavClick('gallery')}>Gallery</NavLink>
          <NavLink onClick={() => handleNavClick('contact')}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-3">
          {isSystemDark && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-[11px] font-medium text-heading">
              <i className="fas fa-moon text-accent-2 text-xs"></i>
              <span>Dark mode</span>
            </div>
          )}

          {/* Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:gap-2 transition-all group"
          >
            <span className={`w-6 h-0.5 bg-heading transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-heading transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-heading transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-16 right-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-black/5 transition-all duration-300 ease-out z-[999] ${
          isMenuOpen && shouldShow ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ minWidth: '200px', padding: '0.75rem 0' }}
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

            <div className="border-t border-gray-200 my-2"></div>
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

const NavLink = ({ children, onClick, to }) => {
  const baseClasses = "text-gray-800 font-medium no-underline transition-all hover:text-heading relative px-2 py-1 group cursor-pointer text-sm md:text-base"
  
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-2 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-2 transition-all duration-300 group-hover:w-full"></span>
    </button>
  )
}

const MenuLink = ({ children, onClick, to, icon }) => {
  const baseClasses = "flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-accent-2/10 hover:text-heading transition-all duration-200 cursor-pointer"
  
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={baseClasses}>
        <i className={`fas ${icon} text-accent-2 w-5`}></i>
        <span>{children}</span>
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      <i className={`fas ${icon} text-accent-2 w-5`}></i>
      <span>{children}</span>
    </button>
  )
}

export default Navbar
