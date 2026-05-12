import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ServicePageTemplate from '../components/common/ServicePageTemplate'
import { servicePages } from '../data/servicePages'
import SEO from '../components/seo/SEO'

const ContabilidadPage = () => {
    return (
        <>
            <SEO
                title="Servicios Contables en CDMX"
                description="Servicios contables, fiscales y administrativos para empresas y personas físicas con enfoque profesional, estratégico y confiable."
                url="https://pgca.com.mx/contabilidad"
            />
            <Navbar />
            <FloatingActions />
            <ServicePageTemplate service={servicePages.contabilidad} />
            <Footer />
        </>
    )
}

export default ContabilidadPage;