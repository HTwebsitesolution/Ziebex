import { useEffect } from 'react'

const Courses = () => {
  // ProTrainings affiliate configuration
  const AFFILIATE_ID = '63243'
  const COURSE_COLLECTION_ID = '48'
  const DISCOUNT_CODE = 'UK-LJWUOV'

  useEffect(() => {
    // Load ProTrainings widget script
    const loadWidgetScript = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="widgets.js"]')) {
        return
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://procourses.co.uk/javascripts/widgets.js?v=20230502'
      const firstScript = document.getElementsByTagName('script')[0]
      firstScript.parentNode.insertBefore(script, firstScript)
    }

    loadWidgetScript()
  }, [])

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
            Training Courses
          </div>
          <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
            Accredited Training Programs
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-6">
            Browse our comprehensive range of accredited training courses. All courses are delivered by certified instructors and meet industry standards.
          </p>
          
          {/* Discount Code Banner */}
          <div className="inline-block bg-gradient-to-br from-accent to-yellow-400 rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-semibold text-dark/80 uppercase tracking-wider">Special Offer</div>
                <div className="text-xl font-extrabold text-dark">Use Code: <span className="font-black">{DISCOUNT_CODE}</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* ProTrainings Course Collection Widget */}
        <div className="mb-12">
          <div 
            className="pt-online-courses" 
            data-affiliate-id={AFFILIATE_ID} 
            data-course-collection={COURSE_COLLECTION_ID}
          ></div>
        </div>

        {/* Additional Video Widget (if needed) */}
        <div className="text-center">
          <div 
            className="pt-video mx-auto" 
            data-width="465" 
            data-affiliate-id={AFFILIATE_ID} 
            data-course-id="303"
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Courses
