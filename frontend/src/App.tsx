import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StreamFlixTicketPage from './pages/StreamFlixTicketPage'
import ComingSoonPage from './pages/ComingSoonPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/streamflix" element={<StreamFlixTicketPage />} />
      <Route path="/streamflix/next" element={<ComingSoonPage />} />
    </Routes>
  )
}

export default App
