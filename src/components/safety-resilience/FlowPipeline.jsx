const FlowPipeline = ({ steps, variant = 'dark' }) => {
  const isDark = variant === 'dark'
  return (
    <div
      className={`w-full overflow-x-auto py-4 ${isDark ? 'bg-dark rounded-3xl px-4 md:px-6' : ''}`}
      role="list"
      aria-label="Process steps"
    >
      <ol className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-1 min-w-0">
        {steps.map((step, index) => (
          <li key={step} role="listitem" className="flex items-center gap-2 md:gap-1">
            <span
              className={`inline-block whitespace-nowrap px-3 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide ${
                index === steps.length - 1
                  ? 'bg-gradient-to-br from-accent to-yellow-400 text-dark'
                  : 'bg-gradient-to-br from-primary to-secondary text-white'
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <span className={`font-bold ${isDark ? 'text-accent' : 'text-primary'}`} aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FlowPipeline
