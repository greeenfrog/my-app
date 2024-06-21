import { React, useState } from 'react';
import Slider from 'react-slick';
// python, html+css+js, java, kotlin+android

function SkillsSlider() {
  const settings = {
    dots: true,
    speed: 300,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className='slide'>
          <h3>Python</h3>
        </div>
        <div className='slide'>
          <h3>HTML + CSS + JavaScript</h3>
        </div>
        <div className='slide'>
          <h3>Java</h3>
        </div>
        <div className='slide'>
          <h3>Kotlin + Android</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SkillsSlider;
