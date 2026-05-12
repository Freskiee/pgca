import Navbar from '../components/layout/Navbar'
import SplashScreen from '../components/layout/SplashScreen'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ScrollToTopOnMount from '../components/layout/ScrollToTopOnMount'

import SEO from '../components/seo/SEO'
import SchemaMarkup from '../components/seo/SchemaMarkup'

import HeroSection from '../components/home/HeroSection'
import PracticeAreasSection from '../components/home/PracticeAreasSection'
import AboutPreviewSection from '../components/home/AboutPreviewSection'
import RankingsSection from '../components/home/RankingsSection'
import InstagramSection from '../components/home/InstagramSection'
import OfficesSection from '../components/home/OfficesSection'
import ContactSection from '../components/home/ContactSection'

const HomePage = () => {
  return (
    <>
      <SEO
        title="Despacho Legal y Contable en CDMX"
        description="Peregrina Guerrero Cardoso & Asociados ofrece asesoría legal, fiscal, administrativa, corporativa y contable con enfoque estratégico y atención profesional en Ciudad de México."
        url="https://pgca.com.mx/"
      />
      
      <SchemaMarkup />

      <ScrollToTopOnMount />

      <SplashScreen />

      <Navbar />

      <FloatingActions />

      <main>
        <HeroSection />
        <PracticeAreasSection />
        <AboutPreviewSection />
        <RankingsSection />
        <OfficesSection />
        <InstagramSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default HomePage