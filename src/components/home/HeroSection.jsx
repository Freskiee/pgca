import { useState } from 'react'
import { siteContent } from '../../data/siteContent'
import HeroMissionVisionTabs from './HeroMissionVisionTabs'

const HeroSection = () => {
  const { title, description, primaryCta, backgroundImage } = siteContent.hero
  const [isFolderOpen, setIsFolderOpen] = useState(false)

  const handleContactClick = (event) => {
    event.preventDefault()

    const section = document.getElementById('contacto')

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  return (
    <section
      id="inicio"
      className="hero-section hero-section--parallax"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(14, 22, 30, 0.10) 0%, rgba(14, 22, 30, 0.42) 100%),
          url("${backgroundImage}")
        `,
      }}
    >
      <div className="hero-section__backdrop" />

      <div className="pgca-container hero-section__container">
        <div className="hero-section__layout">
          <div className="hero-section__content">
            <div className="hero-section__content-box">
              <span className="hero-section__eyebrow">
                Asesoría legal y contable
              </span>

              <h1 className="hero-section__title">{title}</h1>

              <p className="hero-section__subtitle">{description}</p>
            </div>
          </div>

          <aside className={`hero-section__aside ${isFolderOpen ? 'has-open-card' : ''}`}>
            <a
              href={primaryCta.href}
              className="hero-section__cta-link"
              onClick={handleContactClick}
            >
              <span className="hero-section__cta-depth" />
              <span className="hero-section__cta-text">
                <i className="bi bi-telephone-fill" />
                {primaryCta.label}
              </span>
            </a>

            <HeroMissionVisionTabs onOpenChange={setIsFolderOpen} />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default HeroSection