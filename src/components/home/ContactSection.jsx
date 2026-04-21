import { useMemo, useState } from 'react'
import logoPgca from '../../assets/brand/isotipo-dark.svg'

const CONTACT_INFO = {
  whatsappNumber: '525500000000',
  phoneDisplay: '+52 55 0000 0000',
  phoneLink: 'tel:+525500000000',
  emergencyPhoneDisplay: '+52 55 1111 1111',
  emergencyPhoneLink: 'tel:+525511111111',
  email: 'contacto@pgca.com.mx',
  instagram: 'https://instagram.com/pgca',
  mapsLink: 'https://maps.google.com/?q=Angel+de+la+Independencia+CDMX',
  address: 'Av. Paseo de la Reforma 250, Juárez, Cuauhtémoc, CDMX',
  hours: 'Lunes a Viernes · 9:00 a 18:00',
  mapsEmbed:
    'https://www.google.com/maps?q=Angel%20de%20la%20Independencia%20CDMX&z=15&output=embed',
}

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const serviceLabelMap = {
  fiscal: 'Fiscal',
  penal: 'Penal',
  corporativo: 'Corporativo',
  contable: 'Contable',
}

const ContactSection = () => {
  const [form, setForm] = useState(initialForm)

  const whatsappPrefill = useMemo(() => {
    const serviceLabel = serviceLabelMap[form.service] || 'No especificada'

    const text = `Hola, me gustaría solicitar información.

Nombre: ${form.name || 'No proporcionado'}
Teléfono: ${form.phone || 'No proporcionado'}
Correo: ${form.email || 'No proporcionado'}
Área de interés: ${serviceLabel}
Mensaje: ${form.message || 'Sin mensaje'}
`
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [form])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.open(whatsappPrefill, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="pgca-container">
        <div className="contact-section__header">
          <p className="contact-section__eyebrow">Atención personalizada</p>
          <h2 className="contact-section__title">Contacto</h2>
          <p className="contact-section__description">
            Estamos listos para atenderte con la seriedad, claridad y cercanía
            que cada asunto requiere. Comparte tu consulta y nuestro equipo te
            dará seguimiento.
          </p>
        </div>

        <div className="contact-section__layout">
          <div className="contact-panel contact-panel--info">
            <div className="contact-panel__block">
              <div className="contact-panel__title-row">
                <h3 className="contact-panel__title">Información de contacto</h3>
              </div>

              <div className="contact-list">
                <a
                  className="contact-list__item"
                  href={CONTACT_INFO.phoneLink}
                  aria-label="Llamar por teléfono"
                >
                  <span className="contact-list__icon">
                    <i className="bi bi-telephone-fill" />
                  </span>
                  <span>
                    <strong>Teléfono</strong>
                    <small>{CONTACT_INFO.phoneDisplay}</small>
                  </span>
                </a>

                <a
                  className="contact-list__item"
                  href={`mailto:${CONTACT_INFO.email}`}
                  aria-label="Enviar correo"
                >
                  <span className="contact-list__icon">
                    <i className="bi bi-envelope-fill" />
                  </span>
                  <span>
                    <strong>Correo electrónico</strong>
                    <small>{CONTACT_INFO.email}</small>
                  </span>
                </a>

                <a
                  className="contact-list__item"
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir WhatsApp"
                >
                  <span className="contact-list__icon">
                    <i className="bi bi-whatsapp" />
                  </span>
                  <span>
                    <strong>WhatsApp</strong>
                    <small>Atención directa y seguimiento</small>
                  </span>
                </a>

                <a
                  className="contact-list__item"
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Instagram"
                >
                  <span className="contact-list__icon">
                    <i className="bi bi-instagram" />
                  </span>
                  <span>
                    <strong>Instagram</strong>
                    <small>@pgca</small>
                  </span>
                </a>

                <a
                  className="contact-list__item"
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ver ubicación en Google Maps"
                >
                  <span className="contact-list__icon">
                    <i className="bi bi-geo-alt-fill" />
                  </span>
                  <span>
                    <strong>Ubicación</strong>
                    <small>{CONTACT_INFO.address}</small>
                  </span>
                </a>

                <div className="contact-list__item contact-list__item--static">
                  <span className="contact-list__icon">
                    <i className="bi bi-clock-fill" />
                  </span>
                  <span>
                    <strong>Horario</strong>
                    <small>{CONTACT_INFO.hours}</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-panel__block">
              <div className="contact-panel__title-row">
                <h3 className="contact-panel__title">Ubicación</h3>

                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-map-button"
                >
                  <i className="bi bi-geo-alt-fill" />
                  Abrir en Maps
                </a>
              </div>

              <div className="contact-map-wrap">
                <div className="contact-map-overlay">
                  <div className="contact-map-overlay__logo-wrap" aria-hidden="true">
                    <img
                      src={logoPgca}
                      alt=""
                      className="contact-map-overlay__logo"
                    />
                  </div>

                  <div className="contact-map-overlay__content">
                    <strong>Peregrina Guerrero Cardoso &amp; Asociados</strong>
                    <small>{CONTACT_INFO.address}</small>
                  </div>
                </div>

                <div className="contact-map">
                  <iframe
                    title="Ubicación en Google Maps"
                    src={CONTACT_INFO.mapsEmbed}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel contact-panel--form">
            <div className="contact-form-head">
              <p className="contact-form-head__eyebrow">Solicitud de contacto</p>
              <h3 className="contact-form-head__title">Envíanos un mensaje</h3>
              <p className="contact-form-head__text">
                Completa el formulario y te redirigiremos a WhatsApp con tu
                mensaje listo para enviar.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__grid">
                <div className="contact-field">
                  <label htmlFor="contact-name">Nombre completo</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Teléfono</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu teléfono"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="contact-email">Correo electrónico</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="contact-service">Área de interés</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un área</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="penal">Penal</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="contable">Contable</option>
                  </select>
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="contact-message">Mensaje</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form__footer">
                <p className="contact-form__note">
                  <i className="bi bi-info-circle-fill" />
                  Tu mensaje se abrirá en WhatsApp para su envío final.
                </p>

                <button type="submit" className="contact-submit">
                  <i className="bi bi-whatsapp" />
                  Enviar por WhatsApp
                </button>
              </div>
            </form>

            <div className="contact-urgent-card">
              <div className="contact-urgent-card__icon">
                <i className="bi bi-shield-fill-exclamation" />
              </div>

              <div className="contact-urgent-card__content">
                <h4>Atención prioritaria</h4>
                <p>
                  Para asuntos urgentes o situaciones que requieran respuesta
                  inmediata, contamos con una línea de contacto directo.
                </p>
              </div>

              <a
                href={CONTACT_INFO.emergencyPhoneLink}
                className="contact-urgent-card__action"
              >
                <i className="bi bi-telephone-forward-fill" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection