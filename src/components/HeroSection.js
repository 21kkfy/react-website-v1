//React
import React from 'react';
import { Button } from './Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//CSS
import '../styles/App.css';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../../public/videos/video-1.mp4' autoPlay loop muted />
      <h1>Otter Society</h1>
      <p>An NFT Collection</p>
      <div className='hero-btns'>
        <Button
          link=""
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          What is an NFT?
        </Button>
        <Button
          link="/mint"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          MINT AN OTTER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
