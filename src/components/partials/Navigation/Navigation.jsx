import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import "./Navigation.css";
import Cookies from "universal-cookie";
import decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const cookies = new Cookies();

const Navigation = () => {
  const [user, setUser] = useState();
  const token = cookies.get("ariful");

  useEffect(() => {
    

    if (token) {
      const { name } = decode(token);
      
      setUser(name);
    }
  }, [token]);

 

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
            {
              user  && <Link to="/adminboard"><h3 className="text-success" style={{'fontFamily':"Lobster Two"}}>{user}</h3></Link> 
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
