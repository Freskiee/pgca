import '../../styles/LegalModal/LegalModal.css'
import logoPgca from '../../assets/brand/isotipo-dark.svg'
import { IoClose } from 'react-icons/io5'

const LegalModal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div
        className="legal-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="legal-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <IoClose />
        </button>

        <div className="legal-modal__header">
          <img
            src={logoPgca}
            alt="PGCA"
            className="legal-modal__logo"
          />

          <span className="legal-modal__eyebrow">
            Documento Legal
          </span>

          <h2 className="legal-modal__title">
            {content.title}
          </h2>

          <p className="legal-modal__updated">
            {content.updatedAt}
          </p>
        </div>

        <div className="legal-modal__body">
          {content.sections.map((section, index) => (
            <article
              key={index}
              className="legal-modal__section"
            >
              <h3>{section.heading}</h3>

              <p>
                {section.content}
              </p>
            </article>
          ))}
        </div>

        <div className="legal-modal__footer">
          <button
            type="button"
            className="legal-modal__button"
            onClick={onClose}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalModal