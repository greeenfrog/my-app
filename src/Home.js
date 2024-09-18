import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypedText from './components/TypedText';
import SkillsSlider from './components/SkillsSlider';
import ContactForm from './components/ContactForm';
import './Home.css'

function Home({ name, about, isDark }) {
  return (
    <div>
      <div id="home">
        <h1><TypedText strings={name} /></h1>
        <h2><TypedText strings={about} /></h2>
        <img
          src="/images/pfp.png"
          width="250"
          height="250"
          alt=""
        />
      </div>
      <div id="about">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
              <h2><TypedText strings={["About"]} /></h2>
              <p>I am a Computer Science and Mathematics student at the University of Auckland.</p>
              <p>
                With a fascination for the world of technology,
                I wish to innovate and contribute in a meaningful way
                with my expertise in the field of software.
              </p>
              <p>
                Introduced to the Python programming language in high school,
                my passion for developing projects and solving problems
                through code has only grown since.
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
              <h4>Languages:</h4>
              <p>Python, Java, JavaScript, TypeScript, HTML/CSS, Kotlin, SQL</p>
              <h4>Frameworks/libraries:</h4>
              <p>
                React, Next, Flask, Tailwind, Bootstrap, Pandas, Matplotlib, NumPy, PyTorch
              </p>
              <SkillsSlider />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact">
        <Container>
          <Row>
            <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
              <ContactForm isDark={isDark} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
