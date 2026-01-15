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
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=700&fit=crop"
              alt="Team Discussion"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-8 right-8 bg-white p-8 rounded-3xl shadow-2xl text-center">
              <h4 className="text-5xl font-extrabold gradient-text mb-2">15+</h4>
              <p className="text-text font-semibold text-sm">Years of Excellence</p>
            </div>
          </div>
          
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
                <li key={index} className="pl-9 relative text-text font-medium">
                  <span className="absolute left-0 text-accent font-extrabold text-xl">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            
            <a
              href="#contact"
              className="inline-block bg-gradient-to-br from-accent to-yellow-400 text-dark px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
