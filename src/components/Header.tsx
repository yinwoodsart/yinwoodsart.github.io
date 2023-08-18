import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/images/yinwoods_logo.jpeg';
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    const expand = 'lg';
    //expand={'sm' | 'md' | 'lg' | 'xl' | 'xxl' | false}
  return (
    <div className="header">
        
        <Navbar variant="dark" expand={expand} >
          <Container fluid>
            <Navbar.Brand>
                <div className="header-left">
                    <Link to="/"><img src={logo} className="logo" alt="Yin Woods"></img></Link>
                    <Link to="/home"><span className="title">YIN WOODS / Animator, Printmaker</span></Link>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="my-navbar-toggler"/>
            <Navbar.Offcanvas
              className="my-offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <NavDropdown
                    title="Short"
                    id={`offcanvasNavbarDropdown-expand-${expand}-1`}
                  >
                    <NavDropdown.Item href="/routine">
                        Routine
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/gif">GIF</Nav.Link>
                  <NavDropdown
                    title="Photography"
                    id={`offcanvasNavbarDropdown-expand-${expand}-2`}
                  >
                    <NavDropdown.Item href="/pride">
                        Pride
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/antielab">
                        Antielab
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/london">
                        London
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/supportme">$upport Me</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </div>
  );
}
