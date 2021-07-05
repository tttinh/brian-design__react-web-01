import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <div className='home'>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
