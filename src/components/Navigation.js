import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TypedText from './TypedText';
import ThemeButton from './ThemeButton';
import './Navigation.css'

function getMenuIcon(isDark, isExpanded) {
  if (isDark) {
    return (
      isExpanded ?
      "/images/navigation/cross-yellow.png" :
      "/images/navigation/menu-yellow.png"
    );
  } else {
    return (
      isExpanded ?
      "/images/navigation/cross.png" :
      "/images/navigation/menu.png"
    );
  }
}

function Navigation({ brand, isDark, onToggleTheme }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      bg={isDark ? "dark" : "light"}
      data-bs-theme={isDark ? "dark" : "light"}
      fixed="top"
      onToggle={() => setExpanded(!isExpanded)}
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle">
          <img
            src={getMenuIcon(isDark, isExpanded)}
            width="32"
            height="32"
            alt=""
          />
        </Navbar.Toggle>
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
