import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h2 className='headtext_comorant'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your email adress' />
      <button className='custom__button' type='button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
