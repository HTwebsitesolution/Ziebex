import ScrollReveal from '../ScrollReveal'
import FlowPipeline from './FlowPipeline'

const RAIL_STEPS = [
  'TRAIN & ROLLING STOCK',
  'TRACK & INFRASTRUCTURE',
  'STATIONS & PASSENGERS',
  'COMMUNICATIONS & SENSORS',
  'CONTROL CENTRE',
  'RESPONSE TEAMS',
  'LEADERSHIP & GOVERNANCE',
]

const RailwayFeature = () => {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Featured Focus
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Integrated Railway & Transport Resilience
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-4">
              Modern railway safety depends on interaction of train operations, infrastructure,
              passengers, signalling and communications, control environments, security, emergency
              response and organisational leadership.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Ziebex applies its integrated safety and resilience methodology to transport corridors
              by connecting operational assessment, technology, people, training, simulation and
              implementation planning.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <FlowPipeline steps={RAIL_STEPS} variant="dark" />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default RailwayFeature
