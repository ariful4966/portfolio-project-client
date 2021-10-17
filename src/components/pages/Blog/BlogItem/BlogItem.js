import React from "react";
import { Col, Row } from "react-bootstrap";

const BlogItem = (props) => {
  const { name, about, img, url } = props.blog;
  return (
    <Col md={12} lg={4} ms={6} xl={4} className="mb-4" >
      <div className="singleItem">
        <Row className="align-items-center" >
          <Col md={6}>
            <div className="singleDetail">
              <h4 className="itemHeading">{name}</h4>
              <p>{about}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="singlePic">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default BlogItem;
