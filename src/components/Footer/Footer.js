import { faFacebookF, faGithub, faLinkedinIn, faTwitter, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';



const Footer = () => {

    const [project, setProject] = useState([]);
    const projects = project.slice(0,3);
    const [blog, setBlog] = useState([]);
    const blogs = blog.slice(0,3);
    useEffect(() => {
        fetch('http://localhost:4000/project')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, []);

    useEffect(() => {
        fetch('http://localhost:4000/blog')
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
                            <h4 className="footer_heading">Project</h4>
                            <div className="footer_detail">
                                <ul>
                                    {
                                        projects.map(pro => <li><a href={pro.url} target="_blank">{pro.name}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footer_widget">
                            <h4 className="footer_heading">Blog</h4>
                            <div className="footer_detail">
                                <ul>
                                    {
                                        blogs.map(pro => <li><a href={pro.url} target="_blank">{pro.name}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footer_widget">
                            <h4 className="footer_heading">Social Media</h4>
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