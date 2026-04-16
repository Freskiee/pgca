import { useEffect, useState } from 'react'

const SplashScreen = () => {
    const [visible, setVisible] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true)
        }, 1200)

        const removeTimer = setTimeout(() => {
            setVisible(false)
        }, 1800)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!visible) return null

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'var(--pgca-primary)',
                display: 'grid',
                placeItems: 'center',
                zIndex: 9999,
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.6s ease',
            }}
        >
            <div
                style={{
                    color: 'var(--pgca-white)',
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                }}
            >
                PGCA
            </div>
        </div>
    )
}

export default SplashScreen;