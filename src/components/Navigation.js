import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TypedText from './TypedText';
import ThemeButton from './ThemeButton';
import './Navigation.css'

function Navigation({ brand, isDark, onToggleTheme }) {
  const [isExpanded, setExpanded] = useState(false);

  function getMenuIcon() {
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
            src={getMenuIcon()}
            width="32"
            height="32"
            alt=""
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey='#home' className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Item id="nav-icons">
              <Nav.Link
                href="https://github.com/greeenfrog"
                target="_blank"
              >
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
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/jianing-li-a12594150/"
                target="_blank"
              >
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
              </Nav.Link>
            </Nav.Item>
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
