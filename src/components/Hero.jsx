import { useState, useEffect } from 'react'
import slide1Image from '../assets/slide1.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
  ]

  const slides = [
    {
      id: 1,
      tagline: 'Training & Consultancy',
      title: 'Transform Your Business with',
      highlight: 'Expert Consultancy',
      description: 'We deliver innovative solutions and strategic guidance to help you achieve your goals, maximize resources, and overcome any challenge.',
      ctaPrimary: 'Get Free Consultation',
      ctaSecondary: 'Learn More',
      showStats: true,
      // backgroundImage: slide1Image, // Temporarily disabled
    },
    {
      id: 2,
      tagline: 'Expert Training & Support',
      title: 'Building Stronger Communities &',
      highlight: 'Expert Training That Delivers Results.',
      subtitle: 'Your Success Story Starts Here',
      description: 'Professional development that works. Accredited courses, expert guidance, measurable results. Ready to level up?',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'About Us',
      showStats: false,
      // backgroundImage: slide2, // Temporarily removed
    },
    {
      id: 3,
      tagline: 'Join Us Today',
      title: 'Skills That Shape Tomorrow',
      highlight: 'From Learning to Leading',
      subtitle: 'Certified Excellence, Real Impact',
      description: 'Join thousands who\'ve advanced their careers through our proven programs. Nationally recognised qualifications, personalised support, and practical skills you\'ll use from day one.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'About Us',
      showStats: false,
      // backgroundImage: slide3, // Temporarily removed
    },
    {
      id: 4,
      tagline: 'Transforming Lives',
      title: 'Transforming Lives Through Learning',
      highlight: 'to unlock Your Potential',
      description: 'We empower individuals and communities through expert training, consultation, and health care programs. We turn potential into purpose with courses that actually make a difference.',
      ctaPrimary: 'Get Free Consultation',
      ctaSecondary: 'About Us',
      showStats: true,
      // backgroundImage: slide4, // Temporarily removed
    },
    {
      id: 5,
      tagline: 'Innovation & Excellence',
      title: 'Driving Success Through',
      highlight: 'Strategic Partnership',
      subtitle: 'Your Trusted Consultancy Partner',
      description: 'Experience the difference that expert guidance and innovative solutions can make. We combine industry expertise with cutting-edge strategies to deliver results that exceed expectations.',
      ctaPrimary: 'Get Started Today',
      ctaSecondary: 'Learn More',
      showStats: false,
      backgroundImage: slide1Image, // Using imported image from assets
    },
  ]

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[80vh] bg-gradient-to-br from-dark to-dark-light overflow-hidden pt-16 md:pt-20 pb-12">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image for slide 1, gradient for others */}
            {slide.backgroundImage ? (
              <>
                {/* Background Image using img element - full opacity */}
                <img 
                  src={slide.backgroundImage}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{ opacity: 1 }}
                  onLoad={() => {
                    console.log('✅ Image loaded successfully:', slide.backgroundImage);
                  }}
                  onError={(e) => {
                    console.error('❌ Image failed to load:', slide.backgroundImage);
                    console.error('Trying alternative path...');
                    // Try alternative path
                    const altPath = slide.backgroundImage.startsWith('/') 
                      ? slide.backgroundImage.substring(1) 
                      : '/' + slide.backgroundImage;
                    console.log('Alternative path would be:', altPath);
                  }}
                />
                {/* Dark Overlay for Text Readability - z-index 1 - Reduced opacity to test */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-br from-dark/40 via-dark/30 to-dark-light/40"></div>
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-dark/20 via-transparent to-dark/10"></div>
              </>
            ) : (
              <>
                {/* Background gradient animation for slides without images */}
                <div className="absolute inset-0 opacity-80 animate-pulse-gradient">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.15),transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>
                </div>
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-light"></div>
              </>
            )}
            {/* Content Container - positioned above background */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center h-full pt-4 md:pt-8">
              <div className={`space-y-4 md:space-y-5 ${index === currentSlide ? 'animate-fade-in-up' : ''}`}>
                {slide.tagline && (
                  <div className="text-accent font-semibold text-sm md:text-base uppercase tracking-wider mb-1">
                    {slide.tagline}
                  </div>
                )}
                <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  {slide.title}{' '}
                  <span className="bg-gradient-to-br from-accent to-yellow-400 bg-clip-text text-transparent block">
                    {slide.highlight}
                  </span>
                  {slide.subtitle && (
                    <span className="block text-white mt-1 md:mt-2 text-3xl md:text-4xl lg:text-5xl">{slide.subtitle}</span>
                  )}
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#contact"
                    className="bg-gradient-to-br from-accent to-yellow-400 text-dark px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all hover:-translate-y-1 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50"
                  >
                    {slide.ctaPrimary}
                  </a>
                  <a
                    href="#about"
                    className="bg-white/10 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base border-2 border-white/30 transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    {slide.ctaSecondary}
                  </a>
                </div>
              </div>

              {slide.showStats && (
                <div className={`relative mt-6 md:mt-0 ${index === currentSlide ? 'animate-fade-in-right' : ''}`}>
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-white/95 p-4 md:p-5 rounded-xl md:rounded-2xl text-center backdrop-blur-sm shadow-lg"
                      >
                        <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-1">{stat.number}</h3>
                        <p className="text-xs md:text-sm text-text-light">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm border border-white/30 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm border border-white/30 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-accent w-8 scale-110'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
