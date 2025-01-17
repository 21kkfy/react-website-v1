//React
import React from 'react';
import { Button } from './Button';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//CSS
import '../styles/App.css';
import '../styles/HeroSection.css';

function HeroSection() {
  //
  /*
  <div className='hero-btns'>

      </div>
    <Button
          link="/#0"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          What is an NFT?
        </Button>
        <Button
          link="/#mint"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          MINT AN OTTER <i className='far fa-play-circle' />
        </Button>
  */
  return (
    <div className='hero-container'>
      <video id='hero-background-video' src='videos/ottersocietyweb.webm' type="video/mp4" autoPlay loop muted />
      <h1>Otter Society</h1>
      <p id='hero-section' className='center-text'>Otter Society is an NFT Collection. Developed by Crypto Spectres © 2022</p>
      {/* <div className="flat-horizontal-line gradient-text"></div> */}
    </div>
  );
}

export default HeroSection;
