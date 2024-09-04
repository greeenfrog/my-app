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
                width="72"
                alt="Python"
              />
            </div>
          </div>
          <div className='text'>
            <p>
              Most proficient programming language (and also favourite)
              - the syntax and readability cannot be beaten.
            </p>
          </div>
        </div>
        <div className="slide">
          <h3>Kotlin + Android</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/kotlin.png"
                width="72"
                alt="Kotlin"
              />
            </div>
            <div className="icon">
              <img
                src="/images/skills-slider/android.svg"
                width="72"
                alt="Android"
              />
            </div>
          </div>
          <div className='text'>
            <p>
              Experienced with Kotlin syntax and programming concepts.<br />
              Mobile development on Android.
            </p>
          </div>
        </div>
        <div className="slide">
          <h3>Java</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/java.png"
                width="96"
                alt="Java"
              />
            </div>
          </div>
          <div className='text'>
            <p>
              Experienced with Java syntax and programming concepts.
            </p>
          </div>
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
          <div className='text'>
            <p>
              Front-end web development using HTML + CSS + JavaScript.<br />
              Created many webpages such as this one.
            </p>
          </div>
        </div>
        <div className="slide">
          <h3>React.js</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/react.svg"
                width="80"
                alt="React.js"
              />
            </div>
          </div>
          <div className='text'>
            <p>
              Front-end web development using the React framework.<br />
              Created many webpages such as this one.
            </p>
          </div>
        </div>
        <div className="slide">
          <h3>Flask<br />(Python framework)</h3>
          <div className="icons">
            <div className="icon">
              <img
                src="/images/skills-slider/flask.png"
                width="72"
                alt="Flask"
              />
            </div>
          </div>
          <div className='text'>
            <p>
              Back-end web development using the Flask framework.<br />
              Familiar with building RESTful web APIs.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SkillsSlider;
