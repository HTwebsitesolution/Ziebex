import ScrollReveal from './ScrollReveal'

const About = () => {
  const benefits = [
    'Expert consultants across multiple industries',
    'Proven track record of successful project delivery',
    'Global reach with local expertise',
    'Tailored solutions for unique challenges',
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=700&fit=crop"
                alt="Team Discussion"
                className="w-full rounded-3xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-8 right-8 bg-white p-8 rounded-3xl shadow-2xl text-center z-20 transform transition-all duration-500 hover:scale-110">
                <h4 className="text-5xl font-extrabold gradient-text mb-2">15+</h4>
                <p className="text-text font-semibold text-sm">Years of Excellence</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div>
              <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
                About Ziebex
              </div>
              <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                World Leading Consultancy Firm
              </h2>
              <p className="text-text-light mb-6 text-lg leading-relaxed">
                Ziebex is a global consultancy firm providing innovative solutions and support to individuals, companies, and government agencies worldwide. We're UK-based but our impact is truly global.
              </p>
              <p className="text-text-light mb-8 text-lg leading-relaxed">
                Our passion lies in finding creative, innovative, and efficient solutions that help clients achieve their goals, maximize resources, and overcome any managerial obstacle.
              </p>
              
              <ul className="list-none mb-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={index} delay={index * 0.1} direction="left">
                    <li className="pl-9 relative text-text font-medium group/item hover:text-primary transition-colors duration-300">
                      <span className="absolute left-0 text-accent font-extrabold text-xl transform transition-transform duration-300 group-hover/item:scale-125">✓</span>
                      {benefit}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
              
              <ScrollReveal delay={0.4}>
                <a
                  href="/consultation"
                  className="inline-block bg-gradient-to-br from-accent to-yellow-400 text-dark px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-2 hover:scale-105 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Partner With Us</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
