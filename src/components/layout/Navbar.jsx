import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logotipoDark from '../../assets/brand/logotipo-dark.svg'
import logotipoLight from '../../assets/brand/logotipo-light.png'

const navItems = [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', to: '/#servicios' },
    { label: 'Nosotros', to: '/#nosotros' },
    { label: 'Contacto', to: '/#contacto' },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const isHome = location.pathname === '/'
    const useLightLogo = isHome && !isScrolled

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
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

            const timeout = setTimeout(scrollToSection, 100)

            return () => clearTimeout(timeout)
        }
    }, [location.pathname, location.hash])

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleHomeNavigation = () => {
        closeMenu()

        if (location.pathname !== '/') {
            navigate('/')
            return
        }

        scrollToTop()
    }

    const handleHashNavigation = (target) => {
        const hash = target.replace('/#', '')

        closeMenu()

        if (location.pathname !== '/') {
            navigate(`/#${hash}`)
            return
        }

        const element = document.getElementById(hash)

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <header className={`pgca-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
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

                    <nav className="pgca-navbar__desktop">
                        {navItems.map((item) =>
                            item.label === 'Inicio' ? (
                                <button
                                    key={item.label}
                                    type="button"
                                    className="pgca-navbar__nav-button"
                                    onClick={handleHomeNavigation}
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <button
                                    key={item.label}
                                    type="button"
                                    className="pgca-navbar__nav-button"
                                    onClick={() => handleHashNavigation(item.to)}
                                >
                                    {item.label}
                                </button>
                            )
                        )}
                    </nav>

                    <button
                        type="button"
                        className={`pgca-navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Abrir menú"
                        aria-expanded={isMenuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div className={`pgca-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
                <div className="pgca-mobile-menu__panel">
                    {navItems.map((item) =>
                        item.label === 'Inicio' ? (
                            <button
                                key={item.label}
                                type="button"
                                className="pgca-mobile-menu__link"
                                onClick={handleHomeNavigation}
                            >
                                {item.label}
                            </button>
                        ) : (
                            <button
                                key={item.label}
                                type="button"
                                className="pgca-mobile-menu__link"
                                onClick={() => handleHashNavigation(item.to)}
                            >
                                {item.label}
                            </button>
                        )
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar