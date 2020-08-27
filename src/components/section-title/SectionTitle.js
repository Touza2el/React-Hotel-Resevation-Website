import React from 'react';
import './SectionTitle.scss';

function SectionTitle(props) {
  const { title } = props;
  return (
    <div className='section-title-component'>
      <h2>{title}</h2>
      <span></span>
    </div>
  );
}

export default SectionTitle;
