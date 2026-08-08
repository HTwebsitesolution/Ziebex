import ScrollReveal from '../ScrollReveal'

const CRITERIA = [
  'Operational need',
  'Risk reduction',
  'Interoperability',
  'Maintainability',
  'Lifecycle cost',
  'Cybersecurity',
  'User capability',
  'Infrastructure availability',
  'Data protection',
  'Long-term sustainability',
]

const technologies = [
  'Control & Operations Centres',
  'CCTV & Intelligent Surveillance',
  'Asset Monitoring',
  'Sensors & Telemetry',
  'Incident Reporting Platforms',
  'GIS & Situational Awareness',
  'Operational Dashboards',
  'Communications Systems',
  'Data Analytics',
  'Cyber & Operational Technology Resilience',
]

const Technology = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Technology
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Technology Must Solve an Operational Problem
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-4">
              Ziebex does not promote technology simply because it is available. Every recommendation
              is assessed against whether it addresses a real operational need and strengthens safety
              or resilience in practice.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Ziebex is a consultancy, systems-integration and implementation partner coordinating
              specialist suppliers — not the manufacturer of all products used in a programme.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-14">
            <h3 className="font-poppins text-xl font-bold text-dark text-center mb-6">
              Assessment Criteria
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 list-none">
              {CRITERIA.map((item) => (
                <li
                  key={item}
                  className="bg-light border border-black/5 rounded-2xl px-4 py-4 text-center text-sm font-semibold text-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div>
            <h3 className="font-poppins text-xl font-bold text-dark text-center mb-6">
              Technology Domains
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-light rounded-2xl p-4 text-center font-semibold text-dark text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Technology
