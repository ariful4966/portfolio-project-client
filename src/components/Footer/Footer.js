import { faFacebookF, faGithub, faLinkedinIn, faTwitter, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../partials/Title';
import './Footer.css';



const Footer = () => {

    const [project, setProject] = useState([]);
    const projects = project.slice(0,3);
    const [blog, setBlog] = useState([]);
    const blogs = blog.slice(0,3);
    useEffect(() => {
        fetch('https://web-portfolio-server.herokuapp.com/project')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, []);

    useEffect(() => {
        fetch('https://web-portfolio-server.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => {
                
                setBlog(data);
            })
    }, []);
    return (
        <div className="footer_area section_bg">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="footer_widget">
                            <Title h4 heading footer="footer_heading" >Project</Title>
                            <div className="footer_detail">
                                <ul>
                                    {
                                        projects.map(pro => <li key={pro._id}><a href={pro.url} rel="_blank" >{pro.name}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footer_widget">
                            <Title h4 heading footer="footer_heading">Blog</Title>
                            <div className="footer_detail">
                                <ul>
                                    {
                                        blogs.map(pro => <li key={pro._id}><a href={pro.url} >{pro.name}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footer_widget">
                            <Title h4 heading footer="footer_heading">Social Media</Title>
                            <div className="footer_detail socialMedia">
                                <ul>
                                    <li><a href="https://www.facebook.com/Md.Ariful.Islam4082" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href=" https://www.linkedin.com/in/ariful-islam82/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="https://github.com/ariful4966" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a href="https://twitter.com/ariful4082" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="https://ariful-islam66.firebaseapp.com/" target="_blank"><FontAwesomeIcon icon={faWeebly} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="copyWrite">All right reserved by <a href="/">Ariful Islam</a></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;