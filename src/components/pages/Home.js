import React from 'react';
import '../../styles/App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import RoadMap from '../pages/RoadMap';

function Home() {
  return (
    <>
      <HeroSection />
      <RoadMap />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
