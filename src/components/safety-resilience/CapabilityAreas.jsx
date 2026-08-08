import ScrollReveal from '../ScrollReveal'

const areas = [
  {
    title: 'Risk & Capability Assessment',
    description:
      'Enterprise and operational risk assessment, vulnerability analysis, capability-gap assessment, critical-asset identification and prioritised improvement planning.',
  },
  {
    title: 'Safety & Operational Assurance',
    description:
      'Operational procedures, safety-critical communication, competence management, human factors, incident prevention and performance assurance.',
  },
  {
    title: 'Asset Protection & Security',
    description:
      'Critical-asset protection, surveillance, access control, monitoring, threat identification and resilience planning.',
  },
  {
    title: 'Technology & Systems Integration',
    description:
      'Control environments, command-and-control dashboards, CCTV, sensors, communications, GIS, incident reporting, asset monitoring, data platforms and operational intelligence.',
  },
  {
    title: 'Emergency & Crisis Preparedness',
    description:
      'Incident command, evacuation, crisis communications, emergency response planning, multi-agency coordination, drills, tabletop exercises and simulations.',
  },
  {
    title: 'Governance, Continuity & Organisational Resilience',
    description:
      'Risk governance, safety culture, business continuity, organisational learning, corrective-action management, KPIs, knowledge transfer and sustainable implementation.',
  },
]

const CapabilityAreas = () => {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Capability Areas
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              Integrated Capability Across the Resilience Spectrum
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Six linked capability areas that support assessment, assurance, protection, technology,
              preparedness and organisational resilience.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.08} direction="up">
              <div className="bg-white p-10 rounded-3xl border border-black/5 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-sm font-bold text-primary mb-3">0{index + 1}</div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-text-light leading-relaxed">{area.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilityAreas
