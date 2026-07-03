import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CompanyCards from '../components/CompanyCards'
import HowItWorks from '../components/HowItWorks'
import FeatureCards from '../components/FeatureCards'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <CompanyCards />
        <HowItWorks />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
