import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
  <div>
    <Navbar className="navbar" collapseOnSelect expand="md" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="#">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#about">About Me</Nav.Link>
            <Nav.Link className="nav-link" href="#experience">Experience</Nav.Link>
            <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
            <Nav.Link className="nav-link" href="https://medium.com/@yazihejazi" target="_blank">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
