import { useState } from 'react'
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

const Home = ({ setGlobalVideoEnded }) => {
  const handleVideoEnd = () => {
    setGlobalVideoEnded(true)
  }

  return (
    <div className="home-root snap-container overflow-x-hidden" style={{ position: 'relative' }}>
      <Hero onVideoEnd={handleVideoEnd} />

      <section className="snap-section flex flex-col justify-center">
        <About />
        <WhatWeDo />
      </section>

      <section className="snap-section flex flex-col justify-center">
        <WhoWeAre />
        <Domains />
      </section>

      <section id="teams" className="snap-section flex flex-col justify-center">
        <Leadership />
      </section>

      <section className="snap-section flex flex-col justify-center">
        <TalentSpotlight />
        <TalentTree />
      </section>

      <section className="snap-section flex flex-col justify-center">
        <EventsPreview />
        <RegistrationSection />
      </section>

      <section className="snap-section flex flex-col justify-center">
        <WhatsNext />
        <WhyJoin />
      </section>

      <section className="snap-section flex flex-col justify-center">
        <Gallery />
        <ReadyToInscribe />
      </section>

      <section className="w-full flex flex-col">
        <Contact />
        <Footer />
      </section>

    </div>
  )
}

export default Home

