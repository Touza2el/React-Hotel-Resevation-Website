import React from 'react';
import SectionTitle from '../section-title/SectionTitle';
import './Services.scss';

function Services() {
  return (
    <div className='services-component'>
      <SectionTitle title='services' />
      <div className='container'>
        <div className='services-content'>
          <div className='services-item'>
            <i className='fas fa-wifi'></i>
            <h3>internet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitam Minima
              soluta Expedita
            </p>
          </div>
          <div className='services-item'>
            <i className='fas fa-utensils'></i>
            <h3>restaurant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitam Minima
              soluta Expedita
            </p>
          </div>
          <div className='services-item'>
            <i className='fas fa-shopping-basket'></i>
            <h3>suprette</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitam Minima
              soluta Expedita
            </p>
          </div>
          <div className='services-item'>
            <i className='fas fa-parking'></i>
            <h3>free parking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitam Minima
              soluta Expedita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
