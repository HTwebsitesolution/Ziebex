const VideoPlaceholder = ({
  label = 'Operational resilience simulation video — coming soon',
  src,
}) => {
  if (src) {
    return (
      <div className="mt-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-dark">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          aria-label={label}
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div
      className="mt-10 aspect-video rounded-3xl bg-dark border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-4 px-6 text-center relative overflow-hidden"
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" aria-hidden="true" />
      <button
        type="button"
        disabled
        className="relative z-10 w-16 h-16 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center text-white cursor-not-allowed"
        aria-label="Play video (not yet available)"
      >
        <span className="ml-1 text-2xl" aria-hidden="true">▶</span>
      </button>
      <p className="relative z-10 text-white/80 font-medium max-w-md">{label}</p>
    </div>
  )
}

export default VideoPlaceholder
