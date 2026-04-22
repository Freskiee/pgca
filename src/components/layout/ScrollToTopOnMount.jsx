import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopOnMount = () => {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }

    scrollToTop()

    const timeout = setTimeout(scrollToTop, 0)

    return () => clearTimeout(timeout)
  }, [location.pathname])

  return null
}

export default ScrollToTopOnMount;