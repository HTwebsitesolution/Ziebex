const SystemPillars = ({ pillars, outcome }) => {
  return (
    <div className="mt-12">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none mb-6">
        {pillars.map((pillar) => (
          <li
            key={pillar}
            className="bg-white border border-black/5 rounded-2xl px-6 py-5 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            {pillar}
          </li>
        ))}
      </ul>
      <div className="relative flex justify-center mb-4" aria-hidden="true">
        <div className="h-8 w-px bg-gradient-to-b from-primary to-accent" />
      </div>
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-center font-poppins font-extrabold text-lg md:text-xl tracking-wide rounded-2xl px-6 py-5 shadow-lg">
        {outcome}
      </div>
    </div>
  )
}

export default SystemPillars
