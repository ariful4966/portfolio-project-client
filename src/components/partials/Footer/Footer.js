import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faWeebly
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title";
import "./Footer.css";
import FooterSvg from "./FooterSvg";

const Footer = () => {
  return (
    <>
      <FooterSvg />
      <div className="footer_area section_bg">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer_widget">
                <Title h4 heading footer="footer_heading">
                  Achievement
                </Title>
                <div className="footer_detail">
                  <ul>
                    <li>
                      <a
                        href={
                          "https://drive.google.com/file/d/1euBAHJoumrkxxs76L0p-MunhQeRpVMjO/view?usp=sharing"
                        }
                        target={"_blank"}
                      >
                        Complate React Web Development Course
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          "https://drive.google.com/file/d/1N5bTLyQnoM17gU7AtTtkspZ2y9wIUeda/view?usp=sharing"
                        }
                        target={"_blank"}
                      >
                        Black-Belt of Web Development
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer_widget">
                <Title h4 heading footer="footer_heading">
                  About Website
                </Title>
                <div className="footer_detail">
                  <ul>
                    <li>
                      <a
                        href={
                          "https://github.com/ariful4966/portfolio-project-client"
                        }
                        target={"_blank"}
                      >
                        Client Site Code
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          "https://github.com/ariful4966/portfolio-project-server"
                        }
                        target={"_blank"}
                      >
                        Server Site Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer_widget">
                <Title h4 heading footer="footer_heading">
                  Social Media
                </Title>
                <div className="footer_detail socialMedia">
                  <ul>
                    <li>
                      <a
                        href={"https://www.facebook.com/Md.Ariful.Islam4082"}
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://www.linkedin.com/in/ariful-islam82/"}
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://github.com/ariful4966"}
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://twitter.com/ariful4082"}
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://ariful-islam66.firebaseapp.com/"}
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faWeebly} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="copyWrite">
              All right reserved by <a href="/">Ariful Islam</a>
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
