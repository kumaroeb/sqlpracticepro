import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StreamFlixTicketPage from './pages/StreamFlixTicketPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/streamflix" element={<StreamFlixTicketPage />} />
    </Routes>
  )
}

export default App