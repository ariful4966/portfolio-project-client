import React, { useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import SubTitle from '../partials/SubTitle';
import Title from '../partials/Title';
import './Slider.css';




const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const history  = useHistory();

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const handleMoreBtn = (path)=>{
        history.push(path)
    }

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Container>
                    <Row className="sliderItem align-items-center">
                        <Col md={6}>
                            <div className="sliderContent">
                                <Title h2 heading shadow="#fff" >Web Application Development</Title>
                                <SubTitle h4 >Create Using React JS</SubTitle>

                                <p>I'm full stack web developer. I am design any type of website like as Personal, Woo-commerce, Schools, Bussiness and many others. Spacilly I am a web developer. I develop the website with R HTML, CSS, JavaScript, React, Node.js etc. Mostly for my development I use github platform. If you design or develop your website you can call me..</p>
                                <Button style={{background:'#0e3453'}} onClick={()=>handleMoreBtn('web')}>More Project</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="sliderPic">
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3817577-3181531.png" alt="Web Development" />
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
                               
                                <Title h2 heading shadow="#fff" >Mobile Application Development</Title>
                                <SubTitle h4 >UI Design using React Native</SubTitle>
                                <p>
                                    <b>Expertise:</b> React.js, JavaScript, ES6, Fortran Material-UI, SPA, Bootstrap-4, HTML5, CSS3 <br />
                                    <b>Comfortable:</b> Redux.js, Node.js, Express.js, MongoDB, JSON <br />
                                    <b>Familiar:</b> React-Native.js PHP, WordPress, jQuery Plugin, MYSQL , Vue.js, Angular.js<br />
                                </p>
                                <Button style={{background:'#0e3453'}} onClick={()=>handleMoreBtn('mobile')}>See More..</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="sliderPic">
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/application-development-2496182-2107741.png" alt="Mobile App Development" />
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
                                <Title h2 heading shadow="#fff">Backend Server Development</Title>
                                <SubTitle h4 > Using Node JS and Express JS </SubTitle>
                                <p>GIT, Sublime-text 3, Brackets, Visual-Studio Code, Netlify, HiroKu, Firebase, Chrome Dev Tool</p>
                                <Button style={{background:'#0e3453'}} onClick={()=>handleMoreBtn('')}>See More..</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="sliderPic">
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/cryptocurrency-server-2545277-2146162.png" alt="Node Server Development" />
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