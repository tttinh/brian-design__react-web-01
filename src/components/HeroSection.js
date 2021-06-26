import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import './HeroSection.css';
import Video from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
