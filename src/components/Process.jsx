import ScrollReveal from './ScrollReveal'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We start by understanding your unique challenges, goals, and vision for success.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our experts develop a tailored action plan designed to achieve your specific objectives.',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We implement the strategy with precision, keeping you informed every step of the way.',
    },
    {
      number: '04',
      title: 'Results',
      description: 'We deliver measurable outcomes and continue to support your long-term success.',
    },
  ]

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-accent font-semibold text-base uppercase tracking-wider mb-4">
              How We Work
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-white mb-5">
              Our Simple, Effective Process
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every client.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-extrabold text-dark shadow-lg shadow-accent/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-accent/60 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  <span className="relative z-10">{step.number}</span>
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
