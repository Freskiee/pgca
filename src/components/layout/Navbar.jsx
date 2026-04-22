import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logotipoDark from '../../assets/brand/logotipo-dark.svg'
import logotipoLight from '../../assets/brand/logotipo-light.png'

const navItems = [
  { label: 'Inicio', target: 'inicio' },
  { label: 'Áreas', target: 'servicios' },
  { label: 'Nosotros', target: 'nosotros' },
  { label: 'Rankings', target: 'rankings' },
  { label: 'Equipo', target: 'equipo' },
  { label: 'Oficinas', target: 'oficinas' },
  { label: 'Contacto', target: 'contacto' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'
  const useLightLogo = isHome && !isScrolled && !isMenuOpen

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
    if (location.pathname === '/' && location.hash) {
      const hash = location.hash.replace('#', '')

      const scrollToSection = () => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }

      const timeout = window.setTimeout(scrollToSection, 120)
      return () => window.clearTimeout(timeout)
    }
  }, [location.pathname, location.hash])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleHomeNavigation = () => {
    closeMenu()

    if (location.pathname !== '/') {
      navigate('/')
      return
    }

    const element = document.getElementById('inicio')

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleSectionNavigation = (target) => {
    closeMenu()

    if (location.pathname !== '/') {
      navigate(`/#${target}`)
      return
    }

    const element = document.getElementById(target)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
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
                if (location.pathname === '/') {
                  event.preventDefault()
                  handleHomeNavigation()
                } else {
                  closeMenu()
                }
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
                  onClick={() =>
                    item.target === 'inicio'
                      ? handleHomeNavigation()
                      : handleSectionNavigation(item.target)
                  }
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
              onClick={() =>
                item.target === 'inicio'
                  ? handleHomeNavigation()
                  : handleSectionNavigation(item.target)
              }
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