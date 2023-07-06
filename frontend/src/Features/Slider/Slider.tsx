/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './Slider.css';

import url1 from './images/1.jpg';
import url2 from './images/2.jpg';
import url3 from './images/3.jpg';
import url4 from './images/4.jpg';
import url5 from './images/5.jpg';

function Slider(): JSX.Element {
  const images = [
    { url: url1 },
    { url: url2 },
    { url: url3 },
    { url: url4 },
    { url: url5 },
  ];
  return (
    <div className="slider">
      <SimpleImageSlider
        width={960}
        height={540}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Slider;
