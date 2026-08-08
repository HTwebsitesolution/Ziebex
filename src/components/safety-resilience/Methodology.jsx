import ScrollReveal from '../ScrollReveal'
import FlowPipeline from './FlowPipeline'

const STEPS = ['ASSESS', 'DESIGN', 'IMPLEMENT', 'TRAIN', 'SIMULATE', 'REVIEW', 'IMPROVE']

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Methodology
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              From Risk Identification to Operational Capability
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FlowPipeline steps={STEPS} variant="dark" />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 max-w-3xl mx-auto space-y-5 text-lg text-text-light leading-relaxed text-center md:text-left">
            <p>
              Ziebex begins by understanding the operating environment, identifying hazards,
              vulnerabilities, critical assets, capability gaps and dependencies.
            </p>
            <p>
              The findings inform appropriate interventions across infrastructure, technology,
              operating procedures, manpower, training, emergency preparedness and governance.
            </p>
            <p>
              The objective is not simply to recommend solutions, but to build capability that can
              be implemented, tested, measured and sustained.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Methodology
