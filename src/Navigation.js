import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TypedText from './TypedText';

function Navigation({ brand }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/pfp-round.png"
            width="48"
            height="48"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <TypedText strings={brand}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="">
              <img
                src="/github.png"
                width="30"
                height="30"
                alt="GitHub"
              />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jianing-li-a12594150/">
            <img
                src="/in-blue.png"
                width="30"
                height="30"
                alt="LinkedIn"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

// about skills education contact
export default Navigation;
