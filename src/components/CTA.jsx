import ScrollReveal from './ScrollReveal'

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-center relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -top-[250px] -right-[250px] animate-float"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full -bottom-[200px] -left-[200px] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <ScrollReveal>
          <div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Get a free consultation today and discover how our expert consultancy can help you achieve your goals and take your organization to the next level.
            </p>
            <ScrollReveal delay={0.2}>
              <a
                href="/consultation"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-2 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTA
