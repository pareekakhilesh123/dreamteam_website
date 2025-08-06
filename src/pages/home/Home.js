import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
// import OurServices from '../../components/OurServices/OurServices';
import StatsSection from '../../components/StatsSection/StatsSection';
import AboutMe from '../../components/AboutMe/AboutMe';
import Testimonials from '../../components/Testimonials/Testimonials';
import CircularOrbit from '../../components/CircularOrbit/CircularOrbit';
import ScrollCubeSection from '../../components/ScrollCubeSection/ScrollCubeSection';
import ClientSection from '../../components/ClientSection/ClientSection';
// import Cubethreed from '../../components/ScrollCubeSection/Cubethreed';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import WhoWEAre from '../../components/WhoWeAre/WhoWEAre';
import FeatureCatalogSection from '../../components/FeatureCatalogSection/FeatureCatalogSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
// import Spline from '@splinetool/react-spline';
import Footer from '../../components/Footer/Footer';
function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ClientSection />
      <ScrollCubeSection />
      
      {/* <OurServices /> */}
      <StatsSection />

      {/* Who We Are */}
     <WhoWEAre />

      <AboutMe />
      <Testimonials />
      {/* <FeatureCatalogSection /> */}
{/* <Spline scene="https://prod.spline.design/TW9m1P6WEQAoANuH/scene.splinecode" /> */}

 
 
 

      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
