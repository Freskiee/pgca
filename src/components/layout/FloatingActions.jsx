import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre los servicios de Peregrina, Guerrero, Cardoso & Asociados.'
)

const scrollToContact = () => {
    const section = document.getElementById('contacto')
    if (!section) return

    const top = section.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
        top,
        behavior: 'smooth',
    })

    window.setTimeout(() => {
        const correctedTop = section.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: correctedTop,
            behavior: 'auto',
        })
    }, 420)
}

const FloatingActions = () => {
    const [showCallNotice, setShowCallNotice] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const closeNotice = () => {
            setShowCallNotice(false)
        }

        window.addEventListener('focus', closeNotice)
        document.addEventListener('visibilitychange', closeNotice)

        return () => {
            window.removeEventListener('focus', closeNotice)
            document.removeEventListener('visibilitychange', closeNotice)
        }
    }, [])

    const handleContactNavigation = () => {
        setShowCallNotice(false)

        if (location.pathname !== '/') {
            navigate('/', {
                state: { scrollTarget: 'contacto' },
            })

            return
        }

        scrollToContact()
        window.history.replaceState({}, '', '/')
    }

    const handleWhatsappClick = () => {
        setShowCallNotice(false)
    }

    const handleEmergencyCallClick = () => {
        setShowCallNotice(false)
    }

    return (
        <div className="floating-actions">
            {showCallNotice && (
                <div className="floating-actions__notice">
                    <button
                        type="button"
                        className="floating-actions__notice-close"
                        onClick={() => setShowCallNotice(false)}
                        aria-label="Cerrar aviso"
                    >
                        ×
                    </button>

                    <div className="floating-actions__notice-header">
                        <div className="floating-actions__notice-icon">
                            <i className="bi bi-exclamation-triangle-fill" />
                        </div>

                        <div>
                            <strong>Línea de emergencia</strong>
                            <span>Atención prioritaria para casos urgentes</span>
                        </div>
                    </div>

                    <p>
                        Este número está destinado exclusivamente para situaciones urgentes o
                        emergencias legales inmediatas.
                    </p>

                    <p className="floating-actions__notice-alt">
                        Para consultas generales puedes comunicarte vía{' '}
                        <a
                            href={`https://wa.me/525551998719?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleWhatsappClick}
                        >
                            WhatsApp
                        </a>{' '}
                        o utilizar el{' '}
                        <button
                            type="button"
                            className="floating-actions__notice-link"
                            onClick={handleContactNavigation}
                        >
                            formulario de contacto
                        </button>
                        .
                    </p>

                    <div className="floating-actions__notice-actions">
                        <button type="button" onClick={() => setShowCallNotice(false)}>
                            Cancelar
                        </button>

                        <a href="tel:+525551998719" onClick={handleEmergencyCallClick}>
                            Continuar llamada
                        </a>
                    </div>
                </div>
            )}

            <a
                href={`https://wa.me/525551998719?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="floating-actions__button floating-actions__button--whatsapp"
                aria-label="WhatsApp"
                onClick={handleWhatsappClick}
            >
                <i className="bi bi-whatsapp" />
            </a>

            <button
                type="button"
                className="floating-actions__button floating-actions__button--call"
                aria-label="Llamada de emergencia"
                onClick={() => setShowCallNotice((prev) => !prev)}
            >
                <i className="bi bi-telephone-fill" />
            </button>
        </div>
    )
}

export default FloatingActions