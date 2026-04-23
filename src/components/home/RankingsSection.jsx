import bestLawyersLogo from '../../assets/rankings/best-lawyers.svg'
import legal500Logo from '../../assets/rankings/legal-500.png'
import chambersLogo from '../../assets/rankings/chambers.svg'
import leadersLeagueLogo from '../../assets/rankings/leaders-league.png'
import benchmarkLogo from '../../assets/rankings/benchmark-litigation.png'

const rankingsLogos = [
  {
    name: 'Best Lawyers',
    image: bestLawyersLogo,
    href: 'https://www.bestlawyers.com/',
  },
  {
    name: 'The Legal 500',
    image: legal500Logo,
    href: 'https://www.legal500.com/',
  },
  {
    name: 'Chambers and Partners',
    image: chambersLogo,
    href: 'https://chambers.com/',
  },
  {
    name: 'Leaders League',
    image: leadersLeagueLogo,
    href: 'https://www.leadersleague.com/',
  },
  {
    name: 'Benchmark Litigation',
    image: benchmarkLogo,
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