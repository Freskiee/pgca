import { siteContent } from '../../data/siteContent'

const AboutPreviewSection = () => {
  const { title, description, teamText, highlights } = siteContent.aboutPreview

  return (
    <section id="nosotros" className="about-parallax-section">
      <div className="about-parallax-section__parallax">
        <div className="about-parallax-section__overlay" />

        <div className="pgca-container about-parallax-section__hero-content">
          <div className="about-parallax-section__content-wrap">
            <div className="about-parallax-section__intro">
              <p className="about-parallax-section__eyebrow">Sobre nosotros</p>

              <h2 className="about-parallax-section__hero-title">
                {title}
              </h2>
            </div>

            <div className="about-parallax-section__panel">
              <p className="about-parallax-section__description">
                {description}
              </p>

              <div className="about-parallax-section__team">
                <h3 className="about-parallax-section__team-title">
                  Nuestro Equipo
                </h3>

                <p className="about-parallax-section__team-text">
                  {teamText}
                </p>
              </div>

              <ul className="about-parallax-section__highlights">
                {highlights.map((item) => (
                  <li key={item} className="about-parallax-section__highlight-item">
                    <span className="about-parallax-section__highlight-line" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreviewSection