const rankingsLogos = [
  {
    name: 'Best Lawyers',
    image: '/src/assets/rankings/best-lawyers.svg',
    href: 'https://www.bestlawyers.com/',
  },
  {
    name: 'The Legal 500',
    image: '/src/assets/rankings/legal-500.png',
    href: 'https://www.legal500.com/',
  },
  {
    name: 'Chambers and Partners',
    image: '/src/assets/rankings/chambers.svg',
    href: 'https://chambers.com/',
  },
  {
    name: 'Leaders League',
    image: '/src/assets/rankings/leaders-league.png',
    href: 'https://www.leadersleague.com/',
  },
  {
    name: 'Benchmark Litigation',
    image: '/src/assets/rankings/benchmark-litigation.png',
    href: 'https://benchmarklitigation.com/',
  },
]

const RankingsSection = () => {
  return (
    <section className="rankings-section" id="rankings">
      <div className="pgca-container">
        <div className="rankings-section__header">
          <span className="rankings-section__eyebrow">Reconocimientos</span>

          <h2 className="rankings-section__title">
            Presencia en directorios de referencia
          </h2>

          <p className="rankings-section__description">
            Espacios editoriales y plataformas internacionales que distinguen
            trayectorias construidas con rigor, consistencia y visión profesional.
          </p>
        </div>

        <div className="rankings-section__logos-wrap">
          <div className="rankings-section__logos-grid">
            {rankingsLogos.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`rankings-section__logo-link rankings-section__logo-link--${index + 1}`}
                aria-label={item.name}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rankings-section__logo-image"
                />
                <span className="rankings-section__logo-name">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RankingsSection;