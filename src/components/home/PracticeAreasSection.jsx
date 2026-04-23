import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel } from 'react-icons/fa6'
import { RiFileSearchLine, RiCalculatorLine } from 'react-icons/ri'
import { HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { siteContent } from '../../data/siteContent'

const iconMap = {
    'Derecho Penal': FaGavel,
    'Derecho Fiscal': RiFileSearchLine,
    'Derecho Corporativo': HiOutlineBuildingLibrary,
    Contabilidad: RiCalculatorLine,
}

const PracticeAreasSection = () => {
    const { title, items } = siteContent.practiceAreas

    const [hoverState, setHoverState] = useState({
        activeIndex: null,
        leftInfluence: 0,
        rightInfluence: 0,
    })

    const handleMouseEnter = (index) => {
        setHoverState({
            activeIndex: index,
            leftInfluence: 0,
            rightInfluence: 0,
        })
    }

    const handleMouseMove = (event, index) => {
        const { left, width } = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - left
        const ratio = Math.max(0, Math.min(1, x / width))

        setHoverState({
            activeIndex: index,
            leftInfluence: 1 - ratio,
            rightInfluence: ratio,
        })
    }

    const handleMouseLeave = () => {
        setHoverState({
            activeIndex: null,
            leftInfluence: 0,
            rightInfluence: 0,
        })
    }

    const cardStyles = useMemo(() => {
        return items.map((_, index) => {
            const { activeIndex, leftInfluence, rightInfluence } = hoverState

            if (window.innerWidth <= 768) {
                return {
                    transform: 'translateY(0) scale(1)',
                    opacity: 1,
                    filter: 'brightness(1)',
                }
            }

            if (activeIndex === null) {
                return {
                    transform: 'translateY(0) scale(1)',
                    opacity: 1,
                    filter: 'brightness(1)',
                }
            }

            if (index === activeIndex) {
                return {
                    transform: 'translateY(-18px) scale(1.035)',
                    opacity: 1,
                    filter: 'brightness(1.03)',
                }
            }

            if (index === activeIndex - 1) {
                const lift = 9 * leftInfluence
                const scale = 1 + 0.016 * leftInfluence

                return {
                    transform: `translateY(-${lift.toFixed(2)}px) scale(${scale.toFixed(3)})`,
                    opacity: 0.985,
                    filter: 'brightness(1.01)',
                }
            }

            if (index === activeIndex + 1) {
                const lift = 9 * rightInfluence
                const scale = 1 + 0.016 * rightInfluence

                return {
                    transform: `translateY(-${lift.toFixed(2)}px) scale(${scale.toFixed(3)})`,
                    opacity: 0.985,
                    filter: 'brightness(1.01)',
                }
            }

            return {
                transform: 'translateY(0) scale(1)',
                opacity: 0.97,
                filter: 'brightness(0.98)',
            }
        })
    }, [hoverState, items])

    return (
        <section
            id="servicios"
            className="pgca-section practice-areas-section practice-areas-section--refined"
        >
            <div className="practice-areas-section__banner">
                <div className="practice-areas-section__banner-overlay" />
                <div className="pgca-container practice-areas-section__banner-content">
                    <div className="practice-areas-section__banner-copy">
                        <span className="practice-areas-section__eyebrow">Áreas principales</span>
                        <h2 className="practice-areas-section__hero-title">{title}</h2>
                        <p className="practice-areas-section__hero-text">
                            Soluciones legales y contables estructuradas con una visión estratégica,
                            rigurosa y cercana a cada necesidad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pgca-container">
                <div
                    className="practice-areas-section__dock"
                    onMouseLeave={handleMouseLeave}
                >
                    {items.map((item, index) => {
                        const Icon = iconMap[item.title]

                        return (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="practice-areas-card"
                                style={cardStyles[index]}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseMove={(event) => handleMouseMove(event, index)}
                            >
                                <div className="practice-areas-card__inner">
                                    <div className="practice-areas-card__topline" />

                                    <div className="practice-areas-card__content">
                                        <h3 className="practice-areas-card__title">{item.title}</h3>

                                        <p className="practice-areas-card__description">
                                            {item.title === 'Derecho Fiscal' &&
                                                'Acompañamiento estratégico en cumplimiento, defensa y planeación fiscal.'}
                                            {item.title === 'Derecho Penal' &&
                                                'Atención profesional en asuntos penales con enfoque técnico y preciso.'}
                                            {item.title === 'Derecho Corporativo' &&
                                                'Estructura jurídica para empresas, operaciones y decisiones clave.'}
                                            {item.title === 'Contabilidad' &&
                                                'Control, orden y análisis contable para respaldar cada operación.'}
                                        </p>
                                    </div>

                                    <div className="practice-areas-card__bottom">
                                        <div className="practice-areas-card__icon-wrapper">
                                            {Icon ? <Icon className="practice-areas-card__icon" /> : null}
                                        </div>

                                        <span className="practice-areas-card__cta">
                                            Explorar área
                                            <i className="bi bi-arrow-right" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PracticeAreasSection;