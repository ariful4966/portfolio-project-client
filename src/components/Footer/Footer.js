import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faGithub, faGooglePlusSquare, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

const Footer = () => {

    const [project, setProject] = useState([]);
    const projects = project.slice(0,3);
    const [blog, setBlog] = useState([]);
    const blogs = blog.slice(0,3);
    useEffect(() => {
        fetch('https://portfolio-server-00.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, []);

    useEffect(() => {
        fetch('https://portfolio-server-00.herokuapp.com/blogs')
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
                                        projects.map(pro => <li><a>{pro.name}</a></li>)
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
                                        blogs.map(pro => <li><a href="#">{pro.name}</a></li>)
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
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;