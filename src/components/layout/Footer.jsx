import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logoPgca from '../../assets/brand/logotipo-light.png'
import LegalModal from '../LegalModal/LegalModal'
import {
  privacyNotice,
  termsConditions,
} from '../../data/legalContent'

const footerNavItems = [
  { label: 'Inicio', target: 'inicio' },
  { label: 'Áreas', target: 'servicios' },
  { label: 'Socios', target: 'nosotros' },
  { label: 'Rankings', target: 'rankings' },
  { label: 'Oficinas', target: 'oficinas' },
  { label: 'Redes', target: 'instagram' },
  { label: 'Contacto', target: 'contacto' },
]

const scrollToSection = (target) => {
  const element = document.getElementById(target)
  if (!element) return

  const navbar = document.querySelector('.pgca-navbar')
  const navbarHeight = navbar ? navbar.offsetHeight : 0
  const sectionTop = element.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: sectionTop - navbarHeight,
    behavior: 'smooth',
  })
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [activeLegal, setActiveLegal] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionNavigation = (target) => {
    if (location.pathname !== '/') {
      navigate('/', {
        state: { scrollTarget: target },
      })
      return
    }

    scrollToSection(target)
    window.history.replaceState({}, '', '/')
  }

  return (
    <footer className="pgca-footer">
      <div className="pgca-container">
        <div className="pgca-footer__top">
          <div className="pgca-footer__brand">
            <button
              type="button"
              className="pgca-footer__brand-link"
              aria-label="Ir al inicio"
              onClick={() => handleSectionNavigation('inicio')}
            >
              <img
                src={logoPgca}
                alt="Peregrina Guerrero Cardoso & Asociados"
                className="pgca-footer__logo"
              />
            </button>

            <p className="pgca-footer__description">
              Atención legal, fiscal y contable con visión estratégica,
              discreción profesional y enfoque cercano.
            </p>
          </div>

          <div className="pgca-footer__column">
            <h4 className="pgca-footer__title">Navegación</h4>

            <nav className="pgca-footer__links pgca-footer__links--grid">
              {footerNavItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => handleSectionNavigation(item.target)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="pgca-footer__column">
            <h4 className="pgca-footer__title">Áreas</h4>

            <nav className="pgca-footer__links pgca-footer__links--grid">
              <Link to="/derecho-fiscal">Fiscal</Link>
              <Link to="/derecho-penal">Penal</Link>
              <Link to="/derecho-corporativo">Corporativo</Link>
              <Link to="/contabilidad">Contable</Link>
            </nav>
          </div>

          <div className="pgca-footer__column pgca-footer__column--contact">
            <h4 className="pgca-footer__title">Contacto</h4>

            <div className="pgca-footer__contact">
              <div className="pgca-footer__contact-row">
                <a href="tel:+525593095640">Ofi. (55) 9309 5640</a>
                <a href="mailto:contacto@pgca.com.mx">contacto@pgca.com.mx</a>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.%20Insurgentes%20Sur%201877%20Piso%208%20Guadalupe%20Inn%20%C3%81lvaro%20Obreg%C3%B3n%2001020%20CDMX"
                target="_blank"
                rel="noreferrer"
                className="pgca-footer__address"
              >
                Av. Insurgentes Sur 1877, Piso 8 · Guadalupe Inn, Álvaro Obregón, CDMX
              </a>
            </div>
          </div>
        </div>

        <div className="pgca-footer__bottom">
          <p>
            © {currentYear} Peregrina Guerrero Cardoso &amp; Asociados. Todos los
            derechos reservados.
          </p>

          <div className="pgca-footer__legal">
            <button type="button" onClick={() => setActiveLegal('terms')}>
              Términos y condiciones
            </button>

            <button type="button" onClick={() => setActiveLegal('privacy')}>
              Aviso de privacidad
            </button>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={Boolean(activeLegal)}
        onClose={() => setActiveLegal(null)}
        content={activeLegal === 'privacy' ? privacyNotice : termsConditions}
      />
    </footer>
  )
}

export default Footer