import React from 'react';

import {Navbar,Container,Nav}from 'react-bootstrap';
import "../App.css";

import {Link} from 'react-scroll';

function NavbarPage (){

    return (
      
      <div>
    
      <Navbar bg="dark" variant="dark" expand="lg" className="nav-sh">
        <Container>
    <Navbar.Brand href="#/">Covid-19 India</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      
      <Nav.Link href="#/">Home</Nav.Link>
      
      <Nav.Link><Link to="about" smooth={true} duration={2000} >About</Link></Nav.Link>
      <Nav.Link href="#/contact">Contact</Nav.Link>
      
        
      </Nav>
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
    </div>
        
     
    );
  
}

export default NavbarPage;