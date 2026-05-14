import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function BasicExample() {
  return (<>
<div class="nav-wrapper">
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"><img src="/images/تنزيل.png" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/explorefoods">Explore Foods</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
            <button className='btn'><Link to="/contact">010-9040-9021</Link></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
 </> );
}

export default BasicExample;
//#