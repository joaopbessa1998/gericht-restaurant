import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { images } from "../../constants"
import { SubHeading } from "../../components"
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

export default function Gallery() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading
          title="Instagram"
        />
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans' style={{ color: '#aaa', marginTop: '2rem'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button className='custom__button' type='button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' onKeyUp={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery image' />
              <BsInstagram className='gallery_image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}
