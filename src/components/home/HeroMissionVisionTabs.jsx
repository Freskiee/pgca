import { useEffect, useRef, useState } from 'react'
import { siteContent } from '../../data/siteContent'

const HeroMissionVisionTabs = () => {
    const { mission, vision } = siteContent.missionVision
    const [activeTab, setActiveTab] = useState(null)
    const folderRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (folderRef.current && !folderRef.current.contains(event.target)) {
                setActiveTab(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleToggle = (tabName) => {
        setActiveTab((prev) => (prev === tabName ? null : tabName))
    }

    const activeContent =
        activeTab === 'mission' ? mission : activeTab === 'vision' ? vision : null

    return (
        <div className="hero-mv" ref={folderRef}>
            <div className="hero-mv__tabs" role="tablist" aria-label="Misión y visión">
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'mission'}
                    className={`hero-mv__tab ${activeTab === 'mission' ? 'is-active' : ''}`}
                    onClick={() => handleToggle('mission')}
                >
                    Misión
                </button>

                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'vision'}
                    className={`hero-mv__tab ${activeTab === 'vision' ? 'is-active' : ''}`}
                    onClick={() => handleToggle('vision')}
                >
                    Visión
                </button>
            </div>

            <div className={`hero-mv__panel ${activeContent ? 'is-open' : ''}`} role="tabpanel">
                <div className="hero-mv__panel-inner">
                    {activeContent && <p className="hero-mv__text">{activeContent.text}</p>}
                </div>
            </div>
        </div>
    )
}

export default HeroMissionVisionTabs