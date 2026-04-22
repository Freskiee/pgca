import { useEffect, useRef, useState } from 'react'
import { siteContent } from '../../data/siteContent'

const HeroMissionVisionTabs = ({ onOpenChange }) => {
    const mission =
        siteContent?.hero?.mission ||
        'Proporcionar asesoría legal y contable de excelencia, basada en la integridad, la ética y la profesionalidad. Nos esforzamos por ser socios estratégicos de nuestros clientes, ayudándolos a alcanzar sus objetivos y resolver sus desafíos con soluciones eficientes y efectivas.'

    const vision =
        siteContent?.hero?.vision ||
        'Ser reconocidos como líderes en el campo de la asesoría legal y contable, distinguiéndonos por la innovación, la calidad del servicio y el compromiso con la satisfacción del cliente. Aspiramos a crecer de forma sostenible, ampliando nuestras capacidades y fortaleciendo nuestras relaciones con los clientes y la comunidad.'

    const [activeTab, setActiveTab] = useState(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        onOpenChange?.(Boolean(activeTab))
    }, [activeTab, onOpenChange])

    useEffect(() => {
        const handlePointerDown = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setActiveTab(null)
            }
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setActiveTab(null)
            }
        }

        document.addEventListener('mousedown', handlePointerDown)
        document.addEventListener('touchstart', handlePointerDown, { passive: true })
        window.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handlePointerDown)
            document.removeEventListener('touchstart', handlePointerDown)
            window.removeEventListener('keydown', handleEscape)
        }
    }, [])

    const toggleTab = (tab) => {
        setActiveTab((prev) => (prev === tab ? null : tab))
    }

    return (
        <div ref={wrapperRef} className={`hero-folder-wrap ${activeTab ? 'has-open-card' : ''}`}>
            {/* Desktop */}
            <div className="hero-folder-side">
                <div className="hero-folder-side__dock">
                    <div className={`hero-folder-side__card ${activeTab ? 'is-open' : ''}`}>
                        <div className="hero-folder-side__card-inner">
                            {activeTab === 'mission' && (
                                <>
                                    <span className="hero-folder-side__label">Misión</span>
                                    <p className="hero-folder-side__text">{mission}</p>
                                </>
                            )}

                            {activeTab === 'vision' && (
                                <>
                                    <span className="hero-folder-side__label">Visión</span>
                                    <p className="hero-folder-side__text">{vision}</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="hero-folder-side__tabs" role="tablist" aria-label="Misión y visión">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'mission'}
                            aria-expanded={activeTab === 'mission'}
                            className={`hero-folder-side__tab hero-folder-side__tab--top ${activeTab === 'mission' ? 'is-active' : ''}`}
                            onClick={() => toggleTab('mission')}
                        >
                            <span>Misión</span>
                        </button>

                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'vision'}
                            aria-expanded={activeTab === 'vision'}
                            className={`hero-folder-side__tab hero-folder-side__tab--bottom ${activeTab === 'vision' ? 'is-active' : ''}`}
                            onClick={() => toggleTab('vision')}
                        >
                            <span>Visión</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile / Tablet portrait */}
            <div className="hero-mobile-side" aria-label="Misión y visión">
                <button
                    type="button"
                    className={`hero-mobile-side__tab hero-mobile-side__tab--mission ${activeTab === 'mission' ? 'is-active' : ''
                        }`}
                    onClick={() => toggleTab('mission')}
                    aria-expanded={activeTab === 'mission'}
                >
                    <span>Misión</span>
                </button>

                <article
                    className={`hero-mobile-side__content hero-mobile-side__content--mission ${activeTab === 'mission' ? 'is-open' : ''
                        }`}
                >
                    <h3 className="hero-mobile-side__title hero-mobile-side__title--mission">
                        Nuestra misión
                    </h3>
                    <p className="hero-mobile-side__text hero-mobile-side__text--mission">
                        {mission}
                    </p>
                </article>

                <article
                    className={`hero-mobile-side__content hero-mobile-side__content--vision ${activeTab === 'vision' ? 'is-open' : ''
                        }`}
                >
                    <h3 className="hero-mobile-side__title hero-mobile-side__title--vision">
                        Nuestra visión
                    </h3>
                    <p className="hero-mobile-side__text hero-mobile-side__text--vision">
                        {vision}
                    </p>
                </article>

                <button
                    type="button"
                    className={`hero-mobile-side__tab hero-mobile-side__tab--vision ${activeTab === 'vision' ? 'is-active' : ''
                        }`}
                    onClick={() => toggleTab('vision')}
                    aria-expanded={activeTab === 'vision'}
                >
                    <span>Visión</span>
                </button>
            </div>
        </div>
    )
}

export default HeroMissionVisionTabs;