import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const CoursesPreview = () => {
  // Featured courses to showcase on homepage
  const featuredCourses = [
    {
      id: 1,
      title: 'First Aid at Work',
      description: 'Comprehensive first aid training for workplace environments. Covers essential life-saving skills.',
      duration: '3 Days',
      level: 'Level 3',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&auto=format',
    },
    {
      id: 2,
      title: 'Health and Safety in the Workplace',
      description: 'Essential health and safety training covering risk assessment and workplace safety regulations.',
      duration: '1 Day',
      level: 'Level 2',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Food Safety and Hygiene',
      description: 'Complete food safety training for food handlers. Covers HACCP and food hygiene regulations.',
      duration: '1 Day',
      level: 'Level 2',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
    },
  ]

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Training Courses
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              Accredited Training Programs
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto mb-6">
              Explore our comprehensive range of accredited training courses. All courses are delivered by certified instructors and meet industry standards.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <ScrollReveal key={course.id} delay={course.id * 0.1} direction="up">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-3 cursor-pointer">
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&auto=format'
                  }}
                />
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
                <Link
                  to="/courses"
                  className="inline-block w-full text-center bg-gradient-to-br from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-block bg-gradient-to-br from-accent to-yellow-400 text-dark px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesPreview
