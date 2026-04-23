import { useEffect, useMemo, useState } from 'react'
import { siteContent } from '../../data/siteContent'

const teamMembers = [
    {
        id: 1,
        name: 'Alberto L. Cardoso',
        credentials: 'L.C, E. F. y M.D.A.F',
        role: 'Socio Fiscal',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
        education: [
            'Licenciatura en Contaduría',
            'Especialidad en Finanzas',
            'Maestría en Dirección y Administración Fiscal',
        ],
        experience: [
            'Más de 15 años en consultoría fiscal y acompañamiento estratégico.',
            'Asesoría a empresas en cumplimiento, estructura financiera y prevención de riesgos.',
            'Coordinación de asuntos fiscales con enfoque integral y visión de negocio.',
        ],
        languages: ['Español', 'Inglés'],
        phone: '55 4027 6991',
        email: 'alberto@pgca.com',
        linkedin: 'https://linkedin.com/in/alberto-cardoso',
    },
    {
        id: 2,
        name: 'Alejandro E. Guerrero Silva',
        credentials: 'Licenciado en Derecho',
        role: 'Socio',
        image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
        education: [
            'Licenciatura en Derecho',
            'Diplomado en Litigio Estratégico',
            'Actualización en práctica corporativa y consultiva',
        ],
        experience: [
            'Experiencia en atención de asuntos jurídicos complejos y asesoría estratégica.',
            'Participación en revisión contractual, análisis de riesgos y defensa preventiva.',
            'Acompañamiento cercano a clientes en decisiones de operación y estructura.',
        ],
        languages: ['Español', 'Inglés'],
        phone: '55 4871 5443',
        email: 'alejandro@pgca.com',
        linkedin: 'https://linkedin.com/in/alejandro-guerrero',
    },
    {
        id: 3,
        name: 'Lic. Alfonso Yañez Peregrina',
        credentials: 'Licenciado en Derecho',
        role: 'Socio',
        image:
            'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',
        education: [
            'Licenciatura en Derecho',
            'Especialidad en asesoría jurídica empresarial',
            'Formación continua en cumplimiento y estrategia legal',
        ],
        experience: [
            'Participación en asuntos corporativos, civiles y de consultoría jurídica.',
            'Acompañamiento profesional en decisiones preventivas y atención personalizada.',
            'Enfoque orientado a claridad, orden documental y estrategia.',
        ],
        languages: ['Español'],
        phone: '55 3056 0190',
        email: 'poncho@pgca.com',
        linkedin: 'https://linkedin.com/in/alfonso-yanez',
    },
    {
        id: 4,
        name: 'Eunice G. Guzman C.',
        credentials: 'Licenciada en Derecho',
        role: 'Abogada',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
        education: [
            'Licenciatura en Derecho',
            'Diplomado en técnica jurídica y redacción legal',
            'Actualización en práctica consultiva',
        ],
        experience: [
            'Atención de expedientes, seguimiento procesal y apoyo en consultoría.',
            'Elaboración y revisión de documentos jurídicos con enfoque técnico.',
            'Participación activa en atención a clientes y gestión de asuntos.',
        ],
        languages: ['Español', 'Inglés'],
        phone: '55 7448 0573',
        email: 'eunice@pgca.com',
        linkedin: 'https://linkedin.com/in/eunice-guzman',
    },
    {
        id: 5,
        name: 'Mauricio Álvarez Morfín',
        credentials: 'Contador Público',
        role: 'Contador',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
        education: [
            'Licenciatura en Contaduría',
            'Especialidad en control financiero',
            'Actualización en normatividad contable y fiscal',
        ],
        experience: [
            'Supervisión de procesos contables, conciliaciones y control operativo.',
            'Apoyo en reporteo financiero y cumplimiento administrativo.',
            'Participación en orden y seguimiento documental para clientes.',
        ],
        languages: ['Español'],
        phone: '55 6574 6898',
        email: 'mauricio@pgca.com',
        linkedin: 'https://linkedin.com/in/mauricio-alvarez',
    },
    {
        id: 6,
        name: 'Sandra Valenzuela Arellano',
        credentials: 'Licenciada en Derecho',
        role: 'Abogada',
        image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
        education: [
            'Licenciatura en Derecho',
            'Formación en contratos y cumplimiento',
            'Diplomado en argumentación jurídica',
        ],
        experience: [
            'Atención a asuntos consultivos y revisión de instrumentos jurídicos.',
            'Seguimiento de procesos internos y preparación documental.',
            'Acompañamiento profesional con enfoque ordenado y cercano.',
        ],
        languages: ['Español', 'Inglés'],
        phone: '55 1127 7750',
        email: 'sandra@pgca.com',
        linkedin: 'https://linkedin.com/in/sandra-valenzuela',
    },
]

const getCardsPerView = (width) => {
    if (width <= 768) return 1
    if (width <= 1180) return 2
    return 3
}

const AUTO_MS = 3400
const normalizePhoneHref = (phone) => `tel:+52${phone.replace(/\D/g, '')}`

const AboutPreviewSection = () => {
    const { title, description } = siteContent.aboutPreview

    const initialCardsPerView =
        typeof window !== 'undefined' ? getCardsPerView(window.innerWidth) : 3

    const [cardsPerView, setCardsPerView] = useState(initialCardsPerView)
    const [currentIndex, setCurrentIndex] = useState(initialCardsPerView)
    const [isAnimating, setIsAnimating] = useState(true)
    const [isPaused, setIsPaused] = useState(false)
    const [activeMember, setActiveMember] = useState(null)
    const [previewMemberId, setPreviewMemberId] = useState(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    const clonesHead = useMemo(() => teamMembers.slice(0, cardsPerView), [cardsPerView])
    const clonesTail = useMemo(() => teamMembers.slice(-cardsPerView), [cardsPerView])

    const carouselItems = useMemo(
        () => [...clonesTail, ...teamMembers, ...clonesHead],
        [clonesTail, clonesHead]
    )

    useEffect(() => {
        const checkTouchDevice = () => {
            const hasTouch =
                window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0

            setIsTouchDevice(hasTouch)

            const nextCards = getCardsPerView(window.innerWidth)

            setCardsPerView((prevCards) => {
                if (prevCards !== nextCards) {
                    setCurrentIndex(nextCards)
                    setIsAnimating(false)
                }
                return nextCards
            })
        }

        checkTouchDevice()
        window.addEventListener('resize', checkTouchDevice)

        return () => window.removeEventListener('resize', checkTouchDevice)
    }, [])

    useEffect(() => {
        if (activeMember) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [activeMember])

    useEffect(() => {
        if (isPaused || activeMember) return

        const interval = window.setInterval(() => {
            setIsAnimating(true)
            setCurrentIndex((prev) => prev + 1)
        }, AUTO_MS)

        return () => window.clearInterval(interval)
    }, [isPaused, activeMember])

    useEffect(() => {
        const onEsc = (event) => {
            if (event.key === 'Escape') {
                setActiveMember(null)
                setPreviewMemberId(null)
            }
        }

        window.addEventListener('keydown', onEsc)
        return () => window.removeEventListener('keydown', onEsc)
    }, [])

    useEffect(() => {
        if (!isAnimating) {
            const raf1 = requestAnimationFrame(() => {
                const raf2 = requestAnimationFrame(() => setIsAnimating(true))
                return () => cancelAnimationFrame(raf2)
            })
            return () => cancelAnimationFrame(raf1)
        }
    }, [isAnimating])

    const handleTransitionEnd = () => {
        if (currentIndex >= teamMembers.length + cardsPerView) {
            setIsAnimating(false)
            setCurrentIndex(cardsPerView)
        }

        if (currentIndex <= cardsPerView - 1) {
            setIsAnimating(false)
            setCurrentIndex(teamMembers.length + cardsPerView - 1)
        }
    }

    const goPrev = () => {
        setIsAnimating(true)
        setCurrentIndex((prev) => prev - 1)
    }

    const goNext = () => {
        setIsAnimating(true)
        setCurrentIndex((prev) => prev + 1)
    }

    const handleMemberCardClick = (member) => {
        if (!isTouchDevice) {
            setActiveMember(member)
            setPreviewMemberId(member.id)
            return
        }

        if (previewMemberId !== member.id) {
            setPreviewMemberId(member.id)
            return
        }

        setActiveMember(member)
    }

    const handleCloseModal = () => {
        setActiveMember(null)
        setPreviewMemberId(null)
    }

    const normalizedIndex =
        ((currentIndex - cardsPerView) % teamMembers.length + teamMembers.length) %
        teamMembers.length

    const translate = `translateX(-${(100 / cardsPerView) * currentIndex}%)`

    return (
        <>
            <section id="nosotros" className="about-parallax-section about-parallax-section--team">
                <div className="about-parallax-section__parallax">
                    <div className="about-parallax-section__overlay" />

                    <div className="pgca-container about-parallax-section__hero-content">
                        <div className="about-parallax-section__content-wrap about-parallax-section__content-wrap--team">
                            <div className="about-parallax-section__intro">
                                <p className="about-parallax-section__eyebrow">Sobre nosotros</p>
                                <h2 className="about-parallax-section__hero-title">{title}</h2>
                                <p className="about-parallax-section__description">{description}</p>
                            </div>

                            <div
                                className="about-team-carousel"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div className="about-team-carousel__shell">
                                    <button
                                        type="button"
                                        className="about-team-carousel__nav about-team-carousel__nav--prev"
                                        onClick={goPrev}
                                        aria-label="Anterior"
                                    >
                                        ‹
                                    </button>

                                    <div className="about-team-carousel__viewport">
                                        <div
                                            className={`about-team-carousel__track ${isAnimating ? 'is-animating' : 'is-static'}`}
                                            style={{ transform: translate }}
                                            onTransitionEnd={handleTransitionEnd}
                                        >
                                            {carouselItems.map((member, index) => {
                                                const isSelected = activeMember?.id === member.id
                                                const isPreviewed = previewMemberId === member.id

                                                return (
                                                    <article
                                                        key={`${member.id}-${index}`}
                                                        className={`about-team-card ${isSelected || isPreviewed ? 'is-selected' : ''}`}
                                                        style={{ width: `${100 / cardsPerView}%` }}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="about-team-card__button"
                                                            onClick={() => handleMemberCardClick(member)}
                                                            aria-label={`Ver perfil de ${member.name}`}
                                                        >
                                                            <div className="about-team-card__image-wrap">
                                                                <img
                                                                    src={member.image}
                                                                    alt={member.name}
                                                                    className="about-team-card__image"
                                                                />

                                                                <div className="about-team-card__overlay">
                                                                    <h3 className="about-team-card__name">{member.name}</h3>
                                                                </div>
                                                            </div>

                                                            <div className="about-team-card__content">
                                                                <p className="about-team-card__role">{member.role}</p>
                                                            </div>
                                                        </button>
                                                    </article>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="about-team-carousel__nav about-team-carousel__nav--next"
                                        onClick={goNext}
                                        aria-label="Siguiente"
                                    >
                                        ›
                                    </button>
                                </div>

                                <div className="about-team-carousel__dots">
                                    {teamMembers.map((member, dotIndex) => (
                                        <button
                                            key={member.id}
                                            type="button"
                                            className={`about-team-carousel__dot ${normalizedIndex === dotIndex ? 'is-active' : ''}`}
                                            onClick={() => {
                                                setIsAnimating(true)
                                                setCurrentIndex(dotIndex + cardsPerView)
                                                setPreviewMemberId(null)
                                            }}
                                            aria-label={`Ir a ${member.name}`}
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
                            <aside className="about-team-modal__sidebar">
                                <div className="about-team-modal__top">
                                    <p className="about-team-modal__eyebrow">Perfil profesional</p>
                                    <h3 className="about-team-modal__name">{activeMember.name}</h3>
                                    <p className="about-team-modal__credentials">{activeMember.credentials}</p>
                                    <p className="about-team-modal__role">{activeMember.role}</p>
                                </div>

                                <div className="about-team-modal__grid">
                                    <div className="about-team-modal__block">
                                        <h4>Educación</h4>
                                        <ul>
                                            {activeMember.education.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="about-team-modal__block">
                                        <h4>Experiencia</h4>
                                        <ul>
                                            {activeMember.experience.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="about-team-modal__block">
                                        <h4>Idiomas</h4>
                                        <p>{activeMember.languages.join(' · ')}</p>
                                    </div>

                                    <div className="about-team-modal__block">
                                        <h4>Contacto</h4>
                                        <a href={normalizePhoneHref(activeMember.phone)}>
                                            <i className="bi bi-telephone-fill" />
                                            {activeMember.phone}
                                        </a>
                                        <a href={`mailto:${activeMember.email}`}>
                                            <i className="bi bi-envelope-fill" />
                                            {activeMember.email}
                                        </a>
                                        <a href={activeMember.linkedin} target="_blank" rel="noreferrer">
                                            <i className="bi bi-linkedin" />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </aside>

                            <div className="about-team-modal__photo-wrap">
                                <img
                                    src={activeMember.image}
                                    alt={activeMember.name}
                                    className="about-team-modal__photo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutPreviewSection