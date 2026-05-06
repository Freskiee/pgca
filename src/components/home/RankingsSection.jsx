import mejoresAbogadosMexicoLogo from '../../assets/rankings/mejores-abogados-mexico.svg'
import topsMexicoLogo from '../../assets/rankings/tops-mexico.svg'
import mejores2023Logo from '../../assets/rankings/mejores_2023.svg'
import mejores2024Logo from '../../assets/rankings/mejores_2024.svg'
import mejores2025Logo from '../../assets/rankings/mejores_2025.svg'
import mejores2026Logo from '../../assets/rankings/mejores_2026.svg'

const rankingsLogos = [
  {
    name: 'Los Mejores Abogados de México',
    image: mejoresAbogadosMexicoLogo,
    href: 'https://topslosmejoresabogados.com/',
  },
  {
    name: 'Tops México',
    image: topsMexicoLogo,
    href: 'https://www.instagram.com/p/DXpPpemll3B/',
  },
  {
    name: 'Edición 2023',
    image: mejores2023Logo,
    href: 'https://topslosmejoresabogados.com/suplemento-2023/',
  },
  {
    name: 'Edición 2024',
    image: mejores2024Logo,
    href: 'https://topslosmejoresabogados.com/suplemento-2024/',
  },
  {
    name: 'Edición 2025',
    image: mejores2025Logo,
    href: 'https://topslosmejoresabogados.com/suplemento-2025/',
  },
  {
    name: 'Edición 2026',
    image: mejores2026Logo,
    href: 'https://topslosmejoresabogados.com/top-ranking/',
  },
]

const RankingsSection = () => {
  return (
    <section className="rankings-section" id="rankings">
      <div className="pgca-container">
        <div className="rankings-section__header">
          <span className="rankings-section__eyebrow">Reconocimientos</span>

          <h2 className="rankings-section__title">
            Menciones en directorios editoriales de México
          </h2>

          <p className="rankings-section__description">
            Presencia en las ediciones de Tops México y Los Mejores Abogados de
            México, una selección editorial que distingue trayectorias jurídicas
            por su práctica profesional, constancia y reputación.
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
                title={item.name}
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
      </div>
    </section>
  )
}

export default RankingsSection