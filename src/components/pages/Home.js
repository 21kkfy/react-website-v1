import React from 'react';
//CSS
import '../../styles/App.css';
import "../../styles/mintButton.css";
//Components
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import RoadMap from '../pages/RoadMap';
import Mint from '../pages/Mint';

function Home() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    //https://alvarotrigo.com/blog/css-animations-scroll/
  }
  window.addEventListener("scroll", reveal);
  
  return (
    <>
      <HeroSection />
      <RoadMap />
      <Mint />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
