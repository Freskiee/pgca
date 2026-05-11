import { useCallback, useEffect, useRef, useState } from 'react'
import alfonsoImg from '../../assets/socios/alfonso.png'
import joseAlbertoImg from '../../assets/socios/jose_alberto.png'
import alejandroImg from '../../assets/socios/alejandro.png'

const teamMembers = [
    {
        id: 1,
        name: 'José Alberto López Cardoso',
        credentials: 'L.C., E.F. y M.D.A.F.',
        role: 'Socio · Asesoría Fiscal',
        area: 'Consultoría fiscal, patrimonial y de negocios',
        image: joseAlbertoImg,
        imageFocus: 'center 24%',
        phone: '55 4027 6991',
        email: 'alberto@pgca.com.mx',
        biography:
            'Especialista en consultoría y asesoría fiscal, patrimonial y de negocios, derecho fiscal, asesoría contable y financiera. Cuenta con más de 17 años de trayectoria profesional, asesorando empresas nacionales e internacionales en proyectos de reestructura corporativa, fusiones, escisiones, optimización financiera, contable y fiscal. Ha participado en estrategias de recuperación de saldos a favor por montos relevantes en diversos sectores empresariales, manteniendo como eje principal la protección patrimonial de sus clientes. También se ha desempeñado como catedrático en materia fiscal en distintas universidades a nivel nacional.',
    },
    {
        id: 2,
        name: 'Alejandro E. Guerrero Silva',
        credentials: 'Licenciado en Derecho',
        role: 'Socio · Derecho Penal',
        area: 'Defensa penal, crisis y asuntos complejos',
        image: alejandroImg,
        imageFocus: 'center 22%',
        phone: '55 4871 5443',
        email: 'alejandro@pgca.com.mx',
        biography:
            'Licenciado en Derecho por la Barra Nacional de Abogados. Especialista en Derecho Procesal Penal y Maestro en Ciencias Penales por la Universidad Anáhuac Norte. Su práctica se centra en la defensa penal, la negociación de conflictos complejos y el manejo de crisis, con un enfoque orientado a la contención de riesgos, el control procesal y la resolución estratégica de asuntos de alta complejidad.',
    },
    {
        id: 3,
        name: 'Alfonso Yáñez Peregrina',
        credentials: 'Licenciado en Derecho',
        role: 'Socio · Derecho Fiscal',
        area: 'Litigio fiscal, administrativo y prevención de riesgos',
        image: alfonsoImg,
        imageFocus: 'center 25%',
        phone: '55 9309 5640',
        email: 'alfonsoyp@pgca.com.mx',
        biography:
            'Licenciado en Derecho por la Barra Nacional de Abogados. Cuenta con Maestría en Derecho Administrativo y Fiscal por la misma institución, así como con Especialidad en Prevención de Lavado de Dinero y Financiamiento al Terrorismo por la Universidad Panamericana. Actualmente cursa la Licenciatura en Contabilidad y Finanzas en la Escuela Bancaria y Comercial. Su práctica se caracteriza por su experiencia en procedimientos fiscales complejos, gestión de contingencias y estructuración estratégica, con enfoque en control técnico, litigio contra autoridades administrativas y fiscales, mitigación de riesgos y defensa integral fiscal, corporativa y administrativa.',
    },
]

const AUTO_SLIDE_MS = 7500
const SLIDE_MS = 760

const normalizePhoneHref = (phone) => `tel:+52${phone.replace(/\D/g, '')}`

const isTouchLikeDevice = () => {
    if (typeof window === 'undefined') return false

    return (
        window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
    )
}

const AboutPreviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [activeMember, setActiveMember] = useState(null)
    const [previewMemberId, setPreviewMemberId] = useState(null)
    const [isPaused, setIsPaused] = useState(false)
    const [isSliding, setIsSliding] = useState(false)
    const [slideDirection, setSlideDirection] = useState('next')
    const [incomingIndex, setIncomingIndex] = useState(null)

    const changeTimeoutRef = useRef(null)
    const settleTimeoutRef = useRef(null)

    const currentMember = teamMembers[currentIndex]
    const prevIndex = currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1
    const nextIndex = currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1

    const prevMember = teamMembers[prevIndex]
    const nextMember = teamMembers[nextIndex]

    const clearChangeTimers = useCallback(() => {
        window.clearTimeout(changeTimeoutRef.current)
        window.clearTimeout(settleTimeoutRef.current)
    }, [])

    const changeToIndex = useCallback(
        (nextValue, direction = 'next') => {
            if (nextValue === currentIndex || isSliding) return

            clearChangeTimers()
            setPreviewMemberId(null)
            setSlideDirection(direction)
            setIncomingIndex(nextValue)
            setIsSliding(true)

            changeTimeoutRef.current = window.setTimeout(() => {
                setCurrentIndex(nextValue)
                setIncomingIndex(null)
                setIsSliding(false)
            }, SLIDE_MS)
        },
        [currentIndex, isSliding, clearChangeTimers]
    )

    const goToPrev = (event) => {
        event?.stopPropagation()
        changeToIndex(prevIndex, 'prev')
    }

    const goToNext = (event) => {
        event?.stopPropagation()
        changeToIndex(nextIndex, 'next')
    }

    const handleDotClick = (event, index) => {
        event.stopPropagation()

        const direction = index > currentIndex ? 'next' : 'prev'
        changeToIndex(index, direction)
    }

    const handleCenterClick = () => {
        if (isSliding) return

        if (isTouchLikeDevice() && previewMemberId !== currentMember.id) {
            setPreviewMemberId(currentMember.id)
            return
        }

        setActiveMember(currentMember)
    }

    const handleCloseModal = useCallback(() => {
        setActiveMember(null)
        setPreviewMemberId(null)
    }, [])

    useEffect(() => {
        if (isPaused || activeMember || isSliding) return

        const interval = window.setInterval(() => {
            const nextAutoIndex =
                currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1

            changeToIndex(nextAutoIndex, 'next')
        }, AUTO_SLIDE_MS)

        return () => window.clearInterval(interval)
    }, [currentIndex, isPaused, activeMember, isSliding, changeToIndex])

    useEffect(() => {
        document.body.style.overflow = activeMember ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [activeMember])

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                handleCloseModal()
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
            clearChangeTimers()
        }
    }, [clearChangeTimers, handleCloseModal])

    return (
        <>
            <section id="nosotros" className="about-parallax-section about-parallax-section--team">
                <div className="about-parallax-section__parallax">
                    <div className="about-parallax-section__overlay" />

                    <div className="pgca-container about-parallax-section__hero-content">
                        <div className="about-parallax-section__content-wrap about-parallax-section__content-wrap--team">
                            <div className="about-parallax-section__intro">
                                <h2 className="about-parallax-section__hero-title">
                                    Un equipo construido desde la experiencia y la estrategia
                                </h2>

                                <p className="about-parallax-section__description">
                                    En Peregrina, Guerrero, Cardoso & Asociados reunimos especialistas
                                    en materia penal, fiscal, administrativa y corporativa, con
                                    trayectoria en la atención de asuntos complejos, consultoría
                                    estratégica y defensa integral para empresas y particulares.
                                </p>
                            </div>

                            <div
                                className={`about-spotlight ${isSliding ? 'is-sliding' : ''
                                    } about-spotlight--${slideDirection}`}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <button
                                    type="button"
                                    className="about-spotlight__side about-spotlight__side--left"
                                    onClick={goToPrev}
                                    aria-label={`Ver a ${prevMember.name}`}
                                >
                                    <img
                                        src={prevMember.image}
                                        alt=""
                                        style={{ objectPosition: prevMember.imageFocus }}
                                    />
                                </button>

                                <article
                                    className={`about-spotlight__main ${previewMemberId === currentMember.id ? 'is-selected' : ''
                                        }`}
                                >
                                    <button
                                        type="button"
                                        className="about-spotlight__main-button"
                                        onClick={handleCenterClick}
                                        aria-label={`Ver perfil de ${currentMember.name}`}
                                    >
                                        <div className="about-spotlight__image-stage">
                                            <img
                                                src={currentMember.image}
                                                alt={currentMember.name}
                                                className="about-spotlight__image about-spotlight__image--current"
                                                style={{ objectPosition: currentMember.imageFocus }}
                                            />

                                            {incomingIndex !== null && (
                                                <img
                                                    src={teamMembers[incomingIndex].image}
                                                    alt={teamMembers[incomingIndex].name}
                                                    className="about-spotlight__image about-spotlight__image--incoming"
                                                    style={{ objectPosition: teamMembers[incomingIndex].imageFocus }}
                                                />
                                            )}
                                        </div>

                                        <div className="about-spotlight__info">
                                            <p className="about-spotlight__role">{currentMember.role}</p>
                                            <h3 className="about-spotlight__name">{currentMember.name}</h3>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        className="about-spotlight__arrow about-spotlight__arrow--left"
                                        onClick={goToPrev}
                                        aria-label="Anterior"
                                    >
                                        <span>‹</span>
                                    </button>

                                    <button
                                        type="button"
                                        className="about-spotlight__arrow about-spotlight__arrow--right"
                                        onClick={goToNext}
                                        aria-label="Siguiente"
                                    >
                                        <span>›</span>
                                    </button>
                                </article>

                                <button
                                    type="button"
                                    className="about-spotlight__side about-spotlight__side--right"
                                    onClick={goToNext}
                                    aria-label={`Ver a ${nextMember.name}`}
                                >
                                    <img
                                        src={nextMember.image}
                                        alt=""
                                        style={{ objectPosition: nextMember.imageFocus }}
                                    />
                                </button>

                                <div className="about-spotlight__dots">
                                    {teamMembers.map((member, index) => (
                                        <button
                                            key={member.id}
                                            type="button"
                                            className={`about-spotlight__dot ${index === currentIndex ? 'is-active' : ''
                                                }`}
                                            onClick={(event) => handleDotClick(event, index)}
                                            aria-label={`Ver a ${member.name}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {activeMember && (
                <div
                    className="about-team-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Perfil de ${activeMember.name}`}
                    onClick={handleCloseModal}
                >
                    <div
                        className="about-team-modal__dialog"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="about-team-modal__close"
                            aria-label="Cerrar"
                            onClick={handleCloseModal}
                        >
                            ×
                        </button>

                        <div className="about-team-modal__layout">
                            <div className="about-team-modal__photo-wrap">
                                <img
                                    src={activeMember.image}
                                    alt={activeMember.name}
                                    className="about-team-modal__photo"
                                    style={{ objectPosition: activeMember.imageFocus }}
                                />
                            </div>

                            <aside className="about-team-modal__content">
                                <p className="about-team-modal__eyebrow">Perfil profesional</p>

                                <h3 className="about-team-modal__name">{activeMember.name}</h3>

                                <p className="about-team-modal__credentials">
                                    {activeMember.credentials}
                                </p>

                                <p className="about-team-modal__role">{activeMember.role}</p>

                                <div className="about-team-modal__divider" />

                                <p className="about-team-modal__area">{activeMember.area}</p>

                                <p className="about-team-modal__biography">
                                    {activeMember.biography}
                                </p>

                                <div className="about-team-modal__contact">
                                    <a href={normalizePhoneHref(activeMember.phone)}>
                                        <i className="bi bi-telephone-fill" />
                                        {activeMember.phone}
                                    </a>

                                    <a href={`mailto:${activeMember.email}`}>
                                        <i className="bi bi-envelope-fill" />
                                        {activeMember.email}
                                    </a>

                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutPreviewSection