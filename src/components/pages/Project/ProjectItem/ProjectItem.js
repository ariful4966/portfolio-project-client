import React from "react";
import { Col, Row } from "react-bootstrap";
import Paragraph from "../../../partials/Paragraph";
import Title from "../../../partials/Title";
import './ProjectItem.css';

const ProjectItem = (props) => {
  const { name, img, url, about } = props.project;
  return (
    <Col md={12} lg={6} sm={12}>
      <div className="singleProject">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="singlePic">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="singleDetail">
              <Title h4 className="itemHeading">{name}</Title>
              <Paragraph>{about}</Paragraph>
              <a href={url}> View Website</a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProjectItem;
