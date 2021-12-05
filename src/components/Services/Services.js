import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import server from "../../images/server.png";
import web from "../../images/web.png";
import Paragraph from "../partials/Paragraph";
import Title from "../partials/Title";

const serviceData = [
  {
    title: "Web Design & Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis autem voluptates aut, expedita quibusdam ex. Praesentium earum exercitationem, asperiores eius aliquam sunt dolorem. Quasi quas voluptate velit, obcaecati quidem repudiandae maxime vitae possimus consequuntur tempora esse molestiae, illum, dolor deleniti blanditiis aliquid sequi? At assumenda dignissimos repellat eligendi ad sed?",
    img: `${web}`,
  },
  {
    title: "Mobile App Develoment",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis autem voluptates aut, expedita quibusdam ex. Praesentium earum exercitationem, asperiores eius aliquam sunt dolorem. Quasi quas voluptate velit, obcaecati quidem repudiandae maxime vitae possimus consequuntur tempora esse molestiae, illum, dolor deleniti blanditiis aliquid sequi? At assumenda dignissimos repellat eligendi ad sed?",
    img: `${mobile}`,
  },
  {
    title: "Web & Mobile App Backend",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis autem voluptates aut, expedita quibusdam ex. Praesentium earum exercitationem, asperiores eius aliquam sunt dolorem. Quasi quas voluptate velit, obcaecati quidem repudiandae maxime vitae possimus consequuntur tempora esse molestiae, illum, dolor deleniti blanditiis aliquid sequi? At assumenda dignissimos repellat eligendi ad sed?",
    img: `${server}`,
  },
];

const Services = () => {
  return (
    <div className="service_area">
      <Container>
        <div className="homeHeading">
          <Title heading h2 colorFont="#525c66" >Our Services</Title>
        </div>
        <div className="serviceContent">
          {/* <FcGlobe  /> */}
          <Row>
            {serviceData.map((service, index) => (
              <Col md={4} key={index}>
                  <div className="single_service" style={{textAlign: 'center'}}>
                      <img src={service.img} alt={service.title} />
                      <Title h4 >{service.title}</Title>
                        <Paragraph>{service.description}</Paragraph>
                  </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
