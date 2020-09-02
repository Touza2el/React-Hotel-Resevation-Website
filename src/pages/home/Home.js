import React from 'react';
import './Home.scss';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import NewRooms from '../../components/new-rooms/NewRooms';
function Home() {
  return (
    <div className='home-page'>
      <Hero title='get comfortable room' btnText='our rooms' link='/rooms' />
      <Services />
      <NewRooms />
      <div className='banner-section'>
        <h1>
          get comfortable room <span>with</span> <span>a</span> suitable price
        </h1>
      </div>
      <div className='banner-section second'>
        <h1>enjoy your time </h1>
      </div>
    </div>
  );
}

export default Home;
