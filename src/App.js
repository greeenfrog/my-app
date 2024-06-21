import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './components/Navigation';
import TypedText from './components/TypedText';
import SkillsSlider from './components/SkillsSlider';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const name = ["Li Jianing", "李嘉宁"];
  const about = ["Software developer", "CS student @ UoA"]
  const [isDark, setDark] = useState(false); // false => light, true => dark

  return (
    <div className="App">
      <Navigation
        brand={name}
        isDark={isDark}
        onToggleTheme={() => setDark(!isDark)}
      />
      <div id="home">
        <h1><TypedText strings={name} /></h1>
        <h2><TypedText strings={about} /></h2>
        <img
          src="/pfp-round.png"
          width="250"
          height="250"
          alt=""
        />
      </div>
      <div id="about">
        <Container>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
              <h2><TypedText strings={["About"]} /></h2>
              <p>
                I am a Computer Science student at the University of Auckland.<br />
                With a fascination for the world of technology,
                I wish to innovate and contribute in a meaningful way
                with my expertise in the field of software.<br />
                Introduced to the Python programming language in high school,
                my passion for coding has only grown since.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="skills">
        <h2><TypedText strings={["Skills"]} /></h2>
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
              <SkillsSlider />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact">
        <Container>
          <Row>
            <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
              <ContactForm isDark={isDark} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
