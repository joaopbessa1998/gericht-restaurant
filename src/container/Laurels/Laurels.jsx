import React from 'react';
import { images, data } from "../../constants"
import { SubHeading } from "../../components"
import './Laurels.css';

const AwardCard = ({ award: {imgUrl, title, subtitle} }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
)

export default function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app_wrapper_info'>
        <SubHeading title="Awards& Recognition" />
        <h2 className='headtext_cormorant'>Our Laurels</h2>
      <div className='app__laurels_awards'>
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
      </div>
      <div className='app__wrapper-img'>
        <img src={images.laurels} alt='Laurels' />
      </div>
    </div>
  )
}
