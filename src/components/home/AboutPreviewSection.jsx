import { siteContent } from '../../data/siteContent'

const AboutPreviewSection = () => {
    const { title } = siteContent.aboutPreview

    return (
        <section id="nosotros" className="about-parallax-section">
            <div className="about-parallax-section__parallax">
                <div className="about-parallax-section__overlay" />

                <div className="pgca-container about-parallax-section__hero-content">
                    <p className="about-parallax-section__eyebrow">Sobre nosotros</p>
                    <h2 className="about-parallax-section__hero-title">
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default AboutPreviewSection;