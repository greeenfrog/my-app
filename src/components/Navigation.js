import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TypedText from './TypedText';
import ThemeButton from './ThemeButton';

function Navigation({ brand, isDark, onToggleTheme }) {
  return (
    <Navbar
      expand="lg"
      bg={isDark ? "dark" : "light"}
      data-bs-theme={isDark ? "dark" : "light"}
      fixed="top"
      >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/images/pfp.png"
            width="48"
            height="48"
            alt=""
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
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="" target="_blank">
              <div className="nav-icon">
                <img
                  src={
                    isDark ?
                    "/images/navigation/github-white.png" :
                    "/images/navigation/github.png"
                  }
                  width="30"
                  height="30"
                  alt="GitHub"
                  title="GitHub"
                />
              </div>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jianing-li-a12594150/" target="_blank">
              <div className="nav-icon">
                <img
                  src={
                    isDark ?
                    "/images/navigation/in-white.png" :
                    "/images/navigation/in-blue.png"
                  }
                  width="30"
                  height="30"
                  alt="LinkedIn"
                  title="LinkedIn"
                />
              </div>
            </Nav.Link>
            <ThemeButton
              isDark={isDark}
              onToggleTheme={onToggleTheme}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

export default Navigation;
