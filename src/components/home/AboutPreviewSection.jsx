import { siteContent } from '../../data/siteContent'

const AboutPreviewSection = () => {
    const { title, description, highlights } = siteContent.aboutPreview

    return (
        <section id="nosotros" className="pgca-section">
            <div className="pgca-container">
                <div className="about-preview">
                    <div className="about-preview__content">
                        <p className="about-preview__eyebrow">Nosotros</p>
                        <h2 className="about-preview__title">{title}</h2>
                        <p className="about-preview__description">{description}</p>

                        <div className="about-preview__highlights">
                            {highlights.map((item) => (
                                <div key={item} className="about-preview__highlight">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-preview__visual">
                        <div className="about-preview__image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
                                alt="Despacho profesional"
                                className="about-preview__image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPreviewSection;