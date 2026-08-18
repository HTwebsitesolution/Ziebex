const CANVA_EMBED_SRC =
  'https://www.canva.com/design/DAHSpYc4zYc/jf6_O7Xlc_0-qZWqdlGLXg/watch?embed'

const VideoPlaceholder = ({
  title = 'Ziebex Operational Resilience Website Video',
  src,
}) => {
  return (
    <div className="mt-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-dark relative">
      {src ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          controls
          preload="metadata"
          aria-label={title}
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={CANVA_EMBED_SRC}
          title={title}
          loading="lazy"
          allow="fullscreen"
          allowFullScreen
        />
      )}
    </div>
  )
}

export default VideoPlaceholder
