import { useCallback, useEffect, useRef, useState } from 'react'
import isotipoLight from '../../assets/brand/isotipo-light.png'

const INACTIVITY_TIME = 2 * 60 * 1000

const SplashScreen = () => {
  const [isLeaving, setIsLeaving] = useState(false)
  const [visible, setVisible] = useState(true)

  const leaveTimerRef = useRef(null)
  const removeTimerRef = useRef(null)
  const hiddenAtRef = useRef(null)

  const clearSplashTimers = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }

    if (removeTimerRef.current) {
      clearTimeout(removeTimerRef.current)
      removeTimerRef.current = null
    }
  }, [])

  const playSplash = useCallback(() => {
    clearSplashTimers()

    window.setTimeout(() => {
      setVisible(true)
      setIsLeaving(false)

      leaveTimerRef.current = window.setTimeout(() => {
        setIsLeaving(true)
      }, 1450)

      removeTimerRef.current = window.setTimeout(() => {
        setVisible(false)
      }, 2800)
    }, 0)
  }, [clearSplashTimers])

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      playSplash()
    }, 0)

    return () => {
      window.clearTimeout(startTimer)
      clearSplashTimers()
    }
  }, [playSplash, clearSplashTimers])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        hiddenAtRef.current = Date.now()
        return
      }

      const hiddenAt = hiddenAtRef.current
      const inactiveTime = hiddenAt ? Date.now() - hiddenAt : 0

      if (inactiveTime >= INACTIVITY_TIME) {
        playSplash()
      }

      hiddenAtRef.current = null
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [playSplash])

  if (!visible) return null

  return (
    <div className={`pgca-splash ${isLeaving ? 'is-leaving' : ''}`}>
      <div className="pgca-splash__logo" aria-label="PGCA">
        <div className="pgca-splash__half pgca-splash__half--left">
          <img
            src={isotipoLight}
            alt="PGCA"
            className="pgca-splash__image pgca-splash__image--left"
          />
        </div>

        <div className="pgca-splash__half pgca-splash__half--right">
          <img
            src={isotipoLight}
            alt=""
            aria-hidden="true"
            className="pgca-splash__image pgca-splash__image--right"
          />
        </div>
      </div>
    </div>
  )
}

export default SplashScreen