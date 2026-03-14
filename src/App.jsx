import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Register from './pages/Register'
import Team from './pages/Team'
import ScrollToTop from './components/ScrollToTop'
import SmoothScroll from './components/SmoothScroll'
import { ThemeProvider } from './contexts/ThemeContext'
import Background3D from './components/Background3D'

import './App.css'

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Router>
          <div className="w-full overflow-x-hidden relative">
            <Background3D />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/register" element={<Register />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
        </Router>
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App

