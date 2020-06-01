import React, {useEffect} from 'react';
import './Contact.css'
import Form from './Form/Form';
import { Container, Row, Col } from 'react-bootstrap';

// import Aos from 'aos'
// import "aos/dist/aos.css";

const Contact = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, [])



    return (
        <div className="contactPage">
            <Container>
                <Row>
                    <Col md={7}>
                        <h3 className="contactHeading">Contact By the Message</h3>
                        <div className="emailMassage">
                            <Form></Form>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="verticalBorder">
                            <div className="singleBorder"></div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h3 className="contactHeading">Contact info</h3>
                        <div className="contactInfo">
                            <p><b>+880 1863 934 966</b></p>
                            <p><b>ariful4966@gmail.com</b></p>
                            <address>
                            Village:-Bohorkathi, Post: Hostisunda, PS: Wazirpur, Dist: Borisal, Country: Bangladesh

                            </address>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;