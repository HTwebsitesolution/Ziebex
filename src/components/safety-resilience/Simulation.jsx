import ScrollReveal from '../ScrollReveal'
import FlowPipeline from './FlowPipeline'
import VideoPlaceholder from './VideoPlaceholder'

const STEPS = [
  'NORMAL OPERATIONS',
  'ALERT',
  'VERIFY',
  'ESCALATE',
  'ACTIVATE',
  'RESPOND',
  'COORDINATE',
  'RECOVER',
  'REVIEW',
  'IMPROVE',
]

const CAPABILITIES = [
  'Recognition and escalation',
  'Command and leadership',
  'Safety-critical communication',
  'Evacuation and personnel protection',
  'Technical coordination',
  'Resource prioritisation',
  'Business continuity',
  'Recovery',
  'Decision recording',
  'Corrective-action ownership',
]

const Simulation = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Simulation & Exercises
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Test the System Before the Emergency
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              Ziebex uses scenario-based exercises and simulations to test how people, procedures,
              information, technology and leadership interact under operational pressure.
            </p>
            <p className="text-lg text-text-light leading-relaxed mt-4">
              Simulation can test:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mb-12 list-none">
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-light rounded-2xl px-5 py-4 text-text-light"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <FlowPipeline steps={STEPS} variant="dark" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <VideoPlaceholder />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Simulation
