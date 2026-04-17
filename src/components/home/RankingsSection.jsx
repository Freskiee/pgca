import { siteContent } from '../../data/siteContent'

const RankingsSection = () => {
  const { title, description, items } = siteContent.rankings

  return (
    <section className="rankings-plate-section">
      <div className="pgca-container">
        <div className="rankings-plate-section__header">
          <p className="rankings-plate-section__eyebrow">Reconocimientos</p>
          <h2 className="rankings-plate-section__title">{title}</h2>
          <p className="rankings-plate-section__description">{description}</p>
        </div>

        <div className="rankings-plate-section__cluster">
          {items.map((item, index) => (
            <a
              key={item.name}
              href="#"
              className={`rankings-plate-section__badge rankings-plate-section__badge--${index + 1}`}
            >
              <span className="rankings-plate-section__badge-text">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RankingsSection