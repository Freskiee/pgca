import { useState } from 'react'
import { siteContent } from '../../data/siteContent'

const MissionVisionSection = () => {
    const { title, mission, vision } = siteContent.missionVision
    const [activeTab, setActiveTab] = useState('mission')

    const activeContent = activeTab === 'mission' ? mission : vision

    return (
        <section className="pgca-section mission-vision-section">
            <div className="pgca-container">
                <div className="mission-vision-section__header">
                    <p className="mission-vision-section__eyebrow">Misión y visión</p>
                    <h2 className="mission-vision-section__title">{title}</h2>
                </div>

                <div className="mission-vision-tabs">
                    <button
                        type="button"
                        className={`mission-vision-tabs__button ${activeTab === 'mission' ? 'is-active' : ''
                            }`}
                        onClick={() => setActiveTab('mission')}
                    >
                        Misión
                    </button>

                    <button
                        type="button"
                        className={`mission-vision-tabs__button ${activeTab === 'vision' ? 'is-active' : ''
                            }`}
                        onClick={() => setActiveTab('vision')}
                    >
                        Visión
                    </button>
                </div>

                <div className="mission-vision-panel">
                    <h3 className="mission-vision-panel__title">{activeContent.title}</h3>
                    <p className="mission-vision-panel__text">{activeContent.text}</p>
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSection;