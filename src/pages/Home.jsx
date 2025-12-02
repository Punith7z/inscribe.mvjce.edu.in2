import { useState } from 'react'
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatWeDo from '../components/WhatWeDo'
import WhoWeAre from '../components/WhoWeAre'
import Domains from '../components/Domains'
import Leadership from '../components/Leadership'
import TalentSpotlight from '../components/TalentSpotlight'
import TalentTree from '../components/TalentTree'
import EventsPreview from '../components/EventsPreview'
import RegistrationSection from '../components/RegistrationSection'
import WhatsNext from '../components/WhatsNext'
import WhyJoin from '../components/WhyJoin'
import Gallery from '../components/Gallery'
import ReadyToInscribe from '../components/ReadyToInscribe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Team from '../components/Team'

const Home = () => {
  const [videoEnded, setVideoEnded] = useState(false)

  const handleVideoEnd = () => {
    setVideoEnded(true)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcf4d7', position: 'relative' }}>
      <AnimatedBackground />
      <Hero onVideoEnd={handleVideoEnd} />
      <Navbar videoEnded={videoEnded} />
      <About />
        
      <WhatWeDo />
      <WhoWeAre />
      <Domains />
      
      <section id="teams">
               <Leadership />
      </section>

      <TalentSpotlight />
      <TalentTree />
      <EventsPreview />
      <RegistrationSection />
      <WhatsNext />
      <WhyJoin />
      <Gallery />
      <ReadyToInscribe />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

