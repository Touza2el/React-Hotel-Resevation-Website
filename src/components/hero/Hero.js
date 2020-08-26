import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

function Hero(props) {
  const { title, btnText, link } = props;
  return (
    <div className='hero-component'>
      <div className='hero-content'>
        <h1>{title}</h1>
        <p>
          luxurious rooms starting at <span>$229</span>
        </p>
        <button>
          <Link to={link}>{btnText}</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
