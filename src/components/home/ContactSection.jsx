import { useMemo, useState } from 'react'
import logoPgca from '../../assets/brand/isotipo-dark.svg'
import contactBg from '../../assets/oficinas/ofi_11.jpg'

const CONTACT_INFO = {
  phoneDisplay: 'Ofi. (55) 9309 5640',
  phoneLink: 'tel:+525593095640',
  emergencyPhoneLink: 'tel:+525593095640',
  email: 'contacto@pgca.com.mx',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Insurgentes%20Sur%201877%20Piso%208%20Guadalupe%20Inn%20%C3%81lvaro%20Obreg%C3%B3n%2001020%20CDMX',
  addressShort: 'Av. Insurgentes Sur 1877, Piso 8',
  addressFull: 'Guadalupe Inn, Álvaro Obregón, 01020 Álvaro Obregón, CDMX',
  hours: 'Lunes a viernes · 9:00 a 18:00',
  mapsEmbed:
    'https://www.google.com/maps?q=Av.%20Insurgentes%20Sur%201877%20Piso%208%20Guadalupe%20Inn%20%C3%81lvaro%20Obreg%C3%B3n%2001020%20CDMX&z=16&output=embed',
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
  const [isPreparing, setIsPreparing] = useState(false)
  const [wasPrepared, setWasPrepared] = useState(false)

  const emailHref = useMemo(() => {
    const serviceLabel = serviceLabelMap[form.service] || 'No especificada'

    const subject = `Solicitud de contacto - ${serviceLabel}`

    const body = `Hola, me gustaría solicitar información.

Nombre: ${form.name || 'No proporcionado'}
Teléfono: ${form.phone || 'No proporcionado'}
Correo: ${form.email || 'No proporcionado'}
Área de interés: ${serviceLabel}

Mensaje:
${form.message || 'Sin mensaje'}
`

    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }, [form])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (wasPrepared) setWasPrepared(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setIsPreparing(true)
    setWasPrepared(false)

    window.setTimeout(() => {
      window.location.href = emailHref
      setForm(initialForm)
      setIsPreparing(false)
      setWasPrepared(true)
    }, 850)
  }

  return (
    <section
      className="contact-section"
      id="contacto"
      style={{
        '--contact-bg-image': `url(${contactBg})`,
      }}
    >
      <div className="contact-section__backdrop" />

      <div className="pgca-container contact-section__inner">
        <div className="contact-section__header">
          <p className="contact-section__eyebrow">Atención personalizada</p>

          <h2 className="contact-section__title">Contacto</h2>

          <p className="contact-section__description">
            Compártenos tu consulta y nuestro equipo dará seguimiento con claridad,
            discreción y atención profesional.
          </p>
        </div>

        <div className="contact-section__layout">
          <div className="contact-panel contact-panel--info">
            <div className="contact-panel__block">
              <div className="contact-panel__title-row">
                <h3 className="contact-panel__title">Datos de contacto</h3>
              </div>

              <div className="contact-list">
                <a className="contact-list__item" href={CONTACT_INFO.phoneLink}>
                  <span className="contact-list__icon">
                    <i className="bi bi-telephone-fill" />
                  </span>

                  <span>
                    <strong>Teléfono de oficina</strong>
                    <small>{CONTACT_INFO.phoneDisplay}</small>
                  </span>
                </a>

                <a
                  className="contact-list__item"
                  href={`mailto:${CONTACT_INFO.email}`}
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
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-list__icon">
                    <i className="bi bi-geo-alt-fill" />
                  </span>

                  <span>
                    <strong>Dirección</strong>
                    <small>
                      {CONTACT_INFO.addressShort}
                      <br />
                      {CONTACT_INFO.addressFull}
                    </small>
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
                    <img src={logoPgca} alt="" className="contact-map-overlay__logo" />
                  </div>

                  <div className="contact-map-overlay__content">
                    <strong>Peregrina, Guerrero, Cardoso &amp; Asociados</strong>
                    <small>
                      {CONTACT_INFO.addressShort}
                      <br />
                      {CONTACT_INFO.addressFull}
                    </small>
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

              <h3 className="contact-form-head__title">
                Escríbenos sobre tu asunto
              </h3>

              <p className="contact-form-head__text">
                Al enviar el formulario se abrirá tu cliente de correo con el
                mensaje listo para compartirlo con el despacho.
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="contact-form__footer">
                <p className="contact-form__note">
                  <i className="bi bi-info-circle-fill" />
                  La información será enviada por correo electrónico.
                </p>

                {wasPrepared && (
                  <p className="contact-form__success">
                    <i className="bi bi-check-circle-fill" />
                    Correo preparado correctamente.
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isPreparing}
                >
                  {isPreparing ? (
                    <>
                      <span className="contact-submit__spinner" />
                      Preparando correo...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-envelope-fill" />
                      Preparar correo
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="contact-support-stack">
              <div className="contact-confidentiality-card">
                <span className="contact-confidentiality-card__icon">
                  <i className="bi bi-shield-lock-fill" />
                </span>

                <div>
                  <strong>Confidencialidad profesional</strong>
                  <p>
                    Toda información compartida con el despacho será tratada con
                    absoluta reserva, discreción y cuidado profesional.
                  </p>
                </div>
              </div>

              <div className="contact-direct-card contact-direct-card--emergency">
                <div>
                  <span>Contacto de emergencia</span>
                  <strong>Atención prioritaria</strong>
                  <p>
                    Línea reservada para casos urgentes que requieran respuesta
                    inmediata, disponible en cualquier horario.
                  </p>
                </div>

                <a href={CONTACT_INFO.emergencyPhoneLink}>
                  <i className="bi bi-telephone-fill" />
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection