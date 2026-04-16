import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ServicePageTemplate from '../components/common/ServicePageTemplate'
import { servicePages } from '../data/servicePages'

const ContabilidadPage = () => {
    return (
        <>
            <Navbar />
            <FloatingActions />
            <ServicePageTemplate service={servicePages.contabilidad} />
            <Footer />
        </>
    )
}

export default ContabilidadPage;