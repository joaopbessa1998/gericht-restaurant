import React from 'react';
import {FiFacebook, FiTwiiter, FiInstagram} from "react-icons/fi";
import Newsletter from "../../components/Footer/Newsletter"
import FooterOverlay from "../../components/Footer/FooterOverlay"

import './Footer.css';

export default function Footer() {
  return (
    <div className='app__footer section__padding'>
      {/* <FooterOverlay /> */}
      <Newsletter />
    </div>
  )
}
