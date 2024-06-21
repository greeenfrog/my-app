import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navigation';
import TypedText from './TypedText';
import SkillsSlider from './SkillsSlider';
import './App.css';

function App() {
  const name = ["Li Jianing", "李嘉宁"];
  const about = ["Software developer", "CS student @ UoA"]

  return (
    <div className="App">
      <Navigation brand={name} />
      <div id="home">
        <h1><TypedText strings={name} /></h1>
        <h2><TypedText strings={about} /></h2>
        <img
          src="/pfp-round.png"
          width="250"
          height="250"
          alt="Profile picture"
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
            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <SkillsSlider />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="education">
        <h2><TypedText strings={["Education"]} /></h2>
      </div>
      <div id="contact">
        <h2><TypedText strings={["Contact"]} /></h2>
      </div>
    </div>
  );
}

export default App;
