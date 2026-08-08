import ScrollReveal from '../ScrollReveal'

const sectors = [
  {
    title: 'Rail & Public Transport',
    description:
      'Passenger safety, train and station operations, asset integrity, control systems, emergency response and corridor resilience.',
  },
  {
    title: 'Aviation & Transport Operations',
    description:
      'Operational safety, emergency preparedness, command coordination and business continuity.',
  },
  {
    title: 'Critical Infrastructure',
    description:
      'Asset protection, surveillance, monitoring, operational resilience and emergency management.',
  },
  {
    title: 'Energy & Industrial Operations',
    description:
      'Personnel safety, operational risk, asset integrity, incident management and continuity.',
  },
  {
    title: 'Logistics, Ports & Supply Chains',
    description:
      'Asset protection, operational risk, security, disruption management and continuity planning.',
  },
  {
    title: 'Public Sector & Government',
    description:
      'Risk governance, emergency preparedness, crisis coordination, resilience and capability development.',
  },
]

const Sectors = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Sectors
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              Applying the Same Resilience Principles Across Complex Operations
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <ScrollReveal key={sector.title} delay={index * 0.08} direction="up">
              <div className="bg-light p-8 rounded-3xl border border-black/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-text-light leading-relaxed">{sector.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sectors
