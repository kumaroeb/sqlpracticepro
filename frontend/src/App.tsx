import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyCards from './components/CompanyCards'
import FeatureCards from './components/FeatureCards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <CompanyCards />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
