const TopBar = () => {
  return (
    <div className="bg-dark text-white py-3 text-sm">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-white/90">
            <span>📧</span>
            <span>info@ziebex.com</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <span>📞</span>
            <span>+44 (0) 20 1234 5678</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-primary hover:-translate-y-0.5"
            aria-label="Facebook"
          >
            <span className="text-xs">f</span>
          </a>
          <a 
            href="#" 
            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-primary hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <span className="text-xs">in</span>
          </a>
          <a 
            href="#" 
            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-primary hover:-translate-y-0.5"
            aria-label="Twitter"
          >
            <span className="text-xs">tw</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
