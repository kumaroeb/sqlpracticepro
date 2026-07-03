import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StreamFlixChallengePage from './pages/StreamFlixChallengePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/streamflix" element={<StreamFlixChallengePage />} />
    </Routes>
  )
}

export default App
