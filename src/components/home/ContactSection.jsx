const ContactSection = () => {
    return (
        <section id="contacto" className="pgca-section contact-section">
            <div className="pgca-container">
                <div className="contact-section__layout">
                    <div className="contact-section__info">
                        <p className="contact-section__eyebrow">Contacto</p>
                        <h2 className="contact-section__title">Hablemos de tu caso</h2>
                        <p className="contact-section__description">
                            Ponte en contacto con nosotros para recibir atención profesional,
                            clara y confidencial.
                        </p>

                        <div className="contact-section__details">
                            <div className="contact-section__detail">
                                <span className="contact-section__label">Dirección</span>
                                <p>
                                    Insurgentes Sur #1877, Piso 8, Despacho 802, Col. Guadalupe
                                    Inn, Álvaro Obregón, Ciudad de México.
                                </p>
                            </div>

                            <div className="contact-section__detail">
                                <span className="contact-section__label">Correo</span>
                                <p>contacto@pgca.com.mx</p>
                            </div>

                            <div className="contact-section__detail">
                                <span className="contact-section__label">Teléfono</span>
                                <p>(55) 9309 5640</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="contact-form__group">
                            <input type="text" placeholder="Nombre completo" />
                        </div>

                        <div className="contact-form__group">
                            <input type="email" placeholder="Correo electrónico" />
                        </div>

                        <div className="contact-form__group">
                            <input type="tel" placeholder="Teléfono" />
                        </div>

                        <div className="contact-form__group">
                            <input type="text" placeholder="Asunto" />
                        </div>

                        <div className="contact-form__group">
                            <textarea rows="5" placeholder="Cuéntanos brevemente tu caso" />
                        </div>

                        <button type="submit" className="contact-form__button">
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;