import { useEffect, useMemo, useRef, useState } from 'react'
import { siteContent } from '../../data/siteContent'

const TITLE_TYPING_SPEED = 34
const TEXT_TYPING_SPEED = 13
const TITLE_DELAY_AFTER_OPEN = 80
const TEXT_DELAY_AFTER_TITLE = 180
const PUNCTUATION_PAUSE = 90

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms))

const getCharDelay = (char, baseSpeed) => {
    if (char === '.' || char === ',' || char === ';' || char === ':') {
        return baseSpeed + PUNCTUATION_PAUSE
    }

    if (char === ' ') {
        return Math.max(8, Math.floor(baseSpeed * 0.35))
    }

    return baseSpeed
}

const HeroMissionVisionTabs = ({ onOpenChange }) => {
    const mission = useMemo(
        () =>
            siteContent?.hero?.mission ||
            'Proporcionar asesoría legal y contable de excelencia, basada en la integridad, la ética y la profesionalidad. Nos esforzamos por ser socios estratégicos de nuestros clientes, ayudándolos a alcanzar sus objetivos y resolver sus desafíos con soluciones eficientes y efectivas.',
        []
    )

    const vision = useMemo(
        () =>
            siteContent?.hero?.vision ||
            'Ser reconocidos como líderes en el campo de la asesoría legal y contable, distinguiéndonos por la innovación, la calidad del servicio y el compromiso con la satisfacción del cliente. Aspiramos a crecer de forma sostenible, ampliando nuestras capacidades y fortaleciendo nuestras relaciones con los clientes y la comunidad.',
        []
    )

    const missionTitleFull = 'Nuestra misión'
    const visionTitleFull = 'Nuestra visión'

    const [activeTab, setActiveTab] = useState(null)

    const [typedMissionTitle, setTypedMissionTitle] = useState('')
    const [typedMissionText, setTypedMissionText] = useState('')
    const [typedVisionTitle, setTypedVisionTitle] = useState('')
    const [typedVisionText, setTypedVisionText] = useState('')

    const [hasTypedMission, setHasTypedMission] = useState(false)
    const [hasTypedVision, setHasTypedVision] = useState(false)

    const wrapperRef = useRef(null)
    const animationRunId = useRef(0)

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

    useEffect(() => {
        const runId = ++animationRunId.current
        let isCancelled = false

        const typeString = async (fullText, setter, speed, startDelay = 0) => {
            await wait(startDelay)

            if (isCancelled || runId !== animationRunId.current) return

            let buffer = ''

            for (let i = 0; i < fullText.length; i += 1) {
                if (isCancelled || runId !== animationRunId.current) return

                const char = fullText[i]
                buffer += char
                setter(buffer)

                await wait(getCharDelay(char, speed))
            }
        }

        const run = async () => {
            if (!activeTab) return

            if (activeTab === 'mission') {
                if (hasTypedMission) {
                    setTypedMissionTitle(missionTitleFull)
                    setTypedMissionText(mission)
                    return
                }

                setTypedMissionTitle('')
                setTypedMissionText('')

                await typeString(
                    missionTitleFull,
                    setTypedMissionTitle,
                    TITLE_TYPING_SPEED,
                    TITLE_DELAY_AFTER_OPEN
                )

                if (isCancelled || runId !== animationRunId.current) return

                await wait(TEXT_DELAY_AFTER_TITLE)

                if (isCancelled || runId !== animationRunId.current) return

                await typeString(mission, setTypedMissionText, TEXT_TYPING_SPEED, 0)

                if (!isCancelled && runId === animationRunId.current) {
                    setHasTypedMission(true)
                }
            }

            if (activeTab === 'vision') {
                if (hasTypedVision) {
                    setTypedVisionTitle(visionTitleFull)
                    setTypedVisionText(vision)
                    return
                }

                setTypedVisionTitle('')
                setTypedVisionText('')

                await typeString(
                    visionTitleFull,
                    setTypedVisionTitle,
                    TITLE_TYPING_SPEED,
                    TITLE_DELAY_AFTER_OPEN
                )

                if (isCancelled || runId !== animationRunId.current) return

                await wait(TEXT_DELAY_AFTER_TITLE)

                if (isCancelled || runId !== animationRunId.current) return

                await typeString(vision, setTypedVisionText, TEXT_TYPING_SPEED, 0)

                if (!isCancelled && runId === animationRunId.current) {
                    setHasTypedVision(true)
                }
            }
        }

        run()

        return () => {
            isCancelled = true
        }
    }, [
        activeTab,
        hasTypedMission,
        hasTypedVision,
        mission,
        missionTitleFull,
        vision,
        visionTitleFull,
    ])

    const toggleTab = (tab) => {
        setActiveTab((prev) => (prev === tab ? null : tab))
    }

    const isMissionTypingTitle =
        activeTab === 'mission' &&
        !hasTypedMission &&
        typedMissionTitle.length < missionTitleFull.length

    const isMissionTypingText =
        activeTab === 'mission' &&
        !hasTypedMission &&
        typedMissionTitle.length === missionTitleFull.length &&
        typedMissionText.length < mission.length

    const isVisionTypingTitle =
        activeTab === 'vision' &&
        !hasTypedVision &&
        typedVisionTitle.length < visionTitleFull.length

    const isVisionTypingText =
        activeTab === 'vision' &&
        !hasTypedVision &&
        typedVisionTitle.length === visionTitleFull.length &&
        typedVisionText.length < vision.length

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
                            className={`hero-folder-side__tab hero-folder-side__tab--top ${activeTab === 'mission' ? 'is-active' : ''
                                }`}
                            onClick={() => toggleTab('mission')}
                        >
                            <span>Misión</span>
                        </button>

                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'vision'}
                            aria-expanded={activeTab === 'vision'}
                            className={`hero-folder-side__tab hero-folder-side__tab--bottom ${activeTab === 'vision' ? 'is-active' : ''
                                }`}
                            onClick={() => toggleTab('vision')}
                        >
                            <span>Visión</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile / Tablet portrait */}
            <div className="hero-mobile-side">
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
                        {typedMissionTitle}
                        {isMissionTypingTitle && <span className="hero-mobile-side__caret" />}
                    </h3>

                    <p className="hero-mobile-side__text hero-mobile-side__text--mission">
                        {typedMissionText}
                        {isMissionTypingText && <span className="hero-mobile-side__caret" />}
                    </p>
                </article>

                <article
                    className={`hero-mobile-side__content hero-mobile-side__content--vision ${activeTab === 'vision' ? 'is-open' : ''
                        }`}
                >
                    <h3 className="hero-mobile-side__title hero-mobile-side__title--vision">
                        {typedVisionTitle}
                        {isVisionTypingTitle && <span className="hero-mobile-side__caret" />}
                    </h3>

                    <p className="hero-mobile-side__text hero-mobile-side__text--vision">
                        {typedVisionText}
                        {isVisionTypingText && <span className="hero-mobile-side__caret" />}
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