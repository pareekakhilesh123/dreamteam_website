import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
// import PartnersSection from '../../components/PartnersSection/PartnersSection'
import OurServices from '../../components/OurServices/OurServices'
import StatsSection from '../../components/StatsSection/StatsSection'
import AboutMe from '../../components/AboutMe/AboutMe'
import Testimonials from '../../components/Testimonials/Testimonials'
import CircularOrbit from '../../components/CircularOrbit/CircularOrbit'

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        {/* <PartnersSection /> */}
        <OurServices />
        <StatsSection />
        <AboutMe />
        <Testimonials />
        <CircularOrbit />
      
    </div>
  )
}

export default Home