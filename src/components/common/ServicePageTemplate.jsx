const ServicePageTemplate = ({ service }) => {
    const { eyebrow, title, intro, heroImage, overview, services, closing } =
        service

    return (
        <main className="service-page">
            <section
                className="service-page__hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(20, 28, 36, 0.45), rgba(20, 28, 36, 0.52)), url("${heroImage}")`,
                }}
            >
                <div className="pgca-container">
                    <div className="service-page__hero-content">
                        <p className="service-page__eyebrow">{eyebrow}</p>
                        <h1 className="service-page__title">{title}</h1>
                        <p className="service-page__intro">{intro}</p>
                    </div>
                </div>
            </section>

            <section className="pgca-section">
                <div className="pgca-container">
                    <div className="service-page__overview">
                        <div className="service-page__overview-text">
                            <p className="service-page__section-label">Enfoque del área</p>
                            <h2 className="service-page__section-title">
                                Acompañamiento profesional y estratégico
                            </h2>
                            <p className="service-page__paragraph">{overview}</p>
                        </div>

                        <div className="service-page__services-card">
                            <h3 className="service-page__services-title">
                                Servicios relacionados
                            </h3>

                            <ul className="service-page__services-list">
                                {services.map((item) => (
                                    <li key={item} className="service-page__services-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pgca-section service-page__closing-section">
                <div className="pgca-container">
                    <div className="service-page__closing">
                        <p className="service-page__section-label">Compromiso</p>
                        <h2 className="service-page__section-title">
                            Atención clara, seria y confiable
                        </h2>
                        <p className="service-page__paragraph">{closing}</p>

                        <a href="/#contacto" className="service-page__cta">
                            Solicitar atención
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServicePageTemplate;