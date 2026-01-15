import logo from '../assets/logo.png'

import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Services', href: '/#services' },
      { label: 'Courses', href: '/courses' },
      { label: 'Contact', href: '/consultation' },
    ],
    services: [
      { label: 'Professional Consulting', href: '#services' },
      { label: 'Project Management', href: '#services' },
      { label: 'Courses & Certifications', href: '#services' },
      { label: 'Professional Training', href: '#services' },
      { label: 'Education Consulting', href: '#services' },
      { label: 'Web Solutions', href: '#services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  return (
    <footer className="bg-dark text-white/80 py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src={logo} 
              alt="Ziebex Logo" 
              className="h-10 w-auto mb-5 object-contain"
            />
            <p className="leading-relaxed mb-6">
              A global consultancy firm providing innovative solutions and support to individuals, companies, and government agencies worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all" aria-label="Facebook">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all" aria-label="LinkedIn">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all" aria-label="Twitter">
                <span className="text-sm">tw</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Company</h4>
            <ul className="list-none space-y-3">
              {footerLinks.company.map((link, index) => {
                const isHashLink = link.href.includes('#')
                const Component = isHashLink ? 'a' : Link
                const props = isHashLink ? { href: link.href } : { to: link.href }
                return (
                  <li key={index}>
                    <Component
                      {...props}
                      className="text-white/70 hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </Component>
                  </li>
                )
              })}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Services</h4>
            <ul className="list-none space-y-3">
              {footerLinks.services.map((link, index) => {
                const isHashLink = link.href.includes('#')
                const Component = isHashLink ? 'a' : Link
                const props = isHashLink ? { href: link.href } : { to: link.href }
                return (
                  <li key={index}>
                    <Component
                      {...props}
                      className="text-white/70 hover:text-accent transition-all inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </Component>
                  </li>
                )
              })}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Legal</h4>
            <ul className="list-none space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-all inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Ziebex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
