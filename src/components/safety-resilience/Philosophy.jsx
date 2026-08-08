import ScrollReveal from '../ScrollReveal'
import SystemPillars from './SystemPillars'

const PILLARS = [
  'PEOPLE',
  'PROCESS',
  'ASSETS & INFRASTRUCTURE',
  'TECHNOLOGY & DATA',
  'OPERATIONS',
  'LEADERSHIP & GOVERNANCE',
]

const Philosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Core Philosophy
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Safety Is a System, Not a Silo
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-4">
              Effective safety and resilience depend on the interaction of competent people,
              reliable infrastructure, clear procedures, appropriate technology, accurate
              information and accountable leadership.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              A weakness in one part of the system can affect the entire operation.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <SystemPillars
            pillars={PILLARS}
            outcome="SAFE • RELIABLE • RESILIENT OPERATIONS"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Philosophy
