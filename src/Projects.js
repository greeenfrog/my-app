import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypedText from './components/TypedText';
import './Projects.css'

function Projects() {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }}>
            <h2><TypedText strings={["Projects"]} /></h2>
            <p>Here are my projects.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
