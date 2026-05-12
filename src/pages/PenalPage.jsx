import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ServicePageTemplate from '../components/common/ServicePageTemplate'
import { servicePages } from '../data/servicePages'

import SEO from '../components/seo/SEO'

const PenalPage = () => {
  return (
    <>
      <SEO
        title="Derecho Penal en CDMX"
        description="Peregrina Guerrero Cardoso & Asociados ofrece asesoría legal en materia de derecho penal con enfoque estratégico y atención profesional en Ciudad de México."
        url="https://pgca.com.mx/derecho-penal"
      />
      <Navbar />
      <FloatingActions />
      <ServicePageTemplate service={servicePages.penal} />
      <Footer />
    </>
  )
}

export default PenalPage