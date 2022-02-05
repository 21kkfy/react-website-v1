import React from 'react';
import '../styles/App.css';
import { Button } from './Button';
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
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          MINT AN OTTER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
