import React from "react";
import "../App.css";
import {Navbar,Nav, Container} from 'react-bootstrap';





function NavbarPage() {

  return (
    

    <div>
    
    <Navbar bg="dark" variant="dark" expand="lg" className="nav-sh">
      <Container>
  <Navbar.Brand href="#home">Covid-19 India</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

  </div>




    );
  
}

export default NavbarPage;