import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer-component'>
      <div class='container'>
        <div class='footer-links'>
          <ul>
            <li class='title'>top products</li>
            <li>managed website</li>
            <li>managed reputation</li>
            <li>power tools</li>
            <li>marketing services</li>
          </ul>
          <ul>
            <li class='title'>quick links</li>
            <li>new jobs</li>
            <li>brand assets</li>
            <li>invesor relations</li>
            <li>terms of services</li>
          </ul>
          <ul>
            <li class='title'>features</li>
            <li>our clients</li>
            <li>new products</li>
            <li>location</li>
            <li>privacy policy</li>
          </ul>
          <ul>
            <li class='title'>resources</li>
            <li>guides</li>
            <li>reseach</li>
            <li>experts</li>
            <li>agencies</li>
          </ul>
          <ul>
            <li class='title'>get in touch</li>
            <li>You can trust us. we only send promo offers</li>
            <li class='subscribe'>
              <input type='text' placeholder='Your Email Address' />
              <button>subscribe</button>
            </li>
          </ul>
        </div>
        <div class='footer-info'>
          <p>
            Copyright &copy; 2020 All rights reserved | Created By Touza2el .
          </p>
          <div class='social-media'>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-twitter-square'></i>
            <i class='fab fa-instagram'></i>
            <i class='fab fa-linkedin'></i>
            <i class='fab fa-youtube-square'></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
