import { siteContent } from '../../data/siteContent'

const Navbar = () => {
    return (
        <header className="pgca-navbar">
            <div className="pgca-container">
                <div className="pgca-navbar__inner">
                    <a href="#inicio" className="pgca-navbar__brand">
                        <div className="pgca-navbar__brand-mark">PG</div>
                        <div className="pgca-navbar__brand-text">PGCA</div>
                    </a>

                    <nav className="pgca-navbar__nav">
                        {siteContent.nav.map((item) => (
                            <a key={item.label} href={item.href} className="pgca-navbar__link">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;