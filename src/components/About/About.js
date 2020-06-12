import React from 'react';
import admin from '../../images/arif.png';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className="aboutPage">
            <Container>
                <div className="aboutAdmin">
                    <Row className="align-items-md-center">
                        <Col md={8}>
                            <div className="adminContent">
                                <h2 className="adminName"> Md. Ariful Islam</h2>
                                <h4 className="adminTitle">Web Developer</h4>
                                <p>A technically savvy web developer, who has multiple years of website design expertise behind her. Ariful Islam can be a strong driving force for improving the performance, scalability and reliability of development projects. He has a long track record of creating dynamic, rich and interesting web portals and of providing long term solutions to front-end problems. He is currently looking for a suitable position with a responsible employer who will assist in the development of his career & skills.</p>
                                <a href="https://drive.google.com/uc?export=download&id=1vxbwKMFiWLx4TaXYNbzQl9Gmg-nSndmj" target="_blank">Download CV</a>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="adminPic">
                                <img src={admin} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                <div className="adminSkill">

                    <h3>Programming Skills</h3>
                    <ul>
                        <li>Expertise: React.js, JavaScript, ES6, Fortran Material-UI, SPA, Bootstrap-4, HTML5, CSS3</li>
                        <li>Comfortable: Redux.js, Node.js, Express.js, MongoDB, JSON</li>
                        <li>Familiar: React-Native.js PHP, WordPress, jQuery Plugin, MYSQL</li>
                        <li> Tools: GIT, Sublime-text 3, Brackets, Visual-Studio Code, Netlify, HiroKu, Firebase, Chrome Dev Tool.</li>
                    </ul>

                </div>
            </Container>
        </div>
    );
};

export default About;