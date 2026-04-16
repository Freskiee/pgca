import { Link } from 'react-router-dom'
import { siteContent } from '../../data/siteContent'

const PracticeAreasSection = () => {
    const { title, description, items } = siteContent.practiceAreas

    return (
        <section id="servicios" className="pgca-section practice-areas-section">
            <div className="pgca-container">
                <div className="practice-areas-section__header">
                    <p className="practice-areas-section__eyebrow">Servicios</p>
                    <h2 className="practice-areas-section__title">{title}</h2>
                    <p className="practice-areas-section__description">{description}</p>
                </div>

                <div className="practice-areas-section__grid">
                    {items.map((item) => (
                        <article key={item.title} className="practice-area-card">
                            <h3 className="practice-area-card__title">{item.title}</h3>
                            <p className="practice-area-card__description">
                                {item.description}
                            </p>

                            <Link to={item.href} className="practice-area-card__link">
                                Ver más
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PracticeAreasSection;