import { useEffect, useRef, useState } from 'react'

import mejoresAbogadosMexicoLogo from '../../assets/rankings/mejores-abogados-mexico.svg'
import topsMexicoLogo from '../../assets/rankings/tops-mexico.svg'
import mejores2023Logo from '../../assets/rankings/mejores_2023.svg'
import mejores2024Logo from '../../assets/rankings/mejores_2024.svg'
import mejores2025Logo from '../../assets/rankings/mejores_2025.svg'
import mejores2026Logo from '../../assets/rankings/mejores_2026.svg'

import sociosPremioBg from '../../assets/oficinas/socios-premio.jpg'

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
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const total = rankingsLogos.length

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 4200)

    return () => clearInterval(intervalRef.current)
  }, [])

  const getCardClass = (index) => {
    if (index === activeIndex) {
      return 'rankings-section__mobile-card--active'
    }

    if (index === (activeIndex - 1 + total) % total) {
      return 'rankings-section__mobile-card--prev'
    }

    if (index === (activeIndex + 1) % total) {
      return 'rankings-section__mobile-card--next'
    }

    return 'rankings-section__mobile-card--hidden'
  }

  return (
    <section className="rankings-section" id="rankings">
      <div
        className="rankings-section__bg-image"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(4, 10, 18, 0.365) 0%,
              rgba(4, 10, 18, 0.256) 42%,
              rgba(4, 10, 18, 0.393) 100%
            ),
            url(${sociosPremioBg})
          `,
        }}
      />

      <div className="pgca-container">
        <div className="rankings-section__header">
          <h2 className="rankings-section__title">
            Presencia editorial
            <br />
            en rankings jurídicos
          </h2>

          <p className="rankings-section__description">
            Menciones en Tops México y Los Mejores Abogados de México,
            espacios editoriales que reconocen trayectorias profesionales
            por su práctica, constancia y reputación dentro del ámbito jurídico nacional.
          </p>
        </div>

        <div className="rankings-section__logos-wrap">
          <div className="rankings-section__logos-grid">
            {rankingsLogos.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rankings-section__logo-link"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rankings-section__logo-image"
                />
              </a>
            ))}
          </div>

          <div className="rankings-section__mobile-carousel">
            {rankingsLogos.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`rankings-section__mobile-card ${getCardClass(index)}`}
              >
                <img src={item.image} alt={item.name} />
              </a>
            ))}

            <div className="rankings-section__mobile-hint">
              <i />
              desliza
              <i />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RankingsSection