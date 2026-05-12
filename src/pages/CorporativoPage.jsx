import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ServicePageTemplate from '../components/common/ServicePageTemplate'
import { servicePages } from '../data/servicePages'
import SEO from '../components/seo/SEO'

const CorporativoPage = () => {
    return (
        <>
            <SEO
                title="Derecho Corporativo en CDMX"
                description="Acompañamiento jurídico corporativo para empresas, cumplimiento, estructura legal, prevención de riesgos y decisiones estratégicas."
                url="https://pgca.com.mx/derecho-corporativo"
            />
            <Navbar />
            <FloatingActions />
            <ServicePageTemplate service={servicePages.corporativo} />
            <Footer />
        </>
    )
}

export default CorporativoPage;