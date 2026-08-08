import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark to-dark-light text-white py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-accent font-semibold text-base uppercase tracking-wider mb-4">
            Capability
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
            Safety, Risk & Operational Resilience
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-3xl leading-relaxed">
            Helping organisations protect people, assets and operations through integrated risk
            management, technology, preparedness, training and implementation.
          </p>
          <div className="space-y-5 text-lg text-white/75 max-w-3xl leading-relaxed mb-10">
            <p>
              Ziebex helps organisations understand risk, protect people and critical assets,
              strengthen operational preparedness and build resilient systems capable of responding
              effectively when disruption occurs.
            </p>
            <p>
              Our approach integrates people, process, technology, infrastructure and leadership
              rather than treating safety, security, emergency preparedness or business continuity as
              isolated disciplines.
            </p>
            <p>
              From baseline risk assessments and operational reviews to control systems, asset
              monitoring, training, simulation and implementation support, Ziebex works with clients
              and specialist partners to translate strategy into practical, measurable capability.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-br from-accent to-yellow-400 text-dark px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:scale-105 shadow-lg shadow-accent/40"
            >
              Discuss a Project
            </Link>
            <a
              href="#methodology"
              className="bg-white/10 text-white px-10 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all"
            >
              Explore Our Approach
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Hero
