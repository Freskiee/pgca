import { offices } from '../../data/offices'

const OfficesSection = () => {
    return (
        <section className="pgca-section offices-section">
            <div className="pgca-container">
                <div className="offices-section__header">
                    <p className="offices-section__eyebrow">Oficinas</p>
                    <h2 className="offices-section__title">Tu espacio, nuestra atención</h2>
                    <p className="offices-section__description">
                        Un entorno profesional pensado para transmitir confianza, orden y
                        cercanía en cada encuentro.
                    </p>
                </div>

                <div className="offices-section__grid">
                    {offices.map((office, index) => (
                        <div
                            key={`${office.alt}-${index}`}
                            className={`offices-section__item offices-section__item--${index + 1
                                }`}
                        >
                            <img
                                src={office.image}
                                alt={office.alt}
                                className="offices-section__image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfficesSection;