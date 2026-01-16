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
            className="h-16 w-auto object-contain"
          />
        </Link>
        
        <ul className="hidden md:flex list-none gap-3 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname === '/' && activeSection === link.section)
            const isHashLink = link.href.includes('#')
            const Component = isHashLink ? 'a' : Link
            const props = isHashLink ? { href: link.href } : { to: link.href }
            return (
              <li key={link.href}>
                <Component
                  {...props}
                  className={`font-semibold text-sm transition-all duration-300 relative group px-5 py-2.5 rounded-full ${
                    isActive 
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 scale-105' 
                      : 'bg-white text-dark border-2 border-gray-200 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 hover:text-primary shadow-sm hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {!isActive && (
                    <span className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
                  )}
                </Component>
              </li>
            )
          })}
        </ul>
        
        <Link
          to="/consultation"
          className="hidden md:block bg-gradient-to-br from-accent to-yellow-400 text-dark px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1 hover:scale-105 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50"
        >
          Get Started
        </Link>
        
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <ul className="flex flex-col p-5 gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname === '/' && activeSection === link.section)
              const isHashLink = link.href.includes('#')
              const Component = isHashLink ? 'a' : Link
              const props = isHashLink ? { href: link.href } : { to: link.href }
              return (
                <li key={link.href}>
                  <Component
                    {...props}
                    className={`font-semibold block py-3.5 px-5 rounded-full transition-all duration-300 text-center ${
                      isActive
                        ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/40'
                        : 'text-dark bg-gray-50 border-2 border-gray-200 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:text-primary hover:shadow-md'
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
                className="block bg-gradient-to-br from-accent to-yellow-400 text-dark px-8 py-4 rounded-full font-bold text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
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
