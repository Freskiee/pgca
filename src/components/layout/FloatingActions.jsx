const FloatingActions = () => {
    return (
        <div className="floating-actions">
            <a
                href="https://wa.me/525500000000"
                target="_blank"
                rel="noreferrer"
                className="floating-actions__button floating-actions__button--whatsapp"
                aria-label="WhatsApp"
            >
                <i className="bi bi-whatsapp" />
            </a>

            <a
                href="tel:+525593095640"
                className="floating-actions__button floating-actions__button--call"
                aria-label="Llamada de emergencia"
            >
                <i className="bi bi-telephone-fill" />
            </a>
        </div>
    )
}

export default FloatingActions