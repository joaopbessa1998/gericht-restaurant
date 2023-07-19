import React from 'react';
import { images } from "../../constants/images"
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
      </div>
      <div className='app__wrapper_img'></div>
    </div>
  )
}
