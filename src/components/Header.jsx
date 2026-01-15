import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = ({ scrolled }) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Track active section based on scroll position (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'courses']
      const scrollPosition = window.scrollY + 200 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const navLinks = [
    { href: '/', label: 'Home', section: 'home' },
    { href: '/#about', label: 'About Us', section: 'about' },
    { href: '/#services', label: 'Services', section: 'services' },
    { href: '/courses', label: 'Courses', section: 'courses' },
    { href: '/consultation', label: 'Contact', section: 'contact' },
  ]

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all ${scrolled ? 'shadow-lg' : ''}`}>
      <nav className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Ziebex Logo" 
            className="h-12 w-auto object-contain"
          />
        </Link>
        
        <ul className="hidden md:flex list-none gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname === '/' && activeSection === link.section)
            const isHashLink = link.href.includes('#')
            const Component = isHashLink ? 'a' : Link
            const props = isHashLink ? { href: link.href } : { to: link.href }
            return (
              <li key={link.href}>
                <Component
                  {...props}
                  className={`font-semibold text-base transition-all relative group py-2 px-1 ${
                    isActive 
                      ? 'text-primary underline decoration-2 underline-offset-4' 
                      : 'text-dark hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {!isActive && (
                    <>
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
                      <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></span>
                    </>
                  )}
                </Component>
              </li>
            )
          })}
        </ul>
        
        <Link
          to="/consultation"
          className="hidden md:block bg-gradient-to-br from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
        >
          Get Started
        </Link>
        
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-dark transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-dark transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-dark transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-5 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && activeSection === link.section)
              const isHashLink = link.href.includes('#')
              const Component = isHashLink ? 'a' : Link
              const props = isHashLink ? { href: link.href } : { to: link.href }
              return (
                <li key={link.href}>
                  <Component
                    {...props}
                    className={`font-semibold block py-3 px-4 rounded-lg transition-all ${
                      isActive
                        ? 'text-primary bg-primary/10 underline decoration-2'
                        : 'text-dark hover:bg-primary/10 hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Component>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                to="/consultation"
                className="block bg-gradient-to-br from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold text-center shadow-lg hover:shadow-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
