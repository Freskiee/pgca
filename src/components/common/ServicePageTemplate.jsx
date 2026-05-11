import { Link } from 'react-router-dom'

const ServicePageTemplate = ({ service }) => {
    const {
        eyebrow,
        title,
        intro,
        heroImage,
        overview,
        servicesTitle,
        services,
        closing,
    } = service

    return (
        <main className="service-page">
            <section
                className="service-page__hero"
                style={{
                    backgroundImage: `
            linear-gradient(180deg, rgba(8, 14, 22, 0.42) 0%, rgba(8, 14, 22, 0.76) 100%),
            url("${heroImage}")
          `,
                }}
            >
                <div className="pgca-container service-page__hero-container">
                    <Link to="/" className="service-page__back-link">
                        <i className="bi bi-arrow-left" />
                        Volver al inicio
                    </Link>

                    <div className="service-page__hero-content">
                        <p className="service-page__eyebrow">{eyebrow}</p>
                        <h1 className="service-page__title">{title}</h1>
                        <p className="service-page__intro">{intro}</p>
                    </div>
                </div>
            </section>

            <section className="service-page__content-section">
                <div className="pgca-container">
                    <div className="service-page__overview">

                        <div className="service-page__overview-text">
                            <p className="service-page__section-label">Enfoque del área</p>

                            <h2 className="service-page__section-title">
                                Acompañamiento profesional y estratégico
                            </h2>

                            <p className="service-page__paragraph">{overview}</p>

                            <div className="service-page__closing-card">
                                <p>{closing}</p>

                                <a href="/#contacto" className="service-page__cta">
                                    <span>Solicitar atención</span>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>

                        <aside className="service-page__services-card">
                            <h3 className="service-page__services-title">
                                {servicesTitle || 'Servicios relacionados'}
                            </h3>

                            <ul className="service-page__services-list">
                                {services.map((item) => (
                                    <li key={item} className="service-page__services-item">
                                        <span />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </aside>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServicePageTemplate
