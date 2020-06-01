import React from 'react';
import {Container, Navbar, Nav ,} from 'react-bootstrap';

import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className="header_area section_bg">
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Ariful Islam"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="menuItem" href="/">Home</Nav.Link>
                            <Nav.Link className="menuItem" href="/project">Project</Nav.Link>
                            <Nav.Link className="menuItem" href="/blog">Blog</Nav.Link>
                            <Nav.Link className="menuItem" href="/about">About</Nav.Link>
                            <Nav.Link className="menuItem" href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;