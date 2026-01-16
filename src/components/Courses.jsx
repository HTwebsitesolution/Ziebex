import { useState } from 'react'

const Courses = () => {
  // ProTrainings affiliate configuration
  const AFFILIATE_ID = '63243'
  const DISCOUNT_CODE = 'UK-LJWUOV'

  // Course categories
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'first-aid', name: 'First Aid' },
    { id: 'health-safety', name: 'Health & Safety' },
    { id: 'food-safety', name: 'Food Safety' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'childcare', name: 'Childcare' },
  ]

  // All courses with affiliate links
  // Format: https://www.protrainings.uk/courses?a=63243 (main courses page)
  // Or specific course: https://www.protrainings.uk/courses/[course-slug]?a=63243
  const MAIN_COURSES_LINK = `https://www.protrainings.uk/courses?a=${AFFILIATE_ID}`
  
  const allCourses = [
    {
      id: 1,
      title: 'First Aid at Work',
      category: 'first-aid',
      description: 'Comprehensive first aid training for workplace environments. Covers essential life-saving skills and emergency response procedures.',
      duration: '3 Days',
      level: 'Level 3',
      price: 'From £150',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&auto=format',
      affiliateLink: MAIN_COURSES_LINK,
      featured: true,
    },
    {
      id: 2,
      title: 'Emergency First Aid at Work',
      category: 'first-aid',
      description: 'One-day emergency first aid course for low-risk workplaces. Meets HSE requirements.',
      duration: '1 Day',
      level: 'Level 3',
      price: 'From £95',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&auto=format',
      affiliateLink: MAIN_COURSES_LINK,
      featured: false,
    },
    {
      id: 3,
      title: 'Paediatric First Aid',
      category: 'first-aid',
      description: 'Specialized first aid training for those working with children and infants. Meets Ofsted requirements.',
      duration: '2 Days',
      level: 'Level 3',
      price: 'From £120',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
      affiliateLink: `https://www.protrainings.uk/courses/11-paediatric-12-hour-first-aid-level-3-vtq-online-blended-part-1?a=${AFFILIATE_ID}`,
      featured: false,
    },
    {
      id: 4,
      title: 'Health and Safety in the Workplace',
      category: 'health-safety',
      description: 'Essential health and safety training covering risk assessment, hazard identification, and workplace safety regulations.',
      duration: '1 Day',
      level: 'Level 2',
      price: 'From £75',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
      affiliateLink: MAIN_COURSES_LINK,
      featured: true,
    },
    {
      id: 5,
      title: 'Food Safety and Hygiene',
      category: 'food-safety',
      description: 'Complete food safety training for food handlers. Covers HACCP, food hygiene regulations, and safe food handling practices.',
      duration: '1 Day',
      level: 'Level 2',
      price: 'From £65',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
      affiliateLink: MAIN_COURSES_LINK,
      featured: true,
    },
    {
      id: 6,
      title: 'Mental Health First Aid',
      category: 'healthcare',
      description: 'Learn to identify, understand, and help someone experiencing a mental health issue. Become a certified Mental Health First Aider.',
      duration: '2 Days',
      level: 'Level 3',
      price: 'From £200',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
      affiliateLink: MAIN_COURSES_LINK,
      featured: false,
    },
    {
      id: 7,
      title: 'Safeguarding Children',
      category: 'childcare',
      description: 'Essential safeguarding training for anyone working with children. Covers child protection policies and procedures.',
      duration: '1 Day',
      level: 'Level 2',
      price: 'From £80',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
      affiliateLink: MAIN_COURSES_LINK,
      featured: false,
    },
    {
      id: 8,
      title: 'Fire Safety Awareness',
      category: 'health-safety',
      description: 'Essential fire safety training covering fire prevention, evacuation procedures, and fire extinguisher use.',
      duration: 'Half Day',
      level: 'Level 1',
      price: 'From £45',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
      affiliateLink: MAIN_COURSES_LINK,
      featured: false,
    },
    {
      id: 9,
      title: 'Manual Handling',
      category: 'health-safety',
      description: 'Training to reduce the risk of injury from manual handling tasks. Covers proper lifting techniques and ergonomics.',
      duration: 'Half Day',
      level: 'Level 2',
      price: 'From £55',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
      affiliateLink: MAIN_COURSES_LINK,
      featured: false,
    },
    {
      id: 10,
      title: 'Appointed Persons in the Workplace',
      category: 'first-aid',
      description: 'All workplaces require an appointed first aider. Become your workplace\'s appointed First Aider and save your colleagues lives.',
      duration: '2.5 Hours',
      level: 'Level 2',
      price: 'From £24.95',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&auto=format',
      affiliateLink: `https://www.protrainings.uk/courses/9-appointed-persons-in-the-workplace-level-2-vtq?a=${AFFILIATE_ID}`,
      featured: true,
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCourses = selectedCategory === 'all'
    ? allCourses
    : allCourses.filter(course => course.category === selectedCategory)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
            All Training Courses
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-5">
            Accredited Training Programs
          </h1>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-8">
            Browse our comprehensive range of accredited training courses. All courses are delivered by certified instructors and meet industry standards.
          </p>
          
          {/* Discount Code Banner */}
          <div className="inline-block bg-gradient-to-br from-accent to-yellow-400 rounded-full px-8 py-4 shadow-lg mb-8">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg'
                  : 'bg-light text-dark hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&auto=format'
                  }}
                />
                {course.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-white/90 text-dark px-3 py-1 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                  <span className="bg-white/90 text-dark px-3 py-1 rounded-full text-xs font-semibold">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-text-light mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-extrabold text-primary">
                    {course.price}
                  </span>
                  <a
                    href={course.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses on ProTrainings Link */}
        <div className="text-center">
          <a
            href={`https://www.protrainings.uk/courses?a=${AFFILIATE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-br from-accent to-yellow-400 text-dark px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50"
          >
            View All Courses on ProTrainings
          </a>
        </div>
      </div>
    </section>
  )
}

export default Courses
