import React from 'react';
import { images } from "../../constants"
import { SubHeading } from "../../components"
import './Header.css';

export default function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading
          title="Chase the new flavor"
        />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Sit tellus loboritis sed senectus vivamos molestie. Condimentaium volutpat morbi facilisis quaiam secletristi sapien. Et, penaltibus aliquam amet tellus.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img' />
      </div>
    </div>
  )
}
