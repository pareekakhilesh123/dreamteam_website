import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import PartnersSection from '../../components/PartnersSection/PartnersSection'
import OurServices from '../../components/OurServices/OurServices'

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <PartnersSection />
        <OurServices />
        
    </div>
  )
}

export default Home