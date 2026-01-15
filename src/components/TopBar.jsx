const TopBar = () => {
  return (
    <div className="bg-dark text-white py-3 text-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-8 flex-wrap">
          <a 
            href="mailto:info@ziebex.com"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-all group"
          >
            <span className="text-base group-hover:scale-110 transition-transform">📧</span>
            <span className="hover:underline">info@ziebex.com</span>
          </a>
          <a 
            href="tel:+442012345678"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-all group"
          >
            <span className="text-base group-hover:scale-110 transition-transform">📞</span>
            <span className="hover:underline">+44 (0) 20 1234 5678</span>
          </a>
        </div>
        <div className="flex gap-3">
          <a 
            href="#" 
            className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:scale-110 shadow-lg hover:shadow-primary/50"
            aria-label="Facebook"
          >
            <span className="text-sm font-semibold">f</span>
          </a>
          <a 
            href="#" 
            className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:scale-110 shadow-lg hover:shadow-primary/50"
            aria-label="LinkedIn"
          >
            <span className="text-sm font-semibold">in</span>
          </a>
          <a 
            href="#" 
            className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:scale-110 shadow-lg hover:shadow-primary/50"
            aria-label="Twitter"
          >
            <span className="text-sm font-semibold">tw</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
