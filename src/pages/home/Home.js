import React from 'react';
import './Home.scss';
import Hero from '../../components/hero/Hero';
function Home() {
  return (
    <div className='home-page'>
      <Hero title='get comfortable room' btnText='our rooms' link='/rooms' />
    </div>
  );
}

export default Home;
