import React, { useState } from 'react';


import { Container, Row, Col, Carousel } from 'react-bootstrap';

import admin from '../../images/admin.png';
import node from '../../images/node.png';
import tools from '../../images/Tools.png';
import { render } from 'react-dom';

import './Slider.css';
const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Container>
                    <Row className="sliderItem align-items-center">
                        <Col md={6}>
                            <div className="sliderContent">
                                <h4>Hi! I am</h4>
                                <h2>Ariful Islam</h2>
                                <p>I'm full stack web developer. I am design any type of website like as Personal, Woo-commerce, Schools, Bussiness and many others. Spacilly I am a web developer. I develop the website with R HTML, CSS, JavaScript, React, Node.js etc. Mostly for my development I use github platform. If you design or develop your website you can call me..</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="sliderPic">
                                <img src={admin} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row className="sliderItem align-items-center">
                        <Col md={6}>
                            <div className="sliderContent">
                                <h4>Using Web Development Language</h4>
                                <h2>React Web Developer</h2>
                                <p>
                                    <b>Expertise:</b> React.js, JavaScript, ES6, Fortran Material-UI, SPA, Bootstrap-4, HTML5, CSS3 <br/>
                                    <b>Comfortable:</b> Redux.js, Node.js, Express.js, MongoDB, JSON <br/>
                                    <b>Familiar:</b> React-Native.js PHP, WordPress, jQuery Plugin, MYSQL , Vue.js, Angular.js<br/>
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="sliderPic">
                                <img src={node} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row className="sliderItem align-items-center">
                        <Col md={6}>
                            <div className="sliderContent">
                                <h4> Using for Development</h4>
                                <h2>Web DesignTools</h2>
                                <p>GIT, Sublime-text 3, Brackets, Visual-Studio Code, Netlify, HiroKu, Firebase, Chrome Dev Tool</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="sliderPic">
                                <img src={tools} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}
// render(<ControlledCarousel />);




export default ControlledCarousel;