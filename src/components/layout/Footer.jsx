import { Link } from 'react-router-dom'
import logoPgca from '../../assets/brand/logotipo-light.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pgca-footer">
      <div className="pgca-container">
        <div className="pgca-footer__top">
          <div className="pgca-footer__brand">
            <a href="#inicio" className="pgca-footer__brand-link" aria-label="Ir al inicio">
              <img
                src={logoPgca}
                alt="Peregrina Guerrero Cardoso & Asociados"
                className="pgca-footer__logo"
              />
            </a>

            <p className="pgca-footer__description">
              Peregrina Guerrero Cardoso &amp; Asociados brinda atención legal y
              contable con enfoque estratégico, profesional y cercano.
            </p>
          </div>

          <div className="pgca-footer__column">
            <h4 className="pgca-footer__title">Navegación</h4>
            <nav className="pgca-footer__links">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Áreas</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="pgca-footer__column">
            <h4 className="pgca-footer__title">Áreas</h4>
            <nav className="pgca-footer__links">
              <Link to="/derecho-fiscal">Fiscal</Link>
              <Link to="/derecho-penal">Penal</Link>
              <Link to="/derecho-corporativo">Corporativo</Link>
              <Link to="/contabilidad">Contable</Link>
            </nav>
          </div>

          <div className="pgca-footer__column">
            <h4 className="pgca-footer__title">Contacto</h4>
            <div className="pgca-footer__contact">
              <a href="tel:+525500000000">+52 55 0000 0000</a>
              <a href="mailto:contacto@pgca.com.mx">contacto@pgca.com.mx</a>
              <a
                href="https://maps.google.com/?q=Angel+de+la+Independencia+CDMX"
                target="_blank"
                rel="noreferrer"
              >
                Av. Paseo de la Reforma 250, Juárez, Cuauhtémoc, CDMX
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
            <a href="/terminos-y-condiciones">Términos y condiciones</a>
            <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer