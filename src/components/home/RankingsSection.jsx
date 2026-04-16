import { siteContent } from '../../data/siteContent'

const RankingsSection = () => {
    const { title, description, items } = siteContent.rankings

    return (
        <section className="pgca-section pgca-dark-section">
            <div className="pgca-container">
                <div className="rankings-section">
                    <div className="rankings-section__header">
                        <p className="rankings-section__eyebrow">Prestigio y trayectoria</p>
                        <h2 className="rankings-section__title">{title}</h2>
                        <p className="rankings-section__description">{description}</p>
                    </div>

                    <div className="rankings-section__grid">
                        {items.map((item) => (
                            <div key={item.name} className="rankings-section__card">
                                <span className="rankings-section__badge">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RankingsSection;