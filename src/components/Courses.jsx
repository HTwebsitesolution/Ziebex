import { useState } from 'react'
import { courses as courseData, categories as categoryData } from '../data/courses'

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = categoryData
  const courses = courseData

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

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
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Browse our comprehensive range of accredited training courses. All courses are delivered by certified instructors and meet industry standards.
          </p>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

        {/* View All Courses Link */}
        <div className="text-center mt-12">
          <a
            href="https://protrainings.uk/courses"
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
