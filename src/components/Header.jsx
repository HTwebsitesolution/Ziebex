import { useState } from 'react'
import logo from '../assets/logo.png'

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all ${scrolled ? 'shadow-lg' : ''}`}>
      <nav className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src={logo} 
            alt="Ziebex Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>
        
        <ul className="hidden md:flex list-none gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-dark font-medium transition-colors relative hover:text-primary group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-br from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
        >
          Get Started
        </a>
        
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
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-5 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-dark font-medium block py-2 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-gradient-to-br from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
