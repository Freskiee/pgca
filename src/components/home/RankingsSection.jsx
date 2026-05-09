import { useEffect, useRef, useState } from 'react'
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

const AUTO_ROTATE_MS = 5200
const SWIPE_THRESHOLD = 44

const RankingsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [isPaused, setIsPaused] = useState(false)
  const touchStartXRef = useRef(null)

  const totalItems = rankingsLogos.length

  const prevIndex = (activeIndex - 1 + totalItems) % totalItems
  const nextIndex = (activeIndex + 1) % totalItems

  const goToPrev = () => {
    setDirection('prev')
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  const goToNext = () => {
    setDirection('next')
    setActiveIndex((prev) => (prev + 1) % totalItems)
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      setIsPaused(false)
      return
    }

    const touchEndX = event.changedTouches[0].clientX
    const diff = touchStartXRef.current - touchEndX

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }

    touchStartXRef.current = null

    window.setTimeout(() => {
      setIsPaused(false)
    }, 900)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = window.setInterval(() => {
      goToNext()
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(interval)
  }, [isPaused])

  return (
    <section className="rankings-section" id="rankings">
      <div className="rankings-section__bg-image" aria-hidden="true" />

      <div className="pgca-container">
        <div className="rankings-section__header">

          <h2 className="rankings-section__title">
            Presencia editorial en rankings jurídicos
          </h2>

          <p className="rankings-section__description">
            Menciones en Tops México y Los Mejores Abogados de México, espacios
            editoriales que reconocen trayectorias profesionales por su práctica,
            constancia y reputación dentro del ámbito jurídico nacional.
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

          <div
            className={`rankings-section__mobile-carousel rankings-section__mobile-carousel--${direction}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              type="button"
              className="rankings-section__mobile-card rankings-section__mobile-card--prev"
              onClick={goToPrev}
              aria-label={`Ver ${rankingsLogos[prevIndex].name}`}
            >
              <img src={rankingsLogos[prevIndex].image} alt="" />
            </button>

            <a
              key={rankingsLogos[activeIndex].name}
              href={rankingsLogos[activeIndex].href}
              target="_blank"
              rel="noreferrer"
              className="rankings-section__mobile-card rankings-section__mobile-card--active"
              aria-label={rankingsLogos[activeIndex].name}
            >
              <img
                src={rankingsLogos[activeIndex].image}
                alt={rankingsLogos[activeIndex].name}
              />
            </a>

            <button
              type="button"
              className="rankings-section__mobile-card rankings-section__mobile-card--next"
              onClick={goToNext}
              aria-label={`Ver ${rankingsLogos[nextIndex].name}`}
            >
              <img src={rankingsLogos[nextIndex].image} alt="" />
            </button>

            <div className="rankings-section__mobile-hint" aria-hidden="true">
              <span>Desliza</span>
              <i />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RankingsSection