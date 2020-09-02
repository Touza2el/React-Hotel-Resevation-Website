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
    </div>
  );
}

export default Home;
