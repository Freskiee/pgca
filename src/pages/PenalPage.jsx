import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ScrollToTopOnMount from '../components/layout/ScrollToTopOnMount'
import ServicePageTemplate from '../components/common/ServicePageTemplate'
import { servicePages } from '../data/servicePages'

const PenalPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Navbar />
      <FloatingActions />
      <ServicePageTemplate service={servicePages.penal} />
      <Footer />
    </>
  )
}

export default PenalPage