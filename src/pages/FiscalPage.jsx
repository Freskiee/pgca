import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ServicePageTemplate from '../components/common/ServicePageTemplate'
import { servicePages } from '../data/servicePages'
import SEO from '../components/seo/SEO'

const FiscalPage = () => {
    return (
        <>
            <SEO
                title="Derecho Fiscal y Administrativo en CDMX"
                description="Servicios de asesoría fiscal y administrativa, litigio estratégico, compliance y representación ante autoridades fiscales y administrativas."
                url="https://pgca.com.mx/derecho-fiscal"
            />
            <Navbar />
            <FloatingActions />
            <ServicePageTemplate service={servicePages.fiscal} />
            <Footer />
        </>
    )
}

export default FiscalPage;