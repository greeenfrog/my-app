import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TypedText from './TypedText';
import ThemeButton from './ThemeButton';
import './Navigation.css'

function Navigation({ brand, isDark, onToggleTheme }) {
  const location = useLocation();
  const [isExpanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState("/#");

  useEffect(() => {
    setActiveKey(location.pathname + (location.hash || "#"));
  }, [location]);

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
        <Navbar.Brand href="/#">
          <img
            src="/images/pfp.png"
            width="48"
            height="48"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Brand href="/#">
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
          <Nav activeKey={activeKey} className="ms-auto">
            <Nav.Link as={HashLink} to="/#" href="/#" className="nav-link">Home</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#about" href="/#about" className="nav-link">About</Nav.Link>
            <Nav.Link as={HashLink} to="/#skills" href="/#skills" className="nav-link">Skills</Nav.Link>
            <Nav.Link as={HashLink} to="/#contact" href="/#contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link as={HashLink} to="/projects#" href="/projects#" className="nav-link">Projects</Nav.Link>
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
                href="https://www.linkedin.com/in/li-jianing"
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
