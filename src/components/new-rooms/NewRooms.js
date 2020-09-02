import React from 'react';
import './NewRooms.scss';
import SectionTitle from '../section-title/SectionTitle';

function NewRooms() {
  return (
    <div className='new-rooms-component'>
      <SectionTitle title='new rooms' />
      <div className='container'>
        <div className='new-rooms-content'>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/1.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/2.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/3.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/4.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/5.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/6.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/7.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/8.jpg' alt='room' />
            </div>
          </div>
          <div className='new-rooms-item'>
            <div className='new-rooms-image'>
              <img src='/new-rooms/9.jpg' alt='room' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewRooms;
