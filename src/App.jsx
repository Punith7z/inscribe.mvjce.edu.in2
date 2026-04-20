import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Register from './pages/Register'
import Team from './pages/Team'
import ScrollToTop from './components/ScrollToTop'
import SmoothScroll from './components/SmoothScroll'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProvider } from './contexts/ThemeContext'
import Background3D from './components/Background3D'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <ThemeProvider>
        <SmoothScroll>
          <Router>
            <div className="w-full relative">
              <Background3D />
              <ScrollToTop />
              <Navbar videoEnded={videoEnded} />
              <Routes>
                <Route path="/" element={<Home setGlobalVideoEnded={setVideoEnded} />} />
                <Route path="/events" element={<Events />} />
                <Route path="/register" element={<Register />} />
                <Route path="/team" element={<Team />} />
              </Routes>
            </div>
          </Router>
        </SmoothScroll>
      </ThemeProvider>
    </NextThemesProvider>
  )
}

export default App

