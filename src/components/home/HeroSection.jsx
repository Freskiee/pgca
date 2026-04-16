import { siteContent } from '../../data/siteContent'
import HeroMissionVisionTabs from './HeroMissionVisionTabs'

const HeroSection = () => {
  const { title, description, primaryCta, backgroundImage, sideImage } =
    siteContent.hero

  return (
    <section
      id="inicio"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 27, 34, 0.32), rgba(18, 27, 34, 0.56)), url("${backgroundImage}")`,
      }}
    >
      <div className="pgca-container hero-section__container">
        <div className="hero-section__layout">
          <div className="hero-section__content">
            <div className="hero-section__content-box">
              <h1 className="hero-section__title">{title}</h1>
              <p className="hero-section__subtitle">{description}</p>

              <a href={primaryCta.href} className="hero-section__button">
                {primaryCta.label}
              </a>
            </div>
          </div>

          <div className="hero-section__visual">
            <div className="hero-section__visual-frame">
              <img
                src={sideImage}
                alt="Representación legal y contable"
                className="hero-section__visual-image"
              />
            </div>
          </div>
        </div>

        <HeroMissionVisionTabs />
      </div>
    </section>
  )
}

export default HeroSection