import { partners } from '../../data/partners'

const PartnersSection = () => {
    return (
        <section id="socios" className="pgca-section partners-section">
            <div className="pgca-container">
                <div className="partners-section__header">
                    <p className="partners-section__eyebrow">Socios fundadores</p>
                    <h2 className="partners-section__title">Nuestro equipo directivo</h2>
                    <p className="partners-section__description">
                        Contamos con un equipo de profesionales altamente capacitados y con
                        amplia experiencia en sus respectivas áreas.
                    </p>
                </div>

                <div className="partners-section__grid">
                    {partners.map((partner) => (
                        <article key={partner.name} className="partner-card">
                            <div className="partner-card__image-wrapper">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="partner-card__image"
                                />
                            </div>

                            <div className="partner-card__content">
                                <h3 className="partner-card__name">{partner.name}</h3>
                                <p className="partner-card__role">{partner.role}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection;