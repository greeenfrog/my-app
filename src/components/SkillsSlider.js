import React from 'react';
import Slider from 'react-slick';
import './SkillsSlider.css';

function SkillsSlider() {
  const settings = {
    dots: true,
    speed: 300,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide">
          <h3>Python</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/python.svg"
                width="96"
                alt="Python"
              />
            </div>
          </div>
          <p>
            Most proficient programming language (and also favourite)
            - the syntax and readabilty cannot be beaten.
          </p>
        </div>
        <div className="slide">
          <h3>HTML + CSS + JavaScript</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/html5.svg"
                width="72"
                alt="HTML5"
              />
            </div>
            <div className="icon">
              <img
                src="/images/skills-slider/css3.svg"
                width="72"
                alt="CSS3"
              />
            </div>
            <div className="icon">
              <img
                src="/images/skills-slider/js.png"
                width="72"
                alt="JavaScript"
              />
            </div>
          </div>
          <p>
            Experienced with front-end web development
            with HTML + CSS + JS.<br />
            Created many webpages such as this one.
          </p>
        </div>
        <div className="slide">
          <h3>Java</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/java.png"
                width="128"
                alt="Java"
              />
            </div>
          </div>
          <p>
            Experienced with Java syntax and programming concepts.
          </p>
        </div>
        <div className="slide">
          <h3>Kotlin + Android</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/kotlin.png"
                width="96"
                alt="Kotlin"
              />
            </div>
            <div className="icon">
              <img
                src="/images/skills-slider/android.svg"
                width="96"
                alt="Android"
              />
            </div>
          </div>
          <p>
            Experienced with Kotlin syntax and programming concepts.<br />
            Mobile development on Android.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default SkillsSlider;
