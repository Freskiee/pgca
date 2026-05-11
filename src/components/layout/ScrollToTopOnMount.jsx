import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopOnMount = () => {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const isHome = location.pathname === '/'
    const hasHash = Boolean(location.hash)
    const hasScrollTarget = Boolean(location.state?.scrollTarget)

    if (isHome && (hasHash || hasScrollTarget)) {
      return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname])

  return null
}

export default ScrollToTopOnMount