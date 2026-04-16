import Navbar from '../components/layout/Navbar'
import SplashScreen from '../components/layout/SplashScreen'
import Footer from '../components/layout/Footer'
import FloatingActions from '../components/layout/FloatingActions'
import HeroSection from '../components/home/HeroSection'
import RankingsSection from '../components/home/RankingsSection'
import AboutPreviewSection from '../components/home/AboutPreviewSection'
import PracticeAreasSection from '../components/home/PracticeAreasSection'
import PartnersSection from '../components/home/PartnersSection'
import OfficesSection from '../components/home/OfficesSection'
import ContactSection from '../components/home/ContactSection'

const HomePage = () => {
    return (
        <>
            <SplashScreen />
            <Navbar />
            <FloatingActions />

            <main>
                <HeroSection />
                <RankingsSection />
                <AboutPreviewSection />
                <PracticeAreasSection />
                <PartnersSection />
                <OfficesSection />
                <ContactSection />
            </main>

            <Footer />
        </>
    )
}

export default HomePage;