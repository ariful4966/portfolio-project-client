import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Ariful Islam" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="menuItem" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="menuItem" href="/web">
              Web App
            </Nav.Link>
            <Nav.Link className="menuItem" href="/mobile">
              Mobile App
            </Nav.Link>
            <Nav.Link className="menuItem" href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="menuItem" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="menuItem" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;