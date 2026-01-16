import ScrollReveal from './ScrollReveal'

const Features = () => {
  const features = [
    {
      icon: '💼',
      title: 'Professional Consulting',
      description: 'Tailored consultancy delivered by industry experts with deep knowledge and proven track records in their fields.',
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'Strategic project planning and execution to ensure your initiatives deliver results on time and within budget.',
    },
    {
      icon: '📜',
      title: 'Courses & Certifications',
      description: 'Online and in-person programs designed to advance careers in healthcare and wellness.',
    },
    {
      icon: '🎓',
      title: 'Professional Training',
      description: 'Accredited, hands-on learning experiences led by subject matter experts.',
    },
    {
      icon: '🎓',
      title: 'Education Consulting',
      description: 'Complete education solutions covering academics, e-learning, marketing, and digital transformation.',
    },
    {
      icon: '🌐',
      title: 'Web Solutions',
      description: 'Modern digital solutions to enhance your online presence and drive business growth.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Our Services
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              Comprehensive Consultancy Solutions
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              We provide end-to-end consultancy services across multiple industries, delivered by experts who understand your unique challenges.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-10 rounded-3xl text-center transition-all duration-500 border border-black/5 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-text-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
