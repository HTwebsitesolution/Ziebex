import { useState, useEffect } from 'react'
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import logo from '../assets/logo.png'

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { id: 1, src: slide1, alt: 'Ziebex Consultancy Image 1' },
    { id: 2, src: slide2, alt: 'Ziebex Consultancy Image 2' },
    { id: 3, src: slide3, alt: 'Ziebex Consultancy Image 3' },
    { id: 4, src: slide4, alt: 'Ziebex Consultancy Image 4' },
    { id: 5, src: logo, alt: 'Ziebex Logo' },
  ]

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
            Success Stories
          </div>
          <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
            Transforming Businesses, Delivering Results
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            See how we've helped organizations achieve excellence through expert consultancy, strategic guidance, and innovative solutions.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {image.id === 5 ? (
                  // Logo - use object-contain to fit without cropping, with padding
                  <div className="w-full h-full flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-light to-white">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  // Other images - use object-cover to fill the frame
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-dark shadow-lg transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-dark shadow-lg transition-all hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-xl transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-primary scale-110'
                    : 'ring-2 ring-gray-200 hover:ring-primary/50 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Image Counter */}
          <div className="text-center mt-6 text-text-light text-sm">
            <span className="font-semibold text-primary">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
