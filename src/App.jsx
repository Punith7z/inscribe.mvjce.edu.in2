import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Register from './pages/Register'
import Team from './pages/Team'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

