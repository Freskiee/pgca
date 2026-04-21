const rankingsLogos = [
  {
    name: 'Best Lawyers',
    image:
      '/src/assets/rankings/best-lawyers.svg',
    href: 'https://www.bestlawyers.com/',
    className: 'rankings-section__logo-item rankings-section__logo-item--1',
  },
  {
    name: 'The Legal 500',
    image:
      '/src/assets/rankings/legal-500.png',
    href: 'https://www.legal500.com/',
    className: 'rankings-section__logo-item rankings-section__logo-item--2',
  },
  {
    name: 'Chambers and Partners',
    image:
      '/src/assets/rankings/chambers.svg',
    href: 'https://chambers.com/',
    className: 'rankings-section__logo-item rankings-section__logo-item--3',
  },
  {
    name: 'Leaders League',
    image:
      '/src/assets/rankings/leaders-league.png',
    href: 'https://www.leadersleague.com/',
    className: 'rankings-section__logo-item rankings-section__logo-item--4',
  },
  {
    name: 'Benchmark Litigation',
    image:
      '/src/assets/rankings/benchmark-litigation.png',
    href: 'https://benchmarklitigation.com/',
    className: 'rankings-section__logo-item rankings-section__logo-item--5',
  },
]

const RankingsSection = () => {
  return (
    <section className="rankings-section">
      <div className="pgca-container">
        <div className="rankings-section__header">
          <h2 className="rankings-section__title">Rankings</h2>
          <div className="rankings-section__divider" />
        </div>

        <div className="rankings-section__logos-grid">
          {rankingsLogos.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={item.className}
              aria-label={item.name}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rankings-section__logo-image"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RankingsSection;