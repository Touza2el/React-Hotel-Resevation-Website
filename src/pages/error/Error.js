import React from 'react';
import Hero from '../../components/hero/Hero';
import './Error.scss';

function Error() {
  return (
    <div className='error-page'>
      <Hero title='page not found' btnText='return home' link='/' />
    </div>
  );
}

export default Error;
