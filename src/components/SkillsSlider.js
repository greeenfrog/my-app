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
            - the syntax and readability cannot be beaten.
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
          <h3>HTML + CSS + JavaScript</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/html5.svg"
                width="64"
                alt="HTML5"
              />
            </div>
            <div className="icon">
              <img
                src="/images/skills-slider/css3.svg"
                width="64"
                alt="CSS3"
              />
            </div>
            <div className="icon">
              <img
                src="/images/skills-slider/js.png"
                width="64"
                alt="JavaScript"
              />
            </div>
          </div>
          <p>
            Front-end web development using HTML + CSS + JavaScript.<br />
            Created many webpages such as this one.
          </p>
        </div>
        <div className="slide">
          <h3>React.js</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/react.svg"
                width="96"
                alt="React.js"
              />
            </div>
          </div>
          <p>
            Front-end web development using the React JavaScript library.<br />
            Created many webpages such as this one.
          </p>
        </div>
        <div className="slide">
          <h3>Flask<br />(Python library)</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/flask.png"
                width="72"
                alt="Flask"
              />
            </div>
          </div>
          <p>
            Back-end web development using the Flask framework.<br />
            Familiar with building RESTful web APIs.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default SkillsSlider;
