import Navbar from '../components/layout/Navbar'
import SplashScreen from '../components/layout/SplashScreen'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import ScrollToTopOnMount from '../components/layout/ScrollToTopOnMount'
import HeroSection from '../components/home/HeroSection'
import PracticeAreasSection from '../components/home/PracticeAreasSection'
import AboutPreviewSection from '../components/home/AboutPreviewSection'
import RankingsSection from '../components/home/RankingsSection'
import PartnersSection from '../components/home/PartnersSection'
import InstagramSection from '../components/home/InstagramSection'
import OfficesSection from '../components/home/OfficesSection'
import ContactSection from '../components/home/ContactSection'

const HomePage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <SplashScreen />
      <Navbar />
      <FloatingActions />

      <main>
        <HeroSection />
        <PracticeAreasSection />
        <AboutPreviewSection />
        <RankingsSection />
        <PartnersSection />
        <InstagramSection />
        <OfficesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default HomePage