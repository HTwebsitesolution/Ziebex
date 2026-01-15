const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-center relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full -top-[250px] -right-[250px] animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div>
          <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Get a free consultation today and discover how our expert consultancy can help you achieve your goals and take your organization to the next level.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
