import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
  <div>
    <Navbar className="navbar" collapseOnSelect expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey="/home">
            <Nav.Link classname="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link classname="nav-link" href="#about">About Me</Nav.Link>
            <Nav.Link classname="nav-link" href="#experience">Experience</Nav.Link>
            <Nav.Link classname="nav-link" href="#projects">Projects</Nav.Link>
            <Nav.Link classname="nav-link" href="#blog">Blog</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
