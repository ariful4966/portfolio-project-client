import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";

// import Aos from 'aos'
// import "aos/dist/aos.css";

const Contact = () => {
  // useEffect(() => {
  //     Aos.init({ duration: 2000 });
  // }, [])

  return (
    <div className="contactPage">
      <Header />
      <div className="section_padding">
        <Container>
          <Row>
            <Col md={4}>
              <h3 className="contactHeading">Contact info</h3>
              <div className="contactInfo">
                <p>
                  <b>+880 1863 934 966</b>
                </p>
                <p>
                  <b>ariful4966@gmail.com</b>
                </p>
                <address>
                  Village:-Bohorkathi, Post: Hostisunda, PS: Wazirpur, Dist:
                  Borisal, Country: Bangladesh
                </address>
              </div>
              <img style={{width: '100%'}} src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-email-service-2974893-2488468.png" alt="" />
            </Col>

            <Col md={1}>
              <div className="verticalBorder">
                <div className="singleBorder"></div>
              </div>
            </Col>
            <Col md={7}>
              <h3 className="contactHeading">Contact By the Message</h3>
              <div className="emailMassage">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
