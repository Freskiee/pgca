import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logotipoDark from '../../assets/brand/logotipo-dark.svg'
import logotipoLight from '../../assets/brand/logotipo-light.png'

const navItems = [
  { label: 'Inicio', target: 'inicio' },
  { label: 'Áreas', target: 'servicios' },
  { label: 'Socios', target: 'nosotros' },
  { label: 'Rankings', target: 'rankings' },
  { label: 'Oficinas', target: 'oficinas' },
  { label: 'Redes', target: 'instagram' },
  { label: 'Contacto', target: 'contacto' },
]

const getNavbarOffset = () => {
  const navbar = document.querySelector('.pgca-navbar')
  return navbar ? navbar.offsetHeight : 0
}

const cleanUrlHash = () => {
  if (window.location.pathname === '/') {
    window.history.replaceState({}, '', '/')
  }
}

const scrollToSection = (target, behavior = 'smooth') => {
  const element = document.getElementById(target)
  if (!element) return

  const navbarOffset = getNavbarOffset()
  const sectionTop = element.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: Math.max(sectionTop - navbarOffset, 0),
    behavior,
  })
}

const scrollToSectionAccurate = (target) => {
  window.requestAnimationFrame(() => {
    scrollToSection(target, 'smooth')
  })

  window.setTimeout(() => {
    scrollToSection(target, 'auto')
    cleanUrlHash()
  }, 520)
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const useLightLogo = !isScrolled && !isMenuOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (isMenuOpen) {
      body.classList.add('pgca-menu-open')
      html.classList.add('pgca-menu-open')
    } else {
      body.classList.remove('pgca-menu-open')
      html.classList.remove('pgca-menu-open')
    }

    return () => {
      body.classList.remove('pgca-menu-open')
      html.classList.remove('pgca-menu-open')
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return

    const hashTarget = location.hash ? location.hash.replace('#', '') : null
    const stateTarget = location.state?.scrollTarget || null
    const target = stateTarget || hashTarget

    if (!target) {
      cleanUrlHash()
      return
    }

    const timeout = window.setTimeout(() => {
      scrollToSectionAccurate(target)
    }, 260)

    return () => window.clearTimeout(timeout)
  }, [location.pathname, location.hash, location.state])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSectionNavigation = (target) => {
    closeMenu()

    if (location.pathname !== '/') {
      navigate('/', {
        state: { scrollTarget: target },
        replace: false,
      })

      return
    }

    scrollToSectionAccurate(target)
  }

  return (
    <>
      <header className={`pgca-navbar ${isScrolled || isMenuOpen ? 'is-scrolled' : ''}`}>
        <div className="pgca-container">
          <div className="pgca-navbar__inner">
            <Link
              to="/"
              className="pgca-navbar__brand"
              aria-label="Ir al inicio"
              onClick={(event) => {
                event.preventDefault()
                handleSectionNavigation('inicio')
              }}
            >
              <img
                src={useLightLogo ? logotipoLight : logotipoDark}
                alt="PGCA"
                className="pgca-navbar__logo"
              />
            </Link>

            <nav className="pgca-navbar__desktop" aria-label="Navegación principal">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="pgca-navbar__nav-button"
                  onClick={() => handleSectionNavigation(item.target)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              className={`pgca-navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
              aria-controls="pgca-mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="pgca-mobile-menu"
        className={`pgca-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="pgca-mobile-menu__nav" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="pgca-mobile-menu__link"
              onClick={() => handleSectionNavigation(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Navbar