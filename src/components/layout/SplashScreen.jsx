import { useEffect, useState } from 'react'
import isotipoLight from '../../assets/brand/isotipo-light.png'

const SplashScreen = () => {
  const [isLeaving, setIsLeaving] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true)
    }, 1100)

    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, 2100)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(removeTimer)
    }
  }, [])

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