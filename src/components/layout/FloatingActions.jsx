const FloatingActions = () => {
    return (
        <div className="floating-actions">
            <a
                href="https://wa.me/525500000000"
                target="_blank"
                rel="noreferrer"
                className="floating-actions__button floating-actions__button--whatsapp"
            >
                WA
            </a>

            <a
                href="tel:+525593095640"
                className="floating-actions__button floating-actions__button--call"
            >
                SOS
            </a>
        </div>
    )
}

export default FloatingActions;