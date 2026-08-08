import ScrollReveal from '../ScrollReveal'

const columns = [
  {
    title: 'Consultancy & Programme Leadership',
    description:
      'Risk assessment, strategy, governance, programme management and implementation planning.',
  },
  {
    title: 'Technical & Systems Integration',
    description:
      'Technology architecture, control systems, data integration, digital platforms and implementation coordination.',
  },
  {
    title: 'Specialist Delivery Partners',
    description:
      'Engineering specialists, OEMs, trainers, emergency-management professionals, infrastructure contractors and other subject-matter experts as required.',
  },
]

const DeliveryModel = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Delivery Model
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6">
              From Strategy to Implementation
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {columns.map((column, index) => (
            <ScrollReveal key={column.title} delay={index * 0.1} direction="up">
              <div className="bg-light p-8 rounded-3xl border border-black/5 h-full relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-sm font-bold text-primary mb-3">0{index + 1}</div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {column.title}
                </h3>
                <p className="text-text-light leading-relaxed">{column.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.25}>
          <p className="text-lg text-text-light leading-relaxed text-center max-w-3xl mx-auto">
            Ziebex assembles the appropriate delivery ecosystem for each assignment rather than
            forcing every project into a predetermined technical solution.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default DeliveryModel
