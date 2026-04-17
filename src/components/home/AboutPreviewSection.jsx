import { siteContent } from '../../data/siteContent'

const AboutPreviewSection = () => {
    const { title, description, highlights } = siteContent.aboutPreview

    return (
        <section id="nosotros" className="about-cinematic-section">
            <div className="about-cinematic-section__scene about-cinematic-section__scene--top">
                <div className="about-cinematic-section__top-image" />
                <div className="about-cinematic-section__top-overlay" />

                <div className="pgca-container about-cinematic-section__top-content">
                    <h2 className="about-cinematic-section__hero-title">
                        Una firma con visión
                        <br />
                        estratégica, enfoque
                        <br />
                        profesional y cercanía real.
                    </h2>
                </div>
            </div>

            <div className="about-cinematic-section__divider">
                <div className="pgca-container">
                    <div className="about-cinematic-section__divider-line" />
                </div>
            </div>

            <div className="about-cinematic-section__scene about-cinematic-section__scene--bottom">
                <div className="about-cinematic-section__bottom-image" />

                <div className="pgca-container about-cinematic-section__bottom-grid">
                    <div className="about-cinematic-section__bottom-visual" />

                    <div className="about-cinematic-section__bottom-text">
                        <p className="about-cinematic-section__eyebrow">Sobre nosotros</p>
                        <h3 className="about-cinematic-section__title">{title}</h3>

                        <p className="about-cinematic-section__paragraph">{description}</p>

                        <div className="about-cinematic-section__highlights">
                            {highlights.map((item) => (
                                <div key={item} className="about-cinematic-section__highlight">
                                    <span className="about-cinematic-section__highlight-dot" />
                                    <p className="about-cinematic-section__highlight-text">{item}</p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="about-cinematic-section__quote">
                            “Brindamos soluciones legales y contables con enfoque profesional,
                            claridad estratégica y compromiso con cada cliente.”
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPreviewSection