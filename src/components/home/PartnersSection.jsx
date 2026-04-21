import { useEffect, useMemo, useRef, useState } from 'react'
import { partners } from '../../data/partners'

const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1100) return 2
    return 3
}

const AUTO_PLAY_DELAY = 4200

const PartnersSection = () => {
    const [visibleCards, setVisibleCards] = useState(getVisibleCards)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const extendedPartners = useMemo(() => {
        const clones = partners.slice(0, visibleCards)
        return [...partners, ...clones]
    }, [visibleCards])

    const handleNext = () => {
        setIsTransitionEnabled(true)
        setCurrentIndex((prev) => prev + 1)
    }

    const handlePrev = () => {
        if (currentIndex === 0) {
            setIsTransitionEnabled(false)
            setCurrentIndex(partners.length)

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitionEnabled(true)
                    setCurrentIndex(partners.length - 1)
                })
            })
            return
        }

        setIsTransitionEnabled(true)
        setCurrentIndex((prev) => prev - 1)
    }

    const handleTransitionEnd = () => {
        if (currentIndex >= partners.length) {
            setIsTransitionEnabled(false)
            setCurrentIndex(0)
        }
    }

    const handleTouchStart = (event) => {
        touchStartX.current = event.changedTouches[0].clientX
    }

    const handleTouchEnd = (event) => {
        touchEndX.current = event.changedTouches[0].clientX
        const distance = touchStartX.current - touchEndX.current

        if (Math.abs(distance) < 40) return

        if (distance > 0) {
            handleNext()
        } else {
            handlePrev()
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards())
            setCurrentIndex(0)
            setIsTransitionEnabled(false)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            handleNext()
        }, AUTO_PLAY_DELAY)

        return () => clearInterval(interval)
    }, [isPaused])

    const cardWidth = 100 / extendedPartners.length
    const trackWidth = (extendedPartners.length * 100) / visibleCards
    const translateX = currentIndex * (100 / extendedPartners.length)
    const activeDot = currentIndex % partners.length

    return (
        <section
            className="partners-section"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="partners-section__background" />
            <div className="partners-section__overlay" />

            <div className="pgca-container partners-section__content">
                <div className="partners-section__header">
                    <p className="partners-section__eyebrow">Nuestro equipo</p>
                    <h2 className="partners-section__title">Socios y abogados</h2>
                    <p className="partners-section__description">
                        Un equipo con experiencia, criterio y enfoque estratégico para
                        acompañar cada asunto con profesionalismo.
                    </p>
                </div>

                <div className="partners-section__carousel-shell">
                    <button
                        type="button"
                        className="partners-section__nav partners-section__nav--prev"
                        onClick={handlePrev}
                        aria-label="Ver integrantes anteriores"
                    >
                        ‹
                    </button>

                    <div
                        className="partners-section__viewport"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="partners-section__track"
                            style={{
                                width: `${trackWidth}%`,
                                transform: `translateX(-${translateX}%)`,
                                transition: isTransitionEnabled ? 'transform 0.6s ease' : 'none',
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedPartners.map((partner, index) => (
                                <article
                                    key={`${partner.id}-${index}`}
                                    className="partner-card"
                                    style={{ width: `${cardWidth}%` }}
                                >
                                    <div className="partner-card__image-wrapper">
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            className="partner-card__image"
                                        />
                                    </div>

                                    <div className="partner-card__content">
                                        <h3 className="partner-card__name">{partner.name}</h3>
                                        <p className="partner-card__role">{partner.role}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="partners-section__nav partners-section__nav--next"
                        onClick={handleNext}
                        aria-label="Ver siguientes integrantes"
                    >
                        ›
                    </button>
                </div>

                <div className="partners-section__dots">
                    {partners.map((partner, index) => (
                        <button
                            key={partner.id ?? index}
                            type="button"
                            className={`partners-section__dot ${activeDot === index ? 'is-active' : ''}`}
                            onClick={() => {
                                setIsTransitionEnabled(true)
                                setCurrentIndex(index)
                            }}
                            aria-label={`Ir al integrante ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection;