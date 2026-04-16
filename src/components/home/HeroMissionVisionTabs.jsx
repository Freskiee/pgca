import { useState } from 'react'
import { siteContent } from '../../data/siteContent'

const HeroMissionVisionTabs = () => {
    const { mission, vision } = siteContent.missionVision
    const [activeTab, setActiveTab] = useState('mission')

    const activeContent = activeTab === 'mission' ? mission : vision

    return (
        <div className="hero-mv">
            <div className="hero-mv__tabs">
                <button
                    type="button"
                    className={`hero-mv__tab ${activeTab === 'mission' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('mission')}
                >
                    Misión
                </button>

                <button
                    type="button"
                    className={`hero-mv__tab ${activeTab === 'vision' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('vision')}
                >
                    Visión
                </button>
            </div>

            <div className="hero-mv__panel">
                <p className="hero-mv__text">{activeContent.text}</p>
            </div>
        </div>
    )
}

export default HeroMissionVisionTabs;